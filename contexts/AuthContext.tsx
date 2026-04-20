"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { auth, users, type GetUserResponse } from "@/lib/api";
import { useRouter } from "next/navigation";

interface AuthState {
  user: GetUserResponse | null;
  permissions: string[];
  roles: { roleID: number; roleName: string }[];
  loading: boolean;
  sessionId: number | null;
}

interface AuthContextValue extends AuthState {
  login: (userName: string, password: string) => Promise<{ requiresMfa?: boolean; mfaTicket?: string; error?: string }>;
  logout: () => Promise<void>;
  hasPermission: (code: string) => boolean;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<AuthState>({
    user: null,
    permissions: [],
    roles: [],
    loading: true,
    sessionId: null,
  });

  const refreshUser = useCallback(async () => {
    try {
      const res = await users.me();
      if (res.errorCode === 200 && res.data) {
        setState((s) => ({ ...s, user: res.data, loading: false }));
      } else {
        setState((s) => ({ ...s, user: null, loading: false }));
      }
    } catch {
      setState((s) => ({ ...s, user: null, loading: false }));
    }
  }, []);

  useEffect(() => {
    // Thử lấy permissions từ cookie fz.permissions (nếu FE set)
    try {
      const raw = document.cookie
        .split(";")
        .find((c) => c.trim().startsWith("fz.permissions="));
      if (raw) {
        const val = decodeURIComponent(raw.split("=")[1]);
        const parsed = JSON.parse(val);
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setState((s) => ({ ...s, permissions: parsed }));
      }
    } catch { /* ignore */ }

    refreshUser();
  }, [refreshUser]);

  const login = useCallback(async (userName: string, password: string) => {
    const res = await auth.staffLogin(userName, password);
    if (res.errorCode !== 200 || !res.data) {
      return { error: res.errorMessage || "Sai tài khoản hoặc mật khẩu" };
    }
    const d = res.data;
    if (d.requiresMfa) {
      return { requiresMfa: true, mfaTicket: d.mfaTicket };
    }
    setState((s) => ({
      ...s,
      permissions: d.permissions ?? [],
      roles: d.roles ?? [],
      sessionId: d.sessionId,
    }));
    await refreshUser();
    return {};
  }, [refreshUser]);

  const logout = useCallback(async () => {
    await auth.logout();
    setState({ user: null, permissions: [], roles: [], loading: false, sessionId: null });
    router.push("/login");
  }, [router]);

  const hasPermission = useCallback(
    (code: string) => state.permissions.includes(code),
    [state.permissions]
  );

  return (
    <AuthContext.Provider value={{ ...state, login, logout, hasPermission, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Building2,
  BellRing,
  Settings,
  LogOut,
  Search,
  Menu,
  X,
  ShieldAlert,
} from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Tổng quan", path: "/" },
  { icon: Users, label: "Tài khoản & Phân quyền", path: "/users" },
  { icon: Building2, label: "Định danh căn hộ", path: "/apartments" },
  { icon: BellRing, label: "Trung tâm thông báo", path: "/notifications" },
  { icon: Settings, label: "Cấu hình hệ thống", path: "/settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#050505] text-zinc-300 overflow-hidden font-sans">
      {isSidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <motion.aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-[#0a0a0a] border-r border-white/5 flex flex-col transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex items-center h-20 px-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              <ShieldAlert className="w-5 h-5 text-black" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-white tracking-wide">
                TOWN<span className="text-amber-500">HUB</span>
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">
                Management System
              </p>
            </div>
          </div>
          <button
            className="ml-auto lg:hidden text-zinc-400 hover:text-white"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
          <div className="mb-6 px-3">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Menu</p>
            <div className="space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.path ||
                  (item.path !== "/" && pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative ${
                      isActive
                        ? "text-amber-400 bg-amber-500/10"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-y-0 left-0 w-1 bg-amber-500 rounded-r-full shadow-[0_0_10px_rgba(251,191,36,0.5)]"
                      />
                    )}
                    <item.icon
                      className={`w-5 h-5 ${
                        isActive
                          ? "text-amber-500"
                          : "group-hover:text-amber-400/70 transition-colors"
                      }`}
                    />
                    <span className="font-medium text-sm">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 mb-3">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop"
              alt="Admin User"
              className="w-10 h-10 rounded-full object-cover border border-amber-500/30"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">Nguyễn Văn A</p>
              <p className="text-xs text-amber-500 font-medium truncate">Super Admin</p>
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
            <LogOut className="w-4 h-4" />
            Đăng xuất
          </button>
        </div>
      </motion.aside>

      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-20 flex items-center justify-between px-6 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-zinc-400 hover:text-white"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="hidden md:flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-96 focus-within:ring-1 focus-within:ring-amber-500/50 focus-within:border-amber-500/50 transition-all">
              <Search className="w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Tìm kiếm tài khoản, căn hộ, thông báo..."
                className="bg-transparent border-none outline-none text-sm text-white w-full placeholder:text-zinc-600"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5">
              <BellRing className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)] animate-pulse" />
            </button>
          </div>
        </header>

        {/* <Outlet /> → children */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
}

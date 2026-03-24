"use client";

import { motion } from "motion/react";
import { ShieldAlert, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation"; // thay window.location.href

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-10">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.3)] mx-auto mb-6">
            <ShieldAlert className="w-8 h-8 text-black" />
          </div>
          <h1 className="text-3xl font-bold text-white tracking-wide mb-2">
            LUX<span className="text-amber-500">RESIDENCE</span>
          </h1>
          <p className="text-sm text-zinc-400 uppercase tracking-widest font-semibold">
            Hệ thống quản lý
          </p>
        </div>

        <div className="bg-[#111] border border-white/5 rounded-3xl p-8 shadow-2xl backdrop-blur-xl">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Tên đăng nhập / ID
              </label>
              <input
                type="text"
                placeholder="VD: admin, M001..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex justify-between">
                Mật khẩu
                <a href="#" className="text-amber-500 hover:text-amber-400 transition-colors">
                  Quên mật khẩu?
                </a>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
              />
            </div>

            <button
              type="button"
              onClick={() => router.push("/")} // thay window.location.href = '/'
              className="w-full px-5 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] transition-all flex items-center justify-center gap-2 text-sm mt-4"
            >
              Đăng Nhập <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-center text-zinc-500 mt-8 font-mono">
            Phiên bản 2.0.1 • 2026
          </p>
        </div>
      </motion.div>
    </div>
  );
}

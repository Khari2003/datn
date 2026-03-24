"use client";
import { motion } from "motion/react";
import { 
  Settings as SettingsIcon,
  Palette,
  Globe,
  Database,
  Lock,
  CreditCard,
  ShieldCheck,
  ToggleRight,
  Server
} from "lucide-react";
import { useState } from "react";

const SETTINGS_SECTIONS = [
  { id: "general", label: "Cấu hình chung", icon: Globe },
  { id: "appearance", label: "Giao diện", icon: Palette },
  { id: "security", label: "Bảo mật & Phân quyền", icon: Lock },
  { id: "payment", label: "Cổng thanh toán", icon: CreditCard },
  { id: "database", label: "Lưu trữ dữ liệu", icon: Database },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#111] border border-white/5 rounded-2xl p-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800 border border-zinc-600 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <SettingsIcon className="w-6 h-6 text-zinc-300" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Cấu Hình <span className="text-zinc-400">Hệ Thống</span></h1>
            <p className="text-sm text-zinc-400">Thiết lập tham số cho toàn bộ dự án TownHub</p>
          </div>
        </div>
        <button className="px-5 py-2.5 bg-white text-black font-semibold rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all flex items-center gap-2 text-sm">
          <ShieldCheck className="w-4 h-4" />
          Lưu Cấu Hình
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Navigation Sidebar */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1 bg-[#111] border border-white/5 rounded-2xl p-4 flex flex-col gap-2"
        >
          <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2 px-2">Danh mục</h3>
          {SETTINGS_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveTab(section.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeTab === section.id
                  ? 'bg-white/10 text-white shadow-sm border border-white/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              <section.icon className={`w-4 h-4 ${activeTab === section.id ? 'text-white' : 'text-zinc-500'}`} />
              {section.label}
            </button>
          ))}
        </motion.div>

        {/* Content Area */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3 bg-[#111] border border-white/5 rounded-2xl p-6"
        >
          {activeTab === 'general' && (
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-200">
              <div>
                <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-zinc-400" />
                  Cấu Hình Chung
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Tên Dự Án</label>
                    <input 
                      type="text" 
                      defaultValue="TownHub"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Mã Dự Án (Bắt buộc)</label>
                    <input 
                      type="text" 
                      defaultValue="LUX_RES_01"
                      disabled
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-500 cursor-not-allowed"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-white/5" />

              <div>
                <h3 className="text-sm font-bold text-white mb-4">Thông tin Ban Quản Lý</h3>
                <div className="grid grid-cols-1 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Email hỗ trợ</label>
                    <input 
                      type="email" 
                      defaultValue="support@TownHub.vn"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Hotline</label>
                    <input 
                      type="text" 
                      defaultValue="1900 1234"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              <hr className="border-white/5" />

              <div>
                <h3 className="text-sm font-bold text-white mb-4">Bảo trì hệ thống</h3>
                <div className="flex items-center justify-between p-4 rounded-xl border border-rose-500/30 bg-rose-500/5">
                  <div className="flex items-center gap-4">
                    <Server className="w-8 h-8 text-rose-500" />
                    <div>
                      <p className="text-sm font-bold text-white">Chế độ Bảo Trì</p>
                      <p className="text-xs text-zinc-400">Tạm dừng truy cập từ ứng dụng cư dân</p>
                    </div>
                  </div>
                  <button className="text-zinc-500 hover:text-white transition-colors">
                    <ToggleRight className="w-8 h-8" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'general' && (
            <div className="h-64 flex flex-col items-center justify-center text-center animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <SettingsIcon className="w-8 h-8 text-zinc-500 animate-spin-slow" style={{ animationDuration: '3s' }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Đang phát triển</h3>
              <p className="text-sm text-zinc-400 max-w-sm">Tính năng này đang được cập nhật trong phiên bản tiếp theo của hệ thống quản lý TownHub.</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
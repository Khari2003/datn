"use client";
import { motion } from "motion/react";
import { 
  BellRing, 
  Send, 
  Mail, 
  MessageSquare,
  Smartphone,
  History,
  CheckCircle2,
  Clock,
  Plus
} from "lucide-react";

const HISTORY_MOCK = [
  { id: 1, title: "Thông báo đóng phí dịch vụ T7/2026", type: "email", status: "Sent", time: "10:30 - Hôm nay", audience: "Tất cả cư dân" },
  { id: 2, title: "Bảo trì thang máy Tòa A", type: "push", status: "Sent", time: "14:15 - Hôm qua", audience: "Cư dân Tòa A" },
  { id: 3, title: "Cảnh báo an ninh khu vực hầm B1", type: "sms", status: "Failed", time: "09:00 - 12/03", audience: "Bảo vệ & BQL" },
  { id: 4, title: "Mời họp Hội nghị nhà chung cư", type: "email", status: "Scheduled", time: "08:00 - Ngày mai", audience: "Chủ hộ" },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-10">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#111] border border-white/5 rounded-2xl p-6"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/20 to-orange-500/20 border border-rose-500/30 flex items-center justify-center shadow-[0_0_15px_rgba(244,63,94,0.2)]">
            <BellRing className="w-6 h-6 text-rose-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Trung Tâm <span className="text-rose-400">Thông Báo</span></h1>
            <p className="text-sm text-zinc-400">Gửi và quản lý chiến dịch thông báo đa kênh (Push, Email, SMS)</p>
          </div>
        </div>
        <button className="px-5 py-2.5 bg-rose-500 hover:bg-rose-400 text-white font-semibold rounded-lg shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all flex items-center gap-2 text-sm">
          <Plus className="w-4 h-4" />
          Tạo Chiến Dịch Mới
        </button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Compose Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 relative overflow-hidden">
            {/* Glow decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/5 blur-3xl rounded-full pointer-events-none" />

            <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-rose-400" />
              Soạn Thông Báo Nhanh
            </h2>

            <form className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Tiêu đề thông báo</label>
                  <input 
                    type="text" 
                    placeholder="VD: Thông báo bảo trì..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Đối tượng nhận</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all appearance-none">
                    <option value="all">Tất cả cư dân</option>
                    <option value="toa_a">Cư dân Tòa A</option>
                    <option value="toa_b">Cư dân Tòa B</option>
                    <option value="bql">Ban Quản Lý</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Kênh gửi</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-rose-500/30 bg-rose-500/10 cursor-pointer transition-all">
                    <Smartphone className="w-5 h-5 text-rose-400" />
                    <span className="text-sm font-medium text-white">Push App</span>
                    <input type="checkbox" defaultChecked className="hidden" />
                    <CheckCircle2 className="w-4 h-4 text-rose-500 ml-2" />
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
                    <Mail className="w-5 h-5 text-zinc-400" />
                    <span className="text-sm font-medium text-zinc-300">Email</span>
                    <input type="checkbox" className="hidden" />
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 cursor-pointer transition-all">
                    <MessageSquare className="w-5 h-5 text-zinc-400" />
                    <span className="text-sm font-medium text-zinc-300">SMS (Có phí)</span>
                    <input type="checkbox" className="hidden" />
                  </label>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Nội dung</label>
                <textarea 
                  rows={4}
                  placeholder="Nhập nội dung thông báo..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/5">
                <button type="button" className="px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                  Lưu Nháp
                </button>
                <button type="button" className="px-5 py-2.5 bg-rose-500 hover:bg-rose-400 text-white font-bold rounded-lg shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all flex items-center gap-2 text-sm">
                  <Send className="w-4 h-4" />
                  Gửi Ngay
                </button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* History Panel */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-1 bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <History className="w-5 h-5 text-zinc-400" />
              Lịch sử gửi
            </h2>
            <button className="text-xs text-rose-400 hover:text-rose-300 transition-colors font-medium">Xem tất cả</button>
          </div>

          <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {HISTORY_MOCK.map((item) => (
              <div key={item.id} className="p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                    item.type === 'email' ? 'bg-blue-500/20 text-blue-400' :
                    item.type === 'push' ? 'bg-rose-500/20 text-rose-400' : 'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    {item.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                    <Clock className="w-3 h-3" />
                    {item.time}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-white mb-2 line-clamp-2 group-hover:text-rose-300 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                  <span className="text-xs text-zinc-500 flex items-center gap-1.5">
                    <UsersIcon className="w-3.5 h-3.5" />
                    {item.audience}
                  </span>
                  <span className={`text-xs font-semibold ${
                    item.status === 'Sent' ? 'text-emerald-500' : 
                    item.status === 'Scheduled' ? 'text-amber-500' : 'text-rose-500'
                  }`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
"use client";

import { motion } from "motion/react";
import {
  Users,
  Building2,
  Wallet,
  AlertTriangle,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Activity,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const statsData = [
  { title: "Tổng Cư Dân", value: "2,845", change: "+12.5%", isIncrease: true, icon: Users, color: "from-blue-500 to-blue-600", shadow: "shadow-blue-500/20" },
  { title: "Căn Hộ Đã Định Danh", value: "1,204", change: "+8.2%", isIncrease: true, icon: Building2, color: "from-emerald-500 to-emerald-600", shadow: "shadow-emerald-500/20" },
  { title: "Doanh Thu Tháng (VNĐ)", value: "8.4B", change: "+24.1%", isIncrease: true, icon: Wallet, color: "from-amber-500 to-amber-600", shadow: "shadow-amber-500/20" },
  { title: "Sự Cố Đang Xử Lý", value: "12", change: "-5.4%", isIncrease: false, icon: AlertTriangle, color: "from-rose-500 to-rose-600", shadow: "shadow-rose-500/20" },
];

const revenueData = [
  { name: "T1", total: 4.2 }, { name: "T2", total: 3.8 }, { name: "T3", total: 5.1 },
  { name: "T4", total: 4.8 }, { name: "T5", total: 6.2 }, { name: "T6", total: 7.4 },
  { name: "T7", total: 8.4 },
];

const incidentData = [
  { name: "Tuần 1", new: 15, resolved: 12 }, { name: "Tuần 2", new: 8, resolved: 10 },
  { name: "Tuần 3", new: 24, resolved: 18 }, { name: "Tuần 4", new: 12, resolved: 15 },
];

const recentActivities = [
  { id: 1, user: "BQL", action: "Đã gửi thông báo phí QL T7/2026", time: "10 phút trước", type: "notification" },
  { id: 2, user: "Kỹ Thuật C", action: "Đã xử lý xong sự cố thang máy Tòa A", time: "1 giờ trước", type: "maintenance" },
  { id: 3, user: "Admin", action: "Phân quyền 'Kế Toán' cho tk KTO01", time: "2 giờ trước", type: "system" },
  { id: 4, user: "Cư dân P1204", action: "Đã thanh toán phí DV qua VNPay", time: "5 giờ trước", type: "payment" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight mb-1">
            Tổng quan <span className="text-amber-500">Hệ thống</span>
          </h1>
          <p className="text-sm text-zinc-400">
            Theo dõi tình hình hoạt động, doanh thu và sự cố trong thời gian thực.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/10 transition-colors">
            Xuất Báo Cáo
          </button>
          <button className="px-4 py-2 bg-amber-500 border border-amber-400/50 rounded-lg text-sm font-bold text-black shadow-[0_0_15px_rgba(251,191,36,0.4)] hover:shadow-[0_0_20px_rgba(251,191,36,0.6)] hover:bg-amber-400 transition-all flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Cập Nhật Live
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative overflow-hidden bg-[#111] border border-white/5 rounded-2xl p-6 group hover:border-white/10 transition-all"
          >
            <div className={`absolute -right-6 -top-6 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity`} />
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg ${stat.shadow}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full ${stat.isIncrease ? "bg-emerald-500/10 text-emerald-400" : "bg-rose-500/10 text-rose-400"}`}>
                {stat.isIncrease ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                {stat.change}
              </div>
            </div>
            <div>
              <p className="text-zinc-400 text-sm font-medium mb-1">{stat.title}</p>
              <h3 className="text-3xl font-bold text-white tracking-tight">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-2 bg-[#111] border border-white/5 rounded-2xl p-6 flex flex-col"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-500" />
                Dòng Tiền (Revenue)
              </h2>
              <p className="text-xs text-zinc-500 mt-1">Tính bằng Tỷ VNĐ</p>
            </div>
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white outline-none focus:ring-1 focus:ring-amber-500">
              <option value="2026">Năm 2026</option>
              <option value="2025">Năm 2025</option>
            </select>
          </div>
          <div className="flex-1 min-h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v}T`} />
                <Tooltip contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", borderRadius: "8px", color: "#fff" }} itemStyle={{ color: "#f59e0b" }} />
                <Area type="monotone" dataKey="total" stroke="#f59e0b" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="space-y-6 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#111] border border-white/5 rounded-2xl p-6"
          >
            <h2 className="text-lg font-semibold text-white mb-6">Thống Kê Sự Cố</h2>
            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={incidentData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis dataKey="name" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip cursor={{ fill: "#27272a", opacity: 0.4 }} contentStyle={{ backgroundColor: "#18181b", borderColor: "#27272a", borderRadius: "8px", color: "#fff" }} />
                  <Bar dataKey="new" name="Mới" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="resolved" name="Đã Xử Lý" fill="#10b981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#111] border border-white/5 rounded-2xl p-6 flex-1"
          >
            <h2 className="text-lg font-semibold text-white mb-6">Hoạt Động Gần Đây</h2>
            <div className="space-y-6">
              {recentActivities.map((act, index) => (
                <div key={act.id} className="relative flex gap-4">
                  {index !== recentActivities.length - 1 && (
                    <div className="absolute left-2 top-6 bottom-[-24px] w-0.5 bg-white/5" />
                  )}
                  <div className={`relative z-10 w-4 h-4 rounded-full mt-1 border-2 border-[#111] ${
                    act.type === "notification" ? "bg-blue-500" :
                    act.type === "maintenance" ? "bg-emerald-500" :
                    act.type === "system" ? "bg-amber-500" : "bg-purple-500"
                  }`} />
                  <div>
                    <p className="text-sm text-white font-medium mb-0.5">{act.user}</p>
                    <p className="text-xs text-zinc-400">{act.action}</p>
                    <p className="text-[10px] text-zinc-500 mt-1 font-mono">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

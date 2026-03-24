"use client";

import { motion } from "motion/react";
import {
  Users as UsersIcon,
  Search,
  Filter,
  Plus,
  MoreVertical,
  Shield,
  ShieldAlert,
  ShieldCheck,
  UserCog,
} from "lucide-react";
import { useState } from "react";

const DUMMY_USERS = [
  { id: "U001", name: "Nguyễn Văn A", email: "admin@luxres.com", role: "Super Admin", status: "Active", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" },
  { id: "U002", name: "Trần Thị B", email: "bql.truong@luxres.com", role: "Trưởng BQL", status: "Active", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" },
  { id: "U003", name: "Lê Văn C", email: "kythuat01@luxres.com", role: "Kỹ Thuật", status: "Active", avatar: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop" },
  { id: "U004", name: "Phạm D", email: "resident.1204@gmail.com", role: "Cư Dân", status: "Pending", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" },
  { id: "U005", name: "Hoàng E", email: "le_tan@luxres.com", role: "Lễ Tân", status: "Inactive", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" },
];

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Super Admin": return <ShieldAlert className="w-4 h-4 text-amber-500" />;
      case "Trưởng BQL": return <ShieldCheck className="w-4 h-4 text-blue-500" />;
      case "Kỹ Thuật": return <UserCog className="w-4 h-4 text-emerald-500" />;
      default: return <Shield className="w-4 h-4 text-zinc-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Pending": return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "Inactive": return "bg-rose-500/10 text-rose-400 border-rose-500/20";
      default: return "bg-zinc-500/10 text-zinc-400 border-zinc-500/20";
    }
  };

  const filtered = DUMMY_USERS.filter(
    (u) =>
      u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#111] p-6 rounded-2xl border border-white/5"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
            <UsersIcon className="w-6 h-6 text-amber-500" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Quản Lý <span className="text-amber-500">Tài Khoản</span>
            </h1>
            <p className="text-sm text-zinc-400 mt-1">Hệ thống phân quyền & danh sách người dùng</p>
          </div>
        </div>
        <button className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-lg shadow-[0_0_15px_rgba(251,191,36,0.3)] transition-all flex items-center gap-2 text-sm">
          <Plus className="w-4 h-4" />
          Thêm Mới
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Tìm kiếm theo Tên, Email, ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#111] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
          />
        </div>
        <button className="px-4 py-3 bg-[#111] border border-white/10 rounded-xl text-zinc-300 hover:text-white hover:border-white/20 transition-all flex items-center gap-2 text-sm font-medium">
          <Filter className="w-4 h-4" />
          Lọc Roles
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-zinc-400 uppercase bg-white/5 border-b border-white/5">
              <tr>
                <th className="px-6 py-4 font-medium tracking-wider">Tài khoản</th>
                <th className="px-6 py-4 font-medium tracking-wider">Phân quyền</th>
                <th className="px-6 py-4 font-medium tracking-wider">Trạng thái</th>
                <th className="px-6 py-4 font-medium tracking-wider">Ngày tạo</th>
                <th className="px-6 py-4 font-medium tracking-wider text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full border border-white/10 object-cover" />
                      <div>
                        <div className="font-semibold text-white group-hover:text-amber-400 transition-colors">{user.name}</div>
                        <div className="text-xs text-zinc-500 font-mono mt-0.5">{user.id} • {user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-zinc-300 bg-white/5 w-max px-3 py-1.5 rounded-lg border border-white/5">
                      {getRoleIcon(user.role)}
                      <span className="font-medium">{user.role}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-400 font-mono">12/10/2025</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-zinc-500 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between text-sm text-zinc-400">
          <div>Hiển thị <span className="text-white font-medium">1-{filtered.length}</span> trong số <span className="text-white font-medium">24</span> kết quả</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 disabled:opacity-50 transition-colors">Trở lại</button>
            <button className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors">Tiếp</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

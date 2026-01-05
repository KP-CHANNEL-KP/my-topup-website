"use client";
import React, { useState } from 'react';
import { User, Wallet, ShoppingBag, ArrowUpCircle, Download, ExternalLink, Calendar } from 'lucide-react';

export default function UserDashboard() {
  // Mock Data for Table (Screenshot ထဲကအတိုင်း)
  const [orders] = useState([
    { id: 'JUVIRA1767449155MQ7', category: 'Mobile Legends Global', service: 'Weekly Diamond Pass', data: '847183506(12365)', price: '5557', date: '2026-01-03 21:05:55', status: 'success' },
    { id: 'JUVIRA17673859453EC', category: 'Telegram Premium', service: 'Telegram Premium 3 Months Link', data: '@ml_ktw', price: '45500', date: '2026-01-02 21:59:05', status: 'success' },
    { id: 'JUVIRA1767385800308', category: 'Topup Balance', service: 'Balance Ks 50000', data: '50000', price: '50000', date: '2026-01-02 21:56:40', status: 'success' },
  ]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Profile Header Section */}
        <div className="flex flex-col items-center space-y-4 py-8">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full border-4 border-blue-500/30 overflow-hidden bg-[#111] flex items-center justify-center">
              <User className="w-16 h-16 text-gray-700" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-500 transition-all pointer-events-none shadow-[0_0_30px_rgba(59,130,246,0.2)]"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button className="bg-blue-500 text-white px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">Choose Picture</button>
            <button className="bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
               Upload Avatar
            </button>
          </div>
        </div>

        {/* Stats Cards (Balance, Purchases, Topup) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-gray-800 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-[#111] p-8 text-center space-y-1">
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Balance</p>
            <p className="text-xl font-black text-white italic">Ks 14,297</p>
          </div>
          <div className="bg-[#111] p-8 text-center space-y-1">
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Purchases</p>
            <p className="text-xl font-black text-white italic">Ks 95,003</p>
          </div>
          <div className="bg-[#111] p-8 text-center space-y-1">
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Top Up</p>
            <p className="text-xl font-black text-white italic">Ks 109,300</p>
          </div>
        </div>

        {/* User Status Bar */}
        <div className="flex items-center gap-4 py-4 px-2">
          <h2 className="text-xl font-black italic">KP <span className="text-gray-600 font-normal">/ Member</span></h2>
          <span className="bg-red-500 text-white text-[9px] font-black px-3 py-1 rounded flex items-center gap-1 uppercase tracking-tighter">
            <ArrowUpCircle className="w-3 h-3" /> Upgrade
          </span>
        </div>

        <button className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-6 py-4 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-emerald-500 hover:text-black transition-all">
          <Wallet className="w-4 h-4" /> Top Up Balance
        </button>

        {/* Order History Table Section */}
        <section className="bg-[#111] rounded-[2.5rem] border border-gray-800 overflow-hidden shadow-2xl">
          <div className="p-8 border-b border-gray-800 flex justify-between items-center bg-black/20">
            <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-3">
               <ShoppingBag className="w-5 h-5 text-blue-500" /> Order History
            </h3>
          </div>

          <div className="p-8 space-y-6">
            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input type="text" placeholder="01/05/2026" className="w-full bg-black border border-gray-800 p-4 pl-12 rounded-xl text-xs font-bold focus:border-blue-500 outline-none" />
              </div>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input type="text" placeholder="01/05/2026" className="w-full bg-black border border-gray-800 p-4 pl-12 rounded-xl text-xs font-bold focus:border-blue-500 outline-none" />
              </div>
              <button className="bg-emerald-600 text-white rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20">
                <Download className="w-4 h-4" /> Download Excel
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-2xl border border-gray-800">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-black/50 text-[9px] font-black uppercase tracking-widest text-gray-500 border-b border-gray-800">
                    <th className="px-6 py-5">ID</th>
                    <th className="px-6 py-5">Category</th>
                    <th className="px-6 py-5">Service</th>
                    <th className="px-6 py-5">Data</th>
                    <th className="px-6 py-5">Price</th>
                    <th className="px-6 py-5">Date</th>
                    <th className="px-6 py-5 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] font-medium text-gray-300">
                  {orders.map((order, idx) => (
                    <tr key={idx} className="border-b border-gray-900 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-5">
                         <span className="flex items-center gap-2 text-blue-400 font-bold">
                           {order.id} <ExternalLink className="w-3 h-3" />
                         </span>
                      </td>
                      <td className="px-6 py-5 uppercase font-bold text-gray-400">{order.category}</td>
                      <td className="px-6 py-5 font-bold">{order.service}</td>
                      <td className="px-6 py-5 font-mono text-gray-400">{order.data}</td>
                      <td className="px-6 py-5 font-black italic">{order.price}</td>
                      <td className="px-6 py-5 text-gray-500">{order.date}</td>
                      <td className="px-6 py-5 text-right">
                        <span className="bg-emerald-500/20 text-emerald-500 px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-widest border border-emerald-500/20">
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
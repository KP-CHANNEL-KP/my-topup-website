"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // Link ကို import လုပ်ဖို့ မမေ့ပါနဲ့
import { User, Wallet, ShoppingBag, ArrowUpCircle, Download, ExternalLink, Calendar } from 'lucide-react';

export default function UserDashboard() {
  // Screenshot ထဲကအတိုင်း Mock Data များ
  const [orders] = useState([
    { id: 'JUVIRA1767449155MQ7', category: 'Mobile Legends Global', service: 'Weekly Diamond Pass', data: '847183506(12365)', price: '5557', date: '2026-01-03 21:05:55', status: 'success' },
    { id: 'JUVIRA17673859453EC', category: 'Telegram Premium', service: 'Telegram Premium 3 Months Link', data: '@ml_ktw', price: '45500', date: '2026-01-02 21:59:05', status: 'success' },
    { id: 'JUVIRA1767385800308', category: 'Topup Balance', service: 'Balance Ks 50000', data: '50000', price: '50000', date: '2026-01-02 21:56:40', status: 'success' },
  ]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center space-y-4 py-8">
          <div className="w-32 h-32 rounded-full border-4 border-blue-500/30 bg-[#111] flex items-center justify-center overflow-hidden">
             <User className="w-16 h-16 text-gray-700" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <button className="bg-blue-500 text-white px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest">Choose Picture</button>
            <button className="bg-[#00ffa3]/20 text-[#00ffa3] border border-[#00ffa3]/30 px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
               Upload Avatar
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-800 border border-gray-800 rounded-3xl overflow-hidden">
          <div className="bg-[#111] p-8 text-center"><p className="text-[10px] text-gray-500 font-black uppercase">Balance</p><p className="text-xl font-black italic">Ks 14,297</p></div>
          <div className="bg-[#111] p-8 text-center"><p className="text-[10px] text-gray-500 font-black uppercase">Purchases</p><p className="text-xl font-black italic">Ks 95,003</p></div>
          <div className="bg-[#111] p-8 text-center"><p className="text-[10px] text-gray-500 font-black uppercase">Top Up</p><p className="text-xl font-black italic">Ks 109,300</p></div>
        </div>

        <div className="flex items-center gap-4 py-4">
          <h2 className="text-xl font-black italic uppercase">KP <span className="text-gray-600 font-normal">/ Member</span></h2>
          <span className="bg-red-500 text-white text-[9px] font-black px-3 py-1 rounded flex items-center gap-1 uppercase tracking-tighter cursor-pointer">
            <ArrowUpCircle className="w-3 h-3" /> Upgrade
          </span>
        </div>

        {/* TOP UP BALANCE BUTTON (ပြင်ဆင်ပြီးသား အပိုင်း) */}
        <Link href="/user/topup">
          <button className="flex items-center gap-3 px-8 py-4 bg-[#00ffa3]/10 border border-[#00ffa3]/30 text-[#00ffa3] rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-[#00ffa3] hover:text-black transition-all group active:scale-95 shadow-lg shadow-[#00ffa3]/10">
            <Wallet className="w-4 h-4 group-hover:scale-110 transition-transform" />
            TOP UP BALANCE
          </button>
        </Link>

        {/* Order History Table */}
        <section className="bg-[#111] rounded-[2.5rem] border border-gray-800 overflow-hidden shadow-2xl mt-10">
          <div className="p-8 border-b border-gray-800 flex items-center justify-between">
            <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-blue-500" /> Order History
            </h3>
          </div>
          <div className="p-8">
            {/* ... (Table အပိုင်းက အရင်အတိုင်းပဲမို့ ကုဒ်မရှည်အောင် ချန်လှပ်ထားပါမယ်) ... */}
            <div className="text-center text-xs text-gray-600 uppercase font-black tracking-widest py-10">
              Scroll down to see transaction logs
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
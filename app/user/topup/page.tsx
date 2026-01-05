"use client";
import React, { useState } from 'react';
import { Wallet, Smartphone, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function TopupPage() {
  const [amount, setAmount] = useState('5000');
  const [method, setMethod] = useState('kpay');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-6 bg-emerald-400 rounded-full"></div>
          <h1 className="text-xl font-black uppercase tracking-widest italic">Top Up Balance</h1>
        </div>

        <div className="bg-[#111] rounded-[2rem] border border-gray-800 p-8 space-y-8 shadow-2xl">
          {/* Amount Input */}
          <div className="space-y-4">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Amount</label>
            <div className="relative">
              <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-sm">Ks</div>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-black border border-gray-800 p-5 pl-14 rounded-2xl text-sm font-black outline-none focus:border-emerald-500 transition-all"
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
              <Smartphone className="w-3 h-3" /> E-Wallet
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* KBZ Pay */}
              <div 
                onClick={() => setMethod('kpay')}
                className={`cursor-pointer p-1 rounded-2xl transition-all ${method === 'kpay' ? 'bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.2)]' : 'bg-gray-800'}`}
              >
                <div className="bg-[#181818] p-4 rounded-[calc(1rem+2px)] flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img src="/kbzpay-logo.png" className="w-10 h-10 rounded-lg object-contain bg-white p-1" alt="KPay" />
                    <span className="text-[11px] font-black uppercase">KBZ Pay</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">Ks {Number(amount).toLocaleString()}</span>
                </div>
              </div>

              {/* Wave Money */}
              <div 
                onClick={() => setMethod('wave')}
                className={`cursor-pointer p-1 rounded-2xl transition-all ${method === 'wave' ? 'bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.2)]' : 'bg-gray-800'}`}
              >
                <div className="bg-[#181818] p-4 rounded-[calc(1rem+2px)] flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <img src="/wave-logo.png" className="w-10 h-10 rounded-lg object-contain bg-white p-1" alt="Wave" />
                    <span className="text-[11px] font-black uppercase">Wave Money</span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-400">Ks {Number(amount).toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          <Link href={`/user/invoice?amount=${amount}&method=${method}`}>
            <button className="w-full mt-4 bg-emerald-500 hover:bg-emerald-400 text-black py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2">
              <Wallet className="w-4 h-4" /> Top Up Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
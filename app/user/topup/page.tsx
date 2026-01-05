"use client";
import React, { useState } from 'react';
import { Wallet, Smartphone } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Navigation အတွက် သုံးမယ်

export default function TopupPage() {
  const [amount, setAmount] = useState('5000');
  const [method, setMethod] = useState('kpay');
  const router = useRouter(); // Router ကို Declare လုပ်မယ်

  // ခလုပ်နှိပ်လိုက်ရင် Invoice Page ကို သွားမယ့် Function
  const handleTopup = () => {
    // ဥပမာ - /user/invoice ဆိုတဲ့ page ကို သွားခိုင်းတာပါ
    router.push(`/user/invoice?amount=${amount}&method=${method}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-6 bg-emerald-400 rounded-full shadow-[0_0_10px_#34d399]"></div>
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
                className="w-full bg-black border border-gray-800 p-5 pl-14 rounded-2xl text-sm font-black outline-none focus:border-emerald-500 transition-all text-emerald-400"
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div className="space-y-4">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1 flex items-center gap-2">
              <Smartphone className="w-3 h-3" /> Select E-Wallet
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* KBZ Pay */}
              <div 
                onClick={() => setMethod('kpay')}
                className={`cursor-pointer p-0.5 rounded-2xl transition-all duration-300 ${method === 'kpay' ? 'bg-emerald-400' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                <div className="bg-[#111] p-4 rounded-[calc(1rem+2px)] flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                       <span className="text-blue-600 font-black text-[8px]">KPAY</span>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider">KBZ Pay</span>
                  </div>
                  {method === 'kpay' && <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>}
                </div>
              </div>

              {/* Wave Money */}
              <div 
                onClick={() => setMethod('wave')}
                className={`cursor-pointer p-0.5 rounded-2xl transition-all duration-300 ${method === 'wave' ? 'bg-emerald-400' : 'bg-gray-800 hover:bg-gray-700'}`}
              >
                <div className="bg-[#111] p-4 rounded-[calc(1rem+2px)] flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center p-1">
                       <span className="text-red-600 font-black text-[8px]">WAVE</span>
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider">Wave Money</span>
                  </div>
                  {method === 'wave' && <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>}
                </div>
              </div>
            </div>
          </div>

          {/* Top Up Button - အခု အလုပ်လုပ်ပါပြီ */}
          <button 
            onClick={handleTopup}
            className="w-full bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-black py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(52,211,153,0.15)]"
          >
            <Wallet className="w-4 h-4" /> Top Up Now
          </button>
        </div>
      </div>
    </div>
  );
}
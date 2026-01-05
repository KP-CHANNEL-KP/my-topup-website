"use client";
import React, { useState, Suspense } from 'react';
import Link from 'next/link';

// Telegram Premium အစီအစဉ်များ
const telegramPlans = [
  { id: 1, name: 'Premium 3 Months', type: 'Gift Link', price: '45,500 Ks' },
  { id: 2, name: 'Premium 6 Months', type: 'Gift Link', price: '82,500 Ks' },
  { id: 3, name: 'Premium 1 Year', type: 'Gift Link', price: '155,000 Ks' },
];

function TelegramOrderContent() {
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-24">
      {/* 1. Header Banner - Juvira Style */}
      <div className="relative h-48 rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-[#000]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-50"></div>
        <div className="absolute inset-0 p-8 flex items-center gap-6">
          <img 
            src="/telegram.png" 
            className="w-24 h-24 rounded-[2rem] shadow-[0_0_30px_rgba(34,158,217,0.3)] border-2 border-blue-500/30" 
            alt="Telegram Logo" 
          />
          <div>
            <h1 className="text-2xl font-black italic uppercase text-white tracking-tighter">Telegram Premium</h1>
            <p className="text-[10px] text-blue-400 font-black flex items-center gap-1 uppercase tracking-widest mt-1">
              <span className="bg-blue-500 text-white px-1.5 py-0.5 rounded-md text-[8px]">✓</span> Instant Gift Plan
            </p>
          </div>
        </div>
      </div>

      {/* 2. Fill Data Section */}
      <section className="bg-[#111] rounded-[2.5rem] border border-gray-800 overflow-hidden shadow-xl">
        <div className="bg-[#1a1a1a] px-8 py-4 border-b border-gray-800 flex items-center gap-3">
          <span className="bg-blue-500 text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black italic">1</span>
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-400">Fill Username</h2>
        </div>
        <div className="p-8">
          <label className="text-[9px] text-gray-500 font-black uppercase mb-3 block ml-1 tracking-widest">Telegram Username (@username)</label>
          <input 
            type="text" 
            placeholder="e.g. @kptopup" 
            className="w-full bg-black p-5 rounded-2xl border border-gray-800 outline-none focus:border-blue-500 text-sm font-bold transition-all text-blue-100" 
          />
        </div>
      </section>

      {/* 3. Select Nominal / Plan */}
      <section className="bg-[#111] rounded-[2.5rem] border border-gray-800 overflow-hidden shadow-xl">
        <div className="bg-[#1a1a1a] px-8 py-4 border-b border-gray-800 flex items-center gap-3">
          <span className="bg-blue-500 text-white w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black italic">2</span>
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-blue-400">Select Gift Plan</h2>
        </div>
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {telegramPlans.map((plan) => (
            <div 
              key={plan.id} 
              onClick={() => setSelectedPlan(plan)}
              className={`group p-6 rounded-[2rem] border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                selectedPlan?.id === plan.id 
                ? 'border-blue-500 bg-blue-500/10 scale-[0.98]' 
                : 'border-gray-800 bg-black hover:border-gray-700'
              }`}
            >
              <div className="relative z-10">
                <div className="text-[13px] font-black group-hover:text-blue-400 transition-colors mb-1">{plan.name}</div>
                <div className="text-[8px] text-gray-500 font-bold mb-4 uppercase tracking-widest">{plan.type}</div>
                <div className="text-[12px] text-blue-500 font-black italic">{plan.price}</div>
              </div>
              {selectedPlan?.id === plan.id && (
                 <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_15px_#3b82f6]"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Buy Floating Bar */}
      {selectedPlan && (
        <div className="fixed bottom-6 left-6 right-6 max-w-2xl mx-auto bg-black/90 backdrop-blur-2xl border border-blue-500/30 p-5 rounded-[3rem] flex justify-between items-center shadow-[0_-20px_50px_rgba(0,0,0,0.6)] z-50 animate-in fade-in slide-in-from-bottom-8">
           <div className="ml-5">
              <p className="text-[9px] font-black text-blue-400 uppercase tracking-[0.2em]">Total Amount</p>
              <p className="text-xl font-black italic">{selectedPlan.price}</p>
           </div>
           <button className="bg-blue-500 text-white px-12 py-5 rounded-[2.2rem] font-black text-xs uppercase tracking-widest hover:bg-blue-400 active:scale-95 transition-all shadow-[0_10px_30px_rgba(59,130,246,0.3)]">
             Buy Now
           </button>
        </div>
      )}
    </div>
  );
}

export default function TelegramOrderPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 pt-12">
      <Suspense fallback={<div className="text-center py-20 text-blue-500 font-black animate-pulse uppercase tracking-widest">Securing Connection...</div>}>
        <TelegramOrderContent />
      </Suspense>
    </div>
  );
}
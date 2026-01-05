"use client";
import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// PUBG UC Packages ဒေတာများ
const pubgPackages = [
  { id: 1, amt: '60 UC', bonus: 'Instant Delivery', price: '3,500 Ks' },
  { id: 2, amt: '325 UC', bonus: 'Popular Choice', price: '17,800 Ks' },
  { id: 3, amt: '660 UC', bonus: 'Best Value', price: '35,000 Ks' },
  { id: 4, amt: '1800 UC', bonus: 'Premium Pack', price: '88,000 Ks' },
  { id: 5, amt: '3850 UC', bonus: 'Epic Pack', price: '175,000 Ks' },
  { id: 6, amt: '8100 UC', bonus: 'Legendary Pack', price: '350,000 Ks' },
];

function PubgOrderContent() {
  const [selectedPkg, setSelectedPkg] = useState<any>(null);

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-20">
      {/* 1. Header Banner */}
      <div className="relative h-44 rounded-[2rem] overflow-hidden border border-gray-800 shadow-2xl">
        <img src="/pubg-banner.png" className="w-full h-full object-cover opacity-60" alt="PUBG Banner" />
        <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent">
          <div className="flex items-center gap-4">
            <img src="/pubg-logo.png" className="w-16 h-16 rounded-2xl border-2 border-yellow-500 shadow-lg" alt="PUBG Logo" />
            <div>
              <h1 className="text-2xl font-black italic uppercase text-white tracking-tighter">PUBG MOBILE UC</h1>
              <p className="text-[10px] text-yellow-500 font-black flex items-center gap-1 uppercase tracking-widest">
                <span className="bg-yellow-500 text-black px-1 rounded-sm">✓</span> Official Topup
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* 2. Fill Data Section */}
        <section className="bg-[#111] rounded-[2rem] border border-gray-800 overflow-hidden shadow-xl">
          <div className="bg-[#1a1a1a] px-6 py-3 border-b border-gray-800 flex items-center gap-3">
            <span className="bg-yellow-500 text-black w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black italic">1</span>
            <h2 className="text-[11px] font-black uppercase tracking-widest text-yellow-500">Player Information</h2>
          </div>
          <div className="p-6">
            <label className="text-[9px] text-gray-500 font-black uppercase mb-2 block ml-1">Enter Character ID</label>
            <input 
              type="number" 
              placeholder="e.g. 5123456789" 
              className="w-full bg-black p-5 rounded-2xl border border-gray-800 outline-none focus:border-yellow-500 text-sm font-bold transition-all" 
            />
          </div>
        </section>

        {/* 3. Select UC Nominal */}
        <section className="bg-[#111] rounded-[2rem] border border-gray-800 overflow-hidden shadow-xl">
          <div className="bg-[#1a1a1a] px-6 py-3 border-b border-gray-800 flex items-center gap-3">
            <span className="bg-yellow-500 text-black w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black italic">2</span>
            <h2 className="text-[11px] font-black uppercase tracking-widest text-yellow-500">Select UC Amount</h2>
          </div>
          <div className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {pubgPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                onClick={() => setSelectedPkg(pkg)}
                className={`group p-5 rounded-3xl border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  selectedPkg?.id === pkg.id 
                  ? 'border-yellow-500 bg-yellow-500/10 scale-[0.98]' 
                  : 'border-gray-800 bg-black hover:border-gray-600'
                }`}
              >
                <div className="relative z-10">
                  <div className="text-[12px] font-black group-hover:text-yellow-500 transition-colors">{pkg.amt}</div>
                  <div className="text-[8px] text-gray-500 font-bold mb-3 uppercase tracking-tighter">{pkg.bonus}</div>
                  <div className="text-[11px] text-yellow-500 font-black">{pkg.price}</div>
                </div>
                {selectedPkg?.id === pkg.id && (
                   <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_10px_#eab308]"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 4. Contact Details */}
        <section className="bg-[#111] rounded-[2rem] border border-gray-800 overflow-hidden shadow-xl">
          <div className="bg-[#1a1a1a] px-6 py-3 border-b border-gray-800 flex items-center gap-3">
            <span className="bg-yellow-500 text-black w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black italic">3</span>
            <h2 className="text-[11px] font-black uppercase tracking-widest text-yellow-500">Contact Details</h2>
          </div>
          <div className="p-6">
            <label className="text-[9px] text-gray-500 font-black uppercase mb-2 block ml-1">WhatsApp Phone Number</label>
            <input 
              type="tel" 
              placeholder="09xxxxxxxxx" 
              className="w-full bg-black p-5 rounded-2xl border border-gray-800 outline-none focus:border-yellow-500 text-sm font-bold transition-all" 
            />
          </div>
        </section>

        {/* Buy Floating Bar */}
        {selectedPkg && (
          <div className="fixed bottom-6 left-6 right-6 max-w-2xl mx-auto bg-black/80 backdrop-blur-xl border border-yellow-500/30 p-4 rounded-[2.5rem] flex justify-between items-center shadow-[0_-20px_40px_rgba(0,0,0,0.5)] z-50 animate-in fade-in slide-in-from-bottom-4">
             <div className="ml-4">
                <p className="text-[9px] font-black text-yellow-500 uppercase tracking-widest">Total Payment</p>
                <p className="text-lg font-black">{selectedPkg.price}</p>
             </div>
             <button className="bg-yellow-500 text-black px-10 py-4 rounded-[2rem] font-black text-xs uppercase tracking-tighter hover:bg-yellow-400 active:scale-95 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)]">
               Buy Now
             </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PubgOrderPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 pt-10">
      <Suspense fallback={<div className="text-center text-xs font-black animate-pulse text-yellow-500 uppercase">Loading Battlegrounds...</div>}>
        <PubgOrderContent />
      </Suspense>
    </div>
  );
}
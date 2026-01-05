"use client";
import React, { useState, Suspense } from 'react';
import Link from 'next/link';

// Capcut Pro Packages
const capcutPackages = [
  { id: 1, name: 'Capcut Pro 7 Day', desc: 'Private Account', price: '2,850 Ks' },
  { id: 2, name: 'Capcut Pro 1 Month', desc: 'Account 1 Device', price: '8,000 Ks' },
  { id: 3, name: 'Capcut Pro 1 Year', desc: 'Full Warranty', price: '85,000 Ks' },
];

function CapcutOrderContent() {
  const [selectedPkg, setSelectedPkg] = useState<any>(null);

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-24">
      {/* 1. Header Banner */}
      <div className="relative h-48 rounded-[2.5rem] overflow-hidden border border-gray-800 shadow-2xl bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-black opacity-50"></div>
        <div className="absolute inset-0 p-8 flex items-center gap-6">
          <img 
            src="/capcut.png" 
            className="w-24 h-24 rounded-[2rem] shadow-[0_0_30px_rgba(255,255,255,0.1)] border border-gray-700" 
            alt="Capcut Logo" 
          />
          <div>
            <h1 className="text-2xl font-black italic uppercase text-white tracking-tighter">Capcut Pro</h1>
            <p className="text-[10px] text-gray-400 font-black flex items-center gap-1 uppercase tracking-widest mt-1">
              <span className="bg-white text-black px-1.5 py-0.5 rounded-md text-[8px]">✓</span> Verified Service
            </p>
          </div>
        </div>
      </div>

      {/* 2. Fill Data Section */}
      <section className="bg-[#111] rounded-[2.5rem] border border-gray-800 overflow-hidden shadow-xl">
        <div className="bg-[#1a1a1a] px-8 py-4 border-b border-gray-800 flex items-center gap-3">
          <span className="bg-white text-black w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black italic">1</span>
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-300">Fill Information</h2>
        </div>
        <div className="p-8">
          <label className="text-[9px] text-gray-500 font-black uppercase mb-3 block ml-1 tracking-widest">Enter Phone Number / Email</label>
          <input 
            type="text" 
            placeholder="e.g. 09xxxxxxxxx" 
            className="w-full bg-black p-5 rounded-2xl border border-gray-800 outline-none focus:border-white transition-all text-white" 
          />
        </div>
      </section>

      {/* 3. Select Nominal */}
      <section className="bg-[#111] rounded-[2.5rem] border border-gray-800 overflow-hidden shadow-xl">
        <div className="bg-[#1a1a1a] px-8 py-4 border-b border-gray-800 flex items-center gap-3">
          <span className="bg-white text-black w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black italic">2</span>
          <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-300">Select Package</h2>
        </div>
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {capcutPackages.map((pkg) => (
            <div 
              key={pkg.id} 
              onClick={() => setSelectedPkg(pkg)}
              className={`group p-6 rounded-[2rem] border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                selectedPkg?.id === pkg.id 
                ? 'border-white bg-white/5 scale-[0.98]' 
                : 'border-gray-800 bg-black hover:border-gray-600'
              }`}
            >
              <div className="relative z-10">
                <div className="text-[13px] font-black group-hover:text-white transition-colors mb-1">{pkg.name}</div>
                <div className="text-[8px] text-gray-500 font-bold mb-4 uppercase tracking-widest">{pkg.desc}</div>
                <div className="text-[12px] text-white font-black italic">{pkg.price}</div>
              </div>
              {selectedPkg?.id === pkg.id && (
                 <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Buy Floating Bar */}
      {selectedPkg && (
        <div className="fixed bottom-6 left-6 right-6 max-w-2xl mx-auto bg-black/90 backdrop-blur-2xl border border-white/10 p-5 rounded-[3rem] flex justify-between items-center shadow-[0_-20px_50px_rgba(0,0,0,0.8)] z-50 animate-in fade-in slide-in-from-bottom-8">
           <div className="ml-5">
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em]">Total Payment</p>
              <p className="text-xl font-black italic">{selectedPkg.price}</p>
           </div>
           <button className="bg-white text-black px-12 py-5 rounded-[2.2rem] font-black text-xs uppercase tracking-widest hover:bg-gray-200 active:scale-95 transition-all shadow-lg">
             Order Now
           </button>
        </div>
      )}
    </div>
  );
}

export default function CapcutOrderPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 pt-12">
      <Suspense fallback={<div className="text-center py-20 text-gray-500 font-black animate-pulse uppercase tracking-widest">Loading Capcut...</div>}>
        <CapcutOrderContent />
      </Suspense>
    </div>
  );
}
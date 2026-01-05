"use client";
import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const serverData: any = {
  indo: { name: "MLBB INDONESIA", packages: [
    { id: 1, amt: '86 Diamonds', bonus: '(78 + 8 Bonus)', price: '4,598 Ks' },
    { id: 2, amt: '172 Diamonds', bonus: '(156 + 16 Bonus)', price: '9,195 Ks' },
    { id: 3, amt: '257 Diamonds', bonus: '(234 + 23 Bonus)', price: '13,095 Ks' },
    { id: 4, amt: 'Weekly Pass', bonus: 'Best Value', price: '5,100 Ks' },
    { id: 5, amt: '706 Diamonds', bonus: '(625 + 81 Bonus)', price: '36,788 Ks' },
    { id: 6, amt: '878 Diamonds', bonus: '(781 + 97 Bonus)', price: '45,983 Ks' },
  ]},
  global: { name: "MLBB GLOBAL", packages: [
    { id: 11, amt: '86 Diamonds', bonus: '(78 + 8 Bonus)', price: '4,500 Ks' },
    { id: 12, amt: 'Weekly Pass', bonus: 'Instant', price: '5,000 Ks' },
  ]},
};

function OrderContent() {
  const searchParams = useSearchParams();
  const serverId = searchParams.get('server') || 'global';
  const currentServer = serverData[serverId] || serverData.global;
  const [selectedPkg, setSelectedPkg] = useState<any>(null);

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-20">
      {/* Header Info */}
      <div className="relative h-32 rounded-3xl overflow-hidden border border-gray-800">
        <img src="/mlbb-banner.png" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black">
          <h1 className="text-xl font-black italic uppercase">Mobile Legends {currentServer.name}</h1>
          <p className="text-[10px] text-green-500 font-bold">✓ Verified Service</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
        {/* 1. Fill Data */}
        <section className="bg-[#111] rounded-2xl border border-gray-800 overflow-hidden">
          <div className="bg-[#1a1a1a] px-4 py-2 border-b border-gray-800 flex items-center gap-3">
            <span className="bg-cyan-500 text-black w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold">1</span>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-500">Fill Data</h2>
          </div>
          <div className="p-5 flex gap-3">
            <input type="number" placeholder="User ID" className="flex-[2] bg-black p-4 rounded-xl border border-gray-800 outline-none focus:border-cyan-500 text-sm font-bold" />
            <input type="number" placeholder="Server ID" className="flex-1 bg-black p-4 rounded-xl border border-gray-800 outline-none focus:border-cyan-500 text-sm font-bold" />
          </div>
        </section>

        {/* 2. Select Nominal (The Grid) */}
        <section className="bg-[#111] rounded-2xl border border-gray-800 overflow-hidden">
          <div className="bg-[#1a1a1a] px-4 py-2 border-b border-gray-800 flex items-center gap-3">
            <span className="bg-cyan-500 text-black w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold">2</span>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-500">Select Nominal</h2>
          </div>
          <div className="p-5 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {currentServer.packages.map((pkg: any) => (
              <div 
                key={pkg.id} 
                onClick={() => setSelectedPkg(pkg)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${selectedPkg?.id === pkg.id ? 'border-cyan-500 bg-cyan-500/10' : 'border-gray-800 bg-black hover:border-gray-700'}`}
              >
                <div className="text-[11px] font-black">{pkg.amt}</div>
                <div className="text-[9px] text-gray-500 font-bold mb-2">{pkg.bonus}</div>
                <div className="text-[10px] text-cyan-500 font-black">{pkg.price}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Detail Contact */}
        <section className="bg-[#111] rounded-2xl border border-gray-800 overflow-hidden">
          <div className="bg-[#1a1a1a] px-4 py-2 border-b border-gray-800 flex items-center gap-3">
            <span className="bg-cyan-500 text-black w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold">3</span>
            <h2 className="text-xs font-bold uppercase tracking-wider text-cyan-500">Detail Contact</h2>
          </div>
          <div className="p-5">
            <label className="text-[10px] text-gray-500 font-bold mb-2 block uppercase">WhatsApp Number</label>
            <input type="tel" placeholder="09xxxxxxxxx" className="w-full bg-black p-4 rounded-xl border border-gray-800 outline-none focus:border-cyan-500 text-sm font-bold" />
          </div>
        </section>

        {/* Selected Item Summary & Buy Button */}
        {selectedPkg && (
          <div className="bg-cyan-950/30 border border-cyan-500/50 p-4 rounded-2xl flex justify-between items-center">
             <div>
                <p className="text-[10px] font-bold text-cyan-500">Selected Item:</p>
                <p className="text-sm font-black">{selectedPkg.amt} - {selectedPkg.price}</p>
             </div>
             <button className="bg-cyan-500 text-black px-8 py-3 rounded-xl font-black text-xs uppercase shadow-lg shadow-cyan-500/20 active:scale-95 transition-all">
               Buy Now
             </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 pt-10">
      <Suspense fallback={<div className="text-center text-xs animate-pulse">PREPARING STORE...</div>}>
        <OrderContent />
      </Suspense>
    </div>
  );
}
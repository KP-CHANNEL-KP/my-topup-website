"use client";
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const packages = [
  { id: 1, amt: '86 💎', price: '2,500 Ks' },
  { id: 2, amt: '172 💎', price: '4,850 Ks' },
  { id: 3, amt: '257 💎', price: '7,250 Ks' },
  { id: 4, amt: '706 💎', price: '19,400 Ks' },
  { id: 5, amt: '2195 💎', price: '58,000 Ks' },
];

export default function MLBBTopup() {
  // Error တက်တဲ့နေရာကို ဒီလို ပြင်လိုက်ပါတယ်
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-4 font-sans pb-20">
      <div className="max-w-md mx-auto space-y-5">
        <Link href="/mlbb/server" className="text-xs text-gray-500 hover:text-blue-500 transition inline-block mb-2">❮ Back to Servers</Link>
        
        {/* Step 1: ID Input */}
        <div className="bg-[#111] p-6 rounded-[2rem] border border-gray-800 shadow-2xl">
          <h2 className="text-[10px] font-black text-blue-500 mb-5 tracking-[0.2em] uppercase">1. Player ID</h2>
          <div className="flex gap-3">
            <input type="number" placeholder="User ID" className="flex-[2] bg-gray-900 border border-gray-800 p-4 rounded-2xl outline-none focus:border-blue-500 text-sm transition-all" />
            <input type="number" placeholder="Zone" className="flex-1 bg-gray-900 border border-gray-800 p-4 rounded-2xl outline-none focus:border-blue-500 text-sm transition-all" />
          </div>
        </div>

        {/* Step 2: Diamond Selection */}
        <div className="bg-[#111] p-6 rounded-[2rem] border border-gray-800 shadow-2xl">
          <h2 className="text-[10px] font-black text-blue-500 mb-5 tracking-[0.2em] uppercase">2. Select Package</h2>
          <div className="grid grid-cols-2 gap-3">
            {packages.map((pkg) => (
              <div 
                key={pkg.id} 
                onClick={() => setSelected(pkg.id)} 
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${selected === pkg.id ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-gray-800 bg-gray-900 hover:border-gray-700'}`}
              >
                <div className="text-xs font-bold text-gray-200">{pkg.amt}</div>
                <div className="text-[10px] text-gray-500 mt-1 font-medium">{pkg.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 3: Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-[2.2rem] shadow-2xl shadow-blue-600/30 transition-all active:scale-95 uppercase tracking-widest text-xs mt-4">
          Proceed to Order
        </button>
      </div>
    </div>
  );
}
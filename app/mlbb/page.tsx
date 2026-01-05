"use client";
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Server အလိုက် ဈေးနှုန်းများ (Diamond + Weekly Pass)
const serverData = {
  mm: {
    name: "Myanmar Server",
    packages: [
      { id: 1, amt: '86 💎', price: '2,500 Ks' },
      { id: 2, amt: '172 💎', price: '4,850 Ks' },
      { id: 3, amt: '257 💎', price: '7,250 Ks' },
      { id: 4, amt: 'WDP 💎 (Weekly)', price: '5,100 Ks' },
    ]
  },
  indo: {
    name: "Indonesia Server",
    packages: [
      { id: 10, amt: '86 💎', price: '2,400 Ks' },
      { id: 11, amt: '172 💎', price: '4,700 Ks' },
      { id: 12, amt: 'WDP 💎 (Weekly)', price: '4,900 Ks' },
    ]
  },
  ph: {
    name: "Philippines Server",
    packages: [
      { id: 20, amt: '86 💎', price: '2,600 Ks' },
      { id: 21, amt: 'WDP 💎 (Weekly)', price: '5,300 Ks' },
    ]
  },
  bz: {
    name: "Brazil Server",
    packages: [
      { id: 30, amt: '86 💎', price: '2,350 Ks' },
      { id: 31, amt: 'WDP 💎 (Weekly)', price: '4,800 Ks' },
    ]
  }
};

export default function MLBBTopup() {
  const [selectedServer, setSelectedServer] = useState<string>('mm');
  const [selectedPkg, setSelectedPkg] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-4 font-sans pb-24">
      <div className="max-w-md mx-auto space-y-5">
        <Link href="/" className="text-xs text-gray-500 hover:text-blue-500 transition inline-block">❮ Home</Link>
        
        {/* Step 1: Player ID */}
        <div className="bg-[#111] p-6 rounded-[2rem] border border-gray-800 shadow-xl">
          <h2 className="text-[10px] font-black text-blue-500 mb-4 tracking-widest uppercase">1. Account Details</h2>
          <div className="flex gap-3">
            <input type="number" placeholder="User ID" className="flex-[2] bg-gray-900 border border-gray-800 p-4 rounded-2xl outline-none focus:border-blue-500 text-sm" />
            <input type="number" placeholder="Zone" className="flex-1 bg-gray-900 border border-gray-800 p-4 rounded-2xl outline-none focus:border-blue-500 text-sm" />
          </div>
        </div>

        {/* Step 2: Select Server */}
        <div className="bg-[#111] p-6 rounded-[2rem] border border-gray-800 shadow-xl">
          <h2 className="text-[10px] font-black text-blue-500 mb-4 tracking-widest uppercase">2. Select Server</h2>
          <div className="grid grid-cols-2 gap-2">
            {Object.keys(serverData).map((key) => (
              <button
                key={key}
                onClick={() => { setSelectedServer(key); setSelectedPkg(null); }}
                className={`py-3 px-2 rounded-xl border text-[10px] font-bold transition-all ${selectedServer === key ? 'border-blue-500 bg-blue-500/10 text-white' : 'border-gray-800 bg-gray-900 text-gray-500'}`}
              >
                {(serverData as any)[key].name}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Select Package */}
        <div className="bg-[#111] p-6 rounded-[2rem] border border-gray-800 shadow-xl">
          <h2 className="text-[10px] font-black text-blue-500 mb-4 tracking-widest uppercase">3. Choose Diamonds / Pass</h2>
          <div className="grid grid-cols-2 gap-3">
            {(serverData as any)[selectedServer].packages.map((pkg: any) => (
              <div 
                key={pkg.id} 
                onClick={() => setSelectedPkg(pkg.id)} 
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${selectedPkg === pkg.id ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_20px_rgba(59,130,246,0.15)]' : 'border-gray-800 bg-gray-900 hover:border-gray-700'}`}
              >
                <div className="text-xs font-bold text-gray-200">{pkg.amt}</div>
                <div className="text-[10px] text-gray-500 mt-1">{pkg.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 4: Buy Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-[2.2rem] shadow-2xl shadow-blue-600/30 transition-all active:scale-95 uppercase tracking-widest text-xs">
          Confirm & Buy Now
        </button>
      </div>
    </div>
  );
}
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

// Diamond အထုပ်များ စာရင်း (ပုံထဲကအတိုင်း)
const packages = [
  { id: 1, amount: '86 Diamonds', price: '2,500 Ks' },
  { id: 2, amount: '172 Diamonds', price: '4,850 Ks' },
  { id: 3, amount: '257 Diamonds', price: '7,250 Ks' },
  { id: 4, amount: '343 Diamonds', price: '9,700 Ks' },
  { id: 5, amount: '429 Diamonds', price: '12,100 Ks' },
  { id: 6, amount: '706 Diamonds', price: '19,400 Ks' },
  { id: 7, amount: '2195 Diamonds', price: '58,000 Ks' },
  { id: 8, amount: '3688 Diamonds', price: '96,000 Ks' },
];

export default function MLBBPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white font-sans">
      {/* Header */}
      <div className="p-4 flex items-center gap-4 sticky top-0 bg-[#0a0a0b]/80 backdrop-blur-md z-10 border-b border-gray-900">
        <Link href="/" className="text-gray-400">← Back</Link>
        <h1 className="font-bold">Mobile Legends</h1>
      </div>

      <div className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Step 1: Input ID */}
        <div className="bg-[#161618] rounded-3xl p-6 border border-gray-800 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <h2 className="font-bold text-gray-200 uppercase tracking-wider">Account Information</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] text-gray-500 ml-1">USER ID</label>
              <input type="number" placeholder="12345678" className="w-full bg-[#1c1c1e] border border-gray-800 p-4 rounded-2xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-sm" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] text-gray-500 ml-1">ZONE ID</label>
              <input type="number" placeholder="(1234)" className="w-full bg-[#1c1c1e] border border-gray-800 p-4 rounded-2xl outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-sm" />
            </div>
          </div>
          <p className="text-[10px] text-gray-500 mt-4 leading-relaxed bg-blue-500/5 p-3 rounded-xl">
            💡 To find your User ID, click on your avatar in the top-left corner of the main game screen.
          </p>
        </div>

        {/* Step 2: Select Diamonds */}
        <div className="bg-[#161618] rounded-3xl p-6 border border-gray-800 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <h2 className="font-bold text-gray-200 uppercase tracking-wider">Select Diamonds</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {packages.map((pkg) => (
              <button 
                key={pkg.id}
                onClick={() => setSelected(pkg.id)}
                className={`relative p-4 rounded-2xl border text-left transition-all duration-200 group overflow-hidden ${
                  selected === pkg.id 
                  ? 'border-blue-500 bg-blue-500/10' 
                  : 'border-gray-800 bg-[#1c1c1e] hover:border-gray-600'
                }`}
              >
                <div className="text-xs font-bold mb-1 group-hover:text-blue-400 transition-colors">{pkg.amount}</div>
                <div className="text-[10px] text-gray-500 font-medium">{pkg.price}</div>
                
                {/* Selection Tick Icon */}
                {selected === pkg.id && (
                  <div className="absolute top-2 right-2 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-[8px] text-white">✓</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Checkout */}
        <div className="pt-4">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-5 rounded-[2rem] shadow-2xl shadow-blue-600/20 transition-all transform active:scale-95 flex items-center justify-center gap-3">
            <span>PROCEED TO PAYMENT</span>
            <span className="text-xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
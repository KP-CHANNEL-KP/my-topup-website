"use client";
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const serverData: any = {
  indo: { name: "Indonesia", packages: [{ id: 1, amt: '86 💎', price: '2,500 Ks' }, { id: 2, amt: 'WDP 💎', price: '5,100 Ks' }] },
  ph: { name: "Philippines", packages: [{ id: 3, amt: '86 💎', price: '2,600 Ks' }, { id: 4, amt: 'WDP 💎', price: '5,300 Ks' }] },
  global: { name: "Global", packages: [{ id: 5, amt: '86 💎', price: '2,450 Ks' }, { id: 6, amt: 'WDP 💎', price: '5,000 Ks' }] },
  // ကျန်တဲ့ server တွေ ဒီမှာ ထပ်ထည့်လို့ရပါတယ်...
};

export default function OrderPage() {
  const searchParams = useSearchParams();
  const serverId = searchParams.get('server') || 'global';
  const currentServer = serverData[serverId] || serverData.global;
  const [selectedPkg, setSelectedPkg] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <div className="max-w-md mx-auto space-y-6">
        <Link href="/mlbb/server" className="text-xs text-gray-500">❮ Back to Servers</Link>
        
        <div className="bg-[#111] p-6 rounded-[2rem] border border-gray-800">
          <h2 className="text-[10px] font-black text-blue-500 uppercase mb-4 tracking-widest">Selected: {currentServer.name}</h2>
          <div className="flex gap-2">
            <input type="number" placeholder="User ID" className="flex-[2] bg-gray-900 p-4 rounded-2xl outline-none text-sm border border-gray-800 focus:border-blue-500" />
            <input type="number" placeholder="Zone" className="flex-1 bg-gray-900 p-4 rounded-2xl outline-none text-sm border border-gray-800 focus:border-blue-500" />
          </div>
        </div>

        <div className="bg-[#111] p-6 rounded-[2rem] border border-gray-800">
          <h2 className="text-[10px] font-black text-blue-500 uppercase mb-4">Select Diamonds / Pass</h2>
          <div className="grid grid-cols-2 gap-3">
            {currentServer.packages.map((pkg: any) => (
              <div key={pkg.id} onClick={() => setSelectedPkg(pkg.id)} className={`p-4 rounded-2xl border cursor-pointer transition-all ${selectedPkg === pkg.id ? 'border-blue-500 bg-blue-500/10' : 'border-gray-800 bg-gray-900'}`}>
                <div className="text-xs font-bold">{pkg.amt}</div>
                <div className="text-[10px] text-gray-500">{pkg.price}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-blue-600 py-5 rounded-[2rem] font-black uppercase text-xs tracking-widest">Buy Now</button>
      </div>
    </div>
  );
}
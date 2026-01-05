"use client";
import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const serverData: any = {
  indo: { name: "INDONESIA", packages: [{ id: 1, amt: '86 💎', price: '2,500 Ks' }, { id: 2, amt: 'WDP 💎', price: '5,100 Ks' }] },
  ph: { name: "PHILIPPINES", packages: [{ id: 3, amt: '86 💎', price: '2,600 Ks' }, { id: 4, amt: 'WDP 💎', price: '5,300 Ks' }] },
  global: { name: "GLOBAL", packages: [{ id: 5, amt: '86 💎', price: '2,450 Ks' }, { id: 6, amt: 'WDP 💎', price: '5,000 Ks' }] },
};

function OrderContent() {
  const searchParams = useSearchParams();
  const serverId = searchParams.get('server') || 'global';
  const currentServer = serverData[serverId] || serverData.global;
  const [selectedPkg, setSelectedPkg] = useState<number | null>(null);

  return (
    <div className="max-w-md mx-auto space-y-6">
      <Link href="/mlbb/server" className="text-xs text-gray-500 font-bold">❮ BACK</Link>
      <div className="bg-[#111] p-6 rounded-[2.5rem] border border-gray-800 shadow-xl">
        <h2 className="text-[10px] font-black text-yellow-500 uppercase mb-4 italic">1. Enter User ID ({currentServer.name})</h2>
        <div className="flex gap-2">
          <input type="number" placeholder="User ID" className="flex-[2] bg-black p-4 rounded-2xl border border-gray-800 outline-none focus:border-yellow-500 text-sm" />
          <input type="number" placeholder="Zone" className="flex-1 bg-black p-4 rounded-2xl border border-gray-800 outline-none focus:border-yellow-500 text-sm" />
        </div>
      </div>
      <div className="bg-[#111] p-6 rounded-[2.5rem] border border-gray-800 shadow-xl">
        <h2 className="text-[10px] font-black text-yellow-500 uppercase mb-4 italic">2. Select Item</h2>
        <div className="grid grid-cols-2 gap-3">
          {currentServer.packages.map((pkg: any) => (
            <div key={pkg.id} onClick={() => setSelectedPkg(pkg.id)} className={`p-4 rounded-2xl border cursor-pointer transition-all ${selectedPkg === pkg.id ? 'border-yellow-500 bg-yellow-500/10' : 'border-gray-800 bg-black'}`}>
              <div className="text-xs font-black">{pkg.amt}</div>
              <div className="text-[10px] text-gray-500 font-bold mt-1">{pkg.price}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="w-full bg-yellow-500 text-black py-5 rounded-[2.5rem] font-black uppercase text-[11px]">Confirm Order</button>
    </div>
  );
}

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 pt-10">
      <Suspense fallback={<div className="text-center text-xs animate-pulse">LOADING...</div>}>
        <OrderContent />
      </Suspense>
    </div>
  );
}
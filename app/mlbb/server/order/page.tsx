"use client";
import React, { useState, Suspense } from 'react'; // Suspense ကို add ထားတယ်
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

const serverData: any = {
  indo: { name: "Indonesia", packages: [{ id: 1, amt: '86 💎', price: '2,500 Ks' }, { id: 2, amt: 'WDP 💎', price: '5,100 Ks' }] },
  ph: { name: "Philippines", packages: [{ id: 3, amt: '86 💎', price: '2,600 Ks' }, { id: 4, amt: 'WDP 💎', price: '5,300 Ks' }] },
  global: { name: "Global", packages: [{ id: 5, amt: '86 💎', price: '2,450 Ks' }, { id: 6, amt: 'WDP 💎', price: '5,000 Ks' }] },
};

// ဝယ်ယူမည့် Page အစိတ်အပိုင်း
function OrderContent() {
  const searchParams = useSearchParams();
  const serverId = searchParams.get('server') || 'global';
  const currentServer = serverData[serverId] || serverData.global;
  const [selectedPkg, setSelectedPkg] = useState<number | null>(null);

  return (
    <div className="max-w-md mx-auto space-y-6">
        <Link href="/mlbb/server" className="text-[10px] text-gray-500 flex items-center gap-1 uppercase font-bold">
          <span className="text-sm">❮</span> Back to Servers
        </Link>
        
        <div className="bg-[#111] p-6 rounded-[2rem] border border-gray-800 shadow-2xl">
          <h2 className="text-[10px] font-black text-blue-500 uppercase mb-4 tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Server: {currentServer.name}
          </h2>
          <div className="flex gap-2">
            <input type="number" placeholder="User ID" className="flex-[2] bg-black p-4 rounded-2xl outline-none text-sm border border-gray-800 focus:border-blue-500 transition-all placeholder:text-gray-600 font-bold" />
            <input type="number" placeholder="Zone" className="flex-1 bg-black p-4 rounded-2xl outline-none text-sm border border-gray-800 focus:border-blue-500 transition-all placeholder:text-gray-600 font-bold" />
          </div>
        </div>

        <div className="bg-[#111] p-6 rounded-[2rem] border border-gray-800 shadow-2xl">
          <h2 className="text-[10px] font-black text-gray-400 uppercase mb-4 tracking-widest">Select Amount</h2>
          <div className="grid grid-cols-2 gap-3">
            {currentServer.packages.map((pkg: any) => (
              <div 
                key={pkg.id} 
                onClick={() => setSelectedPkg(pkg.id)} 
                className={`p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    selectedPkg === pkg.id 
                    ? 'border-blue-500 bg-blue-500/10 shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
                    : 'border-gray-800 bg-black hover:border-gray-600'
                }`}
              >
                <div className={`text-xs font-black ${selectedPkg === pkg.id ? 'text-blue-400' : 'text-white'}`}>{pkg.amt}</div>
                <div className="text-[10px] text-gray-500 font-bold mt-1 uppercase">{pkg.price}</div>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-500 py-5 rounded-[2rem] font-black uppercase text-[11px] tracking-widest transition-all shadow-xl active:scale-95">
          Order Now
        </button>
      </div>
  );
}

// Build Error မတက်အောင် Suspense နဲ့ wrap လုပ်ထားတဲ့ Main Page
export default function OrderPage() {
  return (
    <div className="min-h-screen bg-black text-white p-4 pt-10">
      <Suspense fallback={<div className="text-center p-10 text-xs font-bold text-gray-500 animate-pulse">LOADING PAGE...</div>}>
        <OrderContent />
      </Suspense>
    </div>
  );
}
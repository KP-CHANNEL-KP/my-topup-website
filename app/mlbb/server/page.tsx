"use client";
import React from 'react';
import Link from 'next/link';

const servers = [
  { id: 'indo', name: 'MLBB INDONESIA', desc: 'Direct Topup', icon: '/mlbb-indo.png' },
  { id: 'ph', name: 'MLBB PHILIPPINES', desc: 'Fast Delivery', icon: '/mlbb-ph.png' },
  { id: 'global', name: 'MLBB GLOBAL', desc: 'Instant Work', icon: '/mlbb-global.png' },
  { id: 'brazil', name: 'MLBB BRAZIL', desc: 'Regional Price', icon: '/mlbb-br.png' },
  { id: 'login', name: 'MLBB LOGIN', desc: 'Special Offer', icon: '/mlbb-login.png' },
  { id: 'russia', name: 'MLBB SG', desc: 'Instant Work', icon: '/mlbb-sg.png' },
];

export default function ServerPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/" className="bg-gray-900 w-10 h-10 rounded-full flex items-center justify-center border border-gray-800 hover:bg-gray-800 transition-all">❮</Link>
          <div>
            <h1 className="text-xl font-black uppercase italic">SELECT SERVER</h1>
            <p className="text-[10px] text-yellow-500 font-bold tracking-widest">MOBILE LEGENDS: BANG BANG</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {servers.map((s) => (
            <Link key={s.id} href={`/mlbb/order?server=${s.id}`} className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all duration-300">
              {/* ပုံထည့်တဲ့နေရာ - Object Cover သုံးထားလို့ ပုံက Grid ထဲမှာ အပြည့်ပေါ်နေမှာပါ */}
              <img 
                src={s.icon} 
                alt={s.name}
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" 
              />
              
              {/* Overlay Gradient (စာသားတွေ ပိုကြည်လင်အောင်) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-4 flex flex-col justify-end">
                <h3 className="text-[11px] font-black uppercase group-hover:text-yellow-500 transition-colors leading-tight">{s.name}</h3>
                <p className="text-[9px] text-gray-500 font-medium mt-1">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
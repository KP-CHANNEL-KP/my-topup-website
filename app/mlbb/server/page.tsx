"use client";
import React from 'react';
import Link from 'next/link';

const servers = [
  { id: 'indo', name: 'MLBB INDONESIA', icon: '/indo.jpg', desc: 'Direct Topup' },
  { id: 'ph', name: 'MLBB PHILIPPINES', icon: '/ph.jpg', desc: 'Fast Delivery' },
  { id: 'global', name: 'MLBB GLOBAL', icon: '/global.jpg', desc: 'Instant Work' },
  { id: 'brazil', name: 'MLBB BRAZIL', icon: '/brazil.jpg', desc: 'Regional Price' },
  { id: 'login', name: 'MLBB LOGIN', icon: '/login.jpg', desc: 'Special Offer' },
  { id: 'my-sg', name: 'MLBB INDO + MALAY', icon: '/mysg.jpg', desc: 'Combo Server' },
  { id: 'russia', name: 'MLBB RUSSIA', icon: '/russia.jpg', desc: 'Instant' },
  { id: 'adv', name: 'MLBB ADVENTURE', icon: '/adv.jpg', desc: 'Game Topup' },
];

export default function ServerPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="bg-gray-900/50 w-10 h-10 rounded-full flex items-center justify-center border border-gray-800 hover:bg-gray-800 transition-all">❮</Link>
          <div>
            <h1 className="text-xl font-black uppercase italic">Select Server</h1>
            <p className="text-[10px] text-yellow-500 font-bold uppercase tracking-widest">Mobile Legends: Bang Bang</p>
          </div>
        </div>

        {/* Server Grid Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {servers.map((s) => (
            <Link 
              key={s.id} 
              href="/mlbb" 
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all shadow-2xl"
            >
              {/* Character Background */}
              <img src={s.icon} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" />
              
              {/* Bottom Info Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4">
                <h3 className="text-[12px] font-black group-hover:text-yellow-500 transition-colors uppercase leading-tight">{s.name}</h3>
                <p className="text-[9px] text-gray-400 font-medium mt-1">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Search Server Bar */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-sm">
            <input type="text" placeholder="Search server..." className="w-full bg-gray-900/50 border border-gray-800 py-3 px-10 rounded-full text-xs outline-none focus:border-blue-500" />
            <span className="absolute left-4 top-3.5 opacity-30">🔍</span>
          </div>
        </div>
      </div>
    </div>
  );
}
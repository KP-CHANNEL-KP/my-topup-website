"use client";
import React from 'react';
import Link from 'next/link';

// ပုံထဲကအတိုင်း Server စာရင်းများ
const servers = [
  { id: 'indo', name: 'MLBB Indonesia', icon: '/indo-server.png', desc: 'Direct Topup', color: 'from-purple-900/40' },
  { id: 'ph', name: 'MLBB Philippines', icon: '/ph-server.png', desc: 'Fast Delivery', color: 'from-blue-900/40' },
  { id: 'global', name: 'MLBB Global', icon: '/global-server.png', desc: 'Instant Work', color: 'from-cyan-900/40' },
  { id: 'brazil', name: 'MLBB Brazil', icon: '/brazil-server.png', desc: 'Regional Price', color: 'from-green-900/40' },
  { id: 'login', name: 'MLBB Via Login', icon: '/login-server.png', desc: 'Cheapest Option', color: 'from-pink-900/40' },
  { id: 'sg-my', name: 'MLBB Indo + Malay', icon: '/sg-my-server.png', desc: 'Special Region', color: 'from-indigo-900/40' },
  { id: 'russia', name: 'MLBB Russia', icon: '/russia-server.png', desc: 'Instant', color: 'from-red-900/40' },
  { id: 'adv', name: 'MLBB Adventure', icon: '/mlbb-adv.png', desc: 'Game Topup', color: 'from-orange-900/40' },
];

export default function ServerSelectionPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans pb-20">
      {/* Header အပိုင်း */}
      <div className="p-6 flex items-center gap-4 max-w-5xl mx-auto">
        <Link href="/" className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center border border-gray-800 hover:bg-gray-800 transition-all">
          <span className="text-gray-400">❮</span>
        </Link>
        <div>
          <h1 className="text-xl font-black tracking-tighter uppercase italic">Select Server</h1>
          <p className="text-[10px] text-yellow-500 font-bold tracking-widest uppercase opacity-70">Mobile Legends: Bang Bang</p>
        </div>
      </div>

      {/* Server Grid အပိုင်း */}
      <div className="px-6 max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {servers.map((server) => (
          <Link 
            key={server.id} 
            href="/mlbb" 
            className={`relative group overflow-hidden rounded-[2rem] border border-gray-800 bg-gradient-to-br ${server.color} to-black p-1 hover:border-yellow-500/50 transition-all duration-500 active:scale-95 shadow-2xl`}
          >
            <div className="relative aspect-[4/5] rounded-[1.8rem] overflow-hidden">
              {/* Background Image (Icon) */}
              <img 
                src={server.icon} 
                alt={server.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/400x500?text=" + server.name }}
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-sm font-black leading-tight group-hover:text-yellow-500 transition-colors uppercase tracking-tighter">
                  {server.name}
                </h3>
                <p className="text-[9px] text-gray-400 font-medium mt-1">
                  {server.desc}
                </p>
              </div>

              {/* Hover Effect Light */}
              <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </Link>
        ))}
      </div>

      {/* Search/Filter Bar အောက်ခြေ (Optional) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md">
        <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-full px-6 py-3 flex items-center gap-3 shadow-2xl">
          <span className="text-gray-500 text-sm">🔍</span>
          <input 
            type="text" 
            placeholder="Search server..." 
            className="bg-transparent border-none outline-none text-xs w-full text-white placeholder:text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}
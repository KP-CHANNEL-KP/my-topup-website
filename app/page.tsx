"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const banners = ["/promo1.png", "/promo2.png", "/promo3.png"];
const categories = ["Game Mobile", "Mlbb Mobile", "Pc Game", "Voucher", "Social", "Via login"];

const allItems = [
  // MLBB & Games
  { id: 'mlbb', name: 'MOBILE LEGENDS', icon: '/mlbb-logo.png', category: 'Mlbb Mobile' },
  { id: 'pubg', name: 'PUBG MOBILE', icon: '/pubg-logo.png', category: 'Game Mobile' },
  { id: 'ff', name: 'FREE FIRE', icon: '/ff-logo.png', category: 'Game Mobile' },
  { id: 'hok', name: 'HONOR OF KINGS', icon: '/hok-logo.png', category: 'Game Mobile' },
  { id: 'genshin', name: 'GENSHIN IMPACT', icon: '/genshin-logo.png', category: 'Game Mobile' },
  { id: 'valorant', name: 'VALORANT', icon: '/valorant-logo.png', category: 'Pc Game' },

  // Social Section (ပုံထဲကအတိုင်း အကုန်ထည့်ပေးထားပါတယ်)
  { id: 'telegram', name: 'Telegram Premium', icon: '/telegram.png', category: 'Social' },
  { id: 'spotify', name: 'Spotify Premium', icon: '/spotify.png', category: 'Social' },
  { id: 'capcut', name: 'CapCut PRO', icon: '/capcut.png', category: 'Social' },
  { id: 'youtube', name: 'YouTube Premium', icon: '/youtube.png', category: 'Social' },
  { id: 'alight', name: 'Alight Motion', icon: '/alight.png', category: 'Social' },
  { id: 'roblox', name: 'ROBLOX', icon: '/roblox.png', category: 'Social' },
  { id: 'wink', name: 'Wink', icon: '/wink.png', category: 'Social' },
  { id: 'soundcloud', name: 'SoundCloud', icon: '/soundcloud.png', category: 'Social' },
  { id: 'remini', name: 'Remini', icon: '/remini.png', category: 'Social' },
  { id: 'vpn', name: 'VPN Premium', icon: '/vpn.png', category: 'Social' },
  { id: 'ai', name: 'AI Premium', icon: '/ai.png', category: 'Social' },
  { id: 'ps', name: 'PlayStation Gift', icon: '/ps.png', category: 'Social' },
  { id: 'phub', name: 'Pron Hub', icon: '/phub.png', category: 'Social' },
  { id: 'duolingo', name: 'Duolingo Premium', icon: '/duolingo.png', category: 'Social' },
];

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [activeTab, setActiveTab] = useState("Mlbb Mobile");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredItems = allItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Header */}
      <nav className="p-5 border-b border-gray-900 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black text-yellow-500 italic">KP TOPUP</h1>
          <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-black uppercase">Login</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        {/* Banner */}
        <div className="relative w-full h-44 md:h-[350px] overflow-hidden rounded-[2rem] border border-gray-800 mb-10">
          {banners.map((img, index) => (
            <img key={index} src={img} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentBanner ? 'opacity-100' : 'opacity-0'}`} />
          ))}
        </div>

        {/* Tab & Search (ပုံထဲကအတိုင်း) */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-10 bg-[#111] p-4 rounded-3xl border border-gray-800">
          <div className="flex gap-2 overflow-x-auto w-full no-scrollbar pb-2">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-[11px] font-black whitespace-nowrap border transition-all ${
                  activeTab === tab ? 'bg-[#4ade80] text-black border-[#4ade80]' : 'bg-transparent border-gray-700 text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <input type="text" placeholder="Search Game, Voucher, etc" className="w-full bg-white text-black py-3 px-6 rounded-full text-xs outline-none" />
            <span className="absolute right-5 top-3 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Dynamic Title */}
        <div className="flex items-center gap-2 mb-8">
          <h2 className="text-lg font-black uppercase italic tracking-tighter">{activeTab}</h2>
          <div className="h-4 w-1 bg-yellow-500 skew-x-[20deg]"></div>
          <div className="h-4 w-1 bg-yellow-500 skew-x-[20deg]"></div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <Link 
              href={item.id === 'mlbb' ? '/mlbb/server' : '#'} 
              key={item.id} 
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square bg-[#161b22] rounded-[1.5rem] md:rounded-[2rem] border border-gray-800 p-2 group-hover:border-yellow-500 transition-all overflow-hidden relative">
                <img 
                  src={item.icon} 
                  className="w-full h-full object-cover rounded-[1.2rem] md:rounded-[1.8rem] group-hover:scale-105 transition-transform duration-500" 
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/200?text=" + item.name }}
                />
              </div>
              <p className="mt-3 text-[10px] font-bold text-gray-400 group-hover:text-white text-center uppercase truncate w-full">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
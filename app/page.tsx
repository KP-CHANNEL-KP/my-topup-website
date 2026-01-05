"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const banners = ["/promo1.png", "/promo2.png", "/promo3.png"];
const categories = ["Game Mobile", "Mlbb Mobile", "Pc Game", "Voucher", "Social", "Via login"];

const allItems = [
  // MLBB - /mlbb/server ကိုသွားမယ်
  { id: 'mlbb', name: 'MOBILE LEGENDS', icon: '/mlbb-logo.png', category: 'Mlbb Mobile', path: '/mlbb/server' },
  
  // PUBG - /pubg/order ကိုသွားမယ်
  { id: 'pubg', name: 'PUBG MOBILE', icon: '/pubg-logo.png', category: 'Game Mobile', path: '/pubg/order' },
  
  { id: 'ff', name: 'FREE FIRE', icon: '/ff-logo.png', category: 'Game Mobile', path: '#' },
  { id: 'hok', name: 'HONOR OF KINGS', icon: '/hok-logo.png', category: 'Game Mobile', path: '#' },
  { id: 'telegram', name: 'Telegram Premium', icon: '/telegram.png', category: 'Social', path: '#' },
  { id: 'spotify', name: 'Spotify Premium', icon: '/spotify.png', category: 'Social', path: '#' },
  { id: 'capcut', name: 'CapCut PRO', icon: '/capcut.png', category: 'Social', path: '#' },
  { id: 'youtube', name: 'YouTube Premium', icon: '/youtube.png', category: 'Social', path: '#' },
  { id: 'roblox', name: 'ROBLOX', icon: '/roblox.png', category: 'Social', path: '#' },
  { id: 'wink', name: 'Wink', icon: '/wink.png', category: 'Social', path: '#' },
  { id: 'phub', name: 'Pron Hub', icon: '/phub.png', category: 'Social', path: '#' },
  { id: 'duolingo', name: 'Duolingo Premium', icon: '/duolingo.png', category: 'Social', path: '#' },
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
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="p-4 border-b border-gray-900 bg-black/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black text-yellow-500 italic tracking-tighter">KP TOPUP</h1>
          <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-black uppercase hover:bg-yellow-500 transition-colors">Login</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Banner Slider */}
        <div className="relative w-full h-44 md:h-80 overflow-hidden rounded-[2.5rem] border border-gray-800 mb-8 shadow-2xl">
          {banners.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === currentBanner ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} 
              alt={`Promo ${index + 1}`}
            />
          ))}
          {/* Slider Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all ${i === currentBanner ? 'w-8 bg-yellow-500' : 'w-2 bg-white/30'}`}></div>
            ))}
          </div>
        </div>

        {/* Categories & Search */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-8 bg-[#111] p-4 rounded-[2rem] border border-gray-800">
          <div className="flex gap-2 overflow-x-auto w-full no-scrollbar pb-2 lg:pb-0">
            {categories.map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)} 
                className={`px-6 py-3 rounded-full text-[11px] font-black border whitespace-nowrap transition-all ${
                  activeTab === tab 
                  ? 'bg-yellow-500 text-black border-yellow-500 shadow-lg shadow-yellow-500/20' 
                  : 'bg-black border-gray-800 text-gray-400 hover:border-gray-600'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-96">
            <input 
              type="text" 
              placeholder="Search Game, Voucher, etc..." 
              className="w-full bg-[#1a1a1a] text-white py-4 px-6 rounded-full text-xs font-bold outline-none border border-gray-800 focus:border-yellow-500 transition-all" 
            />
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
          {filteredItems.map((item) => (
            <Link 
              href={item.path} 
              key={item.id} 
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square bg-[#111] rounded-[2.2rem] border border-gray-800 p-3 group-hover:border-yellow-500 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] transition-all duration-300 overflow-hidden relative">
                <img 
                  src={item.icon} 
                  className="w-full h-full object-cover rounded-[1.8rem] group-hover:scale-110 transition-transform duration-500" 
                  alt={item.name}
                />
              </div>
              <p className="mt-4 text-[10px] font-black text-gray-400 group-hover:text-yellow-500 uppercase tracking-tighter truncate w-full text-center transition-colors">
                {item.name}
              </p>
            </Link>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-600 font-black italic uppercase tracking-widest text-xs">No Items Found In This Category</p>
          </div>
        )}
      </main>
    </div>
  );
} 
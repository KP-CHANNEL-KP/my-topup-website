"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// ၁။ Banner ပုံများ
const banners = ["/promo1.png", "/promo2.png", "/promo3.png"];

// ၂။ Category Tabs များ
const categories = ["Game Mobile", "Mlbb Mobile", "Pc Game", "Voucher", "Social", "Via login"];

// ၃။ ဂိမ်းစာရင်းများ
const allItems = [
  { id: 'mlbb', name: 'MOBILE LEGENDS', icon: '/mlbb-logo.png', category: 'Mlbb Mobile' },
  { id: 'pubg', name: 'PUBG MOBILE', icon: '/pubg-logo.png', category: 'Game Mobile' },
  { id: 'ff', name: 'FREE FIRE', icon: '/ff-logo.png', category: 'Game Mobile' },
  { id: 'hok', name: 'HONOR OF KINGS', icon: '/hok-logo.png', category: 'Game Mobile' },
  { id: 'genshin', name: 'GENSHIN IMPACT', icon: '/genshin-logo.png', category: 'Game Mobile' },
  { id: 'valorant', name: 'VALORANT', icon: '/Pc Game', category: 'Pc Game' },
  { id: 'netflix', name: 'NETFLIX', icon: '/netflix-logo.png', category: 'Social' },
];

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [activeTab, setActiveTab] = useState("Mlbb Mobile");

  // Auto Slider လုပ်ဆောင်ချက်
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ရွေးထားတဲ့ Category အလိုက် Filter လုပ်ခြင်း
  const filteredItems = allItems.filter(item => 
    activeTab === "Game Mobile" ? (item.category === "Game Mobile" || item.category === "Mlbb Mobile") : item.category === activeTab
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500/30">
      
      {/* Header Section */}
      <nav className="p-5 border-b border-gray-900 bg-black/50 backdrop-blur-xl sticky top-0 z-50 shadow-2xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black text-yellow-500 italic tracking-tighter">KP TOPUP</h1>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-xs font-bold text-gray-400 hover:text-white transition">Register</button>
            <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-black uppercase tracking-tight hover:bg-yellow-500 transition-colors">Login</button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 md:p-8">
        
        {/* Promotion Slider */}
        <div className="relative w-full h-44 md:h-[400px] overflow-hidden rounded-[2.5rem] border border-gray-800 bg-gray-900 mb-10 shadow-2xl">
          {banners.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentBanner ? 'opacity-100' : 'opacity-0'}`} 
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/1200x400?text=Promotion+Banner" }}
            />
          ))}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentBanner ? 'w-8 bg-yellow-500' : 'w-2 bg-white/20'}`} />
            ))}
          </div>
        </div>

        {/* Categories & Search Bar (သင်ပို့ထားတဲ့ပုံစံအတိုင်း) */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12 bg-[#111] p-4 rounded-[2rem] border border-gray-800">
          <div className="flex gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 no-scrollbar">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-[11px] font-black whitespace-nowrap transition-all border ${
                  activeTab === tab 
                  ? 'bg-[#4ade80] text-black border-[#4ade80] shadow-[0_0_20px_rgba(74,222,128,0.2)]' 
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
              className="w-full bg-white text-black py-3.5 px-6 rounded-full text-xs font-bold outline-none placeholder:text-gray-400" 
            />
            <span className="absolute right-5 top-3.5 text-gray-400 font-bold">🔍</span>
          </div>
        </div>

        {/* Game Grid Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-black uppercase italic tracking-tighter">{activeTab}</h2>
            <div className="h-[2px] w-12 bg-yellow-500 mt-1"></div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-5 md:gap-8">
            {filteredItems.map((item) => (
              <Link 
                href={item.id === 'mlbb' ? '/mlbb/server' : '#'} 
                key={item.id} 
                className="group flex flex-col items-center"
              >
                <div className="w-full aspect-square bg-[#161b22] rounded-[2.5rem] border border-gray-800 p-4 group-hover:border-yellow-500 group-hover:bg-[#1c2128] transition-all duration-300 overflow-hidden shadow-xl relative">
                  <img 
                    src={item.icon} 
                    alt={item.name} 
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10" 
                    onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/200?text=" + item.name }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <p className="mt-4 text-[10px] md:text-[11px] font-black text-gray-500 group-hover:text-yellow-500 text-center uppercase tracking-tighter transition-colors">
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

      </main>

      {/* Footer Info */}
      <footer className="mt-20 border-t border-gray-900 p-10 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 text-[10px] font-bold tracking-[0.3em] uppercase">© 2026 KP TOPUP - FAST & SECURE</p>
        </div>
      </footer>
    </div>
  );
}
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// ၁။ Slider အတွက် ပုံများ (Public folder ထဲရှိ ပုံနာမည်များနှင့် တိုက်စစ်ပါ)
const banners = [
  "/promo1.png",
  "/promo2.png",
  "/promo3.png",
  "/promo4.png",
  "/promo5.png",
];

// ၂။ ရောင်းမည့် ပစ္စည်းများစာရင်း အစုံအလင်
const allItems = [
  // Games Category
  { id: 'mlbb', name: 'Mobile Legends', icon: '/mlbb-logo.png', category: 'games' },
  { id: 'pubg', name: 'PUBG Mobile', icon: '/pubg-logo.png', category: 'games' },
  { id: 'ff', name: 'Free Fire', icon: '/ff-logo.png', category: 'games' },
  { id: 'hok', name: 'Honor of Kings', icon: '/hok-logo.png', category: 'games' },
  { id: 'genshin', name: 'Genshin Impact', icon: '/genshin-logo.png', category: 'games' },
  { id: 'valorant', name: 'Valorant', icon: '/valorant-logo.png', category: 'games' },
  
  // Social App Category
  { id: 'netflix', name: 'Netflix Premium', icon: '/netflix-logo.png', category: 'social' },
  { id: 'youtube', name: 'YouTube Premium', icon: '/youtube-logo.png', category: 'social' },
  { id: 'spotify', name: 'Spotify Premium', icon: '/spotify-logo.png', category: 'social' },
  { id: 'canva', name: 'Canva Pro', icon: '/canva-logo.png', category: 'social' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState('games');

  // Auto Slider ၅ စက္ကန့်တစ်ခါ ပတ်ရန်
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredItems = allItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <nav className="p-4 border-b border-gray-900 bg-black/80 sticky top-0 z-50 flex justify-between items-center backdrop-blur-md">
        <h1 className="text-2xl font-black text-yellow-500 italic tracking-tighter">KP TOPUP</h1>
        <div className="flex items-center gap-3">
          <div className="text-[10px] bg-gray-900 px-3 py-1 rounded-full border border-gray-800">Login</div>
          <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-xs border border-gray-700">👤</div>
        </div>
      </nav>

      {/* Hero Banner Slider */}
      <div className="p-4 md:p-6 max-w-6xl mx-auto">
        <div className="relative w-full h-48 md:h-96 overflow-hidden rounded-[2.5rem] border border-gray-800 shadow-2xl bg-gray-900">
          {banners.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Promotion"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/1200x600?text=Promotion+Banner" }}
            />
          ))}
          {/* Slider Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === current ? 'w-8 bg-yellow-500' : 'w-2 bg-white/20'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="px-6 max-w-6xl mx-auto mb-8">
        <div className="flex gap-8 border-b border-gray-900">
          <button 
            onClick={() => setActiveTab('games')}
            className={`pb-4 text-xs font-black tracking-[0.2em] transition-all uppercase ${activeTab === 'games' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-500 hover:text-gray-300'}`}
          >
            🕹️ Games
          </button>
          <button 
            onClick={() => setActiveTab('social')}
            className={`pb-4 text-xs font-black tracking-[0.2em] transition-all uppercase ${activeTab === 'social' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-500 hover:text-gray-300'}`}
          >
            📱 Social App
          </button>
        </div>
      </div>

      {/* Items Grid */}
      <div className="px-6 pb-32 max-w-6xl mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {filteredItems.map((item) => (
          <Link 
            href={item.id === 'mlbb' ? '/mlbb/server' : '#'} 
            key={item.id} 
            className="group flex flex-col items-center"
          >
            <div className="w-full aspect-square bg-gray-900 rounded-[2rem] border border-gray-800 p-3.5 group-hover:border-yellow-500/50 group-hover:bg-gray-800 transition-all duration-300 flex items-center justify-center overflow-hidden shadow-lg relative">
              <img 
                src={item.icon} 
                alt={item.name} 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/200?text=" + item.name }}
              />
              <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <p className="mt-3 text-[10px] md:text-xs font-bold text-gray-400 group-hover:text-yellow-500 text-center uppercase tracking-tighter transition-colors">
              {item.name}
            </p>
          </Link>
        ))}
      </div>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-gray-950/90 backdrop-blur-2xl border border-gray-800 rounded-[2rem] p-4 flex justify-around items-center shadow-2xl md:hidden z-50">
        <div className="flex flex-col items-center text-yellow-500 font-bold"><span className="text-xl">🏠</span><span className="text-[10px]">Home</span></div>
        <div className="flex flex-col items-center text-gray-500"><span className="text-xl">📜</span><span className="text-[10px]">Orders</span></div>
        <div className="flex flex-col items-center text-gray-500"><span className="text-xl">📞</span><span className="text-[10px]">Support</span></div>
      </div>
    </div>
  );
}


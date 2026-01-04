"use client";
import React, { useState, useEffect } from 'react';
// ၁။ Link ကို ဒီမှာ Import လုပ်ထားပါတယ်
import Link from 'next/link';

const banners = [
  "/promo1.png",
  "/promo2.png",
  "/promo3.png",
  "/promo4.png",
  "/promo5.png",
];

const allItems = [
  { id: 'mlbb', name: 'Mobile Legends', icon: '/mlbb-logo.png', category: 'games' },
  { id: 'pubg', name: 'PUBG Mobile', icon: '/pubg-logo.png', category: 'games' },
  { id: 'ff', name: 'Free Fire', icon: '/ff-logo.png', category: 'games' },
  { id: 'hok', name: 'Honor of Kings', icon: '/hok-logo.png', category: 'games' },
  { id: 'genshin', name: 'Genshin Impact', icon: '/genshin-logo.png', category: 'games' },
  { id: 'valorant', name: 'Valorant', icon: '/valorant-logo.png', category: 'games' },
  { id: 'netflix', name: 'Netflix', icon: '/netflix-logo.png', category: 'social' },
  { id: 'youtube', name: 'YouTube', icon: '/youtube-logo.png', category: 'social' },
  { id: 'spotify', name: 'Spotify', icon: '/spotify-logo.png', category: 'social' },
  { id: 'canva', name: 'Canva Pro', icon: '/canva-logo.png', category: 'social' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState('games');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredItems = allItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="p-4 border-b border-gray-900 bg-black/80 sticky top-0 z-50 flex justify-between items-center">
        <h1 className="text-xl font-black text-yellow-500 tracking-tighter italic">KP TOPUP</h1>
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-xs">👤</div>
      </nav>

      {/* Hero Image Slider */}
      <div className="p-4 md:p-6">
        <div className="relative w-full h-44 md:h-80 overflow-hidden rounded-2xl shadow-2xl border border-gray-800 bg-gray-900">
          {banners.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
            >
              <img 
                src={img} 
                className="w-full h-full object-cover" 
                onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/800x400?text=Promo+" + (index+1) }}
              />
            </div>
          ))}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {banners.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all ${i === current ? 'w-4 bg-yellow-500' : 'w-1.5 bg-white/30'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 mb-6">
        <div className="flex gap-6 border-b border-gray-900">
          <button 
            onClick={() => setActiveTab('games')}
            className={`pb-3 text-sm font-bold tracking-widest transition-all ${activeTab === 'games' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-500'}`}
          >
            GAMES
          </button>
          <button 
            onClick={() => setActiveTab('social')}
            className={`pb-3 text-sm font-bold tracking-widest transition-all ${activeTab === 'social' ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-500'}`}
          >
            SOCIAL APP
          </button>
        </div>
      </div>

      {/* ၂။ Link ချိတ်ဆက်ထားသော Grid Item များ */}
      <div className="px-6 pb-24">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {filteredItems.map((item) => (
            <Link 
              href={item.id === 'mlbb' ? '/mlbb' : '#'} 
              key={item.id} 
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="w-full aspect-square bg-gray-900 rounded-2xl border border-gray-800 p-2 group-hover:border-yellow-500 transition-all flex items-center justify-center overflow-hidden">
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" 
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150?text=" + item.name }}
                />
              </div>
              <p className="mt-2 text-[10px] md:text-xs font-medium text-gray-400 group-hover:text-white text-center line-clamp-1 uppercase">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950/90 backdrop-blur-md border-t border-gray-900 p-3 flex justify-around md:hidden z-50">
        <div className="flex flex-col items-center text-yellow-500"><span className="text-lg">🏠</span><span className="text-[10px]">Home</span></div>
        <div className="flex flex-col items-center text-gray-500"><span className="text-lg">📜</span><span className="text-[10px]">History</span></div>
        <div className="flex flex-col items-center text-gray-500"><span className="text-lg">📞</span><span className="text-[10px]">Support</span></div>
      </div>
    </div>
  );
}

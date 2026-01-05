"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const banners = ["/promo1.png", "/promo2.png", "/promo3.png"];
const categories = ["Game Mobile", "Mlbb Mobile", "Pc Game", "Voucher", "Social", "Via login"];

const allItems = [
  // MLBB - /mlbb/server ကိုသွားမည်
  { id: 'mlbb', name: 'MOBILE LEGENDS', icon: '/mlbb-logo.png', category: 'Mlbb Mobile', path: '/mlbb/server' },
  
  // PUBG - /pubg/order ကိုသွားမည်
  { id: 'pubg', name: 'PUBG MOBILE', icon: '/pubg-logo.png', category: 'Game Mobile', path: '/pubg/order' },
  
  // Telegram Premium - /telegram/order ကိုသွားမည်
  { id: 'telegram', name: 'Telegram Premium', icon: '/telegram.png', category: 'Social', path: '/telegram/order' },
  

  { id: 'ff', name: 'FREE FIRE', icon: '/ff-logo.png', category: 'Game Mobile', path: '#' },
  { id: 'hok', name: 'HONOR OF KINGS', icon: '/hok-logo.png', category: 'Game Mobile', path: '#' },
  { id: 'spotify', name: 'Spotify Premium', icon: '/spotify.png', category: 'Social', path: '#' },
  { id: 'capcut', name: 'CapCut PRO', icon: '/capcut.png', category: 'Social', path: 'capcut/order' },
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
      {/* Navigation Bar */}
      <nav className="p-4 border-b border-gray-900 bg-black/80 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black text-yellow-500 italic tracking-tighter uppercase">KP TOPUP</h1>
          <button className="bg-white text-black px-6 py-2 rounded-full text-xs font-black uppercase hover:bg-yellow-500 transition-all active:scale-95 shadow-lg shadow-white/5">Login</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 md:p-6">
        {/* Banner Slider Section */}
        <div className="relative w-full h-44 md:h-80 overflow-hidden rounded-[2.5rem] border border-gray-800 mb-8 shadow-2xl group">
          {banners.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${index === currentBanner ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`} 
              alt={`Promo ${index + 1}`}
            />
          ))}
          {/* Slider Progress Dots */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {banners.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${i === currentBanner ? 'w-10 bg-yellow-500 shadow-[0_0_10px_#eab308]' : 'w-2 bg-white/20'}`}></div>
            ))}
          </div>
          {/* Banner Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
        </div>

        {/* Categories Navigation & Search Bar */}
        <div className="flex flex-col lg:flex-row gap-5 justify-between items-center mb-10 bg-[#111] p-5 rounded-[2.2rem] border border-gray-800 shadow-xl">
          <div className="flex gap-2 overflow-x-auto w-full no-scrollbar pb-1 lg:pb-0">
            {categories.map((tab) => (
              <button 
                key={tab} 
                onClick={() => setActiveTab(tab)} 
                className={`px-6 py-3.5 rounded-full text-[11px] font-black border whitespace-nowrap transition-all duration-300 ${
                  activeTab === tab 
                  ? 'bg-yellow-500 text-black border-yellow-500 shadow-lg shadow-yellow-500/20' 
                  : 'bg-black border-gray-800 text-gray-500 hover:border-gray-600 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-96 group">
            <input 
              type="text" 
              placeholder="Search Games or Services..." 
              className="w-full bg-[#181818] text-white py-4 px-7 rounded-full text-xs font-bold outline-none border border-gray-800 focus:border-yellow-500 transition-all placeholder:text-gray-600" 
            />
          </div>
        </div>

        {/* Dynamic Items Grid Section */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <Link 
              href={item.path} 
              key={item.id} 
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square bg-[#111] rounded-[2.5rem] border border-gray-800 p-4 group-hover:border-yellow-500 group-hover:shadow-[0_15px_35px_rgba(234,179,8,0.12)] transition-all duration-500 overflow-hidden relative">
                <img 
                  src={item.icon} 
                  className="w-full h-full object-cover rounded-[2rem] group-hover:scale-110 transition-transform duration-700 ease-out" 
                  alt={item.name}
                />
              </div>
              <p className="mt-5 text-[10px] font-black text-gray-500 group-hover:text-yellow-500 uppercase tracking-tighter truncate w-full text-center transition-colors duration-300">
                {item.name}
              </p>
            </Link>
          ))}
        </div>

        {/* Empty State Handler */}
        {filteredItems.length === 0 && (
          <div className="text-center py-28 border-2 border-dashed border-gray-900 rounded-[3rem]">
            <p className="text-gray-700 font-black italic uppercase tracking-[0.3em] text-[10px]">
              Coming Soon Items
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
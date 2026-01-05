"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// ၁။ Banner ပုံများ
const banners = ["/promo1.png", "/promo2.png", "/promo3.png"];

// ၂။ Category Tabs များ
const categories = ["Game Mobile", "Mlbb Mobile", "Pc Game", "Voucher", "Social", "Via login"];

// ၃။ ဂိမ်းနှင့် Social App စာရင်းများ (ပုံထဲကအတိုင်း အစုံအလင်)
const allItems = [
  { id: 'mlbb', name: 'MOBILE LEGENDS', icon: '/mlbb-logo.png', category: 'Mlbb Mobile' },
  { id: 'pubg', name: 'PUBG MOBILE', icon: '/pubg-logo.png', category: 'Game Mobile' },
  { id: 'ff', name: 'FREE FIRE', icon: '/ff-logo.png', category: 'Game Mobile' },
  { id: 'hok', name: 'HONOR OF KINGS', icon: '/hok-logo.png', category: 'Game Mobile' },
  { id: 'genshin', name: 'GENSHIN IMPACT', icon: '/genshin-logo.png', category: 'Game Mobile' },
  { id: 'valorant', name: 'VALORANT', icon: '/valorant-logo.png', category: 'Pc Game' },

  // Social Category Items
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
  { id: 'playstation', name: 'PlayStation Gift', icon: '/ps.png', category: 'Social' },
  { id: 'pronhub', name: 'Pron Hub', icon: '/phub.png', category: 'Social' },
  { id: 'duolingo', name: 'Duolingo Premium', icon: '/duolingo.png', category: 'Social' },
];

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [activeTab, setActiveTab] = useState("Mlbb Mobile");
  const [searchQuery, setSearchQuery] = useState("");

  // Banner Auto-slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Filter Logic
  const filteredItems = allItems.filter(item => {
    const matchesTab = item.category === activeTab;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans pb-20">
      
      {/* Navbar */}
      <nav className="p-4 bg-black/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-black text-yellow-500 italic">KP TOPUP</h1>
          <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold uppercase hover:bg-yellow-500 transition">Login</button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 md:p-6">
        
        {/* Banner Slider */}
        <div className="relative w-full h-40 md:h-80 overflow-hidden rounded-[2rem] border border-gray-800 mb-10 shadow-2xl">
          {banners.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentBanner ? 'opacity-100' : 'opacity-0'}`} 
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/1200x400?text=KP+Topup+Promo" }}
            />
          ))}
        </div>

        {/* Tab & Search Bar Section (သင်ပို့ထားတဲ့ ပုံအတိုင်း) */}
        <div className="flex flex-col lg:flex-row gap-4 justify-between items-center mb-10 bg-[#111] p-4 rounded-3xl border border-gray-800 shadow-xl">
          <div className="flex gap-2 overflow-x-auto w-full no-scrollbar">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-full text-[11px] font-black whitespace-nowrap border transition-all ${
                  activeTab === tab ? 'bg-[#4ade80] text-black border-[#4ade80]' : 'bg-black border-gray-800 text-gray-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <input 
              type="text" 
              placeholder="Search Game, Voucher, etc" 
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-black py-3 px-6 rounded-full text-xs font-bold outline-none" 
            />
            <span className="absolute right-5 top-3 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Dynamic Section Title */}
        <div className="flex items-center gap-2 mb-8 ml-2">
          <h2 className="text-lg font-black uppercase italic tracking-tighter">{activeTab}</h2>
          <div className="h-4 w-1.5 bg-yellow-500 -skew-x-12"></div>
          <div className="h-4 w-1.5 bg-yellow-500 -skew-x-12"></div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <Link 
              key={item.id}
              // MLBB ဆိုရင် /mlbb/server ကို တန်းသွားမယ်။ တခြားဟာဆိုရင် # (သို့) ၎င်းတို့ရဲ့ page ကိုသွားမယ်။
              href={item.id === 'mlbb' ? '/mlbb/server' : '#'} 
              className="group flex flex-col items-center"
            >
              <div className="w-full aspect-square bg-[#161b22] rounded-[1.8rem] md:rounded-[2.2rem] border border-gray-800 p-2 group-hover:border-yellow-500 transition-all duration-300 relative overflow-hidden shadow-lg">
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-full h-full object-cover rounded-[1.4rem] md:rounded-[1.8rem] group-hover:scale-110 transition-transform duration-500" 
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/200?text=" + item.name }}
                />
              </div>
              <p className="mt-3 text-[9px] md:text-[10px] font-bold text-gray-500 group-hover:text-white text-center uppercase tracking-tighter truncate w-full">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
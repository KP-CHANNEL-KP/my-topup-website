"use client";
import React, { useState, useEffect } from 'react';

// ၁။ Slider အတွက် ပုံနာမည်များ (Public folder ထဲက ပုံနာမည်နဲ့ တူရပါမယ်)
const banners = [
  "/promo1.png",
  "/promo2.png",
  "/promo3.png",
  "/promo4.png",
  "/promo5.png"
];

// ၂။ ရောင်းမည့် ပစ္စည်းများစာရင်း (Games ရော Social App ရော ဒီမှာ စာရင်းသွင်းပါ)
const allItems = [
  { id: 'mlbb', name: 'Mobile Legends', icon: '/mlbb-logo.png', category: 'games' },
  { id: 'pubg', name: 'PUBG Mobile', icon: '/pubg-logo.png', category: 'games' },
  { id: 'ff', name: 'Free Fire', icon: '/ff-logo.png', category: 'games' },
  { id: 'hok', name: 'Honor of Kings', icon: '/hok-logo.png', category: 'games' },
  { id: 'netflix', name: 'Netflix Premium', icon: '/netflix-logo.png', category: 'social' },
  { id: 'youtube', name: 'YouTube Premium', icon: '/youtube-logo.png', category: 'social' },
  { id: 'spotify', name: 'Spotify Premium', icon: '/spotify-logo.png', category: 'social' },
  { id: 'canva', name: 'Canva Pro', icon: '/canva-logo.png', category: 'social' },
];

export default function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [activeTab, setActiveTab] = useState('games'); 

  // Auto Slider ပတ်ရန် Logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // ရွေးထားတဲ့ Tab အလိုက် ပစ္စည်းများကို Filter လုပ်ခြင်း
  const filteredItems = allItems.filter(item => item.category === activeTab);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header Section */}
      <nav className="p-4 bg-gray-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-900 flex justify-between items-center">
        <h1 className="text-2xl font-black text-yellow-500 tracking-tighter italic">KP TOPUP</h1>
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">👤</div>
      </nav>

      {/* Promotion Slider */}
      <div className="p-4 md:p-6 max-w-5xl mx-auto">
        <div className="relative w-full h-48 md:h-80 overflow-hidden rounded-[2rem] border border-gray-800 shadow-2xl bg-gray-900">
          {banners.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentBanner ? 'opacity-100' : 'opacity-0'}`}
              onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/1200x600?text=Banner+" + (index+1) }}
            />
          ))}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentBanner ? 'w-6 bg-yellow-500' : 'w-2 bg-white/30'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Tab Menu (GAMES / SOCIAL APP) */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex bg-gray-900/50 p-1.5 rounded-2xl border border-gray-800 mb-8 max-w-md mx-auto">
          <button 
            onClick={() => setActiveTab('games')}
            className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'games' ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' : 'text-gray-400 hover:text-white'}`}
          >
            🕹️ GAMES
          </button>
          <button 
            onClick={() => setActiveTab('social')}
            className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${activeTab === 'social' ? 'bg-yellow-500 text-black shadow-lg shadow-yellow-500/20' : 'text-gray-400 hover:text-white'}`}
          >
            📱 SOCIAL APP
          </button>
        </div>

        {/* Display Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 pb-32">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col items-center">
              <div className="w-full aspect-square bg-gray-900 rounded-[1.5rem] border border-gray-800 p-2.5 group-hover:border-yellow-500/50 group-hover:bg-gray-800 transition-all duration-300 flex items-center justify-center overflow-hidden relative">
                <img 
                  src={item.icon} 
                  alt={item.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/200?text=" + item.name }}
                />
              </div>
              <p className="mt-3 text-[10px] md:text-sm font-semibold text-gray-400 group-hover:text-yellow-500 text-center uppercase tracking-tight">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-gray-950/90 backdrop-blur-2xl border border-gray-800 rounded-[2rem] p-4 flex justify-around items-center shadow-2xl md:hidden z-50">
        <div className="flex flex-col items-center text-yellow-500 font-bold"><span className="text-xl">🏠</span><span className="text-[10px]">Home</span></div>
        <div className="flex flex-col items-center text-gray-500"><span className="text-xl">📄</span><span className="text-[10px]">Orders</span></div>
        <div className="flex flex-col items-center text-gray-500"><span className="text-xl">💬</span><span className="text-[10px]">Chat</span></div>
      </div>
    </div>
  );
}

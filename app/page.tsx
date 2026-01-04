"use client";
import React, { useState, useEffect } from 'react';

const banners = [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000",
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000",
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000",
];

const games = [
  { id: 'mlbb', name: 'Mobile Legends', icon: '/mlbb-logo.png' },
  { id: 'pubg', name: 'PUBG Mobile', icon: '/pubg-logo.png' },
  { id: 'ff', name: 'Free Fire', icon: '/ff-logo.png' },
  { id: 'hok', name: 'Honor of Kings', icon: '/hok-logo.png' },
  { id: 'genshin', name: 'Genshin Impact', icon: '/genshin-logo.png' },
  { id: 'valorant', name: 'Valorant', icon: '/valorant-logo.png' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <nav className="p-4 border-b border-gray-900 bg-black/80 sticky top-0 z-50 flex justify-between items-center">
        <h1 className="text-xl font-black text-yellow-500 tracking-tighter">KP TOPUP</h1>
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-xs">👤</div>
      </nav>

      {/* Hero Image Slider */}
      <div className="p-4 md:p-6">
        <div className="relative w-full h-44 md:h-80 overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          {banners.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={img} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <div>
                  <h2 className="text-xl font-bold italic text-yellow-500">SPECIAL PROMO</h2>
                  <p className="text-gray-200 text-xs">အမြန်ဆုံးနဲ့ အသက်သာဆုံး ဝယ်ယူလိုက်ပါ</p>
                </div>
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {banners.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all ${i === current ? 'w-4 bg-yellow-500' : 'w-1.5 bg-white/30'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Game Grid with Icons */}
      <div className="px-6 pb-20">
        <h3 className="text-md font-bold mb-5 flex items-center gap-2">
          <span className="w-1 h-5 bg-yellow-500 rounded-full"></span>
          Popular Games
        </h3>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {games.map((game) => (
            <div key={game.id} className="group cursor-pointer flex flex-col items-center">
              <div className="w-full aspect-square bg-gray-900 rounded-2xl border border-gray-800 p-2 group-hover:border-yellow-500 transition-all flex items-center justify-center overflow-hidden">
                <img 
                  src={game.icon} 
                  alt={game.name} 
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/150?text=" + game.name }}
                />
              </div>
              <p className="mt-2 text-[10px] md:text-xs font-medium text-gray-400 group-hover:text-white text-center line-clamp-1">{game.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950 border-t border-gray-900 p-3 flex justify-around md:hidden">
        <span className="text-yellow-500 text-[10px]">🏠 Home</span>
        <span className="text-gray-500 text-[10px]">📜 History</span>
        <span className="text-gray-500 text-[10px]">📞 Help</span>
      </div>
    </div>
  );
}
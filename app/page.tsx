"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000", // ကြော်ငြာပုံ ၁
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000", // ကြော်ငြာပုံ ၂
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000", // ကြော်ငြာပုံ ၃
];

const games = [
  { id: 'mlbb', name: 'Mobile Legends', icon: '/mlbb-logo.png' }, // PNG ပုံ နာမည်များ
  { id: 'pubg', name: 'PUBG Mobile', icon: '/pubg-logo.png' },
  { id: 'ff', name: 'Free Fire', icon: '/ff-logo.png' },
  { id: 'hok', name: 'Honor of Kings', icon: '/hok-logo.png' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto Slide Logic (၅ စက္ကန့်တစ်ခါ ရွေ့မယ်)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="p-4 border-b border-gray-900 bg-black/80 sticky top-0 z-50 flex justify-between">
        <h1 className="text-xl font-black text-yellow-500">KP TOPUP</h1>
      </nav>

      {/* Image Slider Section */}
      <div className="p-4 md:p-6">
        <div className="relative w-full h-48 md:h-80 overflow-hidden rounded-3xl shadow-2xl">
          {banners.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={img} alt="promo" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h2 className="text-2xl font-bold italic">PROMO DEALS</h2>
                  <p className="text-gray-200 text-sm">အမြန်ဆုံးနဲ့ အသက်သာဆုံး ဝယ်ယူလိုက်ပါ</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, i) => (
              <div key={i} className={`h-1.5 rounded-full transition-all ${i === current ? 'w-6 bg-yellow-500' : 'w-2 bg-white/50'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Game Categories with PNG Icons */}
      <div className="px-6 pb-20">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
          Popular Games
        </h3>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {games.map((game) => (
            <div key={game.id} className="group cursor-pointer flex flex-col items-center">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-900 rounded-2xl border border-gray-800 p-2 group-hover:border-yellow-500 transition-all overflow-hidden flex items-center justify-center">
                {/* PNG ပုံ မရှိသေးရင် နာမည်ပဲ ပေါ်နေပါလိမ့်မယ် */}
                <img 
                  src={game.icon} 
                  alt={game.name} 
                  onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/100?text=" + game.id }}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform" 
                />
              </div>
              <p className="mt-2 text-[10px] md:text-xs font-medium text-gray-400 group-hover:text-white text-center">{game.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 
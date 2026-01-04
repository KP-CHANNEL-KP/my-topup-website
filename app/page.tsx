"use client";

import React, { useEffect, useState } from "react";

/* ================= BANNERS ================= */
const banners = [
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000",
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1000",
  "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1000",
];

/* ================= CATEGORIES ================= */
const categories = [
  "Game Mobile",
  "MLBB Mobile",
  "PC Game",
  "Voucher",
  "Social",
  "Via login",
];

/* ================= GAMES ================= */
const games = [
  {
    id: "mlbb",
    name: "Mobile Legends",
    icon: "/mlbb-logo.png",
    category: "MLBB Mobile",
  },
  {
    id: "pubg",
    name: "PUBG Mobile",
    icon: "/pubg-logo.png",
    category: "Game Mobile",
  },
  {
    id: "ff",
    name: "Free Fire",
    icon: "/ff-logo.png",
    category: "Game Mobile",
  },
  {
    id: "hok",
    name: "Honor of Kings",
    icon: "/hok-logo.png",
    category: "Game Mobile",
  },
  {
    id: "genshin",
    name: "Genshin Impact",
    icon: "/genshin-logo.png",
    category: "PC Game",
  },
  {
    id: "valorant",
    name: "Valorant",
    icon: "/valorant-logo.png",
    category: "PC Game",
  },
  {
    id: "fb",
    name: "Facebook Likes",
    icon: "/file.svg",
    category: "Social",
  },
];

/* ================= MLBB SERVERS ================= */
const mlbbServers = [
  { id: "global", name: "MLBB Global", image: "/mlbb-global.png" },
  { id: "indo", name: "MLBB Indonesia", image: "/mlbb-indo.png" },
  { id: "ph", name: "MLBB Philippines", image: "/mlbb-ph.png" },
  { id: "br", name: "MLBB Brazil", image: "/mlbb-br.png" },
  { id: "login", name: "MLBB Login", image: "/mlbb-login.png" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [activeCategory, setActiveCategory] = useState("MLBB Mobile");
  const [search, setSearch] = useState("");
  const [openMlbb, setOpenMlbb] = useState(false);

  /* Banner auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /* Filter games */
  const filteredGames = games.filter(
    (g) =>
      g.category === activeCategory &&
      g.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ================= NAV ================= */}
      <nav className="p-4 border-b border-gray-900 sticky top-0 bg-black z-50 flex justify-between">
        <h1 className="text-xl font-black text-yellow-500">KP TOPUP</h1>
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
          👤
        </div>
      </nav>

      {/* ================= BANNER ================= */}
      <div className="p-4">
        <div className="relative h-44 md:h-80 overflow-hidden rounded-2xl border border-gray-800">
          {banners.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={img} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80" />
            </div>
          ))}
        </div>
      </div>

      {/* ================= FILTER BAR ================= */}
      <div className="px-4 flex flex-col md:flex-row gap-3 mb-6">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs border whitespace-nowrap transition
                ${
                  activeCategory === cat
                    ? "bg-emerald-400 text-black border-emerald-400"
                    : "border-emerald-400 text-white hover:bg-emerald-400/10"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="md:ml-auto relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search Game, Voucher, etc"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white text-black rounded-full px-4 py-2 text-sm focus:outline-none"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2">🔍</span>
        </div>
      </div>

      {/* ================= GAME GRID ================= */}
      <div className="px-4 pb-24">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              onClick={() => {
                if (game.id === "mlbb") setOpenMlbb(true);
              }}
              className="group cursor-pointer flex flex-col items-center"
            >
              <div className="w-full aspect-square bg-gray-900 rounded-2xl border border-gray-800 p-2 flex items-center justify-center group-hover:border-yellow-500 transition">
                <img
                  src={game.icon}
                  alt={game.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition"
                />
              </div>
              <p className="mt-2 text-[11px] text-gray-400 group-hover:text-white text-center">
                {game.name}
              </p>
            </div>
          ))}
        </div>

        {filteredGames.length === 0 && (
          <p className="text-center text-gray-500 mt-10 text-sm">
            No results found
          </p>
        )}
      </div>

      {/* ================= MLBB MODAL ================= */}
      {openMlbb && (
        <div className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center px-4">
          <div className="bg-gray-950 border border-gray-800 rounded-2xl max-w-5xl w-full p-6 relative">
            <button
              onClick={() => setOpenMlbb(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-yellow-500 mb-1">
              Mobile Legends
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Select Server
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {mlbbServers.map((s) => (
                <div
                  key={s.id}
                  className="cursor-pointer bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-500 transition"
                  onClick={() => {
                    setOpenMlbb(false);
                    console.log("Selected server:", s.id);
                  }}
                >
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-32 object-cover"
                  />
                  <p className="text-xs text-center py-2 text-gray-300">
                    {s.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ================= BOTTOM NAV ================= */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-950 border-t border-gray-900 p-3 flex justify-around md:hidden">
        <span className="text-yellow-500 text-xs">🏠 Home</span>
        <span className="text-gray-500 text-xs">📜 History</span>
        <span className="text-gray-500 text-xs">📞 Help</span>
      </div>
    </div>
  );
}

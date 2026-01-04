"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const games = [
  {
    id: "mlbb",
    name: "Mobile Legends",
    icon: "/mlbb-logo.png",
    category: "MLBB Mobile",
  },
];

const mlbbServers = [
  { id: "global", name: "MLBB Global", image: "/mlbb-global.png" },
  { id: "indo", name: "MLBB Indonesia", image: "/mlbb-indo.png" },
  { id: "ph", name: "MLBB Philippines", image: "/mlbb-ph.png" },
  { id: "br", name: "MLBB Brazil", image: "/mlbb-br.png" },
  { id: "login", name: "MLBB Login", image: "/mlbb-login.png" },
];

export default function Home() {
  const router = useRouter();
  const [openMlbb, setOpenMlbb] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAV */}
      <nav className="p-4 border-b border-gray-900 flex justify-between">
        <h1 className="text-xl font-black text-yellow-500">KP TOPUP</h1>
        <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
          👤
        </div>
      </nav>

      {/* GAME GRID */}
      <div className="p-6 grid grid-cols-3 md:grid-cols-6 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            onClick={() => setOpenMlbb(true)}
            className="cursor-pointer flex flex-col items-center"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-3 w-full aspect-square flex items-center justify-center hover:border-yellow-500 transition">
              <img
                src={game.icon}
                alt={game.name}
                className="object-contain"
              />
            </div>
            <p className="mt-2 text-xs text-gray-400">{game.name}</p>
          </div>
        ))}
      </div>

      {/* MLBB MODAL */}
      {openMlbb && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-950 border border-gray-800 rounded-2xl max-w-5xl w-full p-6 relative">
            <button
              onClick={() => setOpenMlbb(false)}
              className="absolute right-4 top-4 text-gray-400"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-yellow-500 mb-6">
              Select MLBB Server
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {mlbbServers.map((s) => (
                <div
                  key={s.id}
                  onClick={() => {
                    setOpenMlbb(false);
                    router.push(`/mlbb/${s.id}`);
                  }}
                  className="cursor-pointer bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-yellow-500 transition"
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
    </div>
  );
}


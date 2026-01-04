import React from 'react';

const games = [
  { id: 'mlbb', name: 'Mobile Legends', image: 'ML', color: 'from-blue-600 to-blue-900' },
  { id: 'pubg', name: 'PUBG Mobile', image: 'PUBG', color: 'from-orange-500 to-yellow-700' },
  { id: 'ff', name: 'Free Fire', image: 'FF', color: 'from-red-600 to-red-900' },
  { id: 'genshin', name: 'Genshin Impact', image: 'GI', color: 'from-teal-500 to-blue-700' },
  { id: 'valorant', name: 'Valorant', image: 'VAL', color: 'from-pink-600 to-red-800' },
  { id: 'hok', name: 'Honor of Kings', image: 'HOK', color: 'from-yellow-600 to-blue-800' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Navigation Bar */}
      <nav className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/50 backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-xl font-black text-yellow-500 tracking-tighter">KP TOPUP</h1>
        <div className="flex gap-4 text-sm text-gray-400">
          <span>Search</span>
          <span>Contact</span>
        </div>
      </nav>

      {/* Hero Banner */}
      <div className="p-6">
        <div className="w-full h-40 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 rounded-3xl flex items-center p-8 shadow-2xl overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-1">ဂိမ်းအမျိုးစုံကို</h2>
            <p className="text-gray-200">အမြန်ဆုံးနဲ့ အသက်သာဆုံး ဝယ်ယူလိုက်ပါ</p>
          </div>
          <div className="absolute right-[-20px] opacity-20 text-[100px] font-black italic select-none">TOPUP</div>
        </div>
      </div>

      {/* Game List Grid */}
      <div className="px-6 pb-20">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-yellow-500 rounded-full"></span>
          Popular Games
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {games.map((game) => (
            <div key={game.id} className="group cursor-pointer">
              <div className={`aspect-square rounded-3xl bg-gradient-to-br ${game.color} shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-500/20 flex items-center justify-center text-3xl font-black tracking-tighter relative overflow-hidden`}>
                {game.image}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <p className="mt-3 text-sm font-semibold text-center text-gray-300 group-hover:text-white transition-colors">{game.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Navigation (Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 backdrop-blur-xl border-t border-gray-800 p-4 flex justify-around md:hidden">
        <div className="flex flex-col items-center text-yellow-500"><span className="text-xs">Home</span></div>
        <div className="flex flex-col items-center text-gray-500"><span className="text-xs">History</span></div>
        <div className="flex flex-col items-center text-gray-500"><span className="text-xs">Profile</span></div>
      </div>
    </div>
  );
}
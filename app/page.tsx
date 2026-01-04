import React from 'react';

export default function TopupPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans pb-10">
      {/* Header Image/Banner */}
      <div className="w-full h-48 bg-gradient-to-r from-blue-900 to-purple-900 flex items-center justify-center border-b border-gray-800">
        <h1 className="text-4xl font-black tracking-tighter italic">MLBB TOPUP</h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Left Side: Game Info */}
          <div className="md:col-span-1">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 sticky top-6">
              <div className="w-24 h-24 bg-blue-600 rounded-2xl mb-4 mx-auto overflow-hidden shadow-lg shadow-blue-500/20">
                {/* Game Icon Placeholder */}
                <div className="w-full h-full flex items-center justify-center text-3xl font-bold">ML</div>
              </div>
              <h2 className="text-xl font-bold text-center mb-1">Mobile Legends</h2>
              <p className="text-gray-400 text-xs text-center mb-4">Moonton</p>
              <div className="space-y-2 text-sm text-gray-300 border-t border-gray-800 pt-4">
                <p>✅ Automatic Instant</p>
                <p>✅ 24/7 Service</p>
                <p>✅ Official Direct</p>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="md:col-span-2 space-y-6">
            
            {/* Step 1: Account Info */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
                <h3 className="text-lg font-bold">Account Information</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="User ID" className="bg-gray-800 border border-gray-700 rounded-xl p-3 outline-none focus:border-blue-500 transition" />
                <input type="text" placeholder="Zone ID" className="bg-gray-800 border border-gray-700 rounded-xl p-3 outline-none focus:border-blue-500 transition" />
              </div>
            </div>

            {/* Step 2: Select Items */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
                <h3 className="text-lg font-bold">Select Diamonds</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[86, 172, 257, 343, 429, 706].map((item) => (
                  <button key={item} className="bg-gray-800 border border-gray-700 hover:border-blue-500 p-3 rounded-xl text-center transition group">
                    <div className="text-sm font-bold group-hover:text-blue-400">{item} Diamonds</div>
                    <div className="text-[10px] text-gray-400">From 2,500 Ks</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Payment & Buy */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
                <h3 className="text-lg font-bold">Buy Now</h3>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all transform active:scale-95">
                CONFIRM ORDER
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
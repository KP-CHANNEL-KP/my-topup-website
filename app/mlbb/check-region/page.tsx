"use client";
import React, { useState } from 'react';
import { Search, User, Globe, ShieldCheck } from 'lucide-react';

export default function CheckRegionPage() {
  const [userId, setUserId] = useState('');
  const [serverId, setServerId] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    if (!userId || !serverId) return alert("Please enter both IDs");
    
    setLoading(true);
    // API မရှိသေးခင် Mock Data နဲ့ အရင်ပြထားတာပါ
    setTimeout(() => {
      setResult({
        id: userId,
        server: serverId,
        nickname: "~K~P~",
        country: "Myanmar"
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 pt-12">
      <div className="max-w-xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter italic">
            Check Mobile Legends <span className="text-yellow-500">Region</span>
          </h1>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
            Enter your User ID and Server ID to check your ML account region.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-[#111] rounded-[2.5rem] border border-gray-800 p-8 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label className="text-[9px] text-gray-500 font-black uppercase mb-3 block ml-1 tracking-widest text-left">User ID</label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-500" />
                <input 
                  type="number" 
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="e.g. 721027427" 
                  className="w-full bg-black p-5 pl-14 rounded-2xl border border-gray-800 outline-none focus:border-yellow-500 text-sm font-bold transition-all" 
                />
              </div>
            </div>

            <div>
              <label className="text-[9px] text-gray-500 font-black uppercase mb-3 block ml-1 tracking-widest text-left">Server ID</label>
              <div className="relative">
                <ShieldCheck className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-500" />
                <input 
                  type="number" 
                  value={serverId}
                  onChange={(e) => setServerId(e.target.value)}
                  placeholder="e.g. 8881" 
                  className="w-full bg-black p-5 pl-14 rounded-2xl border border-gray-800 outline-none focus:border-yellow-500 text-sm font-bold transition-all" 
                />
              </div>
            </div>

            <button 
              onClick={handleCheck}
              disabled={loading}
              className="w-full bg-[#4ade80]/10 hover:bg-[#4ade80] text-[#4ade80] hover:text-black py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 border border-[#4ade80]/20"
            >
              {loading ? (
                <span className="animate-pulse">Checking...</span>
              ) : (
                <><Search className="w-4 h-4" /> Check Region</>
              )}
            </button>
          </div>
        </div>

        {/* Result Card */}
        {result && (
          <div className="bg-[#111] rounded-[2.5rem] border border-gray-800 overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-black/50 px-8 py-4 border-b border-gray-800">
              <h2 className="text-[11px] font-black uppercase tracking-[0.2em] text-yellow-500">Region Check Result</h2>
            </div>
            <div className="p-8 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-900 pb-3">
                <span className="text-[10px] font-black text-gray-500 uppercase">Account ID:</span>
                <span className="text-xs font-bold">{result.id} ({result.server})</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-900 pb-3">
                <span className="text-[10px] font-black text-gray-500 uppercase">Nickname:</span>
                <span className="text-xs font-bold text-yellow-500 italic">{result.nickname}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-gray-500 uppercase">Country:</span>
                <span className="flex items-center gap-2 text-xs font-bold">
                   <Globe className="w-3 h-3 text-blue-500" /> {result.country}
                </span>
              </div>
            </div>
          </div>
        )}

        <p className="text-center text-[9px] text-gray-600 font-bold uppercase tracking-widest">
           Please make sure the information you entered is correct.
        </p>
      </div>
    </div>
  );
}
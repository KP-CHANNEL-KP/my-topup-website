"use client";
import React from 'react';
import Link from 'next/link';

const servers = [
  { id: 'indo', name: 'MLBB အင်ဒိုနီးရှား', desc: 'တိုက်ရိုက်တင်မည်', icon: '/mlbb-indo.png' },
  { id: 'ph', name: 'MLBB ဖိလစ်ပိုင်', desc: 'အမြန်ပို့ဆောင်ပေးမည်', icon: '/mlbb-ph.png' },
  { id: 'global', name: 'MLBB ဂလိုဘယ်', desc: 'ချက်ချင်းတင်ပေးသည်', icon: '/mlbb-global.png' },
  { id: 'brazil', name: 'MLBB ဘရာဇီး', desc: 'ဒေသတွင်းဈေးနှုန်း', icon: '/mlbb-br.png' },
  { id: 'login', name: 'MLBB အကောင့်ဝင်တင်ရန်', desc: 'အထူးကမ်းလှမ်းချက်', icon: '/mlbb-login.png' },
  { id: 'sg', name: 'MLBB စင်ကာပူ', desc: 'ချက်ချင်းတင်ပေးသည်', icon: '/mlbb-sg.png' },
];

export default function ServerPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/" className="bg-gray-900 w-10 h-10 rounded-full flex items-center justify-center border border-gray-800 hover:bg-gray-800 transition-all shadow-lg">❮</Link>
          <div>
            <h1 className="text-xl font-black uppercase italic tracking-tighter">ဆာဗာ ရွေးချယ်ပါ</h1>
            <p className="text-[10px] text-yellow-500 font-bold tracking-[0.2em] uppercase">Mobile Legends: Bang Bang</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {servers.map((s) => (
            <Link key={s.id} href={`/mlbb/order?server=${s.id}`} className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all duration-300 shadow-2xl">
              {/* Opacity ကို 100 လို့ ပြောင်းထားပါတယ် - ဒါမှ ပုံက တောက်ပနေမှာပါ */}
              <img 
                src={s.icon} 
                alt={s.name}
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-500" 
              />
              
              {/* စာသားတွေ ပေါ်အောင် အောက်ခြေမှာ Gradient လေးပဲ ခံထားပါတယ် */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent p-5 flex flex-col justify-end">
                <h3 className="text-[12px] font-black group-hover:text-yellow-500 transition-colors leading-tight mb-1">{s.name}</h3>
                <p className="text-[9px] text-gray-400 font-bold">{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
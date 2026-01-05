"use client";
import React from 'react';
import Link from 'next/link';

const servers = [
  { id: 'mm', name: 'MYANMAR SERVER', icon: '🇲🇲', desc: 'Instant Delivery' },
  { id: 'global', name: 'GLOBAL SERVER', icon: '🌍', desc: 'Fast Delivery' },
  { id: 'wdp', name: 'WEEKLY PASS', icon: '💎', desc: 'Best Price' },
];

export default function ServerPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <div className="max-w-md mx-auto space-y-6">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/" className="bg-gray-900 w-10 h-10 rounded-full flex items-center justify-center border border-gray-800">❮</Link>
          <h1 className="text-xl font-bold uppercase tracking-tight">Select Server</h1>
        </div>

        <div className="grid gap-4">
          {servers.map((s) => (
            <Link key={s.id} href="/mlbb" className="flex items-center justify-between bg-gray-900/40 border border-gray-800 p-6 rounded-[2.2rem] hover:border-blue-500 transition-all active:scale-95 group shadow-xl">
              <div className="flex items-center gap-5">
                <span className="text-4xl filter drop-shadow-md">{s.icon}</span>
                <div>
                  <h3 className="font-bold group-hover:text-blue-400 text-sm tracking-wide">{s.name}</h3>
                  <p className="text-[10px] text-gray-500 mt-1">{s.desc}</p>
                </div>
              </div>
              <span className="text-gray-700 group-hover:text-blue-500 transition-colors">❯</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
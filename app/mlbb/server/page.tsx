"use client";
import React from 'react';
import Link from 'next/link';

const servers = [
  { id: 'indo', name: 'MLBB INDONESIA', icon: '/indo.jpg' },
  { id: 'ph', name: 'MLBB PHILIPPINES', icon: '/ph.jpg' },
  { id: 'global', name: 'MLBB GLOBAL', icon: '/global.jpg' },
  { id: 'brazil', name: 'MLBB BRAZIL', icon: '/brazil.jpg' },
  { id: 'login', name: 'MLBB LOGIN', icon: '/login.jpg' },
  { id: 'russia', name: 'MLBB RUSSIA', icon: '/russia.jpg' },
];

export default function ServerPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/" className="bg-gray-900 w-10 h-10 rounded-full flex items-center justify-center border border-gray-800">❮</Link>
          <h1 className="text-xl font-black uppercase italic">Select Server</h1>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {servers.map((s) => (
            <Link key={s.id} href={`/mlbb/order?server=${s.id}`} className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all">
              <img src={s.icon} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all" />
              <div className="absolute inset-0 bg-gradient-to-t from-black flex flex-col justify-end p-4">
                <h3 className="text-[11px] font-black uppercase group-hover:text-yellow-500 transition-colors">{s.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
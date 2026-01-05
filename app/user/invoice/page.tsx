"use client";
import React from 'react';
import { Download, Copy, UploadCloud, CheckCircle2 } from 'lucide-react';

export default function InvoicePage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">Thank You!</p>
          <h1 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">Please complete your payment.</h1>
          <p className="text-gray-500 text-[10px] font-bold uppercase">Your order <span className="text-white">JUVIRA1767630880DF7</span> is waiting for payment before being processed.</p>
        </div>

        <button className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
          <Download className="w-4 h-4" /> Download Invoice
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          {/* Left Side: Detail */}
          <div className="space-y-8">
            <div className="space-y-4">
               <h3 className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Topup Balance</h3>
               <p className="text-sm font-bold">Balance Ks 5000</p>
               <div className="w-24 h-24 border-2 border-emerald-500/20 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border-t-4 border-emerald-500 rounded-full animate-spin"></div>
               </div>
            </div>
            <div className="pt-8 border-t border-gray-900 flex justify-between items-center">
              <span className="text-sm font-bold">Total Price</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg font-black italic border border-gray-700">5,000 Ks</span>
            </div>
          </div>

          {/* Right Side: Payment Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-3xl p-8 text-center space-y-4 shadow-2xl shadow-emerald-500/10">
              <p className="text-[10px] font-black uppercase tracking-widest text-emerald-100">Please make the payment to the account below</p>
              <div>
                <p className="text-[9px] font-bold text-emerald-200 uppercase">Account Name</p>
                <p className="text-lg font-black italic">Aung Paing Soe</p>
              </div>
              <div className="bg-black/20 p-4 rounded-2xl flex justify-between items-center border border-white/10">
                <span className="text-sm font-mono font-bold tracking-wider">09966955081</span>
                <button onClick={() => copyToClipboard('09404454401')} className="p-2 bg-emerald-400 text-black rounded-lg hover:scale-105 transition-transform">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Upload Section */}
            <div className="bg-[#111] rounded-3xl border border-gray-800 p-6 space-y-4">
              <label className="text-[9px] font-black text-gray-500 uppercase tracking-widest block">Upload Proof of Payment</label>
              <div className="border-2 border-dashed border-gray-800 rounded-2xl p-8 text-center group hover:border-emerald-500/50 transition-colors cursor-pointer">
                 <UploadCloud className="w-8 h-8 text-gray-600 mx-auto mb-2 group-hover:text-emerald-500" />
                 <p className="text-[10px] font-bold text-gray-500">Choose File (No file chosen)</p>
              </div>
              <button className="w-full bg-emerald-500 text-black py-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-4 h-4" /> Upload Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
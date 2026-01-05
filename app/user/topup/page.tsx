"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TopUpSelection() {
  const [amount, setAmount] = useState('5000');
  const router = useRouter();

  const handleNext = () => {
    // Invoice page ကို သွားမယ်
    router.push(`/user/invoice?amount=${amount}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-2xl mx-auto bg-[#111] border border-gray-800 rounded-[2rem] p-8">
        <h2 className="text-xl font-black uppercase italic mb-6 border-l-4 border-[#00ffa3] pl-4">Top Up Balance</h2>
        
        <div className="space-y-6">
          <div>
            <label className="text-[10px] text-gray-500 font-bold uppercase block mb-2">Amount</label>
            <input 
              type="number" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-black border border-gray-800 p-4 rounded-xl outline-none focus:border-[#00ffa3]"
            />
          </div>

          <button 
            onClick={handleNext}
            className="w-full bg-[#00ffa3] text-black py-4 rounded-xl font-bold uppercase text-xs tracking-widest"
          >
            Top Up Now
          </button>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

const SERVER_NAME: Record<string, string> = {
  global: "Mobile Legends Global",
  indo: "Mobile Legends Indonesia",
  ph: "Mobile Legends Philippines",
  br: "Mobile Legends Brazil",
  login: "Mobile Legends Login",
};

const products = [
  { id: 1, name: "86 Diamonds", price: "4,613 Ks" },
  { id: 2, name: "172 Diamonds", price: "9,225 Ks" },
  { id: 3, name: "344 Diamonds", price: "18,449 Ks" },
];

export default function MlbbServerPage() {
  const { server } = useParams<{ server: string }>();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-5xl mx-auto">
        {/* HEADER */}
        <h1 className="text-2xl font-bold text-yellow-500">
          {SERVER_NAME[server] ?? "Mobile Legends"}
        </h1>
        <p className="text-gray-400 mb-6">Server: {server}</p>

        {/* STEP 1 */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-4">
          <h3 className="text-emerald-400 font-semibold mb-3">
            1️⃣ Fill Data
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              placeholder="User ID"
              className="bg-black border border-gray-700 rounded-lg px-4 py-2"
            />
            <input
              placeholder="Server ID"
              className="bg-black border border-gray-700 rounded-lg px-4 py-2"
            />
          </div>
        </div>

        {/* STEP 2 */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-4">
          <h3 className="text-emerald-400 font-semibold mb-3">
            2️⃣ Select Nominal
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {products.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelected(p.id)}
                className={`cursor-pointer border rounded-lg p-3 transition
                  ${
                    selected === p.id
                      ? "border-emerald-400 bg-emerald-400/10"
                      : "border-gray-700 hover:border-emerald-400"
                  }`}
              >
                <p className="font-semibold">{p.name}</p>
                <p className="text-xs text-gray-400">{p.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* STEP 3 */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
          <h3 className="text-emerald-400 font-semibold mb-3">
            3️⃣ Select Payment
          </h3>

          <button
            disabled={!selected}
            className="w-full bg-emerald-400 text-black font-bold py-3 rounded-lg disabled:opacity-40"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function TopupPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-xl border border-blue-500">
        <h1 className="text-2xl font-bold text-center text-blue-400 mb-6">MLBB Diamond Top-up</h1>
        
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm">Game ID & Zone ID</label>
            <input type="text" placeholder="e.g. 12345678 (1234)" className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:border-blue-500 outline-none" />
          </div>

          <div>
            <label className="block mb-1 text-sm">Select Diamonds</label>
            <select className="w-full p-2 rounded bg-gray-700 border border-gray-600 outline-none">
              <option>86 Diamonds - 2,500 Ks</option>
              <option>172 Diamonds - 4,800 Ks</option>
              <option>257 Diamonds - 7,200 Ks</option>
              <option>706 Diamonds - 18,500 Ks</option>
            </select>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition">
            Buy Now (Kpay / Wave)
          </button>
        </div>
        
        <p className="text-xs text-center text-gray-400 mt-4">ဂိမ်းထဲသို့ ၅ မိနစ်အတွင်း အလိုအလျောက် ရောက်ရှိပါမည်။</p>
      </div>
    </div>
  );
}
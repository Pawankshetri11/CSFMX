import React from 'react';
import { Info } from 'lucide-react';

const MarketActivity = ({ activityData, isLive }) => {
    const marketData = [
        { symbol: 'GBP/USD', price: '1.2642', change: '+0.12%', positive: true },
        { symbol: 'XAU/USD', price: '2,315.40', change: '+1.50%', positive: true },
        { symbol: 'BTC/USD', price: '64,120.00', change: '-0.40%', positive: false },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden font-poppins">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight">Market Feed</h3>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff00] animate-pulse"></div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Market Active</span>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 text-[10px] uppercase font-bold text-slate-400">
                            <tr>
                                <th className="px-6 py-4">Symbol</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Change</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-sm font-medium">
                            {marketData.map((m, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 font-bold text-slate-900">{m.symbol}</td>
                                    <td className="px-6 py-4 tabular-nums text-slate-600">{m.price}</td>
                                    <td className={`px-6 py-4 text-xs font-bold ${m.positive ? 'text-green-600' : 'text-pink-600'}`}>
                                        {m.change}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button className="text-[10px] font-bold border border-slate-200 px-3 py-1.5 rounded hover:bg-slate-900 hover:text-white transition-all uppercase">
                                            Trade
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-lg border border-slate-200 shadow-sm p-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase mb-6 tracking-tight">Recent Activity</h3>
                <div className="space-y-6">
                    {isLive ? (
                        activityData.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className="w-1 h-6 rounded-full" style={{ backgroundColor: item.color }}></div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 uppercase">{item.type}</p>
                                        <p className="text-[10px] text-slate-400 uppercase font-medium tracking-tighter">{item.date}</p>
                                    </div>
                                </div>
                                <p className="text-sm font-bold text-slate-900 tracking-tighter">{item.amount}</p>
                            </div>
                        ))
                    ) : (
                        <div className="py-12 text-center bg-slate-50 rounded-lg border border-dashed border-slate-200">
                            <Info className="mx-auto mb-2 text-slate-300 w-6 h-6" />
                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">No History</p>
                        </div>
                    )}
                </div>
                <button className="w-full py-3 mt-6 text-[10px] font-black text-slate-400 border border-slate-200 rounded hover:border-slate-400 hover:text-slate-600 transition-all uppercase tracking-[0.2em]">
                    Full Statement
                </button>
            </div>
        </div>
    );
};

export default MarketActivity;

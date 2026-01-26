import React from 'react';

const PerformanceChart = ({ growth }) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 bg-white rounded-lg border border-slate-200 shadow-sm p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div>
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-tight">Performance Chart</h3>
                        <p className="text-[11px] text-slate-400 font-medium uppercase tracking-tighter">Market Growth Analysis</p>
                    </div>
                    <div className="flex bg-slate-50 p-1 rounded border border-slate-100 font-poppins">
                        <button className="px-4 py-1 text-[10px] font-bold rounded bg-white shadow-sm">1D</button>
                        <button className="px-4 py-1 text-[10px] font-bold rounded text-slate-400">1W</button>
                        <button className="px-4 py-1 text-[10px] font-bold rounded text-slate-400">1M</button>
                    </div>
                </div>

                <div className="h-48 flex items-end justify-between gap-2 px-2 mt-4">
                    {growth?.map((val, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end group relative">
                            <div
                                className="w-full rounded-t transition-all duration-500 hover:opacity-80"
                                style={{ height: `${val}%`, backgroundColor: i === 6 ? '#ff00ff' : '#00ff00' }}
                            ></div>
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-[9px] px-2 py-1 rounded font-bold z-10">
                                {val}%
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between mt-4 px-2 text-[10px] font-bold text-slate-300 uppercase">
                    {days.map(day => <span key={day}>{day}</span>)}
                </div>
            </div>

            <div className="lg:col-span-4 bg-white rounded-lg border border-slate-200 shadow-sm p-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase mb-6 tracking-tight">Quick Analysis</h3>
                <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                        <span className="text-xs font-medium text-slate-500 uppercase">Win Rate</span>
                        <span className="text-sm font-bold text-slate-900">68%</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-50">
                        <span className="text-xs font-medium text-slate-500 uppercase">Profit Factor</span>
                        <span className="text-sm font-bold text-slate-900">2.45</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-slate-500 uppercase">Risk Level</span>
                        <span className="text-xs font-black text-green-600 uppercase">Safe</span>
                    </div>
                </div>
                <button className="w-full mt-10 py-3 bg-slate-900 text-white rounded text-xs font-bold uppercase tracking-widest hover:bg-black transition-all">
                    Full Report
                </button>
            </div>
        </div>
    );
};

export default PerformanceChart;

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Download, TrendingUp, BarChart3, Target } from 'lucide-react';

const PromotionLotReport = () => {
    const lotReports = [
        { promo: '900% Bonus', lotReq: '100.00', lotComp: '45.50', lotRem: '54.50', status: 'In Progress' },
        { promo: '800% Bonus', lotReq: '80.00', lotComp: '80.00', lotRem: '0.00', status: 'Completed' },
    ];

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade pb-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">PROMOTION LOT REPORT</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">VOLUME TRACKING & EQUITY CONVERSION ANALYTICS</p>
                    </div>
                    <button className="flex items-center gap-2 bg-black text-[#00ff00] text-[10px] font-black py-4 px-8 rounded hover:bg-slate-800 transition-all uppercase tracking-widest shadow-lg shadow-[#00ff00]/10">
                        <Download size={14} /> EXPORT COMPLIANCE REPORT
                    </button>
                </div>

                {/* Main Report Card */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-max">
                            <thead>
                                <tr className="bg-slate-900 text-white border-b border-white/10 uppercase font-black text-[10px] tracking-widest">
                                    <th className="p-5 border-r border-white/5">Promotion Campaign</th>
                                    <th className="p-5 border-r border-white/5 text-center">Lot Required</th>
                                    <th className="p-5 border-r border-white/5 text-center">Lot Completed</th>
                                    <th className="p-5 border-r border-white/5 text-center">Remaining Balance</th>
                                    <th className="p-5 text-right">Execution Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-[11px] font-bold uppercase tracking-tight text-slate-800">
                                {lotReports.map((report, idx) => (
                                    <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group">
                                        <td className="p-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full bg-[#00ff00]/40 group-hover:bg-[#00ff00] transition-colors" />
                                                <span className="font-black text-slate-900">{report.promo}</span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-center text-slate-400 font-mono tracking-tighter">{report.lotReq}</td>
                                        <td className="p-5 text-center text-[#00ff00] font-mono tracking-tighter">{report.lotComp}</td>
                                        <td className="p-5 text-center text-[#ff00ff] font-mono tracking-tighter">{report.lotRem}</td>
                                        <td className="p-5 text-right px-8">
                                            <span className={`inline-flex items-center px-4 py-2 rounded text-[9px] font-black uppercase tracking-widest border ${
                                                report.status === 'Completed' 
                                                ? 'bg-[#00ff00]/10 border-[#00ff00]/30 text-[#00ff00]' 
                                                : 'bg-slate-100 border-slate-200 text-slate-400'
                                            }`}>
                                                {report.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Tracking Metrics Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 bg-black text-white p-10 rounded-lg shadow-xl relative overflow-hidden group">
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-6">
                                <div className="flex items-center gap-2">
                                    <BarChart3 className="text-[#00ff00] w-5 h-5 group-hover:scale-125 transition-transform" />
                                    <h4 className="text-[11px] font-black uppercase tracking-widest text-[#00ff00]">Aggregated Volume Target</h4>
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between text-[10px] font-black uppercase mb-3">
                                            <span className="text-slate-500">Global Goal Reached</span>
                                            <span className="text-white">69.8%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                            <div className="bg-gradient-to-r from-[#00ff00] to-white h-full transition-all duration-1000" style={{ width: '69.8%' }} />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-6 pt-4">
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">TOTAL TARGET</p>
                                            <p className="text-xl font-black text-white tracking-tighter italic leading-none">180.00 <span className="text-[10px] text-slate-500">LOTS</span></p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">REMAINING</p>
                                            <p className="text-xl font-black text-[#ff00ff] tracking-tighter italic leading-none">54.50 <span className="text-[10px] text-slate-500">LOTS</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:flex flex-col justify-end bg-slate-900/50 p-6 rounded-lg border border-white/5">
                                <p className="text-[10px] font-black text-[#00ff00] uppercase tracking-widest mb-4">Volume Tip</p>
                                <p className="text-[11px] text-slate-400 font-bold uppercase leading-relaxed tracking-wider">
                                    High volatility pairs provide 25% faster volume accumulation towards lot requirements. Check MT5 specifications for details.
                                </p>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4">
                            <TrendingUp size={300} />
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-white border border-slate-200 rounded-lg p-10 flex flex-col items-center justify-center text-center space-y-6 shadow-sm">
                        <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                            <Target className="text-slate-900" size={32} />
                        </div>
                        <div className="space-y-2">
                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Next Milestone</h4>
                            <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed tracking-widest">
                                Complete 50 more lots to unlock Exclusive Partner Rebates.
                            </p>
                        </div>
                        <button className="w-full bg-black text-white px-8 py-4 rounded text-[10px] font-black uppercase tracking-widest hover:bg-[#00ff00] hover:text-black transition-all">
                            View Roadmap
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PromotionLotReport;

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Download, TrendingUp } from 'lucide-react';

const PromotionLotReport = () => {
    const lotReports = [
        { promo: '900% Bonus', lotReq: '100.00', lotComp: '45.50', lotRem: '54.50', status: 'In Progress' },
        { promo: '800% Bonus', lotReq: '80.00', lotComp: '80.00', lotRem: '0.00', status: 'Completed' },
    ];

    return (
        <MainLayout>
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden mb-8">
                <div className="p-1 bg-[#00ff00]"></div>
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Promotion Lot Report</h1>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Track your trading volume requirements</p>
                    </div>
                    <button className="flex items-center gap-2 bg-black text-[#00ff00] text-[10px] font-bold py-2 px-4 rounded hover:bg-slate-800 transition-all uppercase">
                        <Download size={14} /> Export Report
                    </button>
                </div>

                <div className="p-6">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#8cc63f] text-white">
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Promotion Name</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Lot Required</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Lot Completed</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Lot Remaining</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {lotReports.map((report, idx) => (
                                    <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-all">
                                        <td className="p-4 text-[11px] font-bold text-slate-600 text-center uppercase">{report.promo}</td>
                                        <td className="p-4 text-[11px] font-bold text-slate-600 text-center uppercase tracking-tight">{report.lotReq}</td>
                                        <td className="p-4 text-[11px] font-bold text-[#00ff00] text-center uppercase tracking-tight">{report.lotComp}</td>
                                        <td className="p-4 text-[11px] font-bold text-[#ff00ff] text-center uppercase tracking-tight">{report.lotRem}</td>
                                        <td className="p-4 text-center">
                                            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${report.status === 'Completed' ? 'bg-[#00ff00]/10 text-[#00ff00]' : 'bg-slate-100 text-slate-400'}`}>
                                                {report.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black text-white p-6 rounded-lg shadow-lg border border-slate-800">
                    <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="text-[#00ff00] w-4 h-4" />
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total Volume Tracker</h4>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Cumulative Lots Required</span>
                            <span className="text-sm font-black text-[#00ff00]">180.00 Lots</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Remaining to Trade</span>
                            <span className="text-sm font-black text-[#ff00ff]">54.50 Lots</span>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PromotionLotReport;

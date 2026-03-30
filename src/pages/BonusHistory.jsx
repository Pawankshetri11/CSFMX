import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { History, Share2, ClipboardList } from 'lucide-react';

const BonusHistory = () => {
    const history = [
        { id: "csfx25112156", bonus: "900% Bonus", amount: "$500.00", status: "Approved", date: "Oct 12, 2024" },
        { id: "csfx25112156", bonus: "800% Bonus", amount: "$200.00", status: "Rejected", date: "Oct 10, 2024" },
        { id: "csfx25112156", bonus: "650% Bonus", amount: "$150.00", status: "Approved", date: "Oct 08, 2024" },
    ];

    return (
        <MainLayout>
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden mb-8">
                <div className="p-1 bg-[#00ff00]"></div>
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Bonus History</h1>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Review all your previous bonus applications</p>
                    </div>
                </div>

                <div className="p-6">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#8cc63f] text-white">
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Client ID</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Bonus Type</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Amount</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Date</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {history.map((row, idx) => (
                                    <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-all">
                                        <td className="p-4 text-[11px] font-bold text-slate-600 text-center uppercase tracking-tight">{row.id}</td>
                                        <td className="p-4 text-[11px] font-bold text-slate-600 text-center uppercase">{row.bonus}</td>
                                        <td className="p-4 text-[11px] font-bold text-[#00ff00] text-center uppercase tracking-tight">{row.amount}</td>
                                        <td className="p-4 text-[11px] font-bold text-slate-600 text-center uppercase tracking-tight">{row.date}</td>
                                        <td className="p-4 text-center">
                                            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${row.status === 'Approved' ? 'bg-[#00ff00]/10 text-[#00ff00]' : 'bg-red-50 text-red-500'}`}>
                                                {row.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg flex items-center gap-4 group hover:border-[#00ff00] transition-all cursor-pointer">
                    <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-slate-400 group-hover:text-[#00ff00] transition-colors">
                        <History size={20} />
                    </div>
                    <div>
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Last Applied</p>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-tight mt-1">Oct 12, 2024</h4>
                    </div>
                </div>
                
                <button className="bg-slate-50 border border-slate-200 p-5 rounded-lg flex items-center gap-4 group hover:border-[#00ff00] transition-all text-left">
                    <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-slate-400 group-hover:text-[#00ff00] transition-colors">
                        <Share2 size={20} />
                    </div>
                    <div>
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Referral Bonus</p>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-tight mt-1">Share & Earn</h4>
                    </div>
                </button>

                <button className="bg-slate-50 border border-slate-200 p-5 rounded-lg flex items-center gap-4 group hover:border-[#00ff00] transition-all text-left">
                    <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center text-slate-400 group-hover:text-[#00ff00] transition-colors">
                        <ClipboardList size={20} />
                    </div>
                    <div>
                        <p className="text-[8px] font-black text-slate-400 uppercase tracking-widest leading-none">Rules</p>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-tight mt-1">General T&C</h4>
                    </div>
                </button>
            </div>
        </MainLayout>
    );
};

export default BonusHistory;

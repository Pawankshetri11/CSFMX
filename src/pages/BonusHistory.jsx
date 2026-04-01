import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { History, Share2, ClipboardList, Download, ShieldCheck } from 'lucide-react';

const BonusHistory = () => {
    const history = [
        { id: "csfx25112156", bonus: "900% Bonus", amount: "$500.00", status: "Approved", date: "Oct 12, 2024" },
        { id: "csfx25112156", bonus: "800% Bonus", amount: "$200.00", status: "Rejected", date: "Oct 10, 2024" },
        { id: "csfx25112156", bonus: "650% Bonus", amount: "$150.00", status: "Approved", date: "Oct 08, 2024" },
    ];

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade pb-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">BONUS PROTOCOL LOGS</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">HISTORICAL CREDIT ASSIGNMENTS & APPROVAL STATUS</p>
                    </div>
                    <button className="flex items-center gap-2 bg-black text-[#00ff00] text-[10px] font-black py-4 px-8 rounded hover:bg-slate-800 transition-all uppercase tracking-widest shadow-lg shadow-[#00ff00]/10">
                        <Download size={14} /> EXPORT AUDIT LOG
                    </button>
                </div>

                {/* Main Table Card */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-max">
                            <thead>
                                <tr className="bg-slate-900 text-white border-b border-white/10 uppercase font-black text-[10px] tracking-widest">
                                    <th className="p-5 border-r border-white/5">Identifier ID</th>
                                    <th className="p-5 border-r border-white/5">Bonus Classification</th>
                                    <th className="p-5 border-r border-white/5 text-center">Credit Value</th>
                                    <th className="p-5 border-r border-white/5 text-center">Timestamp</th>
                                    <th className="p-5 text-right">Verification</th>
                                </tr>
                            </thead>
                            <tbody className="text-[11px] font-bold uppercase tracking-tight text-slate-880">
                                {history.map((row, idx) => (
                                    <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group">
                                        <td className="p-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-slate-900 transition-colors" />
                                                <span className="font-mono text-slate-400 group-hover:text-slate-900 transition-colors">{row.id}</span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-slate-900 font-black tracking-widest">{row.bonus}</td>
                                        <td className="p-5 text-center text-[#00ff00] font-black tracking-widest">{row.amount}</td>
                                        <td className="p-5 text-center text-slate-400 font-medium tracking-widest">{row.date}</td>
                                        <td className="p-5 text-right px-8">
                                            <span className={`inline-flex items-center px-4 py-1.5 rounded text-[9px] font-black uppercase tracking-widest border ${
                                                row.status === 'Approved' 
                                                ? 'bg-[#00ff00]/10 border-[#00ff00]/30 text-[#00ff00]' 
                                                : 'bg-red-50 border-red-100 text-red-500'
                                            }`}>
                                                {row.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-black p-8 rounded-lg flex items-center gap-6 group hover:rotate-1 transition-all border border-white/5 cursor-pointer shadow-xl">
                        <div className="w-12 h-12 bg-[#00ff00]/10 rounded flex items-center justify-center text-[#00ff00] border border-[#00ff00]/20 group-hover:bg-[#00ff00] group-hover:text-black">
                            <History size={24} />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Global Protocol</p>
                            <h4 className="text-[11px] font-black text-white uppercase tracking-widest leading-none">Full History Audit</h4>
                        </div>
                    </div>
                    
                    <button className="bg-white border border-slate-200 p-8 rounded-lg flex items-center gap-6 group hover:border-[#00ff00] transition-all text-left shadow-sm">
                        <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center text-slate-400 group-hover:text-black group-hover:bg-[#00ff00] transition-all">
                            <Share2 size={24} />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Network Growth</p>
                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest leading-none">Share Rewards</h4>
                        </div>
                    </button>

                    <button className="bg-white border border-slate-200 p-8 rounded-lg flex items-center gap-6 group hover:border-black transition-all text-left shadow-sm">
                        <div className="w-12 h-12 bg-slate-50 rounded flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-black transition-all">
                            <ClipboardList size={24} />
                        </div>
                        <div className="space-y-1">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Compliance</p>
                            <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest leading-none">Protocol Rules</h4>
                        </div>
                    </button>
                </div>

                {/* Secure Badge */}
                <div className="flex items-center justify-center gap-2 pt-4">
                    <ShieldCheck size={14} className="text-slate-200" />
                    <span className="text-[8px] font-black text-slate-300 uppercase tracking-[0.3em]">Institutional Verification Grade System</span>
                </div>
            </div>
        </MainLayout>
    );
};

export default BonusHistory;

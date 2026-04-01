import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { AlertTriangle, Clock, ShieldAlert } from 'lucide-react';

const PromotionCancellation = () => {
    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">EQUITY ADJUSTMENT RECALL</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">BONUS CANCELLATION & MARGIN ACCOUNT LIQUIDATION REQUESTS</p>
                    </div>
                </div>

                {/* Risk Warning Card */}
                <div className="bg-black p-8 rounded-lg text-white border-l-4 border-[#ff00ff] shadow-xl relative overflow-hidden group">
                    <div className="relative z-10 flex items-start gap-6">
                        <div className="p-3 bg-[#ff00ff]/10 text-[#ff00ff] rounded group-hover:bg-[#ff00ff] group-hover:text-black transition-all">
                            <ShieldAlert size={28} />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-black uppercase tracking-tighter leading-none">CRITICAL: Margin Risk Exposure</h3>
                            <p className="text-[11px] text-slate-400 font-bold uppercase leading-relaxed tracking-wider max-w-3xl">
                                Terminating a bonus allocation will result in immediate equity deduction. This may trigger an automatic margin call or account liquidation if the free margin is insufficient to maintain current open positions. Proceed with extreme caution.
                            </p>
                        </div>
                    </div>
                    {/* Background Decor */}
                    <div className="absolute right-0 top-0 opacity-10 pointer-events-none transform translate-x-1/3 -translate-y-1/3">
                        <AlertTriangle size={250} />
                    </div>
                </div>

                {/* Main Action Card */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-max">
                            <thead>
                                <tr className="bg-slate-900 text-white border-b border-white/10 uppercase font-black text-[10px] tracking-widest">
                                    <th className="p-5 border-r border-white/5">Asset Recipient ID</th>
                                    <th className="p-5 border-r border-white/5">Allocated Promotion</th>
                                    <th className="p-5 border-r border-white/5 text-center">Protocol Acceptance Date</th>
                                    <th className="p-5 text-right">Termination Protocol</th>
                                </tr>
                            </thead>
                            <tbody className="text-[11px] font-bold uppercase tracking-tight text-slate-880">
                                <tr className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group">
                                    <td className="p-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 rounded-full bg-[#ff00ff]/40 group-hover:bg-[#ff00ff] transition-colors" />
                                            <span className="font-mono text-slate-900">CSFX25112156</span>
                                        </div>
                                    </td>
                                    <td className="p-5">
                                        <div className="flex flex-col">
                                            <span className="font-black text-slate-900">900% FULLY TRADEABLE BONUS</span>
                                            <span className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">Institutional Credit Assignment</span>
                                        </div>
                                    </td>
                                    <td className="p-5 text-center text-slate-400 font-mono tracking-tighter">OCT 12, 2024</td>
                                    <td className="p-5 text-right px-8">
                                        <button className="bg-slate-900 text-white text-[9px] font-black py-4 px-10 rounded hover:bg-red-600 hover:text-white transition-all uppercase tracking-widest active:scale-95 shadow-sm group-hover:shadow-red-600/20">
                                            Execute Recall
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* History Section */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-12 text-center space-y-6">
                    <Clock className="w-16 h-16 text-slate-200 mx-auto opacity-50" />
                    <div className="space-y-1">
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">ARCHIVED RECALL PROTOCOLS</h4>
                        <p className="text-[9px] text-slate-300 font-bold uppercase tracking-widest mt-2">NO AUDIT RECORDS TARGETED FOR CANCELLATION</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PromotionCancellation;

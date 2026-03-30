import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { AlertTriangle, Clock } from 'lucide-react';

const PromotionCancellation = () => {
    return (
        <MainLayout>
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden mb-8">
                <div className="p-1 bg-[#ff00ff]"></div>
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Promotion Cancellation Request</h1>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Submit requests to cancel active bonuses</p>
                    </div>
                </div>

                <div className="p-6 border-b border-slate-100 italic bg-amber-50/30 text-amber-600 text-[10px] font-bold uppercase tracking-widest leading-relaxed flex items-center gap-3">
                    <AlertTriangle size={16} className="text-amber-500" />
                    Please note that cancelling a bonus may result in immediate adjustment of your account equity and potential margin call if margin requirements are not met.
                </div>

                <div className="p-6">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#8cc63f] text-white">
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Client ID</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Promotion Name</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Approved Date</th>
                                    <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-all">
                                    <td className="p-4 text-[11px] font-bold text-slate-600 text-center uppercase tracking-tight">csfx25112156</td>
                                    <td className="p-4 text-[11px] font-bold text-slate-600 text-center uppercase">900% Fully Tradeable Bonus</td>
                                    <td className="p-4 text-[11px] font-bold text-slate-600 text-center uppercase tracking-tight">Oct 12, 2024</td>
                                    <td className="p-4 text-center">
                                        <button className="bg-black text-white text-[10px] font-black py-2 px-6 rounded hover:bg-red-600 hover:text-white transition-all uppercase">
                                            Cancel
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 text-center space-y-4">
                <Clock className="w-10 h-10 text-slate-200 mx-auto" />
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Previous Cancellation History</h4>
                <p className="text-[10px] font-bold text-slate-300 uppercase tracking-tight">No cancellation requests found</p>
            </div>
        </MainLayout>
    );
};

export default PromotionCancellation;

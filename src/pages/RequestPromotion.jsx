import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { AlertCircle, Clock, Gift } from 'lucide-react';

const RequestPromotion = () => {
    const [activeTab, setActiveTab] = useState('request');

    const promotions = [
        { title: "900% Fully Tradeable Bonus", status: "Available", code: "PROMO-900" },
        { title: "800% Fully Tradeable Bonus", status: "Available", code: "PROMO-800" },
        { title: "650% Fully Tradeable Bonus", status: "Available", code: "PROMO-650" },
        { title: "300% Fully Tradeable Bonus", status: "Available", code: "PROMO-300" },
        { title: "200% Fully Tradeable Bonus", status: "Available", code: "PROMO-200" },
        { title: "150% Fully Tradeable Bonus", status: "Available", code: "PROMO-150" },
    ];

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">TRADING PROMOTIONS</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">CAPITAL BOOST & MARGIN ENHANCEMENT TOOLS</p>
                    </div>
                    <div className="bg-black text-[#00ff00] text-[10px] font-black px-4 py-2 rounded border border-white/10 uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#00ff00]/10">
                        <Gift size={14} /> ACTIVE REWARDS AVAILABLE
                    </div>
                </div>

                {/* Main Content Card */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div className="flex border-b border-slate-100 bg-slate-50/50">
                        <button 
                            onClick={() => setActiveTab('request')}
                            className={`flex-1 py-5 text-[10px] font-black uppercase tracking-widest transition-all relative ${activeTab === 'request' ? 'text-black' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            Request Promotion
                            {activeTab === 'request' && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ff00]" />}
                        </button>
                        <button 
                            onClick={() => setActiveTab('status')}
                            className={`flex-1 py-5 text-[10px] font-black uppercase tracking-widest transition-all relative ${activeTab === 'status' ? 'text-black' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            Request Status
                            {activeTab === 'status' && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ff00]" />}
                        </button>
                    </div>

                    <div className="">
                        {activeTab === 'request' ? (
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse min-w-max">
                                    <thead>
                                        <tr className="bg-slate-900 text-white border-b border-white/10 uppercase font-black text-[10px] tracking-widest">
                                            <th className="p-5 border-r border-white/5">Promotion Title</th>
                                            <th className="p-5 border-r border-white/5 text-center">Reference Code</th>
                                            <th className="p-5 border-r border-white/5 text-center">Compliance</th>
                                            <th className="p-5 text-right">Deployment</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-[11px] font-bold uppercase tracking-tight text-slate-800">
                                        {promotions.map((promo, idx) => (
                                            <tr key={idx} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group">
                                                <td className="p-5">
                                                    <div className="flex flex-col">
                                                        <span className="font-black text-slate-900">{promo.title}</span>
                                                        <span className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">Verified Bonus Program</span>
                                                    </div>
                                                </td>
                                                <td className="p-5 text-center font-mono text-slate-400">{promo.code}</td>
                                                <td className="p-5 text-center">
                                                    <div className="flex items-center justify-center gap-4">
                                                        <button className="text-[9px] font-black text-[#00ff00] hover:text-white px-3 py-1.5 bg-black rounded transition-colors uppercase tracking-widest">VIEW T&C</button>
                                                        <label className="flex items-center gap-2 cursor-pointer">
                                                            <input type="checkbox" className="w-3.5 h-3.5 rounded border-slate-300 text-black focus:ring-black" />
                                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">ACCEPT</span>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="p-5 text-right">
                                                    <button className="bg-slate-900 text-white text-[9px] font-black py-3 px-8 rounded hover:bg-[#00ff00] hover:text-black transition-all uppercase tracking-widest active:scale-95 group-hover:shadow-[0_0_20px_rgba(0,255,0,0.15)] overflow-hidden relative">
                                                        <span className="relative z-10">Request Credit</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        ) : (
                            <div className="py-32 text-center bg-slate-50/30">
                                <Clock className="w-16 h-16 text-slate-200 mx-auto mb-6 opacity-50" />
                                <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">APPLICATION QUEUE CLEAR</h3>
                                <p className="text-[9px] text-slate-300 mt-3 font-bold uppercase tracking-widest">0 PENDING REQUESTS FOUND</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer Alert */}
                <div className="p-6 bg-[#00ff00]/5 border-2 border-dashed border-[#00ff00]/20 rounded-lg flex items-start gap-5">
                    <div className="p-2 bg-black text-[#00ff00] rounded">
                        <AlertCircle size={20} />
                    </div>
                    <div className="space-y-1">
                        <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Risk Allocation Note</h4>
                        <p className="text-[10px] text-slate-500 font-bold uppercase leading-relaxed tracking-widest">
                            Bonuses increase drawdown capacity but must meet execution volume targets before conversion to withdrawable equity.
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default RequestPromotion;

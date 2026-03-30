import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { FileText, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

const RequestPromotion = () => {
    const [activeTab, setActiveTab] = useState('request');

    const promotions = [
        { title: "900% Fully Tradeable Bonus", status: "Available" },
        { title: "800% Fully Tradeable Bonus", status: "Available" },
        { title: "650% Fully Tradeable Bonus", status: "Available" },
        { title: "300% Fully Tradeable Bonus", status: "Available" },
        { title: "200% Fully Tradeable Bonus", status: "Available" },
        { title: "150% Fully Tradeable Bonus", status: "Available" },
    ];

    return (
        <MainLayout>
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-1 bg-[#00ff00]"></div>
                <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Promotions</h1>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Request and manage your trading bonuses</p>
                    </div>
                </div>

                <div className="flex border-b border-slate-100">
                    <button 
                        onClick={() => setActiveTab('request')}
                        className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'request' ? 'text-[#00ff00] border-b-2 border-[#00ff00]' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Request For Promotion
                    </button>
                    <button 
                        onClick={() => setActiveTab('status')}
                        className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === 'status' ? 'text-[#00ff00] border-b-2 border-[#00ff00]' : 'text-slate-400 hover:text-slate-600'}`}
                    >
                        Promotion Request Status
                    </button>
                </div>

                <div className="p-6">
                    {activeTab === 'request' ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-[#8cc63f] text-white">
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Title</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">View T&C</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center border-r border-white/20">Accept T&C</th>
                                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {promotions.map((promo, idx) => (
                                        <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                                            <td className="p-4 text-[11px] font-bold text-slate-600 text-center uppercase">{promo.title}</td>
                                            <td className="p-4 text-center">
                                                <button className="text-[10px] font-bold text-blue-500 hover:underline uppercase">View Terms & Condition</button>
                                            </td>
                                            <td className="p-4 text-center">
                                                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-[#8cc63f] focus:ring-[#8cc63f]" />
                                            </td>
                                            <td className="p-4 text-center">
                                                <button className="bg-[#8cc63f] text-white text-[10px] font-black py-2 px-6 rounded hover:bg-[#7ab52f] transition-all uppercase">
                                                    Request
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="py-12 text-center">
                            <Clock className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">No Recent Promotion Requests</h3>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
};

export default RequestPromotion;

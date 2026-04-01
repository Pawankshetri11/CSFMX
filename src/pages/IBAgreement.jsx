import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { FileText, Download, CheckCircle, Clock, Shield, AlertCircle } from 'lucide-react';

const IBAgreement = () => {
    const primaryColor = "#00ff00";
    
    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">PARTNER AGREEMENT</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">COMPLIANCE & LEGAL DOCUMENTATION</p>
                    </div>
                    <button className="bg-black text-[#00ff00] text-[10px] font-bold py-3 px-6 rounded hover:bg-slate-800 transition-all uppercase tracking-widest flex items-center gap-2">
                        <Download size={14} />
                        Download All Documents
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Active Agreement Card */}
                    <div className="lg:col-span-8 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <div>
                                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Document</h3>
                                <p className="text-sm font-black text-slate-900 uppercase mt-1">Standard IB Agreement v2.4</p>
                            </div>
                            <span className="flex items-center gap-1.5 px-3 py-1 bg-[#00ff00] text-black text-[10px] font-black rounded uppercase tracking-tighter shadow-sm">
                                <CheckCircle size={12} /> Active
                            </span>
                        </div>
                        
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="p-4 bg-slate-50 rounded border border-slate-100 group hover:border-[#00ff00]/30 transition-all">
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Signed Date</span>
                                    <span className="text-sm font-black text-slate-900">OCTOBER 15, 2023</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded border border-slate-100 group hover:border-[#00ff00]/30 transition-all">
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Current Tier</span>
                                    <span className="text-sm font-black text-[#ff00ff]">PRO PARTNER VIP</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded border border-slate-100 group hover:border-[#00ff00]/30 transition-all">
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Rebate Type</span>
                                    <span className="text-sm font-black text-slate-900">VOLUME BASED SCALING</span>
                                </div>
                                <div className="p-4 bg-slate-50 rounded border border-slate-100 group hover:border-[#00ff00]/30 transition-all">
                                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Validity</span>
                                    <span className="text-sm font-black text-slate-900 flex items-center gap-2">
                                        <Clock size={14} className="text-amber-500" /> AUTO-RENEWS
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <button className="w-full flex items-center justify-center gap-3 py-4 bg-black text-[#00ff00] rounded text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all">
                                    <FileText size={16} /> View Full Agreement terms
                                </button>
                                <p className="text-[10px] text-slate-400 font-bold text-center uppercase tracking-widest">
                                    Last reviewed by compliance on Jan 20, 2024
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline / History */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8">Agreement History</h3>
                            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100">
                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-black flex items-center justify-center z-10">
                                        <div className="w-2 h-2 rounded-full bg-[#00ff00]" />
                                    </div>
                                    <p className="text-[10px] font-black text-slate-900 uppercase">v2.4 Signed</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Oct 15, 2023</p>
                                </div>
                                <div className="relative pl-8">
                                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center z-10">
                                        <div className="w-2 h-2 rounded-full bg-slate-300" />
                                    </div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase">v1.2 Archived</p>
                                    <p className="text-[10px] text-slate-300 font-bold uppercase mt-1">Jan 10, 2022</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#ff00ff]/5 border border-[#ff00ff]/20 rounded-lg p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Shield size={20} className="text-[#ff00ff]" />
                                <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Security Note</h3>
                            </div>
                            <p className="text-[10px] text-slate-600 font-bold leading-relaxed uppercase tracking-widest">
                                Your digital signature is cryptographically bound to this agreement. All changes require multi-factor re-verification.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default IBAgreement;

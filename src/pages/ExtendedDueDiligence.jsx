import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { ShieldCheck, UploadCloud, FileWarning, CheckCircle2, AlertTriangle, Download, ArrowRight } from 'lucide-react';

const ExtendedDueDiligence = () => {
    const primaryColor = "#00ff00";
    const secondaryColor = "#ff00ff";

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">EXTENDED DUE DILIGENCE</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">COMPLIANCE VERIFICATION & PARTNER SECURITY</p>
                    </div>
                </div>

                {/* Priority Alert */}
                <div className="bg-black rounded-lg p-6 text-white relative overflow-hidden group">
                    <div className="relative z-10 flex items-start gap-4">
                        <div className="p-3 bg-[#ff00ff]/10 text-[#ff00ff] rounded ring-1 ring-[#ff00ff]/50 animate-pulse">
                            <AlertTriangle size={20} />
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#ff00ff]">High Priority Action Required</h4>
                            <p className="text-[11px] text-slate-400 font-bold uppercase leading-relaxed tracking-widest">
                                To unlock the <span className="text-white">PRO VIP partner tier</span> and enable unlimited weekly withdrawals, you must complete the extended verification process below.
                            </p>
                        </div>
                    </div>
                    <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
                        <ShieldCheck size={120} color={secondaryColor} />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {/* Document Upload Section */}
                    <div className="space-y-6">
                        {/* Address Verification */}
                        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden hover:border-[#00ff00]/50 transition-all group">
                            <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                                <div>
                                    <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">Proof of Residence</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Utility Bill or Bank Statement (Last 3 mon)</p>
                                </div>
                                <span className="px-3 py-1 bg-amber-500 text-white text-[9px] font-black rounded uppercase tracking-tighter shadow-sm">
                                    PENDING ACTION
                                </span>
                            </div>
                            <div className="p-8">
                                <div className="border-2 border-dashed border-slate-200 rounded-lg bg-slate-50 group-hover:bg-slate-900/5 transition-all flex flex-col items-center justify-center py-10 px-4 relative group/upload cursor-pointer">
                                    <div className="p-4 bg-white rounded shadow-sm mb-4 group-hover/upload:scale-110 transition-transform group-hover/upload:text-[#00ff00]">
                                        <UploadCloud size={32} />
                                    </div>
                                    <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Transmit Encrypted Document</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-widest">Drop PDF / JPG / PNG (Max 10MB)</p>
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/upload:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="flex items-center gap-2 text-black bg-[#00ff00] px-4 py-2 rounded shadow-xl transform translate-y-2 group-hover/upload:translate-y-0 transition-transform">
                                            <span className="text-[10px] font-black uppercase tracking-widest">Choose File</span>
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Source of Wealth */}
                        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden hover:border-[#ff00ff]/30 transition-all">
                            <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
                                <div>
                                    <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">Source of Wealth</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Official Financial Declaration Form</p>
                                </div>
                                <span className="px-3 py-1 bg-slate-200 text-slate-500 text-[9px] font-black rounded uppercase tracking-tighter">
                                    MISSING
                                </span>
                            </div>
                            <div className="p-8 space-y-6">
                                <div className="p-4 bg-[#ff00ff]/5 border border-[#ff00ff]/10 rounded flex items-center justify-between">
                                    <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Requires digital or physical signature</p>
                                    <button className="flex items-center gap-2 text-[10px] font-black text-[#ff00ff] uppercase tracking-widest hover:underline transition-all">
                                        <Download size={14} /> Download Template
                                    </button>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                    <button className="flex-1 py-4 bg-black text-[#ff00ff] rounded text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all shadow-lg shadow-[#ff00ff]/10">
                                        Upload Signed Declaration
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Verified Section */}
                        <div className="bg-slate-50 rounded-lg border border-slate-200 p-6 flex justify-between items-center opacity-70">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-white rounded shadow-sm text-[#00ff00]">
                                    <CheckCircle2 size={24} />
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest line-through decoration-slate-300">Identity Authentication</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mt-1">Validated via National Database</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <span className="text-[9px] font-black bg-black text-[#00ff00] px-3 py-1 rounded uppercase tracking-widest shadow-sm">Verified</span>
                                <p className="text-[9px] text-slate-400 font-bold uppercase mt-2">Jan 12, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Security Note */}
                <div className="flex items-center gap-2 p-4 border border-dashed border-slate-200 rounded">
                    <ShieldCheck size={16} className="text-slate-400" />
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                        Your data is encrypted using AES-256 and stored in compliant biometric secure nodes.
                    </p>
                </div>
            </div>
        </MainLayout>
    );
};

export default ExtendedDueDiligence;

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Copy, CheckCircle2, QrCode, ExternalLink, ShieldCheck } from 'lucide-react';

const MyIBLink = () => {
    const [copied, setCopied] = useState(false);
    const myLink = 'https://capitalstreetfx.com/ib/user1234';

    const handleCopy = () => {
        navigator.clipboard.writeText(myLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div>
                    <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">INSTITUTIONAL IB LINK</h1>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">PARTNER NETWORK ACCESS & REGISTRATION</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Link Card */}
                    <div className="lg:col-span-7 bg-white p-8 rounded-lg border border-slate-200 shadow-sm space-y-8">
                        <div>
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Master Referral Link</h3>
                            <div className="flex flex-col gap-4">
                                <div className="relative group">
                                    <input 
                                        type="text" 
                                        value={myLink} 
                                        readOnly 
                                        className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded text-slate-700 font-bold text-sm outline-none focus:ring-1 focus:ring-[#00ff00] transition-all"
                                    />
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                                        <ExternalLink size={16} />
                                    </div>
                                </div>
                                <button 
                                    onClick={handleCopy}
                                    className={`flex items-center justify-center gap-2 px-6 py-4 rounded font-black text-[10px] uppercase tracking-widest transition-all ${
                                        copied 
                                        ? 'bg-[#00ff00] text-black shadow-[0_0_20px_rgba(0,255,0,0.2)]' 
                                        : 'bg-black text-[#00ff00] hover:bg-slate-800'
                                    }`}
                                >
                                    {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                    {copied ? 'Link Copied' : 'Copy Master Link'}
                                </button>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex gap-4 p-4 bg-slate-50 rounded border border-slate-100 group hover:border-[#00ff00]/30 transition-all">
                                <div className="p-3 bg-white rounded shadow-sm text-slate-400 group-hover:text-[#00ff00] transition-all">
                                    <ShieldCheck size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-900 uppercase">Secure Link</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Encrypted referral tracking</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 bg-slate-50 rounded border border-slate-100 group hover:border-[#00ff00]/30 transition-all">
                                <div className="p-3 bg-white rounded shadow-sm text-slate-400 group-hover:text-[#ff00ff] transition-all">
                                    <QrCode size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] font-black text-slate-900 uppercase">Dynamic QR</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Auto-refreshing code</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 bg-black text-[#00ff00] rounded text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                            <span className="text-white">Note:</span> The master IB link is used primarily to refer sub-IBs under your network. They will be placed under your multi-tier hierarchy automatically.
                        </div>
                    </div>

                    {/* QR Code Section */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="bg-white p-8 border border-slate-200 rounded-lg shadow-sm flex flex-col items-center justify-center space-y-6">
                            <div className="p-3 border-b border-slate-100 w-full text-center">
                                <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Instant Scan Access</h3>
                            </div>
                            <div className="w-56 h-56 bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center p-6 relative group cursor-pointer hover:border-[#00ff00] transition-all">
                                <QrCode size={160} className="text-slate-900 group-hover:scale-105 transition-transform" />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="bg-white px-4 py-2 rounded shadow-lg text-[10px] font-black uppercase tracking-widest">Enlarge</span>
                                </div>
                            </div>
                            <div className="space-y-3 w-full">
                                <button className="w-full bg-slate-50 text-slate-900 text-[10px] font-black py-4 rounded border border-slate-200 hover:bg-black hover:text-[#00ff00] hover:border-black transition-all uppercase tracking-widest">
                                    Download SVG
                                </button>
                                <button className="w-full bg-white text-slate-400 text-[10px] font-black py-2 rounded hover:text-slate-600 transition-all uppercase tracking-widest">
                                    Print Marketing Kit
                                </button>
                            </div>
                        </div>

                        <div className="bg-black p-6 rounded-lg text-white">
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-2 h-2 rounded-full bg-[#ff00ff] animate-pulse" />
                                <p className="text-[10px] font-black uppercase tracking-widest">Network Update</p>
                            </div>
                            <p className="text-[10px] text-slate-400 font-medium leading-relaxed uppercase tracking-widest">
                                4 new sub-IBs joined via your link in the last 24 hours. Check reports for details.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default MyIBLink;

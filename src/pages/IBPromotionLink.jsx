import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Copy, CheckCircle2, Megaphone, Terminal, Activity } from 'lucide-react';

const IBPromotionLink = () => {
    const [copied, setCopied] = useState(false);
    const promoLink = 'https://capitalstreetfx.com/register?promo=csfx1234';

    const handleCopy = () => {
        navigator.clipboard.writeText(promoLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div>
                    <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">PROMOTION LINKS</h1>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">CAMPAIGN TRACKING & GROWTH TOOLS</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Primary Link Card */}
                    <div className="lg:col-span-12 bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-black text-[#00ff00] rounded">
                                <Megaphone size={18} />
                            </div>
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Referral Identifier</h3>
                        </div>
                        
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <input 
                                    type="text" 
                                    value={promoLink} 
                                    readOnly 
                                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded text-slate-700 font-bold text-sm outline-none focus:ring-1 focus:ring-[#00ff00]"
                                />
                            </div>
                            <button 
                                onClick={handleCopy}
                                className={`flex items-center justify-center gap-2 px-8 py-4 rounded font-black text-[10px] uppercase tracking-widest transition-all ${
                                    copied 
                                    ? 'bg-[#00ff00] text-black shadow-[0_0_20px_rgba(0,255,0,0.2)]' 
                                    : 'bg-black text-[#00ff00] hover:bg-slate-800'
                                }`}
                            >
                                {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                {copied ? 'COPIED' : 'COPY PRIMARY LINK'}
                            </button>
                        </div>
                        <p className="text-[10px] text-slate-400 font-bold uppercase mt-4 tracking-widest">
                            Cookies persist for 30 days. Referrals are credited instantly upon successful registration.
                        </p>
                    </div>

                    {/* Campaign Generator */}
                    <div className="lg:col-span-8 bg-white p-8 rounded-lg border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-3 mb-8">
                            <Activity size={18} className="text-[#ff00ff]" />
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Advanced Campaign Generator</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Campaign Reference</label>
                                <input 
                                    type="text" 
                                    placeholder="E.G. SUMMER_FB_ADS" 
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold placeholder:text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#ff00ff]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Destination Path</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded text-sm font-bold focus:outline-none focus:ring-1 focus:ring-[#ff00ff] appearance-none">
                                    <option>TRADING_DASHBOARD</option>
                                    <option>REGISTRATION_GATE</option>
                                    <option>PROMO_LANDING_PAGE</option>
                                </select>
                            </div>
                        </div>
                        
                        <button className="mt-8 w-full py-4 bg-slate-100 text-slate-900 text-[10px] font-black rounded hover:bg-black hover:text-[#ff00ff] transition-all uppercase tracking-widest border border-transparent hover:border-[#ff00ff]/30">
                            Generate trackable identifier
                        </button>
                    </div>

                    {/* Helpful Info */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-slate-900 p-6 rounded-lg text-white group cursor-help">
                            <div className="flex items-center gap-3 mb-4">
                                <Terminal size={18} className="text-[#00ff00]" />
                                <h3 className="text-[10px] font-black uppercase tracking-widest">URL Parameters</h3>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-[10px] text-[#00ff00] font-black uppercase">utm_source</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Identifies traffic origin</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-[#ff00ff] font-black uppercase">utm_campaign</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Groups marketing activity</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#00ff00]/5 border border-[#00ff00]/20 p-6 rounded-lg">
                            <p className="text-[10px] text-slate-600 font-bold leading-relaxed uppercase tracking-widest">
                                Tip: Use different campaign names for Facebook, Google, and Email marketing to precisely track which channel converts best.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default IBPromotionLink;

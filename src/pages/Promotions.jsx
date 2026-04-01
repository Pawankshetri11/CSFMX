import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Megaphone, CheckCircle2, TrendingUp, Gift, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Promotions = () => {
    const featuredPromos = [
        { title: "900% FULLY TRADEABLE BONUS", icon: Megaphone, color: "#00ff00", desc: "Our highest margin boost ever. Maximize equity protocol immediately." },
        { title: "CASH REBATE PROGRAM", icon: TrendingUp, color: "#ff00ff", desc: "Institutional grade rebate credits for every standard lot traded." },
        { title: "VIP LOYALTY ACCOUNT", icon: Gift, color: "#00ff00", desc: "Exclusive tier benefits and dedicated account management protocols." },
    ];

    return (
        <MainLayout>
            <div className="space-y-12 animate-fade">
                {/* Hero Section */}
                <div className="bg-black rounded-lg p-12 text-white relative overflow-hidden border border-white/5">
                    <div className="relative z-10 space-y-6 max-w-2xl">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-0.5 bg-[#00ff00]" />
                            <span className="text-[10px] font-black text-[#00ff00] uppercase tracking-[0.4em]">Proprietary Rewards Engine</span>
                        </div>
                        <h1 className="text-4xl font-black uppercase tracking-tighter leading-none italic">
                            ACCELERATE YOUR <br /> 
                            <span className="text-[#00ff00]">ACCOUNT EQUITY</span>
                        </h1>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                            Access institutional-grade credit assignments and margin-enhancement protocols designed to optimize your trading survivability and profit potential.
                        </p>
                        <div className="pt-4">
                            <NavLink to="/request-promotion" className="bg-[#00ff00] text-black px-10 py-5 rounded text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-all shadow-xl shadow-[#00ff00]/10 flex items-center justify-center w-fit gap-3">
                                Initialize Request <ArrowRight size={14} />
                            </NavLink>
                        </div>
                    </div>
                    <div className="absolute top-0 right-0 w-[500px] h-full opacity-10 blur-3xl bg-[#00ff00] transform translate-x-1/2 translate-y-1/4 pointer-events-none" />
                </div>

                {/* Featured Promotions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPromos.map((promo, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-lg p-10 flex flex-col items-center text-center space-y-6 shadow-sm hover:border-black transition-all group">
                            <div className="w-20 h-20 rounded bg-slate-50 flex items-center justify-center text-slate-300 border border-slate-100 group-hover:bg-black group-hover:text-[#00ff00] transition-all">
                                <promo.icon size={32} />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">{promo.title}</h3>
                                <p className="text-[10px] text-slate-400 font-bold uppercase leading-relaxed tracking-widest px-4">
                                    {promo.desc}
                                </p>
                            </div>
                            <button className="text-[9px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-1 group-hover:text-black group-hover:border-black transition-all">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>

                {/* Secure Trust Bar */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 opacity-30 pt-12 grayscale">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 size={16} />
                        <span className="text-[9px] font-black uppercase tracking-[0.3em]">Institutional Grade</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 size={16} />
                        <span className="text-[9px] font-black uppercase tracking-[0.3em]">Equity Optimized</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <CheckCircle2 size={16} />
                        <span className="text-[9px] font-black uppercase tracking-[0.3em]">Volume Sync Enabled</span>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Promotions;

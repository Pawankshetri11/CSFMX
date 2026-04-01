import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Info, Users, TrendingUp, BarChart3, Star, Zap, Globe, Shield } from 'lucide-react';

const ReferralsInfo = () => {
    const primaryColor = "#00ff00";
    const secondaryColor = "#ff00ff";

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">INFORMATION CENTER</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">PARTNER KNOWLEDGE BASE & NETWORK CORE</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Key Metrics */}
                    {[
                        { label: 'Total Network', value: '2,451', icon: Users, color: primaryColor },
                        { label: 'Active Traders', value: '1,832', icon: TrendingUp, color: secondaryColor },
                        { label: 'Network Volume', value: '45,210', suffix: 'LOTS', icon: BarChart3, color: primaryColor },
                    ].map((m, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex items-center gap-6 group hover:border-black transition-all">
                            <div className="p-4 bg-slate-50 rounded group-hover:bg-black group-hover:text-white transition-all text-slate-900">
                                <m.icon size={24} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{m.label}</p>
                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter">
                                    {m.value} {m.suffix && <span className="text-xs font-bold text-slate-400">{m.suffix}</span>}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-8">
                        <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-8">
                                    <Star className="text-[#ff00ff]" size={20} />
                                    <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">The Introducing Broker Ecosystem</h3>
                                </div>
                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <Zap size={14} className="text-[#00ff00]" />
                                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">Multi-Tier Revenue</p>
                                            </div>
                                            <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-widest">
                                                Earn from your direct referrals and a percentage of your sub-IB network's performance. Our layered structure maximizes your reach.
                                            </p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2">
                                                <Globe size={14} className="text-[#00ff00]" />
                                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">Global Reach</p>
                                            </div>
                                            <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-widest">
                                                Access a worldwide market with localized landing pages and multi-currency tracking for all your international clients.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-6 bg-slate-50 border border-slate-100 rounded">
                                        <p className="text-[11px] text-slate-600 font-bold leading-relaxed uppercase tracking-widest">
                                            The Introducing Broker (IB) program at Capital Street FX is engineered for maximum conversion. We provide the tools, and you provide the connection. Every lot traded by your network generates instant rebates.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Users size={180} />
                            </div>
                        </div>

                        <div className="bg-black p-8 rounded-lg text-white">
                            <h3 className="text-[10px] font-black text-[#00ff00] uppercase tracking-widest mb-6 border-b border-white/10 pb-4">Scaling Potential</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div>
                                    <p className="text-2xl font-black tracking-tighter mb-1">20%</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Standard Base</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-black tracking-tighter mb-1 text-[#ff00ff]">45%</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Pro Milestone</p>
                                </div>
                                <div>
                                    <p className="text-2xl font-black tracking-tighter mb-1 text-[#00ff00]">60%+</p>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Elite Tier</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Cards */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm group">
                            <div className="flex items-center gap-3 mb-6">
                                <Shield className="text-[#00ff00]" size={18} />
                                <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Compliance First</h3>
                            </div>
                            <p className="text-[11px] text-slate-500 font-bold leading-relaxed uppercase tracking-widest mb-6">
                                Ensure all marketing activity follows our global compliance guidelines to maintain your active status and protect your earnings.
                            </p>
                            <button className="w-full py-3 bg-slate-50 text-slate-900 text-[10px] font-black rounded uppercase tracking-widest border border-transparent group-hover:border-black transition-all">
                                Review Policy
                            </button>
                        </div>

                        <div className="bg-[#00ff00]/5 border border-[#00ff00]/20 p-6 rounded-lg">
                            <div className="flex items-center gap-2 mb-4">
                                <Info size={16} className="text-[#00ff00]" />
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">Auto-Upgrades</p>
                            </div>
                            <p className="text-[11px] text-slate-600 font-bold leading-relaxed uppercase tracking-widest">
                                Your partner level is recalculated every 30 days. Reach 500 Lots to instantly jump to the Pro tier for the next period.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ReferralsInfo;

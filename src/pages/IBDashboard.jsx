import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { Users, TrendingUp, DollarSign, Award, Target, Briefcase } from 'lucide-react';

const IBDashboard = () => {
    const primaryColor = "#00ff00";
    const secondaryColor = "#ff00ff";

    const performanceData = [
        { name: 'Mon', referrals: 4, volume: 12, earnings: 450 },
        { name: 'Tue', referrals: 7, volume: 18, earnings: 620 },
        { name: 'Wed', referrals: 5, volume: 15, earnings: 510 },
        { name: 'Thu', referrals: 9, volume: 22, earnings: 840 },
        { name: 'Fri', referrals: 12, volume: 30, earnings: 1100 },
        { name: 'Sat', referrals: 6, volume: 10, earnings: 380 },
        { name: 'Sun', referrals: 4, volume: 8, earnings: 310 },
    ];

    const stats = [
        { label: 'Total Earnings', value: '$12,840', icon: DollarSign, trend: '+12.5%', color: primaryColor },
        { label: 'Total Referrals', value: '1,428', icon: Users, trend: '+8.2%', color: secondaryColor },
        { label: 'Active Volume', value: '452.5 Lots', icon: TrendingUp, trend: '+15.4%', color: primaryColor },
        { label: 'Partner Status', value: 'Pro VIP', icon: Award, trend: 'Top 5%', color: secondaryColor },
    ];

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">IB PERFORMANCE DASHBOARD</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">REAL-TIME PARTNER STATISTICS & ANALYTICS</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-black text-[#00ff00] text-[10px] font-bold py-3 px-6 rounded hover:bg-slate-800 transition-all uppercase tracking-widest">
                            Withdraw Earnings
                        </button>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-[#00ff00]/50 transition-all group">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-md bg-slate-50 group-hover:bg-black group-hover:text-[${stat.color}] transition-all`}>
                                    <stat.icon size={20} />
                                </div>
                                <span className={`text-[10px] font-black px-2 py-1 rounded bg-slate-50 text-slate-400 group-hover:bg-[#00ff00] group-hover:text-black transition-all`}>
                                    {stat.trend}
                                </span>
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter">{stat.value}</h3>
                        </div>
                    ))}
                </div>

                {/* Main Analytics Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 bg-white rounded-lg border border-slate-200 shadow-sm p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                            <div>
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-none">Earnings Growth</h3>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Weekly revenue breakdown</p>
                            </div>
                            <div className="flex bg-slate-50 p-1 rounded border border-slate-100">
                                {['7D', '30D', 'ALL'].map(t => (
                                    <button key={t} className={`px-4 py-1.5 text-[10px] font-black rounded transition-all ${t === '7D' ? 'bg-white shadow-sm text-black' : 'text-slate-400 hover:text-slate-600'}`}>
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="h-80 w-full font-bold">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={performanceData}>
                                    <defs>
                                        <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor={primaryColor} stopOpacity={0.1}/>
                                            <stop offset="95%" stopColor={primaryColor} stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis 
                                        dataKey="name" 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: '800' }}
                                        dy={10}
                                    />
                                    <YAxis 
                                        axisLine={false} 
                                        tickLine={false} 
                                        tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: '800' }}
                                    />
                                    <Tooltip 
                                        contentStyle={{ backgroundColor: '#000', borderRadius: '4px', border: 'none' }}
                                        itemStyle={{ color: primaryColor, fontSize: '10px', fontWeight: '900' }}
                                        labelStyle={{ color: '#fff', fontSize: '10px', marginBottom: '4px' }}
                                    />
                                    <Area 
                                        type="monotone" 
                                        dataKey="earnings" 
                                        stroke={primaryColor} 
                                        fillOpacity={1} 
                                        fill="url(#colorEarnings)" 
                                        strokeWidth={3}
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-black rounded-lg p-6 text-white overflow-hidden relative">
                            <div className="relative z-10">
                                <h3 className="text-[10px] font-bold text-[#00ff00] uppercase tracking-widest mb-4">Milestone Progress</h3>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-[10px] font-bold uppercase mb-2">
                                            <span>Tier 2 Upgrade</span>
                                            <span>85%</span>
                                        </div>
                                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-[#00ff00] h-full" style={{ width: '85%' }} />
                                        </div>
                                    </div>
                                    <p className="text-[10px] text-slate-400 font-medium">Refer 12 more clients to unlock 25% higher rebates.</p>
                                    <button className="w-full py-3 bg-white text-black text-[10px] font-black rounded uppercase tracking-widest mt-4 hover:bg-[#00ff00] transition-colors">
                                        View All Tiers
                                    </button>
                                </div>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-10">
                                <Target size={120} color="#00ff00" />
                            </div>
                        </div>

                        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6 border-b border-slate-50 pb-4">Top Referrals</h3>
                            <div className="space-y-4">
                                {[
                                    { name: 'John Global', volume: '142.5 Lots', profit: '+$1,420' },
                                    { name: 'Matrix Assets', volume: '98.2 Lots', profit: '+$980' },
                                    { name: 'Elite Traders', volume: '75.0 Lots', profit: '+$750' }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center">
                                        <div>
                                            <p className="text-xs font-black text-slate-900 leading-none">{item.name}</p>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{item.volume}</p>
                                        </div>
                                        <span className="text-[10px] font-black text-[#00ff00]">{item.profit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex items-center gap-4 group cursor-pointer hover:bg-black transition-all">
                        <div className="p-3 bg-white rounded-md group-hover:text-black">
                            <Briefcase size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-900 group-hover:text-[#00ff00] uppercase tracking-widest">Master Link</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">Configure sub-IB terms</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex items-center gap-4 group cursor-pointer hover:bg-black transition-all">
                        <div className="p-3 bg-white rounded-md group-hover:text-black">
                            <TrendingUp size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-900 group-hover:text-[#00ff00] uppercase tracking-widest">Campaigns</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">Launch new promo link</p>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex items-center gap-4 group cursor-pointer hover:bg-black transition-all">
                        <div className="p-3 bg-white rounded-md group-hover:text-black">
                            <Users size={20} />
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-900 group-hover:text-[#00ff00] uppercase tracking-widest">Reports</p>
                            <p className="text-[10px] text-slate-400 font-bold uppercase">Detailed client activity</p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default IBDashboard;

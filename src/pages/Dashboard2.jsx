import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import AccountCard from '../components/AccountCard';
import StatsGrid from '../components/StatsGrid';
import MarketActivity from '../components/MarketActivity';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, ComposedChart, Line } from 'recharts';
import { PieChart as PieChartIcon, Plus } from 'lucide-react';

const Dashboard2 = () => {
    const [activeTab, setActiveTab] = useState('live');
    const [selectedAccount, setSelectedAccount] = useState({
        id: "csfx25112156",
        balance: "$1,240.00",
        equity: "$1,240.00",
        margin: "$0.00",
        type: "VIP",
        terminal: "FxyFi",
        currency: "EUR",
        leverage: "1:1000",
        growth: [
            { day: 'Mon', value: 20, trend: 15 },
            { day: 'Tue', value: 35, trend: 25 },
            { day: 'Wed', value: 25, trend: 28 },
            { day: 'Thu', value: 40, trend: 32 },
            { day: 'Fri', value: 30, trend: 35 },
            { day: 'Sat', value: 45, trend: 40 },
            { day: 'Sun', value: 35, trend: 38 },
        ],
        activity: [
            { type: 'Deposit', amount: '+$500.00', date: 'Just Now', color: '#00ff00' },
            { type: 'Withdraw', amount: '-$120.00', date: '2 days ago', color: '#ff00ff' }
        ]
    });

    const allAccounts = {
        live: [
            { id: "csfx25112156", balance: "$1,240.00", equity: "$1,240.00", margin: "$0.00", type: "VIP", terminal: "FxyFi", currency: "EUR", leverage: "1:1000", growth: [{ day: 'Mon', value: 20, trend: 15 }, { day: 'Tue', value: 35, trend: 25 }, { day: 'Wed', value: 25, trend: 28 }, { day: 'Thu', value: 40, trend: 32 }, { day: 'Fri', value: 30, trend: 35 }, { day: 'Sat', value: 45, trend: 40 }, { day: 'Sun', value: 35, trend: 38 }], activity: [{ type: 'Deposit', amount: '+$500.00', date: 'Just Now', color: '#00ff00' }] },
            { id: "csfx99283741", balance: "$1,200.00", equity: "$1,150.00", margin: "$50.00", type: "Standard", terminal: "Alt X", currency: "USD", leverage: "1:500", growth: [{ day: 'Mon', value: 10, trend: 8 }, { day: 'Tue', value: 20, trend: 12 }, { day: 'Wed', value: 15, trend: 16 }, { day: 'Thu', value: 25, trend: 18 }, { day: 'Fri', value: 20, trend: 22 }, { day: 'Sat', value: 30, trend: 25 }, { day: 'Sun', value: 25, trend: 28 }], activity: [] }
        ],
        demo: [
            { id: "cstx25114611", balance: "$10,000.00", equity: "$10,000.00", margin: "$0.00", type: "VIP", terminal: "FxyFi", currency: "EUR", leverage: "1:10000", growth: [{ day: 'Mon', value: 60, trend: 50 }, { day: 'Tue', value: 70, trend: 55 }, { day: 'Wed', value: 65, trend: 60 }, { day: 'Thu', value: 80, trend: 65 }, { day: 'Fri', value: 75, trend: 70 }, { day: 'Sat', value: 90, trend: 75 }, { day: 'Sun', value: 85, trend: 80 }], activity: [] },
            { id: "202412463", balance: "$0.00", equity: "$0.00", margin: "$0.00", type: "Basic", terminal: "Alt X", currency: "EUR", leverage: "1:1000", growth: [{ day: 'Mon', value: 5, trend: 5 }, { day: 'Tue', value: 5, trend: 5 }, { day: 'Wed', value: 5, trend: 5 }, { day: 'Thu', value: 5, trend: 5 }, { day: 'Fri', value: 5, trend: 5 }, { day: 'Sat', value: 5, trend: 5 }, { day: 'Sun', value: 5, trend: 5 }], activity: [] },
            { id: "cstx2594712", balance: "$10,398.13", equity: "$10,398.13", margin: "$0.00", type: "Classic", terminal: "FxyFi", currency: "EUR", leverage: "1:10000", growth: [{ day: 'Mon', value: 80, trend: 70 }, { day: 'Tue', value: 85, trend: 75 }, { day: 'Wed', value: 82, trend: 80 }, { day: 'Thu', value: 90, trend: 82 }, { day: 'Fri', value: 88, trend: 85 }, { day: 'Sat', value: 95, trend: 88 }, { day: 'Sun', value: 92, trend: 90 }], activity: [] }
        ]
    };

    const primaryColor = "#00ff00";
    const secondaryColor = "#ff00ff";

    const pieData = [
        { name: 'Balance', value: parseFloat(selectedAccount.balance.replace(/[^0-9.-]+/g, "")) || 10, color: primaryColor },
        { name: 'Equity', value: parseFloat(selectedAccount.equity.replace(/[^0-9.-]+/g, "")) || 5, color: secondaryColor },
        { name: 'Margin', value: parseFloat(selectedAccount.margin.replace(/[^0-9.-]+/g, "")) || 2, color: '#334155' },
    ];

    const handleAccountSelect = (acc) => {
        setSelectedAccount(acc);
    };

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                <AccountCard
                    activeTab={activeTab}
                    switchAccount={(type) => {
                        setActiveTab(type);
                        setSelectedAccount(allAccounts[type][0]);
                    }}
                    accountData={selectedAccount}
                />

                <StatsGrid
                    equity={selectedAccount.equity}
                    margin={selectedAccount.margin}
                />

                {/* Account Selection Grid */}
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Available Accounts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allAccounts[activeTab].map((acc) => (
                                <div
                                    key={acc.id}
                                    onClick={() => handleAccountSelect(acc)}
                                    className={`relative bg-white border rounded-lg transition-all cursor-pointer overflow-hidden ${selectedAccount.id === acc.id ? 'border-[#00ff00] shadow-sm' : 'border-slate-200 hover:border-slate-300'}`}
                                >
                                    <div className={`p-4 flex justify-between items-center ${selectedAccount.id === acc.id ? 'bg-[#00ff00] text-black' : 'bg-slate-50 text-slate-600'}`}>
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{activeTab} Account</span>
                                        <button className={`text-[10px] font-bold py-1 px-3 rounded uppercase border ${selectedAccount.id === acc.id ? 'border-black/10 bg-black text-white' : 'border-slate-200 bg-white text-slate-600'}`}>
                                            Manage
                                        </button>
                                    </div>

                                    <div className="p-5 space-y-3">
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Account ID</span>
                                            <span className="text-sm font-bold text-slate-900">{acc.id}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-xs">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Status</span>
                                            <span className="text-[#00ff00] font-bold text-[10px] uppercase tracking-tighter">{acc.type}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">Balance</span>
                                            <span className="text-sm font-bold text-slate-900">{acc.balance}</span>
                                        </div>

                                        <div className="pt-3 border-t border-slate-100 flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="Amount"
                                                className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded text-xs focus:ring-1 focus:ring-[#00ff00] outline-none"
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                            <button className="bg-black text-[#00ff00] text-[10px] font-bold py-2 px-4 rounded hover:bg-slate-800 transition-all uppercase whitespace-nowrap">
                                                Fund Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="border border-dashed border-slate-200 rounded-lg flex flex-col items-center justify-center p-8 text-slate-300 hover:border-[#00ff00] hover:text-[#00ff00] transition-all cursor-pointer group h-full">
                                <Plus size={20} className="mb-2 group-hover:scale-110 transition-transform" />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-center">Open New Account</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Updated Performance Chart Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 bg-white rounded-lg border border-slate-200 shadow-sm p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                            <div>
                                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter leading-none">Performance Chart</h3>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Market Growth Analysis</p>
                            </div>
                            <div className="flex bg-slate-50 p-1 rounded border border-slate-100">
                                {['1D', '1W', '1M'].map(t => (
                                    <button key={t} className={`px-4 py-1.5 text-[10px] font-black rounded transition-all ${t === '1D' ? 'bg-white shadow-sm text-black' : 'text-slate-400 hover:text-slate-600'}`}>
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="h-72 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <ComposedChart data={selectedAccount.growth}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                                    <XAxis
                                        dataKey="day"
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
                                        cursor={{ fill: 'transparent' }}
                                        contentStyle={{ backgroundColor: '#000', borderRadius: '4px', border: 'none', boxShadow: 'none' }}
                                        itemStyle={{ color: '#00ff00', fontSize: '10px', fontWeight: 'bold' }}
                                    />
                                    <Bar
                                        dataKey="value"
                                        fill="#00ff00"
                                        radius={[4, 4, 0, 0]}
                                        barSize={32}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="trend"
                                        stroke="#ff00ff"
                                        strokeWidth={3}
                                        dot={false}
                                        animationDuration={1500}
                                    />
                                </ComposedChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-white rounded-lg border border-slate-200 shadow-sm p-6">
                        <div className="flex items-center gap-2 mb-8">
                            <PieChartIcon className="w-4 h-4 text-[#00ff00]" />
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asset Dynamics</h3>
                        </div>
                        <div className="h-[220px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={65}
                                        outerRadius={85}
                                        paddingAngle={5}
                                        dataKey="value"
                                        stroke="none"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">Total</p>
                                <p className="text-sm font-black text-slate-900 mt-1">{selectedAccount.balance}</p>
                            </div>
                        </div>
                        <div className="space-y-4 mt-8">
                            {pieData.map((item, i) => (
                                <div key={i} className="flex justify-between items-center text-[10px] font-bold">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                                        <span className="uppercase text-slate-400">{item.name}</span>
                                    </div>
                                    <span className="text-slate-900">${item.value.toLocaleString()}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <MarketActivity
                    activityData={selectedAccount.activity}
                    isLive={activeTab === 'live'}
                />
            </div>
        </MainLayout>
    );
};

export default Dashboard2;

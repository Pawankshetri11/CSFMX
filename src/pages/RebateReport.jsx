import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { DollarSign, FileText, Download, Filter, Calendar } from 'lucide-react';

const RebateReport = () => {
    const primaryColor = "#00ff00";

    const stats = [
        { label: 'Available Balance', value: '$4,850.00', icon: DollarSign, color: primaryColor },
        { label: 'Total Earned', value: '$12,400.50', icon: FileText, color: '#ff00ff' },
        { label: 'Pending Rebates', value: '$350.00', icon: DollarSign, color: primaryColor },
        { label: 'Total Volume', value: '128 Lots', icon: FileText, color: '#ff00ff' },
    ];

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">REBATE REPORT</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">COMMISSION TRACKING & PERFORMANCE LOGS</p>
                    </div>
                    <button className="bg-black text-[#00ff00] text-[10px] font-bold py-3 px-6 rounded hover:bg-slate-800 transition-all uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#00ff00]/10">
                        <Download size={14} />
                        Export XLSX
                    </button>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-slate-300 transition-all">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-slate-50 rounded text-slate-900">
                                    <stat.icon size={18} />
                                </div>
                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: stat.color }} />
                            </div>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                            <h3 className="text-xl font-black text-slate-900 tracking-tighter">{stat.value}</h3>
                        </div>
                    ))}
                </div>

                {/* Filters & Table */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-slate-400" />
                            <input type="date" className="bg-slate-50 border border-slate-200 px-3 py-2 rounded text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:ring-1 focus:ring-black transition-all" />
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-slate-400" />
                            <input type="date" className="bg-slate-50 border border-slate-200 px-3 py-2 rounded text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:ring-1 focus:ring-black transition-all" />
                        </div>
                        <button className="bg-slate-900 text-white text-[10px] font-black px-6 py-2.5 rounded uppercase tracking-widest hover:bg-black transition-all flex items-center gap-2">
                            <Filter size={12} /> Filter
                        </button>
                    </div>

                    <div className="overflow-x-auto h-[500px] custom-scrollbar">
                        <table className="w-full text-left border-collapse min-w-max">
                            <thead className="sticky top-0 bg-white z-10 shadow-sm">
                                <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50">
                                    <th className="p-4 border-b border-slate-100">Timestamp</th>
                                    <th className="p-4 border-b border-slate-100">Client Identifier</th>
                                    <th className="p-4 border-b border-slate-100">Asset</th>
                                    <th className="p-4 border-b border-slate-100 text-center">Volume (Lots)</th>
                                    <th className="p-4 border-b border-slate-100 text-right">Rebate/Lot</th>
                                    <th className="p-4 border-b border-slate-100 text-right">Total Payout</th>
                                </tr>
                            </thead>
                            <tbody className="text-[11px] font-bold uppercase tracking-tight text-slate-600">
                                {[
                                    { date: '2024-03-10 14:22', id: 'ID-4591', asset: 'EUR/USD', volume: '2.50', rate: '$8.00', total: '+$20.00' },
                                    { date: '2024-03-09 09:45', id: 'ID-8921', asset: 'XAU/USD', volume: '1.00', rate: '$10.00', total: '+$10.00' },
                                    { date: '2024-03-09 08:30', id: 'ID-4591', asset: 'GBP/JPY', volume: '0.85', rate: '$8.00', total: '+$6.80' },
                                    { date: '2024-03-08 17:12', id: 'ID-1244', asset: 'BTC/USD', volume: '0.10', rate: '$50.00', total: '+$5.00' },
                                    { date: '2024-03-08 12:05', id: 'ID-4591', asset: 'EUR/USD', volume: '3.20', rate: '$8.00', total: '+$25.60' },
                                    { date: '2024-03-07 19:33', id: 'ID-8921', asset: 'XAU/USD', volume: '0.50', rate: '$10.00', total: '+$5.00' },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group">
                                        <td className="p-4 text-slate-400 font-medium">{row.date}</td>
                                        <td className="p-4 text-slate-900">{row.id}</td>
                                        <td className="p-4">
                                            <span className="px-2 py-1 bg-black text-white rounded text-[9px]">{row.asset}</span>
                                        </td>
                                        <td className="p-4 text-center font-black">{row.volume}</td>
                                        <td className="p-4 text-right">{row.rate}</td>
                                        <td className="p-4 text-right text-[#00ff00] font-black">{row.total}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default RebateReport;

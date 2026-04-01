import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Download, Filter, Calendar, ArrowUpCircle, CheckCircle2, Clock, XCircle, MoreVertical } from 'lucide-react';

const WithdrawalHistory = () => {
    const secondaryColor = "#ff00ff";

    const transactions = [
        { id: 'WDR-44210', date: '2024-03-16 11:20', method: 'USD (SKRILL)', amount: '$1,200.00', status: 'COMPLETED', statusColor: '#00ff00', icon: CheckCircle2 },
        { id: 'WDR-44211', date: '2024-03-15 15:44', method: 'LOCAL BANK', amount: '$4,500.00', status: 'PROCESSING', statusColor: '#ffaa00', icon: Clock },
        { id: 'WDR-44212', date: '2024-03-14 10:12', method: 'USDT (TRC20)', amount: '$850.00', status: 'REJECTED', statusColor: '#ff0000', icon: XCircle },
    ];

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">WITHDRAWAL HISTORY</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">OUTBOUND FUNDS LOGS & WITHDRAWAL STATUS</p>
                    </div>
                    <button className="bg-black text-[#ff00ff] text-[10px] font-bold py-3 px-6 rounded hover:bg-slate-800 transition-all uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#ff00ff]/10">
                        <Download size={14} />
                        EXPORT PDF
                    </button>
                </div>

                {/* Main Table Card */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex flex-wrap items-center gap-6">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-slate-400" />
                            <input type="date" className="bg-slate-50 border border-slate-200 px-3 py-2 rounded text-[10px] font-bold uppercase tracking-widest focus:outline-none" />
                        </div>
                        <button className="bg-slate-900 text-white text-[10px] font-black px-6 py-2.5 rounded uppercase tracking-widest hover:bg-black transition-all flex items-center gap-2">
                            <Filter size={12} /> FILTER OUTBOUND
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-max">
                            <thead>
                                <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50">
                                    <th className="p-5 border-b border-slate-100">Withdrawal ID</th>
                                    <th className="p-5 border-b border-slate-100">Timestamp</th>
                                    <th className="p-5 border-b border-slate-100">Destination</th>
                                    <th className="p-5 border-b border-slate-100">Amount</th>
                                    <th className="p-5 border-b border-slate-100 text-right">Status</th>
                                    <th className="p-5 border-b border-slate-100 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="text-[11px] font-bold uppercase tracking-tight text-slate-600">
                                {transactions.map((tx, i) => (
                                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group">
                                        <td className="p-5 text-slate-900 font-mono italic">{tx.id}</td>
                                        <td className="p-5 text-slate-400 font-medium">{tx.date}</td>
                                        <td className="p-5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#ff00ff]/20" />
                                                <span className="text-slate-900 tracking-widest underline decoration-slate-100 underline-offset-4">{tx.method}</span>
                                            </div>
                                        </td>
                                        <td className="p-5 font-black text-slate-900">{tx.amount}</td>
                                        <td className="p-5 text-right">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded text-white shadow-sm" style={{ backgroundColor: tx.statusColor }}>
                                                <tx.icon size={12} className="text-white" />
                                                <span className="text-[8px] font-black tracking-widest">{tx.status}</span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-right">
                                            <button className="text-slate-400 hover:text-black">
                                                <MoreVertical size={16} />
                                            </button>
                                        </td>
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

export default WithdrawalHistory;

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Download, Filter, Calendar, CheckCircle2, Clock, XCircle } from 'lucide-react';

const DepositHistory = () => {

    const transactions = [
        { id: 'TXN-98210', date: '2024-03-15 10:30', method: 'BANK WIRE', amount: '$5,000.00', status: 'COMPLETED', statusColor: '#00ff00', icon: CheckCircle2 },
        { id: 'TXN-98211', date: '2024-03-14 14:22', method: 'USDT (ERC20)', amount: '$1,200.00', status: 'PENDING', statusColor: '#ffaa00', icon: Clock },
        { id: 'TXN-98212', date: '2024-03-12 09:15', method: 'CREDIT CARD', amount: '$250.00', status: 'REJECTED', statusColor: '#ff0000', icon: XCircle },
        { id: 'TXN-98213', date: '2024-03-10 16:45', method: 'SKRILL', amount: '$1,000.00', status: 'COMPLETED', statusColor: '#00ff00', icon: CheckCircle2 },
    ];

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">DEPOSIT HISTORY</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">INBOUND TRANSACTION LOGS & FUNDING STATUS</p>
                    </div>
                    <button className="bg-black text-[#00ff00] text-[10px] font-bold py-3 px-6 rounded hover:bg-slate-800 transition-all uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#00ff00]/10">
                        <Download size={14} />
                        EXPORT CSV
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
                            <Filter size={12} /> FILTER LOGS
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-max">
                            <thead>
                                <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50">
                                    <th className="p-5 border-b border-slate-100">Transaction ID</th>
                                    <th className="p-5 border-b border-slate-100">Timestamp</th>
                                    <th className="p-5 border-b border-slate-100">Funding Method</th>
                                    <th className="p-5 border-b border-slate-100">Amount</th>
                                    <th className="p-5 border-b border-slate-100 text-right">Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-[11px] font-bold uppercase tracking-tight text-slate-600">
                                {transactions.map((tx, i) => (
                                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group">
                                        <td className="p-5 text-slate-900 font-mono">{tx.id}</td>
                                        <td className="p-5 text-slate-400 font-medium">{tx.date}</td>
                                        <td className="p-5">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-slate-200" />
                                                <span className="text-slate-900 tracking-widest">{tx.method}</span>
                                            </div>
                                        </td>
                                        <td className="p-5 font-black text-slate-900">{tx.amount}</td>
                                        <td className="p-5 text-right">
                                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-50 border border-slate-100 group-hover:border-slate-200">
                                                <tx.icon size={12} style={{ color: tx.statusColor }} />
                                                <span className="text-[9px] font-black tracking-widest" style={{ color: tx.statusColor }}>{tx.status}</span>
                                            </div>
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

export default DepositHistory;

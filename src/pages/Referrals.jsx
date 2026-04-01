import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Search, Download, UserPlus, Filter } from 'lucide-react';

const Referrals = () => {
    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">REFERRALS DIRECTORY</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">NETWORK MANAGEMENT & CLIENT INSIGHTS</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="bg-black text-[#00ff00] text-[10px] font-bold py-3 px-6 rounded hover:bg-slate-800 transition-all uppercase tracking-widest flex items-center gap-2">
                            <UserPlus size={14} /> Add Referral
                        </button>
                        <button className="bg-white border border-slate-200 text-slate-900 text-[10px] font-bold py-3 px-6 rounded hover:bg-slate-50 transition-all uppercase tracking-widest flex items-center gap-2">
                            <Download size={14} /> Export Data
                        </button>
                    </div>
                </div>

                {/* Filter & Search Bar */}
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4">
                    <div className="relative flex-1 group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#00ff00] transition-colors" size={16} />
                        <input 
                            type="text" 
                            placeholder="SEARCH BY NAME, ID OR EMAIL..." 
                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded text-[10px] font-bold uppercase tracking-widest placeholder:text-slate-300 focus:outline-none focus:ring-1 focus:ring-black transition-all"
                        />
                    </div>
                    <div className="flex gap-4">
                        <select className="bg-slate-50 border border-slate-200 px-6 py-3 rounded text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:ring-1 focus:ring-black appearance-none min-w-[160px]">
                            <option>ALL STATUS</option>
                            <option>ACTIVE TRADERS</option>
                            <option>PENDING APPROVAL</option>
                            <option>INACTIVE</option>
                        </select>
                        <button className="bg-slate-900 text-white p-3 rounded hover:bg-black transition-all flex items-center justify-center">
                            <Filter size={18} />
                        </button>
                    </div>
                </div>

                {/* Referrals Table */}
                <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse min-w-max">
                            <thead>
                                <tr className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50/50">
                                    <th className="p-5 border-b border-slate-100">Client Name</th>
                                    <th className="p-5 border-b border-slate-100">Account ID</th>
                                    <th className="p-5 border-b border-slate-100">Activation Date</th>
                                    <th className="p-5 border-b border-slate-100">Status</th>
                                    <th className="p-5 border-b border-slate-100 text-right">Lifetime Volume</th>
                                </tr>
                            </thead>
                            <tbody className="text-[11px] font-bold uppercase tracking-tight text-slate-600">
                                {[
                                    { name: 'John Doe', id: 'ID-123456', date: 'OCT 12, 2024', status: 'ACTIVE', volume: '15.5 LOTS', color: '#00ff00' },
                                    { name: 'Jane Smith', id: 'ID-789012', date: 'OCT 14, 2024', status: 'PENDING', volume: '0.0 LOTS', color: '#ffaa00' },
                                    { name: 'Michael Ross', id: 'ID-245122', date: 'SEP 28, 2024', status: 'ACTIVE', volume: '142.2 LOTS', color: '#00ff00' },
                                    { name: 'Sarah Connor', id: 'ID-998231', date: 'SEP 15, 2024', status: 'INACTIVE', volume: '2.4 LOTS', color: '#ff0000' },
                                ].map((row, i) => (
                                    <tr key={i} className="border-b border-slate-50 hover:bg-slate-50/80 transition-colors group">
                                        <td className="p-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded bg-slate-100 flex items-center justify-center text-[10px] font-black text-slate-900 group-hover:bg-black group-hover:text-[#00ff00] transition-all">
                                                    {row.name.charAt(0)}
                                                </div>
                                                <span className="text-slate-900">{row.name}</span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-slate-400 font-mono">{row.id}</td>
                                        <td className="p-5 text-slate-400 font-medium">{row.date}</td>
                                        <td className="p-5">
                                            <span className="px-2 py-1 rounded text-[9px] font-black tracking-widest text-white" style={{ backgroundColor: row.color }}>
                                                {row.status}
                                            </span>
                                        </td>
                                        <td className="p-5 text-right font-black text-slate-900">{row.volume}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 py-4 px-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Showing 4 of 28 referrals</p>
                    <div className="flex bg-white border border-slate-200 rounded p-1">
                        <button className="px-4 py-2 text-[10px] font-black text-slate-300 uppercase disabled:opacity-50" disabled>Prev</button>
                        {[1, 2, 3].map(n => (
                            <button key={n} className={`px-4 py-2 text-[10px] font-black rounded ${n === 1 ? 'bg-black text-[#00ff00]' : 'text-slate-400 hover:text-black transition-colors'}`}>
                                {n}
                            </button>
                        ))}
                        <button className="px-4 py-2 text-[10px] font-black text-slate-900 uppercase hover:text-[#00ff00] transition-colors">Next</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Referrals;

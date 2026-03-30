import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { DollarSign, FileText, Download } from 'lucide-react';

const RebateReport = () => {
    return (
        <MainLayout>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Rebate Report</h1>
                        <p className="text-slate-500">Track and withdraw your earned commissions.</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 mt-4 md:mt-0 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <Download size={18} />
                        Export Report
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-xl">
                        <DollarSign className="text-emerald-500 mb-2" size={20} />
                        <p className="text-sm font-medium text-emerald-800">Available Balance</p>
                        <h3 className="text-2xl font-bold text-emerald-600 mt-1">$4,850.00</h3>
                    </div>
                    <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl">
                        <FileText className="text-blue-500 mb-2" size={20} />
                        <p className="text-sm font-medium text-blue-800">Total Earned</p>
                        <h3 className="text-2xl font-bold text-blue-600 mt-1">$12,400.50</h3>
                    </div>
                    <div className="p-5 bg-purple-50 border border-purple-100 rounded-xl">
                        <DollarSign className="text-purple-500 mb-2" size={20} />
                        <p className="text-sm font-medium text-purple-800">Pending Rebates</p>
                        <h3 className="text-2xl font-bold text-purple-600 mt-1">$350.00</h3>
                    </div>
                    <div className="p-5 bg-amber-50 border border-amber-100 rounded-xl">
                        <FileText className="text-amber-500 mb-2" size={20} />
                        <p className="text-sm font-medium text-amber-800">Total volume</p>
                        <h3 className="text-2xl font-bold text-amber-600 mt-1">128 Lots</h3>
                    </div>
                </div>

                <div className="flex items-center gap-4 mb-6 flex-wrap">
                    <div className="flex gap-2 items-center text-sm font-medium text-slate-600">
                        <label>From:</label>
                        <input type="date" className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" />
                    </div>
                    <div className="flex gap-2 items-center text-sm font-medium text-slate-600">
                        <label>To:</label>
                        <input type="date" className="px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900" />
                    </div>
                    <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors">
                        Filter
                    </button>
                    <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                        Clear
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-max">
                        <thead>
                            <tr className="border-b border-slate-200 text-sm font-medium text-slate-500 bg-slate-50">
                                <th className="p-3 pl-4 rounded-tl-lg">Date</th>
                                <th className="p-3">Client ID</th>
                                <th className="p-3">Symbol</th>
                                <th className="p-3">Volume (Lots)</th>
                                <th className="p-3">Rebate Per Lot</th>
                                <th className="p-3 pr-4 rounded-tr-lg">Total Rebate</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-slate-600">
                            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                                <td className="py-3 px-4">2024-03-10</td>
                                <td className="py-3 px-3">ID-4591</td>
                                <td className="py-3 px-3 font-mono">EURUSD</td>
                                <td className="py-3 px-3">2.5</td>
                                <td className="py-3 px-3">$8.00</td>
                                <td className="py-3 px-4 text-emerald-600 font-bold">+$20.00</td>
                            </tr>
                            <tr className="border-b border-slate-100 hover:bg-slate-50/50">
                                <td className="py-3 px-4">2024-03-09</td>
                                <td className="py-3 px-3">ID-8921</td>
                                <td className="py-3 px-3 font-mono">XAUUSD</td>
                                <td className="py-3 px-3">1.0</td>
                                <td className="py-3 px-3">$10.00</td>
                                <td className="py-3 px-4 text-emerald-600 font-bold">+$10.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </MainLayout>
    );
};

export default RebateReport;

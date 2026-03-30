import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Search, Download } from 'lucide-react';

const Referrals = () => {
    return (
        <MainLayout>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Referrals</h1>
                        <p className="text-slate-500">View and manage your referred clients and partners.</p>
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
                        <Download size={18} />
                        Export Data
                    </button>
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search referrals..." 
                            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                        />
                    </div>
                    <select className="px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900">
                        <option>All Status</option>
                        <option>Active</option>
                        <option>Pending</option>
                    </select>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-slate-200 text-sm font-medium text-slate-500">
                                <th className="pb-3 pl-4">Client Name</th>
                                <th className="pb-3">Account ID</th>
                                <th className="pb-3">Registration Date</th>
                                <th className="pb-3">Status</th>
                                <th className="pb-3 pr-4">Total Volume</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm">
                            <tr className="border-b border-slate-100 hover:bg-slate-50">
                                <td className="py-4 pl-4 font-medium text-slate-900">John Doe</td>
                                <td className="py-4 text-slate-600">ID-123456</td>
                                <td className="py-4 text-slate-600">Oct 12, 2024</td>
                                <td className="py-4">
                                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Active</span>
                                </td>
                                <td className="py-4 pr-4 text-slate-900 font-medium">15.5 Lots</td>
                            </tr>
                            <tr className="border-b border-slate-100 hover:bg-slate-50">
                                <td className="py-4 pl-4 font-medium text-slate-900">Jane Smith</td>
                                <td className="py-4 text-slate-600">ID-789012</td>
                                <td className="py-4 text-slate-600">Oct 14, 2024</td>
                                <td className="py-4">
                                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">Pending</span>
                                </td>
                                <td className="py-4 pr-4 text-slate-900 font-medium">0.0 Lots</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="flex justify-between items-center mt-6 text-sm text-slate-500">
                    <p>Showing 2 of 2 referrals</p>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50" disabled>Previous</button>
                        <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50 bg-slate-50 text-slate-900 font-medium">1</button>
                        <button className="px-3 py-1 border border-slate-200 rounded hover:bg-slate-50" disabled>Next</button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Referrals;

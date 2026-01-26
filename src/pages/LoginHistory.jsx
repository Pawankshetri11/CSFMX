import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Search, MapPin, Monitor, Globe, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const LoginHistory = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [entriesCount, setEntriesCount] = useState(10);

    const loginData = [
        { id: 40115, ip: '47.15.118.35', machine: 'Desktop-Work', browser: 'Google Chrome', loginTime: '2026-01-26 08:30:20', logoutTime: '--', location: 'Delhi, India' },
        { id: 39968, ip: '157.49.180.247', machine: 'MacBook Pro', browser: 'Google Chrome', loginTime: '2026-01-22 16:01:46', logoutTime: '2026-01-22 18:30:12', location: 'Mumbai, India' },
        { id: 39951, ip: '152.58.88.63', machine: 'iPhone 15', browser: 'Safari', loginTime: '2026-01-22 12:21:04', logoutTime: '2026-01-22 13:05:44', location: 'Chandigarh, India' },
        { id: 38584, ip: '47.15.115.70', machine: 'Desktop-Home', browser: 'Microsoft Edge', loginTime: '2025-11-30 18:18:06', logoutTime: '2025-11-30 22:14:00', location: 'Noida, India' },
        { id: 38509, ip: '47.15.119.138', machine: 'Android Tablet', browser: 'Google Chrome', loginTime: '2025-11-25 08:38:35', logoutTime: '2025-11-25 09:45:10', location: 'Gurgaon, India' },
        { id: 38495, ip: '47.15.118.224', machine: 'Desktop-Work', browser: 'Google Chrome', loginTime: '2025-11-24 14:44:07', logoutTime: '2025-11-24 17:30:00', location: 'Delhi, India' },
        { id: 38477, ip: '223.184.188.145', machine: 'iPad Mini', browser: 'Safari', loginTime: '2025-11-24 08:33:16', logoutTime: '2025-11-24 09:20:44', location: 'Lucknow, India' },
        { id: 38439, ip: '223.184.172.46', machine: 'Laptop-Travel', browser: 'Google Chrome', loginTime: '2025-11-22 08:24:14', logoutTime: '2025-11-22 10:15:22', location: 'Jaipur, India' },
    ];

    const filteredData = loginData.filter(item =>
        item.ip.includes(searchTerm) ||
        item.browser.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <MainLayout>
            <div className="space-y-6 animate-fade">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Login History</h1>
                        <p className="text-slate-500 text-sm mt-1">Track your account access and security</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search logs..."
                                className="pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#00ff00] focus:border-transparent transition-all w-64"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Table Container */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-4 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                            Show
                            <select
                                className="border border-slate-200 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-[#00ff00]"
                                value={entriesCount}
                                onChange={(e) => setEntriesCount(parseInt(e.target.value))}
                            >
                                <option value={10}>10</option>
                                <option value={25}>25</option>
                                <option value={50}>50</option>
                            </select>
                            entries
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#00ff00] text-black">
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">S.No.</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Ip Address</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Machine Name</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Browser Name</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Login Time</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Logout Time</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider">Live Location</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredData.length > 0 ? (
                                    filteredData.map((row, index) => (
                                        <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-semibold text-slate-700">{row.id}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <Globe className="w-3.5 h-3.5 text-slate-400" />
                                                    <span className="text-sm text-slate-600 font-medium">{row.ip}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <Monitor className="w-3.5 h-3.5 text-slate-400" />
                                                    <span className="text-sm text-slate-600">{row.machine || '--'}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                                    {row.browser}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                                                    <span className="text-xs text-slate-500">{row.loginTime}</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`text-xs ${row.logoutTime === '--' ? 'text-slate-400' : 'text-slate-500'}`}>
                                                    {row.logoutTime}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                                                    <span className="text-xs text-slate-500 hover:text-[#00ff00] cursor-pointer transition-colors">
                                                        {row.location}
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="px-6 py-12 text-center text-slate-500 text-sm">
                                            No login records found matching your search.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="p-4 border-t border-slate-50 bg-slate-50/30 flex items-center justify-between">
                        <p className="text-xs text-slate-500">
                            Showing 1 to {filteredData.length} of {filteredData.length} entries
                        </p>
                        <div className="flex items-center gap-1">
                            <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all text-slate-400 hover:text-slate-600">
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center bg-[#00ff00] text-black font-bold text-xs rounded-lg">1</button>
                            <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-slate-200 transition-all text-slate-400 hover:text-slate-600">
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default LoginHistory;

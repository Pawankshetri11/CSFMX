import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Info, BarChart3, TrendingUp, Users } from 'lucide-react';

const ReferralsInfo = () => {
    return (
        <MainLayout>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Metrics */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                        <Users size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500">Total Referrals</p>
                        <h3 className="text-2xl font-bold text-slate-900 mt-1">2,451</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl">
                        <TrendingUp size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500">Active Traders</p>
                        <h3 className="text-2xl font-bold text-slate-900 mt-1">1,832</h3>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4">
                    <div className="p-4 bg-purple-50 text-purple-600 rounded-xl">
                        <BarChart3 size={24} />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500">Total Volume</p>
                        <h3 className="text-2xl font-bold text-slate-900 mt-1">45,210 <span className="text-sm font-normal text-slate-500">Lots</span></h3>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-2 mb-6 text-slate-900">
                    <Info size={24} className="text-blue-500" />
                    <h1 className="text-2xl font-bold">Referrals Information Center</h1>
                </div>
                
                <div className="space-y-6">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">Understanding the IB Program</h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                            The Introducing Broker (IB) program is designed for individuals and companies to earn 
                            commissions by referring clients to Capital Street FX. For every client you refer who 
                            registers and trades, you earn a substantial rebate based on their trading volume.
                        </p>
                        <ul className="list-disc ml-5 space-y-2 text-slate-600">
                            <li>Multi-tier commission structure allowing you to earn from your sub-IBs.</li>
                            <li>Real-time reporting and detailed rebate breakdown.</li>
                            <li>Comprehensive marketing tools available.</li>
                        </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 className="text-lg font-semibold text-slate-900 mb-3">Target Eligibility & Upgrades</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Upgrade your partner level manually or automatically by reaching volume targets. Higher 
                            tiers unlock better revenue sharing percentages. Ensure to keep a track of the criteria for 
                            the successive tiers on the platform.
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ReferralsInfo;

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Share2, Users, TrendingUp, Award } from 'lucide-react';

const Affiliate = () => {
    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                <div>
                    <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">IB/AFFILIATE PROGRAM</h1>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">PARTNERSHIP MANAGEMENT & PORTAL ACCESS</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm space-y-8 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-3 bg-black text-[#00ff00] rounded">
                                <Share2 size={20} />
                            </div>
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Affiliate Overview</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="p-6 bg-slate-50 border border-slate-100 rounded group hover:border-[#00ff00]/30 transition-all">
                                <Users className="text-[#00ff00] mb-4" size={24} />
                                <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">Direct Referrals</h4>
                                <p className="text-2xl font-black tracking-tighter">124</p>
                            </div>
                            <div className="p-6 bg-slate-50 border border-slate-100 rounded group hover:border-[#ff00ff]/30 transition-all">
                                <TrendingUp className="text-[#ff00ff] mb-4" size={24} />
                                <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-1">Conversion Rate</h4>
                                <p className="text-2xl font-black tracking-tighter">8.4%</p>
                            </div>
                        </div>

                        <div className="bg-black p-6 rounded text-white flex items-center justify-between">
                            <div>
                                <h4 className="text-[10px] font-black text-[#00ff00] uppercase tracking-widest mb-1">Current Tier</h4>
                                <p className="text-sm font-bold uppercase tracking-widest">Silver Partner</p>
                            </div>
                            <Award className="text-[#00ff00]" size={32} />
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Affiliate;

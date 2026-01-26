import React from 'react';
import { Activity, ShieldAlert, TrendingUp, Wallet } from 'lucide-react';

const StatItem = ({ label, value, Icon }) => (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm flex items-center justify-between">
        <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">{label}</p>
            <p className="text-lg font-bold text-slate-900">{value}</p>
        </div>
        <Icon className="text-slate-200 w-5 h-5" />
    </div>
);

const StatsGrid = ({ equity, margin }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatItem label="Equity" value={equity} Icon={Activity} />
            <StatItem label="Margin" value={margin} Icon={ShieldAlert} />
            <StatItem label="Leverage" value="1:500" Icon={TrendingUp} />
            <StatItem label="Bonus Credit" value="$0.00" Icon={Wallet} />
        </div>
    );
};

export default StatsGrid;

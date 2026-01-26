import React from 'react';
import { ShieldAlert, Plus, ArrowUpRight, ArrowRightLeft } from 'lucide-react';

const AccountCard = ({ activeTab, switchAccount, accountData }) => {
    const isLive = activeTab === 'live';

    return (
        <div className="space-y-8">
            {/* Account Tabs */}
            <div className="flex gap-1 border-b border-slate-200">
                <button
                    onClick={() => switchAccount('live')}
                    className={`px-6 md:px-8 py-3 text-[10px] md:text-xs font-black transition-all relative tracking-widest 
            ${isLive ? 'text-black' : 'text-slate-400 hover:text-slate-600'}`}
                >
                    LIVE ACCOUNT
                    {isLive && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ff00]"></div>}
                </button>
                <button
                    onClick={() => switchAccount('demo')}
                    className={`px-6 md:px-8 py-3 text-[10px] md:text-xs font-black transition-all relative tracking-widest 
            ${!isLive ? 'text-black' : 'text-slate-400 hover:text-slate-600'}`}
                >
                    DEMO ACCOUNT
                    {!isLive && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ff00]"></div>}
                </button>
            </div>

            {/* Hero Card */}
            <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden animate-fade">
                <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div className="space-y-1">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {isLive ? 'Trading Terminal' : 'Practice Terminal'}
                        </p>
                        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{accountData.id}</h2>

                        <div className="flex items-center gap-2 mt-2">
                            {isLive ? (
                                <>
                                    <ShieldAlert size={14} className="text-[#ff00ff]" />
                                    <span className="text-[11px] font-bold uppercase tracking-tight text-[#ff00ff]">Unverified Status</span>
                                </>
                            ) : (
                                <div className="flex items-center gap-2 px-2 py-0.5 rounded bg-slate-50 border border-slate-100">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00ff00]"></div>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">Practice Mode</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="text-left md:text-right">
                        <p className="text-xs font-semibold text-slate-400 mb-1 uppercase tracking-tight">Available Balance</p>
                        <p className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tighter">{accountData.balance}</p>
                    </div>
                </div>

                <div className="px-6 md:px-8 pb-8 flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-6 py-2.5 rounded text-xs font-bold transition-all shadow-sm hover:shadow-md active:scale-95 uppercase bg-[#00ff00] text-black">
                        <Plus size={16} />
                        <span>{isLive ? 'Fund Now' : 'Reset Balance'}</span>
                    </button>

                    <button
                        disabled={!isLive}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded text-xs font-bold transition-all active:scale-95 uppercase
              ${isLive
                                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                : 'bg-slate-50 text-slate-300 cursor-not-allowed'}`}
                    >
                        <ArrowUpRight size={16} /> Withdraw
                    </button>

                    <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-100 text-slate-700 rounded text-xs font-bold hover:bg-slate-200 transition-all active:scale-95 uppercase">
                        <ArrowRightLeft size={16} /> Transfer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountCard;

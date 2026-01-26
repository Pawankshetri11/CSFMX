import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { CreditCard, Landmark, Wallet, Coins, Clock, Zap, ChevronRight } from 'lucide-react';

const DepositFunds = () => {
    const paymentMethods = [
        {
            category: "Visa/Master Card",
            icon: CreditCard,
            methods: [
                { name: "Visa", logo: "💳", time: "Instant", fee: "0", gateway: "1" },
                { name: "MasterCard", logo: "🎴", time: "Instant", fee: "0", gateway: "1" }
            ]
        },
        {
            category: "Bank Transfer",
            icon: Landmark,
            methods: [
                { name: "Local Bank", logo: "🏛️", time: "1-3 Hours", fee: "0", gateway: "2" },
                { name: "Wire Transfer", logo: "🌐", time: "1-3 Days", fee: "0", gateway: "2" }
            ]
        },
        {
            category: "Wallets",
            icon: Wallet,
            methods: [
                { name: "Volet", logo: "V", time: "Instant", fee: "0", gateway: "3" },
                { name: "Binance Pay", logo: "B", time: "Instant", fee: "0", gateway: "1" },
                { name: "PayPal", logo: "P", time: "Instant", fee: "0", gateway: "2" }
            ]
        },
        {
            category: "Crypto Currency",
            icon: Coins,
            methods: [
                { name: "Bitcoin", logo: "₿", time: "Instant", fee: "0", gateway: "1" },
                { name: "Ethereum", logo: "Ξ", time: "Instant", fee: "0", gateway: "1" },
                { name: "Tether (TRC20)", logo: "₮", time: "Instant", fee: "0", gateway: "1" },
                { name: "USDC (ERC20)", logo: "U", time: "Instant", fee: "0", gateway: "1" },
                { name: "Tether (ERC20)", logo: "₮", time: "Instant", fee: "0", gateway: "1" },
                { name: "USDC (BEP20)", logo: "U", time: "Instant", fee: "0", gateway: "1" },
            ]
        }
    ];

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade pb-12">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Deposit Funds</h1>
                        <p className="text-slate-500 text-xs font-bold mt-1 uppercase tracking-widest">Select your preferred funding method</p>
                    </div>
                </div>

                {/* Categories */}
                <div className="space-y-10">
                    {paymentMethods.map((group, groupIdx) => (
                        <div key={groupIdx} className="space-y-4">
                            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                                <div className="p-2 bg-slate-100 rounded text-slate-400">
                                    <group.icon size={18} />
                                </div>
                                <h2 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">{group.category}</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                {group.methods.map((method, methodIdx) => (
                                    <button
                                        key={methodIdx}
                                        className="group bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:border-[#00ff00] hover:shadow-md transition-all text-left flex flex-col justify-between min-h-[160px] active:scale-[0.98]"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div className="w-10 h-10 rounded bg-slate-50 flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all border border-slate-100">
                                                {method.logo}
                                            </div>
                                            <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ChevronRight size={14} className="text-[#00ff00]" />
                                            </div>
                                        </div>

                                        <div className="mt-4 space-y-3">
                                            <p className="text-sm font-black text-slate-900">{method.name}</p>

                                            <div className="space-y-1.5 border-t border-slate-50 pt-3">
                                                <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-tighter">
                                                    <span className="text-slate-400">Time</span>
                                                    <span className="text-slate-900 flex items-center gap-1">
                                                        <Clock size={10} className="text-slate-300" />
                                                        {method.time}
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-tighter">
                                                    <span className="text-slate-400">Fee</span>
                                                    <span className="text-slate-900">{method.fee === "0" ? "FREE" : method.fee}</span>
                                                </div>
                                                <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-tighter">
                                                    <span className="text-slate-400">Gateway</span>
                                                    <span className="text-slate-900">({method.gateway})</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Info Box */}
                <div className="bg-slate-900 rounded-lg p-6 text-white flex flex-col md:flex-row items-center gap-6 border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-[#00ff00]/10 flex items-center justify-center shrink-0">
                        <Zap className="text-[#00ff00]" size={24} />
                    </div>
                    <div className="space-y-1">
                        <p className="font-black uppercase tracking-tight text-sm">Instant Funding Available</p>
                        <p className="text-slate-400 text-xs font-bold leading-relaxed tracking-wider">Most deposits are processed instantly. If you experience delays or need higher limits, please contact our 24/7 dedicated support team.</p>
                    </div>
                    <button className="md:ml-auto px-8 py-2.5 bg-[#00ff00] text-black font-black text-[10px] uppercase rounded hover:shadow-lg hover:shadow-[#00ff00]/20 transition-all active:scale-95 shrink-0">
                        Live Support
                    </button>
                </div>
            </div>
        </MainLayout>
    );
};

export default DepositFunds;

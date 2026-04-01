import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { 
    CreditCard, 
    Landmark, 
    Wallet, 
    Coins, 
    Clock, 
    Zap, 
    ChevronRight, 
    Globe, 
    ShieldCheck, 
    ArrowRightLeft,
    Bitcoin,
    Activity,
    DollarSign
} from 'lucide-react';

const DepositFunds = () => {

    const paymentMethods = [
        {
            category: "Card Network",
            icon: CreditCard,
            methods: [
                { name: "Visa", icon: CreditCard, time: "Instant", fee: "0", gateway: "1" },
                { name: "MasterCard", icon: CreditCard, time: "Instant", fee: "0", gateway: "1" }
            ]
        },
        {
            category: "Banking Solutions",
            icon: Landmark,
            methods: [
                { name: "Local Bank", icon: Landmark, time: "1-3 Hours", fee: "0", gateway: "2" },
                { name: "Wire Transfer", icon: Globe, time: "1-3 Days", fee: "0", gateway: "2" }
            ]
        },
        {
            category: "Digital Wallets",
            icon: Wallet,
            methods: [
                { name: "Volet", icon: Wallet, time: "Instant", fee: "0", gateway: "3" },
                { name: "Binance Pay", icon: Zap, time: "Instant", fee: "0", gateway: "1" },
                { name: "PayPal", icon: ArrowRightLeft, time: "Instant", fee: "0", gateway: "2" }
            ]
        },
        {
            category: "Encrypted Assets",
            icon: Coins,
            methods: [
                { name: "Bitcoin", icon: Bitcoin, time: "Instant", fee: "0", gateway: "1" },
                { name: "Ethereum", icon: Activity, time: "Instant", fee: "0", gateway: "1" },
                { name: "Tether (TRC20)", icon: DollarSign, time: "Instant", fee: "0", gateway: "1" },
                { name: "USDC (ERC20)", icon: DollarSign, time: "Instant", fee: "0", gateway: "1" },
                { name: "Tether (ERC20)", icon: DollarSign, time: "Instant", fee: "0", gateway: "1" },
                { name: "USDC (BEP20)", icon: DollarSign, time: "Instant", fee: "0", gateway: "1" },
            ]
        }
    ];

    return (
        <MainLayout>
            <div className="space-y-10 animate-fade pb-12">
                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">FUNDING GATEWAY</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">SECURE CAPITAL INJECTION & ACCOUNT LIQUIDITY</p>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded border border-slate-100">
                        <ShieldCheck size={14} className="text-[#00ff00]" />
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">PCI-DSS Compliant Infrastructure</span>
                    </div>
                </div>

                {/* Categories */}
                <div className="space-y-12">
                    {paymentMethods.map((group, groupIdx) => (
                        <div key={groupIdx} className="space-y-6">
                            <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                                <div className="p-2.5 bg-black text-[#00ff00] rounded transition-transform group-hover:scale-105">
                                    <group.icon size={18} />
                                </div>
                                <h2 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{group.category}</h2>
                                <div className="flex-1 h-px bg-slate-50 ml-4" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {group.methods.map((method, methodIdx) => (
                                    <button
                                        key={methodIdx}
                                        className="group relative bg-white p-6 rounded-lg border border-slate-200 shadow-sm hover:border-black hover:shadow-xl transition-all text-left flex flex-col justify-between min-h-[180px] overflow-hidden"
                                    >
                                        <div className="relative z-10">
                                            <div className="flex justify-between items-start mb-6">
                                                <div className="w-12 h-12 rounded bg-slate-50 text-slate-400 group-hover:text-black group-hover:bg-[#00ff00] transition-all flex items-center justify-center border border-slate-100 group-hover:border-transparent group-hover:rotate-6">
                                                    <method.icon size={24} />
                                                </div>
                                                <ChevronRight size={14} className="text-slate-200 group-hover:text-black transition-all transform group-hover:translate-x-1" />
                                            </div>

                                            <div className="space-y-4">
                                                <p className="text-sm font-black text-slate-900 tracking-tight uppercase">{method.name}</p>

                                                <div className="space-y-2 border-t border-slate-50 pt-4">
                                                    <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest">
                                                        <span className="text-slate-400">Processing</span>
                                                        <span className="text-slate-900 flex items-center gap-1">
                                                            <Clock size={10} className="text-[#00ff00]" />
                                                            {method.time}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-widest">
                                                        <span className="text-slate-400">Transaction Fee</span>
                                                        <span className="text-slate-900 font-black">{method.fee === "0" ? "0.00 %" : method.fee}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Background Decor */}
                                        <div className="absolute -right-4 -bottom-4 text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <method.icon size={80} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Global Support Box */}
                <div className="bg-black rounded-lg p-8 text-white flex flex-col lg:flex-row items-center gap-8 border border-white/5 relative overflow-hidden group">
                    <div className="w-16 h-16 rounded-full bg-[#00ff00]/10 flex items-center justify-center shrink-0 border border-[#00ff00]/20 relative z-10 group-hover:animate-pulse">
                        <Zap className="text-[#00ff00]" size={32} />
                    </div>
                    <div className="space-y-2 relative z-10">
                        <h4 className="font-black uppercase tracking-widest text-[#00ff00] text-sm">Ultra-Fast Liquidity Access</h4>
                        <p className="text-slate-400 text-[11px] font-bold leading-relaxed tracking-widest uppercase max-w-2xl">
                            Our proprietary bridging technology ensures 98.4% of deposits are credited to your MT5 account within 60 seconds. High-volume partners can request custom limits via the desk.
                        </p>
                    </div>
                    <button className="lg:ml-auto px-10 py-4 bg-[#00ff00] text-black font-black text-[10px] uppercase rounded hover:bg-white transition-all shadow-xl shadow-[#00ff00]/10 relative z-10">
                        Contact Funding Desk
                    </button>
                    
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff00] opacity-5 blur-[120px] -mr-32 -mt-32" />
                </div>
            </div>
        </MainLayout>
    );
};

export default DepositFunds;

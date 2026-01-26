import React from 'react';
import {
    LayoutDashboard,
    Wallet,
    ArrowUpRight,
    ArrowRightLeft,
    History,
    User,
    Settings,
    LogOut,
    X
} from 'lucide-react';

import logo from '../assets/logo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', active: true },
        { icon: User, label: 'Manage Profile' },
        { icon: History, label: 'Login History' },
        { icon: Settings, label: 'Manage Accounts' },
        { icon: Wallet, label: 'Deposit Funds' },
        { icon: ArrowUpRight, label: 'Withdraw Funds' },
        { icon: ArrowRightLeft, label: 'IB/Affiliate' },
        { icon: History, label: 'Payment History' },
        { icon: LayoutDashboard, label: 'My IB Dashboard' },
        { icon: Settings, label: 'Platforms' },
        { icon: User, label: 'Help' },
        { icon: LogOut, label: 'Promotions' },
    ];

    return (
        <>
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transition-transform duration-300 transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:relative lg:translate-x-0 flex flex-col h-screen`}
            >
                <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                    <div className="flex items-center">
                        <img src={logo} alt="Capital Street FX" className="h-12 w-auto object-contain" />
                    </div>
                    <button onClick={() => toggleSidebar(false)} className="lg:hidden p-1 text-slate-400">
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 py-4 overflow-y-auto custom-scrollbar space-y-1">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            className={`w-full flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-all 
                ${item.active
                                    ? 'sidebar-item-active'
                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                        >
                            <item.icon className={`w-4 h-4 ${item.active ? 'text-slate-900' : 'text-slate-400'}`} />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="p-6 border-t border-slate-100">
                    <button className="flex items-center gap-3 text-slate-500 font-medium text-sm hover:text-red-600 transition-colors w-full">
                        <LogOut className="w-4 h-4" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    onClick={() => toggleSidebar(false)}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                ></div>
            )}
        </>
    );
};

export default Sidebar;

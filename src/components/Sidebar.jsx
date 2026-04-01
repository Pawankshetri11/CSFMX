import React, { useState } from 'react';
import {
    LayoutDashboard,
    Wallet,
    ArrowUpRight,
    ArrowRightLeft,
    History,
    User,
    Settings,
    LogOut,
    X,
    ChevronDown,
    ChevronRight,
    Megaphone
} from 'lucide-react';

import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();
    
    // Active states for groupings
    const isIbDashboardActive = location.pathname.includes('/ib-dashboard') || 
                                location.pathname.includes('/referrals') ||
                                location.pathname.includes('/promotional-banner') ||
                                location.pathname.includes('/ib-promotion-link') ||
                                location.pathname.includes('/my-ib-link') ||
                                location.pathname.includes('/ib-agreement') ||
                                location.pathname.includes('/extended-due-diligence');

    const isPromotionsActive = location.pathname.includes('/request-promotion') ||
                                location.pathname.includes('/promotion-lot-report') ||
                                location.pathname.includes('/promotion-cancellation') ||
                                location.pathname.includes('/bonus-history') ||
                                location.pathname.includes('/promotions');

    const isManageAccountsActive = location.pathname.includes('/accounts');
    const isPaymentHistoryActive = location.pathname.includes('/history');

    // Menu toggle states
    const [ibMenuOpen, setIbMenuOpen] = useState(isIbDashboardActive);
    const [promoMenuOpen, setPromoMenuOpen] = useState(isPromotionsActive);
    const [accountsMenuOpen, setAccountsMenuOpen] = useState(isManageAccountsActive);
    const [paymentMenuOpen, setPaymentMenuOpen] = useState(isPaymentHistoryActive);

    const menuItems = [
        // Group 1
        { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
        { icon: LayoutDashboard, label: 'Dashboard 2', path: '/dashboard2' },
        { icon: Wallet, label: 'Deposit Funds', path: '/deposit' },
        { icon: ArrowUpRight, label: 'Withdraw Funds', path: '/withdraw' },
        { 
            icon: Megaphone, 
            label: 'Promotions', 
            path: '/promotions',
            subItems: [
                { label: 'Request For Promotion', path: '/request-promotion' },
                { label: 'Promotion Lot Report', path: '/promotion-lot-report' },
                { label: 'Promotion Cancellation Request', path: '/promotion-cancellation' },
                { label: 'Bonus History', path: '/bonus-history' },
            ]
        },
        // Group 2
        { icon: User, label: 'Manage Profile', path: '/profile' },
        { 
            icon: Settings, 
            label: 'Manage Accounts', 
            path: '/accounts',
            subItems: [
                { label: 'Fund Transfer Request', path: '/accounts' },
                { label: 'Leverage Change Request', path: '/accounts' },
                { label: 'Rank change Request', path: '/accounts' },
                { label: 'Change Account Type', path: '/accounts' },
                { label: 'Update Profile History', path: '/accounts' },
            ]
        },
        // Group 3
        { 
            icon: LayoutDashboard, 
            label: 'My IB Dashboard', 
            path: '/ib-dashboard',
            subItems: [
                { label: 'Referrals', path: '/referrals' },
                { label: 'Referrals Info', path: '/referrals-info' },
                { label: 'Promotional Banner', path: '/promotional-banner' },
                { label: 'IB Promotion Link', path: '/ib-promotion-link' },
                { label: 'My IB Link', path: '/my-ib-link' },
                { label: 'Rebate Report', path: '/rebate-report' },
                { label: 'IB Agreement', path: '/ib-agreement' },
                { label: 'Extended Due Diligence', path: '/extended-due-diligence' },
            ]
        },
        { icon: History, label: 'Login History', path: '/login-history' },
        // Group 4
        { 
            icon: History, 
            label: 'Payment History', 
            path: '#',
            subItems: [
                { label: 'Deposit History', path: '/deposit-history' },
                { label: 'Withdraw History', path: '/withdrawal-history' },
            ]
        },
        { icon: User, label: 'Help', path: '/help' },
    ];

    return (
        <>
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-slate-200 transition-transform duration-300 transform 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:relative lg:translate-x-0 flex flex-col h-screen`}
            >
                <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                    <NavLink to="/" className="flex items-center">
                        <img src={logo} alt="Capital Street FX" className="h-12 w-auto object-contain" />
                    </NavLink>
                    <button onClick={() => toggleSidebar(false)} className="lg:hidden p-1 text-slate-400">
                        <X size={20} />
                    </button>
                </div>

                <nav className="flex-1 py-4 overflow-y-auto custom-scrollbar space-y-1">
                    {menuItems.map((item, index) => {
                        const isSubMenuOpen = (item.label === 'My IB Dashboard' && ibMenuOpen) || 
                                              (item.label === 'Promotions' && promoMenuOpen) ||
                                              (item.label === 'Manage Accounts' && accountsMenuOpen) ||
                                              (item.label === 'Payment History' && paymentMenuOpen);

                        const isGroupActive = (item.label === 'My IB Dashboard' && isIbDashboardActive) || 
                                              (item.label === 'Promotions' && isPromotionsActive) ||
                                              (item.label === 'Manage Accounts' && isManageAccountsActive) ||
                                              (item.label === 'Payment History' && isPaymentHistoryActive);

                        return (
                            <div key={index}>
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={() => {
                                                if (item.label === 'My IB Dashboard') setIbMenuOpen(!ibMenuOpen);
                                                if (item.label === 'Promotions') setPromoMenuOpen(!promoMenuOpen);
                                                if (item.label === 'Manage Accounts') setAccountsMenuOpen(!accountsMenuOpen);
                                                if (item.label === 'Payment History') setPaymentMenuOpen(!paymentMenuOpen);
                                            }}
                                            className={`w-full flex items-center justify-between px-6 py-3.5 text-sm font-medium transition-all ${
                                                isGroupActive
                                                    ? 'sidebar-item-active'
                                                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <item.icon className="w-4 h-4" />
                                                {item.label}
                                            </div>
                                            {isSubMenuOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                        </button>
                                        
                                        {isSubMenuOpen && (
                                            <div className="bg-slate-50/50 py-1">
                                                {item.subItems.map((sub, subIdx) => (
                                                    <NavLink
                                                        key={subIdx}
                                                        to={sub.path}
                                                        className={({ isActive }) => `w-full flex items-center gap-3 pl-14 pr-6 py-2 text-xs font-semibold transition-all ${
                                                            isActive
                                                                ? 'text-[rgb(0,255,0)]'
                                                                : 'text-slate-500 hover:text-slate-900'
                                                        }`}
                                                        onClick={() => {
                                                            if (window.innerWidth < 1024) toggleSidebar(false);
                                                        }}
                                                    >
                                                        {sub.label}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => `w-full flex items-center gap-3 px-6 py-3.5 text-sm font-medium transition-all 
                                            ${isActive
                                                ? 'sidebar-item-active'
                                                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                                        onClick={() => {
                                            if (window.innerWidth < 1024) toggleSidebar(false);
                                        }}
                                    >
                                        <item.icon className="w-4 h-4" />
                                        {item.label}
                                    </NavLink>
                                )}
                            </div>
                        );
                    })}
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

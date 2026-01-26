import React from 'react';
import { Menu, ChevronRight, Search, Bell } from 'lucide-react';

const Header = ({ toggleSidebar, activeTitle = "Dashboard" }) => {
    return (
        <header className="h-16 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between sticky top-0 z-10 shrink-0">
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 uppercase">
                <button
                    onClick={() => toggleSidebar(true)}
                    className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
                >
                    <Menu size={20} />
                </button>
                <div className="hidden sm:flex items-center gap-2">
                    <span>Main</span>
                    <ChevronRight size={14} />
                    <span className="text-slate-900">{activeTitle}</span>
                </div>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                <div className="relative hidden lg:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="pl-10 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-slate-300 w-48 font-medium"
                    />
                </div>

                <button className="text-slate-400 hover:text-slate-600 relative">
                    <Bell size={20} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full border-2 border-white bg-[#ff00ff]"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-slate-200 cursor-pointer group">
                    <div className="text-right hidden sm:block">
                        <p className="text-xs font-bold text-slate-900 uppercase">Aryan Khan</p>
                        <p className="text-[10px] text-slate-500 font-medium uppercase tracking-tighter">Premium User</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs border border-slate-200 group-hover:border-slate-400 transition-all uppercase">
                        AK
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

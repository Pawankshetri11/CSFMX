import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const MainLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = (state) => {
        setIsSidebarOpen(state);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                <Header toggleSidebar={toggleSidebar} />

                <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-8 space-y-8">
                    {children}

                    <footer className="mt-auto p-8 border-t border-slate-100 bg-white flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-slate-300 uppercase tracking-[0.2em]">
                        <p>© 2024 Capital StreetFX System</p>
                        <div className="flex gap-6">
                            <span className="hover:text-slate-500 cursor-pointer">Safety</span>
                            <span className="hover:text-slate-500 cursor-pointer">Terms</span>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
};

export default MainLayout;

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Monitor, Smartphone, Globe, ArrowRight, ExternalLink, Download, Zap, Shield } from 'lucide-react';

const Platforms = () => {
    const [activeTab, setActiveTab] = useState('web');

    const platforms = {
        web: {
            title: "Web Trader",
            subtitle: "Pro Trading in your Browser",
            description: "With this platform, you can trade using any browser anywhere by just visiting the page. This page gives access to both the order page as well as the back office page using which you can top up or withdraw from your account. This page will show real-time prices along with real-time order punching facility.",
            icon: Globe,
            image: "🌐",
            actions: [
                { name: "FxyFi Live Login", type: "live" },
                { name: "FxyFi Demo Login", type: "demo" },
                { name: "AltX Live Login", type: "live" },
                { name: "AltX Demo Login", type: "demo" },
                { name: "Act Live Login", type: "live" },
                { name: "Act Demo Login", type: "demo" },
                { name: "Act Lite Live", type: "live" },
                { name: "Act Lite Demo", type: "demo" },
            ]
        },
        desktop: {
            title: "Desktop Application",
            subtitle: "High-Performance Trading Terminal",
            description: "Experience the full power of our high-speed trading engine on your desktop. Built for professional traders who require ultra-low latency, advanced charting tools, and personalized workspace layouts. Compatible with Windows and macOS systems.",
            icon: Monitor,
            image: "💻",
            actions: [
                { name: "Download Windows v2.4", type: "live", icon: Download },
                { name: "Download macOS v2.4", type: "live", icon: Download },
                { name: "Desktop Demo Setup", type: "demo" },
            ]
        },
        mobile: {
            title: "Mobile App",
            subtitle: "Trade Markets on the Move",
            description: "Carry the markets in your pocket. Our mobile application provides a seamless trading experience optimized for handheld devices. Manage your portfolio, execute trades, and receive instant alerts wherever you are.",
            icon: Smartphone,
            image: "📱",
            actions: [
                { name: "App Store (iOS)", type: "live" },
                { name: "Play Store (Android)", type: "live" },
                { name: "APK Direct Download", type: "demo", icon: Download },
            ]
        }
    };

    const current = platforms[activeTab];

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade pb-12">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Trading Platforms</h1>
                    <p className="text-slate-500 text-xs font-bold mt-1 uppercase tracking-widest">Select your preferred terminal to start trading</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Tabs */}
                    <div className="lg:col-span-1 space-y-2">
                        {Object.entries(platforms).map(([key, platform]) => (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`w-full flex items-center gap-4 px-6 py-4 rounded-lg border transition-all text-left group
                                    ${activeTab === key
                                        ? 'bg-slate-900 border-slate-900 text-white shadow-lg shadow-slate-200'
                                        : 'bg-white border-slate-200 text-slate-500 hover:border-[#00ff00] hover:text-slate-900'}`}
                            >
                                <platform.icon size={18} className={activeTab === key ? 'text-[#00ff00]' : 'text-slate-400 group-hover:text-[#00ff00]'} />
                                <span className="text-[11px] font-black uppercase tracking-widest">{platform.title}</span>
                            </button>
                        ))}

                        <div className="mt-8 p-6 bg-slate-50 rounded-lg border border-slate-100">
                            <h3 className="text-[10px] font-black uppercase tracking-tight text-slate-400 mb-2">Need Help?</h3>
                            <p className="text-[11px] text-slate-600 font-bold leading-relaxed">Our support team is available 24/7 to help you set up your platform.</p>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Hero Section */}
                        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden min-h-[400px] flex flex-col md:flex-row">
                            <div className="flex-1 p-8 md:p-12 space-y-6">
                                <div className="space-y-2">
                                    <div className="inline-flex px-2 py-0.5 bg-[#00ff00]/10 text-[#00ff00] text-[10px] font-black uppercase rounded tracking-tighter">
                                        Active Selection
                                    </div>
                                    <h2 className="text-3xl font-black text-slate-900 leading-none">{current.title}</h2>
                                    <p className="text-[#ff00ff] text-sm font-bold italic">{current.subtitle}</p>
                                </div>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed max-w-xl">
                                    {current.description}
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <div className="flex items-center gap-2">
                                        <Zap size={14} className="text-[#00ff00]" />
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Ultra Low Latency</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield size={14} className="text-[#00ff00]" />
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Grade Security</span>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full md:w-72 bg-slate-50 flex items-center justify-center border-l border-slate-100 overflow-hidden relative">
                                <span className="text-9xl grayscale opacity-10 absolute">{current.image}</span>
                                <div className="text-7xl drop-shadow-2xl z-10 transition-transform group-hover:scale-110">
                                    {current.image}
                                </div>
                            </div>
                        </div>

                        {/* Actions Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {current.actions.map((action, idx) => (
                                <button
                                    key={idx}
                                    className={`group flex items-center justify-between p-4 rounded-lg border transition-all active:scale-[0.98]
                                        ${action.type === 'live'
                                            ? 'bg-white border-slate-200 hover:border-[#00ff00] hover:bg-slate-50'
                                            : 'bg-white border-dashed border-slate-200 hover:border-slate-400 text-slate-500'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded flex items-center justify-center
                                            ${action.type === 'live' ? 'bg-[#00ff00]/10 text-[#00ff00]' : 'bg-slate-100 text-slate-400'}`}>
                                            {action.icon ? <action.icon size={16} /> : <Zap size={16} />}
                                        </div>
                                        <span className={`text-xs font-black uppercase tracking-tight
                                            ${action.type === 'live' ? 'text-slate-900' : 'text-slate-500'}`}>
                                            {action.name}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                                        <span className="text-[9px] font-bold uppercase tracking-tighter">
                                            {action.type === 'live' ? 'Protocol Sec' : 'Sandbox'}
                                        </span>
                                        <ArrowRight size={14} className={action.type === 'live' ? 'text-[#00ff00]' : 'text-slate-300'} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Platforms;

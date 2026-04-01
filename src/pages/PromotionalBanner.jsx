import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { DownloadCloud, ExternalLink, Image, Code, Copy, Zap } from 'lucide-react';

const PromotionalBanner = () => {
    const banners = [
        { size: '728x90', label: 'Leaderboard Header', color: '#00ff00', desc: 'Optimized for top-of-page website placement.' },
        { size: '250x250', label: 'Square Widget', color: '#ff00ff', desc: 'Perfect for sidebars and content-heavy areas.' },
        { size: '160x600', label: 'Vertical Skyscraper', color: '#00ff00', desc: 'Professional margin-aligned vertical display.' },
    ];

    return (
        <MainLayout>
            <div className="space-y-8 animate-fade">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">PROMOTIONAL BANNERS</h1>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-2">OFFICIAL MARKETING ASSETS & CONVERSION TOOLS</p>
                    </div>
                    <button className="bg-black text-[#00ff00] text-[10px] font-bold py-3 px-6 rounded hover:bg-slate-800 transition-all uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#00ff00]/10">
                        <DownloadCloud size={14} /> DOWNLOAD FULL KIT
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {banners.map((banner, i) => (
                        <div key={i} className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden group hover:border-black transition-all">
                            {/* Preview Area */}
                            <div className="h-48 bg-slate-900 relative flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                                <Image size={40} className="text-slate-700 relative z-10" />
                                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-[9px] font-black text-white uppercase tracking-widest border border-white/10">
                                    {banner.size}
                                </div>
                                <div className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm">
                                    <button className="bg-[#00ff00] text-black px-5 py-2.5 rounded text-[10px] font-black uppercase tracking-widest flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-xl">
                                        <DownloadCloud size={14} /> High-Res PNG
                                    </button>
                                </div>
                            </div>

                            {/* Info Area */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: banner.color }} />
                                    <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{banner.label}</h3>
                                </div>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed mb-6">{banner.desc}</p>
                                
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                                            <Code size={10} /> Embed Code
                                        </span>
                                        <button className="text-slate-400 hover:text-black transition-colors">
                                            <Copy size={12} />
                                        </button>
                                    </div>
                                    <div className="bg-slate-900 p-4 rounded text-[10px] font-mono text-[#00ff00] break-all select-all leading-relaxed border border-white/5 shadow-inner">
                                        {`<a href="IB_LINK">`}
                                        <br />
                                        {`  <img src="BANNER_${banner.size}.png" />`}
                                        <br />
                                        {`</a>`}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Support Footnote */}
                <div className="bg-black rounded-lg p-8 text-white relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Zap size={16} className="text-[#ff00ff]" />
                                <h4 className="text-[10px] font-black uppercase tracking-widest">Custom Production</h4>
                            </div>
                            <p className="text-[11px] text-slate-400 font-medium uppercase tracking-widest leading-relaxed max-w-xl">
                                Need specific dimensions, localized languages, or branded creatives? Our design team can provide tailored assets for your private campaigns.
                            </p>
                        </div>
                        <button className="bg-white text-black px-8 py-4 rounded text-[10px] font-black uppercase tracking-widest hover:bg-[#ff00ff] transition-all flex items-center gap-3">
                            <ExternalLink size={14} /> Contact Manager
                        </button>
                    </div>
                    <div className="absolute -right-8 -top-8 text-[#ff00ff] opacity-10 rotate-12">
                        <Zap size={200} />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PromotionalBanner;

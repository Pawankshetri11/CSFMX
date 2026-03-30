import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { DownloadCloud, ExternalLink, Image } from 'lucide-react';

const PromotionalBanner = () => {
    return (
        <MainLayout>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900 mb-2">Promotional Banners</h1>
                        <p className="text-slate-500">Download and use our official banners to attract clients.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {/* Banner Card 1 */}
                    <div className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-48 bg-slate-900 relative flex items-center justify-center">
                            <Image size={48} className="text-slate-700" />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <DownloadCloud size={18} /> Download High-Res
                                </button>
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="font-semibold text-slate-900 mb-1">Standard 728x90</h3>
                            <p className="text-sm text-slate-500 mb-4">Leaderboard size banner for web headers</p>
                            <div className="bg-slate-50 p-3 rounded text-xs font-mono text-slate-600 break-all select-all">
                                {'<a href="YOUR_LINK"><img src="BANNER_URL" /></a>'}
                            </div>
                        </div>
                    </div>

                    {/* Banner Card 2 */}
                    <div className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-48 bg-indigo-900 relative flex items-center justify-center">
                            <Image size={48} className="text-indigo-700" />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <DownloadCloud size={18} /> Download High-Res
                                </button>
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="font-semibold text-slate-900 mb-1">Square 250x250</h3>
                            <p className="text-sm text-slate-500 mb-4">Perfect for sidebars and small areas</p>
                            <div className="bg-slate-50 p-3 rounded text-xs font-mono text-slate-600 break-all select-all">
                                {'<a href="YOUR_LINK"><img src="BANNER_URL" /></a>'}
                            </div>
                        </div>
                    </div>

                    {/* Banner Card 3 */}
                    <div className="group border border-slate-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                        <div className="h-48 bg-emerald-900 relative flex items-center justify-center">
                            <Image size={48} className="text-emerald-700" />
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    <DownloadCloud size={18} /> Download High-Res
                                </button>
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="font-semibold text-slate-900 mb-1">Skyscraper 160x600</h3>
                            <p className="text-sm text-slate-500 mb-4">Tall banner suitable for vertical margins</p>
                            <div className="bg-slate-50 p-3 rounded text-xs font-mono text-slate-600 break-all select-all">
                                {'<a href="YOUR_LINK"><img src="BANNER_URL" /></a>'}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 p-6 bg-blue-50 text-blue-800 rounded-xl flex items-start gap-4">
                    <ExternalLink className="flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="font-semibold">Need custom banners?</h4>
                        <p className="mt-1">
                            If you require specific sizes, languages, or designs tailored to your audience, 
                            please contact your account manager for customized graphical assets.
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PromotionalBanner;

import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Link, Copy, CheckCircle2 } from 'lucide-react';

const IBPromotionLink = () => {
    const [copied, setCopied] = useState(false);
    const promoLink = 'https://capitalstreetfx.com/register?promo=csfx1234';

    const handleCopy = () => {
        navigator.clipboard.writeText(promoLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <MainLayout>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                        <Link size={24} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">IB Promotion Link</h1>
                        <p className="text-slate-500">Your unique promotional links to attract and track new referrals.</p>
                    </div>
                </div>

                <div className="mb-8">
                    <label className="block text-sm font-semibold text-slate-900 mb-3">Primary Target Link</label>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input 
                            type="text" 
                            value={promoLink} 
                            readOnly 
                            className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none text-slate-700 font-mono text-sm"
                        />
                        <button 
                            onClick={handleCopy}
                            className={`flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors ${
                                copied 
                                ? 'bg-green-500 text-white' 
                                : 'bg-slate-900 text-white hover:bg-slate-800'
                            }`}
                        >
                            {copied ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                            {copied ? 'Copied!' : 'Copy Link'}
                        </button>
                    </div>
                    <p className="text-sm text-slate-500 mt-2">
                        Share this link across your network. Anyone who registers within 30 days of clicking it will be credited to you.
                    </p>
                </div>

                <hr className="border-slate-100 my-8" />

                <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">Generate Campaign Link</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Campaign Name</label>
                            <input 
                                type="text" 
                                placeholder="e.g., Summer_Webinar" 
                                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Target Landing Page</label>
                            <select className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900">
                                <option>Home Page</option>
                                <option>Registration Form</option>
                                <option>Promotions Page</option>
                            </select>
                        </div>
                    </div>
                    <button className="mt-4 px-6 py-2 bg-slate-100 text-slate-900 font-medium rounded-lg hover:bg-slate-200 transition-colors">
                        Generate Trackable Link
                    </button>
                </div>
            </div>
        </MainLayout>
    );
};

export default IBPromotionLink;

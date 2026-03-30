import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Copy, CheckCircle2, QrCode } from 'lucide-react';

const MyIBLink = () => {
    const [copied, setCopied] = useState(false);
    const myLink = 'https://capitalstreetfx.com/ib/user1234';

    const handleCopy = () => {
        navigator.clipboard.writeText(myLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <MainLayout>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                        <QrCode size={24} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">My Institutional IB Link</h1>
                        <p className="text-slate-500">Your direct partner link for institutional referrals.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <label className="block text-sm font-semibold text-slate-900 mb-3">Your Master Link</label>
                        <div className="flex flex-col gap-4">
                            <input 
                                type="text" 
                                value={myLink} 
                                readOnly 
                                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none text-slate-700 font-mono text-sm"
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
                                {copied ? 'Copied to Clipboard' : 'Copy Master Link'}
                            </button>
                        </div>

                        <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-100 text-sm text-slate-600">
                            <strong>Note:</strong> The master IB link is used primarily to refer sub-IBs under your network. They will be placed under your multi-tier hierarchy.
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50">
                        <div className="w-48 h-48 bg-white border border-slate-200 rounded-xl flex items-center justify-center p-4">
                            {/* Placeholder for QR Code */}
                            <QrCode size={120} className="text-slate-300" />
                        </div>
                        <p className="mt-4 text-sm font-medium text-slate-600">Scan to register</p>
                        <button className="mt-3 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                            Download QR Code
                        </button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default MyIBLink;

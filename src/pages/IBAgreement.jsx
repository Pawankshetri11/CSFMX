import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { FileText, Download, CheckCircle, Clock } from 'lucide-react';

const IBAgreement = () => {
    return (
        <MainLayout>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                        <FileText size={24} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">IB Agreement</h1>
                        <p className="text-slate-500">Review your current partner agreement and compliance details.</p>
                    </div>
                </div>

                <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 mb-8">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                            Standard IB Agreement v2.4
                        </h2>
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                            <CheckCircle size={16} /> Active
                        </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="bg-white p-4 rounded-xl border border-slate-100">
                            <span className="block text-slate-500 mb-1">Signed Date</span>
                            <span className="font-semibold text-slate-900">October 15, 2023</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100">
                            <span className="block text-slate-500 mb-1">Current Tier</span>
                            <span className="font-semibold text-slate-900">Pro Partner</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100">
                            <span className="block text-slate-500 mb-1">Rebate Type</span>
                            <span className="font-semibold text-slate-900">Volume Based</span>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-100">
                            <span className="block text-slate-500 mb-1">Validity</span>
                            <span className="font-semibold text-slate-900 flex items-center gap-1">
                                <Clock size={14} className="text-amber-500" /> Auto-renews Annually
                            </span>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors">
                            <Download size={18} /> Download Signed PDF
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-2">Agreement History</h3>
                    <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-6">
                        <div className="relative">
                            <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-slate-900" />
                            <div className="text-sm font-semibold text-slate-900 mb-1">Signed Standard IB Agreement v2.4</div>
                            <div className="text-xs text-slate-500">October 15, 2023 - Digital Signature via DocuSign</div>
                        </div>
                        <div className="relative opacity-70">
                            <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-slate-200" />
                            <div className="text-sm font-semibold text-slate-500 mb-1">Signed Standard IB Agreement v1.0</div>
                            <div className="text-xs text-slate-400">January 10, 2022 - Replaced by v2.4</div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default IBAgreement;

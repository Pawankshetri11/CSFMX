import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { ShieldCheck, UploadCloud, FileWarning } from 'lucide-react';

const ExtendedDueDiligence = () => {
    return (
        <MainLayout>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Extended Due Diligence</h1>
                        <p className="text-slate-500">Provide necessary compliance documentation to unlock partner features.</p>
                    </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 flex items-start gap-4">
                    <FileWarning className="text-amber-500 shrink-0 mt-0.5" size={24} />
                    <div>
                        <h4 className="font-semibold text-amber-800">Action Required</h4>
                        <p className="text-amber-700 text-sm mt-1 leading-relaxed">
                            To upgrade your IB partner tier, you must submit extended KYC/AML documents. 
                            Failure to provide these may restrict your maximum weekly withdrawals.
                        </p>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* Document Upload Card */}
                    <div className="border border-slate-200 rounded-xl p-6 transition-shadow hover:shadow-sm">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                            <div>
                                <h3 className="font-bold text-slate-900">Proof of Address (Utility Bill or Bank Statement)</h3>
                                <p className="text-sm text-slate-500 mt-1">Must be dated within the last 3 months.</p>
                            </div>
                            <span className="self-start md:self-auto px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                                Pending
                            </span>
                        </div>
                        <div className="border-2 border-dashed border-slate-200 rounded-xl bg-slate-50 flex flex-col items-center justify-center py-6 px-4">
                            <UploadCloud size={32} className="text-slate-400 mb-3" />
                            <p className="text-sm font-medium text-slate-700">Drag & drop file here or <span className="text-blue-600 cursor-pointer">browse</span></p>
                            <p className="text-xs text-slate-400 mt-1">Supported formats: JPG, PNG, PDF (Max 5MB)</p>
                        </div>
                    </div>

                    {/* Document Upload Card */}
                    <div className="border border-slate-200 rounded-xl p-6 transition-shadow hover:shadow-sm">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                            <div>
                                <h3 className="font-bold text-slate-900">Source of Wealth Declaration</h3>
                                <p className="text-sm text-slate-500 mt-1">Download, sign, and upload the official declaration form.</p>
                            </div>
                            <span className="self-start md:self-auto px-3 py-1 bg-slate-100 text-slate-500 text-xs font-semibold rounded-full">
                                Missing
                            </span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
                                Download Template
                            </button>
                            <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800">
                                Upload Signed Copy
                            </button>
                        </div>
                    </div>

                    {/* Verified Card */}
                    <div className="border border-slate-200 rounded-xl p-6 opacity-60 bg-slate-50">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-bold text-slate-900 line-through">National Identity Card / Passport</h3>
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                Verified
                            </span>
                        </div>
                        <p className="text-sm text-slate-500">Document approved on Jan 12, 2024.</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ExtendedDueDiligence;

import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Landmark, ArrowUpRight, ShieldCheck, AlertCircle, Info } from 'lucide-react';

const WithdrawFunds = () => {
    return (
        <MainLayout>
            <div className="max-w-4xl mx-auto space-y-8 animate-fade pb-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Withdraw Funds</h1>
                        <p className="text-slate-500 text-xs font-bold mt-1 uppercase tracking-widest">Process your funds securely to your bank account</p>
                    </div>
                </div>

                <form className="space-y-6">
                    {/* Basic Information Section */}
                    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
                            <Info size={16} className="text-[#00ff00]" />
                            <h2 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Basic Information</h2>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormGroup label="Account Id" type="select" options={["--Select Account Id--", "csfx25112156", "demo9982341"]} />
                            <FormGroup label="Amount" placeholder="Enter amount" type="number" />
                            <FormGroup label="Withdraw Method" type="select" options={["--Select Method--", "Bank Transfer", "Crypto", "Wallet"]} />
                        </div>
                    </div>

                    {/* Bank Details Section */}
                    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
                            <Landmark size={16} className="text-[#00ff00]" />
                            <h2 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Bank Details</h2>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <FormGroup label="Bank Name" placeholder="Enter bank name" />
                            <FormGroup label="Bank Address" placeholder="Enter bank address" />
                            <FormGroup label="Branch Name" placeholder="Enter branch name" />
                            <FormGroup label="Bank Contact Number" placeholder="Enter contact number" />
                            <FormGroup label="Bank Account Number" placeholder="Enter account number" />
                            <FormGroup label="Iban Number" placeholder="Enter IBAN" />
                            <FormGroup label="Routing Number" placeholder="Enter routing number" />
                            <FormGroup label="Bank SWIFT" placeholder="Enter SWIFT code" />
                            <FormGroup label="IFSC Code" placeholder="Enter IFSC" />
                        </div>
                    </div>

                    {/* Beneficiary Details Section */}
                    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
                            <ShieldCheck size={16} className="text-[#00ff00]" />
                            <h2 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Beneficiary Details</h2>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormGroup label="Beneficiary Name" placeholder="Enter beneficiary name" />
                            <FormGroup label="Beneficiary Address" placeholder="Enter beneficiary address" />
                            <FormGroup label="Beneficiary Contact Number" placeholder="Enter beneficiary contact" />
                        </div>
                    </div>

                    {/* Promotion Details Section */}
                    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 bg-slate-50 border-b border-slate-100 flex items-center gap-2">
                            <AlertCircle size={16} className="text-[#00ff00]" />
                            <h2 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Promotion Details</h2>
                        </div>
                        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormGroup label="Promotion Applied in the Account" type="select" options={["Select", "None", "50% Bonus", "100% Bonus"]} />
                            <FormGroup label="Required Trading Volume Reached" type="select" options={["Select", "Yes", "No"]} />
                            <FormGroup label="Date of Expiry of The Promotion" type="date" />
                            <FormGroup label="Reason For Requesting Promotion Cancellation" placeholder="Enter reason" />
                        </div>
                    </div>

                    {/* Remarks Section */}
                    <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6">
                        <FormGroup label="Remarks" placeholder="Enter remarks" type="textarea" />

                        <div className="mt-6 space-y-4">
                            <Checkbox label="I Agree Capital Street FX does NOT process third-party withdrawals." id="check-1" />
                            <Checkbox label="I Agree With Capital Street FX Cancellation/Termination/Closure Policy." id="check-2" />
                            <Checkbox label="I Accept Capital Street FX Transaction/Payment Gateway/PSP/Banking Convention changes." id="check-3" />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-4">
                        <button
                            type="button"
                            className="flex items-center gap-2 px-12 py-4 bg-[#00ff00] text-black font-black text-xs uppercase rounded-lg shadow-lg shadow-[#00ff00]/10 hover:shadow-[#00ff00]/20 hover:scale-[1.02] transition-all active:scale-95"
                        >
                            <ArrowUpRight size={18} />
                            Proceed to Withdrawal
                        </button>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};

const FormGroup = ({ label, placeholder, type = "text", options = [] }) => (
    <div className="space-y-1.5">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</label>
        {type === "select" ? (
            <select className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2.5 text-xs font-bold text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#00ff00] transition-all cursor-pointer">
                {options.map((opt, i) => <option key={i} value={opt}>{opt}</option>)}
            </select>
        ) : type === "textarea" ? (
            <textarea
                rows="3"
                placeholder={placeholder}
                className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2.5 text-xs font-bold text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#00ff00] transition-all"
            />
        ) : (
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-2.5 text-xs font-bold text-slate-700 placeholder:text-slate-300 focus:outline-none focus:ring-1 focus:ring-[#00ff00] transition-all"
            />
        )}
    </div>
);

const Checkbox = ({ label, id }) => (
    <div className="flex items-start gap-3 group cursor-pointer">
        <div className="relative flex items-center h-5">
            <input
                id={id}
                type="checkbox"
                className="w-4 h-4 border-slate-300 rounded text-[#00ff00] focus:ring-[#00ff00] cursor-pointer"
            />
        </div>
        <label htmlFor={id} className="text-[10px] font-bold text-slate-500 uppercase leading-normal tracking-wide cursor-pointer group-hover:text-slate-700 transition-colors">
            {label}
        </label>
    </div>
);

export default WithdrawFunds;

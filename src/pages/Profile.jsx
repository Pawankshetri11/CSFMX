import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import {
    User,
    Settings,
    Key,
    Upload,
    ClipboardCheck,
    ShieldCheck,
    Mail,
    Phone,
    MapPin,
    CheckCircle2,
    AlertCircle,
    Camera
} from 'lucide-react';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('my-profile');

    const tabs = [
        { id: 'my-profile', label: 'My Profile', icon: User },
        { id: 'edit-profile', label: 'Edit Profile', icon: Settings },
        { id: 'update-profile', label: 'Update Profile', icon: User },
        { id: 'reset-password', label: 'Reset Password', icon: Key },
        { id: 'upload-documents', label: 'Upload Documents', icon: Upload },
        { id: 'onboarding', label: 'Onboarding Questionnaire', icon: ClipboardCheck },
        { id: 'due-diligence', label: 'Extended Due Diligence', icon: ShieldCheck },
    ];

    const profileData = {
        firstName: 'Pawan',
        surname: 'Kshetri',
        email: 'pkr994223@gmail.com',
        phone: '6395068415',
        phoneVerified: false,
        country: 'Not Specified',
        city: 'Not Specified',
        address: 'Not Specified',
        state: 'Not Specified',
        zipCode: 'Not Specified',
        idNumber: 'Not Specified'
    };

    return (
        <MainLayout>
            <div className="space-y-6 animate-fade">
                {/* Profile Header Card */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="h-32 bg-gradient-to-r from-[#00ff00]/20 to-[#ff00ff]/10 relative">
                        <div className="absolute -bottom-12 left-8 flex items-end gap-6">
                            <div className="relative group">
                                <div className="w-24 h-24 rounded-2xl bg-white p-1 shadow-xl border border-slate-100 overflow-hidden">
                                    <div className="w-full h-full rounded-xl bg-slate-100 flex items-center justify-center text-slate-400">
                                        <User className="w-10 h-10" />
                                    </div>
                                </div>
                                <button className="absolute bottom-1 right-1 p-2 bg-[#00ff00] text-black rounded-lg shadow-lg hover:scale-105 transition-transform">
                                    <Camera className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="mb-2">
                                <h1 className="text-2xl font-bold text-slate-900">{profileData.firstName} {profileData.surname}</h1>
                                <p className="text-slate-500 text-sm flex items-center gap-1">
                                    <Mail className="w-3.5 h-3.5" /> {profileData.email}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-16 pb-6 px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex gap-4">
                            <div className="px-4 py-2 bg-[#00ff00]/10 rounded-xl border border-[#00ff00]/20">
                                <p className="text-[10px] font-bold text-[#00ff00] uppercase tracking-wider">Account Type</p>
                                <p className="text-sm font-bold text-slate-700">Individual</p>
                            </div>
                            <div className="px-4 py-2 bg-blue-50 rounded-xl border border-blue-100">
                                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Verification Status</p>
                                <p className="text-sm font-bold text-slate-700">Pending</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-2 overflow-x-auto custom-scrollbar">
                    <div className="flex gap-1 min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all
                                    ${activeTab === tab.id
                                        ? 'bg-[#00ff00] text-black shadow-md'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                            >
                                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-black' : 'text-slate-400'}`} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <User className="w-5 h-5 text-[#00ff00]" />
                                Personal Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InfoGroup label="First Name" value={profileData.firstName} />
                                <InfoGroup label="Surname" value={profileData.surname} />
                                <InfoGroup label="Email Address" value={profileData.email} icon={<CheckCircle2 className="w-4 h-4 text-[#00ff00]" />} />
                                <div className="space-y-1">
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Telephone Number</p>
                                    <div className="flex items-center gap-3">
                                        <p className="text-sm font-semibold text-slate-700">{profileData.phone}</p>
                                        {!profileData.phoneVerified && (
                                            <button className="px-3 py-1 bg-[#00ff00]/10 text-[#00ff00] text-[10px] font-bold uppercase rounded-lg border border-[#00ff00]/20 hover:bg-[#00ff00] hover:text-black transition-all">
                                                Verify
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <InfoGroup label="ID/Passport Number" value={profileData.idNumber} />
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-[#00ff00]" />
                                Address Details
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InfoGroup label="Country" value={profileData.country} />
                                <InfoGroup label="City" value={profileData.city} />
                                <InfoGroup label="State / Province" value={profileData.state} />
                                <InfoGroup label="Postal / Zip Code" value={profileData.zipCode} />
                                <div className="md:col-span-2">
                                    <InfoGroup label="Residence Address" value={profileData.address} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-slate-900 rounded-2xl p-6 text-white relative overflow-hidden">
                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-[#00ff00]/10 rounded-full blur-3xl"></div>
                            <h3 className="text-lg font-bold mb-2">Security Status</h3>
                            <p className="text-slate-400 text-sm mb-6">Complete your profile to unlock all features.</p>

                            <div className="space-y-4">
                                <SecurityItem label="Email Verified" status={true} />
                                <SecurityItem label="Phone Verified" status={false} />
                                <SecurityItem label="Documents Uploaded" status={false} />
                                <SecurityItem label="2FA Enabled" status={false} />
                            </div>

                            <button className="w-full mt-8 py-3 bg-[#00ff00] text-black font-bold rounded-xl hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                                <ShieldCheck className="w-4 h-4" />
                                Enhanced Security
                            </button>
                        </div>

                        <div className="bg-white rounded-2xl border border-slate-100 p-6">
                            <h3 className="font-bold text-slate-900 mb-4">Quick Links</h3>
                            <div className="space-y-3">
                                <QuickLink label="Update Documents" />
                                <QuickLink label="Change Password" />
                                <QuickLink label="Support Center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

const InfoGroup = ({ label, value, icon }) => (
    <div className="space-y-1">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{label}</p>
        <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-slate-700">{value}</p>
            {icon}
        </div>
    </div>
);

const SecurityItem = ({ label, status }) => (
    <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
        <span className="text-sm text-slate-300">{label}</span>
        {status ? (
            <CheckCircle2 className="w-4 h-4 text-[#00ff00]" />
        ) : (
            <AlertCircle className="w-4 h-4 text-slate-500" />
        )}
    </div>
);

const QuickLink = ({ label }) => (
    <button className="w-full text-left px-4 py-3 rounded-xl border border-slate-50 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-200 transition-all flex items-center justify-between">
        {label}
        <div className="w-5 h-5 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-white transition-all">→</div>
    </button>
);

export default Profile;

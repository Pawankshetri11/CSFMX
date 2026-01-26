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
    Camera,
    Save,
    X
} from 'lucide-react';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('my-profile');
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
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
    });

    const tabs = [
        { id: 'my-profile', label: 'My Profile', icon: User },
        { id: 'edit-profile', label: 'Edit Profile', icon: Settings },
        { id: 'reset-password', label: 'Reset Password', icon: Key },
        { id: 'upload-documents', label: 'Upload Documents', icon: Upload },
        { id: 'onboarding', label: 'Onboarding Questionnaire', icon: ClipboardCheck },
        { id: 'due-diligence', label: 'Extended Due Diligence', icon: ShieldCheck },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        setIsEditing(false);
        // Add save logic here if needed
    };

    return (
        <MainLayout>
            <div className="space-y-6 animate-fade">
                {/* Profile Header Card */}
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                    <div className="h-32 bg-gradient-to-r from-[#00ff00]/10 via-[#ff00ff]/5 to-[#00ff00]/10 relative">
                        <div className="absolute -bottom-10 left-8 flex items-end gap-6">
                            <div className="relative group">
                                <div className="w-24 h-24 rounded-lg bg-white p-1 shadow-md border border-slate-200 overflow-hidden">
                                    <div className="w-full h-full rounded bg-slate-50 flex items-center justify-center text-slate-300">
                                        <User className="w-10 h-10" />
                                    </div>
                                </div>
                                <button className="absolute bottom-1 right-1 p-2 bg-[#ff00ff] text-white rounded shadow-lg hover:scale-105 transition-transform">
                                    <Camera className="w-3.5 h-3.5" />
                                </button>
                            </div>
                            <div className="mb-2">
                                <h1 className="text-xl font-bold text-slate-900 tracking-tight">{formData.firstName} {formData.surname}</h1>
                                <p className="text-slate-500 text-xs flex items-center gap-1 font-medium">
                                    <Mail className="w-3 h-3 text-[#ff00ff]" /> {formData.email}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-14 pb-6 px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex gap-4">
                            <div className="px-3 py-1.5 bg-slate-50 rounded border border-slate-100">
                                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Account Type</p>
                                <p className="text-xs font-bold text-slate-700">Individual</p>
                            </div>
                            <div className="px-3 py-1.5 bg-[#ff00ff]/5 rounded border border-[#ff00ff]/10">
                                <p className="text-[9px] font-bold text-[#ff00ff] uppercase tracking-widest leading-none mb-1">Verification Status</p>
                                <p className="text-xs font-bold text-[#ff00ff]">Incomplete</p>
                            </div>
                        </div>

                        {!isEditing ? (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="px-6 py-2 bg-[#00ff00] text-black font-bold text-xs rounded hover:shadow-md transition-all active:scale-95 flex items-center gap-2"
                            >
                                <Settings className="w-3.5 h-3.5" /> EDIT PROFILE
                            </button>
                        ) : (
                            <div className="flex gap-2">
                                <button
                                    onClick={handleSave}
                                    className="px-6 py-2 bg-[#00ff00] text-black font-bold text-xs rounded hover:shadow-md transition-all active:scale-95 flex items-center gap-2"
                                >
                                    <Save className="w-3.5 h-3.5" /> SAVE CHANGES
                                </button>
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="px-6 py-2 bg-slate-100 text-slate-600 font-bold text-xs rounded hover:bg-slate-200 transition-all active:scale-95 flex items-center gap-2"
                                >
                                    <X className="w-3.5 h-3.5" /> CANCEL
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Tabs Navigation */}
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-1.5 overflow-x-auto custom-scrollbar">
                    <div className="flex gap-1 min-w-max">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2.5 rounded text-[11px] font-bold uppercase tracking-wider transition-all
                                    ${activeTab === tab.id
                                        ? 'bg-slate-900 text-white shadow-sm'
                                        : 'text-slate-400 hover:text-slate-900'}`}
                            >
                                <tab.icon className={`w-3.5 h-3.5 ${activeTab === tab.id ? 'text-[#00ff00]' : 'text-slate-300'}`} />
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                            <h2 className="text-xs font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 bg-[#00ff00]"></div>
                                Personal Information
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <EditableField
                                    label="First Name"
                                    name="firstName"
                                    value={formData.firstName}
                                    isEditing={isEditing}
                                    onChange={handleInputChange}
                                />
                                <EditableField
                                    label="Surname"
                                    name="surname"
                                    value={formData.surname}
                                    isEditing={isEditing}
                                    onChange={handleInputChange}
                                />
                                <EditableField
                                    label="Email Address"
                                    name="email"
                                    value={formData.email}
                                    isEditing={isEditing}
                                    onChange={handleInputChange}
                                    icon={<CheckCircle2 className="w-3.5 h-3.5 text-[#00ff00]" />}
                                />
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Telephone Number</p>
                                    {isEditing ? (
                                        <input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-2 text-sm font-bold text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#00ff00]"
                                        />
                                    ) : (
                                        <div className="flex items-center gap-3">
                                            <p className="text-sm font-bold text-slate-800">{formData.phone}</p>
                                            <button className="px-2 py-0.5 bg-[#ff00ff]/10 text-[#ff00ff] text-[9px] font-black uppercase rounded border border-[#ff00ff]/20 hover:bg-[#ff00ff] hover:text-white transition-all">
                                                Verify
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                            <h2 className="text-xs font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-widest">
                                <div className="w-1.5 h-1.5 bg-[#ff00ff]"></div>
                                Address Details
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <EditableField
                                    label="Country"
                                    name="country"
                                    value={formData.country}
                                    isEditing={isEditing}
                                    onChange={handleInputChange}
                                />
                                <EditableField
                                    label="City"
                                    name="city"
                                    value={formData.city}
                                    isEditing={isEditing}
                                    onChange={handleInputChange}
                                />
                                <EditableField
                                    label="State / Province"
                                    name="state"
                                    value={formData.state}
                                    isEditing={isEditing}
                                    onChange={handleInputChange}
                                />
                                <EditableField
                                    label="Postal / Zip Code"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    isEditing={isEditing}
                                    onChange={handleInputChange}
                                />
                                <div className="md:col-span-2">
                                    <EditableField
                                        label="Residence Address"
                                        name="address"
                                        value={formData.address}
                                        isEditing={isEditing}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-[#111] rounded-lg p-6 text-white relative overflow-hidden border border-white/5">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#ff00ff]/10 rounded-full blur-2xl"></div>
                            <h3 className="text-xs font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                                <ShieldCheck className="w-3.5 h-3.5 text-[#ff00ff]" />
                                Security Status
                            </h3>
                            <p className="text-slate-500 text-[11px] mb-6 font-bold leading-relaxed">Protect your account with advanced security features.</p>

                            <div className="space-y-2">
                                <SecurityItem label="Email Verified" status={true} />
                                <SecurityItem label="Phone Verified" status={false} />
                                <SecurityItem label="KYC Document" status={false} />
                                <SecurityItem label="2FA Device" status={false} />
                            </div>

                            <button className="w-full mt-6 py-2.5 bg-[#ff00ff] text-white text-xs font-black uppercase rounded shadow-lg shadow-[#ff00ff]/20 hover:scale-[1.02] transition-transform active:scale-95">
                                Enable 2FA Security
                            </button>
                        </div>

                        <div className="bg-white rounded-lg border border-slate-200 p-6">
                            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-4">Account Help</h3>
                            <div className="space-y-2">
                                <QuickLink label="Identity Documents" />
                                <QuickLink label="Password Security" />
                                <QuickLink label="Contact Support" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

const EditableField = ({ label, name, value, isEditing, onChange, icon }) => (
    <div className="space-y-1">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{label}</p>
        <div className="flex items-center gap-2 min-h-[32px]">
            {isEditing ? (
                <input
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded px-3 py-1.5 text-sm font-bold text-slate-700 focus:outline-none focus:ring-1 focus:ring-[#00ff00]"
                />
            ) : (
                <>
                    <p className="text-sm font-bold text-slate-800 tracking-tight">{value}</p>
                    {icon}
                </>
            )}
        </div>
    </div>
);

const SecurityItem = ({ label, status }) => (
    <div className="flex items-center justify-between bg-white/5 p-2.5 rounded border border-white/10">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{label}</span>
        {status ? (
            <CheckCircle2 className="w-3.5 h-3.5 text-[#00ff00]" />
        ) : (
            <AlertCircle className="w-3.5 h-3.5 text-slate-600" />
        )}
    </div>
);

const QuickLink = ({ label }) => (
    <button className="w-full flex items-center justify-between px-4 py-2 bg-slate-50 border border-slate-100 rounded text-[10px] font-black uppercase tracking-widest text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-all">
        {label}
        <span className="text-slate-300">→</span>
    </button>
);

export default Profile;

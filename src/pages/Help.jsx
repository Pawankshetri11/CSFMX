import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Help = () => {
    return (
        <MainLayout>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-900 mb-4">Help & Support</h1>
                <p className="text-slate-500">Contact our support team or browse the FAQ.</p>
            </div>
        </MainLayout>
    );
};

export default Help;

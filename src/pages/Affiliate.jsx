import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Affiliate = () => {
    return (
        <MainLayout>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-900 mb-4">IB/Affiliate</h1>
                <p className="text-slate-500">View and manage your affiliate partnerships.</p>
            </div>
        </MainLayout>
    );
};

export default Affiliate;

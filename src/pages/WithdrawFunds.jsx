import React from 'react';
import MainLayout from '../layouts/MainLayout';

const WithdrawFunds = () => {
    return (
        <MainLayout>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-900 mb-4">Withdraw Funds</h1>
                <p className="text-slate-500">Submit your withdrawal requests here.</p>
            </div>
        </MainLayout>
    );
};

export default WithdrawFunds;

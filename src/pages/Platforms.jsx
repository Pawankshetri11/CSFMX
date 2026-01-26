import React from 'react';
import MainLayout from '../layouts/MainLayout';

const Platforms = () => {
    return (
        <MainLayout>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h1 className="text-2xl font-bold text-slate-900 mb-4">Platforms</h1>
                <p className="text-slate-500">Download trading platforms for Desktop, Mobile, and Web.</p>
            </div>
        </MainLayout>
    );
};

export default Platforms;

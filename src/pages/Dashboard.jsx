import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import AccountCard from '../components/AccountCard';
import StatsGrid from '../components/StatsGrid';
import PerformanceChart from '../components/PerformanceChart';
import MarketActivity from '../components/MarketActivity';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('live');
    const [accountData, setAccountData] = useState({
        id: "csfx25112156",
        balance: "$0.00",
        equity: "$0.00",
        margin: "$0.00",
        growth: [20, 35, 25, 40, 30, 45, 35],
        activity: [
            { type: 'Deposit', amount: '+$500.00', date: 'Just Now', color: '#00ff00' },
            { type: 'Withdraw', amount: '-$120.00', date: '2 days ago', color: '#ff00ff' }
        ]
    });

    const accounts = {
        live: {
            id: "csfx25112156",
            balance: "$0.00",
            equity: "$0.00",
            margin: "$0.00",
            growth: [20, 35, 25, 40, 30, 45, 35],
            activity: [
                { type: 'Deposit', amount: '+$500.00', date: 'Just Now', color: '#00ff00' },
                { type: 'Withdraw', amount: '-$120.00', date: '2 days ago', color: '#ff00ff' }
            ]
        },
        demo: {
            id: "demo9982341",
            balance: "$10,000.00",
            equity: "$10,000.00",
            margin: "$0.00",
            growth: [60, 70, 65, 80, 75, 90, 85],
            activity: []
        }
    };

    const switchAccount = (type) => {
        setActiveTab(type);
        setAccountData(accounts[type]);
    };

    return (
        <MainLayout>
            <AccountCard
                activeTab={activeTab}
                switchAccount={switchAccount}
                accountData={accountData}
            />

            <StatsGrid
                equity={accountData.equity}
                margin={accountData.margin}
            />

            <PerformanceChart
                growth={accountData.growth}
            />

            <MarketActivity
                activityData={accountData.activity}
                isLive={activeTab === 'live'}
            />
        </MainLayout>
    );
};

export default Dashboard;

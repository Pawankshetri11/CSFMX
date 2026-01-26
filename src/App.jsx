import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import LoginHistory from './pages/LoginHistory';
import ManageAccounts from './pages/ManageAccounts';
import DepositFunds from './pages/DepositFunds';
import WithdrawFunds from './pages/WithdrawFunds';
import Affiliate from './pages/Affiliate';
import PaymentHistory from './pages/PaymentHistory';
import IBDashboard from './pages/IBDashboard';
import Platforms from './pages/Platforms';
import Help from './pages/Help';
import Promotions from './pages/Promotions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login-history" element={<LoginHistory />} />
        <Route path="/accounts" element={<ManageAccounts />} />
        <Route path="/deposit" element={<DepositFunds />} />
        <Route path="/withdraw" element={<WithdrawFunds />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/ib-dashboard" element={<IBDashboard />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/help" element={<Help />} />
        <Route path="/promotions" element={<Promotions />} />
      </Routes>
    </Router>
  );
}

export default App;

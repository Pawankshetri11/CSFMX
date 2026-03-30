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
import Dashboard2 from './pages/Dashboard2';
import Referrals from './pages/Referrals';
import ReferralsInfo from './pages/ReferralsInfo';
import PromotionalBanner from './pages/PromotionalBanner';
import IBPromotionLink from './pages/IBPromotionLink';
import MyIBLink from './pages/MyIBLink';
import RebateReport from './pages/RebateReport';
import IBAgreement from './pages/IBAgreement';
import ExtendedDueDiligence from './pages/ExtendedDueDiligence';
import RequestPromotion from './pages/RequestPromotion';
import PromotionLotReport from './pages/PromotionLotReport';
import PromotionCancellation from './pages/PromotionCancellation';
import BonusHistory from './pages/BonusHistory';

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
        <Route path="/dashboard2" element={<Dashboard2 />} />
        <Route path="/referrals" element={<Referrals />} />
        <Route path="/referrals-info" element={<ReferralsInfo />} />
        <Route path="/promotional-banner" element={<PromotionalBanner />} />
        <Route path="/ib-promotion-link" element={<IBPromotionLink />} />
        <Route path="/my-ib-link" element={<MyIBLink />} />
        <Route path="/rebate-report" element={<RebateReport />} />
        <Route path="/ib-agreement" element={<IBAgreement />} />
        <Route path="/extended-due-diligence" element={<ExtendedDueDiligence />} />
        <Route path="/request-promotion" element={<RequestPromotion />} />
        <Route path="/promotion-lot-report" element={<PromotionLotReport />} />
        <Route path="/promotion-cancellation" element={<PromotionCancellation />} />
        <Route path="/bonus-history" element={<BonusHistory />} />
      </Routes>
    </Router>
  );
}

export default App;

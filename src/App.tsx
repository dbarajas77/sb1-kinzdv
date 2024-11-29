import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import ProfilePage from './pages/profile/ProfilePage';
import NotificationsPage from './pages/account/NotificationsPage';
import BillingPage from './pages/account/BillingPage';
import SettingsPage from './pages/account/SettingsPage';
import HelpSupportPage from './pages/account/HelpSupportPage';
import RdaSoftwarePage from './pages/RdaSoftwarePage';
import ComponentsPage from './pages/rda/ComponentsPage';
import UserManagementPage from './pages/rda/UserManagementPage';
import CategoriesPage from './pages/rda/CategoriesPage';
import CommentsPage from './pages/rda/CommentsPage';
import ClientDetailsPage from './pages/rda/ClientDetailsPage';
import CalculationsPage from './pages/rda/CalculationsPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/help" element={<HelpSupportPage />} />
            <Route path="/rda-software" element={<RdaSoftwarePage />} />
            <Route path="/rda-software/components" element={<ComponentsPage />} />
            <Route path="/rda-software/users" element={<UserManagementPage />} />
            <Route path="/rda-software/categories" element={<CategoriesPage />} />
            <Route path="/rda-software/comments" element={<CommentsPage />} />
            <Route path="/rda-software/client/:accountNumber" element={<ClientDetailsPage />} />
            <Route path="/rda-software/calculations" element={<CalculationsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
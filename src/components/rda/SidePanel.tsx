import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  FileText,
  Component,
  User,
  Users,
  Grid,
  MessageSquare,
  Calculator,
  Settings,
  FileBarChart,
  BarChart2,
  DollarSign,
  TrendingUp,
  FileSearch,
  FileSpreadsheet,
  ChevronRight
} from 'lucide-react';

const MainNavigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const mainNavItems = [
    { icon: <LayoutDashboard className="h-5 w-5" />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FileText className="h-5 w-5" />, label: 'Reports', path: '/reports' },
    { icon: <Component className="h-5 w-5" />, label: 'Components', path: '/components' },
    { icon: <User className="h-5 w-5" />, label: 'Client', path: '/client' },
    { icon: <Users className="h-5 w-5" />, label: 'User Management', path: '/user-management' },
    { icon: <Grid className="h-5 w-5" />, label: 'Categories', path: '/categories' },
    { icon: <MessageSquare className="h-5 w-5" />, label: 'Comments', path: '/comments' }
  ];

  return (
    <div className="space-y-1">
      {mainNavItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
            isActive(item.path) ? 'bg-blue-700 text-white' : 'text-white/70 hover:bg-white/10'
          }`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

const CategoryNavigation = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const categories = [
    { label: 'Calculations', path: '/calculations' },
    { label: 'Adjustments', path: '/adjustments' },
    { label: 'Report Summary', path: '/report-summary' },
    { label: 'Component Summary', path: '/component-summary' },
    { label: 'Funding Status Report', path: '/funding-status' },
    { label: 'Cash Flow Projections', path: '/cash-flow' },
    { label: 'Annual expenditures', path: '/annual-expenditures' },
    { label: 'Graphs', path: '/graphs' },
    { label: 'Detail Report / Category', path: '/detail-report' },
    { label: 'Detail Index Report', path: '/detail-index' },
    { label: 'Owner Summary', path: '/owner-summary' }
  ];

  return (
    <div className="space-y-1">
      {categories.map((category) => (
        <Link
          key={category.path}
          to={category.path}
          className={`block px-4 py-2 text-sm transition-colors ${
            isActive(category.path) 
              ? 'bg-blue-700/50 text-white' 
              : 'text-white/70 hover:bg-white/10'
          }`}
        >
          {category.label}
        </Link>
      ))}
    </div>
  );
};

const NavigationPanel = () => {
  return (
    <div className="w-64 bg-blue-600 min-h-screen text-white">
      <div className="p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2 mb-8">
          <FileText className="h-8 w-8 text-white" />
          <span className="text-xl font-bold">Logo</span>
        </div>

        {/* Main Navigation */}
        <div className="mb-8">
          <MainNavigation />
        </div>

        {/* Category Navigation */}
        <div className="pt-6 border-t border-white/20">
          <h3 className="text-sm font-medium text-white/50 px-4 mb-4">Categories</h3>
          <CategoryNavigation />
        </div>
      </div>
    </div>
  );
};

export default NavigationPanel;
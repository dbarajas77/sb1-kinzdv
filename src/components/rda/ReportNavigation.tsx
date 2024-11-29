import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calculator,
  Settings,
  FileText,
  BarChart2,
  DollarSign,
  TrendingUp,
  FileSpreadsheet,
  Component,
  FileSearch,
  Users
} from 'lucide-react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const NavItem = ({ icon, label, path }: NavItemProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path)}
      className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-white/70 hover:text-white transition-colors"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

const ReportNavigation = () => {
  const navItems = [
    { icon: <FileText className="h-4 w-4" />, label: 'Categories', path: '/rda-software/categories' },
    { icon: <Calculator className="h-4 w-4" />, label: 'Calculations', path: '/rda-software/calculations' },
    { icon: <Settings className="h-4 w-4" />, label: 'Adjustments', path: '/rda-software/adjustments' },
    { icon: <FileText className="h-4 w-4" />, label: 'Report Summary', path: '/rda-software/report-summary' },
    { icon: <Component className="h-4 w-4" />, label: 'Component Summary', path: '/rda-software/component-summary' },
    { icon: <DollarSign className="h-4 w-4" />, label: 'Funding Status Report', path: '/rda-software/funding-status' },
    { icon: <TrendingUp className="h-4 w-4" />, label: 'Cash Flow Projections', path: '/rda-software/cash-flow' },
    { icon: <FileSpreadsheet className="h-4 w-4" />, label: 'Annual expenditures', path: '/rda-software/annual-expenditures' },
    { icon: <BarChart2 className="h-4 w-4" />, label: 'Graphs', path: '/rda-software/graphs' },
    { icon: <FileSearch className="h-4 w-4" />, label: 'Detail Report/Category', path: '/rda-software/detail-report' },
    { icon: <FileText className="h-4 w-4" />, label: 'Detail Index Report', path: '/rda-software/detail-index' },
    { icon: <Users className="h-4 w-4" />, label: 'Owner Summary', path: '/rda-software/owner-summary' }
  ];

  return (
    <div className="space-y-1">
      {navItems.map((item) => (
        <NavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default ReportNavigation;
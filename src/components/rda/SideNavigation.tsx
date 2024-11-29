import React from 'react';
import { 
  FileText,
  LayoutDashboard,
  Component,
  User,
  Users,
  Grid,
  MessageSquare
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const NavItem = ({ icon, label, path }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors ${
        isActive 
          ? 'text-white font-medium' 
          : 'text-white/70 hover:text-white'
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const SideNavigation = () => {
  const navItems = [
    { icon: <FileText className="h-5 w-5" />, label: 'Logo', path: '/' },
    { icon: <LayoutDashboard className="h-5 w-5" />, label: 'Dashboard', path: '/dashboard' },
    { icon: <FileText className="h-5 w-5" />, label: 'Reports', path: '/rda-software' },
    { icon: <Component className="h-5 w-5" />, label: 'Components', path: '/rda-software/components' },
    { icon: <User className="h-5 w-5" />, label: 'Client', path: '/rda-software/client' },
    { icon: <Users className="h-5 w-5" />, label: 'User Management', path: '/rda-software/users' },
    { icon: <Grid className="h-5 w-5" />, label: 'Categories', path: '/rda-software/categories' },
    { icon: <MessageSquare className="h-5 w-5" />, label: 'Comments', path: '/rda-software/comments' }
  ];

  return (
    <div className="space-y-1 mb-4">
      {navItems.map((item) => (
        <NavItem
          key={item.path}
          icon={item.icon}
          label={item.label}
          path={item.path}
        />
      ))}
    </div>
  );
};

export default SideNavigation;
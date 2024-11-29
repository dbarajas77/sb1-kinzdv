import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  label: string;
  Icon: React.ElementType;
  path: string;
  showChevron?: boolean;
}

const NavigationItem = ({ label, Icon, path, showChevron }: Props) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <Link
      to={path}
      className={`flex items-center justify-between w-full px-4 py-2 text-sm rounded-lg transition-colors ${
        isActive ? 'bg-white/10 text-white font-medium' : 'text-white/70 hover:bg-white/10 hover:text-white'
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" />
        <span>{label}</span>
      </div>
      {showChevron && <ChevronRight className="h-4 w-4" />}
    </Link>
  );
};

export default NavigationItem;
import React from 'react';
import NavigationItem from './NavigationItem';
import { reportNavConfig } from './navigationConfig';

const NavigationDropdown = () => {
  return (
    <div className="py-2 border-t border-white/10">
      <h3 className="px-4 py-2 text-sm font-medium text-white/50">Report Navigation</h3>
      <div className="mt-2">
        {reportNavConfig.map(([label, Icon, path]) => (
          <NavigationItem
            key={path}
            label={label}
            Icon={Icon}
            path={path as string}
            showChevron
          />
        ))}
      </div>
    </div>
  );
};

export default NavigationDropdown;
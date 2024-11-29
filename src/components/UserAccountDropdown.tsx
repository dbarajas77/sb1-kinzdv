import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, 
  Settings, 
  LogOut, 
  ChevronDown,
  UserCircle,
  Bell,
  CreditCard,
  HelpCircle
} from 'lucide-react';

const UserAccountDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Implement logout logic here
    console.log('Logging out...');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
          <User className="h-5 w-5 text-white" />
        </div>
        <span className="text-gray-700">John Doe</span>
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50"
        >
          <div className="px-4 py-2 border-b">
            <p className="text-sm font-medium text-gray-900">John Doe</p>
            <p className="text-sm text-gray-500">john.doe@example.com</p>
          </div>

          <div className="py-2">
            <Link
              to="/profile"
              className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <UserCircle className="h-5 w-5 text-gray-400" />
              <span>Your Profile</span>
            </Link>
            <Link
              to="/notifications"
              className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Bell className="h-5 w-5 text-gray-400" />
              <span>Notifications</span>
            </Link>
            <Link
              to="/billing"
              className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <CreditCard className="h-5 w-5 text-gray-400" />
              <span>Billing</span>
            </Link>
            <Link
              to="/settings"
              className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <Settings className="h-5 w-5 text-gray-400" />
              <span>Settings</span>
            </Link>
            <Link
              to="/help"
              className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <HelpCircle className="h-5 w-5 text-gray-400" />
              <span>Help & Support</span>
            </Link>
          </div>

          <div className="border-t py-2">
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left"
            >
              <LogOut className="h-5 w-5" />
              <span>Sign out</span>
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default UserAccountDropdown;
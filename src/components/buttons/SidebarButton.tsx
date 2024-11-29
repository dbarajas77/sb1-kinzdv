import React from 'react';
import { motion } from 'framer-motion';

interface SidebarButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const SidebarButton = ({ icon, label, onClick }: SidebarButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
    >
      {icon}
      <span>{label}</span>
    </motion.button>
  );
};

export default SidebarButton;
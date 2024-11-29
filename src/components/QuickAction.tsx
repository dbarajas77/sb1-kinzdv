import React from 'react';
import { motion } from 'framer-motion';

interface QuickActionProps {
  icon: React.ReactNode;
  label: string;
  colorClass: string;
  hoverColorClass: string;
}

const QuickAction = ({ icon, label, colorClass, hoverColorClass }: QuickActionProps) => {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className={`flex flex-col items-center space-y-2 p-4 ${colorClass} rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer min-w-[130px] ${hoverColorClass}`}
    >
      <div className="text-gray-700 transform transition-transform duration-300">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-700 whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
};

export default QuickAction;
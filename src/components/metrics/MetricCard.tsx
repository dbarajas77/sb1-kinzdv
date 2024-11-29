import React from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
}

const MetricCard = ({ title, children, className = '', accentColor = 'bg-blue-50' }: MetricCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`${accentColor} rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 ${className}`}
    >
      <h3 className="text-sm font-medium text-gray-600 mb-2">{title}</h3>
      {children}
    </motion.div>
  );
};

export default MetricCard;
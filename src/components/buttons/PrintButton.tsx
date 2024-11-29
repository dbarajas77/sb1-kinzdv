import React from 'react';
import { motion } from 'framer-motion';
import { Printer } from 'lucide-react';

interface PrintButtonProps {
  onPrint: () => void;
}

const PrintButton = ({ onPrint }: PrintButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      onClick={onPrint}
      className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
    >
      <Printer className="h-5 w-5" />
      <span>Print</span>
    </motion.button>
  );
};

export default PrintButton;
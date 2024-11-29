import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';
import type { Toast as ToastType } from '../types/toast';

interface ToastProps {
  toast: ToastType;
}

const toastVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const toastStyles = {
  success: 'bg-green-500',
  error: 'bg-red-500',
  info: 'bg-blue-500'
};

const ToastIcon = ({ type }: { type: ToastType['type'] }) => {
  switch (type) {
    case 'success':
      return <CheckCircle className="h-5 w-5" />;
    case 'error':
      return <AlertCircle className="h-5 w-5" />;
    case 'info':
      return <Info className="h-5 w-5" />;
  }
};

const Toast = ({ toast }: ToastProps) => {
  return (
    <motion.div
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg shadow-lg ${toastStyles[toast.type]} text-white`}
    >
      <ToastIcon type={toast.type} />
      <span>{toast.message}</span>
    </motion.div>
  );
};

export default Toast;
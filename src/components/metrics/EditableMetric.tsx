import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Pen } from 'lucide-react';

interface EditableMetricProps {
  value: string | number;
  onValueChange: (value: number) => void;
  prefix?: string;
  suffix?: string;
  className?: string;
  iconColor?: string;
}

const EditableMetric = ({ 
  value, 
  onValueChange, 
  prefix = '', 
  suffix = '', 
  className = '',
  iconColor = 'text-blue-500'
}: EditableMetricProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value.toString());

  useEffect(() => {
    setEditValue(value.toString());
  }, [value]);

  const handleBlur = () => {
    setIsEditing(false);
    const numValue = parseFloat(editValue.replace(/[^0-9.]/g, ''));
    if (!isNaN(numValue)) {
      onValueChange(numValue);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <div className="relative group">
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          className={`w-full bg-transparent outline-none border-b-2 border-blue-500 ${className}`}
          autoFocus
        />
      ) : (
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="cursor-pointer flex items-center group"
          onClick={() => setIsEditing(true)}
        >
          <span className={className}>
            {prefix}{value}{suffix}
          </span>
          <Pen className={`h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${iconColor}`} />
        </motion.div>
      )}
    </div>
  );
};

export default EditableMetric;
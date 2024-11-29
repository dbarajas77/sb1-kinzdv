import React from 'react';
import { Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const UploadArea = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="w-full h-32 border-2 border-dashed border-blue-400 group-hover:border-blue-500 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-all duration-300">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Upload className="h-6 w-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-300" />
          <p className="mt-2 text-sm text-blue-600 group-hover:text-blue-700 text-center px-4 transition-colors duration-300 font-medium">
            Drop Reserve Study PDF or click to upload
          </p>
        </div>
        <input
          type="file"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          accept=".pdf"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              console.log('File selected:', file);
            }
          }}
        />
      </div>
    </motion.div>
  );
};

export default UploadArea;
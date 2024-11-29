import React from 'react';
import { motion } from 'framer-motion';
import { X, Plus, Settings } from 'lucide-react';

interface CreateScenarioModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateScenarioModal = ({ isOpen, onClose }: CreateScenarioModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        <div className="p-4 border-b flex items-center justify-between bg-gray-50">
          <div className="flex items-center space-x-2">
            <Plus className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Create New Scenario</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-4rem)]">
          {/* Add your scenario creation form here */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Scenario Name
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter scenario name"
              />
            </div>
            
            {/* Add more form fields as needed */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateScenarioModal;
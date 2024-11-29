import React from 'react';
import { motion } from 'framer-motion';
import { X, LayoutDashboard, ExternalLink } from 'lucide-react';

interface RdaSoftwareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RdaSoftwareModal = ({ isOpen, onClose }: RdaSoftwareModalProps) => {
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
            <LayoutDashboard className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold">RDA Software</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-4rem)]">
          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Welcome to RDA Software</h3>
              <p className="text-blue-700">
                Access our comprehensive reserve study analysis tools and features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 border rounded-lg hover:shadow-md transition-all"
              >
                <h4 className="font-medium mb-2">Financial Analysis</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Detailed financial projections and analysis tools for your reserve study.
                </p>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                  <span>Open Analysis</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 border rounded-lg hover:shadow-md transition-all"
              >
                <h4 className="font-medium mb-2">Component Tracking</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Track and manage all your reserve components in one place.
                </p>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                  <span>View Components</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 border rounded-lg hover:shadow-md transition-all"
              >
                <h4 className="font-medium mb-2">Report Generation</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Generate comprehensive reports for your association.
                </p>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                  <span>Create Reports</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-4 border rounded-lg hover:shadow-md transition-all"
              >
                <h4 className="font-medium mb-2">Data Import/Export</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Import and export your reserve study data seamlessly.
                </p>
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700">
                  <span>Manage Data</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RdaSoftwareModal;
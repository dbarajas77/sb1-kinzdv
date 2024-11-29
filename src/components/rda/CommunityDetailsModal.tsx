import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Save } from 'lucide-react';

interface CommunityComponent {
  assetId: string;
  componentName: string;
  notes: string;
  placedInService: string;
  usefulLife: number;
  usefulLifeRange: string;
}

interface CommunityDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  component: CommunityComponent | null;
  onSave: (updatedComponent: CommunityComponent) => void;
}

const CommunityDetailsModal = ({ isOpen, onClose, component, onSave }: CommunityDetailsModalProps) => {
  const [formData, setFormData] = useState<CommunityComponent | null>(component);

  if (!isOpen || !component) return null;

  const handleChange = (field: keyof CommunityComponent, value: any) => {
    if (formData) {
      setFormData({
        ...formData,
        [field]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData) {
      onSave(formData);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg w-full max-w-2xl mx-4"
      >
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Edit Community Component</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Asset ID
              </label>
              <input
                type="text"
                value={formData?.assetId || ''}
                readOnly
                className="w-full p-2 border rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Component Name
              </label>
              <input
                type="text"
                value={formData?.componentName || ''}
                readOnly
                className="w-full p-2 border rounded-lg bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Placed In Service
              </label>
              <input
                type="date"
                value={formData?.placedInService || ''}
                onChange={(e) => handleChange('placedInService', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Useful Life
              </label>
              <input
                type="number"
                value={formData?.usefulLife || 0}
                onChange={(e) => handleChange('usefulLife', parseInt(e.target.value))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Useful Life Range
              </label>
              <input
                type="text"
                value={formData?.usefulLifeRange || ''}
                onChange={(e) => handleChange('usefulLifeRange', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              value={formData?.notes || ''}
              onChange={(e) => handleChange('notes', e.target.value)}
              rows={4}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </form>

        <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Save className="h-5 w-5" />
            <span>Save Changes</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CommunityDetailsModal;
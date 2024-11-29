import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Upload } from 'lucide-react';

interface CreateComponentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
}

const CreateComponentModal = ({ isOpen, onClose, onSave }: CreateComponentModalProps) => {
  const [formData, setFormData] = useState({
    assetId: '',
    componentName: '',
    groupFacility: '',
    category: '',
    usefulLife: '',
    usefulLifeRange: '',
    effectiveDate: '',
    resource: '',
    quantity: '',
    unit: '',
    unitCost: '',
    percentReplacement: '',
    comments: '',
    remarks: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-hidden"
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900">Create New Component</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-4rem)]">
          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Asset ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Asset ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.assetId}
                  onChange={(e) => handleChange('assetId', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Component Name */}
              <div className="lg:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Component Name
                </label>
                <input
                  type="text"
                  value={formData.componentName}
                  onChange={(e) => handleChange('componentName', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Group/Facility */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Group/Facility
                </label>
                <input
                  type="text"
                  placeholder="Select or Type Group/Facility"
                  value={formData.groupFacility}
                  onChange={(e) => handleChange('groupFacility', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Category</option>
                  <option value="interior">Interior</option>
                  <option value="exterior">Exterior</option>
                  <option value="mechanical">Mechanical</option>
                </select>
              </div>

              {/* Useful Life */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Useful Life
                </label>
                <input
                  type="text"
                  value={formData.usefulLife}
                  onChange={(e) => handleChange('usefulLife', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Useful Life Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Useful Life Range
                </label>
                <input
                  type="text"
                  value={formData.usefulLifeRange}
                  onChange={(e) => handleChange('usefulLifeRange', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Effective Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Effective Date
                </label>
                <input
                  type="date"
                  value={formData.effectiveDate}
                  onChange={(e) => handleChange('effectiveDate', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Resource */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resource
                </label>
                <input
                  type="text"
                  value={formData.resource}
                  onChange={(e) => handleChange('resource', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => handleChange('quantity', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Unit */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unit
                </label>
                <input
                  type="text"
                  placeholder="Select or Type Unit"
                  value={formData.unit}
                  onChange={(e) => handleChange('unit', e.target.value)}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Unit Cost */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Unit Cost
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    value={formData.unitCost}
                    onChange={(e) => handleChange('unitCost', e.target.value)}
                    className="w-full pl-8 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Percent Replacement */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Percent Replacement
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={formData.percentReplacement}
                    onChange={(e) => handleChange('percentReplacement', e.target.value)}
                    className="w-full pr-8 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">%</span>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Comments
              </label>
              <div className="flex items-center space-x-2 mb-2">
                <button type="button" className="px-3 py-1 text-sm border rounded hover:bg-gray-50">XS</button>
                <button type="button" className="px-3 py-1 text-sm border rounded hover:bg-gray-50">ADP</button>
                <button type="button" className="px-3 py-1 text-sm border rounded hover:bg-gray-50">UDP</button>
                <button type="button" className="px-3 py-1 text-sm border rounded hover:bg-gray-50">UDR</button>
              </div>
              <textarea
                value={formData.comments}
                onChange={(e) => handleChange('comments', e.target.value)}
                rows={3}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Remarks */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Remarks
              </label>
              <textarea
                value={formData.remarks}
                onChange={(e) => handleChange('remarks', e.target.value)}
                rows={4}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                      <span>Upload a file</span>
                      <input type="file" className="sr-only" accept="image/*" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    Only JPG, JPEG, PNG files are allowed
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end space-x-3 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Save
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CreateComponentModal;
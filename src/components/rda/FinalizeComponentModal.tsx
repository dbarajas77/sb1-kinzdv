import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Upload } from 'lucide-react';

interface FinalizeComponentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  onFinalize: (data: any) => void;
  initialData: any;
}

const FinalizeComponentModal = ({ isOpen, onClose, onSave, onFinalize, initialData }: FinalizeComponentModalProps) => {
  const [formData, setFormData] = useState({
    assetId: initialData?.assetId || '',
    componentName: initialData?.componentName || '',
    groupFacility: initialData?.groupFacility || '',
    category: initialData?.category || '',
    placedInService: initialData?.placedInService || '',
    usefulLife: initialData?.usefulLife || '',
    usefulLifeRange: initialData?.usefulLifeRange || '',
    effectiveDate: initialData?.effectiveDate || '',
    remainingLife: initialData?.remainingLife || '',
    adjustment: initialData?.adjustment || '',
    quantity: initialData?.quantity || '',
    unit: initialData?.unit || '',
    currentCost: initialData?.currentCost || '',
    futureCost: initialData?.futureCost || '',
    percentReplacement: initialData?.percentReplacement || '',
    accumReserves: initialData?.accumReserves || '',
    monthlyContribution: initialData?.monthlyContribution || '',
    oneTimeReplacement: initialData?.oneTimeReplacement || false,
    remarks: initialData?.remarks || '',
    fieldNotes: initialData?.fieldNotes || '',
    comments: initialData?.comments || '',
    imageUrl: initialData?.imageUrl || ''
  });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Handle image upload
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange('imageUrl', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    onSave(formData);
  };

  const handleFinalize = () => {
    onFinalize(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden"
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Finalize Component</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-4rem)]">
          <div className="grid grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Asset ID</label>
                <input
                  type="text"
                  value={formData.assetId}
                  onChange={(e) => handleChange('assetId', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Component Name</label>
                <input
                  type="text"
                  value={formData.componentName}
                  onChange={(e) => handleChange('componentName', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Placed in Service</label>
                <input
                  type="date"
                  value={formData.placedInService}
                  onChange={(e) => handleChange('placedInService', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Useful Life</label>
                <input
                  type="text"
                  value={formData.usefulLife}
                  onChange={(e) => handleChange('usefulLife', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adjustment</label>
                <input
                  type="text"
                  value={formData.adjustment}
                  onChange={(e) => handleChange('adjustment', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quantity - Unit</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => handleChange('quantity', e.target.value)}
                    className="flex-1 p-2 border rounded-lg"
                    placeholder="Quantity"
                  />
                  <input
                    type="text"
                    value={formData.unit}
                    onChange={(e) => handleChange('unit', e.target.value)}
                    className="w-32 p-2 border rounded-lg"
                    placeholder="Unit"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Percent Replacement</label>
                <input
                  type="text"
                  value={formData.percentReplacement}
                  onChange={(e) => handleChange('percentReplacement', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Accum Reserves</label>
                <input
                  type="text"
                  value={formData.accumReserves}
                  onChange={(e) => handleChange('accumReserves', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.oneTimeReplacement}
                    onChange={(e) => handleChange('oneTimeReplacement', e.target.checked)}
                    className="rounded border-gray-300"
                  />
                  <span className="text-sm font-medium text-gray-700">One Time Replacement</span>
                </label>
              </div>
            </div>

            {/* Middle Column */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Group/Facility</label>
                <input
                  type="text"
                  value={formData.groupFacility}
                  onChange={(e) => handleChange('groupFacility', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                <select
                  value={formData.category}
                  onChange={(e) => handleChange('category', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Select Category</option>
                  <option value="interior">Interior</option>
                  <option value="exterior">Exterior</option>
                  <option value="mechanical">Mechanical</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Useful Life Range</label>
                <input
                  type="text"
                  value={formData.usefulLifeRange}
                  onChange={(e) => handleChange('usefulLifeRange', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Remaining Life</label>
                <input
                  type="text"
                  value={formData.remainingLife}
                  onChange={(e) => handleChange('remainingLife', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Cost</label>
                <input
                  type="text"
                  value={formData.currentCost}
                  onChange={(e) => handleChange('currentCost', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Future Cost</label>
                <input
                  type="text"
                  value={formData.futureCost}
                  onChange={(e) => handleChange('futureCost', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Contribution</label>
                <input
                  type="text"
                  value={formData.monthlyContribution}
                  onChange={(e) => handleChange('monthlyContribution', e.target.value)}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>

            {/* Right Column - Image Upload */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Picture Upload</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                  {formData.imageUrl ? (
                    <div className="relative w-full h-48">
                      <img
                        src={formData.imageUrl}
                        alt="Component"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <button
                        onClick={() => handleChange('imageUrl', '')}
                        className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageUpload}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Remarks</label>
                <textarea
                  value={formData.remarks}
                  onChange={(e) => handleChange('remarks', e.target.value)}
                  rows={3}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Field Notes</label>
                <textarea
                  value={formData.fieldNotes}
                  onChange={(e) => handleChange('fieldNotes', e.target.value)}
                  rows={3}
                  className="w-full p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Comments</label>
                <div className="flex items-center space-x-2 mb-2">
                  <button type="button" className="px-3 py-1 text-sm border rounded hover:bg-gray-50">%S</button>
                  <button type="button" className="px-3 py-1 text-sm border rounded hover:bg-gray-50">ADP</button>
                  <button type="button" className="px-3 py-1 text-sm border rounded hover:bg-gray-50">UDP</button>
                  <button type="button" className="px-3 py-1 text-sm border rounded hover:bg-gray-50">UDR</button>
                </div>
                <textarea
                  value={formData.comments}
                  onChange={(e) => handleChange('comments', e.target.value)}
                  rows={3}
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-gray-200 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Save
          </button>
          <button
            onClick={handleFinalize}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Finalize
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FinalizeComponentModal;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Upload, Image, XCircle, Save } from 'lucide-react';

interface Component {
  id: string;
  assetId: string;
  name: string;
  groupFacility: string;
  category: string;
  usefulLife: number;
  quantity: number;
  unit: string;
  unitCost: number;
  percentReplacement: number;
  imageUrl?: string;
}

interface ComponentsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockComponents: Component[] = [
  {
    id: '1',
    assetId: 'RF001',
    name: 'Roofing System',
    groupFacility: 'Building Exterior',
    category: 'Roofing',
    usefulLife: 20,
    quantity: 15000,
    unit: 'sq. ft.',
    unitCost: 8.5,
    percentReplacement: 100,
    imageUrl: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8'
  },
  {
    id: '2',
    assetId: 'PL001',
    name: 'Pool Equipment',
    groupFacility: 'Amenities',
    category: 'Pool',
    usefulLife: 10,
    quantity: 1,
    unit: 'system',
    unitCost: 25000,
    percentReplacement: 100,
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7'
  }
];

const ComponentCard = ({ 
  component,
  onClick
}: { 
  component: Component;
  onClick: () => void;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="aspect-video relative">
        {component.imageUrl ? (
          <img
            src={component.imageUrl}
            alt={component.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <Image className="h-12 w-12 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{component.name}</h3>
        <p className="text-sm text-gray-500">{component.category}</p>
      </div>
    </motion.div>
  );
};

const EditComponentModal = ({ 
  component, 
  onClose,
  onSave 
}: { 
  component: Component; 
  onClose: () => void;
  onSave: (updatedComponent: Component) => void;
}) => {
  const [editedComponent, setEditedComponent] = useState(component);
  const [showImageUpload, setShowImageUpload] = useState(false);

  const handleChange = (field: keyof Component, value: any) => {
    setEditedComponent(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        alert(`Image "${file.name}" selected for upload`);
      } else {
        alert('Please select an image file');
      }
    }
    setShowImageUpload(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex items-center justify-between bg-gray-50">
          <h3 className="text-lg font-semibold">Edit Component</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
            {editedComponent.imageUrl ? (
              <img
                src={editedComponent.imageUrl}
                alt={editedComponent.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Image className="h-12 w-12 text-gray-400" />
              </div>
            )}
            <button
              onClick={() => setShowImageUpload(true)}
              className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
            >
              <Upload className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Asset ID</label>
              <input
                type="text"
                value={editedComponent.assetId}
                onChange={(e) => handleChange('assetId', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={editedComponent.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Group/Facility</label>
              <input
                type="text"
                value={editedComponent.groupFacility}
                onChange={(e) => handleChange('groupFacility', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <input
                type="text"
                value={editedComponent.category}
                onChange={(e) => handleChange('category', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Useful Life (years)</label>
              <input
                type="number"
                value={editedComponent.usefulLife}
                onChange={(e) => handleChange('usefulLife', parseInt(e.target.value))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
              <input
                type="number"
                value={editedComponent.quantity}
                onChange={(e) => handleChange('quantity', parseInt(e.target.value))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Unit</label>
              <input
                type="text"
                value={editedComponent.unit}
                onChange={(e) => handleChange('unit', e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Unit Cost ($)</label>
              <input
                type="number"
                value={editedComponent.unitCost}
                onChange={(e) => handleChange('unitCost', parseFloat(e.target.value))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Replacement %</label>
              <input
                type="number"
                value={editedComponent.percentReplacement}
                onChange={(e) => handleChange('percentReplacement', parseInt(e.target.value))}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="p-4 border-t bg-gray-50 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg flex items-center space-x-2"
          >
            <XCircle className="h-5 w-5" />
            <span>Cancel</span>
          </button>

          <button
            onClick={() => {
              onSave(editedComponent);
              onClose();
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center space-x-2"
          >
            <Save className="h-5 w-5" />
            <span>Save Changes</span>
          </button>
        </div>

        {showImageUpload && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h4 className="text-lg font-medium mb-4">Upload Component Image</h4>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-blue-50 file:text-blue-700
                  hover:file:bg-blue-100"
              />
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  onClick={() => setShowImageUpload(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ComponentsModal = ({ isOpen, onClose }: ComponentsModalProps) => {
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">Components</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockComponents.map((component) => (
              <ComponentCard
                key={component.id}
                component={component}
                onClick={() => setSelectedComponent(component)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedComponent && (
        <EditComponentModal
          component={selectedComponent}
          onClose={() => setSelectedComponent(null)}
          onSave={(updatedComponent) => {
            console.log('Updated component:', updatedComponent);
            setSelectedComponent(null);
          }}
        />
      )}
    </div>
  );
};

export default ComponentsModal;
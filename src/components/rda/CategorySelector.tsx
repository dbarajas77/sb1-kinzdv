import React from 'react';
import { motion } from 'framer-motion';

interface CategorySelectorProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySelector = ({ selectedCategory, onCategoryChange }: CategorySelectorProps) => {
  const categories = [
    { id: 'all', label: 'All' },
    { id: 'interior-furn', label: 'Interior Furn/Clubhouse' },
    { id: 'recreation-pool', label: 'Recreation/Pool' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'building-components', label: 'Building Components' },
    { id: 'lighting', label: 'Lighting' },
    { id: 'fencing-security', label: 'Fencing / Security' },
    { id: 'grounds-components', label: 'Grounds Components' },
    { id: 'roofing', label: 'Roofing' },
    { id: 'painting', label: 'Painting' },
    { id: 'streets-asphalt', label: 'Streets / Asphalt' },
    { id: '0', label: '0' }
  ];

  return (
    <div className="space-y-2">
      <h3 className="font-medium text-gray-900 mb-4">Select Category</h3>
      {categories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.02 }}
          onClick={() => onCategoryChange(category.id)}
          className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === category.id
              ? 'bg-blue-600 text-white'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {category.label}
        </motion.button>
      ))}
    </div>
  );
};

export default CategorySelector;
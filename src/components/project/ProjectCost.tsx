import React from 'react';
import { DollarSign } from 'lucide-react';

interface ProjectCostProps {
  cost: number;
  onCostChange: (cost: number) => void;
}

const ProjectCost = ({ cost, onCostChange }: ProjectCostProps) => {
  return (
    <div className="mb-8">
      <h3 className="font-medium text-gray-900 mb-4 flex items-center">
        <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
        Project Cost
      </h3>
      <div className="flex items-center space-x-2">
        <span className="text-lg font-medium text-gray-700">$</span>
        <input
          type="number"
          value={cost}
          onChange={(e) => onCostChange(parseFloat(e.target.value) || 0)}
          className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xl font-bold text-blue-600"
          placeholder="Enter project cost"
          min="0"
          step="0.01"
        />
      </div>
    </div>
  );
};

export default ProjectCost;
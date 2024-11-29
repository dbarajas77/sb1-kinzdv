import React, { useState, useCallback } from 'react';
import { DollarSign, Users } from 'lucide-react';
import EditableMetric from './EditableMetric';

interface ProjectMetricsProps {
  initialMetrics?: {
    unitsCount: number;
    monthlyPerUnit: number;
  };
}

const ProjectMetrics = ({ initialMetrics }: ProjectMetricsProps) => {
  const [unitsCount, setUnitsCount] = useState(initialMetrics?.unitsCount || 505);
  const [monthlyPerUnit, setMonthlyPerUnit] = useState(initialMetrics?.monthlyPerUnit || 96.59);

  const handleUnitsCountChange = (newValue: number) => {
    setUnitsCount(newValue);
  };

  const handleMonthlyPerUnitChange = (newValue: number) => {
    setMonthlyPerUnit(newValue);
  };

  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-6">
      <h3 className="text-sm font-medium text-gray-600 mb-2">Project Metrics</h3>
      <div className="space-y-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Monthly Per Unit</span>
            <EditableMetric
              value={monthlyPerUnit}
              onValueChange={handleMonthlyPerUnitChange}
              prefix="$"
              className="text-lg font-bold text-blue-600"
              iconColor="text-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Total Units</span>
            <EditableMetric
              value={unitsCount}
              onValueChange={handleUnitsCountChange}
              className="text-lg font-bold text-blue-600"
              iconColor="text-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Annual Cost Per Unit</span>
            <span className="text-lg font-bold text-blue-600">
              ${(monthlyPerUnit * 12).toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Total Annual Cost</span>
            <span className="text-lg font-bold text-blue-600">
              ${(monthlyPerUnit * 12 * unitsCount).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectMetrics;
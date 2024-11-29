import React from 'react';
import { Component } from '../../types/components';
import { Edit, Trash2 } from 'lucide-react';

interface ComponentsTableProps {
  components: Component[];
  onEdit?: (component: Component) => void;
  onDelete?: (component: Component) => void;
}

const ComponentsTable = ({ 
  components = [],
  onEdit,
  onDelete
}: ComponentsTableProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Asset ID</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Component Name</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Group/Facility</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Useful Life</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Useful Life Range</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Effective Date</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Resource</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Quantity</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit</th>
          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Unit Cost ($)</th>
          <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {components.map((component) => (
          <tr key={component.assetId} className="hover:bg-gray-50">
            <td className="px-4 py-4 text-sm">{component.assetId}</td>
            <td className="px-4 py-4 text-sm">{component.componentName}</td>
            <td className="px-4 py-4 text-sm">{component.groupFacility}</td>
            <td className="px-4 py-4 text-sm">{component.category}</td>
            <td className="px-4 py-4 text-sm">{component.usefulLife}</td>
            <td className="px-4 py-4 text-sm">{component.usefulLifeRange}</td>
            <td className="px-4 py-4 text-sm">{component.effectiveDate}</td>
            <td className="px-4 py-4 text-sm">{component.resource}</td>
            <td className="px-4 py-4 text-sm">{component.quantity}</td>
            <td className="px-4 py-4 text-sm">{component.unit}</td>
            <td className="px-4 py-4 text-sm">{component.unitCost}</td>
            <td className="px-4 py-4 text-sm text-right">
              <div className="flex items-center justify-end space-x-2">
                {onEdit && (
                  <button
                    onClick={() => onEdit(component)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                )}
                {onDelete && (
                  <button
                    onClick={() => onDelete(component)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                )}
              </div>
            </td>
          </tr>
        ))}
        {components.length === 0 && (
          <tr>
            <td colSpan={12} className="px-4 py-8 text-center text-gray-500">
              No components found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ComponentsTable;
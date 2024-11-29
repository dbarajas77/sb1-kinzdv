import React from 'react';
import { Plus } from 'lucide-react';

interface CreateReportButtonProps {
  onClick: () => void;
}

const CreateReportButton = ({ onClick }: CreateReportButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      <Plus className="h-5 w-5" />
      <span>Create New Report</span>
    </button>
  );
};

export default CreateReportButton;
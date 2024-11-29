import React from 'react';
import type { ReportDetails } from '../../types/calculations';

interface Props {
  details: ReportDetails;
}

const ReportDetailsSection = ({ details }: Props) => {
  return (
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-lg font-medium text-gray-900 mb-4">REPORT DETAILS</h2>
      <div className="grid grid-cols-4 gap-6">
        <div>
          <label className="block text-sm text-gray-500">Name</label>
          <input
            type="text"
            value={details.name}
            readOnly
            className="mt-1 w-full p-2 border rounded-lg bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-500">Client Name</label>
          <input
            type="text"
            value={details.clientName}
            readOnly
            className="mt-1 w-full p-2 border rounded-lg bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-500">Account Number</label>
          <input
            type="text"
            value={details.accountNumber}
            readOnly
            className="mt-1 w-full p-2 border rounded-lg bg-gray-50"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-500">Date</label>
          <input
            type="text"
            value={details.date}
            readOnly
            className="mt-1 w-full p-2 border rounded-lg bg-gray-50"
          />
        </div>
      </div>
    </div>
  );
};

export default ReportDetailsSection;
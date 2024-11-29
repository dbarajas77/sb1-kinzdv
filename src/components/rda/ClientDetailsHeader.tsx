import React from 'react';

interface ClientDetailsHeaderProps {
  reportName: string;
  accountNumber: string;
  date: string;
}

const ClientDetailsHeader = ({ reportName, accountNumber, date }: ClientDetailsHeaderProps) => {
  return (
    <div className="p-6 border-b border-gray-200">
      <div className="flex items-center space-x-6 mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-500">Report Name</span>
          <span className="font-medium">{reportName}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-500">Account Number</span>
          <span className="font-medium">{accountNumber}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-gray-500">Date</span>
          <span className="font-medium">{date}</span>
        </div>
      </div>
    </div>
  );
};

export default ClientDetailsHeader;
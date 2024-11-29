import React from 'react';
import { Building } from 'lucide-react';

interface CompanyInfo {
  name: string;
  contact: string;
  phone: string;
  email: string;
}

interface CompanyInformationProps {
  companyInfo: CompanyInfo;
  onCompanyInfoChange: (info: CompanyInfo) => void;
}

const CompanyInformation = ({ companyInfo, onCompanyInfoChange }: CompanyInformationProps) => {
  return (
    <div className="mb-8">
      <h3 className="font-medium text-gray-900 mb-4 flex items-center">
        <Building className="h-5 w-5 mr-2 text-blue-600" />
        Company Information
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Name
          </label>
          <input
            type="text"
            value={companyInfo.name}
            onChange={(e) => onCompanyInfoChange({ ...companyInfo, name: e.target.value })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter company name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Contact Person
          </label>
          <input
            type="text"
            value={companyInfo.contact}
            onChange={(e) => onCompanyInfoChange({ ...companyInfo, contact: e.target.value })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter contact name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            value={companyInfo.phone}
            onChange={(e) => onCompanyInfoChange({ ...companyInfo, phone: e.target.value })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter phone number"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={companyInfo.email}
            onChange={(e) => onCompanyInfoChange({ ...companyInfo, email: e.target.value })}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter email address"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInformation;
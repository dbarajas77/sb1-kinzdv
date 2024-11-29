import React from 'react';
import { FileText, Download, Edit, Share, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Report {
  reportName: string;
  accountNumber: string;
  createDate: string;
  components: number;
}

interface ReportsTableProps {
  reports: Report[];
  onDownload: (report: Report) => void;
  onEdit: (report: Report) => void;
  onShare: (report: Report) => void;
  onDelete: (report: Report) => void;
}

const ReportsTable = ({ reports, onDownload, onEdit, onShare, onDelete }: ReportsTableProps) => {
  const navigate = useNavigate();

  const handleRowClick = (report: Report) => {
    navigate(`/rda-software/client/${report.accountNumber}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Report Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Account Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Create Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Components
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reports.map((report, index) => (
            <tr 
              key={index} 
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => handleRowClick(report)}
            >
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-900">{report.reportName}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {report.accountNumber}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {report.createDate}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {report.components}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end space-x-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onDownload(report);
                    }}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onEdit(report);
                    }}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onShare(report);
                    }}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Share className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onDelete(report);
                    }}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsTable;
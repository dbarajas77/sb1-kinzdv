import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/rda/SearchBar';
import ReportsTable from '../components/rda/ReportsTable';
import CreateReportButton from '../components/rda/CreateReportButton';
import CreateReportModal from '../components/modals/CreateReportModal';
import SideNavigation from '../components/rda/SideNavigation';
import ReportNavigation from '../components/rda/ReportNavigation';

const mockReports = [
  {
    reportName: 'Test',
    accountNumber: '100001',
    createDate: '11/12/2024',
    components: 2
  },
  {
    reportName: 'Test3',
    accountNumber: '100004',
    createDate: '11/13/2024',
    components: 0
  }
];

const RdaSoftwarePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [reports] = useState(mockReports);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleCreateReport = () => {
    setShowCreateModal(true);
  };

  const handleSaveReport = (reportData: any) => {
    console.log('Saving report:', reportData);
    setShowCreateModal(false);
    navigate(`/rda-software/client/${reportData.accountNumber}`);
  };

  const handleDownload = (report: any) => {
    console.log('Downloading report:', report);
  };

  const handleEdit = (report: any) => {
    console.log('Editing report:', report);
  };

  const handleShare = (report: any) => {
    console.log('Sharing report:', report);
  };

  const handleDelete = (report: any) => {
    console.log('Deleting report:', report);
  };

  const filteredReports = reports.filter(report =>
    report.reportName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.accountNumber.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Side Navigation */}
        <div className="w-64 bg-blue-600 min-h-screen">
          <div className="p-4">
            <SideNavigation />
            <ReportNavigation />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
                <CreateReportButton onClick={handleCreateReport} />
              </div>
              <SearchBar
                value={searchTerm}
                onChange={handleSearch}
                onClear={handleClearSearch}
              />
            </div>
            <div className="p-6">
              <ReportsTable
                reports={filteredReports}
                onDownload={handleDownload}
                onEdit={handleEdit}
                onShare={handleShare}
                onDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </div>

      <CreateReportModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSave={handleSaveReport}
      />
    </div>
  );
};

export default RdaSoftwarePage;
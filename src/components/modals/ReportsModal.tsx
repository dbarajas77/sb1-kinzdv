import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, FileSpreadsheet, ChevronRight, BarChart2, FileText, Component, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ReportsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ReportCard {
  id: string;
  year: number;
  name: string;
  lastUpdated: string;
}

const mockReports: ReportCard[] = [
  {
    id: '1',
    year: 2024,
    name: 'Windward HOA Reserve Study',
    lastUpdated: '2024-02-15'
  },
  {
    id: '2',
    year: 2023,
    name: 'Windward HOA Reserve Study',
    lastUpdated: '2023-02-10'
  }
];

const ReportSections = [
  {
    id: 'components',
    title: 'Components Analysis',
    icon: <Component className="h-5 w-5" />,
    description: 'Detailed breakdown of all components and their conditions'
  },
  {
    id: 'financial',
    title: 'Financial Analysis',
    icon: <DollarSign className="h-5 w-5" />,
    description: 'Comprehensive financial projections and funding analysis'
  },
  {
    id: 'graphs',
    title: 'Visual Analytics',
    icon: <BarChart2 className="h-5 w-5" />,
    description: 'Charts and graphs showing key metrics and trends'
  },
  {
    id: 'summary',
    title: 'Executive Summary',
    icon: <FileText className="h-5 w-5" />,
    description: 'Overview of key findings and recommendations'
  }
];

const ReportsModal = ({ isOpen, onClose }: ReportsModalProps) => {
  const [selectedReport, setSelectedReport] = useState<ReportCard | null>(null);

  if (!isOpen) return null;

  const handleSectionClick = (sectionId: string) => {
    // Handle section click - could open specific section view
    console.log('Opening section:', sectionId);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        <div className="p-4 border-b flex items-center justify-between bg-gray-50">
          <div className="flex items-center space-x-2">
            <FileSpreadsheet className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Reserve Study Reports</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-4rem)]">
          <div className="space-y-6">
            {mockReports.map((report) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border rounded-lg overflow-hidden"
              >
                <div
                  className={`p-4 bg-white cursor-pointer transition-colors ${
                    selectedReport?.id === report.id ? 'bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedReport(selectedReport?.id === report.id ? null : report)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-6 w-6 text-blue-600" />
                      <div>
                        <h3 className="font-medium text-lg">{report.name}</h3>
                        <p className="text-sm text-gray-500">
                          Year: {report.year} • Last Updated: {new Date(report.lastUpdated).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 text-gray-400 transition-transform ${
                        selectedReport?.id === report.id ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </div>

                {selectedReport?.id === report.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t bg-gray-50 p-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {ReportSections.map((section) => (
                        <motion.div
                          key={section.id}
                          whileHover={{ scale: 1.02 }}
                          className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
                          onClick={() => handleSectionClick(section.id)}
                        >
                          <div className="flex items-start space-x-3">
                            <div className="text-blue-600">{section.icon}</div>
                            <div>
                              <h4 className="font-medium text-gray-900">{section.title}</h4>
                              <p className="text-sm text-gray-500 mt-1">{section.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReportsModal;
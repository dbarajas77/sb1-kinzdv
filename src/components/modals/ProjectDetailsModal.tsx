import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Upload, Play, Building, DollarSign } from 'lucide-react';
import type { Project, Document } from '../../data/mockProjects';
import DocumentPreviewModal from './DocumentPreviewModal';

interface ProjectDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
  onUploadDocument: (file: File, type: 'contract' | 'invoice') => void;
  showStartButton?: boolean;
  onStartProject?: () => void;
}

const ProjectDetailsModal = ({ 
  isOpen, 
  onClose, 
  project, 
  onUploadDocument,
  showStartButton,
  onStartProject 
}: ProjectDetailsModalProps) => {
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [companyInfo, setCompanyInfo] = useState({
    name: '',
    contact: '',
    phone: '',
    email: ''
  });
  const [projectCost, setProjectCost] = useState<number>(project.estimatedCost);

  if (!isOpen) return null;

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'contract' | 'invoice') => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf') {
        onUploadDocument(file, type);
      } else {
        alert('Please select a PDF file');
      }
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-hidden"
        >
          {/* Header */}
          <div className="p-4 border-b flex items-center justify-between bg-gray-50">
            <div>
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="text-sm text-gray-500">Project Details</p>
            </div>
            <div className="flex items-center space-x-2">
              {showStartButton && (
                <button
                  onClick={onStartProject}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Play className="h-5 w-5" />
                  <span>Start Project</span>
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(90vh-4rem)]">
            {/* Company Information */}
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
                    onChange={(e) => setCompanyInfo(prev => ({ ...prev, name: e.target.value }))}
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
                    onChange={(e) => setCompanyInfo(prev => ({ ...prev, contact: e.target.value }))}
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
                    onChange={(e) => setCompanyInfo(prev => ({ ...prev, phone: e.target.value }))}
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
                    onChange={(e) => setCompanyInfo(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>
              </div>
            </div>

            {/* Project Cost */}
            <div className="mb-8">
              <h3 className="font-medium text-gray-900 mb-4 flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
                Project Cost
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-medium text-gray-700">$</span>
                <input
                  type="number"
                  value={projectCost}
                  onChange={(e) => setProjectCost(parseFloat(e.target.value) || 0)}
                  className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-xl font-bold text-blue-600"
                  placeholder="Enter project cost"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>

            {/* Project Documents */}
            <div>
              <h3 className="font-medium text-gray-900 mb-4">Project Documents</h3>
              <div className="flex space-x-4 mb-6">
                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e, 'contract')}
                    className="hidden"
                  />
                  <div className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Upload className="h-5 w-5" />
                    <span>Add Contract</span>
                  </div>
                </label>

                <label className="cursor-pointer">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileUpload(e, 'invoice')}
                    className="hidden"
                  />
                  <div className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Upload className="h-5 w-5" />
                    <span>Add Invoice</span>
                  </div>
                </label>
              </div>

              {project.documents.length === 0 && (
                <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed">
                  <p className="text-gray-500">No documents uploaded yet</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {selectedDocument && (
        <DocumentPreviewModal
          isOpen={!!selectedDocument}
          onClose={() => setSelectedDocument(null)}
          document={selectedDocument}
        />
      )}
    </>
  );
};

export default ProjectDetailsModal;
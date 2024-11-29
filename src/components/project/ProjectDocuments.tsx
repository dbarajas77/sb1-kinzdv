import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Download, Trash2, FileText, AlertTriangle } from 'lucide-react';
import type { Document } from '../../data/mockProjects';

interface ProjectDocumentsProps {
  documents: Document[];
  onUploadDocument: (file: File, type: 'contract' | 'invoice') => void;
  onDownload: (document: Document) => void;
  onDelete: (documentId: string) => void;
  onDocumentSelect: (document: Document) => void;
  showDeleteConfirm: string | null;
  onShowDeleteConfirm: (documentId: string | null) => void;
}

const ProjectDocuments = ({
  documents,
  onUploadDocument,
  onDownload,
  onDelete,
  onDocumentSelect,
  showDeleteConfirm,
  onShowDeleteConfirm
}: ProjectDocumentsProps) => {
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

      {documents.length > 0 ? (
        <div className="space-y-4">
          {documents.map((document) => (
            <motion.div
              key={document.id}
              whileHover={{ scale: 1.01 }}
              className="p-4 border rounded-lg hover:shadow-md transition-all cursor-pointer"
              onClick={() => onDocumentSelect(document)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-medium">{document.fileName}</h4>
                    <p className="text-sm text-gray-500">{document.date}</p>
                    <p className="text-sm text-blue-600 capitalize">{document.type}</p>
                    {document.amount && (
                      <p className="text-sm text-gray-600">Amount: ${document.amount.toLocaleString()}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onDownload(document);
                    }}
                    className="p-1 hover:bg-blue-100 rounded-full transition-colors"
                  >
                    <Download className="h-5 w-5 text-blue-600" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onShowDeleteConfirm(document.id);
                    }}
                    className="p-1 hover:bg-red-100 rounded-full transition-colors"
                  >
                    <Trash2 className="h-5 w-5 text-red-600" />
                  </button>
                </div>
              </div>

              {showDeleteConfirm === document.id && (
                <div className="mt-2 p-2 bg-red-50 rounded-lg">
                  <p className="text-sm text-red-700 mb-2">Are you sure you want to delete this document?</p>
                  <div className="flex space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete(document.id);
                      }}
                      className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                    >
                      Delete
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onShowDeleteConfirm(null);
                      }}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed">
          <AlertTriangle className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">No documents uploaded yet</p>
        </div>
      )}
    </div>
  );
};

export default ProjectDocuments;
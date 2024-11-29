import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Download, Trash2, Search, Upload, FileText } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface Document {
  id: string;
  fileName: string;
  date: string;
  category: string;
  description: string;
  fileUrl: string;
}

interface VendorInvoicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockDocuments: Document[] = [
  {
    id: '1',
    fileName: 'Annual_Meeting_Minutes_2024.pdf',
    date: '2/14/2024',
    category: 'Meeting Minutes',
    description: 'Annual HOA meeting minutes and resolutions',
    fileUrl: 'https://example.com/minutes1.pdf'
  },
  {
    id: '2',
    fileName: 'HOA_Bylaws_2024.pdf',
    date: '2/9/2024',
    category: 'Governing Documents',
    description: 'Updated HOA bylaws and regulations',
    fileUrl: 'https://example.com/bylaws.pdf'
  },
  {
    id: '3',
    fileName: 'Insurance_Policy_2024.pdf',
    date: '1/15/2024',
    category: 'Insurance',
    description: 'Master insurance policy documentation',
    fileUrl: 'https://example.com/insurance.pdf'
  }
];

const VendorInvoicesModal = ({ isOpen, onClose }: VendorInvoicesModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = Array.from(new Set(mockDocuments.map(doc => doc.category)));

  const filteredDocuments = mockDocuments.filter(doc => {
    const matchesSearch = doc.fileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDownload = async (document: Document, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const response = await fetch(document.fileUrl);
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = document.fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      alert('Document downloaded successfully!');
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download document. Please try again.');
    }
  };

  const handleDelete = async (documentId: string) => {
    try {
      alert('Document deleted successfully!');
      setShowDeleteConfirm(null);
      if (selectedDocument?.id === documentId) {
        setSelectedDocument(null);
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete document. Please try again.');
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      alert(`Document "${file.name}" selected for upload`);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">HOA Documents</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex h-[calc(90vh-4rem)]">
          {/* Left side - Document list */}
          <div className="w-1/2 border-r p-4 overflow-y-auto">
            {/* Search and Upload */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search documents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <label className="cursor-pointer">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileUpload}
                  className="hidden"
                />
                <div className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Upload className="h-5 w-5" />
                  <span>Upload</span>
                </div>
              </label>
            </div>

            {/* Document list */}
            <div className="space-y-3">
              {filteredDocuments.map((document) => (
                <motion.div
                  key={document.id}
                  whileHover={{ scale: 1.02 }}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedDocument?.id === document.id ? 'bg-blue-50 border-blue-200' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedDocument(document)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <FileText className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-medium">{document.fileName}</h3>
                        <p className="text-sm text-gray-500">{document.date}</p>
                        <p className="text-sm text-blue-600">{document.category}</p>
                        <p className="text-sm text-gray-600 mt-1">{document.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={(e) => handleDownload(document, e)}
                        className="p-1 hover:bg-blue-100 rounded-full transition-colors"
                      >
                        <Download className="h-5 w-5 text-blue-600" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDeleteConfirm(document.id);
                        }}
                        className="p-1 hover:bg-red-100 rounded-full transition-colors"
                      >
                        <Trash2 className="h-5 w-5 text-red-600" />
                      </button>
                    </div>
                  </div>

                  {/* Delete confirmation */}
                  {showDeleteConfirm === document.id && (
                    <div className="mt-2 p-2 bg-red-50 rounded-lg">
                      <p className="text-sm text-red-700 mb-2">Are you sure you want to delete this document?</p>
                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(document.id);
                          }}
                          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                        >
                          Delete
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowDeleteConfirm(null);
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
          </div>

          {/* Right side - PDF preview */}
          <div className="w-1/2 p-4 bg-gray-50 overflow-y-auto">
            {selectedDocument ? (
              <Document
                file={selectedDocument.fileUrl}
                onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                className="pdf-document"
              >
                {Array.from(new Array(numPages || 0), (_, index) => (
                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    className="mb-4"
                    width={500}
                  />
                ))}
              </Document>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                Select a document to preview
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorInvoicesModal;
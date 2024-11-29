import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface DocumentPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  document: {
    fileName: string;
    type: 'contract' | 'invoice';
    date: string;
    vendor?: string;
    amount?: number;
    fileUrl: string;
  };
}

const DocumentPreviewModal = ({ isOpen, onClose, document }: DocumentPreviewModalProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleDownload = async () => {
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
    } catch (error) {
      console.error('Download error:', error);
      alert('Failed to download document. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg w-full max-w-4xl h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between bg-gray-50">
          <div className="flex items-center space-x-3">
            <FileText className="h-6 w-6 text-blue-600" />
            <div>
              <h2 className="text-xl font-semibold">{document.fileName}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Date: {document.date}</span>
                {document.vendor && <span>Vendor: {document.vendor}</span>}
                {document.amount && <span>Amount: ${document.amount.toLocaleString()}</span>}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleDownload}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-5 w-5" />
              <span>Download</span>
            </motion.button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* PDF Preview */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-100">
          <div className="max-w-3xl mx-auto">
            <Document
              file={document.fileUrl}
              onLoadSuccess={({ numPages }) => setNumPages(numPages)}
              className="pdf-document"
            >
              {Array.from(new Array(numPages || 0), (_, index) => (
                <div key={`page_${index + 1}`} className="mb-4 bg-white shadow-lg rounded-lg overflow-hidden">
                  <Page
                    pageNumber={index + 1}
                    width={800}
                    className="pdf-page"
                  />
                </div>
              ))}
            </Document>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DocumentPreviewModal;
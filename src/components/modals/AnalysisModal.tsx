import React from 'react';
import { motion } from 'framer-motion';
import { X, AlertTriangle, CheckCircle, AlertCircle, ArrowRight, Download, Printer } from 'lucide-react';

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AnalysisItem {
  type: 'success' | 'warning' | 'error';
  title: string;
  description: string;
  recommendation?: string;
}

const mockAnalysis: AnalysisItem[] = [
  {
    type: 'success',
    title: 'Component Documentation',
    description: 'All major components are properly documented with detailed specifications.',
  },
  {
    type: 'warning',
    title: 'Funding Level',
    description: 'Current funding level is at 63% (Fair)',
    recommendation: 'Consider increasing monthly contributions by 15% to achieve strong funding level (>70%) within 5 years.'
  },
  {
    type: 'error',
    title: 'Missing Cost Data',
    description: 'Some components lack current replacement cost estimates.',
    recommendation: 'Obtain current market quotes for components: Pool Equipment, Exterior Painting'
  },
  {
    type: 'warning',
    title: 'Useful Life Estimates',
    description: 'Some components have outdated useful life estimates.',
    recommendation: 'Review and update useful life estimates based on current condition and maintenance history.'
  },
  {
    type: 'error',
    title: 'Inflation Rate',
    description: 'The applied inflation rate (2%) may be too conservative.',
    recommendation: 'Consider adjusting inflation rate to 3-4% based on current economic indicators.'
  }
];

const AnalysisModal = ({ isOpen, onClose }: AnalysisModalProps) => {
  if (!isOpen) return null;

  const getIcon = (type: AnalysisItem['type']) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-6 w-6 text-emerald-500" />;
      case 'warning':
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="h-6 w-6 text-red-500" />;
    }
  };

  const getBackgroundColor = (type: AnalysisItem['type']) => {
    switch (type) {
      case 'success':
        return 'bg-emerald-50';
      case 'warning':
        return 'bg-yellow-50';
      case 'error':
        return 'bg-red-50';
    }
  };

  const handleDownload = () => {
    // Create analysis text content
    const content = mockAnalysis.map(item => {
      let text = `${item.title}\n`;
      text += `Status: ${item.type.toUpperCase()}\n`;
      text += `Description: ${item.description}\n`;
      if (item.recommendation) {
        text += `Recommendation: ${item.recommendation}\n`;
      }
      text += '\n';
      return text;
    }).join('\n');

    // Create blob and download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reserve-study-analysis.txt';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between bg-gray-50">
          <div>
            <h2 className="text-xl font-semibold">Reserve Study Analysis</h2>
            <p className="text-sm text-gray-500">AI-powered analysis and recommendations</p>
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handlePrint}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Printer className="h-5 w-5" />
              <span>Print</span>
            </motion.button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-4rem)]" id="analysis-content">
          <div className="space-y-6">
            {mockAnalysis.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg ${getBackgroundColor(item.type)}`}
              >
                <div className="flex items-start space-x-3">
                  {getIcon(item.type)}
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                    {item.recommendation && (
                      <div className="mt-3 flex items-start space-x-2">
                        <ArrowRight className="h-5 w-5 text-gray-400 mt-0.5" />
                        <p className="text-gray-700 font-medium">
                          Recommendation: {item.recommendation}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnalysisModal;
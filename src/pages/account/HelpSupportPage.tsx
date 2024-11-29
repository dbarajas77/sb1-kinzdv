import React from 'react';
import { motion } from 'framer-motion';
import { 
  HelpCircle,
  Book,
  MessageCircle,
  Mail,
  Phone,
  FileText,
  ExternalLink
} from 'lucide-react';

const HelpSupportPage = () => {
  const faqs = [
    {
      question: 'How do I upload a reserve study?',
      answer: 'You can upload your reserve study PDF by clicking the "Upload" button on your dashboard. Our AI will automatically analyze the document and extract relevant information.'
    },
    {
      question: 'What file formats are supported?',
      answer: 'Currently, we support PDF files for reserve study uploads. Make sure your document is in PDF format before uploading.'
    },
    {
      question: 'How accurate is the AI analysis?',
      answer: 'Our AI system has been trained on thousands of reserve studies and typically achieves 95%+ accuracy in data extraction and analysis.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-3">
              <HelpCircle className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white rounded-lg shadow p-6">
              <Book className="h-6 w-6 text-blue-600 mb-4" />
              <h2 className="text-lg font-medium text-gray-900 mb-2">Documentation</h2>
              <p className="text-gray-500 mb-4">Detailed guides and tutorials to help you get started</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                <span>View Docs</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <MessageCircle className="h-6 w-6 text-blue-600 mb-4" />
              <h2 className="text-lg font-medium text-gray-900 mb-2">Live Chat</h2>
              <p className="text-gray-500 mb-4">Chat with our support team in real-time</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">Start Chat</button>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <FileText className="h-6 w-6 text-blue-600 mb-4" />
              <h2 className="text-lg font-medium text-gray-900 mb-2">Knowledge Base</h2>
              <p className="text-gray-500 mb-4">Browse articles and tutorials</p>
              <button className="text-blue-600 hover:text-blue-700 font-medium">View Articles</button>
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                  <h3 className="text-base font-medium text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-500">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <h2 className="text-lg font-medium text-gray-900 mb-6">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Email Support</p>
                  <p className="text-gray-500">support@reserveai.com</p>
                  <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">Phone Support</p>
                  <p className="text-gray-500">1-800-RESERVE</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HelpSupportPage;
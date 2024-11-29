import React from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  DollarSign, 
  Download, 
  Clock,
  Shield,
  CheckCircle
} from 'lucide-react';

const BillingPage = () => {
  const invoices = [
    { id: 1, date: '2024-02-01', amount: 99, status: 'Paid' },
    { id: 2, date: '2024-01-01', amount: 99, status: 'Paid' },
    { id: 3, date: '2023-12-01', amount: 99, status: 'Paid' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {/* Current Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <DollarSign className="h-8 w-8 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Current Plan</h2>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Professional
              </span>
            </div>
            
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold text-gray-900">$99</span>
              <span className="ml-1 text-gray-500">/month</span>
            </div>

            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Up to 15 reserve studies</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Advanced AI analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-600">Priority support</span>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Upgrade Plan
            </button>
          </motion.div>

          {/* Payment Method */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <CreditCard className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Payment Method</h2>
            </div>

            <div className="flex items-center justify-between p-4 border rounded-lg mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-8 bg-gray-200 rounded"></div>
                <div>
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-gray-500">Expires 12/24</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700">Edit</button>
            </div>

            <button className="text-blue-600 hover:text-blue-700 font-medium">
              + Add payment method
            </button>
          </motion.div>

          {/* Billing History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <Clock className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-900">Billing History</h2>
            </div>

            <div className="space-y-4">
              {invoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">${invoice.amount}</p>
                    <p className="text-sm text-gray-500">{new Date(invoice.date).toLocaleDateString()}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-green-600 text-sm">{invoice.status}</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Security Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow p-6"
          >
            <div className="flex items-start space-x-3">
              <Shield className="h-6 w-6 text-blue-600" />
              <div>
                <h3 className="font-medium text-gray-900">Secure Payments</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Your payment information is encrypted and securely stored. We never store your full card details on our servers.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BillingPage;
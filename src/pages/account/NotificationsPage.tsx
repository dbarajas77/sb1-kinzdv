import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Mail, MessageSquare, AlertTriangle } from 'lucide-react';

const NotificationsPage = () => {
  const [preferences, setPreferences] = useState({
    email: {
      projectUpdates: true,
      financialAlerts: true,
      monthlyReports: false,
      securityAlerts: true
    },
    push: {
      projectUpdates: false,
      financialAlerts: true,
      documentUploads: true,
      securityAlerts: true
    }
  });

  const handleToggle = (type: 'email' | 'push', setting: string) => {
    setPreferences(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [setting]: !prev[type][setting as keyof typeof prev.email]
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-3 mb-6">
              <Bell className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Notification Preferences</h1>
            </div>

            {/* Email Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Mail className="h-5 w-5 text-gray-400" />
                <h2 className="text-lg font-medium text-gray-900">Email Notifications</h2>
              </div>
              <div className="space-y-4">
                {Object.entries(preferences.email).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <button
                      onClick={() => handleToggle('email', key)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        value ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        value ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Push Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <MessageSquare className="h-5 w-5 text-gray-400" />
                <h2 className="text-lg font-medium text-gray-900">Push Notifications</h2>
              </div>
              <div className="space-y-4">
                {Object.entries(preferences.push).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <span className="text-gray-700">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <button
                      onClick={() => handleToggle('push', key)}
                      className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        value ? 'bg-blue-600' : 'bg-gray-200'
                      }`}
                    >
                      <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        value ? 'translate-x-5' : 'translate-x-0'
                      }`} />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Important Note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 p-4 bg-yellow-50 rounded-lg"
            >
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium text-yellow-800">Important Note</h3>
                  <p className="mt-1 text-sm text-yellow-700">
                    Security-related notifications cannot be disabled as they are essential for your account's safety.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
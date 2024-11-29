import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Send,
  History, 
  Settings,
  Download,
  Plus,
  FileSpreadsheet,
  LayoutDashboard
} from 'lucide-react';
import FinancialMetrics from '../components/metrics/FinancialMetrics';
import RightPanelMetrics from '../components/metrics/RightPanelMetrics';
import HeaderButton from '../components/buttons/HeaderButton';
import QuickActionsScroll from '../components/QuickActionsScroll';
import UploadArea from '../components/UploadArea';
import CreateScenarioModal from '../components/modals/CreateScenarioModal';
import ReportsModal from '../components/modals/ReportsModal';

const Dashboard = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [showCreateScenario, setShowCreateScenario] = useState(false);
  const [showReports, setShowReports] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    setMessage('');
  };

  return (
    <div className="h-screen flex bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-80 bg-white border-r overflow-y-auto">
        <div className="p-4">
          <UploadArea />
          <div className="mt-6">
            <FinancialMetrics />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b p-4">
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            <div className="flex items-center space-x-4">
              <HeaderButton icon={<History className="h-5 w-5" />} label="My Studies" />
              <HeaderButton icon={<Download className="h-5 w-5" />} label="Downloads" />
              <HeaderButton icon={<Settings className="h-5 w-5" />} label="Settings" />
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowCreateScenario(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
              >
                <Plus className="h-5 w-5" />
                <span>Create Scenario</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/rda-software')}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span>RDA Software</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowReports(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
              >
                <FileSpreadsheet className="h-5 w-5" />
                <span>Reports</span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Chat messages will go here */}
        </div>

        {/* Message Input Area with new background */}
        <div className="fixed bottom-[200px] left-80 right-64 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
          <div className="p-6 backdrop-blur-sm">
            <div className="max-w-3xl mx-auto">
              <QuickActionsScroll />
              <div className="flex space-x-2 mt-6">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Ask about your reserve study..."
                  className="flex-1 rounded-lg border border-gray-300 bg-white/90 backdrop-blur-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-all duration-200"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  onClick={handleSendMessage}
                  className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-64 bg-white border-l overflow-y-auto">
        <div className="p-4">
          <RightPanelMetrics />
        </div>
      </div>

      {/* Modals */}
      <CreateScenarioModal 
        isOpen={showCreateScenario}
        onClose={() => setShowCreateScenario(false)}
      />
      <ReportsModal
        isOpen={showReports}
        onClose={() => setShowReports(false)}
      />
    </div>
  );
};

export default Dashboard;
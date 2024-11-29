import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Brain, MessageSquare, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section - Full width */}
      <div className="relative w-full py-[100px]">
        {/* Background gradient - Full width */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl" />
        </div>

        {/* Content container with max width */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-900">Transform Your HOA's </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Reserve Study</span>
              <br />
              <span className="text-gray-900">with AI-Powered Analysis</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto px-4 sm:px-6">
              Upload your reserve study PDF and get instant insights, recommendations,
              and expert AI guidance to optimize your HOA's financial planning.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Link to="/auth/register">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg relative group transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Free
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Create your free account
                  </span>
                </motion.button>
              </Link>
              <Link to="/dashboard">
                <motion.button
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-300 hover:shadow-lg relative group transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Try Demo
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Access demo dashboard
                  </span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for HOA Management
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to make informed decisions about your reserve study
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<FileText className="h-8 w-8 text-blue-600" />}
            title="PDF Analysis"
            description="Upload and analyze reserve study PDFs with advanced AI technology"
          />
          <FeatureCard
            icon={<Brain className="h-8 w-8 text-blue-600" />}
            title="Smart Insights"
            description="Get detailed analysis and recommendations based on industry best practices"
          />
          <FeatureCard
            icon={<MessageSquare className="h-8 w-8 text-blue-600" />}
            title="AI Chat Assistant"
            description="Chat with our AI to understand your study and explore optimization options"
          />
          <FeatureCard
            icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
            title="Financial Planning"
            description="Optimize your monthly contributions with data-driven scenarios"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default LandingPage;
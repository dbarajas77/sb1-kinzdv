import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Brain, BarChart3, MessageSquare, TrendingUp, Shield, Clock, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <FileText className="h-8 w-8 text-blue-600" />,
    title: 'Smart PDF Analysis',
    description: 'Upload your reserve study PDF and our AI instantly extracts, analyzes, and validates all critical information.',
    details: [
      'Automatic data extraction',
      'Component identification',
      'Cost validation',
      'Timeline analysis'
    ]
  },
  {
    icon: <Brain className="h-8 w-8 text-blue-600" />,
    title: 'AI-Powered Insights',
    description: 'Get intelligent recommendations and identify missing crucial information in your reserve study.',
    details: [
      'Missing component detection',
      'Cost anomaly identification',
      'Industry standard compliance',
      'Risk assessment'
    ]
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: 'Financial Planning',
    description: 'Advanced financial modeling to optimize your HOA\'s reserve fund strategy.',
    details: [
      'Contribution optimization',
      'Scenario planning',
      'Cash flow projections',
      'Investment strategies'
    ]
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-600" />,
    title: 'AI Chat Assistant',
    description: 'Get instant answers about your reserve study from our specialized AI assistant.',
    details: [
      '24/7 availability',
      'Context-aware responses',
      'Historical chat records',
      'Custom recommendations'
    ]
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    title: 'Performance Scoring',
    description: 'Understand how well your reserve study measures up against industry best practices.',
    details: [
      'Comprehensive scoring',
      'Detailed explanations',
      'Improvement suggestions',
      'Benchmark comparisons'
    ]
  },
  {
    icon: <Shield className="h-8 w-8 text-blue-600" />,
    title: 'Secure & Compliant',
    description: 'Your data is protected with enterprise-grade security and compliance measures.',
    details: [
      'Bank-level encryption',
      'SOC 2 compliance',
      'Regular backups',
      'Access controls'
    ]
  },
  {
    icon: <Clock className="h-8 w-8 text-blue-600" />,
    title: 'Historical Tracking',
    description: 'Track changes and updates to your reserve study over time.',
    details: [
      'Version control',
      'Change tracking',
      'Update history',
      'Audit trail'
    ]
  },
  {
    icon: <Download className="h-8 w-8 text-blue-600" />,
    title: 'Export & Reporting',
    description: 'Generate professional reports and export data in multiple formats.',
    details: [
      'Custom report templates',
      'Multiple export formats',
      'Executive summaries',
      'Detailed analysis reports'
    ]
  }
];

const FeaturesPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl mb-6">
            Powerful Features for
            <span className="block text-blue-600">HOA Reserve Management</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500">
            Everything you need to analyze, optimize, and manage your HOA's reserve study with confidence.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail) => (
                  <li key={detail} className="flex items-center text-sm text-gray-500">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to optimize your reserve study?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of HOAs using our AI-powered platform to make better financial decisions.
          </p>
          <Link
            to="/auth/register"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors"
          >
            Get Started Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
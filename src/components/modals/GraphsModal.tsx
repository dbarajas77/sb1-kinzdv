import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, BarChart2, PieChart, TrendingUp, Percent } from 'lucide-react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

interface GraphsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Mock data for the charts
const mockData = {
  annualContribution: {
    labels: Array.from({ length: 30 }, (_, i) => `Year ${i + 1}`),
    datasets: [{
      label: 'Annual Contribution',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100000) + 50000),
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 1
    }]
  },
  annualExpenditure: {
    labels: Array.from({ length: 30 }, (_, i) => `Year ${i + 1}`),
    datasets: [{
      label: 'Annual Expenditure',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 150000) + 25000),
      backgroundColor: 'rgba(239, 68, 68, 0.5)',
      borderColor: 'rgb(239, 68, 68)',
      borderWidth: 1
    }]
  },
  reserveBalance: {
    labels: Array.from({ length: 30 }, (_, i) => `Year ${i + 1}`),
    datasets: [{
      label: 'Year End Reserve Balance',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 500000) + 200000),
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      tension: 0.4,
      fill: true
    }]
  },
  percentFunded: {
    labels: Array.from({ length: 30 }, (_, i) => `Year ${i + 1}`),
    datasets: [{
      label: 'Percent Funded',
      data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 40) + 60),
      borderColor: 'rgb(139, 92, 246)',
      backgroundColor: 'rgba(139, 92, 246, 0.1)',
      tension: 0.4,
      fill: true
    }]
  },
  componentDistribution: {
    labels: ['Roofing', 'HVAC', 'Plumbing', 'Electrical', 'Structural', 'Other'],
    datasets: [{
      data: [30, 20, 15, 12, 13, 10],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(107, 114, 128, 0.8)'
      ]
    }]
  }
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      font: {
        size: 16,
        weight: 'bold'
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const GraphsModal = ({ isOpen, onClose }: GraphsModalProps) => {
  const [activeTab, setActiveTab] = useState('annual-contribution');

  if (!isOpen) return null;

  const tabs = [
    { id: 'annual-contribution', label: 'Annual Contribution', icon: <BarChart2 className="h-5 w-5" /> },
    { id: 'annual-expenditure', label: 'Annual Expenditure', icon: <BarChart2 className="h-5 w-5" /> },
    { id: 'reserve-balance', label: 'Reserve Balance', icon: <TrendingUp className="h-5 w-5" /> },
    { id: 'percent-funded', label: 'Percent Funded', icon: <Percent className="h-5 w-5" /> },
    { id: 'component-distribution', label: 'Component Distribution', icon: <PieChart className="h-5 w-5" /> }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-xl font-semibold">Financial Analysis</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b px-4">
          <div className="flex space-x-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Chart Area */}
        <div className="flex-1 p-6">
          {activeTab === 'annual-contribution' && (
            <div className="h-full">
              <Bar
                data={mockData.annualContribution}
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    title: {
                      ...chartOptions.plugins.title,
                      text: '30-Year Annual Contribution'
                    }
                  }
                }}
              />
            </div>
          )}

          {activeTab === 'annual-expenditure' && (
            <div className="h-full">
              <Bar
                data={mockData.annualExpenditure}
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    title: {
                      ...chartOptions.plugins.title,
                      text: '30-Year Annual Expenditure'
                    }
                  }
                }}
              />
            </div>
          )}

          {activeTab === 'reserve-balance' && (
            <div className="h-full">
              <Line
                data={mockData.reserveBalance}
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    title: {
                      ...chartOptions.plugins.title,
                      text: '30-Year Reserve Balance'
                    }
                  }
                }}
              />
            </div>
          )}

          {activeTab === 'percent-funded' && (
            <div className="h-full">
              <Line
                data={mockData.percentFunded}
                options={{
                  ...chartOptions,
                  plugins: {
                    ...chartOptions.plugins,
                    title: {
                      ...chartOptions.plugins.title,
                      text: '30-Year Percent Funded'
                    }
                  },
                  scales: {
                    y: {
                      beginAtZero: true,
                      max: 100,
                      ticks: {
                        callback: (value) => `${value}%`
                      }
                    }
                  }
                }}
              />
            </div>
          )}

          {activeTab === 'component-distribution' && (
            <div className="h-full flex items-center justify-center">
              <div className="w-4/5 h-4/5">
                <Pie
                  data={mockData.componentDistribution}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'right' as const,
                        labels: {
                          font: {
                            size: 14
                          },
                          padding: 20
                        }
                      },
                      title: {
                        display: true,
                        text: 'Component Cost Distribution',
                        font: {
                          size: 20,
                          weight: 'bold'
                        },
                        padding: {
                          top: 20,
                          bottom: 20
                        }
                      }
                    }
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GraphsModal;
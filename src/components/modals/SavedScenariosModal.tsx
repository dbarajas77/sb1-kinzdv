import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Download, 
  Trash2, 
  Search,
  Plus,
  FileText,
  MessageSquare
} from 'lucide-react';
import ScenarioTranscriptModal from './ScenarioTranscriptModal';

interface ScenarioResults {
  fundingLevel: number;
  monthlyContribution: number;
  yearEndBalance: number;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

interface Scenario {
  id: string;
  name: string;
  date: string;
  description: string;
  results: ScenarioResults;
  messages: Message[];
}

interface SavedScenariosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockScenarios: Scenario[] = [
  {
    id: '1',
    name: 'Increased Contribution Plan',
    date: '2024-02-15',
    description: 'Scenario with 15% increase in monthly contributions to achieve 70% funding level within 5 years.',
    results: {
      fundingLevel: 75,
      monthlyContribution: 110.50,
      yearEndBalance: 750000
    },
    messages: [
      {
        role: 'user',
        content: 'Can you analyze a scenario where we increase monthly contributions by 15%?',
        timestamp: '2024-02-15 10:30 AM'
      },
      {
        role: 'assistant',
        content: 'I\'ll analyze the impact of a 15% increase in monthly contributions.\n\nBased on your current monthly contribution of $96.59 per unit, a 15% increase would result in:\n\n• New monthly contribution: $110.50 per unit\n• Projected funding level: 75% within 5 years\n• Year-end balance: $750,000\n\nThis increase would significantly improve your reserve fund\'s health while remaining manageable for homeowners.',
        timestamp: '2024-02-15 10:30 AM'
      },
      {
        role: 'user',
        content: 'What would be the impact on our funding level over time?',
        timestamp: '2024-02-15 10:31 AM'
      },
      {
        role: 'assistant',
        content: 'Here\'s the projected funding level progression:\n\nYear 1: 65%\nYear 2: 68%\nYear 3: 71%\nYear 4: 73%\nYear 5: 75%\n\nThis gradual improvement would move you from "Fair" to "Strong" funding status, providing better protection against unexpected expenses while maintaining reasonable contribution levels.',
        timestamp: '2024-02-15 10:31 AM'
      }
    ]
  },
  {
    id: '2',
    name: 'Conservative Approach',
    date: '2024-02-14',
    description: 'Maintaining current contribution levels with adjusted inflation rates.',
    results: {
      fundingLevel: 63,
      monthlyContribution: 96.59,
      yearEndBalance: 585171
    },
    messages: [
      {
        role: 'user',
        content: 'What if we maintain our current contribution levels?',
        timestamp: '2024-02-14 2:15 PM'
      },
      {
        role: 'assistant',
        content: 'I\'ll analyze the scenario with current contribution levels.\n\nMaintaining the current monthly contribution of $96.59 per unit would result in:\n\n• Funding level remaining at 63% (Fair)\n• Year-end balance: $585,171\n\nWhile this approach is conservative, it may not provide adequate protection against future expenses.',
        timestamp: '2024-02-14 2:15 PM'
      }
    ]
  },
  {
    id: '3',
    name: 'Aggressive Funding',
    date: '2024-02-13',
    description: 'Accelerated funding plan to reach 100% funded status within 10 years.',
    results: {
      fundingLevel: 85,
      monthlyContribution: 125.75,
      yearEndBalance: 950000
    },
    messages: [
      {
        role: 'user',
        content: 'Can we create a plan to reach 100% funding within 10 years?',
        timestamp: '2024-02-13 3:45 PM'
      },
      {
        role: 'assistant',
        content: 'I\'ll analyze an aggressive funding strategy.\n\nTo reach 100% funding within 10 years, you would need:\n\n• Monthly contribution increase to $125.75 per unit\n• Projected funding level: 85% by year 5, 100% by year 10\n• Year-end balance: $950,000\n\nThis approach provides maximum financial security but requires higher monthly contributions.',
        timestamp: '2024-02-13 3:45 PM'
      }
    ]
  }
];

const ScenarioCard = ({ 
  scenario, 
  onDownload, 
  onDelete,
  onViewTranscript
}: { 
  scenario: Scenario;
  onDownload: (scenario: Scenario) => void;
  onDelete: (id: string) => void;
  onViewTranscript: () => void;
}) => {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
    >
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{scenario.name}</h3>
            <p className="text-sm text-gray-500">{new Date(scenario.date).toLocaleDateString()}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDownload(scenario);
              }}
              className="p-1 hover:bg-blue-100 rounded-full transition-colors"
            >
              <Download className="h-4 w-4 text-blue-600" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowDeleteConfirm(true);
              }}
              className="p-1 hover:bg-red-100 rounded-full transition-colors"
            >
              <Trash2 className="h-4 w-4 text-red-600" />
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">{scenario.description}</p>

        {/* Results summary */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="text-center p-2 bg-blue-50 rounded-lg">
            <div className="text-sm text-gray-500">Funding Level</div>
            <div className="font-semibold text-blue-600">{scenario.results.fundingLevel}%</div>
          </div>
          <div className="text-center p-2 bg-green-50 rounded-lg">
            <div className="text-sm text-gray-500">Monthly</div>
            <div className="font-semibold text-green-600">${scenario.results.monthlyContribution}</div>
          </div>
          <div className="text-center p-2 bg-purple-50 rounded-lg col-span-2">
            <div className="text-sm text-gray-500">Year-End Balance</div>
            <div className="font-semibold text-purple-600">${scenario.results.yearEndBalance.toLocaleString()}</div>
          </div>
        </div>

        {/* View transcript button */}
        <button
          onClick={onViewTranscript}
          className="w-full mt-4 flex items-center justify-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <MessageSquare className="h-4 w-4" />
          <span>View Analysis</span>
        </button>
      </div>

      {/* Delete confirmation */}
      {showDeleteConfirm && (
        <div className="p-4 border-t bg-red-50">
          <p className="text-sm text-red-700 mb-2">Delete this scenario?</p>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                onDelete(scenario.id);
                setShowDeleteConfirm(false);
              }}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
            >
              Delete
            </button>
            <button
              onClick={() => setShowDeleteConfirm(false)}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const SavedScenariosModal = ({ isOpen, onClose }: SavedScenariosModalProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  if (!isOpen) return null;

  const filteredScenarios = mockScenarios.filter(scenario =>
    scenario.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    scenario.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = (scenario: Scenario) => {
    console.log('Downloading scenario:', scenario);
    alert('Scenario report downloaded successfully!');
  };

  const handleDelete = (scenarioId: string) => {
    console.log('Deleting scenario:', scenarioId);
    alert('Scenario deleted successfully!');
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-5xl h-[90vh] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileText className="h-6 w-6 text-blue-600" />
              <h2 className="text-xl font-semibold">Saved Scenarios</h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Search */}
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search scenarios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Scenario grid */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Create New Scenario Card */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 aspect-square flex flex-col items-center justify-center cursor-pointer border-2 border-dashed border-gray-300"
              >
                <Plus className="h-12 w-12 text-gray-400 mb-2" />
                <p className="text-gray-600 font-medium">Create New Scenario</p>
              </motion.div>

              {/* Scenario Cards */}
              {filteredScenarios.map((scenario) => (
                <ScenarioCard
                  key={scenario.id}
                  scenario={scenario}
                  onDownload={handleDownload}
                  onDelete={handleDelete}
                  onViewTranscript={() => setSelectedScenario(scenario)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <ScenarioTranscriptModal
        isOpen={!!selectedScenario}
        onClose={() => setSelectedScenario(null)}
        scenario={selectedScenario}
      />
    </>
  );
};

export default SavedScenariosModal;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain,
  BarChart2,
  Image,
  FileText,
  Clock,
  Receipt,
  Layers,
  Save
} from 'lucide-react';
import VendorInvoicesModal from '../modals/VendorInvoicesModal';
import CommunityPhotosModal from '../modals/CommunityPhotosModal';
import ProjectsModal from '../modals/ProjectsModal';
import ComponentsModal from '../modals/ComponentsModal';
import GraphsModal from '../modals/GraphsModal';
import AnalysisModal from '../modals/AnalysisModal';
import SavedScenariosModal from '../modals/SavedScenariosModal';

interface MetricItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
  onClick?: () => void;
}

const MetricItem = ({ icon, title, description, accentColor, onClick }: MetricItemProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={`p-4 ${accentColor} rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer`}
    onClick={onClick}
  >
    <div className="flex items-start space-x-3">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </motion.div>
);

const RightPanelMetrics = () => {
  const [isVendorInvoicesOpen, setIsVendorInvoicesOpen] = useState(false);
  const [isCommunityPhotosOpen, setIsCommunityPhotosOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);
  const [isGraphsOpen, setIsGraphsOpen] = useState(false);
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const [isSavedScenariosOpen, setIsSavedScenariosOpen] = useState(false);

  const metrics = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Analysis Section",
      description: "AI-powered analysis of your reserve study data",
      accentColor: "bg-blue-50",
      onClick: () => setIsAnalysisOpen(true)
    },
    {
      icon: <BarChart2 className="h-5 w-5" />,
      title: "Graphs",
      description: "Visual representation of financial data",
      accentColor: "bg-purple-50",
      onClick: () => setIsGraphsOpen(true)
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "Components",
      description: "Detailed component analysis and tracking",
      accentColor: "bg-green-50",
      onClick: () => setIsComponentsOpen(true)
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Projects",
      description: "Timeline of upcoming replacements",
      accentColor: "bg-yellow-50",
      onClick: () => setIsProjectsOpen(true)
    },
    {
      icon: <Image className="h-5 w-5" />,
      title: "Community Photos",
      description: "Photo documentation of community assets",
      accentColor: "bg-indigo-50",
      onClick: () => setIsCommunityPhotosOpen(true)
    },
    {
      icon: <Receipt className="h-5 w-5" />,
      title: "HOA Documents",
      description: "Track and manage HOA documents and records",
      accentColor: "bg-pink-50",
      onClick: () => setIsVendorInvoicesOpen(true)
    },
    {
      icon: <Save className="h-5 w-5" />,
      title: "Saved Scenarios",
      description: "View and compare different funding scenarios",
      accentColor: "bg-amber-50",
      onClick: () => setIsSavedScenariosOpen(true)
    }
  ];

  return (
    <>
      <div className="space-y-3">
        {metrics.map((metric, index) => (
          <MetricItem
            key={index}
            icon={metric.icon}
            title={metric.title}
            description={metric.description}
            accentColor={metric.accentColor}
            onClick={metric.onClick}
          />
        ))}
      </div>

      <VendorInvoicesModal 
        isOpen={isVendorInvoicesOpen}
        onClose={() => setIsVendorInvoicesOpen(false)}
      />

      <CommunityPhotosModal
        isOpen={isCommunityPhotosOpen}
        onClose={() => setIsCommunityPhotosOpen(false)}
      />

      <ProjectsModal
        isOpen={isProjectsOpen}
        onClose={() => setIsProjectsOpen(false)}
      />

      <ComponentsModal
        isOpen={isComponentsOpen}
        onClose={() => setIsComponentsOpen(false)}
      />

      <GraphsModal
        isOpen={isGraphsOpen}
        onClose={() => setIsGraphsOpen(false)}
      />

      <AnalysisModal
        isOpen={isAnalysisOpen}
        onClose={() => setIsAnalysisOpen(false)}
      />

      <SavedScenariosModal
        isOpen={isSavedScenariosOpen}
        onClose={() => setIsSavedScenariosOpen(false)}
      />
    </>
  );
};

export default RightPanelMetrics;
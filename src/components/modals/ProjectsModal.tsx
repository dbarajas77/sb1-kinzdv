import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  FileText,
  Clock,
  CheckSquare,
  AlertTriangle
} from 'lucide-react';
import type { Project } from '../../data/mockProjects';
import { mockProjects } from '../../data/mockProjects';
import ProjectCard from '../ProjectCard';
import ProjectDetailsModal from './ProjectDetailsModal';

interface ProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const tabs = [
  { id: 'all', label: 'All Projects', icon: <FileText className="h-5 w-5" /> },
  { id: 'in-progress', label: 'In Progress', icon: <Clock className="h-5 w-5" /> },
  { id: 'completed', label: 'Completed', icon: <CheckSquare className="h-5 w-5" /> }
];

const ProjectsModal = ({ isOpen, onClose }: ProjectsModalProps) => {
  const [activeTab, setActiveTab] = useState('all');
  const [projects, setProjects] = useState<Project[]>(mockProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showProjectDetails, setShowProjectDetails] = useState(false);

  const pendingProjects = projects.filter(p => p.status === 'pending');
  const inProgressProjects = projects.filter(p => p.status === 'in progress');
  const completedProjects = projects.filter(p => p.status === 'completed');

  const handleStartProject = (project: Project) => {
    setSelectedProject(project);
    setShowProjectDetails(true);
  };

  const handleCompleteProject = (projectId: string) => {
    if (!projects.find(p => p.id === projectId)?.documents.some(d => d.type === 'invoice')) {
      alert('Please upload an invoice before completing the project.');
      return;
    }

    setProjects(prev => prev.map(p => 
      p.id === projectId ? { ...p, status: 'completed', progress: 100 } : p
    ));
    setActiveTab('completed');
  };

  const handleProjectDetailsClose = (shouldStart?: boolean) => {
    if (shouldStart && selectedProject) {
      setProjects(prev => prev.map(p => 
        p.id === selectedProject.id ? { ...p, status: 'in progress', progress: 0 } : p
      ));
      setActiveTab('in-progress');
    }
    setShowProjectDetails(false);
    setSelectedProject(null);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-6xl h-[90vh] flex flex-col">
          {/* Header */}
          <div className="p-4 border-b flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Projects for 2024</h2>
              <p className="text-sm text-gray-500">Timeline of upcoming replacements</p>
            </div>
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

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-8">
              {/* All Projects */}
              {activeTab === 'all' && (
                <div>
                  <div className="grid grid-cols-1 gap-4">
                    {pendingProjects.map(project => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        onStartProject={() => handleStartProject(project)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* In Progress */}
              {activeTab === 'in-progress' && (
                <div>
                  <div className="grid grid-cols-1 gap-4">
                    {inProgressProjects.map(project => (
                      <div key={project.id} className="bg-white rounded-lg shadow-sm p-4 border">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-medium">{project.name}</h3>
                            <p className="text-gray-600 mt-1">{project.description}</p>
                            <div className="mt-4">
                              <div className="flex items-center space-x-2 text-sm text-gray-500">
                                <span>Due: {new Date(project.dueDate).toLocaleDateString()}</span>
                                <span>•</span>
                                <span>${project.estimatedCost.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => handleCompleteProject(project.id)}
                            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                          >
                            Complete Project
                          </button>
                        </div>
                        {!project.documents.some(d => d.type === 'invoice') && (
                          <div className="mt-4 flex items-center space-x-2 text-yellow-600 bg-yellow-50 p-3 rounded-lg">
                            <AlertTriangle className="h-5 w-5" />
                            <span className="text-sm">Please upload an invoice to complete this project</span>
                          </div>
                        )}
                      </div>
                    ))}
                    {inProgressProjects.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        No projects in progress
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Completed */}
              {activeTab === 'completed' && (
                <div>
                  <div className="grid grid-cols-1 gap-4">
                    {completedProjects.map(project => (
                      <div key={project.id} className="bg-white rounded-lg shadow-sm p-4 border">
                        <h3 className="text-lg font-medium">{project.name}</h3>
                        <p className="text-gray-600 mt-1">{project.description}</p>
                        <div className="mt-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <span>Completed: {new Date(project.dueDate).toLocaleDateString()}</span>
                            <span>•</span>
                            <span>${project.estimatedCost.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                    {completedProjects.length === 0 && (
                      <div className="text-center py-8 text-gray-500">
                        No completed projects
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showProjectDetails && selectedProject && (
        <ProjectDetailsModal
          isOpen={true}
          onClose={() => handleProjectDetailsClose()}
          project={selectedProject}
          onUploadDocument={(file, type) => {
            console.log('Uploading document:', file, type);
            // Here you would typically handle the file upload
            handleProjectDetailsClose(true);
          }}
          showStartButton
          onStartProject={() => handleProjectDetailsClose(true)}
        />
      )}
    </>
  );
};

export default ProjectsModal;
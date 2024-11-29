import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Image, FileText } from 'lucide-react';
import type { Project } from '../data/mockProjects';

interface ProjectCardProps {
  project: Project;
  onStartProject?: () => void;
  onCompleteProject?: () => void;
  onViewDetails?: () => void;
}

const ProjectCard = ({
  project,
  onStartProject,
  onCompleteProject,
  onViewDetails
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 overflow-hidden"
    >
      <div className="flex">
        {/* Project Image - Thumbnail size */}
        <div className="w-32 h-32 flex-shrink-0 relative bg-gray-100">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={project.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Image className="h-12 w-12 text-gray-400" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-4">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-medium text-lg">{project.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{project.description}</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            {/* Project cost */}
            <div className="flex items-center space-x-2">
              <DollarSign className="h-5 w-5 text-blue-600" />
              <span className="text-lg font-semibold text-blue-600">
                ${project.estimatedCost.toLocaleString()}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              {/* Start Project button */}
              {project.status === 'pending' && onStartProject && (
                <button
                  onClick={onStartProject}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FileText className="h-5 w-5" />
                  <span>Start Project</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
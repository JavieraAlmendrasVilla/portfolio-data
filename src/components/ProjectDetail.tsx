import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back button */}
      <div className="p-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </button>
      </div>

      {/* Split layout */}
      <div className="flex h-[calc(100vh-120px)]">
        {/* Left side - Project description */}
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="max-w-lg">
            <div className="mb-6">
              <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full mb-4">
                {project.category}
              </span>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            </div>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              {project.longDescription}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-black text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Code Link */}
            {project.codeUrl && (
              <div className="mb-8">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  <Github size={20} />
                  <span>View Source Code</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Image slider */}
        <div className="w-1/2 bg-gray-50 relative flex items-center justify-center">
          <div className="relative w-full h-full max-w-2xl mx-auto">
            {/* Main image */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="relative w-full h-full bg-white rounded-lg shadow-2xl overflow-hidden">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation arrows */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Image indicators */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentImageIndex === index ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
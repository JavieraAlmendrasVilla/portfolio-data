import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface LandingPageProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ projects, onProjectSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerView = 3;
  const maxIndex = Math.max(0, projects.length - projectsPerView);

  const nextProjects = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevProjects = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      {/* Name and Title */}
      <div className="text-center mb-16">
        <h1 className="text-8xl md:text-9xl font-bold mb-4 tracking-tight">
          JAVIERA ALMENDRAS VILLA
        </h1>
        <div className="w-64 h-1 bg-black mx-auto mb-6"></div>
        <p className="text-2xl font-light text-gray-600 mb-3">Data Professional</p>
        <p className="text-lg text-gray-500 mb-2">M.Sc. Management & Technology</p>
        <p className="text-lg text-gray-500 mb-2">Technical University of Munich (TUM)</p>
        <p className="text-lg text-gray-500 mb-6">Based in Germany</p>
        
        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">Python</span>
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">SQL</span>
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">R</span>
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">FastAPI</span>
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">LangChain</span>
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">Machine Learning</span>
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">Data Visualization</span>
          <span className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">LLMs</span>
        </div>
      </div>

      {/* Projects Carousel */}
      <div className="relative w-full max-w-6xl mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <div className="flex space-x-2">
            <button
              onClick={prevProjects}
              disabled={currentIndex === 0}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProjects}
              disabled={currentIndex >= maxIndex}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)` }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-1/3 px-4 group"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <div 
                    className="aspect-w-16 aspect-h-9 bg-gray-200 cursor-pointer"
                    onClick={() => onProjectSelect(project)}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 
                      className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors cursor-pointer"
                      onClick={() => onProjectSelect(project)}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center space-x-1 text-black hover:text-gray-600 transition-colors text-sm font-medium"
                        >
                          <Github size={16} />
                          <span>Code</span>
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Social Links Footer */}
      <div className="mt-auto pb-8">
        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/in/javiera-almendras-villa/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          
          <a
            href="https://github.com/JavieraAlmendrasVilla"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full bg-gray-100 hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <Github size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Github, ExternalLink, Clock, Calendar, FolderOpen, ChevronDown } from 'lucide-react';
import { Project } from '../types';

interface LandingPageProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ projects, onProjectSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const projectsPerView = 3;
  
  // Split projects into featured and non-featured
  const featuredProjects = projects.filter(project => project.featured);
  const nonFeaturedProjects = projects.filter(project => !project.featured);
  
  // Get 3 most recent projects (assuming higher ID means more recent)
  const recentProjects = useMemo(() => {
    return [...projects]
      .sort((a, b) => parseInt(b.id) - parseInt(a.id))
      .slice(0, 3);
  }, [projects]);
  
  // Get all unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [projects]);

  // Group projects by category for sidebar
  const projectsByCategory = useMemo(() => {
    const grouped: { [key: string]: Project[] } = {};
    projects.forEach(project => {
      if (!grouped[project.category]) {
        grouped[project.category] = [];
      }
      grouped[project.category].push(project);
    });
    
    // Sort categories alphabetically and projects within each category by ID (newest first)
    const sortedCategories = Object.keys(grouped).sort();
    const result: { [key: string]: Project[] } = {};
    sortedCategories.forEach(category => {
      result[category] = grouped[category].sort((a, b) => parseInt(b.id) - parseInt(a.id));
    });
    
    return result;
  }, [projects]);
  
  const maxIndex = Math.max(0, featuredProjects.length - projectsPerView);

  const nextProjects = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevProjects = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(category)) {
      newExpanded.delete(category);
    } else {
      newExpanded.add(category);
    }
    setExpandedCategories(newExpanded);
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar for All Projects */}
      <div className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-40 transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } w-80 pt-20`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">All Projects</h3>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto">
            {Object.entries(projectsByCategory).map(([category, categoryProjects]) => (
              <div key={category} className="space-y-2">
                {/* Category Header - Collapsible */}
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="flex items-center space-x-2">
                    <FolderOpen size={16} className="text-gray-600" />
                    <h4 className="font-semibold text-gray-800">{category}</h4>
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      {categoryProjects.length}
                    </span>
                  </div>
                  <ChevronDown 
                    size={16} 
                    className={`text-gray-600 transition-transform duration-200 ${
                      expandedCategories.has(category) ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {/* Projects in Category - Collapsible */}
                {expandedCategories.has(category) && (
                  <div className="space-y-2 ml-6 animate-fade-in">
                    {categoryProjects.map((project) => (
                      <div
                        key={project.id}
                        onClick={() => {
                          onProjectSelect(project);
                          setSidebarOpen(false);
                        }}
                        className="p-3 border border-gray-100 rounded-lg hover:border-black hover:shadow-md transition-all cursor-pointer group"
                      >
                        <div className="flex items-start space-x-3">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-10 h-10 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h5 className="font-medium text-sm group-hover:text-gray-600 transition-colors line-clamp-2">
                              {project.title}
                            </h5>
                            <div className="flex items-center space-x-2 mt-1">
                              {project.featured && (
                                <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                                  Featured
                                </span>
                              )}
                              <span className="text-xs text-gray-500">
                                {project.technologies.slice(0, 2).join(', ')}
                                {project.technologies.length > 2 && '...'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className={`fixed left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all z-30 ${
          sidebarOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <ChevronRight size={20} />
      </button>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'ml-80' : 'ml-0'}`}>
        <div className="flex flex-col justify-center items-center px-6 min-h-screen">
          {/* Profile Picture and Name Section */}
          <div className="text-center mb-16">
            {/* Profile Picture */}
            <div className="mb-8">
              <img
                src="https://raw.githubusercontent.com/JavieraAlmendrasVilla/portfolio-data/main/src/images/CV.jpeg"
                alt="Javiera Almendras Villa"
                className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg"
              />
            </div>
            
            <h1 className="text-8xl md:text-9xl font-bold mb-4 tracking-tight">
              JAVIERA ALMENDRAS VILLA
            </h1>
            <div className="w-64 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-2xl font-light text-gray-600 mb-3">Data Professional</p>
            <p className="text-lg text-gray-500 mb-2">M.Sc. Management & Technology</p>
            <p className="text-lg text-gray-500 mb-2">Technical University of Munich (TUM)</p>
            <p className="text-lg text-gray-500 mb-6">Based in Germany</p>
            
            {/* Technical Skills */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Technical Skills</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                {allTechnologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Projects Carousel */}
          {featuredProjects.length > 0 && (
            <div className="relative w-full max-w-6xl mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-semibold">Featured Projects</h2>
                {featuredProjects.length > projectsPerView && (
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
                )}
              </div>

              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * (100 / projectsPerView)}%)` }}
                >
                  {featuredProjects.map((project) => (
                    <div
                      key={project.id}
                      className="flex-shrink-0 w-1/3 px-4 group"
                    >
                      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                        <div 
                          className="h-64 bg-gray-200 cursor-pointer flex-shrink-0"
                          onClick={() => onProjectSelect(project)}
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 
                            className="text-xl font-semibold mb-2 group-hover:text-gray-600 transition-colors cursor-pointer line-clamp-2"
                            onClick={() => onProjectSelect(project)}
                          >
                            {project.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                            {project.description}
                          </p>
                          
                          {/* Category */}
                          <div className="mb-3">
                            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                              {project.category}
                            </span>
                          </div>

                          {/* Main Technologies */}
                          <div className="mb-4">
                            <div className="flex flex-wrap gap-1">
                              {project.technologies.slice(0, 3).map((tech, index) => (
                                <span
                                  key={index}
                                  className="bg-black text-white text-xs px-2 py-1 rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                              {project.technologies.length > 3 && (
                                <span className="text-xs text-gray-500 px-2 py-1">
                                  +{project.technologies.length - 3}
                                </span>
                              )}
                            </div>
                          </div>
                          
                          {/* Code Link */}
                          {project.codeUrl && (
                            <div className="pt-3 border-t border-gray-100 mt-auto">
                              <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center space-x-1 text-black hover:text-gray-600 transition-colors text-sm font-medium"
                              >
                                <Github size={16} />
                                <span>View Code</span>
                                <ExternalLink size={12} />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project indicators */}
              {featuredProjects.length > projectsPerView && (
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
              )}
            </div>
          )}

          {/* Recent Projects Section */}
          {recentProjects.length > 0 && (
            <div className="w-full max-w-6xl mb-16">
              <div className="mb-8">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Clock size={20} className="text-gray-600" />
                  <h2 className="text-3xl font-semibold text-center">Latest Projects</h2>
                </div>
                <p className="text-center text-gray-600">My most recent work</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group relative"
                  >
                    {/* Recent badge */}
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full z-10 font-medium">
                        Latest
                      </div>
                    )}
                    
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full flex flex-col">
                      <div 
                        className="h-48 bg-gray-200 cursor-pointer flex-shrink-0 relative"
                        onClick={() => onProjectSelect(project)}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        {project.featured && (
                          <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <h3 
                          className="text-lg font-semibold mb-2 group-hover:text-gray-600 transition-colors cursor-pointer line-clamp-2"
                          onClick={() => onProjectSelect(project)}
                        >
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                          {project.description}
                        </p>
                        
                        {/* Category */}
                        <div className="mb-3">
                          <span className="inline-block bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">
                            {project.category}
                          </span>
                        </div>

                        {/* Main Technologies */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.slice(0, 2).map((tech, index) => (
                              <span
                                key={index}
                                className="bg-black text-white text-xs px-2 py-1 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 2 && (
                              <span className="text-xs text-gray-500 px-2 py-1">
                                +{project.technologies.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        {/* Code Link */}
                        {project.codeUrl && (
                          <div className="pt-3 border-t border-gray-100 mt-auto">
                            <a
                              href={project.codeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex items-center space-x-1 text-black hover:text-gray-600 transition-colors text-sm font-medium"
                            >
                              <Github size={16} />
                              <span>View Code</span>
                              <ExternalLink size={12} />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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
      </div>
    </div>
  );
};

export default LandingPage;
import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProjectDetail from './components/ProjectDetail';
import AboutMe from './components/AboutMe';
import { projects } from './data/projects';
import { Project } from './types';

function App() {
  const [currentSection, setCurrentSection] = useState<'landing' | 'about' | 'projects'>('landing');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setCurrentSection('projects');
  };

  const handleBackToLanding = () => {
    setSelectedProject(null);
    setCurrentSection('landing');
  };

  const handleNavigationChange = (section: 'about' | 'projects') => {
    if (section === 'projects') {
      setCurrentSection('landing');
      setSelectedProject(null);
    } else {
      setCurrentSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-yanone">
      <Header 
        currentSection={currentSection}
        onNavigationChange={handleNavigationChange}
      />
      
      <main className="pt-20">
        {currentSection === 'landing' && (
          <LandingPage 
            projects={projects}
            onProjectSelect={handleProjectSelect}
          />
        )}
        
        {currentSection === 'about' && (
          <AboutMe />
        )}
        
        {currentSection === 'projects' && selectedProject && (
          <ProjectDetail 
            project={selectedProject}
            onBack={handleBackToLanding}
          />
        )}
      </main>
    </div>
  );
}

export default App;
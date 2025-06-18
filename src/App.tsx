import React, { useState } from 'react';
import { Header } from './components/Header';
import LandingPage from './components/LandingPage';
import ProjectDetail from './components/ProjectDetail';
import AboutMe from './components/AboutMe';
import AdminPanel from './components/AdminPanel';
import { projects as initialProjects } from './data/projects';
import { aboutSections as initialAboutSections } from './data/about';
import { Project, AboutSection } from './types';

function App() {
  const [currentSection, setCurrentSection] = useState<'landing' | 'about' | 'projects'>('landing');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [aboutSections, setAboutSections] = useState<AboutSection[]>(initialAboutSections);

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

  const handleUpdateProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
  };

  const handleUpdateAboutSections = (updatedSections: AboutSection[]) => {
    setAboutSections(updatedSections);
  };

  return (
    <div className="min-h-screen bg-white text-black font-yanone">
      <Header 
        currentSection={currentSection}
        onNavigationChange={handleNavigationChange}
        onAdminToggle={() => setShowAdmin(!showAdmin)}
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

      {showAdmin && (
        <AdminPanel
          projects={projects}
          aboutSections={aboutSections}
          onUpdateProjects={handleUpdateProjects}
          onUpdateAboutSections={handleUpdateAboutSections}
          onClose={() => setShowAdmin(false)}
        />
      )}
    </div>
  );
}

export default App;
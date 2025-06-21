import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import LandingPage from './components/LandingPage';
import ProjectDetail from './components/ProjectDetail';
import CategoryView from './components/CategoryView';
import AboutMe from './components/AboutMe';
import AdminPanel from './components/AdminPanel';
import { projects as initialProjects } from './data/projects';
import { aboutSections as initialAboutSections } from './data/about';
import { Project, AboutSection } from './types';

function App() {
  const [currentSection, setCurrentSection] = useState<'landing' | 'about' | 'projects' | 'category'>('landing');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [aboutSections, setAboutSections] = useState<AboutSection[]>(initialAboutSections);

  // Get unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(projects.map(project => project.category))];
    return uniqueCategories.sort();
  }, [projects]);

  // Filter projects by selected category
  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return projects;
    return projects.filter(project => project.category === selectedCategory);
  }, [projects, selectedCategory]);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setCurrentSection('projects');
  };

  const handleBackToLanding = () => {
    setSelectedProject(null);
    setCurrentSection('landing');
  };

  const handleBackToCategory = () => {
    setSelectedProject(null);
    if (selectedCategory) {
      setCurrentSection('category');
    } else {
      setCurrentSection('landing');
    }
  };

  const handleNavigationChange = (section: 'about' | 'projects' | 'category', category?: string) => {
    if (section === 'projects') {
      setCurrentSection('landing');
      setSelectedProject(null);
      setSelectedCategory(null);
    } else if (section === 'category' && category) {
      setCurrentSection('category');
      setSelectedCategory(category);
      setSelectedProject(null);
    } else {
      setCurrentSection(section);
      setSelectedProject(null);
      setSelectedCategory(null);
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
        categories={categories}
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
        
        {currentSection === 'category' && selectedCategory && (
          <CategoryView
            category={selectedCategory}
            projects={filteredProjects}
            onProjectSelect={handleProjectSelect}
            onBack={() => handleNavigationChange('projects')}
          />
        )}
        
        {currentSection === 'projects' && selectedProject && (
          <ProjectDetail 
            project={selectedProject}
            onBack={selectedCategory ? handleBackToCategory : handleBackToLanding}
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
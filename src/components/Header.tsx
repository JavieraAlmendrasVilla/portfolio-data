import React from 'react';
import { User, FolderOpen } from 'lucide-react';

interface HeaderProps {
  currentSection: 'landing' | 'about' | 'projects';
  onNavigationChange: (section: 'about' | 'projects') => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, onNavigationChange }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex justify-center space-x-8">
          <button
            onClick={() => onNavigationChange('about')}
            className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-100 ${
              currentSection === 'about' 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'text-black hover:text-gray-700'
            }`}
          >
            <User size={20} />
            <span className="font-medium text-lg">About Me</span>
          </button>
          
          <button
            onClick={() => onNavigationChange('projects')}
            className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-100 ${
              currentSection === 'projects' || currentSection === 'landing'
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'text-black hover:text-gray-700'
            }`}
          >
            <FolderOpen size={20} />
            <span className="font-medium text-lg">Projects</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
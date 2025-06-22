import React, { useState, useRef, useEffect } from 'react';
import { User, FolderOpen, Settings, ChevronDown, Mail, FileText, Home } from 'lucide-react';

interface HeaderProps {
  currentSection: 'landing' | 'about' | 'projects' | 'category' | 'contact' | 'posts';
  onNavigationChange: (section: 'about' | 'projects' | 'category' | 'contact' | 'posts', category?: string) => void;
  onAdminToggle: () => void;
  categories: string[];
}

export const Header: React.FC<HeaderProps> = ({ 
  currentSection, 
  onNavigationChange, 
  onAdminToggle, 
  categories 
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategorySelect = (category: string) => {
    setShowDropdown(false);
    onNavigationChange('category', category);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex justify-center space-x-8 relative">
          <button
            onClick={() => onNavigationChange('projects')}
            className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-100 ${
              currentSection === 'landing' 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'text-black hover:text-gray-700'
            }`}
          >
            <Home size={20} />
            <span className="font-medium text-lg">Home</span>
          </button>

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
          
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-100 ${
                currentSection === 'projects' || currentSection === 'category'
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'text-black hover:text-gray-700'
              }`}
            >
              <FolderOpen size={20} />
              <span className="font-medium text-lg">Projects</span>
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-200 ${showDropdown ? 'rotate-180' : ''}`}
              />
            </button>

            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-48 z-50">
                <button
                  onClick={() => {
                    setShowDropdown(false);
                    onNavigationChange('projects');
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700 hover:text-black"
                >
                  All Projects
                </button>
                <div className="border-t border-gray-100 my-1"></div>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors text-gray-700 hover:text-black"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigationChange('posts')}
            className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-100 ${
              currentSection === 'posts' 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'text-black hover:text-gray-700'
            }`}
          >
            <FileText size={20} />
            <span className="font-medium text-lg">Posts</span>
          </button>

          <button
            onClick={() => onNavigationChange('contact')}
            className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-all duration-300 hover:bg-gray-100 ${
              currentSection === 'contact' 
                ? 'bg-black text-white hover:bg-gray-800' 
                : 'text-black hover:text-gray-700'
            }`}
          >
            <Mail size={20} />
            <span className="font-medium text-lg">Contact</span>
          </button>

          {/* Admin button - positioned absolutely to the right */}
          {/*<button
            onClick={onAdminToggle}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all duration-300"
            title="Admin Panel"
          >
            <Settings size={20} />
          </button>*/}
        </nav>
      </div>
    </header>
  );
};
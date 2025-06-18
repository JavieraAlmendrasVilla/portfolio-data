import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { aboutSections } from '../data/about';

const AboutMe: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const nextPage = () => {
    if (currentPage < aboutSections.length - 1) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev + 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentPage(prev => prev - 1);
        setIsFlipping(false);
      }, 300);
    }
  };

  const currentSection = aboutSections[currentPage];

  // Function to render text with bold formatting
  const renderTextWithBold = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full">
        {/* Book container */}
        <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden" style={{ height: '600px' }}>
          {/* Page content */}
          <div 
            className={`absolute inset-0 transition-transform duration-300 ${
              isFlipping ? 'scale-95 opacity-80' : 'scale-100 opacity-100'
            }`}
          >
            <div className="flex h-full">
              {/* Left page - Image or decorative content */}
              <div className="w-1/2 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8">
                {currentSection.image ? (
                  <div className="w-full h-full max-w-sm mx-auto">
                    <img
                      src={currentSection.image}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-600">
                        {currentSection.title.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-700">
                      {currentSection.title}
                    </h3>
                  </div>
                )}
              </div>

              {/* Right page - Content */}
              <div className="w-1/2 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-black">
                  {currentSection.title}
                </h2>
                
                <div className="text-gray-700 leading-relaxed space-y-4 overflow-y-auto">
                  {Array.isArray(currentSection.content) ? (
                    currentSection.content.map((paragraph, index) => (
                      <p key={index} className={paragraph === '' ? 'h-4' : ''}>
                        {paragraph === '' ? '' : renderTextWithBold(paragraph)}
                      </p>
                    ))
                  ) : (
                    <p>{renderTextWithBold(currentSection.content)}</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-2 rounded-full bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {aboutSections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsFlipping(true);
                    setTimeout(() => {
                      setCurrentPage(index);
                      setIsFlipping(false);
                    }, 300);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentPage === index ? 'bg-black' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextPage}
              disabled={currentPage === aboutSections.length - 1}
              className="p-2 rounded-full bg-black text-white hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Page number */}
          <div className="absolute top-6 right-8 text-sm text-gray-500">
            Page {currentPage + 1} of {aboutSections.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
import React, { useState } from 'react';
import { Upload, Save, Edit3, X, Plus, Trash2, AlertCircle } from 'lucide-react';
import { Project, AboutSection } from '../types';

interface AdminPanelProps {
  projects: Project[];
  aboutSections: AboutSection[];
  onUpdateProjects: (projects: Project[]) => void;
  onUpdateAboutSections: (sections: AboutSection[]) => void;
  onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({
  projects,
  aboutSections,
  onUpdateProjects,
  onUpdateAboutSections,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'about'>('projects');
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [editingAbout, setEditingAbout] = useState<AboutSection | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const [showImageUrlInput, setShowImageUrlInput] = useState<{type: 'project' | 'about' | 'project-gallery', index?: number} | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, type: 'project' | 'about', index?: number) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      
      if (type === 'project' && editingProject) {
        if (index !== undefined) {
          const newImages = [...editingProject.images];
          newImages[index] = imageUrl;
          setEditingProject({ ...editingProject, images: newImages });
        } else {
          setEditingProject({ ...editingProject, image: imageUrl });
        }
      } else if (type === 'about' && editingAbout) {
        setEditingAbout({ ...editingAbout, image: imageUrl });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleImageUrlSubmit = () => {
    if (!imageUrl.trim() || !showImageUrlInput) return;

    const { type, index } = showImageUrlInput;
    
    if (type === 'project' && editingProject) {
      if (index !== undefined) {
        const newImages = [...editingProject.images];
        newImages[index] = imageUrl;
        setEditingProject({ ...editingProject, images: newImages });
      } else {
        setEditingProject({ ...editingProject, image: imageUrl });
      }
    } else if (type === 'project-gallery' && editingProject) {
      setEditingProject({
        ...editingProject,
        images: [...editingProject.images, imageUrl]
      });
    } else if (type === 'about' && editingAbout) {
      setEditingAbout({ ...editingAbout, image: imageUrl });
    }

    setImageUrl('');
    setShowImageUrlInput(null);
  };

  const saveProject = () => {
    if (!editingProject) return;
    
    const updatedProjects = projects.map(p => 
      p.id === editingProject.id ? editingProject : p
    );
    onUpdateProjects(updatedProjects);
    setEditingProject(null);
  };

  const saveAboutSection = () => {
    if (!editingAbout) return;
    
    const updatedSections = aboutSections.map(s => 
      s.id === editingAbout.id ? editingAbout : s
    );
    onUpdateAboutSections(updatedSections);
    setEditingAbout(null);
  };

  const removeProjectImage = (index: number) => {
    if (!editingProject) return;
    const newImages = editingProject.images.filter((_, i) => i !== index);
    setEditingProject({ ...editingProject, images: newImages });
  };

  const addProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: 'New Project',
      description: 'Project description',
      longDescription: 'Detailed project description',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: ['https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800'],
      technologies: ['Technology'],
      category: 'Category'
    };
    onUpdateProjects([...projects, newProject]);
  };

  const deleteProject = (id: string) => {
    onUpdateProjects(projects.filter(p => p.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold">Content Management</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Image URL Input Modal */}
        {showImageUrlInput && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60">
            <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
              <h3 className="text-lg font-semibold mb-4">Add Image URL</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Image URL</label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">
                  For deployment, use external URLs (Pexels, Unsplash, etc.) or upload to image hosting services
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handleImageUrlSubmit}
                  className="flex-1 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Add Image
                </button>
                <button
                  onClick={() => {
                    setShowImageUrlInput(null);
                    setImageUrl('');
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Deployment Warning */}
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mx-6 mt-4">
          <div className="flex">
            <AlertCircle className="h-5 w-5 text-amber-400 mr-2 flex-shrink-0 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-amber-800">Deployment Note:</p>
              <p className="text-amber-700">
                Uploaded images won't appear in deployed sites. Use external URLs (Pexels, Unsplash) or image hosting services for production.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'projects' 
                ? 'border-b-2 border-black text-black' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === 'about' 
                ? 'border-b-2 border-black text-black' 
                : 'text-gray-600 hover:text-black'
            }`}
          >
            About Me
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {activeTab === 'projects' && (
            <div className="h-full flex">
              {/* Projects List */}
              <div className="w-1/3 border-r overflow-y-auto p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Projects</h3>
                  <button
                    onClick={addProject}
                    className="p-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center justify-between p-3 border rounded-lg mb-2 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setEditingProject(project)}
                  >
                    <div>
                      <h4 className="font-medium">{project.title}</h4>
                      <p className="text-sm text-gray-600">{project.category}</p>
                    </div>
                    <div className="flex space-x-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingProject(project);
                        }}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteProject(project.id);
                        }}
                        className="p-1 hover:bg-red-100 text-red-600 rounded"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Project Editor */}
              <div className="flex-1 overflow-y-auto p-6">
                {editingProject ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">Edit Project</h3>
                      <button
                        onClick={saveProject}
                        className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Save size={16} />
                        <span>Save</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <input
                          type="text"
                          value={editingProject.title}
                          onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Category</label>
                        <input
                          type="text"
                          value={editingProject.category}
                          onChange={(e) => setEditingProject({ ...editingProject, category: e.target.value })}
                          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Short Description</label>
                      <textarea
                        value={editingProject.description}
                        onChange={(e) => setEditingProject({ ...editingProject, description: e.target.value })}
                        rows={3}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Long Description</label>
                      <textarea
                        value={editingProject.longDescription}
                        onChange={(e) => setEditingProject({ ...editingProject, longDescription: e.target.value })}
                        rows={5}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Technologies (comma-separated)</label>
                      <input
                        type="text"
                        value={editingProject.technologies.join(', ')}
                        onChange={(e) => setEditingProject({ 
                          ...editingProject, 
                          technologies: e.target.value.split(',').map(t => t.trim()) 
                        })}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Main Image</label>
                      <div className="flex items-center space-x-4">
                        <img
                          src={editingProject.image}
                          alt="Main"
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setShowImageUrlInput({type: 'project'})}
                            className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                          >
                            <Plus size={16} />
                            <span>Add URL</span>
                          </button>
                          <label className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                            <Upload size={16} />
                            <span>Upload</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(e, 'project')}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium">Project Images</label>
                        <button
                          onClick={() => setShowImageUrlInput({type: 'project-gallery'})}
                          className="flex items-center space-x-1 text-sm bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors"
                        >
                          <Plus size={14} />
                          <span>Add Image URL</span>
                        </button>
                      </div>
                      <div className="grid grid-cols-4 gap-4">
                        {editingProject.images.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={image}
                              alt={`Project ${index + 1}`}
                              className="w-full h-20 object-cover rounded-lg"
                            />
                            <button
                              onClick={() => removeProjectImage(index)}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <X size={12} />
                            </button>
                            <label className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center rounded-lg">
                              <Upload size={16} className="text-white" />
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, 'project', index)}
                                className="hidden"
                              />
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Select a project to edit
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="h-full flex">
              {/* About Sections List */}
              <div className="w-1/3 border-r overflow-y-auto p-4">
                <h3 className="font-semibold mb-4">About Sections</h3>
                {aboutSections.map((section) => (
                  <div
                    key={section.id}
                    className="p-3 border rounded-lg mb-2 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setEditingAbout(section)}
                  >
                    <h4 className="font-medium">{section.title}</h4>
                  </div>
                ))}
              </div>

              {/* About Section Editor */}
              <div className="flex-1 overflow-y-auto p-6">
                {editingAbout ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold">Edit About Section</h3>
                      <button
                        onClick={saveAboutSection}
                        className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Save size={16} />
                        <span>Save</span>
                      </button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Title</label>
                      <input
                        type="text"
                        value={editingAbout.title}
                        onChange={(e) => setEditingAbout({ ...editingAbout, title: e.target.value })}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Content (one paragraph per line)</label>
                      <textarea
                        value={Array.isArray(editingAbout.content) ? editingAbout.content.join('\n') : editingAbout.content}
                        onChange={(e) => setEditingAbout({ 
                          ...editingAbout, 
                          content: e.target.value.split('\n')
                        })}
                        rows={10}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent font-mono text-sm"
                        placeholder="Enter each paragraph on a new line. Use ** for bold text (e.g., **bold text**)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Section Image</label>
                      <div className="flex items-center space-x-4">
                        {editingAbout.image && (
                          <img
                            src={editingAbout.image}
                            alt="Section"
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                        )}
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setShowImageUrlInput({type: 'about'})}
                            className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                          >
                            <Plus size={16} />
                            <span>Add URL</span>
                          </button>
                          <label className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg cursor-pointer transition-colors">
                            <Upload size={16} />
                            <span>Upload</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(e, 'about')}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-500">
                    Select a section to edit
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
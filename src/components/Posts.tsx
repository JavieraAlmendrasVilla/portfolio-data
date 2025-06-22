import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, ExternalLink } from 'lucide-react';
import { posts } from '../data/posts';
import { Post } from '../types';

const Posts: React.FC = () => {
  const publishedPosts = posts.filter(post => post.published);
  const upcomingPosts = posts.filter(post => !post.published);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const [selectedPost, setSelectedPost] = React.useState<Post | null>(null);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => setSelectedPost(null)}
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors mb-8"
          >
            <ArrowRight size={20} className="rotate-180" />
            <span>Back to Posts</span>
          </button>

          {/* Post header */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="h-64 bg-gray-200 overflow-hidden">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full font-medium">
                  {selectedPost.category}
                </span>
                <div className="flex items-center space-x-4 text-gray-500 text-sm">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(selectedPost.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {selectedPost.readTime}
                  </div>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{selectedPost.excerpt}</p>
            </div>
          </div>

          {/* Post content */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              {selectedPost.content ? (
                <div 
                  className="text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ 
                    __html: selectedPost.content
                      .split('\n\n')
                      .map(paragraph => {
                        if (paragraph.startsWith('# ')) {
                          return `<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-8">${paragraph.slice(2)}</h1>`;
                        } else if (paragraph.startsWith('## ')) {
                          return `<h2 class="text-2xl font-semibold text-gray-900 mb-4 mt-6">${paragraph.slice(3)}</h2>`;
                        } else if (paragraph.startsWith('### ')) {
                          return `<h3 class="text-xl font-semibold text-gray-900 mb-3 mt-5">${paragraph.slice(4)}</h3>`;
                        } else if (paragraph.startsWith('- ')) {
                          const items = paragraph.split('\n').map(item => 
                            item.startsWith('- ') ? `<li class="mb-2">${item.slice(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>` : ''
                          ).join('');
                          return `<ul class="list-disc list-inside space-y-2 mb-4">${items}</ul>`;
                        } else if (paragraph.trim() === '---') {
                          return `<hr class="border-gray-300 my-8">`;
                        } else if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                          return `<p class="italic text-gray-600 text-center mb-4">${paragraph.slice(1, -1)}</p>`;
                        } else {
                          return `<p class="mb-4 leading-relaxed">${paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`;
                        }
                      })
                      .join('')
                  }}
                />
              ) : (
                <p className="text-gray-600">Full content coming soon...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog Posts</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts on data science, AI, career transitions, and the intersection of technology and healthcare.
          </p>
        </div>

        {/* Published Posts */}
        {publishedPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(post.date)}
                      </div>
                      
                      <div className="flex items-center text-black font-medium text-sm group-hover:text-gray-600 transition-colors">
                        <span className="mr-1">Read More</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Coming Soon Posts */}
        {upcomingPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Coming Soon</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer opacity-75"
                >
                  <div className="h-48 bg-gray-200 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {formatDate(post.date)}
                      </div>
                      
                      <div className="flex items-center text-gray-400 font-medium text-sm">
                        <span className="mr-1">Coming Soon</span>
                        <BookOpen size={14} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to know when I publish new posts about data science, AI, and career insights.
          </p>
          
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-black focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
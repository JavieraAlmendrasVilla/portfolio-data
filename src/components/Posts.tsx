import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

const Posts: React.FC = () => {
  // Sample posts data - in a real app, this would come from a CMS or API
  const posts: Post[] = [
    {
      id: '1',
      title: 'Building a Multilingual AI Assistant: Lessons from the Dental Industry',
      excerpt: 'Exploring the challenges and solutions in creating conversational AI that works across languages and cultures, with real-world insights from healthcare applications.',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '2',
      title: 'From Dentist to Data Scientist: My Career Transition Journey',
      excerpt: 'The unexpected path from healthcare to tech, and how my medical background gives me a unique perspective on data problems.',
      date: '2025-01-10',
      readTime: '6 min read',
      category: 'Career',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: '3',
      title: 'Random Forests in Healthcare: Predicting Smoking Habits from Biometric Data',
      excerpt: 'A deep dive into using machine learning for health prediction, including data preprocessing, model selection, and ethical considerations.',
      date: '2025-01-05',
      readTime: '12 min read',
      category: 'Data Science',
      image: 'https://images.pexels.com/photos/2418883/pexels-photo-2418883.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

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

        {/* Coming Soon Message */}
        <div className="bg-white rounded-2xl shadow-lg p-12 text-center mb-12">
          <div className="mb-6">
            <BookOpen size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm currently working on some exciting blog posts about AI, data science, and my journey from healthcare to tech. 
              Check back soon for insights and tutorials!
            </p>
          </div>
        </div>

        {/* Preview Posts */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">What's Coming</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
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
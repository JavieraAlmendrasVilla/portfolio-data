import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, ExternalLink } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  published: boolean;
}

const Posts: React.FC = () => {
  // Sample posts data - in a real app, this would come from a CMS or API
  const posts: Post[] = [
    {
      id: '1',
      title: 'From Dentist to Data Scientist: My Career Transition Journey',
      excerpt: 'The unexpected path from healthcare to tech, and how my medical background gives me a unique perspective on data problems.',
      content: `# From Dentist to Data Scientist: My Career Transition Journey

When I tell people I went from being a dentist to working in data science, I usually get one of two reactions: complete confusion or genuine curiosity about how such a dramatic career change is even possible. Today, I want to share my story and the lessons I've learned along the way.

## The Healthcare Foundation

My journey began in Chile, where I graduated as a **Dental Surgeon** from Universidad de la Frontera in 2014. For two years, I worked in private practice, conducting comprehensive diagnostics, performing treatments, and developing personalized care plans for patients. 

What many people don't realize is how much **analytical thinking** and **problem-solving** goes into healthcare. Every patient presents a unique puzzle - symptoms, medical history, lifestyle factors - that need to be carefully analyzed to determine the best treatment approach. This systematic approach to problem-solving would later become invaluable in my data science career.

## The Pivot to Europe

In 2016, I made the decision to move to Germany. This wasn't just a geographical change; it was the beginning of my transformation. I started working as a **Data Clerk at UPS Germany**, where I was responsible for ensuring data accuracy and customs compliance across international shipments.

This role might seem mundane, but it was actually my first real introduction to the world of data. I learned about:
- **Data quality** and the importance of accuracy
- **Process optimization** and efficiency
- **Cross-functional collaboration** in a tech-driven environment
- **Attention to detail** at scale

## Building the Bridge: Education

Recognizing that I needed formal training to make a successful transition, I pursued a **B.Sc. in International Business and Economics** at Otto von Guericke University Magdeburg, which I completed in 2022. But I knew I needed more technical skills.

The real game-changer was my **M.Sc. in Management and Technology** at the Technical University of Munich (TUM), which I completed in 2024. This program was perfect for someone like me - it combined business acumen with technical depth, focusing on:
- Operations & Supply Chain (my major)
- Computer Engineering (my minor)
- **Data-driven decision making**
- **Technology implementation** in business contexts

## The Professional Transition

My breakthrough came when I joined **Experteer GmbH** as a Working Student - Data Analyst in October 2023. This role was transformative because it allowed me to:

- Work with **real-world data** at scale (job market and candidate data)
- Contribute to **ML-driven product development**
- Build **ETL pipelines** in Python (reducing manual work by 90%!)
- Collaborate with **cross-functional teams** including product managers and engineers
- Support **feature definition** for talent-matching algorithms

## The Unique Advantage of a Healthcare Background

You might wonder: "What does dentistry have to do with data science?" More than you'd think:

### 1. **Diagnostic Thinking**
In healthcare, you're constantly forming hypotheses based on limited information, then testing those hypotheses with additional data (tests, examinations). This is exactly what data scientists do when exploring datasets and building models.

### 2. **Attention to Detail**
Medical procedures require extreme precision - a small error can have serious consequences. This translates perfectly to data work, where small mistakes in data cleaning or model building can lead to completely wrong conclusions.

### 3. **Communication Skills**
Explaining complex medical conditions to patients in understandable terms is very similar to explaining data insights to non-technical stakeholders. Both require the ability to simplify without losing important nuances.

### 4. **Ethical Considerations**
Healthcare professionals are trained to consider the ethical implications of their decisions. In data science, especially with AI and machine learning, ethical considerations around bias, privacy, and fairness are crucial.

## Current Projects and Future Goals

Today, I'm working on a **multilingual dental AI assistant** - a project that perfectly combines my healthcare background with my data science skills. Using FastAPI, LangChain, and locally hosted LLMs (Qwen 2.5), I'm building a system that can understand natural language queries in multiple languages and help with dental appointment scheduling.

I'm also pursuing the **IBM Data Engineering Professional Certificate** to deepen my technical skills in data pipeline development and cloud technologies.

## Lessons for Career Changers

If you're considering a similar transition, here are my key takeaways:

### 1. **Your Previous Experience is an Asset, Not a Liability**
Don't think of your previous career as time "wasted." The skills you developed - problem-solving, communication, domain expertise - are valuable and differentiate you from other candidates.

### 2. **Invest in Formal Education**
While self-learning is important, formal education provides structure, credibility, and networking opportunities that are hard to replicate on your own.

### 3. **Start with Adjacent Roles**
My data clerk position at UPS wasn't glamorous, but it gave me exposure to data processes and helped me understand how data flows through organizations.

### 4. **Build Real Projects**
Theory is important, but nothing beats hands-on experience. My projects analyzing health data and building AI systems have been crucial for demonstrating my capabilities.

### 5. **Embrace the Learning Curve**
Career transitions are challenging. There will be moments of doubt and frustration. The key is to stay curious and keep learning.

## Looking Forward

The intersection of healthcare and technology is incredibly exciting right now. With AI becoming more sophisticated and healthcare becoming more data-driven, professionals who understand both domains are increasingly valuable.

My goal is to continue building AI solutions that make healthcare more accessible and efficient, while also sharing my journey to inspire others who might be considering similar transitions.

## Final Thoughts

Career changes are never easy, but they can be incredibly rewarding. My journey from dentist to data scientist has taught me that with the right combination of curiosity, persistence, and strategic learning, it's possible to reinvent yourself professionally.

The skills you've developed in your current career are more transferable than you might think. The key is to identify those transferable skills, invest in learning the technical aspects you're missing, and find ways to bridge your old and new worlds.

If you're considering a similar transition, I'd love to hear about your journey. Feel free to reach out - I'm always happy to share more specific advice or just chat about the challenges and rewards of career pivoting.

---

*What questions do you have about career transitions in tech? Have you made a similar change? I'd love to hear your thoughts and experiences in the comments below.*`,
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Career',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      published: true
    },
    {
      id: '2',
      title: 'Building a Multilingual AI Assistant: Lessons from the Dental Industry',
      excerpt: 'Exploring the challenges and solutions in creating conversational AI that works across languages and cultures, with real-world insights from healthcare applications.',
      date: '2025-01-20',
      readTime: '12 min read',
      category: 'AI & Machine Learning',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      published: false
    },
    {
      id: '3',
      title: 'Random Forests in Healthcare: Predicting Smoking Habits from Biometric Data',
      excerpt: 'A deep dive into using machine learning for health prediction, including data preprocessing, model selection, and ethical considerations.',
      date: '2025-01-25',
      readTime: '15 min read',
      category: 'Data Science',
      image: 'https://images.pexels.com/photos/2418883/pexels-photo-2418883.jpeg?auto=compress&cs=tinysrgb&w=800',
      published: false
    }
  ];

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
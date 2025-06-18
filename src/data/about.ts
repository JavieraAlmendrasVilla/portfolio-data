import { AboutSection } from '../types';

export const aboutSections: AboutSection[] = [
  {
    id: 'personal',
    title: 'Personal Information',
    content: [
      'Hi, I\'m Alex Morgan, a passionate Data Scientist with over 6 years of experience transforming complex data into actionable insights.',
      'I specialize in machine learning, statistical modeling, and building scalable data solutions that drive business value.',
      'My approach combines technical expertise with business acumen to deliver solutions that make a real impact.'
    ],
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 'education',
    title: 'Education',
    content: [
      'Ph.D. in Data Science - Stanford University (2018)',
      'M.S. in Statistics - University of California, Berkeley (2015)',
      'B.S. in Mathematics - MIT (2013)',
      '',
      'Relevant Coursework:',
      '• Machine Learning and Deep Learning',
      '• Statistical Modeling and Inference',
      '• Optimization and Operations Research',
      '• Database Systems and Big Data Analytics'
    ]
  },
  {
    id: 'experience',
    title: 'Experience',
    content: [
      'Senior Data Scientist - TechCorp Inc. (2020 - Present)',
      '• Lead a team of 5 data scientists and ML engineers',
      '• Developed predictive models that increased revenue by $10M annually',
      '• Built automated ML pipelines processing 100TB+ of data daily',
      '',
      'Data Scientist - DataDriven Solutions (2018 - 2020)',
      '• Created customer segmentation models for Fortune 500 companies',
      '• Implemented A/B testing frameworks and statistical analysis',
      '• Reduced model deployment time by 70% through MLOps practices',
      '',
      'Data Analyst - StartupXYZ (2016 - 2018)',
      '• Performed exploratory data analysis and business intelligence reporting',
      '• Built dashboards and visualization tools for stakeholders',
      '• Collaborated with product teams to define success metrics'
    ]
  },
  {
    id: 'interests',
    title: 'Interests',
    content: [
      'Technical Interests:',
      '• Artificial Intelligence and Machine Learning',
      '• Deep Learning and Neural Networks',
      '• Natural Language Processing',
      '• Computer Vision and Image Processing',
      '• Big Data Technologies and Cloud Computing',
      '',
      'Personal Interests:',
      '• Photography and Digital Art',
      '• Hiking and Mountain Climbing',
      '• Playing Chess and Strategic Games',
      '• Reading Science Fiction and Technology Books',
      '• Contributing to Open Source Projects'
    ]
  }
];
import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Customer Churn Prediction',
    description: 'ML model predicting customer churn using advanced algorithms',
    longDescription: 'Developed a comprehensive machine learning solution to predict customer churn for a telecommunications company. The model combines feature engineering, ensemble methods, and deep learning to achieve 94% accuracy. This solution helped reduce churn by 23% and increased customer lifetime value by $2.3M annually.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'SQL'],
    category: 'Machine Learning'
  },
  {
    id: '2',
    title: 'Sales Forecasting Dashboard',
    description: 'Interactive dashboard for real-time sales analytics and forecasting',
    longDescription: 'Built an interactive sales forecasting dashboard using time series analysis and machine learning models. The dashboard provides real-time insights into sales trends, seasonal patterns, and predictive analytics. Features include automated reporting, anomaly detection, and scenario planning capabilities.',
    image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Python', 'Plotly', 'Dash', 'Time Series', 'PostgreSQL'],
    category: 'Data Visualization'
  },
  {
    id: '3',
    title: 'NLP Sentiment Analysis',
    description: 'Advanced sentiment analysis for social media monitoring',
    longDescription: 'Created a sophisticated NLP pipeline for real-time sentiment analysis of social media content. The system processes over 10,000 posts per minute, providing insights into brand perception, customer satisfaction, and market trends. Includes custom BERT fine-tuning and multilingual support.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Python', 'BERT', 'Transformers', 'spaCy', 'MongoDB'],
    category: 'Natural Language Processing'
  },
  {
    id: '4',
    title: 'Fraud Detection System',
    description: 'Real-time fraud detection using ensemble methods',
    longDescription: 'Developed a real-time fraud detection system for financial transactions using ensemble machine learning methods. The system processes millions of transactions daily with 99.7% accuracy and sub-second response times. Features include adaptive learning, explainable AI, and automated model retraining.',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Python', 'Random Forest', 'XGBoost', 'Apache Kafka', 'Redis'],
    category: 'Machine Learning'
  },
  {
    id: '5',
    title: 'Supply Chain Optimization',
    description: 'AI-powered supply chain optimization and demand planning',
    longDescription: 'Built an AI-powered supply chain optimization system that reduces inventory costs by 30% while improving service levels. The solution combines demand forecasting, inventory optimization, and logistics planning using advanced optimization algorithms and machine learning models.',
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['Python', 'OR-Tools', 'Gurobi', 'Apache Spark', 'Kubernetes'],
    category: 'Optimization'
  }
];
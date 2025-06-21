import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Multilingual Dental Appointment Assistant',
    description: 'Conversational AI bot for dental clinics using LLMs and FastAPI',
    longDescription: 'Building a multilingual dental appointment assistant using FastAPI, LangChain, and a locally hosted LLM (Qwen 2.5). The bot understands natural language queries in multiple languages, extracts structured data, and manages scheduling logic with full calendar integration.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/8566531/pexels-photo-8566531.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['FastAPI', 'LangChain', 'Qwen 2.5', 'SQL', 'Python'],
    category: 'Work in Progress',
    codeUrl: 'https://github.com/JavieraAlmendrasVilla/dental-ai-assistant'
  },
  {
    id: '2',
    title: 'Predicting Smoking Habits with Random Forests',
    description: 'Used health biometrics to model smoking status with 75% accuracy',
    longDescription: 'Built a Random Forest model to predict smoking habits using a large-scale health dataset from the South Korean government (55,692 observations, 27 features). After comprehensive data cleaning and exploration in R, I engineered features like blood pressure, cholesterol levels, and dental health to train and evaluate the model. The final classifier achieved ~75% accuracy with strong AUC scores (0.86 test, 0.84 train). Visualized model performance using ROC curves and confusion matrices.',
    image: 'https://images.pexels.com/photos/2418883/pexels-photo-2418883.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'

    ],
    technologies: ['R', 'randomForest', 'tidyverse', 'data.table', 'ggroc'],
    category: 'Data Science',
    codeUrl: 'https://github.com/JavieraAlmendrasVilla/Case-2-Random-Forest-Model'
  },
  {
    id: '4',
    title: 'Oral Health Analysis by Smoking and Gender',
    description: 'Statistical analysis of dental caries using national health data',
    longDescription: 'Conducted a comprehensive statistical analysis on a public health dataset (55,692 observations) from the South Korean government, focusing on oral health indicators like dental caries and tartar. Explored relationships between gender, age, and smoking habits using Welch\'s t-test and Fisher\'s exact test. Found that men and smokers are statistically more likely to develop caries. Visualized gender imbalance, age distribution, and caries prevalence using bar plots and boxplots. Concluded a strong association between smoking and oral disease risk.',
    image: 'https://images.pexels.com/photos/4269356/pexels-photo-4269356.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4269356/pexels-photo-4269356.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3845764/pexels-photo-3845764.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8376179/pexels-photo-8376179.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['R', 'ggplot2', 'data.table', 'tidyr', 'magrittr'],
    category: 'Data Analysis',
    codeUrl: 'https://github.com/JavieraAlmendrasVilla/Case-1-Oral-Health-data'
  },
  {
  id: '5',
  title: 'Car Dealership Dashboard in Google Looker Studio',
  description: 'Built interactive dashboards to analyze car sales and service data',
  longDescription: 'Created a two-page dashboard using Google Looker Studio to visualize performance metrics for a chain of car dealerships. The Sales page included KPIs like total profit (in millions), quantity sold, quantity sold by model, and average quantity sold, with profit by dealer visualized as a column chart. The Service page featured recall analysis per model, customer sentiment as a treemap, a combo chart showing monthly profit vs. quantity sold, and a pivot table heatmap of recalls by model and affected system. Data was connected using Google Sheets from a modified IBM dataset and exported to PDF for final presentation.',
  image: 'https://images.pexels.com/photos/2218914/pexels-photo-2218914.jpeg?auto=compress&cs=tinysrgb&w=800',
  images: [
    'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  technologies: ['Google Looker Studio', 'Google Sheets', 'Data Visualization'],
  category: 'IBM Data Engineering',
  codeUrl: 'https://lookerstudio.google.com/s/gv50gGMZ1AM'
}

];
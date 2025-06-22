import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Multilingual Dental Appointment Assistant',
    description: 'Conversational AI bot for dental clinics using LLMs and FastAPI',
    longDescription: 'Building a multilingual dental appointment assistant using FastAPI, LangChain, and a locally hosted LLM (Qwen 2.5). The bot understands natural language queries in multiple languages, extracts structured data, and manages scheduling logic with full calendar integration.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://raw.githubusercontent.com/JavieraAlmendrasVilla/portfolio-data/main/src/images/chatbot.png'

    ],
    technologies: ['FastAPI', 'LangChain', 'Qwen 2.5', 'SQL', 'Python'],
    category: 'Work in Progress',
    codeUrl: 'https://github.com/JavieraAlmendrasVilla/dental-management-system',
    featured: true
  },
{
  id: '2',
  title: 'Car Dealership Dashboard in Google Looker Studio',
  description: 'Built interactive dashboards to analyze car sales and service data',
  longDescription: 'Created a two-page dashboard using Google Looker Studio to visualize performance metrics for a chain of car dealerships. The Sales page included KPIs like total profit (in millions), quantity sold, quantity sold by model, and average quantity sold, with profit by dealer visualized as a column chart. The Service page featured recall analysis per model, customer sentiment as a treemap, a combo chart showing monthly profit vs. quantity sold, and a pivot table heatmap of recalls by model and affected system. Data was connected using Google Sheets from a modified IBM dataset and exported to PDF for final presentation.',
  image: 'https://images.pexels.com/photos/2218914/pexels-photo-2218914.jpeg?auto=compress&cs=tinysrgb&w=800',
  images: [
    'https://raw.githubusercontent.com/JavieraAlmendrasVilla/portfolio-data/main/src/images/Sales.jpg',
    'https://raw.githubusercontent.com/JavieraAlmendrasVilla/portfolio-data/main/src/images/service_dashboard.jpg',
  ],
  technologies: ['Google Looker Studio', 'Data Visualization'],
  category: 'IBM Data Engineering',
  codeUrl: 'https://lookerstudio.google.com/s/gv50gGMZ1AM',
  featured: true
},
{
  id: '3',
  title: 'Total distance and total amount TLC 2017 in Tableau',
  description: 'Built interactive dashboard to analyse taxi trip data',
  longDescription: 'Created a dashboard using Tableau to visualize trip distance (mils) and the total revenue collected (USD) per trip for the TLC 2017 data. The dashboard includes a scatterplot highliting the presence of trips with 0 distance that still have a fare amount. These trips are likely very short in distance, it would be recommended to separate short and long trip to change their metrics and gain deeper insights. This project was developed as part of the Google Advanced Data Analytics certificate.',
  image: 'https://images.pexels.com/photos/2447531/pexels-photo-2447531.jpeg?auto=compress&cs=tinysrgb&w=800',
  images: [
    'https://raw.githubusercontent.com/JavieraAlmendrasVilla/portfolio-data/main/src/images/tableau_viz.png',
  ],
  technologies: ['Tableau', 'Data Visualization'],
  category: 'Google Advanced Data Analytics',
  codeUrl: 'https://public.tableau.com/views/TotaldistanceandtotalamountTLC2017_17505767606720/Dashboard2?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  featured: true
},
  {
    id: '4',
    title: 'Predicting Smoking Habits with Random Forests',
    description: 'Used health biometrics to model smoking status with 75% accuracy',
    longDescription: 'Built a Random Forest model to predict smoking habits using a large-scale health dataset from the South Korean government (55,692 observations, 27 features). After comprehensive data cleaning and exploration in R, I engineered features like blood pressure, cholesterol levels, and dental health to train and evaluate the model. The final classifier achieved ~75% accuracy with strong AUC scores (0.86 test, 0.84 train). Visualized model performance using ROC curves and confusion matrices.',
    image: 'https://images.pexels.com/photos/2418883/pexels-photo-2418883.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800'

    ],
    technologies: ['R', 'randomForest', 'tidyverse', 'data.table', 'ggroc'],
    category: 'Data Science',
    codeUrl: 'https://github.com/JavieraAlmendrasVilla/Case-2-Random-Forest-Model',
    featured: true
  },
  {
    id: '5',
    title: 'Oral Health Analysis by Smoking and Gender',
    description: 'Statistical analysis of dental caries using national health data',
    longDescription: 'Conducted a comprehensive statistical analysis on a public health dataset (55,692 observations) from the South Korean government, focusing on oral health indicators like dental caries and tartar. Explored relationships between gender, age, and smoking habits using Welch\'s t-test and Fisher\'s exact test. Found that men and smokers are statistically more likely to develop caries. Visualized gender imbalance, age distribution, and caries prevalence using bar plots and boxplots. Concluded a strong association between smoking and oral disease risk.',
    image: 'https://images.pexels.com/photos/13668937/pexels-photo-13668937.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/4269356/pexels-photo-4269356.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3845764/pexels-photo-3845764.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8376179/pexels-photo-8376179.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    technologies: ['R', 'ggplot2', 'data.table', 'tidyr', 'magrittr'],
    category: 'Data Analytics',
    codeUrl: 'https://github.com/JavieraAlmendrasVilla/Case-1-Oral-Health-data',
    featured: false
  },
  {
  id: '6',
  title: 'Fraud Detection Analysis with SQLite & Python',
  description: 'Identified transaction anomalies and fraud patterns from financial data',
  longDescription: 'Analyzed customer and merchant transaction data using Python and SQLite to detect fraudulent activity and suspicious patterns. Built a dynamic fraud analysis pipeline that flagged 45 high-risk transactions using anomaly scoring and rule-based logic. Visualized transaction trends across categories such as food, travel, and retail. Identified high-risk customer behaviors, unusual merchant activity, and customer segments prone to fraud. Leveraged SQL queries and Pandas for insight extraction, and implemented a modular script to update results with new transaction data.',
  image: 'https://images.pexels.com/photos/6266297/pexels-photo-6266297.jpeg?auto=compress&cs=tinysrgb&w=800',
  images: [
    'https://images.pexels.com/photos/6266297/pexels-photo-6266297.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  technologies: ['Python', 'Pandas', 'SQLite3', 'SQL'],
  category: 'Data Analytics',
  codeUrl: 'https://github.com/JavieraAlmendrasVilla/AntiFraudProject',
  featured: false
},
{
id: '7',
  title: 'Autimatidata project from Google Data Analytics Certificate',
  description: 'Build a Machine Learning model to predict the fare amount of a taxi trip',
  longDescription: 'This project showcase the skills learn in the Google Data Analytics Certificate. The goal was to build a machine learning model to predict the fare amount of a taxi trip using the dataset TLC 2017. The project involved data cleaning, feature engineering, exploratory data analysis, and model building using regression techniques.',
  image: 'https://images.pexels.com/photos/13801669/pexels-photo-13801669.jpeg?auto=compress&cs=tinysrgb&w=800',
  images: [
    'https://images.pexels.com/photos/13801669/pexels-photo-13801669.jpeg?auto=compress&cs=tinysrgb&w=800',
  ],
  technologies: ['Python', 'Pandas', 'Numpy', 'Regression', 'ML', 'A/B Testing', 'Statistics'],
  category: 'Data Analytics',
  codeUrl: 'https://github.com/JavieraAlmendrasVilla/Automatidata',
  featured: false
}
];
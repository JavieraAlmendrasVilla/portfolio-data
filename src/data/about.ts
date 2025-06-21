import { AboutSection } from '../types';

export const aboutSections: AboutSection[] = [
  {
    id: 'personal',
    title: 'Personal Information',
    content: [
      "Hi! I'm a **Data Science professional** with a unique background that bridges data, business, and healthcare.",
      "From managing dental patients to managing data pipelines, I've always loved solving complex problems with structure and empathy.",
      "Right now, I'm developmening of a **multilingual dental AI assistant** that brings together open-source LLMs, FastAPI, where tech meets real-world usability."
    ],
    image: 'https://images.pexels.com/photos/3746957/pexels-photo-3746957.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'education',
    title: 'Education',
    content: [
        '** IBM Data Engineering Professional Certificate** – IBM via Coursera (Ongoing)',
      '**M.Sc. Management and Technology** – Technical University of Munich (2024)',
      '• Major: Operations & Supply Chain, Minor: Computer Engineering',
      '**B.Sc. International Business and Economics** – Otto von Guericke University Magdeburg (2022)',
      '**Dental Surgeon** – Universidad de la Frontera, Chile (2014)',

    ],
    image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'experience',
    title: 'Experience',
    content: [
      '**AI Developer** – Personal Project (Mar 2025 – Present)',
      '• Devoloping a multilingual dental AI assistant',
      '• Building backend: FastAPI + open-source LLMs like Qwen 2.5',


      '**Working Student – Data Analyst**, Experteer GmbH (Oct 2023 – Feb 2025)',
      '• Build an ETL pipeline for automated email sharing using Python (90% less manual effort)',
      '• Collaborated with product teams to shape ML-driven features',

      '**Data Clerk** – UPS Germany (2021 – 2023)',
      '• Maintained clean, compliant shipment data across European hubs',
    ],
image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'interests',
    title: 'Interests',
    content: [
      '**Tech Interests:**',
      '• Generative AI',
      '• LLMs and Natural Language Processing',
      '• Human-centric Product Design',
      '• AI automation',
      '',
      '**Personal Interests:**',
      '• Intercultural communication and languages',
      '• Neuroscience readings',
      '• Astrology and Esoteric Sciences',
      '• Traveling and exploring new cultures',
    ],
image: 'https://images.pexels.com/photos/7235808/pexels-photo-7235808.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];
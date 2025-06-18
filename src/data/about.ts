import { AboutSection } from '../types';

export const aboutSections: AboutSection[] = [
  {
    id: 'personal',
    title: 'Personal Information',
    content: [
      "Hi! I'm a **Data Science professional** with a unique background that bridges software, business, and healthcare.",
      "From managing dental patients to managing data pipelines, I've always loved solving complex problems with structure and empathy.",
      "Right now, I'm leading the development of a **multilingual dental SaaS platform** that brings together open-source LLMs, FastAPI, and a frontend built on Bolt.new — where tech meets real-world usability."
    ],
    image: '/src/images/CV.jpeg'
  },
  {
    id: 'education',
    title: 'Education',
    content: [
      '**M.Sc. Management and Technology** – Technical University of Munich (2024)',
      '• Major: Operations & Supply Chain, Minor: Computer Engineering',
      '',
      '**B.Sc. International Business and Economics** – Otto von Guericke University Magdeburg (2022)',
      '',
      '**Dental Surgeon** – Universidad de la Frontera, Chile (2014)',
      '',
      'From human anatomy to algorithms — my academic journey has taken me from clinical care to code, blending empathy with engineering.'
    ],
    image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'experience',
    title: 'Experience',
    content: [
      '**AI Software Developer** – InnoDent (Mar 2025 – Present)',
      '• Leading a multilingual dental SaaS product powered by AI and voice assistants',
      '• Building full stack: FastAPI backend + Bolt.new frontend + open-source LLMs like Qwen 2.5',
      '• Iterating fast with MVPs hosted on Netlify and open collaboration via GitHub',
      '',
      '**Working Student – Data Analyst & Product Support**, Experteer GmbH (Oct 2023 – Feb 2025)',
      '• Automated personalized email campaigns using Python (90% less manual effort)',
      '• Collaborated with product teams to shape ML-driven features',
      '',
      '**Data Clerk** – UPS Germany (2021 – 2023)',
      '• Maintained clean, compliant shipment data across European hubs',
      '',
      '**General Dentist** – Private Practice, Chile (2015 – 2016)',
      '• Treated 500+ patients and streamlined care processes with a user-centered mindset'
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
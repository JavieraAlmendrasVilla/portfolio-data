import { AboutSection } from '../types';

export const aboutSections: AboutSection[] = [
  {
    id: 'personal',
    title: 'Personal Information',
    content: [
      "Hi! I'm a **Data professional** with a unique background that bridges data, business, and healthcare.",
      "From managing dental patients to managing data pipelines, I've always loved solving complex problems with structure and empathy.",
      "Right now, I'm developmening of a **multilingual dental AI assistant** that brings together open-source LLMs, FastAPI, where tech meets real-world usability."
    ],
    image: 'https://raw.githubusercontent.com/JavieraAlmendrasVilla/portfolio-data/main/src/images/CV.jpeg'
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
      '• Building backend: FastAPI + open-source LLMs: Qwen 2.5',

      '**Working Student – Data Analyst**, Experteer GmbH (Oct 2023 – Feb 2025)',
       'Contributed to ML-driven product development by cleaning, classifying, and
 analyzing job market and candidate data.',
 '• Developed an ETL pipeline in Python to automate personalized HTML email
 creation, reducing manual work by 90%.',
 '• Supported feature definition and delivery for talent-matching algorithms along
side the product team.',
 '• Actively collaborated with cross-functional teams.',

      '**Data Clerk** – UPS Germany (2021 – 2023)',
      '• Ensured data accuracy and customs compliance across international shipments
 using OPSYS.',
 '• Reviewed sensitive shipment data, gaining awareness of internal governance and
 documentation standards.',

'**General Dentist** -- Private Practice, Chile (2015 - 2016)'
 '• Conducted comprehensive diagnostics and performed treatments such as fill
ings, crowns, root canals, and extractions.'
 '• Developed personalized treatment plans with a focus on preventive care. Edu
cated patients on oral hygiene and managed dental emergencies.'
 '• Collaborated closely with the dental team to ensure efficient, patient-centered
 care'
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
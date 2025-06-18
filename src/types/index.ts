export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  category: string;
}

export interface AboutSection {
  id: string;
  title: string;
  content: string | string[];
  image?: string;
}
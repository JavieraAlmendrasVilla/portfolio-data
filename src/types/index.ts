export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  technologies: string[];
  category: string;
  codeUrl?: string;
  featured?: boolean;
}

export interface AboutSection {
  id: string;
  title: string;
  content: string | string[];
  image?: string;
}

export interface Post {
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
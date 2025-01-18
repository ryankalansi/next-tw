// src/types/index.ts

export interface Project {
  title: string;
  description: string;
  tech: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  email?: string;
  twitter?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

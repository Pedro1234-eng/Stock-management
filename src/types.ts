export interface AIApp {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  url: string;
  alternateUrl?: string;
  category: string;
  technologies: string[];
  featured?: boolean;
}

export interface AIProject {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  driveLink: string;
  linkType?: 'notebooklm' | 'presentation' | 'video' | 'drive' | 'site';
  category: string;
  technologies: string[];
}

export interface AIAd {
  id: string;
  title: string;
  subtitle: string;
  concept: string;
  copy?: string;
  category: string;
  technologies: string[];
  docLink?: string;
  galleryType?: string;
}

export interface AIVideo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  previewUrl: string;
  category: string;
  technologies: string[];
  statement?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  iconName: string;
  description: string;
}

export interface PortfolioSettings {
  name: string;
  tagline: string;
  email: string;
  whatsapp: string;
  phone: string;
  location: string;
  googleSiteUrl: string;
  apps: AIApp[];
  projects: AIProject[];
  ads?: AIAd[];
  videos?: AIVideo[];
}


export interface ProductFeature {
  icon: string;
  text: string;
}

export interface FeaturedProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  demoUrl: string;
  features: ProductFeature[];
}

export interface AppShowcase {
  id: string;
  name: string;
  badge: string;
  rating: string;
  tagline: string;
  description: string;
  icon: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  detailUrl?: string;
  bullets: string[];
  iosImage: string;
  androidImage: string;
}

export interface UpcomingProductShowcase {
  id: string;
  name: string;
  statusBadge: string;
  tagline: string;
  description: string;
  bullets: string[];
  githubUrl?: string;
  previewUrl?: string;
  progressPercent: number;
  devices: string[];
  videoUrl?: string;
  extensionUrl?: string;
}

export type PetToolShowcase = UpcomingProductShowcase;

export interface SocialCard {
  id: string;
  platform: string;
  handle: string;
  url: string;
  gradient: string;
  image: string;
}

import type { FeaturedProduct, AppShowcase, UpcomingProductShowcase, SocialCard } from '../types';

export const siteConfig = {
  brandName: 'ari.codes',
  creatorName: 'Arianna Grangetto',
  title: 'JavaScript Developer',
  ticker: {
    text: '¡BugBlog, Naao y ClipSync están online! Creaciones listas para explorar',
    linkText: 'Ver creaciones',
    url: '#products'
  },
  hero: {
    kicker: 'JAVASCRIPT DEVELOPER',
    headingLine1: 'i make, i write,',
    headingAccent: 'and share it',
    headingLine2: 'with you.',
    subheading: 'digital products, tech I love. made with coffee ☕',
    ctaText: 'Browse products →',
    ctaUrl: '#products'
  },
  productsHeader: {
    kicker: 'PRODUCTS',
    title: 'creations',
    subtitle: 'Apps and digital products I built for my own work, then opened up to everyone.'
  },
  newsletter: {
    title: 'Hear it',
    accent: 'first.',
    description: 'New drops, characters, and little notes from the studio, straight to you. No spam, I promise. 😊',
    placeholder: 'Your email',
    buttonText: 'Count me in'
  },
  reachMe: {
    title: 'Reach',
    accent: 'me',
    description: 'Have a project idea, a collaboration, or something on your mind? The easiest ways are below. I usually reply within a few days.',
    contacts: [
      {
        type: 'Email',
        label: 'Email',
        value: 'ariigrangetto5@gmail.com',
        url: 'mailto:ariigrangetto5@gmail.com'
      },
      {
        type: 'Instagram',
        label: 'Instagram',
        value: '@ariigrangetto',
        url: 'https://instagram.com/ariigrangetto'
      },
      {
        type: 'GitHub',
        label: 'Open Source',
        value: 'github.com/ariigrangetto',
        url: 'https://github.com/ariigrangetto'
      },
      {
        type: 'X (Twitter)',
        label: 'Updates & Tech',
        value: '@ariidevv',
        url: 'https://x.com/ariidevv'
      }
    ]
  },
  footer: {
    description: 'I build, create, and share.',
    location: 'Córdoba · Argentina'
  }
};

export const flagshipProduct: FeaturedProduct = {
  id: 'bugblog',
  name: 'BugBlog',
  tagline: 'Terminal-inspired developer knowledge base & bug tracking system',
  description: 'Una plataforma web moderna para desarrolladores diseñada para registrar, documentar, clasificar y rastrear errores de código junto a sus soluciones. Combina una interfaz con estética hacker retro, editores de código y autenticación segura multiusuario.',
  image: '/products/bugblog/featured.png',
  demoUrl: '#/bugblog',
  features: [
    {
      icon: 'Shield',
      text: 'Supabase Auth & RLS: Aislamiento estricto de datos por usuario con políticas de seguridad en PostgreSQL'
    },
    {
      icon: 'Bug',
      text: 'Gestión completa de incidencias: Registro de errores con título, descripción, lenguaje y snippet de código'
    },
    {
      icon: 'Code',
      text: 'Editor de código integrado: Componente personalizado con numeración de líneas y visualización de soluciones'
    },
    {
      icon: 'Terminal',
      text: 'Estética hacker cyberpunk: Animación Canvas Matrix Rain, badges de estado dinámicos y fuentes monospace'
    },
    {
      icon: 'Activity',
      text: 'Panel de métricas en tiempo real: Estadísticas de bugs totales, críticos, abiertos y resueltos'
    },
    {
      icon: 'Cpu',
      text: 'Categorización técnica: Runtime, Logic, UI, Performance, Security, Network y Other'
    },
    {
      icon: 'Search',
      text: 'Filtro instantáneo: Búsqueda rápida por niveles de severidad (Critical, High, Medium, Low) o estado'
    },
    {
      icon: 'Zap',
      text: 'Arquitectura React 19 + TypeScript: Construido con Vite 8, React Router y Tailwind CSS v4'
    }
  ]
};

export const appShowcase: AppShowcase = {
  id: 'naao',
  name: 'naao.',
  badge: 'Web App · Mobile Ready · Gemini AI',
  rating: '★',
  tagline: 'Turnos que se gestionan solos. Agendamiento inteligente y CRM para salones y negocios.',
  description: 'Una evolución full-stack para la gestión de turnos y relaciones con clientes (CRM). Integra sugerencias automáticas de horarios impulsadas por Google Gemini AI, historial de visitas y arquitectura en tiempo real.',
  icon: '/products/naao/icon.png',
  appStoreUrl: '#',
  playStoreUrl: '#',
  detailUrl: '#/naao',
  bullets: [
    'Sugerencias inteligentes con Google Gemini AI para optimizar huecos de agenda',
    'CRM integrado: historial de servicios, notas y métricas de días desde última visita',
    'Seguridad robusta con Supabase Auth, Row Level Security (RLS) y CI/CD con Vitest'
  ],
  iosImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80',
  androidImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=80'
};

export const clipSyncShowcase: UpcomingProductShowcase = {
  id: 'clipsync',
  name: 'ClipSync',
  statusBadge: 'WEB APP & EXTENSIÓN CHROME MV3 · V1.0.4',
  tagline: 'Block de notas inteligente y sincronizado en tiempo real con extensión para navegador.',
  description: 'Block de notas inteligente disponible como aplicación web y extensión Google Chrome Manifest V3. Captura texto de cualquier página, sincroniza al instante con Supabase Realtime y organiza todo con categorías dinámicas y colores.',
  bullets: [
    'Sincronización en tiempo real con PostgreSQL mediante Supabase Realtime',
    'Extensión Chrome Manifest V3: captura texto de cualquier sitio web al instante',
    'Organización flexible con categorías dinámicas, paleta de colores y notas favoritas',
    'Autenticación segura con Google OAuth / Email, y 100% test coverage (Vitest y Playwright)'
  ],
  progressPercent: 100,
  devices: ['Google Chrome MV3', 'Web Application', 'Mobile Friendly', 'Desktop'],
  githubUrl: 'https://github.com/ariigrangetto/clipSync',
  previewUrl: 'https://clipsyncc.vercel.app',
  videoUrl: '/clipsync-showcase.mp4',
  extensionUrl: 'https://github.com/ariigrangetto/clipSync/releases'
};

export const petToolShowcase = clipSyncShowcase;

export const socialEcosystem: SocialCard[] = [
  {
    id: '1',
    platform: 'Twitter',
    handle: '@ariidevv',
    url: 'https://x.com/ariidevv',
    gradient: 'linear-gradient(160deg, #9B85C4 0%, #C47B8E 50%, #1A1726 100%)',
    image: 'x-photo.png'
  },
  {
    id: '2',
    platform: 'GitHub / Code',
    handle: '@ariigrangetto',
    url: 'https://github.com/ariigrangetto',
    gradient: 'linear-gradient(160deg, #9B85C4 0%, #8B7FD4 50%, #161522 100%)',
    image: '/github-photo.png'
  }
];


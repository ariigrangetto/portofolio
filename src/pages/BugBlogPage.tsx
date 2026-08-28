import { useRef, useState } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Terminal,
  Shield,
  Search,
  Code,
  Activity,
  Sparkles,
  Bug,
  Play,
  Pause,
  Maximize2,
  CheckCircle2,
  FileCode2,
} from 'lucide-react';
import { BugBlogIllustration } from '../components/BugBlogIllustration.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { Footer } from '../components/Footer.tsx';

interface BugBlogPageProps {
  lang: 'ES' | 'EN';
  onToggleLang: (lang: 'ES' | 'EN') => void;
  onBack: () => void;
}

export const BugBlogPage = ({ lang, onToggleLang, onBack }: BugBlogPageProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const GITHUB_URL = 'hhttps://github.com/ariigrangetto/bug-blog';
  const LIVE_APP_URL = 'https://bug-blogg.vercel.app/';

  const scrollToVideo = () => {
    const el = document.getElementById('video-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const texts = {
    ES: {
      backBtn: 'Volver al portafolio',
      kicker: 'DOCUMENTACIÓN Y DETALLES DEL PRODUCTO',
      status: 'SISTEMA ONLINE · V1.0.0_PROD',
      title: 'BugBlog',
      tagline: 'Base de conocimiento y gestor de errores para desarrolladores con estética retro terminal.',
      heroDesc:
        'Una plataforma web full-stack diseñada para capturar stack traces, reproducir incidencias y documentar soluciones de software paso a paso. Olvídate de perder horas buscando cómo solucionaste ese error hace meses.',
      liveBtn: 'Abrir Aplicación Live',
      githubBtn: 'Ver Código en GitHub',
      videoJump: 'Ver Video Demostrativo',
      specs: [
        { label: 'AÑO', val: '2026 · En Producción' },
        { label: 'ROL', val: 'Full-Stack & Diseño UI/UX' },
        { label: 'ARQUITECTURA', val: 'React 19 + Supabase' },
        { label: 'SEGURIDAD', val: 'PostgreSQL RLS Habilitado' },
      ],
      videoSection: {
        kicker: '01 // DEMOSTRACIÓN EN VIDEO',
        title: 'Recorrido en Video de la Interfaz',
        desc: 'Sesión grabada en tiempo real demostrando el flujo de autenticación, panel de estadísticas, registro de incidencias y editor de código interactivo.',
      },
      engineeringSection: {
        kicker: '02 // VISIÓN Y PROPÓSITO',
        title: 'Transformando la depuración en conocimiento reutilizable',
        p1: 'En el día a día del desarrollo, nos enfrentamos a decenas de bugs complejos, excepciones inesperadas y trampas de arquitectura. Muchas veces, una vez encontrada la solución tras horas de análisis, ese aprendizaje queda disperso o se pierde.',
        p2: 'BugBlog nace como un command center donde registrar no sólo el error, sino su stack trace exacto, el lenguaje involucrado, los pasos de reproducción y la solución detallada con snippets de código editables.',
        quote: '"No vuelvas a resolver el mismo bug desde cero. Construye tu índice personal, consulta soluciones al instante y optimiza tu tiempo de ingeniería."',
        highlightsTitle: 'Aspectos Clave de Ingeniería',
        highlights: [
          'Aislamiento de datos con Row Level Security (RLS) en PostgreSQL.',
          'Búsqueda y filtrado instantáneo por severidad, estado y texto.',
          'Estética hacker cyberpunk sincronizada con la paleta de la app.',
          'Optimizado con React Compiler para renders a 60 FPS.',
        ],
      },
      featuresSection: {
        kicker: '03 // CARACTERÍSTICAS PRINCIPALES',
        title: 'Módulos del Sistema',
      },
      techSection: {
        kicker: '04 // STACK TECNOLÓGICO',
        title: 'Arquitectura e Infraestructura',
      },
      ctaSection: {
        badge: 'DESPLIEGUE ACTIVO',
        title: '¿Listo para explorar BugBlog?',
        desc: 'Puedes inspeccionar el código fuente completo en GitHub o acceder a la versión en vivo para interactuar con la app directamente.',
        launch: 'Lanzar App en Vivo',
        repo: 'Repositorio en GitHub',
      },
    },
    EN: {
      backBtn: 'Return to portfolio',
      kicker: 'PRODUCT DOSSIER & SYSTEM SPECS',
      status: 'SYSTEM ONLINE · V1.0.0_PROD',
      title: 'BugBlog',
      tagline: 'Terminal-inspired developer knowledge base & bug tracking index.',
      heroDesc:
        'A full-stack web application engineered to capture stack traces, reproduction steps, and document code solutions step-by-step. Never lose hours searching for a fix you already discovered months ago.',
      liveBtn: 'Open Live Application',
      githubBtn: 'View Code on GitHub',
      videoJump: 'Jump to Video Demo',
      specs: [
        { label: 'TIMELINE', val: '2026 · In Production' },
        { label: 'ROLE', val: 'Full-Stack & UI/UX Design' },
        { label: 'ARCHITECTURE', val: 'React 19 + Supabase' },
        { label: 'SECURITY', val: 'PostgreSQL RLS Active' },
      ],
      videoSection: {
        kicker: '01 // VIDEO WALKTHROUGH',
        title: 'Interface Video Demonstration',
        desc: 'Real-time recorded session demonstrating auth flow, metrics dashboard, bug logging, and the custom code editor.',
      },
      engineeringSection: {
        kicker: '02 // VISION & PURPOSE',
        title: 'Turning ephemeral debugging into structured knowledge',
        p1: 'During software development, engineers face dozens of intricate bugs, unexpected runtime exceptions, and architectural pitfalls. Often, once the solution is found after hours of work, that knowledge gets discarded or lost.',
        p2: 'BugBlog was created as a terminal command center to store not just the error, but its exact stack trace, language, reproduction steps, and solution with interactive code snippets.',
        quote: '"Never solve the same bug twice from scratch. Build your personal index, query fixes instantly, and accelerate your engineering."',
        highlightsTitle: 'Key Engineering Highlights',
        highlights: [
          'Strict data isolation via PostgreSQL Row Level Security (RLS).',
          'Instant real-time search & multi-criteria filtering.',
          'Cyberpunk terminal aesthetic synchronized with the portfolio theme.',
          'Optimized with React Compiler for smooth 60 FPS renders.',
        ],
      },
      featuresSection: {
        kicker: '03 // CORE FEATURES',
        title: 'System Modules',
      },
      techSection: {
        kicker: '04 // TECH STACK',
        title: 'Architecture & Infrastructure',
      },
      ctaSection: {
        badge: 'DEPLOYMENT ACTIVE',
        title: 'Ready to explore BugBlog?',
        desc: 'Inspect the full open source code on GitHub or launch the live deployed application to experience the terminal interface firsthand.',
        launch: 'Launch Live App',
        repo: 'GitHub Repository',
      },
    },
  };

  const t = texts[lang];

  const featureCards = [
    {
      icon: <Bug className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Registro Estructurado de Errores' : 'Structured Bug Logging',
      desc:
        lang === 'ES'
          ? 'Guarda título, categoría (Runtime, Logic, UI, Performance, Security, Network), nivel de severidad (Critical, High, Medium, Low) y snippet de código.'
          : 'Log title, category (Runtime, Logic, UI, Performance, Security, Network), severity level, and verbatim error snippets.',
    },
    {
      icon: <Code className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Editor de Código Personalizado' : 'Custom Code Editor',
      desc:
        lang === 'ES'
          ? 'Componente con numeración de líneas, indentación automática y resaltado de sintaxis para comparar el error vs la solución.'
          : 'Embedded code editor component with line numbers, automatic formatting, and side-by-side error/solution view.',
    },
    {
      icon: <Search className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Búsqueda y Filtros Instantáneos' : 'Instant Search & Filters',
      desc:
        lang === 'ES'
          ? 'Filtrado en tiempo real por estado (Abierto / Resuelto), nivel de severidad o búsqueda rápida por palabra clave.'
          : 'Real-time client search and filtering by status (Open / Solved), severity rating, or freeform text queries.',
    },
    {
      icon: <Shield className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Autenticación y Supabase RLS' : 'Auth & Row Level Security',
      desc:
        lang === 'ES'
          ? 'Flujo completo de autenticación (Login, Registro, Recuperación de contraseña) con políticas estrictas de seguridad RLS a nivel de base de datos.'
          : 'Complete auth workflow (Login, Register, Password Reset) backed by strict database-level Row Level Security policies.',
    },
    {
      icon: <Activity className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Métricas y Panel de Control' : 'Metrics & Dashboard',
      desc:
        lang === 'ES'
          ? 'Dashboard visual con contadores automáticos de bugs totales, críticos, pendientes y soluciones implementadas.'
          : 'Visual dashboard with real-time counters for total bugs, critical blockers, open issues, and solved solutions.',
    },
    {
      icon: <Terminal className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Estética Hacker y Terminal' : 'Hacker & Terminal UI',
      desc:
        lang === 'ES'
          ? 'Efecto Matrix Rain en Canvas, badges interactivos, tipografía monospace y diseño retro terminal perfectamente integrado.'
          : 'Canvas Matrix rain background, dynamic status badges, monospace typography, and retro CRT aesthetics.',
    },
  ];

  const techStack = [
    { name: 'React 19', role: 'Frontend Core' },
    { name: 'TypeScript', role: 'Type Safety' },
    { name: 'Tailwind CSS v4', role: 'Design System' },
    { name: 'Vite 8', role: 'Build Tooling' },
    { name: 'Supabase', role: 'BaaS & Auth' },
    { name: 'PostgreSQL', role: 'Database & RLS' },
  ];

  return (
    <div className="min-h-screen bg-[#0C0B12] text-[#f0efff] selection:bg-[#8B7FD4]/30 selection:text-white flex flex-col font-sans">
      <nav className="sticky top-0 z-50 border-b border-[#232130] bg-[#0C0B12]/90 backdrop-blur-md">
        <div className="flex items-center justify-between px-5 md:px-12 py-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-md bg-[#161522] border border-[#232130] text-[#9d9ab3] hover:text-white hover:border-[#8B7FD4] transition-all cursor-pointer group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>{t.backBtn}</span>
            </button>
            <span className="text-[#63607a] hidden sm:inline font-mono text-xs">/</span>
            <span className="font-display font-medium text-sm text-[#8B7FD4] hidden sm:inline">BugBlog</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1 text-xs font-mono border border-[#232130] rounded-md bg-[#161522] text-[#9d9ab3] hover:text-white hover:border-[#8B7FD4] transition-colors"
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={LIVE_APP_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1 text-xs font-mono font-semibold rounded-md bg-[#8B7FD4] text-white hover:bg-[#8B7FD4]/90 transition-all shadow-md shadow-[#8B7FD4]/20"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live App</span>
            </a>

            <div className="flex border border-[#232130] rounded-md overflow-hidden bg-[#161522] ml-1">
              <button
                type="button"
                onClick={() => onToggleLang('EN')}
                className={`px-2 py-1 font-mono text-[11px] cursor-pointer transition-colors ${lang === 'EN' ? 'bg-[#8B7FD4]/20 text-[#8B7FD4] font-semibold' : 'text-[#63607a] hover:text-[#9d9ab3]'
                  }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('ES')}
                className={`px-2 py-1 font-mono text-[11px] cursor-pointer transition-colors ${lang === 'ES' ? 'bg-[#8B7FD4]/20 text-[#8B7FD4] font-semibold' : 'text-[#63607a] hover:text-[#9d9ab3]'
                  }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-1 px-5 md:px-12 py-10 md:py-16 max-w-5xl mx-auto w-full space-y-20">
        <section className="space-y-6">
          <Reveal direction="up" delay={50}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#161522] border border-[#8B7FD4]/40 text-[#8B7FD4] font-mono text-xs tracking-widest rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-[#8B7FD4] animate-pulse" />
              {t.status}
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-2">
              <div className="space-y-4 max-w-2xl">
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none">
                  BugBlog<span className="text-[#8B7FD4]">.</span>
                </h1>
                <p className="text-lg md:text-xl text-[#8B7FD4] font-medium leading-relaxed">
                  {t.tagline}
                </p>
                <p className="text-sm md:text-[15px] text-[#9d9ab3] leading-relaxed">
                  {t.heroDesc}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <a
                    href={LIVE_APP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#8B7FD4] text-white font-medium rounded-full px-6 py-3 text-sm hover:bg-[#8B7FD4]/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#8B7FD4]/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{t.liveBtn}</span>
                  </a>

                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-[#161522] border border-[#2b283d] text-white font-medium rounded-full px-6 py-3 text-sm hover:border-[#8B7FD4] hover:text-[#8B7FD4] transition-all"
                  >
                    <FileCode2 className="w-4 h-4" />
                    <span>{t.githubBtn}</span>
                  </a>

                  <button
                    type="button"
                    onClick={scrollToVideo}
                    className="inline-flex items-center gap-2 text-xs font-mono text-[#9d9ab3] hover:text-[#f0efff] px-3 py-2 transition-colors cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5 text-[#8B7FD4]" />
                    <span>{t.videoJump}</span>
                  </button>
                </div>
              </div>

              <div className="shrink-0 flex items-center justify-center p-8 bg-[#161522] border border-[#2b283d] rounded-2xl shadow-xl shadow-black/60 relative group hover:border-[#8B7FD4]/50 transition-all">
                <div className="absolute inset-0 bg-radial from-[#8B7FD4]/10 to-transparent opacity-50 rounded-2xl" />
                <BugBlogIllustration size={104} glow={true} />
                <div className="absolute bottom-3 font-mono text-[10px] text-[#8B7FD4]/70 tracking-wider">
                  THEME_SYNCHRONIZED
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 border-t border-[#232130] mt-8">
              {t.specs.map((spec, idx) => (
                <div key={idx} className="p-3.5 bg-[#12111b] border border-[#232130] rounded-xl">
                  <span className="font-mono text-[10px] text-[#8B7FD4] block mb-1 font-semibold">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white">
                    {spec.val}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section id="video-section" className="scroll-mt-24 space-y-6">
          <Reveal direction="up" delay={100}>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8B7FD4] font-semibold mb-2">
              {t.videoSection.kicker}
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-white mb-2">
              {t.videoSection.title}
            </h2>
            <p className="text-sm text-[#9d9ab3] max-w-[60ch] mb-6">
              {t.videoSection.desc}
            </p>

            <div className="relative rounded-2xl overflow-hidden border border-[#2b283d] bg-[#12111d] shadow-2xl shadow-black/90 group">
              <div className="flex items-center justify-between border-b border-[#232130] px-4 py-3 bg-[#161522]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]/90" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]/90" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]/90" />
                  <span className="text-xs text-[#8B7FD4] font-mono font-bold ml-2 hidden sm:inline">
                    bugblog_portfolio_demo.mp4
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-[#9d9ab3]">
                  <span className="flex items-center gap-1.5 text-[#8B7FD4] text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-[#8B7FD4] animate-ping" />
                    1080P_HD
                  </span>
                  <button
                    onClick={toggleMute}
                    className="hover:text-white transition-colors px-2 py-0.5 border border-[#2b283d] rounded text-[10px] bg-[#12111b] cursor-pointer"
                  >
                    {isMuted ? 'UNMUTE' : 'MUTE'}
                  </button>
                  <button
                    onClick={handleFullscreen}
                    className="hover:text-white transition-colors cursor-pointer"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="relative aspect-video w-full bg-black/95 flex items-center justify-center">
                <video
                  ref={videoRef}
                  src="/bugblog-portfolio_2026-07-29_10-44-24.mp4"
                  className="w-full h-full object-contain"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  controls
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                <button
                  onClick={togglePlay}
                  className="absolute bottom-5 right-5 p-3 rounded-full bg-[#161522]/90 border border-[#8B7FD4]/60 text-[#8B7FD4] backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110 transition-all shadow-xl cursor-pointer"
                  aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
              </div>

              <div className="p-4 bg-[#161522]/70 border-t border-[#232130] flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs text-[#9d9ab3]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#8B7FD4]" />
                  <span>{lang === 'ES' ? 'Flujo en vivo de BugBlog: gestión de estado, filtros, auth y snippets.' : 'BugBlog live flow: state management, filters, auth and snippets.'}</span>
                </div>
                <div className="text-[#8B7FD4] font-semibold text-[11px]">60 FPS · MP4 / WEBM</div>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="space-y-6">
          <Reveal direction="up" delay={150}>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8B7FD4] font-semibold mb-2">
              {t.engineeringSection.kicker}
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-white mb-6">
              {t.engineeringSection.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              <div className="md:col-span-7 space-y-4 text-sm text-[#9d9ab3] leading-relaxed">
                <p>{t.engineeringSection.p1}</p>
                <p>{t.engineeringSection.p2}</p>
                <div className="p-5 rounded-xl bg-[#161522] border border-[#2b283d] relative mt-4">
                  <div className="font-mono text-[10px] text-[#8B7FD4] uppercase mb-1 font-bold">
                    Filosofía del Producto
                  </div>
                  <blockquote className="text-white italic text-sm leading-relaxed">
                    {t.engineeringSection.quote}
                  </blockquote>
                </div>
              </div>

              <div className="md:col-span-5 bg-[#161522] border border-[#2b283d] p-6 rounded-2xl space-y-4 shadow-xl">
                <div className="flex items-center gap-2 border-b border-[#232130] pb-3 text-white font-medium text-sm">
                  <Sparkles className="w-4 h-4 text-[#8B7FD4]" />
                  <span>{t.engineeringSection.highlightsTitle}</span>
                </div>
                <ul className="space-y-3 font-mono text-xs text-[#9d9ab3]">
                  {t.engineeringSection.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#8B7FD4] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        <section className="space-y-6">
          <Reveal direction="up" delay={200}>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8B7FD4] font-semibold mb-2">
              {t.featuresSection.kicker}
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-white mb-6">
              {t.featuresSection.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featureCards.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#161522] border border-[#2b283d] hover:border-[#8B7FD4]/60 transition-all group space-y-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#12111b] border border-[#232130] flex items-center justify-center group-hover:border-[#8B7FD4] transition-colors">
                    {feat.icon}
                  </div>
                  <h3 className="font-display font-semibold text-white text-base group-hover:text-[#8B7FD4] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#9d9ab3] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="space-y-6">
          <Reveal direction="up" delay={250}>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8B7FD4] font-semibold mb-2">
              {t.techSection.kicker}
            </div>
            <h2 className="font-display text-2xl md:text-4xl font-semibold text-white mb-6">
              {t.techSection.title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#161522] border border-[#2b283d] text-center space-y-1 hover:border-[#8B7FD4] transition-colors"
                >
                  <div className="font-semibold text-sm text-white">{tech.name}</div>
                  <div className="font-mono text-[10px] text-[#8B7FD4]">{tech.role}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="p-8 sm:p-12 rounded-2xl bg-[#161522] border border-[#8B7FD4]/40 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-radial from-[#8B7FD4]/10 via-transparent to-transparent pointer-events-none" />

          <Reveal direction="up" delay={300}>
            <div className="relative z-10 max-w-xl mx-auto space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#12111b] border border-[#8B7FD4] text-[#8B7FD4] font-mono text-xs rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#8B7FD4] animate-pulse" />
                {t.ctaSection.badge}
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">
                {t.ctaSection.title}
              </h3>

              <p className="text-sm text-[#9d9ab3] leading-relaxed">
                {t.ctaSection.desc}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={LIVE_APP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#8B7FD4] text-white font-medium rounded-full px-7 py-3 text-sm hover:bg-[#8B7FD4]/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#8B7FD4]/20 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t.ctaSection.launch}</span>
                </a>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#12111b] border border-[#2b283d] text-white font-medium rounded-full px-6 py-3 text-sm hover:border-[#8B7FD4] hover:text-[#8B7FD4] transition-all cursor-pointer"
                >
                  <FileCode2 className="w-4 h-4" />
                  <span>{t.ctaSection.repo}</span>
                </a>

                <button
                  onClick={onBack}
                  className="inline-flex items-center gap-2 text-xs font-mono text-[#9d9ab3] hover:text-white px-4 py-3 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{t.backBtn}</span>
                </button>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

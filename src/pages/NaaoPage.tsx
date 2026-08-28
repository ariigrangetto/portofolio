import { useRef, useState } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Clock,
  Sparkles,
  Bot,
  Shield,
  CheckCircle2,
  Play,
  Pause,
  Maximize2,
  FileCode2,
  Users,
  Scissors,
  Smartphone,
  TrendingUp,
} from 'lucide-react';
import { Reveal } from '../components/Reveal.tsx';
import { Footer } from '../components/Footer.tsx';

interface NaaoPageProps {
  lang: 'ES' | 'EN';
  onToggleLang: (lang: 'ES' | 'EN') => void;
  onBack: () => void;
}

export const NaaoPage = ({ lang, onToggleLang, onBack }: NaaoPageProps) => {
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

  const scrollToVideo = () => {
    const el = document.getElementById('video-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const GITHUB_URL = 'https://github.com/ariigrangetto/Naao';
  const LIVE_APP_URL = 'https://loomynat.vercel.app/';

  const texts = {
    ES: {
      backBtn: 'Volver al portafolio',
      kicker: 'DOCUMENTACIÓN Y DETALLES DEL PRODUCTO',
      status: 'SISTEMA ONLINE · CRM & IA ACTIVO',
      title: 'naao.',
      tagline: 'Turnos que se gestionan solos. Agendamiento inteligente y CRM para salones y negocios.',
      heroDesc:
        'Una plataforma full-stack para la gestión integral de turnos y relaciones con clientes (CRM). Integra sugerencias automáticas de horarios impulsadas por Google Gemini AI, historial de servicios y sincronización en tiempo real.',
      liveBtn: 'Abrir Aplicación Live',
      githubBtn: 'Ver Código en GitHub',
      videoJump: 'Ver Video Demostrativo',
      specs: [
        { label: 'AÑO', val: '2026 · En Producción' },
        { label: 'ROL', val: 'Full-Stack & Diseño UI/UX' },
        { label: 'MOTOR IA', val: 'Google Gemini AI' },
        { label: 'SEGURIDAD', val: 'Supabase Auth + RLS' },
      ],
      videoSection: {
        kicker: '01 // DEMOSTRACIÓN EN VIDEO',
        title: 'Recorrido en Video de naao.',
        desc: 'Demostración de la interfaz en tiempo real: flujo de agendamiento inteligente, sugerencias de horarios con IA, gestión de clientes y vista móvil.',
      },
      engineeringSection: {
        kicker: '02 // VISIÓN Y PROPÓSITO',
        title: 'Automatización inteligente para salones y profesionales independientes',
        p1: 'Gestionar citas en salones de belleza y negocios de servicios suele implicar mensajes interminables por WhatsApp, huecos muertos en la agenda y falta de seguimiento sobre la recurrencia de los clientes.',
        p2: 'naao. soluciona esto combinando un CRM estructurado con la potencia de Google Gemini AI. El sistema analiza automáticamente los huecos de la agenda diaria y recomienda a los clientes el horario óptimo según la duración estimada del servicio.',
        quote: '"Optimizar el tiempo no es sólo llenar la agenda, es maximizar cada hora de trabajo con recomendaciones inteligentes y atención personalizada."',
        highlightsTitle: 'Aspectos Clave de Ingeniería',
        highlights: [
          'Detección y sugerencia de huecos libres con Google Gemini API.',
          'CRM con historial de visitas, notas y métricas de recurrencia.',
          'Arquitectura segura con Supabase Auth y Row Level Security.',
          'Diseño mobile-first optimizado para agendamiento veloz.',
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
        badge: 'PLATAFORMA ACTIVA',
        title: '¿Listo para explorar naao.?',
        desc: 'Accede al código fuente completo en GitHub o prueba el agendamiento inteligente con IA.',
        launch: 'Lanzar App en Vivo',
        repo: 'Repositorio en GitHub',
      },
    },
    EN: {
      backBtn: 'Return to portfolio',
      kicker: 'PRODUCT DOSSIER & SYSTEM SPECS',
      status: 'SYSTEM ONLINE · CRM & AI ACTIVE',
      title: 'naao.',
      tagline: 'Appointments that manage themselves. Smart scheduling & CRM for salons and businesses.',
      heroDesc:
        'A full-stack web application designed for comprehensive appointment scheduling and customer relationship management (CRM). Features automated schedule gap detection powered by Google Gemini AI, service history, and real-time synchronization.',
      liveBtn: 'Open Live Application',
      githubBtn: 'View Code on GitHub',
      videoJump: 'Jump to Video Demo',
      specs: [
        { label: 'TIMELINE', val: '2026 · In Production' },
        { label: 'ROLE', val: 'Full-Stack & UI/UX Design' },
        { label: 'AI ENGINE', val: 'Google Gemini AI' },
        { label: 'SECURITY', val: 'Supabase Auth + RLS' },
      ],
      videoSection: {
        kicker: '01 // VIDEO WALKTHROUGH',
        title: 'naao. Interface Video Demonstration',
        desc: 'Real-time demonstration showing the smart booking workflow, Gemini AI schedule suggestions, client CRM management, and mobile responsiveness.',
      },
      engineeringSection: {
        kicker: '02 // VISION & PURPOSE',
        title: 'Smart automation for salons and independent service professionals',
        p1: 'Managing appointments in beauty salons and service businesses typically involves endless back-and-forth messages, lost gaps in the schedule, and zero structured tracking of client visit frequency.',
        p2: 'naao. resolves this by combining an intuitive CRM with Google Gemini AI. The engine analyzes daily availability in real-time and recommends optimal time slots tailored to service duration.',
        quote: '"Time optimization is not just filling slots; it is about maximizing every working hour through intelligent recommendations and client care."',
        highlightsTitle: 'Key Engineering Highlights',
        highlights: [
          'Automatic schedule gap detection powered by Google Gemini API.',
          'Integrated CRM with visit history, service notes, and recurrence metrics.',
          'Database security with Supabase Auth and Row Level Security policies.',
          'Mobile-first responsive UX designed for effortless booking.',
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
        badge: 'PLATFORM ACTIVE',
        title: 'Ready to explore naao.?',
        desc: 'Inspect the full open source code on GitHub or experience the AI-assisted booking workflow.',
        launch: 'Launch Live App',
        repo: 'GitHub Repository',
      },
    },
  };

  const t = texts[lang];

  const featureCards = [
    {
      icon: <Bot className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Sugerencias con Google Gemini AI' : 'Google Gemini AI Scheduling',
      desc:
        lang === 'ES'
          ? 'Algoritmo impulsado por IA que detecta huecos óptimos en la jornada y sugiere automáticamente el mejor horario para el cliente y el profesional.'
          : 'AI-driven engine that detects schedule gaps and automatically suggests the most convenient time slots.',
    },
    {
      icon: <Users className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'CRM y Ficha de Clientes' : 'Client CRM & History',
      desc:
        lang === 'ES'
          ? 'Historial de visitas anteriores, preferencias de servicio, notas personalizadas y cálculo automático de días desde la última cita.'
          : 'Complete profile for each client, tracking past visit dates, notes, and retention intervals.',
    },
    {
      icon: <Calendar className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Gestión de Turnos y Conflictos' : 'Conflict-Free Calendar',
      desc:
        lang === 'ES'
          ? 'Visualización diaria y semanal de turnos con validaciones en tiempo real para evitar solapamientos y sobreturnos no deseados.'
          : 'Daily and weekly schedule views with real-time validations preventing double-booking and overlaps.',
    },
    {
      icon: <Scissors className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Catálogo Dinámico de Servicios' : 'Dynamic Service Catalog',
      desc:
        lang === 'ES'
          ? 'Categorización por áreas (Peluquería, Uñas, Estética, Nutrición) con duración estimada y tarifas personalizadas.'
          : 'Service segmentation (Hair, Nails, Aesthetics, Styling) with custom duration and pricing settings.',
    },
    {
      icon: <Shield className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Supabase Auth y Seguridad RLS' : 'Supabase Auth & RLS',
      desc:
        lang === 'ES'
          ? 'Aislamiento estricto de datos por negocio mediante políticas Row Level Security en PostgreSQL y autenticación segura.'
          : 'Strict data isolation per business with PostgreSQL Row Level Security and secure token authentication.',
    },
    {
      icon: <Smartphone className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Experiencia Mobile-First' : 'Mobile-First Experience',
      desc:
        lang === 'ES'
          ? 'Diseñada desde el primer día para funcionar como una PWA rápida y accesible desde cualquier teléfono inteligente.'
          : 'Engineered as a responsive mobile-first web application for instantaneous booking on smartphones.',
    },
  ];

  const techStack = [
    { name: 'React 19', role: 'Frontend Core' },
    { name: 'TypeScript', role: 'Type Safety' },
    { name: 'Gemini AI', role: 'Smart AI Engine' },
    { name: 'Tailwind CSS v4', role: 'Design System' },
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
            <span className="font-display font-medium text-sm text-[#8B7FD4] hidden sm:inline">naao.</span>
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
                  naao<span className="text-[#8B7FD4]">.</span>
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

              <div className="shrink-0 flex flex-col p-6 bg-[#161522] border border-[#2b283d] rounded-2xl shadow-xl shadow-black/60 relative group hover:border-[#8B7FD4]/50 transition-all max-w-[300px]">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#8B7FD4]" />
                    <span className="font-display text-sm font-bold text-white">Gemini AI Booking</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#3fb950]">Online</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-[#8B7FD4]/10 border border-[#8B7FD4]/30 text-white flex items-start gap-2">
                    <Bot className="w-4 h-4 text-[#8B7FD4] shrink-0 mt-0.5" />
                    <span className="text-[11px] leading-snug">
                      {lang === 'ES' ? <p>Sugerencia inteligente: hueco óptimo <strong>16:30 hs</strong></p> : <p>Smart suggestion: optimal slot <strong>16:30 hs</strong></p>}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-[#9d9ab3] pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#8B7FD4]" /> 1h 30m
                    </span>
                    <span className="text-amber-300 font-mono text-[10px]"> {lang === 'ES' ? '98% Eficiencia' : '98% Efficiency'}</span>
                  </div>
                </div>
                <div className="mt-3 text-center font-mono text-[10px] text-[#8B7FD4]/70">
                  SMART_CALENDAR_CORE
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
                    naao_crm_walkthrough.mp4
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
                  src="/portfolio_16x9.mp4"
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
                  <Sparkles className="w-4 h-4 text-[#8B7FD4]" />
                  <span>{lang === 'ES' ? 'Flujo en vivo de naao.: sugerencias automáticas de horarios, CRM de clientes y turnero interactivo.' : 'Live flow of naao.: automatic schedule suggestions, customer CRM and interactive appointment booking.'}</span>
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
                    Filosofía de Arquitectura
                  </div>
                  <blockquote className="text-white italic text-sm leading-relaxed">
                    {t.engineeringSection.quote}
                  </blockquote>
                </div>
              </div>

              <div className="md:col-span-5 bg-[#161522] border border-[#2b283d] p-6 rounded-2xl space-y-4 shadow-xl">
                <div className="flex items-center gap-2 border-b border-[#232130] pb-3 text-white font-medium text-sm">
                  <TrendingUp className="w-4 h-4 text-[#8B7FD4]" />
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

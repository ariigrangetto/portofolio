import { useRef, useState } from 'react';
import {
  ArrowLeft,
  ExternalLink,
  Layers,
  Sparkles,
  Play,
  Pause,
  Maximize2,
  FileCode2,
  Download,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  Volume2,
  VolumeX,
  Laptop,
  Check,
} from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Footer } from '../components/Footer';

interface ClipSyncPageProps {
  lang: 'ES' | 'EN';
  onToggleLang: (lang: 'ES' | 'EN') => void;
  onBack: () => void;
}

export const ClipSyncPage = ({ lang, onToggleLang, onBack }: ClipSyncPageProps) => {
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

  const GITHUB_URL = 'https://github.com/ariigrangetto/clipSync';
  const LIVE_APP_URL = 'https://clipsyncc.vercel.app';
  const RELEASES_URL = 'https://github.com/ariigrangetto/clipSync/releases';

  const texts = {
    ES: {
      backBtn: 'Volver al portafolio',
      kicker: 'DOCUMENTACIÓN Y DETALLES DEL PRODUCTO',
      status: 'PRODUCCIÓN ONLINE · V1.0.4',
      title: 'ClipSync',
      tagline: 'Block de notas inteligente y sincronizado en tiempo real con extensión para navegador Google Chrome (MV3).',
      heroDesc:
        'Una solución full-stack concebida para capturar información, notas y fragmentos de código de cualquier sitio web en segundos. Integra una extensión de navegador nativa conectada a una aplicación web moderna mediante Supabase Realtime y PostgreSQL.',
      liveBtn: 'Abrir Aplicación Live',
      githubBtn: 'Ver Código en GitHub',
      downloadBtn: 'Descargar Extensión (.zip)',
      videoJump: 'Ver Video Demostrativo',
      specs: [
        { label: 'AÑO', val: '2026 · En Producción' },
        { label: 'ROL', val: 'Full-Stack, Chrome MV3 & UI/UX' },
        { label: 'ARQUITECTURA', val: 'React 19 + Supabase Realtime' },
        { label: 'CALIDAD', val: '117 Tests Pasando (Vitest + Playwright)' },
      ],
      videoSection: {
        kicker: '01 // DEMOSTRACIÓN EN VIDEO',
        title: 'Recorrido en Video y Showcase de ClipSync',
        desc: 'Demostración de la aplicación en funcionamiento: captura de notas mediante la extensión Chrome Manifest V3, sincronización en tiempo real con Supabase y gestión ágil con etiquetas y categorías.',
      },
      engineeringSection: {
        kicker: '02 // VISIÓN Y ARQUITECTURA',
        title: 'Eliminando la fricción entre la navegación y la toma de notas',
        p1: 'Durante nuestras jornadas de investigación o programación, constantemente copiamos enlaces, snippets de código y apuntes entre pestañas, aplicaciones de mensajería o blocs de notas temporales. Esto genera pérdida de contexto y dispersión de datos.',
        p2: 'ClipSync resuelve este problema integrando una extensión ligera de Google Chrome (Manifest V3) con una Web App en React 19. Al seleccionar cualquier texto en la web, un botón flotante permite capturarlo de inmediato y sincronizarlo mediante PostgreSQL y Supabase Realtime con latencia sub-50ms.',
        quote: '"Captura al vuelo lo que encuentres en la web y mantén tus notas accesibles, sincronizadas y categorizadas desde cualquier lugar."',
        highlightsTitle: 'Aspectos Clave de Ingeniería',
        highlights: [
          'Suscripciones a eventos en tiempo real con Supabase Realtime sobre PostgreSQL.',
          'Arquitectura de Extensión Chrome Manifest V3 con Content Script, background worker y puente window.postMessage.',
          'Diseño 100% responsivo y Mobile First: off-canvas drawer y tarjetas táctiles sobre Tailwind CSS v4.',
          'Autenticación robusta con Google OAuth, Email/Contraseña y políticas estrictas de Row Level Security (RLS).',
          'Pipeline CI/CD automatizado en GitHub Actions con empaquetado automático de la extensión para cada Release.',
        ],
      },
      featuresSection: {
        kicker: '03 // CAPACIDADES DEL SISTEMA',
        title: 'Funcionalidades Diseñadas para la Productividad',
      },
      extensionSection: {
        kicker: '04 // GUÍA DE INSTALACIÓN',
        title: 'Cómo instalar la Extensión de Chrome',
        steps: [
          'Descarga el archivo clipsync-extension.zip desde GitHub Releases.',
          'Descomprime el archivo zip en una carpeta local de tu computadora.',
          'Abre Google Chrome (o Brave / Edge) y dirígete a chrome://extensions.',
          'Activa el "Modo de desarrollador" en la esquina superior derecha.',
          'Haz clic en "Cargar descomprimida" (Load unpacked) y selecciona la carpeta extraída.',
        ],
      },
      stackSection: {
        kicker: '05 // STACK TECNOLÓGICO',
        title: 'Tecnologías y Herramientas',
      },
    },
    EN: {
      backBtn: 'Back to portfolio',
      kicker: 'PRODUCT DOCUMENTATION & DETAILS',
      status: 'LIVE IN PRODUCTION · V1.0.4',
      title: 'ClipSync',
      tagline: 'Smart note-taking and real-time synchronized notepad with Google Chrome Browser Extension (MV3).',
      heroDesc:
        'A full-stack utility built to capture snippets, links, and thoughts directly from any web page in seconds. Combines a native Google Chrome extension with a modern React 19 web app via Supabase Realtime and PostgreSQL.',
      liveBtn: 'Open Live Application',
      githubBtn: 'View Code on GitHub',
      downloadBtn: 'Download Extension (.zip)',
      videoJump: 'Watch Demo Video',
      specs: [
        { label: 'YEAR', val: '2026 · In Production' },
        { label: 'ROLE', val: 'Full-Stack, Chrome MV3 & UI/UX' },
        { label: 'ARCHITECTURE', val: 'React 19 + Supabase Realtime' },
        { label: 'QUALITY', val: '117 Tests Passing (Vitest + Playwright)' },
      ],
      videoSection: {
        kicker: '01 // VIDEO SHOWCASE',
        title: 'ClipSync Walkthrough & Demo',
        desc: 'Interactive video showcase demonstrating the Chrome MV3 extension capture flow, sub-50ms Supabase Realtime sync, and tag filtering.',
      },
      engineeringSection: {
        kicker: '02 // PURPOSE & ARCHITECTURE',
        title: 'Eliminating friction between browsing and note capture',
        p1: 'While researching or coding, developers and power users frequently copy text, docs, and code snippets across dozens of browser tabs and scratch files, creating fragmented workflows.',
        p2: 'ClipSync solves this by linking a lightweight Chrome MV3 extension with a modern React 19 single-page application. Select any text on any website to immediately sync it to your personal cloud notepad in sub-50ms.',
        quote: '"Capture on the fly whatever you find across the web and keep your workspace synchronized, structured, and searchable."',
        highlightsTitle: 'Engineering Highlights',
        highlights: [
          'Instant database event subscriptions using Supabase Realtime on PostgreSQL.',
          'Chrome Manifest V3 architecture with Content Script and postMessage synchronization bridge.',
          'Mobile-first responsive UX: off-canvas drawer and touch-friendly cards styled with Tailwind CSS v4.',
          'Enterprise authentication with Google OAuth, Email/Password, and strict PostgreSQL RLS policies.',
          'Automated CI/CD pipeline on GitHub Actions publishing signed extension zip assets on releases.',
        ],
      },
      featuresSection: {
        kicker: '03 // SYSTEM CAPABILITIES',
        title: 'Features Built for High Productivity',
      },
      extensionSection: {
        kicker: '04 // INSTALLATION GUIDE',
        title: 'How to Install the Chrome Extension',
        steps: [
          'Download clipsync-extension.zip from GitHub Releases.',
          'Unzip the downloaded archive into a local folder.',
          'Open Google Chrome (or Brave / Edge) and navigate to chrome://extensions.',
          'Turn on the "Developer mode" toggle in the top-right corner.',
          'Click "Load unpacked" and select the unzipped directory.',
        ],
      },
      stackSection: {
        kicker: '05 // TECH STACK',
        title: 'Technologies & Tooling',
      },
    },
  };

  const t = texts[lang];

  const featureCards = [
    {
      icon: <RefreshCw className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Sincronización en Tiempo Real' : 'Real-Time Sync',
      desc:
        lang === 'ES'
          ? 'Conexión WebSocket persistente con Supabase Realtime. Cualquier nota agregada o editada se refleja al instante en todas tus pestañas y dispositivos.'
          : 'Persistent WebSocket connection via Supabase Realtime. Notes added or modified sync across tabs and devices in under 50ms.',
    },
    {
      icon: <Layers className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Extensión de Navegador (Chrome MV3)' : 'Chrome Extension (MV3)',
      desc:
        lang === 'ES'
          ? 'Captura texto seleccionado de cualquier página con un botón flotante y comunicación bidireccional usando chrome.storage y window.postMessage.'
          : 'Capture selected text from any page with a floating button and two-way bridge communication between web app and chrome.storage.',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Categorías y Etiquetas de Color' : 'Categories & Tag Palettes',
      desc:
        lang === 'ES'
          ? 'Clasifica tus notas con etiquetas personalizadas, paleta de colores dinámicos, marcador de favoritos y motor de búsqueda instantáneo.'
          : 'Organize notes with customizable tags, dynamic color palettes, one-touch favorites, and instant search.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Seguridad y Supabase RLS' : 'Auth & PostgreSQL RLS',
      desc:
        lang === 'ES'
          ? 'Autenticación con Google OAuth o credenciales de email. Aislamiento total de datos entre usuarios mediante políticas PostgreSQL Row Level Security.'
          : 'Multi-provider authentication (Google OAuth & Email). Complete data isolation guaranteed by PostgreSQL Row Level Security.',
    },
    {
      icon: <Laptop className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? 'Diseño Mobile-First y Modo Oscuro' : 'Mobile-First & Dark Mode',
      desc:
        lang === 'ES'
          ? 'Menú drawer retráctil para móviles, tarjetas táctiles optimizadas y paleta dark mode minimalista construida sobre Tailwind CSS v4.'
          : 'Retractable mobile drawer, touch-friendly action buttons, and a sleek dark mode interface styled with Tailwind CSS v4.',
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 text-[#8B7FD4]" />,
      title: lang === 'ES' ? '117 Tests Automatizados' : '117 Automated Tests',
      desc:
        lang === 'ES'
          ? '51 pruebas unitarias con Vitest y React Testing Library, junto a 66 pruebas End-to-End con Playwright sobre Chromium, Firefox y WebKit.'
          : '51 unit tests with Vitest + Testing Library, and 66 End-to-End tests executed with Playwright across Chromium, Firefox, and WebKit.',
    },
  ];

  const techStack = [
    { name: 'React 19', role: 'Frontend Core' },
    { name: 'TypeScript', role: 'Type Safety' },
    { name: 'Tailwind CSS v4', role: 'Styling & Tokens' },
    { name: 'Vite 8', role: 'Build Tooling' },
    { name: 'Chrome Manifest V3', role: 'Browser Extension' },
    { name: 'Supabase Realtime', role: 'Real-Time Sync' },
    { name: 'PostgreSQL & RLS', role: 'Database & Security' },
    { name: 'Vitest & Playwright', role: 'Test Automation' },
  ];

  return (
    <div className="min-h-screen bg-[#0C0B12] text-[#f0efff] selection:bg-[#8B7FD4]/30 selection:text-white flex flex-col font-sans">
      {/* Top Navbar */}
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
            <span className="font-display font-medium text-sm text-[#8B7FD4] hidden sm:inline">ClipSync</span>
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
              className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono border border-[#8B7FD4]/40 rounded-md bg-[#8B7FD4]/10 text-white hover:bg-[#8B7FD4]/25 transition-colors"
            >
              <span>Live App</span>
              <ExternalLink className="w-3 h-3 text-[#8B7FD4]" />
            </a>

            <div className="flex border border-[#232130] rounded-md overflow-hidden bg-[#161522]">
              <button
                type="button"
                onClick={() => onToggleLang('EN')}
                className={`px-2 py-0.5 font-mono text-[10px] uppercase cursor-pointer ${
                  lang === 'EN' ? 'bg-[#8B7FD4]/20 text-[#8B7FD4] font-bold' : 'text-[#63607a]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('ES')}
                className={`px-2 py-0.5 font-mono text-[10px] uppercase cursor-pointer ${
                  lang === 'ES' ? 'bg-[#8B7FD4]/20 text-[#8B7FD4] font-bold' : 'text-[#63607a]'
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-5 md:px-12 py-10 md:py-16 space-y-16 md:space-y-24">
        {/* Hero Section */}
        <section className="space-y-6">
          <Reveal direction="up" delay={50}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161522] border border-[#3fb950]/40 text-[#3fb950] font-mono text-xs mb-3">
              <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
              <span>{t.status}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4">
              {t.title}
              <span className="text-[#8B7FD4]">.</span>
            </h1>

            <p className="font-display text-lg sm:text-xl text-[#8B7FD4] font-medium max-w-3xl leading-snug mb-4">
              {t.tagline}
            </p>

            <p className="text-sm sm:text-base text-[#9d9ab3] max-w-3xl leading-relaxed mb-8">
              {t.heroDesc}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={LIVE_APP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#8B7FD4] text-white font-medium rounded-full px-6 py-3 text-sm hover:bg-[#8B7FD4]/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#8B7FD4]/20"
              >
                <span>{t.liveBtn}</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#161522] border border-[#2b283d] text-xs font-mono text-[#9d9ab3] hover:text-white hover:border-[#8B7FD4] transition-all"
              >
                <FileCode2 className="w-4 h-4 text-[#8B7FD4]" />
                <span>{t.githubBtn}</span>
              </a>

              <a
                href={RELEASES_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#161522] border border-[#2b283d] text-xs font-mono text-[#9d9ab3] hover:text-white hover:border-[#8B7FD4] transition-all"
              >
                <Download className="w-4 h-4 text-[#8B7FD4]" />
                <span>{t.downloadBtn}</span>
              </a>

              <button
                onClick={scrollToVideo}
                className="inline-flex items-center gap-2 px-4 py-3 text-xs font-mono text-[#8B7FD4] hover:underline underline-offset-4 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                <span>{t.videoJump}</span>
              </button>
            </div>

            {/* Specs Bar */}
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

        {/* Video Showcase Section */}
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
                    clipsync_showcase.mp4
                  </span>
                </div>
                <div className="flex items-center gap-3 font-mono text-xs text-[#9d9ab3]">
                  <span className="flex items-center gap-1.5 text-[#3fb950] text-[11px]">
                    <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-ping" />
                    1080P_HD
                  </span>
                  <button
                    onClick={toggleMute}
                    className="hover:text-white transition-colors px-2 py-0.5 border border-[#2b283d] rounded text-[10px] bg-[#12111b] cursor-pointer flex items-center gap-1"
                  >
                    {isMuted ? <VolumeX className="w-3 h-3 text-amber-400" /> : <Volume2 className="w-3 h-3 text-[#3fb950]" />}
                    <span>{isMuted ? 'MUTE' : 'UNMUTE'}</span>
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
                  src="/clipsync-showcase.mp4"
                  poster="/products/clipsync/frame-00-at-0s.png"
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
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Engineering & Architecture Section */}
        <section className="space-y-6">
          <Reveal direction="up" delay={100}>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8B7FD4] font-semibold mb-2">
              {t.engineeringSection.kicker}
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
              {t.engineeringSection.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-[#9d9ab3] leading-relaxed mb-6">
              <p>{t.engineeringSection.p1}</p>
              <p>{t.engineeringSection.p2}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#161522]/60 border border-[#2b283d] my-6">
              <blockquote className="font-display italic text-[#8B7FD4] text-base mb-4">
                {t.engineeringSection.quote}
              </blockquote>
              <span className="font-mono text-xs text-white font-semibold block mb-3">
                {t.engineeringSection.highlightsTitle}:
              </span>
              <ul className="space-y-2">
                {t.engineeringSection.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#9d9ab3]">
                    <Check className="w-3.5 h-3.5 text-[#3fb950] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Features Cards Section */}
        <section className="space-y-6">
          <Reveal direction="up" delay={100}>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8B7FD4] font-semibold mb-2">
              {t.featuresSection.kicker}
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-6">
              {t.featuresSection.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featureCards.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#12111b] border border-[#232130] hover:border-[#8B7FD4]/50 transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#161522] border border-[#2b283d] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {feat.icon}
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">
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

        {/* Chrome Extension Installation Guide */}
        <section className="space-y-6">
          <Reveal direction="up" delay={100}>
            <div className="p-6 md:p-8 rounded-2xl bg-[#12111d] border border-[#2b283d] space-y-5">
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8B7FD4] font-semibold">
                {t.extensionSection.kicker}
              </div>
              <h2 className="font-display text-2xl font-semibold text-white">
                {t.extensionSection.title}
              </h2>
              <ol className="space-y-3">
                {t.extensionSection.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#9d9ab3]">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#8B7FD4]/20 border border-[#8B7FD4]/40 text-[#8B7FD4] font-mono text-[11px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={RELEASES_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#8B7FD4] text-white font-medium rounded-full px-5 py-2.5 text-xs hover:bg-[#8B7FD4]/90 transition-all shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.downloadBtn}</span>
                </a>
                <span className="text-[11px] font-mono text-[#63607a]">
                  manifest.json (Chrome MV3) · clipsync-extension.zip
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Tech Stack Grid */}
        <section className="space-y-6">
          <Reveal direction="up" delay={100}>
            <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8B7FD4] font-semibold mb-2">
              {t.stackSection.kicker}
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-6">
              {t.stackSection.title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {techStack.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-[#12111b] border border-[#232130] rounded-xl">
                  <span className="font-mono text-xs font-semibold text-white block">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#8B7FD4]">
                    {item.role}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </main>

      <Footer lang={lang} />
    </div>
  );
};

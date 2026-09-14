import { useRef, useState } from 'react';
import {
  ArrowRight,
  ExternalLink,
  FileCode2,
  Download,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RefreshCw,
  Sparkles,
  Layers,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { clipSyncShowcase } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface ClipSyncSectionProps {
  lang: 'ES' | 'EN';
  onExploreClipSync?: () => void;
}

export const ClipSyncSection = ({ lang, onExploreClipSync }: ClipSyncSectionProps) => {
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

  const features = [
    {
      icon: <RefreshCw className="w-4 h-4 text-[#8B7FD4] shrink-0 mt-0.5" />,
      textES: 'Sincronización en tiempo real: PostgreSQL con suscripciones a cambios instantáneos mediante Supabase Realtime.',
      textEN: 'Real-time synchronization: PostgreSQL database with instant change subscriptions powered by Supabase Realtime.',
    },
    {
      icon: <Layers className="w-4 h-4 text-[#8B7FD4] shrink-0 mt-0.5" />,
      textES: 'Extensión de navegador Chrome MV3: Captura texto seleccionado de cualquier página web y sincronízalo automáticamente o con un clic.',
      textEN: 'Chrome MV3 browser extension: Capture selected text from any web page and sync it instantly or with a single click.',
    },
    {
      icon: <Sparkles className="w-4 h-4 text-[#8B7FD4] shrink-0 mt-0.5" />,
      textES: 'Gestión y organización avanzada: Filtrado por categorías dinámicas, etiquetas con paleta de colores, favoritos y búsqueda instantánea.',
      textEN: 'Smart organization: Dynamic categories filter, customizable tag color palette, favorites, and real-time instant search.',
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#8B7FD4] shrink-0 mt-0.5" />,
      textES: 'Autenticación y seguridad: Google OAuth o Email/Contraseña con Supabase Auth y Row Level Security (RLS).',
      textEN: 'Authentication & Security: Google OAuth or Email/Password backed by Supabase Auth and strict PostgreSQL RLS policies.',
    },
    {
      icon: <CheckCircle2 className="w-4 h-4 text-[#8B7FD4] shrink-0 mt-0.5" />,
      textES: 'Calidad probada con 117 tests: 51 pruebas unitarias (Vitest) y 66 pruebas E2E (Playwright) en Chromium, Firefox y WebKit.',
      textEN: '117 automated tests passing: 51 unit tests (Vitest) and 66 E2E tests (Playwright) across Chromium, Firefox, and WebKit.',
    },
  ];

  return (
    <section id="clipsync" className="border-t border-[#232130] px-5 md:px-12 py-14 md:py-20 relative overflow-hidden">
      {/* Ambient aura glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] pointer-events-none opacity-20 blur-[140px] rounded-full"
        style={{ background: 'radial-gradient(circle, #8B7FD4 0%, #6366f1 35%, #3b82f6 60%, transparent 75%)' }}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Real App Information and CTAs */}
        <Reveal direction="left" delay={100}>
          <div className="space-y-6">
            {/* Live Product Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161522] border border-[#3fb950]/40 text-[#3fb950] font-mono text-xs shadow-lg shadow-[#3fb950]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3fb950] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3fb950]" />
              </span>
              <span className="font-semibold tracking-wider">
                {lang === 'ES' ? 'PRODUCCIÓN ONLINE · WEB & EXTENSIÓN' : 'LIVE IN PRODUCTION · WEB & EXTENSION'}
              </span>
            </div>

            <div>
              <h2 className="font-display text-[34px] md:text-[46px] font-bold leading-tight text-white mb-2">
                {clipSyncShowcase.name}
                <span className="text-[#8B7FD4]">.</span>
              </h2>

              <p className="text-base text-[#8B7FD4] font-medium leading-snug mb-3">
                {lang === 'ES'
                  ? 'Block de notas inteligente y sincronizado en tiempo real'
                  : 'Smart note-taking and real-time synchronized clipboard'}
              </p>

              <p className="text-sm text-[#9d9ab3] leading-relaxed max-w-[50ch] mb-5">
                {lang === 'ES'
                  ? 'Disponible como aplicación web moderna y Extensión de Navegador Google Chrome (Manifest V3). Captura texto de cualquier pestaña web, sincroniza al instante con Supabase Realtime y mantén tus notas, snippets e ideas siempre organizados.'
                  : 'Available as a modern web app and Google Chrome Browser Extension (Manifest V3). Capture text from any tab, synchronize instantly with Supabase Realtime, and keep notes, code snippets, and ideas organized across all sessions.'}
              </p>

              {/* Feature Bullets */}
              <div className="space-y-3 pt-1 mb-6">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#9d9ab3]">
                    {feat.icon}
                    <span className="leading-relaxed">{lang === 'ES' ? feat.textES : feat.textEN}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {onExploreClipSync && (
                <button
                  type="button"
                  onClick={onExploreClipSync}
                  className="inline-flex items-center gap-2 bg-[#8B7FD4] text-white font-medium rounded-full px-7 py-3 text-[14px] hover:bg-[#8B7FD4]/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#8B7FD4]/20 cursor-pointer"
                >
                  <span>{lang === 'ES' ? 'Explorar ClipSync' : 'Explore ClipSync'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}

              <a
                href="https://clipsyncc.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#161522] border border-[#8B7FD4]/40 text-sm font-medium text-white hover:bg-[#8B7FD4]/20 hover:border-[#8B7FD4] transition-all shadow-md cursor-pointer"
              >
                <span>{lang === 'ES' ? 'Abrir Web App' : 'Open Web App'}</span>
                <ExternalLink className="w-4 h-4 text-[#8B7FD4]" />
              </a>

              <a
                href="https://github.com/ariigrangetto/clipSync"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-[#161522] border border-[#2b283d] text-xs font-mono text-[#9d9ab3] hover:text-white hover:border-[#8B7FD4] transition-all"
              >
                <FileCode2 className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>

              <a
                href="https://github.com/ariigrangetto/clipSync/releases"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-[#161522] border border-[#2b283d] text-xs font-mono text-[#9d9ab3] hover:text-white hover:border-[#8B7FD4] transition-all"
                title={lang === 'ES' ? 'Descargar extensión de Chrome' : 'Download Chrome extension'}
              >
                <Download className="w-3.5 h-3.5 text-[#8B7FD4]" />
                <span>Extension .zip</span>
              </a>
            </div>

            {/* Architecture pill footer */}
            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-mono text-[#63607a]">
              <span className="px-2.5 py-1 rounded-md bg-[#161522] border border-[#232130]">React 19</span>
              <span className="px-2.5 py-1 rounded-md bg-[#161522] border border-[#232130]">Tailwind CSS v4</span>
              <span className="px-2.5 py-1 rounded-md bg-[#161522] border border-[#232130]">Chrome MV3</span>
              <span className="px-2.5 py-1 rounded-md bg-[#161522] border border-[#232130]">Supabase Realtime</span>
              <span className="px-2.5 py-1 rounded-md bg-[#161522] border border-[#232130]">Vitest & Playwright</span>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Interactive Video Showcase Player */}
        <Reveal direction="right" delay={200}>
          <div className="w-full rounded-2xl overflow-hidden border border-[#2b283d] bg-[#12111d] shadow-2xl shadow-black/90 relative group hover:border-[#8B7FD4]/60 transition-all">
            {/* Window Title Bar */}
            <div className="flex items-center justify-between border-b border-[#232130] px-4 py-3 bg-[#161522] relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]/90" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]/90" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]/90" />
                <span className="text-xs text-[#8B7FD4] font-bold ml-2 font-mono flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5" />
                  clipsync_showcase.mp4
                </span>
              </div>

              <div className="flex items-center gap-2.5 font-mono text-xs">
                <span className="text-[10px] text-[#3fb950] bg-[#3fb950]/10 px-2 py-0.5 rounded border border-[#3fb950]/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3fb950] animate-pulse" />
                  CHROME_MV3
                </span>
                <button
                  type="button"
                  onClick={toggleMute}
                  className="hover:text-white transition-colors px-2 py-0.5 border border-[#2b283d] rounded text-[10px] bg-[#12111b] text-[#9d9ab3] cursor-pointer flex items-center gap-1"
                  title={isMuted ? 'Activar sonido' : 'Silenciar'}
                >
                  {isMuted ? <VolumeX className="w-3 h-3 text-amber-400" /> : <Volume2 className="w-3 h-3 text-[#3fb950]" />}
                  <span>{isMuted ? 'MUTE' : 'UNMUTE'}</span>
                </button>
                <button
                  type="button"
                  onClick={handleFullscreen}
                  className="text-[#9d9ab3] hover:text-white transition-colors cursor-pointer"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Video Player Box */}
            <div className="relative aspect-video w-full bg-black/95 flex items-center justify-center overflow-hidden">
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

              {/* Floating play/pause button overlay on hover */}
              <button
                type="button"
                onClick={togglePlay}
                className="absolute bottom-5 right-5 p-3 rounded-full bg-[#161522]/90 border border-[#8B7FD4]/60 text-[#8B7FD4] backdrop-blur-sm opacity-0 group-hover:opacity-100 hover:scale-110 transition-all shadow-xl cursor-pointer"
                aria-label={isPlaying ? 'Pausar video' : 'Reproducir video'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
            </div>

            {/* Bottom App Metrics Strip */}
            <div className="grid grid-cols-2 divide-x divide-[#232130] bg-[#161522]/90 border-t border-[#232130] py-2.5 px-3 text-center font-mono">
              <div>
                <span className="text-[10px] text-[#63607a] block">REALTIME</span>
                <span className="text-xs font-semibold text-white">&lt; 50ms sync</span>
              </div>
              <div>
                <span className="text-[10px] text-[#63607a] block">EXTENSION</span>
                <span className="text-xs font-semibold text-[#8B7FD4]">Chrome MV3</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

import {
  ChevronRight,
  Sparkles,
  Zap,
  Smartphone,
  Laptop,
  Clock,
  Radio,
  Lock,
  EyeOff,
  ShieldAlert,
} from 'lucide-react';
import { clipSyncShowcase } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface ClipSyncSectionProps {
  lang: 'ES' | 'EN';
}

export const ClipSyncSection = ({ lang }: ClipSyncSectionProps) => {

  const dummyClips = [
    {
      id: 1,
      typeLabel: 'Secret Module',
      content: 'function initializeSyncEngine() { /* [CLASSIFIED CODE] */ }',
      time: 'Just now',
      color: '#8B7FD4',
    },
    {
      id: 2,
      typeLabel: 'Encrypted Stream',
      content: 'payload: e2ee_aes_gcm_encrypted_blob_••••••••••••••••',
      time: '1m ago',
      color: '#60a5fa',
    },
    {
      id: 3,
      typeLabel: 'Cross-Device Node',
      content: 'handshake_node: 0x7f83b... ⇄ workstation_remote_core',
      time: '4m ago',
      color: '#3fb950',
    },
  ];

  return (
    <section id="clipsync" className="border-t border-[#232130] px-5 md:px-12 py-14 md:py-20 relative overflow-hidden">
      {/* Background ambient aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] pointer-events-none opacity-15 blur-[130px] rounded-full"
        style={{ background: 'radial-gradient(circle, #8B7FD4 0%, #3b82f6 40%, transparent 75%)' }}
      />

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center relative z-10">
        {/* Left Column: Info with Blurred / Redacted Text & Notification */}
        <Reveal direction="left" delay={100}>
          <div className="space-y-6">
            {/* Classified Pulsating Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#161522] border border-[#8B7FD4]/40 text-[#8B7FD4] font-mono text-xs shadow-lg shadow-[#8B7FD4]/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B7FD4] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B7FD4]" />
              </span>
              <span className="font-semibold tracking-wider flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-[#8B7FD4]" />
                {lang === 'ES' ? 'PROYECTO EN DESARROLLO · TOP SECRET' : 'IN STEALTH DEVELOPMENT · TOP SECRET'}
              </span>
            </div>

            <div>
              <h2 className="font-display text-[34px] md:text-[46px] font-bold leading-tight text-white mb-2">
                {clipSyncShowcase.name}
                <span className="text-[#8B7FD4]">.</span>
              </h2>

              {/* Mystery / Classified notification tag */}
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-amber-300/90 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md mb-4">
                <EyeOff className="w-3.5 h-3.5" />
                <span>
                  {lang === 'ES'
                    ? 'Detalles y especificaciones ocultos hasta el lanzamiento oficial'
                    : 'Details and specifications redacted until official drop'}
                </span>
              </div>

              {/* Blurred / Redacted Text Container */}
              <div className="relative group select-none cursor-default">
                <div className="space-y-3 filter blur-[6px] opacity-45 select-none pointer-events-none transition-all">
                  <p className="text-base text-[#8B7FD4] font-medium leading-snug">
                    {lang === 'ES'
                      ? 'Sincronización instantánea de portapapeles y arquitectura de alta velocidad para desarrolladores.'
                      : 'High-speed clipboard synchronization and core architecture for modern developers.'}
                  </p>
                  <p className="text-sm text-[#9d9ab3] leading-relaxed max-w-[48ch]">
                    {lang === 'ES'
                      ? 'Una nueva herramienta diseñada para conectar el flujo de trabajo diario entre múltiples plataformas con cifrado militar y latencia ultrabaja en tiempo real.'
                      : 'A next-generation developer utility engineered to link cross-platform workflows with military-grade encryption and real-time low latency.'}
                  </p>

                  {/* Blurred Feature Bullets */}
                  <div className="space-y-2 pt-1">
                    {[
                      lang === 'ES' ? 'Arquitectura descentralizada P2P y transferencia en menos de 50ms' : 'Decentralized P2P architecture with sub-50ms transfers',
                      lang === 'ES' ? 'Cifrado de extremo a extremo con llaves privadas en el dispositivo' : 'Zero-knowledge end-to-end encryption with local keys',
                      lang === 'ES' ? 'Detección inteligente de formatos, código fuente y estructuras JSON' : 'Smart syntax format detection for source code & JSON',
                      lang === 'ES' ? 'Integración nativa con macOS, Windows, Linux, iOS y Android' : 'Native desktop and mobile clients with instant syncing',
                    ].map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#9d9ab3]">
                        <ChevronRight className="w-4 h-4 text-[#8B7FD4] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frosted Confidential Ribbon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="px-4 py-2 rounded-xl bg-[#0C0B12]/85 border border-[#8B7FD4]/30 backdrop-blur-xs flex items-center gap-2 shadow-xl shadow-black/80">
                    <ShieldAlert className="w-4 h-4 text-[#8B7FD4]" />
                    <span className="font-mono text-xs text-white font-semibold tracking-wider">
                      {lang === 'ES' ? '[ CONTENIDO CONFIDENCIAL ]' : '[ CONFIDENTIAL CONTENT ]'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Development Progress Bar */}
            <div className="p-4 rounded-xl bg-[#161522]/80 border border-[#2b283d] space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-white font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#8B7FD4]" />
                  {lang === 'ES' ? 'Progreso de Construcción' : 'Build Progress'}
                </span>
                <span className="text-[#8B7FD4] font-bold">{clipSyncShowcase.progressPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#12111b] overflow-hidden p-0.5 border border-[#232130]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#8B7FD4] via-[#9B85C4] to-[#60a5fa] transition-all duration-1000"
                  style={{ width: `${clipSyncShowcase.progressPercent}%` }}
                />
              </div>
              <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-[#9d9ab3]">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#8B7FD4]" />
                  <span>{lang === 'ES' ? 'Fase actual: Alpha Privada' : 'Current Stage: Private Alpha'}</span>
                </span>
                <span className="text-[#8B7FD4] font-semibold">2026 DROP</span>
              </div>
            </div>

          </div>
        </Reveal>

        {/* Right Column: Heavily Blurred Secret Mockup with Lock Overlay */}
        <Reveal direction="right" delay={200}>
          <div className="w-full max-w-[490px] md:ml-auto rounded-2xl overflow-hidden border border-[#2b283d] bg-[#12111d] shadow-2xl shadow-black/90 relative group">
            {/* Top Terminal Title Bar */}
            <div className="flex items-center justify-between border-b border-[#232130] px-4 py-3 bg-[#161522] relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F57]/90" />
                <span className="w-3 h-3 rounded-full bg-[#FEBC2E]/90" />
                <span className="w-3 h-3 rounded-full bg-[#28C840]/90" />
                <span className="text-xs text-[#8B7FD4] font-bold ml-2 font-mono flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  CLIP_SYNC // CLASSIFIED_PREVIEW
                </span>
              </div>

              <div className="flex items-center gap-2 text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                <Radio className="w-3 h-3 animate-pulse text-amber-400" />
                <span>CONFIDENTIAL</span>
              </div>
            </div>

            {/* Blurred Mockup Body */}
            <div className="relative p-5 md:p-6 min-h-[340px] flex flex-col justify-between font-mono select-none overflow-hidden">
              {/* Blurred Interior Elements */}
              <div className="space-y-3 filter blur-[9px] opacity-35 select-none pointer-events-none scale-95 transition-all">
                {/* Fake device bar */}
                <div className="px-4 py-2 bg-[#14131e] rounded-lg border border-[#232130] flex items-center justify-between text-xs text-[#9d9ab3]">
                  <div className="flex items-center gap-2 text-white">
                    <Laptop className="w-4 h-4 text-[#8B7FD4]" />
                    <span>Host Workstation</span>
                    <span>⇄</span>
                    <Smartphone className="w-4 h-4 text-[#8B7FD4]" />
                    <span>Remote Mobile</span>
                  </div>
                  <span className="text-[#8B7FD4]">E2EE Protected</span>
                </div>

                {/* Fake clips list */}
                {dummyClips.map((clip) => (
                  <div
                    key={clip.id}
                    className="p-3.5 rounded-xl border border-[#232130] bg-[#161522] space-y-2"
                  >
                    <div className="flex items-center justify-between text-[11px]">
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-semibold border"
                        style={{
                          backgroundColor: `${clip.color}20`,
                          borderColor: `${clip.color}40`,
                          color: clip.color,
                        }}
                      >
                        {clip.typeLabel}
                      </span>
                      <span className="text-[#63607a] text-[10px]">{clip.time}</span>
                    </div>
                    <div className="text-xs text-white truncate font-medium">
                      {clip.content}
                    </div>
                  </div>
                ))}
              </div>

              {/* Center Floating Classified Glass Lock Card */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-black/45 backdrop-blur-xs">
                <div className="w-14 h-14 rounded-2xl bg-[#161522]/90 border border-[#8B7FD4]/50 flex items-center justify-center text-[#8B7FD4] shadow-2xl shadow-[#8B7FD4]/30 mb-3.5 animate-pulse">
                  <Lock className="w-7 h-7" />
                </div>
                <span className="font-mono text-xs text-[#8B7FD4] tracking-[0.18em] uppercase font-bold mb-1.5">
                  {lang === 'ES' ? 'PROYECTO EN FASE SECRETA' : 'STEALTH MODE ACTIVE'}
                </span>
                <h3 className="font-display text-base font-semibold text-white mb-2">
                  {lang === 'ES' ? 'Interfaz e Ilustración Reservadas' : 'UI & Visuals Under Wraps'}
                </h3>
                <p className="text-xs text-[#9d9ab3] max-w-[32ch] leading-relaxed">
                  {lang === 'ES'
                    ? 'El diseño visual, componentes y arquitectura completa se desclasificarán el día del lanzamiento.'
                    : 'The full visual layout, features, and specs will be unveiled on public release day.'}
                </p>

                <div className="mt-4 px-3 py-1 rounded-full bg-[#8B7FD4]/10 border border-[#8B7FD4]/30 font-mono text-[10px] text-[#8B7FD4] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B7FD4] animate-ping" />
                  <span>{lang === 'ES' ? 'Acceso Privado en Preparación' : 'Private Access In Prep'}</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { ChevronRight, ArrowRight, Calendar, Clock, CheckCircle2, Bot } from 'lucide-react';
import { appShowcase } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface NaaoSectionProps {
  lang: 'ES' | 'EN';
  onExploreNaao?: () => void;
}

export const NaaoSection = ({ lang, onExploreNaao }: NaaoSectionProps) => {
  const [selectedSlot, setSelectedSlot] = useState('16:30');

  const slots = [
    { time: '14:00', status: 'busy', label: lang === 'ES' ? 'Ocupado' : 'Booked' },
    { time: '15:15', status: 'busy', label: lang === 'ES' ? 'Ocupado' : 'Booked' },
    { time: '16:30', status: 'ai', label: lang === 'ES' ? '✨ Sugerido IA' : '✨ AI Suggested' },
    { time: '18:00', status: 'available', label: lang === 'ES' ? 'Disponible' : 'Available' },
  ];

  const bullets =
    lang === 'ES'
      ? [
          'Sugerencias inteligentes con Google Gemini AI para optimizar huecos de agenda',
          'CRM integrado: historial de servicios, notas y métricas de días desde última visita',
          'Seguridad robusta con Supabase Auth, Row Level Security (RLS) y CI/CD con Vitest',
        ]
      : [
          'Smart suggestions powered by Google Gemini AI to optimize scheduling gaps',
          'Integrated CRM: service history, client notes, and days-since-last-visit metrics',
          'Robust security with Supabase Auth, Row Level Security (RLS), and CI/CD with Vitest',
        ];

  return (
    <section id="setuply" className="border-t border-[#232130] px-5 md:px-12 py-14 md:py-18">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left Column: Info & CTA */}
        <Reveal direction="left" delay={100}>
          <div>
            {/* Rating Badge */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-[14px] border border-[#232130] bg-[#1a1827] flex items-center justify-center text-[#8B7FD4] shadow-lg shadow-black/40">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="font-mono text-[10px] tracking-[0.12em] uppercase text-[#8B7FD4] font-semibold bg-[#8B7FD4]/10 px-2.5 py-1 rounded-md border border-[#8B7FD4]/20">
                {appShowcase.rating} · {lang === 'ES' ? appShowcase.badge : 'Web App · Mobile Ready · Gemini AI'}
              </span>
            </div>

            <h2 className="font-display text-[32px] md:text-[42px] leading-tight mb-4 text-white">
              {appShowcase.name}
            </h2>

            <p className="text-sm text-[#9d9ab3] leading-relaxed mb-6 max-w-[46ch]">
              {lang === 'ES'
                ? 'Sistema inteligente de agendamiento de turnos y CRM para salones de belleza y negocios de servicios. Analiza disponibilidad en tiempo real con Google Gemini AI para recomendar el horario ideal.'
                : 'Smart appointment scheduling system and CRM for beauty salons and service businesses. Analyzes availability in real time with Google Gemini AI to recommend optimal time slots.'}
            </p>

            {/* Bullets */}
            <div className="space-y-2.5 mb-7">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#9d9ab3]">
                  <ChevronRight className="w-4 h-4 text-[#8B7FD4] shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onExploreNaao}
                className="inline-flex items-center gap-2 bg-[#8B7FD4] text-white font-medium rounded-full px-7 py-3 text-[14px] hover:bg-[#8B7FD4]/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#8B7FD4]/20 cursor-pointer"
              >
                <span>{lang === 'ES' ? 'Explorar naao.' : 'Explore naao.'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://github.com/ariigrangetto/Naao"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-[#161522] border border-[#2b283d] text-xs font-mono text-[#9d9ab3] hover:text-white hover:border-[#8B7FD4] transition-all"
              >
                <span>GitHub</span>
              </a>
            </div>

            <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#63607a]">
              React 19 · TypeScript · Supabase · Gemini AI
            </div>
          </div>
        </Reveal>

        {/* Right Column: Interactive Illustration Mockup for Naao */}
        <Reveal direction="right" delay={200}>
          <div className="flex justify-center">
            <div className="w-full max-w-[460px] rounded-2xl border border-[#2b283d] bg-[#161522] p-5 md:p-6 shadow-2xl shadow-black/80 relative overflow-hidden group hover:border-[#8B7FD4]/60 transition-all">
              {/* Subtle ambient glow inside the card */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-20"
                style={{ background: 'radial-gradient(circle, #8B7FD4 0%, transparent 70%)' }}
              />

              {/* Mockup Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="font-display text-xl font-bold text-white tracking-tight">
                    naao<span className="text-[#8B7FD4]">.</span>
                  </span>
                  <span className="text-[10px] font-mono bg-[#8B7FD4]/20 text-[#8B7FD4] px-2 py-0.5 rounded-full border border-[#8B7FD4]/30">
                    CRM & AI
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#3fb950] font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
                  <span>{lang === 'ES' ? 'Agenda activa' : 'Live Schedule'}</span>
                </div>
              </div>

              {/* AI Suggestion Box */}
              <div className="bg-[#8B7FD4]/15 border border-[#8B7FD4]/30 rounded-xl p-3.5 mb-4 relative z-10 flex items-start gap-2.5">
                <Bot className="w-4 h-4 text-[#8B7FD4] shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="text-[#8B7FD4] font-semibold block mb-0.5">
                    {lang === 'ES' ? 'Sugerencia Gemini AI:' : 'Gemini AI Suggestion:'}
                  </span>
                  <span className="text-white/80 leading-relaxed">
                    {lang === 'ES' ? (
                      <>
                        Hueco óptimo detectado para <strong className="text-white">Corte & Styling</strong> hoy a las 16:30 hs.
                      </>
                    ) : (
                      <>
                        Optimal slot detected for <strong className="text-white">Cut & Styling</strong> today at 4:30 PM.
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Appointment Card */}
              <div className="bg-[#12111b] border border-[#232130] rounded-xl p-4 mb-4 relative z-10 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#8B7FD4]/25 border border-[#8B7FD4]/40 flex items-center justify-center text-white text-xs font-bold">
                      VM
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">Valentina Morales</h4>
                      <span className="text-[11px] text-white/50 block">
                        {lang === 'ES' ? 'Balayage & Nutrición' : 'Balayage & Hair Care'}
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#3fb950]/15 text-[#3fb950] border border-[#3fb950]/30">
                    <CheckCircle2 className="w-3 h-3" />
                    {lang === 'ES' ? 'Confirmado' : 'Confirmed'}
                  </span>
                </div>

                {/* CRM metrics tags */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-white/60">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#8B7FD4]" />
                    <span>{lang === 'ES' ? '16:30 hs (1h 30m)' : '4:30 PM (1h 30m)'}</span>
                  </span>
                  <span className="text-amber-300/80 font-mono text-[10px]">
                    {lang === 'ES' ? 'Última visita: hace 21 días' : 'Last visit: 21 days ago'}
                  </span>
                </div>
              </div>

              {/* Interactive Time Slot Selector */}
              <div className="relative z-10">
                <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider block mb-2">
                  {lang === 'ES' ? 'Seleccionar Horario Disponible:' : 'Select Available Time:'}
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {slots.map((slot) => {
                    const isSelected = selectedSlot === slot.time;
                    const isAi = slot.status === 'ai';
                    const isBusy = slot.status === 'busy';

                    return (
                      <button
                        key={slot.time}
                        onClick={() => !isBusy && setSelectedSlot(slot.time)}
                        disabled={isBusy}
                        className={`p-2 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                          isBusy
                            ? 'opacity-40 border-white/5 bg-white/[0.02] cursor-not-allowed'
                            : isSelected || isAi
                              ? 'border-[#8B7FD4] bg-[#8B7FD4]/20 text-white shadow-sm'
                              : 'border-white/10 bg-white/5 text-white/70 hover:border-white/20'
                        }`}
                      >
                        <span className="font-bold block">
                          {slot.time} {lang === 'ES' ? 'hs' : ''}
                        </span>
                        <span
                          className={`text-[10px] block ${
                            isAi ? 'text-[#8B7FD4] font-semibold' : 'text-white/40'
                          }`}
                        >
                          {slot.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

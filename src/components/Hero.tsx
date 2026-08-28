import { siteConfig } from '../data/portfolioData';
import { Reveal } from './Reveal';
import heroBg from '../assets/hero-bg.jpeg';

interface HeroProps {
  lang: 'ES' | 'EN';
}

export const Hero = ({ lang }: HeroProps) => {
  return (
    <section className="relative min-h-[500px] md:min-h-[620px] overflow-hidden flex items-center justify-center text-center px-5 border-b border-[#232130]">
      {/* Background Hero Image */}
      <img
        src={heroBg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />

      {/* Dark overlay & atmospheric glow for contrast and aesthetic depth */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0C0B12]/80 via-transparent to-[#0C0B12] pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-[#8B7FD4]/15 via-transparent to-transparent pointer-events-none" />

      {/* Ambient glow orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#8B7FD4]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#ff6b6b]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(139,127,212,0.2) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 max-w-[620px] py-16 md:py-24 mx-auto">
        <Reveal direction="up" delay={0}>
          {/* Kicker badge */}
          <div className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#8B7FD4] mb-5 md:mb-6 font-semibold">
            {siteConfig.hero.kicker}
          </div>

          {/* Big Display Heading */}
          <h1 className="font-display text-[44px] md:text-[64px] leading-[1.08] mb-5 md:mb-6 text-white font-medium tracking-tight">
            {lang === 'ES' ? (
              <>
                creo, programo,<br />
                <span className="text-[#8B7FD4]">y lo comparto</span> con vos.
              </>
            ) : (
              <>
                {siteConfig.hero.headingLine1}<br />
                <span className="text-[#8B7FD4]">{siteConfig.hero.headingAccent}</span> {siteConfig.hero.headingLine2}
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-[15px] md:text-[16px] text-white/70 leading-relaxed mb-8 md:mb-9 max-w-[460px] mx-auto font-light">
            {lang === 'ES'
              ? 'productos digitales, aplicaciones, código y tech que amo. hecho con café ☕'
              : siteConfig.hero.subheading}
          </p>

          {/* CTA Button */}
          <div className="flex items-center justify-center gap-4">
            <a
              href={siteConfig.hero.ctaUrl}
              className="inline-flex items-center gap-2 bg-white text-black font-medium rounded-full px-8 py-3.5 text-[15px] tracking-wide hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-black/40"
            >
              {lang === 'ES' ? 'Ver productos y apps →' : siteConfig.hero.ctaText}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

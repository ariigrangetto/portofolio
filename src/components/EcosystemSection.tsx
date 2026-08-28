import { socialEcosystem, siteConfig } from '../data/portfolioData';
import { Reveal } from './Reveal';

interface EcosystemSectionProps {
  lang: 'ES' | 'EN';
}

export const EcosystemSection = ({ lang }: EcosystemSectionProps) => {
  return (
    <section id="ecosystem" className="border-t border-[#232130] px-5 md:px-12 py-14 md:py-18">
      <Reveal direction="up" delay={50}>
        <div className="max-w-5xl mx-auto mb-8 md:mb-9">
          <h2 className="font-display text-[28px] md:text-[36px] text-white font-medium">
            {siteConfig.brandName.split('.')[0]}{' '}
            <span className="text-[#8B7FD4]">{lang === 'ES' ? 'ecosistema' : 'ecosystem'}</span>
          </h2>
        </div>
      </Reveal>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        {socialEcosystem.map((item, index) => (
          <Reveal key={item.id} direction="up" delay={100 + index * 100}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl overflow-hidden border border-[#232130] hover:border-[#3c3954] transition-all block"
            >
              <div className="w-full aspect-4/3 relative overflow-hidden bg-[#14131e]">
                <div
                  className="absolute inset-0"
                  style={{ background: item.gradient }}
                />
                <img
                  src={item.image}
                  alt={item.handle}
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0C0B12]/90 via-[#0C0B12]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#9d9ab3] block">
                    {item.platform}
                  </span>
                  <p className="font-display text-[17px] text-white font-medium mt-0.5 group-hover:text-[#8B7FD4] transition-colors">
                    {item.handle}
                  </p>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

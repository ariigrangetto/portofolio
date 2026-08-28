import { useState, type FormEvent } from 'react';
import { siteConfig } from '../data/portfolioData';

interface NewsletterSectionProps {
  lang: 'ES' | 'EN';
}

export const NewsletterSection = ({ lang }: NewsletterSectionProps) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="px-5 md:px-12 py-14 md:py-[72px]">
      <div className="max-w-5xl mx-auto bg-[#14131f] border border-[#232130] rounded-2xl p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
        {/* Subtle radial dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(139,127,212,0.08) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="font-display text-[30px] md:text-[40px] mb-2.5 text-white font-medium">
            {lang === 'ES' ? 'Enterate' : siteConfig.newsletter.title}{' '}
            <span className="text-[#8B7FD4]">
              {lang === 'ES' ? 'primero.' : siteConfig.newsletter.accent}
            </span>
          </h2>

          <p className="text-[13px] md:text-[14px] text-[#9d9ab3] mb-8 leading-relaxed">
            {lang === 'ES'
              ? 'Nuevos lanzamientos, proyectos, recursos y novedades del estudio directamente en tu bandeja de entrada. Sin spam, prometido. 😊'
              : siteConfig.newsletter.description}
          </p>

          {subscribed ? (
            <div className="p-3.5 bg-[#8B7FD4]/10 border border-[#8B7FD4]/30 rounded-xl text-sm text-[#8B7FD4] font-medium">
              ✨ {lang === 'ES' ? '¡Gracias por suscribirte! Te mantendré al tanto.' : 'Thanks for subscribing! Stay tuned.'}
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex max-w-[380px] mx-auto border-b border-[#2e2c40] focus-within:border-[#8B7FD4] transition-colors"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder={lang === 'ES' ? 'Tu correo electrónico' : siteConfig.newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-transparent border-none outline-none py-2.5 text-white text-sm placeholder:text-[#63607a]"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="text-[#8B7FD4] text-lg px-2 hover:text-[#8B7FD4]/80 transition-colors cursor-pointer hover:translate-x-1 duration-200"
              >
                →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

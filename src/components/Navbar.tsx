import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/portfolioData';

interface NavbarProps {
  lang: 'ES' | 'EN';
  onToggleLang: (lang: 'ES' | 'EN') => void;
}

export const Navbar = ({ lang, onToggleLang }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: lang === 'ES' ? 'Productos Digitales' : 'Digital Goods', href: '#products', highlight: true },
    { name: 'Studio', href: '#ecosystem' },
    { name: lang === 'ES' ? 'Mi Setup' : 'My Desk', href: '#desk' },
    { name: lang === 'ES' ? 'Contacto' : 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#232130] bg-[#0C0B12]/90 backdrop-blur-md">
      <div className="flex items-center justify-between px-5 md:px-12 py-4 md:py-5 max-w-6xl mx-auto">
        {/* Brand Logo */}
        <a
          className="font-display text-xl md:text-2xl tracking-tight text-white flex items-center hover:opacity-90 transition-opacity"
          href="#"
        >
          {siteConfig.brandName}
          <span className="text-[#8B7FD4] ml-0.5 font-bold">*</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 font-sans text-[15px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative transition-colors ${
                link.highlight
                  ? 'text-[#ff6b6b] hover:text-[#ff8585] font-medium'
                  : 'text-[#9d9ab3] hover:text-[#f0efff]'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Action: Language toggle and Mobile Menu */}
        <div className="flex items-center gap-4">
          <div className="flex border border-[#232130] rounded-md overflow-hidden bg-[#161522]" aria-label="Language">
            <button
              type="button"
              onClick={() => onToggleLang('EN')}
              className={`px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide cursor-pointer transition-colors ${
                lang === 'EN'
                  ? 'bg-[#8B7FD4]/20 text-[#8B7FD4] font-semibold'
                  : 'text-[#63607a] hover:text-[#9d9ab3]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onToggleLang('ES')}
              className={`px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide cursor-pointer transition-colors ${
                lang === 'ES'
                  ? 'bg-[#8B7FD4]/20 text-[#8B7FD4] font-semibold'
                  : 'text-[#63607a] hover:text-[#9d9ab3]'
              }`}
            >
              ES
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#9d9ab3] hover:text-white transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#232130] bg-[#12111b] px-6 py-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-base ${
                link.highlight ? 'text-[#ff6b6b]' : 'text-[#9d9ab3] hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

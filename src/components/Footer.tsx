import { siteConfig } from '../data/portfolioData';

interface FooterProps {
  lang: 'ES' | 'EN';
}

export const Footer = ({ lang }: FooterProps) => {
  return (
    <footer className="border-t border-[#232130] bg-[#09080e]">
      <div className="px-5 md:px-12 pt-12 pb-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 mb-10">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <a
              className="inline-block font-display text-xl md:text-2xl mb-2 text-white hover:opacity-80 transition-opacity"
              href="#"
            >
              {siteConfig.brandName}
              <span className="text-[#8B7FD4] font-bold">*</span>
            </a>
            <p className="text-xs text-[#63607a] leading-relaxed max-w-[280px]">
              {lang === 'ES'
                ? 'Un estudio y portafolio de desarrollo. Creo, diseño y comparto productos digitales.'
                : siteConfig.footer.description}
            </p>
          </div>

          {/* Column 1: Products */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#63607a] mb-3 font-semibold">
              {lang === 'ES' ? 'Creaciones' : 'Products'}
            </h4>
            <div className="space-y-1.5">
              <a
                className="block text-[13px] text-[#9d9ab3] hover:text-white transition-colors"
                href="#products"
              >
                BugBlog
              </a>
              <a
                className="block text-[13px] text-[#9d9ab3] hover:text-white transition-colors"
                href="#setuply"
              >
                naao.
              </a>
              <a
                className="block text-[13px] text-[#9d9ab3] hover:text-white transition-colors"
                href="#clipsync"
              >
                ClipSync <span className="text-[10px] font-mono text-[#8B7FD4] ml-1">{lang === 'ES' ? '(Próx.)' : '(Soon)'}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Studio */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#63607a] mb-3 font-semibold">
              Studio
            </h4>
            <div className="space-y-1.5">
              <a
                href="#ecosystem"
                className="block text-[13px] text-[#9d9ab3] hover:text-white transition-colors"
              >
                Ecosystem
              </a>
              <a
                href="#desk"
                className="block text-[13px] text-[#9d9ab3] hover:text-white transition-colors"
              >
                {lang === 'ES' ? 'Mi Setup' : 'My Desk'}
              </a>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-widest text-[#63607a] mb-3 font-semibold">
              {lang === 'ES' ? 'Contacto' : 'Contact'}
            </h4>
            <div className="space-y-1.5">
              <a
                href="mailto:ariigrangetto5@gmail.com"
                className="block text-[13px] text-[#9d9ab3] hover:text-[#8B7FD4] transition-colors truncate"
              >
                ariigrangetto5@gmail.com
              </a>
              <a
                href="mailto:ariigrangetto5@gmail.com?subject=Colaboracion"
                className="block text-[13px] text-[#9d9ab3] hover:text-white transition-colors"
              >
                {lang === 'ES' ? 'Propuestas de proyectos' : 'Project inquiries'}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center text-[11px] text-[#63607a] pt-5 border-t border-[#232130] flex-col md:flex-row gap-3 font-mono">
          <span>© {new Date().getFullYear()} {siteConfig.brandName} · all rights reserved</span>
          <div className="flex gap-4">
            <a className="hover:text-[#9d9ab3] transition-colors" href="#">Privacy</a>
            <a className="hover:text-[#9d9ab3] transition-colors" href="#">Terms</a>
          </div>
          <span>{siteConfig.footer.location}</span>
        </div>
      </div>
    </footer>
  );
};

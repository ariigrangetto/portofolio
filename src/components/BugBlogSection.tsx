import type { ReactNode } from 'react';
import {
  Shield,
  Bug,
  Code,
  Terminal,
  Activity,
  Cpu,
  Search,
  Zap,
  Sparkles,
  ArrowRight,
  Database,
  AlertTriangle,
  CheckCircle2,
} from 'lucide-react';
import { flagshipProduct, siteConfig } from '../data/portfolioData';
import { Reveal } from './Reveal';
import { BugBlogIllustration } from './BugBlogIllustration';

interface BugBlogSectionProps {
  lang: 'ES' | 'EN';
  onExploreBugBlog?: () => void;
}

export const BugBlogSection = ({ lang, onExploreBugBlog }: BugBlogSectionProps) => {
  const iconMap: Record<string, ReactNode> = {
    Shield: <Shield className="w-4.5 h-4.5 text-[#8B7FD4] shrink-0 mt-0.5" />,
    Bug: <Bug className="w-4.5 h-4.5 text-[#8B7FD4] shrink-0 mt-0.5" />,
    Code: <Code className="w-4.5 h-4.5 text-[#8B7FD4] shrink-0 mt-0.5" />,
    Terminal: <Terminal className="w-4.5 h-4.5 text-[#8B7FD4] shrink-0 mt-0.5" />,
    Activity: <Activity className="w-4.5 h-4.5 text-[#8B7FD4] shrink-0 mt-0.5" />,
    Cpu: <Cpu className="w-4.5 h-4.5 text-[#8B7FD4] shrink-0 mt-0.5" />,
    Search: <Search className="w-4.5 h-4.5 text-[#8B7FD4] shrink-0 mt-0.5" />,
    Zap: <Zap className="w-4.5 h-4.5 text-[#8B7FD4] shrink-0 mt-0.5" />,
  };

  return (
    <div id="products" className="scroll-mt-16">
      <Reveal direction="up" delay={50}>
        <section className="px-5 md:px-12 pt-14 md:pt-18 pb-8 md:pb-10 max-w-5xl mx-auto">
          <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8B7FD4] mb-3 font-semibold">
            {siteConfig.productsHeader.kicker}
          </div>
          <h2 className="font-display text-[32px] md:text-[44px] leading-tight mb-3 text-white font-medium">
            {siteConfig.brandName.split('.')[0]}{' '}
            <span className="text-[#8B7FD4]">{siteConfig.productsHeader.title}</span>
          </h2>
          <p className="text-sm md:text-[15px] text-[#9d9ab3] leading-relaxed max-w-[54ch]">
            {lang === 'ES'
              ? 'Aplicaciones y productos digitales creados para mi propio flujo de trabajo, ahora disponibles para todos.'
              : siteConfig.productsHeader.subtitle}
          </p>
        </section>
      </Reveal>

      <section className="px-5 md:px-12 pb-14 md:pb-18">
        <div className="max-w-5xl mx-auto">
          <Reveal direction="up" delay={100}>
            <div className="relative rounded-2xl overflow-hidden border border-[#2b283d] bg-[#12111d] shadow-2xl shadow-black/80 mb-9 md:mb-11 group hover:border-[#8B7FD4]/60 transition-all font-mono">
              <div className="flex items-center justify-between border-b border-[#232130] px-4 py-3 bg-[#161522] backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]/90" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]/90" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]/90" />
                  <span className="text-xs text-[#8B7FD4] font-bold ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    BUG_BLOG // DEV_DATABASE
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-1.5">
                    <BugBlogIllustration size={22} glow={false} showTile={false} />
                  </div>
                  <span className="text-[10px] text-[#8B7FD4] bg-[#8B7FD4]/10 px-2.5 py-0.5 rounded border border-[#8B7FD4]/30">
                    SYS_STATUS: ONLINE · v1.0.0
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-6 bg-radial from-[#8B7FD4]/08 via-[#12111d] to-[#0C0B12] space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div className="bg-[#161522] border border-[#2b283d] rounded-lg p-3 flex items-center gap-3 hover:border-[#8B7FD4]/40 transition-colors">
                    <Database className="w-4 h-4 text-[#8B7FD4]" />
                    <div>
                      <span className="text-[10px] text-[#9d9ab3] block tracking-widest">TOTAL_BUGS</span>
                      <span className="text-lg font-bold text-white">24</span>
                    </div>
                  </div>
                  <div className="bg-[#161522] border border-[#2b283d] rounded-lg p-3 flex items-center gap-3 hover:border-red-500/40 transition-colors">
                    <AlertTriangle className="w-4 h-4 text-red-400" />
                    <div>
                      <span className="text-[10px] text-red-400/80 block tracking-widest">CRITICAL</span>
                      <span className="text-lg font-bold text-red-400">2</span>
                    </div>
                  </div>
                  <div className="bg-[#161522] border border-[#2b283d] rounded-lg p-3 flex items-center gap-3 hover:border-[#8B7FD4]/40 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#8B7FD4]" />
                    <div>
                      <span className="text-[10px] text-[#9d9ab3] block tracking-widest">SOLVED</span>
                      <span className="text-lg font-bold text-[#8B7FD4]">18</span>
                    </div>
                  </div>
                  <div className="bg-[#161522] border border-[#2b283d] rounded-lg p-3 flex items-center gap-3 hover:border-amber-400/40 transition-colors">
                    <Terminal className="w-4 h-4 text-amber-400" />
                    <div>
                      <span className="text-[10px] text-amber-400/80 block tracking-widest">OPEN</span>
                      <span className="text-lg font-bold text-amber-400">4</span>
                    </div>
                  </div>
                </div>

                <div className="border border-[#2b283d] rounded-lg bg-[#161522]/80 overflow-hidden divide-y divide-[#232130] text-xs">
                  <div className="p-3 flex items-center justify-between hover:bg-[#8B7FD4]/08 transition-colors gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-white font-medium truncate">
                        CORS Origin Policy header missing in Supabase Edge
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-[10px]">
                        Critical
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#8B7FD4]/15 text-[#8B7FD4] border border-[#8B7FD4]/30 text-[10px]">
                        Network
                      </span>
                      <span className="text-[#8B7FD4] text-[10px] font-semibold">Solved</span>
                    </div>
                  </div>

                  <div className="p-3 flex items-center justify-between hover:bg-[#8B7FD4]/08 transition-colors gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-white font-medium truncate">
                        JWT token refresh race condition on route change
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 text-[10px]">
                        High
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#8B7FD4]/15 text-[#8B7FD4] border border-[#8B7FD4]/30 text-[10px]">
                        Security
                      </span>
                      <span className="text-amber-400 text-[10px] font-semibold">Open</span>
                    </div>
                  </div>

                  <div className="p-3 flex items-center justify-between hover:bg-[#8B7FD4]/08 transition-colors gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-white font-medium truncate">
                        CodeEditor syntax highlighter line break alignment
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px]">
                        Medium
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#8B7FD4]/15 text-[#8B7FD4] border border-[#8B7FD4]/30 text-[10px]">
                        UI
                      </span>
                      <span className="text-[#8B7FD4] text-[10px] font-semibold">Solved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-8 md:gap-12 md:items-start">
            <Reveal direction="up" delay={150}>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#8B7FD4]/10 text-[#8B7FD4] border border-[#8B7FD4]/20 font-semibold">
                    React 19 + TypeScript + Supabase
                  </span>
                </div>
                <h3 className="font-display text-[32px] md:text-[42px] leading-tight mb-4 text-white">
                  <span className="text-[#8B7FD4]">{flagshipProduct.name}</span>
                </h3>
                <p className="text-sm text-[#9d9ab3] leading-relaxed mb-7 max-w-[46ch]">
                  {flagshipProduct.description}
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={onExploreBugBlog}
                    className="inline-flex items-center gap-2 bg-[#8B7FD4] text-white font-medium rounded-full px-7 py-3 text-[14px] hover:bg-[#8B7FD4]/90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#8B7FD4]/20 cursor-pointer"
                  >
                    <span>{lang === 'ES' ? `Explorar ${flagshipProduct.name}` : `Explore ${flagshipProduct.name}`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <a
                    href="https://github.com/ariigrangetto/bug-blog"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-3 rounded-full bg-[#161522] border border-[#2b283d] text-xs font-mono text-[#9d9ab3] hover:text-white hover:border-[#8B7FD4] transition-all"
                  >
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {flagshipProduct.features.map((feat, index) => (
                <Reveal key={index} direction="up" delay={100 + index * 40}>
                  <div className="flex items-start gap-3">
                    {iconMap[feat.icon] || <Sparkles className="w-4.5 h-4.5 text-[#8B7FD4] shrink-0 mt-0.5" />}
                    <span className="text-[13px] text-[#9d9ab3] leading-relaxed">
                      {feat.text}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

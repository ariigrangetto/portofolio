import { siteConfig } from '../data/portfolioData';

export const TickerBar = () => {
  const tickerItems = Array(6).fill({
    text: siteConfig.ticker.text,
    linkText: siteConfig.ticker.linkText,
    url: siteConfig.ticker.url,
  });

  return (
    <div className="bg-[#8B7FD4] text-white py-2.5 font-display text-sm tracking-wide overflow-hidden select-none">
      <div className="ticker-track">
        {tickerItems.map((item, index) => (
          <span key={`ticker-1-${index}`} className="inline-flex items-center">
            <span className="mx-5 inline-flex items-center gap-2">
              <span>{item.text}</span>
              <a
                href={item.url}
                className="underline underline-offset-2 hover:opacity-80 transition-opacity font-medium"
              >
                {item.linkText}
              </a>
              <span aria-hidden="true" className="text-amber-200">✦</span>
            </span>
            <span aria-hidden="true" className="text-white/40">•</span>
          </span>
        ))}
        {tickerItems.map((item, index) => (
          <span key={`ticker-2-${index}`} className="inline-flex items-center" aria-hidden="true">
            <span className="mx-5 inline-flex items-center gap-2">
              <span>{item.text}</span>
              <a
                href={item.url}
                className="underline underline-offset-2 hover:opacity-80 transition-opacity font-medium"
              >
                {item.linkText}
              </a>
              <span aria-hidden="true" className="text-amber-200">✦</span>
            </span>
            <span aria-hidden="true" className="text-white/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
};

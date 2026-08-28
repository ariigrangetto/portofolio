import { useState, useEffect } from 'react';
import { TickerBar } from './components/TickerBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BugBlogSection } from './components/BugBlogSection';
import { NaaoSection } from './components/NaaoSection';
import { ClipSyncSection } from './components/ClipSyncSection';
import { EcosystemSection } from './components/EcosystemSection';
import { ReachMeSection } from './components/ReachMeSection';
import { Footer } from './components/Footer';
import { BugBlogPage } from './pages/BugBlogPage';
import { NaaoPage } from './pages/NaaoPage';

export function App() {
  const [lang, setLang] = useState<'ES' | 'EN'>('ES');
  const [currentView, setCurrentView] = useState<'home' | 'bugblog' | 'naao'>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('bugblog') || hash.includes('bugblog')) {
        return 'bugblog';
      }
      if (path.includes('naao') || hash.includes('naao')) {
        return 'naao';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes('bugblog') || hash.includes('bugblog')) {
        setCurrentView('bugblog');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else if (path.includes('naao') || hash.includes('naao')) {
        setCurrentView('naao');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToBugBlog = () => {
    setCurrentView('bugblog');
    window.history.pushState({}, '', '#/bugblog');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToNaao = () => {
    setCurrentView('naao');
    window.history.pushState({}, '', '#/naao');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentView('home');
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'bugblog') {
    return (
      <BugBlogPage
        lang={lang}
        onToggleLang={setLang}
        onBack={navigateToHome}
      />
    );
  }

  if (currentView === 'naao') {
    return (
      <NaaoPage
        lang={lang}
        onToggleLang={setLang}
        onBack={navigateToHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#0C0B12] text-[#f0efff] selection:bg-[#8B7FD4]/30 selection:text-white flex flex-col font-sans">
      <TickerBar />
      <Navbar lang={lang} onToggleLang={setLang} />

      <main className="flex-1">
        <Hero lang={lang} />
        <BugBlogSection lang={lang} onExploreBugBlog={navigateToBugBlog} />
        <NaaoSection lang={lang} onExploreNaao={navigateToNaao} />
        <ClipSyncSection lang={lang} />
        {/* <NewsletterSection lang={lang} /> */}
        <EcosystemSection lang={lang} />
        <ReachMeSection lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default App;

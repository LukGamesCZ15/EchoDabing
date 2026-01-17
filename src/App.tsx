import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { I18nRoot } from '@/i18n/I18nRoot';
import HomePage from '@/pages/HomePage';
import TeamPage from '@/pages/TeamPage';
import DabersPage from '@/pages/DabersPage';
import VideosPage from '@/pages/VideosPage';
import { AboutPageClient } from '@/components/pages/AboutPage';
import { ContactPageClient } from '@/components/pages/ContactPage';
import NotFound from '@/app/not-found';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <I18nRoot>
      <div className="flex flex-col min-h-screen bg-slate-950 text-white font-sans selection:bg-neon-red/30 selection:text-white">
        <ScrollToTopOnRouteChange />
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tym" element={<TeamPage />} />
            <Route path="/daberi" element={<DabersPage />} />
            <Route path="/video" element={<VideosPage />} />
            <Route path="/o-nas" element={<AboutPageClient />} />
            <Route path="/kontakt" element={<ContactPageClient />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </I18nRoot>
  );
}

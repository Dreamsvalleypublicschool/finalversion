import { useState, useEffect, Suspense, lazy } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
// Lazy-load secondary pages and interactive modals for optimal payload reduction & Core Web Vitals
const AboutPage = lazy(() => import('./components/pages/AboutPage').then(m => ({ default: m.AboutPage })));
const AcademicsPage = lazy(() => import('./components/pages/AcademicsPage').then(m => ({ default: m.AcademicsPage })));
const FacilitiesPage = lazy(() => import('./components/pages/FacilitiesPage').then(m => ({ default: m.FacilitiesPage })));
const ActivitiesPage = lazy(() => import('./components/pages/ActivitiesPage').then(m => ({ default: m.ActivitiesPage })));
const RulesPage = lazy(() => import('./components/pages/RulesPage').then(m => ({ default: m.RulesPage })));
const GalleryPage = lazy(() => import('./components/pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const ContactPage = lazy(() => import('./components/pages/ContactPage').then(m => ({ default: m.ContactPage })));
const AdmissionModal = lazy(() => import('./components/AdmissionModal').then(m => ({ default: m.AdmissionModal })));
const LeaveApplicationModal = lazy(() => import('./components/LeaveApplicationModal').then(m => ({ default: m.LeaveApplicationModal })));

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isLeaveModalOpen, setIsLeaveModalOpen] = useState(false);

  // Dynamic Document Title and Meta Description for SEO & Agentic Browsing
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: 'Dreams Valley Public School Ichol | Satna (M.P.)',
      about: 'About Us & Leadership | Dreams Valley Public School Ichol',
      academics: 'Academic Curriculum & Streams (Nursery to 12th) | Dreams Valley',
      facilities: 'Campus Facilities, Labs & Sports | Dreams Valley Public School',
      activities: 'Student Co-Curricular Activities & Events | Dreams Valley',
      rules: 'Code of Conduct, Policies & Bus Transit | Dreams Valley Public School',
      gallery: 'Campus Life Photo Gallery | Dreams Valley Public School Ichol',
      contact: 'Contact & Admissions Helpdesk | Dreams Valley Public School Ichol',
    };
    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  // Deep linking and hash navigation support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 
        'about', 
        'academics', 
        'facilities', 
        'activities', 
        'rules', 
        'gallery', 
        'contact'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#172B73] via-[#101E53] to-[#172B73] text-white antialiased selection:bg-[#F4511E]/25 selection:text-[#F4511E] relative">
      
      {/* Seamless School & Education Doodle Pattern across entire website */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-repeat opacity-[0.055] select-none"
        style={{
          backgroundImage: `url('/school_assets/school_doodle_pattern.svg')`,
          backgroundSize: '460px 460px',
        }}
        aria-hidden="true" 
      />

      {/* Static Subtle Ambient Lighting Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-transparent to-black/25" 
        aria-hidden="true" 
      />

      {/* Top Header Navigation */}
      <div className="relative z-40">
        <Header 
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
          onOpenLeaveModal={() => setIsLeaveModalOpen(true)}
        />
      </div>

      {/* Main Page Content */}
      <main className="flex-1 relative z-10">
        <Suspense 
          fallback={
            <div 
              className="min-h-[60vh] flex items-center justify-center p-12 text-white/70" 
              role="status" 
              aria-live="polite"
              aria-label="Loading page content"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-[#FF7A00] animate-spin" />
                <span className="text-xs font-semibold tracking-wider uppercase text-white/70">
                  Loading Content...
                </span>
              </div>
            </div>
          }
        >
          {currentPage === 'home' && (
            <HomePage 
              onNavigate={handleNavigate}
              onOpenAdmission={() => setIsAdmissionOpen(true)}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage 
              onNavigate={handleNavigate}
              onOpenAdmission={() => setIsAdmissionOpen(true)}
            />
          )}

          {currentPage === 'academics' && (
            <AcademicsPage 
              onNavigate={handleNavigate}
              onOpenAdmission={() => setIsAdmissionOpen(true)}
            />
          )}

          {currentPage === 'facilities' && (
            <FacilitiesPage 
              onNavigate={handleNavigate}
              onOpenAdmission={() => setIsAdmissionOpen(true)}
            />
          )}

          {currentPage === 'activities' && (
            <ActivitiesPage 
              onNavigate={handleNavigate}
              onOpenAdmission={() => setIsAdmissionOpen(true)}
            />
          )}

          {currentPage === 'rules' && (
            <RulesPage 
              onNavigate={handleNavigate}
              onOpenAdmission={() => setIsAdmissionOpen(true)}
            />
          )}

          {currentPage === 'gallery' && (
            <GalleryPage 
              onNavigate={handleNavigate}
              onOpenAdmission={() => setIsAdmissionOpen(true)}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage 
              onNavigate={handleNavigate}
              onOpenAdmission={() => setIsAdmissionOpen(true)}
            />
          )}
        </Suspense>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer 
          onNavigate={handleNavigate}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
          onOpenLeaveModal={() => setIsLeaveModalOpen(true)}
        />
      </div>

      {/* Lazy-Loaded Modals */}
      <Suspense fallback={null}>
        {isAdmissionOpen && (
          <AdmissionModal 
            isOpen={isAdmissionOpen}
            onClose={() => setIsAdmissionOpen(false)}
          />
        )}

        {isLeaveModalOpen && (
          <LeaveApplicationModal 
            isOpen={isLeaveModalOpen}
            onClose={() => setIsLeaveModalOpen(false)}
          />
        )}
      </Suspense>

    </div>
  );
}

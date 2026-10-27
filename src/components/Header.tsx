import React from 'react';
import { PageId } from '../types';
import { CardNav, CardNavItem } from './reactbits/CardNav';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenAdmission: () => void;
  onOpenLeaveModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onNavigate, 
  onOpenAdmission,
  onOpenLeaveModal
}) => {
  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems: CardNavItem[] = [
    {
      label: 'About School',
      description: 'Our heritage, educational society, leadership & campus facilities.',
      bgColor: '#FFFFFF',
      textColor: '#172B73',
      links: [
        { label: 'Home Overview', onClick: () => handleLinkClick('home') },
        { label: 'About Us & Leadership', onClick: () => handleLinkClick('about') },
        { label: 'Campus Facilities', onClick: () => handleLinkClick('facilities') },
        { label: 'Rules & Code of Conduct', onClick: () => handleLinkClick('rules') }
      ]
    },
    {
      label: 'Academic Life',
      description: 'Nursery to 12th (Maths, Biology, Commerce, Arts) curriculum & life.',
      bgColor: '#F3F6FB',
      textColor: '#172B73',
      links: [
        { label: 'Curriculum & Uniforms', onClick: () => handleLinkClick('academics') },
        { label: 'Student Activities (29+)', onClick: () => handleLinkClick('activities') },
        { label: 'Official Photo Gallery', onClick: () => handleLinkClick('gallery') }
      ]
    },
    {
      label: 'Admissions & Desk',
      description: 'Session 2026–27 registration, leave application & contact helpline.',
      bgColor: '#FFF9F6',
      textColor: '#172B73',
      links: [
        { label: 'Apply for Admission', onClick: () => onOpenAdmission() },
        { label: 'Apply for Leave Application', onClick: () => onOpenLeaveModal() },
        { label: 'Contact Us & Campus Map', onClick: () => handleLinkClick('contact') }
      ]
    }
  ];

  const brandLogo = (
    <button 
      onClick={() => handleLinkClick('home')}
      className="flex items-center text-left focus:outline-hidden group cursor-pointer py-1"
      aria-label="Dreams Valley Public School Home"
    >
      <span className="font-extrabold font-heading text-white tracking-tight leading-none transition-colors group-hover:text-white/90">
        {/* Mobile View: D.V.P.S to prevent overflow / alignment issues */}
        <span className="inline sm:hidden text-lg font-black tracking-wider text-white">
          D.V.P.S
        </span>
        {/* Tablet / Desktop View: Full School Name */}
        <span className="hidden sm:inline text-base sm:text-lg md:text-xl font-bold whitespace-nowrap text-white">
          Dreams Valley Public School
        </span>
      </span>
    </button>
  );

  return (
    <header className="sticky top-0 z-40 bg-[#101E53]/85 backdrop-blur-md border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2">
        <CardNav
          logo={brandLogo}
          logoAlt="Dreams Valley Public School"
          items={navItems}
          cta={{
            label: 'Apply Now',
            onClick: onOpenAdmission
          }}
          theme="dark"
          surface="glass"
          accentColor="#F4511E"
          cardEffect="rise"
          openOn="click"
          cardHeight={190}
          maxWidth={1200}
        />
      </div>
    </header>
  );
};

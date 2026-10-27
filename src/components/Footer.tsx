import React, { useState, useRef, useEffect } from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO, IMPORTANT_LINKS } from '../data/schoolData';
import { MapPin, ExternalLink, Award, ShieldCheck, Globe, MessageCircle, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmission: () => void;
  onOpenLeaveModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmission, onOpenLeaveModal }) => {
  const [isDevMenuOpen, setIsDevMenuOpen] = useState(false);
  const devMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (devMenuRef.current && !devMenuRef.current.contains(event.target as Node)) {
        setIsDevMenuOpen(false);
      }
    };

    if (isDevMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isDevMenuOpen]);

  const quickLinks: { id: string; label: string; action?: () => void }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academic Curriculum' },
    { id: 'facilities', label: 'School Facilities' },
    { id: 'activities', label: 'Student Activities' },
    ...(onOpenLeaveModal ? [{ id: 'leave', label: 'Apply for Leave Application', action: onOpenLeaveModal }] : []),
    { id: 'rules', label: 'Code of Conduct & Rules' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'contact', label: 'Contact & Location' }
  ];

  return (
    <footer className="bg-[#172B73] text-white/90 border-t border-[#172B73]">
      <h2 className="sr-only">Footer Information &amp; Links</h2>
      {/* Top Value Banner */}
      <div className="border-b border-white/10 bg-[#12225B] py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
              <Award className="w-6 h-6 text-[#F4511E]" />
            </div>
            <div>
              <p className="text-sm font-bold text-white font-heading">
                Under Gaharwar Educational &amp; Welfare Society
              </p>
              <p className="text-xs text-white/70">
                School Code: 312328 · DISE: 23130806809 · Established 2016 · Nursery to Class XII
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenAdmission}
              className="btn-admissions px-4 py-2 text-xs font-semibold cursor-pointer shadow-md rounded-[10px]"
            >
              Apply for Admission
            </button>
          </div>
        </div>
      </div>

      {/* Main Swiss Grid Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 shrink-0 border border-white/20">
                <img 
                  src={SCHOOL_INFO.logoUrl} 
                  alt="Dreams Valley Logo" 
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-base leading-tight font-heading">
                  Dreams Valley Public EM School
                </h3>
              </div>
            </div>
            <p className="text-xs text-white/75 leading-relaxed">
              Equitably providing high quality, efficient, and inspiring educational programs from Nursery to Class XII, nurturing students&apos; problem-solving, aesthetic, and moral excellence.
            </p>
            <div className="pt-2 text-xs text-white/80 space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <span>Motto: &quot;{SCHOOL_INFO.motto}&quot;</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/90 font-heading border-b border-white/10 pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-white/75 hover:text-[#FF7A00] transition-colors flex items-center gap-1.5 cursor-pointer text-left font-medium"
                    >
                      <span className="text-[#F4511E]">›</span> {link.label}
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        onNavigate(link.id as PageId);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-white/75 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <span className="text-[#F4511E]">›</span> {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Boards & Education Portals */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/90 font-heading border-b border-white/10 pb-2">
              Official Boards &amp; Portals
            </h3>
            <ul className="space-y-2 text-xs">
              {IMPORTANT_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/75 hover:text-[#F4511E] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 text-white/40" />
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10 text-white/60 text-[11px]">
                <span>Student Houses: Kalam · Maharana Pratap · Ambedkar · Agrasen</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Campus Contacts */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/90 font-heading border-b border-white/10 pb-2">
              Campus Contact
            </h3>
            
            <div className="text-xs text-white/75 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address.full}</span>
              </div>
              
              <div className="pt-2 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Principal Sir (MR. SATYAVRAT SINGH):</span>
                  <a href={`tel:${SCHOOL_INFO.contacts.principal}`} className="text-white hover:underline font-mono">
                    {SCHOOL_INFO.contacts.principal}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Director Sir (MR. VINOD KUMAR SINGH):</span>
                  <a href={`tel:${SCHOOL_INFO.contacts.director}`} className="text-white hover:underline font-mono">
                    {SCHOOL_INFO.contacts.director}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Vice Principal &amp; Transport:</span>
                  <a href={`tel:${SCHOOL_INFO.contacts.vicePrincipalAndTransport}`} className="text-white hover:underline font-mono">
                    {SCHOOL_INFO.contacts.vicePrincipalAndTransport}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Account Desk:</span>
                  <a href={`tel:${SCHOOL_INFO.contacts.accountSection}`} className="text-white hover:underline font-mono">
                    {SCHOOL_INFO.contacts.accountSection}
                  </a>
                </div>
                <div className="pt-1.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/60">Email:</span>
                  <a href={`mailto:${SCHOOL_INFO.contacts.email}`} className="text-white hover:underline">
                    {SCHOOL_INFO.contacts.email}
                  </a>
                </div>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-white/60">Location:</span>
                  <a 
                    href={SCHOOL_INFO.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#F4511E] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer with Interactive Developer Attribution */}
      <div className="border-t border-white/10 bg-[#0E1A47] py-4 px-4 sm:px-6 text-xs text-white/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Dreams Valley Public School, Ichol. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 relative">
            <span>Under &quot;Gaharwar Educational &amp; Welfare Society&quot;</span>
            <span className="text-white/30">·</span>
            
            {/* Interactive Developer Credit Link & Dropdown */}
            <div className="relative inline-block" ref={devMenuRef}>
              <span className="text-white/60">Design &amp; Developed By </span>
              <button
                type="button"
                onClick={() => setIsDevMenuOpen(!isDevMenuOpen)}
                className="text-[#FF7A00] hover:text-[#ff9d3b] font-semibold underline underline-offset-2 transition-colors cursor-pointer inline-flex items-center gap-1"
                aria-expanded={isDevMenuOpen}
                aria-haspopup="true"
                title="Click for contact options"
              >
                <span>Rituraj Soni (Social Auctus)</span>
                <span className="text-[10px] text-white/50">▾</span>
              </button>

              {/* Choice Popup / Dropdown Modal */}
              {isDevMenuOpen && (
                <div className="absolute right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 bottom-full mb-3 w-64 p-3 rounded-2xl bg-[#0f1d4d]/98 border border-white/20 shadow-2xl backdrop-blur-xl z-50 animate-in fade-in zoom-in-95 duration-150 text-white text-left">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                    <div>
                      <p className="text-xs font-bold text-white font-heading">Rituraj Soni</p>
                      <p className="text-[10px] text-[#FF7A00] font-medium">Social Auctus</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsDevMenuOpen(false)}
                      className="p-1 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Close"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    {/* Option 1: Website Link */}
                    <a
                      href="https://www.socialauctus.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsDevMenuOpen(false)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 hover:border-[#FF7A00]/40 transition-all cursor-pointer group"
                    >
                      <span className="flex items-center gap-2">
                        <Globe className="w-3.5 h-3.5 text-[#FF7A00]" />
                        <span>Website Link</span>
                      </span>
                      <ExternalLink className="w-3 h-3 text-white/50 group-hover:text-white transition-colors" />
                    </a>

                    {/* Option 2: WhatsApp */}
                    <a
                      href="https://api.whatsapp.com/send?phone=918982451250"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsDevMenuOpen(false)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 text-emerald-200 hover:text-white border border-[#25D366]/40 transition-all cursor-pointer group"
                    >
                      <span className="flex items-center gap-2">
                        <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>WhatsApp Chat</span>
                      </span>
                      <span className="text-[10px] font-mono text-emerald-300 group-hover:text-white">+91 8982451250</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

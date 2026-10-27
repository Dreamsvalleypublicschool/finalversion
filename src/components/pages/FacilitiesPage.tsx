import React, { useState } from 'react';
import { PageId } from '../../types';
import { FACILITIES, SCHOOL_INFO } from '../../data/schoolData';
import { CheckCircle2, ChevronRight, Laptop, BookOpen, ShieldCheck, Trophy, Building } from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent';

interface FacilitiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmission: () => void;
}

export const FacilitiesPage: React.FC<FacilitiesPageProps> = ({ onNavigate, onOpenAdmission }) => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Technology', 'Academic', 'Safety', 'Sports', 'Infrastructure'];

  const filteredFacilities = filter === 'All' 
    ? FACILITIES 
    : FACILITIES.filter(f => f.category === filter);

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#101E53] via-[#172B73] to-[#12225B] text-white py-14 sm:py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.06] bg-repeat pointer-events-none select-none" 
          style={{ backgroundImage: "url('/school_assets/school_doodle_pattern.svg')", backgroundSize: '460px 460px' }} 
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedContent distance={35} direction="vertical" duration={0.8} trigger="mount" className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#FF7A00] border border-white/15">
              <span>Modern Infrastructure &amp; Amenities · Ichol Campus</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
              School Facilities
            </h1>
            <p className="text-white/80 max-w-3xl text-sm sm:text-base leading-relaxed font-normal">
              Purpose-built infrastructure designed to foster intellectual curiosity, physical fitness, digital fluency, and student safety in an inspiring green campus.
            </p>
          </AnimatedContent>
        </div>
      </section>

      {/* 2. Interactive Category Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={20} direction="vertical" duration={0.6} trigger="mount">
          <div className="soft-card p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-white font-heading">Explore Campus Amenities</h2>
              <p className="text-xs text-white/70">Showing {filteredFacilities.length} specialized school facilities</p>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer outline-none focus:outline-none focus:ring-0 ${
                    filter === cat
                      ? 'bg-[#FF7A00] text-white shadow-xs'
                      : 'text-white/80 hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* 3. Facilities Grid (Content-Focused Cards Without Photos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent key={filter} distance={30} direction="vertical" duration={0.6} trigger="mount">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFacilities.map((fac) => (
            <div 
              key={fac.id}
              className="soft-card-interactive p-6 flex flex-col justify-between space-y-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-xl hover:border-white/25 transition-all"
            >
              <div className="space-y-4">
                {/* Category & Icon Strip */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-[#FF7A00]">
                      {fac.category === 'Technology' && <Laptop className="w-4 h-4" />}
                      {fac.category === 'Academic' && <BookOpen className="w-4 h-4" />}
                      {fac.category === 'Safety' && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                      {fac.category === 'Sports' && <Trophy className="w-4 h-4 text-amber-400" />}
                      {fac.category === 'Infrastructure' && <Building className="w-4 h-4" />}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A00]">
                      {fac.category} Facility
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 text-[10px] font-semibold border border-white/15">
                    Standard Campus Feature
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-bold text-white text-base sm:text-lg font-heading leading-snug">
                    {fac.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                    {fac.fullDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A00] block">
                    Key Highlights &amp; Standards:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-white/90">
                    {fac.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 bg-black/25 p-2 rounded-lg border border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight text-white/85">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-white/60 font-medium">Verified Campus Quality</span>
                <button
                  type="button"
                  onClick={onOpenAdmission}
                  className="font-semibold text-[#FF7A00] hover:text-[#ff9433] inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Inquire / Enroll</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        </AnimatedContent>
      </section>

      {/* 4. Campus Tour Invitation (Soft UI Card) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={35} direction="vertical" duration={0.7} trigger="scroll">
          <div className="soft-card p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/20 text-[#FF7A00] border border-orange-500/30">
                  Schedule an In-Person Visit
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  Experience the Facilities in Person
                </h2>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-2xl font-normal">
                  We invite prospective parents to tour our smart digital classrooms, science and computer lab, settled library, and athletic running track on Satna Road, Ichol.
                </p>
                <div className="text-xs text-white/70 pt-1 flex flex-wrap gap-4 font-medium">
                  <span>Visiting Hours: 10:00 AM – 12:00 PM / 1:00 PM – 2:30 PM</span>
                  <span>·</span>
                  <span>Principal Helpline: {SCHOOL_INFO.contacts.principal}</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  type="button"
                  onClick={onOpenAdmission}
                  className="btn-admissions py-3 px-4 text-xs font-semibold text-center cursor-pointer w-full rounded-xl"
                >
                  Register for Admission
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="px-4 py-3 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-center cursor-pointer w-full"
                >
                  Directions &amp; Contact Map
                </button>
              </div>
            </div>
          </div>
        </AnimatedContent>
      </section>

    </div>
  );
};

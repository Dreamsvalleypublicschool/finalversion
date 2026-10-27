import React from 'react';
import { PageId } from '../../types';
import { ABOUT_CONTENT, SCHOOL_INFO } from '../../data/schoolData';
import { 
  Target, 
  Eye, 
  ArrowRight
} from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmission: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenAdmission }) => {
  return (
    <div className="space-y-14 sm:space-y-20 pb-20">
      
      {/* 1. Header Banner (Royal Navy #172B73) */}
      <section className="bg-gradient-to-r from-[#101E53] via-[#172B73] to-[#12225B] text-white py-14 sm:py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.06] bg-repeat pointer-events-none select-none" 
          style={{ backgroundImage: "url('/school_assets/school_doodle_pattern.svg')", backgroundSize: '460px 460px' }} 
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedContent distance={35} direction="vertical" duration={0.8} trigger="mount" className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#FF7A00] border border-white/15">
              <span>Our Foundation &amp; Philosophy · Estd. 2016</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
              About Dreams Valley Public School
            </h1>
            <p className="text-white/80 max-w-3xl text-sm sm:text-base leading-relaxed font-normal">
              Run under the aegis of <strong className="text-white font-semibold">&quot;{SCHOOL_INFO.society}&quot;</strong>, we are committed to equitably providing high quality, efficient and effective educational programs in an inspiring English-medium environment.
            </p>
          </AnimatedContent>
        </div>
      </section>

      {/* 2. Institutional Overview with Authentic Photos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={40} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-8 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                  Foundational Principles
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  Nurturing Human Dignity &amp; Moral Excellence
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                {ABOUT_CONTENT.overview.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="soft-card p-6 text-xs space-y-3">
                <span className="font-bold text-sm block text-white font-heading border-b border-white/10 pb-2">
                  Official Recognition &amp; Accreditations
                </span>
                <div className="space-y-2.5 text-white/85">
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-white/60">School Code:</span>
                    <strong className="font-mono text-white font-semibold">{SCHOOL_INFO.schoolCode}</strong>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-white/60">DISE Code:</span>
                    <strong className="font-mono text-white font-semibold">{SCHOOL_INFO.diseCode}</strong>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-white/60">Established:</span>
                    <strong className="text-white font-semibold">2016</strong>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-white/60">Medium:</span>
                    <strong className="text-white font-semibold">English Medium</strong>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-white/60">Coverage:</span>
                    <strong className="text-white font-semibold">Nursery to Class XII</strong>
                  </div>
                </div>
              </div>

              <div className="soft-card p-6 text-xs space-y-2 border-l-4 border-l-[#FF7A00]">
                <span className="font-bold text-sm block text-[#FF7A00] font-heading">
                  Parent Welfare Society
                </span>
                <p className="text-white/80 leading-relaxed">
                  Run under <strong className="text-white font-semibold">{SCHOOL_INFO.society}</strong>, ensuring high-standard modern schooling with accessibility and community empowerment across Ichol, Unchehra, and Satna.
                </p>
              </div>
            </div>

          </div>
        </AnimatedContent>
      </section>

      {/* 3. LEADERSHIP DESK: DIRECTOR SIR & PRINCIPAL SIR (Luxury Soft UI Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
              School Guardians
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
              Messages from Director &amp; Principal
            </h2>
            <p className="text-xs sm:text-sm text-white/80">
              Dedicated leadership guiding students toward academic eminence and ethical character.
            </p>
          </div>
        </AnimatedContent>

        {/* DIRECTOR SIR CARD */}
        <AnimatedContent distance={40} direction="vertical" duration={0.85} threshold={0.1}>
          <div className="soft-card p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Director Photo */}
              <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
                <div className="w-52 h-64 rounded-2xl overflow-hidden border border-white/20 shadow-md bg-slate-900/40 shrink-0">
                  <img 
                    src={ABOUT_CONTENT.directorMessage.image} 
                    alt="Director Sir MR. VINOD KUMAR SINGH - Dreams Valley Public School" 
                    width={208}
                    height={256}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-orange-500/20 text-[#FF7A00] border border-orange-500/30">
                    Director Sir
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading mt-1">
                    MR. VINOD KUMAR SINGH
                  </h3>
                  <p className="text-xs text-white/70">
                    Dreams Valley Public (E.M.) School
                  </p>
                  <p className="text-xs text-white/70 font-mono mt-0.5">
                    Helpline: {SCHOOL_INFO.contacts.director}
                  </p>
                </div>
              </div>

              {/* Director Message Text */}
              <div className="md:col-span-8 space-y-4">
                <div className="border-b border-white/15 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      Message from the Director
                    </h3>
                    <p className="text-xs font-bold text-[#FF7A00] mt-0.5">
                      MR. VINOD KUMAR SINGH
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#FF7A00] uppercase">
                    Moral &amp; Ethical Compass
                  </span>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                  {ABOUT_CONTENT.directorMessage.text.map((paragraph, idx) => (
                    <p key={idx}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/70">
                  <span className="font-semibold text-white">MR. VINOD KUMAR SINGH &middot; Director Desk</span>
                  <span className="italic text-white/80">&ldquo;Making our country a dream-country for all&rdquo;</span>
                </div>
              </div>

            </div>
          </div>
        </AnimatedContent>

        {/* PRINCIPAL SIR CARD */}
        <AnimatedContent distance={40} direction="vertical" duration={0.85} delay={0.1} threshold={0.1}>
          <div className="soft-card p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Principal Photo */}
              <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
                <div className="w-52 h-64 rounded-2xl overflow-hidden border border-white/20 shadow-md bg-slate-900/40 shrink-0">
                  <img 
                    src={ABOUT_CONTENT.principalMessage.image} 
                    alt="Principal Sir MR. SATYAVRAT SINGH - Dreams Valley Public School" 
                    width={208}
                    height={256}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-orange-500/20 text-[#FF7A00] border border-orange-500/30">
                    Principal Sir
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading mt-1">
                    MR. SATYAVRAT SINGH
                  </h3>
                  <p className="text-xs text-white/70">
                    Dreams Valley Public (E.M.) School
                  </p>
                  <p className="text-xs text-white/70 font-mono mt-0.5">
                    Direct Line: {SCHOOL_INFO.contacts.principal}
                  </p>
                </div>
              </div>

              {/* Principal Message Text */}
              <div className="md:col-span-8 space-y-4">
                <div className="border-b border-white/15 pb-3 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                      From the Desk of Principal
                    </h3>
                    <p className="text-xs font-bold text-[#FF7A00] mt-0.5">
                      MR. SATYAVRAT SINGH
                    </p>
                  </div>
                  <span className="text-xs font-semibold text-[#FF7A00] uppercase">
                    Holistic Education
                  </span>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                  {ABOUT_CONTENT.principalMessage.text.map((paragraph, idx) => (
                    <p key={idx}>
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-white/70">
                  <span className="font-semibold text-white">MR. SATYAVRAT SINGH &middot; Principal Desk</span>
                  <span className="font-mono text-white/80">Call: {SCHOOL_INFO.contacts.principal}</span>
                </div>
              </div>

            </div>
          </div>
        </AnimatedContent>

      </section>

      {/* 4. MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={40} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="soft-card p-8 space-y-4 border-l-4 border-l-[#F4511E]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#FF7A00] flex items-center justify-center border border-orange-500/30">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">Our Mission</h3>
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-normal">
                &ldquo;{ABOUT_CONTENT.mission}&rdquo;
              </p>
            </div>

            <div className="soft-card p-8 space-y-4 border-l-4 border-l-[#FF7A00]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#FF7A00] flex items-center justify-center border border-orange-500/30">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white font-heading">Our Vision</h3>
              </div>
              <p className="text-sm text-white/80 leading-relaxed font-normal">
                &ldquo;{ABOUT_CONTENT.vision}&rdquo;
              </p>
            </div>

          </div>
        </AnimatedContent>
      </section>

      {/* 5. 7 INSTITUTIONAL AIMS (Swiss Grid Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="border-b border-white/10 pb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
              Guiding Philosophy
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
              The 7 Core Institutional Aims
            </h2>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={40} direction="vertical" duration={0.85} delay={0.1} threshold={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT_CONTENT.aims.map((aim, idx) => (
              <div 
                key={idx}
                className="soft-card-interactive p-6 space-y-3 flex items-start gap-4"
              >
                <span className="w-8 h-8 rounded-lg bg-white/15 text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-white/20">
                  0{idx + 1}
                </span>
                <p className="text-xs sm:text-sm font-medium text-white/90 leading-relaxed pt-0.5">
                  {aim}
                </p>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </section>

      {/* 6. Bottom Navigation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="soft-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <h2 className="text-lg font-bold text-white font-heading">
                Ready to learn more about Academics or Admissions?
              </h2>
              <p className="text-xs text-white/80 mt-1">
                Explore school timings, uniform dress code, student clubs, and online admission procedures.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('academics')}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Academics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={onOpenAdmission}
                className="btn-admissions px-5 py-2.5 text-xs font-semibold cursor-pointer shadow-md rounded-xl"
              >
                Apply Online
              </button>
            </div>
          </div>
        </AnimatedContent>
      </section>

    </div>
  );
};

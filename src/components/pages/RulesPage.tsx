import React, { useState } from 'react';
import { PageId } from '../../types';
import { 
  SCHOOL_RULES_STUDENTS, 
  PARENT_GUIDELINES, 
  BUS_RULES, 
  COMMITTEES, 
  SCHOOL_INFO 
} from '../../data/schoolData';
import { 
  Bus, 
  AlertTriangle
} from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent';

interface RulesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmission?: () => void;
}

export const RulesPage: React.FC<RulesPageProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<'students' | 'parents' | 'bus' | 'committees'>('students');

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#101E53] via-[#172B73] to-[#12225B] text-white py-14 sm:py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-[0.06] bg-repeat pointer-events-none select-none" 
          style={{ backgroundImage: "url('/school_assets/school_doodle_pattern.svg')", backgroundSize: '460px 460px' }} 
        />
        <AnimatedContent distance={30} direction="vertical" duration={0.7} trigger="mount">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#FF7A00] border border-white/15">
              <span>Governance &amp; Code of Conduct · School Regulations</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
              Rules, Regulations &amp; Policies
            </h1>
            <p className="text-white/80 max-w-3xl text-sm sm:text-base leading-relaxed font-normal">
              Essential guidelines for students, mutual parent responsibilities, bus transit safety rules, and administrative oversight committees.
            </p>
          </div>
        </AnimatedContent>
      </section>

      {/* 2. Section Selector Tabs (Swiss Grid Soft UI Navigation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={20} direction="vertical" duration={0.6} trigger="mount">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/15">
          {[
            { id: 'students', label: 'School Rules for Students' },
            { id: 'parents', label: 'To The Parents (Guidelines)' },
            { id: 'bus', label: 'Bus Transportation Rules' },
            { id: 'committees', label: 'School Committees' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as typeof activeSection)}
              className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer outline-none focus:outline-none focus:ring-0 ${
                activeSection === tab.id
                  ? 'bg-[#FF7A00] text-white shadow-md'
                  : 'text-white/80 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        </AnimatedContent>
      </section>

      {/* 3. Section Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent key={activeSection} distance={25} direction="vertical" duration={0.5} trigger="mount">
        
        {/* SECTION 1: STUDENTS RULES */}
        {activeSection === 'students' && (
          <div className="soft-card p-6 sm:p-10 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Student Discipline
              </span>
              <h2 className="text-2xl font-bold text-white font-heading mt-1">
                Official Code of Conduct for Students
              </h2>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                All enrolled students are expected to adhere strictly to these 22 core school regulations.
              </p>
            </div>

            <div className="space-y-3">
              {SCHOOL_RULES_STUDENTS.map((rule, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#FF7A00] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                    {rule}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-4 text-xs text-white/90 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-white">Confiscation Policy:</strong>
                Valuable items like gold/diamond jewellery, electronic gadgets, sharp blades, or scissors are strictly barred. If found, articles will be confiscated by authorities and returned only to parents in person.
              </div>
            </div>
          </div>
        )}

        {/* SECTION 2: PARENT GUIDELINES */}
        {activeSection === 'parents' && (
          <div className="soft-card p-6 sm:p-10 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Parental Partnership
              </span>
              <h2 className="text-2xl font-bold text-white font-heading mt-1">
                To The Parents: Mutual Responsibilities
              </h2>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                &ldquo;Without parental cooperation, we cannot assure complete educational and personality development.&rdquo;
              </p>
            </div>

            <div className="space-y-3">
              {PARENT_GUIDELINES.map((guideline, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors flex items-start gap-3.5"
                >
                  <div className="w-7 h-7 rounded-lg bg-[#FF7A00] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed pt-0.5">
                    {guideline}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-xl p-5 text-xs text-white/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-bold text-sm block text-white font-heading">
                  Parent Meeting Hours with Authorities
                </span>
                <p className="text-white/75">
                  10:30 AM to 12:30 PM on working days. Please schedule prior notice via school desk.
                </p>
              </div>
              <a
                href={`tel:${SCHOOL_INFO.contacts.principal}`}
                className="btn-admissions px-4 py-2 text-xs font-semibold shrink-0 text-center inline-block rounded-[10px]"
              >
                Call Principal Office
              </a>
            </div>
          </div>
        )}

        {/* SECTION 3: BUS RULES */}
        {activeSection === 'bus' && (
          <div className="soft-card p-6 sm:p-10 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/15 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                  Fleet Transport
                </span>
                <h2 className="text-2xl font-bold text-white font-heading mt-1">
                  Bus Transportation Rules &amp; Policies
                </h2>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  GPS-monitored student bus transit covering Ichol, Unchehra, and Satna Road.
                </p>
              </div>
              <div className="bg-orange-500/20 border border-orange-500/30 px-4 py-2 rounded-xl text-xs shrink-0">
                <span className="text-white/70 block font-medium">Vice Principal &amp; Transport Desk:</span>
                <a href={`tel:${SCHOOL_INFO.contacts.vicePrincipalAndTransport}`} className="font-bold text-[#FF7A00] font-mono text-sm hover:underline">
                  {SCHOOL_INFO.contacts.vicePrincipalAndTransport}
                </a>
              </div>
            </div>

            <div className="space-y-3">
              {BUS_RULES.map((rule, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 transition-colors flex items-start gap-3.5"
                >
                  <Bus className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {rule}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-xl p-5 text-xs text-white/90 space-y-2">
              <span className="font-bold text-white text-sm block font-heading">
                Parent Escort Safety Clause:
              </span>
              <p className="text-white/80">
                When your child departs the bus at the designated bus stop, the safety of your child is the responsibility of the parents. In case of authorized escorts, parents must submit a formal written authorization letter to the bus desk.
              </p>
            </div>
          </div>
        )}

        {/* SECTION 4: COMMITTEES */}
        {activeSection === 'committees' && (
          <div className="soft-card p-6 sm:p-10 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Administration &amp; Oversight
              </span>
              <h2 className="text-2xl font-bold text-white font-heading mt-1">
                Institutional School Committees
              </h2>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                Ensuring democratic governance, transparent assessment, and event coordination.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COMMITTEES.map((comm, idx) => (
                <div key={idx} className="soft-card p-6 space-y-2">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-orange-500/20 text-[#FF7A00] border border-orange-500/30">
                    Committee #{idx + 1}
                  </span>
                  <h3 className="font-bold text-white text-base font-heading">{comm.name}</h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">{comm.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        </AnimatedContent>
      </section>

      {/* 4. Bottom Support Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={35} direction="vertical" duration={0.7} trigger="scroll">
        <div className="soft-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h2 className="text-lg font-bold text-white font-heading">
              Have questions about school policies or bus routes?
            </h2>
            <p className="text-xs text-white/80 mt-1">
              Our administrative desk is at your service for any clarification.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="btn-admissions px-5 py-2.5 text-xs font-semibold shrink-0 cursor-pointer rounded-[10px]"
          >
            Contact Administrative Office
          </button>
        </div>
        </AnimatedContent>
      </section>

    </div>
  );
};

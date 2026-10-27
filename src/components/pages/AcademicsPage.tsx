import React, { useState } from 'react';
import { PageId } from '../../types';
import { 
  SCHOOL_TIMINGS, 
  HOUSES, 
  UNIFORMS, 
  STUDENT_CLUBS, 
  ANNUAL_CELEBRATIONS, 
  SCHOOL_INFO,
  SENIOR_STREAMS
} from '../../data/schoolData';
import { 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  Calculator,
  Dna,
  TrendingUp,
  Palette
} from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent';
import DayWiseUniformSection from '../DayWiseUniformSection';

interface AcademicsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmission: () => void;
}

export const AcademicsPage: React.FC<AcademicsPageProps> = ({ onNavigate, onOpenAdmission }) => {
  const [activeTab, setActiveTab] = useState<'procedure' | 'streams' | 'timings' | 'houses' | 'uniform' | 'clubs' | 'calendar'>('procedure');

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
              <span>Academic Guidelines · Nursery to 12th</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
              Academic Life &amp; Streams
            </h1>
            <p className="text-white/80 max-w-3xl text-sm sm:text-base leading-relaxed font-normal">
              Comprehensive curriculum from Nursery to 12th. Senior Secondary (Classes 11th &amp; 12th) offers specialized streams in <strong className="text-white font-semibold">Maths, Biology, Commerce, and Arts</strong>.
            </p>
          </AnimatedContent>
        </div>
      </section>

      {/* 2. Interactive Section Tabs (Swiss Grid Soft UI Navigation) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={20} direction="vertical" duration={0.6} trigger="mount">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-white/15">
          {[
            { id: 'procedure', label: 'Admission Procedure' },
            { id: 'streams', label: '11th & 12th Streams (Maths, Bio, Comm, Arts)' },
            { id: 'timings', label: 'School Timings' },
            { id: 'houses', label: 'House System (4 Houses)' },
            { id: 'uniform', label: 'Uniform Code' },
            { id: 'clubs', label: 'Student Clubs' },
            { id: 'calendar', label: 'Annual Celebrations' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer outline-none focus:outline-none focus:ring-0 ${
                activeTab === tab.id
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

      {/* 3. Tab Contents */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent key={activeTab} distance={25} direction="vertical" duration={0.6} trigger="mount">
        
        {/* TAB 1: ADMISSION PROCEDURE */}
        {activeTab === 'procedure' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="soft-card p-6 sm:p-10 space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                    Official Process
                  </span>
                  <h2 className="text-2xl font-bold text-white font-heading mt-1">
                    Admission Procedure &amp; Registration
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={onOpenAdmission}
                  className="btn-admissions px-5 py-2.5 text-xs font-semibold cursor-pointer shadow-md rounded-[10px]"
                >
                  Apply Online Now
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                <div className="soft-card p-5 space-y-3">
                  <span className="w-8 h-8 rounded-lg bg-white/15 text-white font-mono font-bold text-xs flex items-center justify-center border border-white/20">
                    01
                  </span>
                  <h3 className="font-bold text-white text-sm font-heading">
                    Registration at School Office
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Name of candidate seeking admission is registered at the school office desk. The official registration form is issued.
                  </p>
                </div>

                <div className="soft-card p-5 space-y-3">
                  <span className="w-8 h-8 rounded-lg bg-[#FF7A00] text-white font-mono font-bold text-xs flex items-center justify-center border border-white/20">
                    02
                  </span>
                  <h3 className="font-bold text-white text-sm font-heading">
                    Form Submission &amp; Photo
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Form duly filled must be returned along with one stamp-size photograph and necessary birth/previous school marksheets before cutoff.
                  </p>
                </div>

                <div className="soft-card p-5 space-y-3">
                  <span className="w-8 h-8 rounded-lg bg-[#F4511E] text-white font-mono font-bold text-xs flex items-center justify-center border border-white/20">
                    03
                  </span>
                  <h3 className="font-bold text-white text-sm font-heading">
                    Lottery &amp; Interview
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    For Nursery to Class I, admissions follow the transparent lottery system. Upper classes undertake a diagnostic interaction.
                  </p>
                </div>

                <div className="soft-card p-5 space-y-3">
                  <span className="w-8 h-8 rounded-lg bg-white/15 text-white font-mono font-bold text-xs flex items-center justify-center border border-white/20">
                    04
                  </span>
                  <h3 className="font-bold text-white text-sm font-heading">
                    Fee Deposit &amp; Enrollment
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Selected applicants complete admission formalities after depositing required fees, getting bus pass, and receiving uniforms.
                  </p>
                </div>

              </div>

              {/* Special Note Box */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-5 text-xs text-white/90 space-y-2 backdrop-blur-md">
                <div className="flex items-center gap-2 font-bold text-sm text-white">
                  <AlertCircle className="w-4 h-4 text-[#FF7A00]" />
                  Important Admission Conditions
                </div>
                <ul className="list-disc list-inside space-y-1 text-white/80">
                  <li>The admission form issued by the school is strictly <strong>non-transferable</strong> and should be used in its original form.</li>
                  <li><strong>Payment of Fees:</strong> Fees can be paid in advance for three months or more at the Accounts section.</li>
                  <li>Fee receipts must be safely retained by parents until the end of the academic year.</li>
                </ul>
              </div>

            </div>
          </div>
        )}

        {/* TAB: SENIOR SECONDARY STREAMS (11TH & 12TH) */}
        {activeTab === 'streams' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div className="soft-card p-6 sm:p-10 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                    Classes 11th &amp; 12th (Senior Secondary)
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-1">
                    Four Specialized Academic Streams
                  </h2>
                  <p className="text-xs sm:text-sm text-white/80 mt-1">
                    Dreams Valley Public School offers four rigorous, career-focused streams for Class 11th &amp; 12th students: <strong className="text-white">Maths, Biology, Commerce, and Arts</strong>.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenAdmission}
                  className="btn-admissions px-5 py-2.5 text-xs font-semibold cursor-pointer shrink-0 shadow-md rounded-[10px]"
                >
                  Apply for Class 11th / 12th
                </button>
              </div>

              {/* 4 Streams Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SENIOR_STREAMS.map((stream) => (
                  <div
                    key={stream.id}
                    className="soft-card p-6 space-y-4 border-t-4 flex flex-col justify-between"
                    style={{ borderTopColor: stream.color }}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span 
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase"
                          style={{ backgroundColor: `${stream.color}25`, color: stream.color }}
                        >
                          {stream.badge}
                        </span>
                        <span className="text-xs font-mono font-bold text-white/90">
                          Class 11 &amp; 12
                        </span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        {stream.id === 'maths' && <Calculator className="w-5 h-5 text-white" />}
                        {stream.id === 'biology' && <Dna className="w-5 h-5 text-[#FF7A00]" />}
                        {stream.id === 'commerce' && <TrendingUp className="w-5 h-5 text-[#F4511E]" />}
                        {stream.id === 'arts' && <Palette className="w-5 h-5 text-purple-300" />}
                        <h3 className="text-lg font-bold text-white font-heading">
                          {stream.name}
                        </h3>
                      </div>

                      <p className="text-xs text-white/80 leading-relaxed">
                        {stream.description}
                      </p>

                      {/* Core Subjects */}
                      <div className="pt-2 border-t border-white/15 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase text-white block">
                          Core Prescribed Subjects:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {stream.coreSubjects.map((sub, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-0.5 rounded-md bg-white/10 border border-white/15 text-[11px] font-medium text-white/90"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Career Paths */}
                      <div className="pt-2 border-t border-white/15 space-y-1.5">
                        <span className="text-[11px] font-bold uppercase text-[#FF7A00] block">
                          Target Careers &amp; Competitive Exams:
                        </span>
                        <ul className="text-xs text-white/80 space-y-1">
                          {stream.careerPaths.map((career, i) => (
                            <li key={i} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                              <span>{career}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-white/15">
                      <button
                        onClick={onOpenAdmission}
                        className="text-xs font-semibold hover:underline inline-flex items-center gap-1 cursor-pointer"
                        style={{ color: stream.color }}
                      >
                        <span>Register in {stream.shortName} Stream</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Guidance Box */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-5 text-xs text-white/90 space-y-1.5 backdrop-blur-md">
                <span className="font-bold text-sm block text-white">Stream Counseling &amp; Diagnostic Interaction:</span>
                <p className="text-white/80">
                  Students seeking admission to Class 11th undergo subject counseling with our senior faculty to select the most suitable stream aligned with their aptitude and career ambitions. Contact Principal desk at <strong className="font-mono text-[#FF7A00]">{SCHOOL_INFO.contacts.principal}</strong> for stream syllabus details.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SCHOOL TIMINGS */}
        {activeTab === 'timings' && (
          <div className="soft-card p-6 sm:p-10 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Daily Schedule
              </span>
              <h2 className="text-2xl font-bold text-white font-heading mt-1">
                School Daily Timings &amp; Office Hours
              </h2>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                Students must reach the campus 5 minutes prior to the assembly warning bell.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-white/15 rounded-xl overflow-hidden">
                <thead className="bg-white/10 border-b border-white/15 text-white font-bold uppercase">
                  <tr>
                    <th className="py-3 px-4">Activity / Class Level</th>
                    <th className="py-3 px-4 font-mono text-[#FF7A00]">Prescribed Time</th>
                    <th className="py-3 px-4">Instructions / Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {SCHOOL_TIMINGS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white">{item.slot}</td>
                      <td className="py-3.5 px-4 font-mono text-[#FF7A00] font-bold tabular-nums">{item.time}</td>
                      <td className="py-3.5 px-4 text-white/80">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-xl p-4 text-xs text-white/90 flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#FF7A00] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">Meeting with Principal Sir:</span>
                <p className="text-white/80">Visiting hours for parents are <strong>10:00 AM – 12:00 PM</strong> and <strong>1:00 PM – 2:30 PM</strong> on working school days.</p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: HOUSE SYSTEM */}
        {activeTab === 'houses' && (
          <div className="soft-card p-6 sm:p-10 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Inter-House Fellowship
              </span>
              <h2 className="text-2xl font-bold text-white font-heading mt-1">
                The Four Academic Houses
              </h2>
              <p className="text-xs sm:text-sm text-white/80 mt-1">
                Students are allocated to one of the four houses upon admission, competing in sports, literary debates, and cultural tournaments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {HOUSES.map((house) => (
                <div 
                  key={house.name}
                  className="soft-card p-6 space-y-3 flex flex-col justify-between border-t-4"
                  style={{ borderTopColor: house.hex }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                        {house.colorName} Color House
                      </span>
                      <span 
                        className="w-3.5 h-3.5 rounded-full"
                        style={{ backgroundColor: house.hex }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading">{house.name}</h3>
                    <p className="text-xs text-white/70 italic">Named after: {house.namedAfter}</p>
                    <p className="text-xs text-white/80 leading-relaxed">{house.description}</p>
                  </div>

                  <div className="pt-3 border-t border-white/15 text-xs font-semibold text-[#FF7A00] italic">
                    &ldquo;{house.motto}&rdquo;
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: UNIFORM CODE */}
        {activeTab === 'uniform' && (
          <div className="space-y-10 animate-in fade-in duration-200">
            {/* Day-Wise Uniform Showcase Component with High-Res Charts */}
            <DayWiseUniformSection 
              onNavigate={onNavigate} 
              showAcademicsLink={false} 
            />

            {/* Official Uniform Inventory & Turnout Code */}
            <div className="soft-card p-6 sm:p-10 space-y-6">
              <div className="border-b border-white/15 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                  Prescribed Attire Specification
                </span>
                <h2 className="text-2xl font-bold text-white font-heading mt-1">
                  Complete Uniform Specification &amp; Winter Code
                </h2>
                <p className="text-xs sm:text-sm text-white/80 mt-1">
                  Students must be impeccably groomed. The prescribed school uniform must be worn with dignity on all working days.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {UNIFORMS.map((uni, idx) => (
                  <div key={idx} className="soft-card p-5 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between border-b border-white/15 pb-2">
                        <span className="text-[10px] font-semibold text-[#FF7A00] uppercase">{uni.schedule}</span>
                      </div>
                      <h3 className="font-bold text-white text-sm font-heading leading-tight">{uni.category}</h3>
                      <ul className="space-y-1.5 text-xs text-white/80">
                        {uni.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/10 border border-white/15 backdrop-blur-md rounded-xl p-4 text-xs text-white/90 space-y-1">
                <strong className="text-white block font-bold text-sm">General Turnout &amp; Morning Assembly Inspection:</strong>
                <p className="text-white/80 leading-relaxed">
                  Uniform tidiness, shoe shine, nail hygiene, hair grooming, and ID card lanyard are inspected daily during the 8:45 AM morning assembly by house masters and student prefects. Wearing non-prescribed casual jackets, unapproved shoes, or non-uniform accessories is strictly prohibited.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: STUDENT CLUBS */}
        {activeTab === 'clubs' && (
          <div className="soft-card p-6 sm:p-10 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Co-Curricular Enrichment
              </span>
              <h2 className="text-2xl font-bold text-white font-heading mt-1">
                Student Clubs &amp; Societies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {STUDENT_CLUBS.map((club, idx) => (
                <div key={idx} className="soft-card p-5 space-y-2.5">
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-orange-500/20 text-[#FF7A00] border border-orange-500/30">
                    {club.focus}
                  </span>
                  <h3 className="font-bold text-white text-base font-heading">{club.name}</h3>
                  <p className="text-xs text-white/80 leading-relaxed">{club.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 6: ANNUAL CELEBRATIONS */}
        {activeTab === 'calendar' && (
          <div className="soft-card p-6 sm:p-10 space-y-6 animate-in fade-in duration-200">
            <div className="border-b border-white/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Annual Events &amp; Festivals
              </span>
              <h2 className="text-2xl font-bold text-white font-heading mt-1">
                Calendar of Celebrations
              </h2>
            </div>

            <div className="space-y-3">
              {ANNUAL_CELEBRATIONS.map((item, idx) => (
                <div 
                  key={idx}
                  className="soft-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-white/10 transition-colors"
                >
                  <div className="space-y-1">
                    <h3 className="font-bold text-white text-sm font-heading">{item.event}</h3>
                    <p className="text-xs text-white/80">{item.description}</p>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <span className="inline-block px-3 py-1 bg-orange-500/20 text-[#FF7A00] border border-orange-500/30 rounded-md font-mono font-bold text-xs">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        </AnimatedContent>
      </section>

      {/* 4. Bottom Support Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={30} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="soft-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <h2 className="text-lg font-bold text-white font-heading">
                Questions regarding admission forms or syllabus?
              </h2>
              <p className="text-xs text-white/80 mt-0.5">
                The school administrative desk is available from 9:00 AM to 3:00 PM on working days.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('contact')}
              className="btn-admissions px-5 py-2.5 text-xs font-semibold shrink-0 cursor-pointer rounded-[10px]"
            >
              Contact School Desk
            </button>
          </div>
        </AnimatedContent>
      </section>

    </div>
  );
};

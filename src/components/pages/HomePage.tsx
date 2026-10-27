import React, { Suspense, lazy } from 'react';
import { PageId } from '../../types';
import { 
  SCHOOL_INFO, 
  TESTIMONIALS
} from '../../data/schoolData';
import { 
  ArrowRight, 
  GraduationCap, 
  Phone,
  Award,
  Quote,
  Star,
  RotateCw,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';
import { MagicBento, MagicBentoCard } from '../reactbits/MagicBento';
import AnimatedContent from '../reactbits/AnimatedContent';
import FlipCard from '../reactbits/FlipCard';
import directorSirPhoto from '../../assets/images/regenerated_image_1792829768015.webp';
import principalSirPhoto from '../../assets/images/regenerated_image_1792829766204.webp';
// Lazy-load heavy 3D canvas and below-the-fold media feeds to eliminate render-blocking main-thread overhead
const Lanyard = lazy(() => import('../reactbits/Lanyard'));
import SplitFlapText from '../reactbits/SplitFlapText';
import campusBuildingPhoto from '../../assets/images/regenerated_image_1792831380588.webp';
const SocialVideoFeedSection = lazy(() => import('../SocialVideoFeedSection'));
import DayWiseUniformSection from '../DayWiseUniformSection';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmission: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenAdmission }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO SECTION (Static, high-performance background with school branding accents) */}
      <section className="relative text-white overflow-hidden min-h-[580px] lg:min-h-[640px] bg-transparent">
        
        {/* Subtle Static Ambient Lighting Accents (0% GPU Load, Pure CSS) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F4511E]/15 rounded-full blur-3xl" />
          <div className="absolute -top-10 right-10 w-80 h-80 bg-[#FF7A00]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-white/[0.04] rounded-full blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#101E53]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-6 pb-14 sm:py-20 lg:py-24">
          <div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
          >
            
            {/* LEFT COLUMN: Interactive 3D Physics Lanyard React Bit */}
            <div className="lg:col-span-5 w-full flex flex-col items-center">
              <AnimatedContent distance={40} direction="horizontal" duration={0.85} trigger="mount" className="w-full -mt-[10px]" style={{ marginTop: '-10px' }}>
                <div className="relative w-full h-[400px] xs:h-[440px] sm:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl flex flex-col">
                  
                  {/* 3D Physics Lanyard Canvas (Lazy Loaded) */}
                  <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
                    <Suspense fallback={
                      <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center gap-3 bg-white/5 rounded-2xl" aria-label="Loading 3D Student ID Badge">
                        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-[#FF7A00] animate-spin" />
                        <span className="text-xs text-white/60 font-medium">Loading 3D Badge...</span>
                      </div>
                    }>
                      <Lanyard
                        frontImage="/school_assets/id_card_front.svg?v=6"
                        backImage="/school_assets/id_card_back.svg?v=6"
                        strapImage="/school_assets/strap_ribbon.svg?v=6"
                        finish="glossy"
                        cardColor="#ffffff"
                        strapColor="#172B73"
                        size={0.65}
                        gravity={0.9}
                        elasticity={0.4}
                        damping={0.65}
                        breeze={0.25}
                        interactive={true}
                        intro={true}
                        className="w-full h-full"
                      />
                    </Suspense>
                  </div>

                </div>
              </AnimatedContent>
            </div>

            {/* RIGHT COLUMN: Transferred Hero Content & Actions */}
            <div className="lg:col-span-7">
              <AnimatedContent distance={40} direction="vertical" duration={0.8} trigger="mount" className="flex flex-col gap-6 text-center lg:text-left">
                {/* Badge Strip */}
                <div className="order-5 lg:order-1 self-center lg:self-start inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-medium text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-pulse" />
                  <span>Established 2016 · Ichol, Satna (M.P.)</span>
                  <span className="text-white/40">|</span>
                  <span className="text-[#FF7A00] font-semibold">DISE: {SCHOOL_INFO.diseCode}</span>
                </div>

                {/* Main Headline with SplitFlapText React Bit */}
                <h1 className="order-2 lg:order-2 space-y-2.5 text-center lg:text-left drop-shadow-md" style={{ textWrap: 'balance' }}>
                  <span className="block text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading leading-tight">
                    Where Character Meets
                  </span>
                  <div className="flex items-center justify-center lg:justify-start overflow-x-auto py-1">
                    <SplitFlapText
                      words={['EXCELLENCE', 'LEADERSHIP', 'KNOWLEDGE', 'INNOVATION', 'CHARACTER']}
                      flipDuration={0.12}
                      stagger={0.05}
                      cycleDelay={2400}
                      charset="alpha"
                      flipsPerChar={7}
                      order="left"
                      align="left"
                      tileStyle="board"
                      tileColor="#0b1638"
                      textColor="#F4511E"
                      glare={0.3}
                      depth={0.6}
                      tileRadius="clamp(4px, 0.7vw, 8px)"
                      gap="clamp(3px, 0.5vw, 6px)"
                      fontSize="clamp(22px, 3.6vw, 44px)"
                      loop={true}
                      padTo={10}
                      intro={true}
                      className="shadow-2xl"
                    />
                  </div>
                  <span className="block text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-heading">
                    in Education
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="order-3 lg:order-3 text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-normal mx-auto lg:mx-0 drop-shadow-sm">
                  Dreams Valley Public School [English Medium] empowers students from <strong className="text-white font-semibold">Nursery to 12th</strong> with specialized Senior Secondary streams in <strong className="text-[#FF7A00] font-semibold">Maths, Biology, Commerce &amp; Arts</strong>, 35:1 faculty care, and GPS fleet transport.
                </p>

                {/* CTA Buttons */}
                <div className="order-4 lg:order-4 pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <button
                    type="button"
                    onClick={onOpenAdmission}
                    className="btn-admissions px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2.5 cursor-pointer shadow-lg rounded-xl"
                  >
                    <GraduationCap className="w-5 h-5 text-white" />
                    <span>Apply for Admission 2026–27</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('academics')}
                    className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all inline-flex items-center gap-2 backdrop-blur-xs cursor-pointer"
                  >
                    <span>Explore Streams (Maths, Bio, Comm, Arts)</span>
                  </button>
                </div>

                {/* Official Social Media Tap Buttons (Responsive on Mobile, Tablet & Desktop) */}
                <div 
                  className="-mt-4 lg:mt-0 order-1 lg:order-5 w-full lg:pt-6 lg:border-t lg:border-white/10"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-white/80 mb-3 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                    <span>Connect &amp; Follow Official Channels</span>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5 max-w-md lg:max-w-lg mx-auto lg:mx-0">
                    {/* Facebook Tap Button */}
                    <a
                      href="https://www.facebook.com/dreamsvalleypublicschool"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Official Facebook Page"
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-[#1877F2]/25 border border-white/15 hover:border-[#1877F2]/50 text-white transition-all duration-200 group hover:scale-[1.03] active:scale-95 shadow-md backdrop-blur-xs cursor-pointer"
                    >
                      <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-[#1877F2] shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-bold truncate">Facebook</span>
                    </a>

                    {/* Instagram Tap Button */}
                    <a
                      href="https://www.instagram.com/dreamsvalleypublicschool?igsh=MW90cHphYnl1eWdlYg%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Official Instagram Profile"
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-gradient-to-r hover:from-pink-500/25 hover:to-orange-500/25 border border-white/15 hover:border-pink-500/50 text-white transition-all duration-200 group hover:scale-[1.03] active:scale-95 shadow-md backdrop-blur-xs cursor-pointer"
                    >
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-bold truncate">Instagram</span>
                    </a>

                    {/* YouTube Tap Button */}
                    <a
                      href="https://www.youtube.com/@SatyavratSingh1989/featured"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Official YouTube Channel"
                      className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-[#FF0000]/25 border border-white/15 hover:border-red-500/50 text-white transition-all duration-200 group hover:scale-[1.03] active:scale-95 shadow-md backdrop-blur-xs cursor-pointer"
                    >
                      <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0000] shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-xs sm:text-sm font-bold truncate">YouTube</span>
                    </a>
                  </div>
                </div>
              </AnimatedContent>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WORDS OF WISDOM: SCHOOL LEADERSHIP (DIRECTOR SIR & PRINCIPAL SIR) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 relative z-20">
        
        <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
              School Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Words of Wisdom from Leadership
            </h2>
            <p className="text-xs sm:text-sm text-white/80">
              Mentoring young minds with unwavering moral values, devotion to time, and academic zeal.
            </p>
          </div>
        </AnimatedContent>

        {/* Interactive 3D Reactive FlipCards: Director Sir & Principal Sir */}
        <AnimatedContent distance={45} direction="vertical" duration={0.85} delay={0.1} threshold={0.1}>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 py-2">
            
            {/* 1. Director Sir Reactive 3D FlipCard */}
            <FlipCard
              width={380}
              height={490}
              radius={24}
              background="rgba(255, 255, 255, 0.08)"
              color="#FFFFFF"
              shadowColor="rgba(0, 0, 0, 0.45)"
              shadowOpacity={0.4}
              tiltMax={10}
              ariaLabel="Director Sir Mr. Vinod Kumar Singh - Click or tap to flip card"
              front={
                <div className="relative w-full h-full flex flex-col justify-end p-6 bg-gradient-to-b from-white/10 via-black/30 to-black/85 backdrop-blur-md rounded-3xl overflow-hidden group select-none">
                  {/* Photo with cover & gentle gradient */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={directorSirPhoto} 
                      alt="Director Sir MR. VINOD KUMAR SINGH" 
                      width={380}
                      height={490}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  </div>

                  {/* Bottom Info */}
                  <div className="relative z-10 space-y-2">
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A00] block">
                        Dreams Valley Public School
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight drop-shadow-md">
                        MR. VINOD KUMAR SINGH
                      </h3>
                      <p className="text-xs text-white/80">
                        Director &amp; Visionary Leader · Estd. 2016
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                      <a
                        href={`tel:${SCHOOL_INFO.contacts.director}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-mono font-semibold text-white hover:text-[#FF7A00] flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#FF7A00]" />
                        <span>{SCHOOL_INFO.contacts.director}</span>
                      </a>
                      <span className="text-[11px] text-white/70 italic flex items-center gap-1">
                        <RotateCw className="w-2.5 h-2.5 text-white/50" />
                        <span>Tap to flip</span>
                      </span>
                    </div>
                  </div>
                </div>
              }
              back={
                <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-7 bg-gradient-to-br from-[#FF7A00] via-[#F04E10] to-[#C93807] backdrop-blur-xl rounded-3xl border border-white/30 text-white select-none shadow-2xl overflow-hidden">
                  {/* Subtle decorative glow */}
                  <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-black/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/20 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md shrink-0">
                          <Quote className="w-5 h-5 text-white drop-shadow-xs" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-100 block">
                            Director&apos;s Vision
                          </span>
                          <h4 className="font-extrabold text-white text-base font-heading drop-shadow-sm">
                            MR. VINOD KUMAR SINGH
                          </h4>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/20 text-white border border-white/30 flex items-center gap-1 shadow-xs">
                        <RotateCw className="w-2.5 h-2.5 text-white" />
                        <span>Photo</span>
                      </span>
                    </div>

                    {/* Message Quote */}
                    <div className="space-y-3">
                      <blockquote className="text-xs sm:text-[13px] text-white/95 leading-relaxed italic space-y-2 font-medium">
                        <p>
                          &ldquo;A child is a unique gift of God to humanity with a bundle of talents hidden inside. A teacher is a mentor, nurturer, healer and an inspirer who polishes those virtues.&rdquo;
                        </p>
                        <p>
                          &ldquo;Success should always be combined with strong moral and ethical values. Preparing students to think reflectively prepares them to build a &apos;dream-country&apos; for all.&rdquo;
                        </p>
                      </blockquote>

                      <div className="p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-white/25 text-xs text-white">
                        <span className="font-bold text-white block">Gaharwar Educational &amp; Welfare Society</span>
                        <span className="text-[11px] text-amber-100/90 font-medium">Registered Society &middot; Estd. 2016</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Contact */}
                  <div className="relative z-10 pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                    <span className="text-white/90 font-medium">Director Contact:</span>
                    <a 
                      href={`tel:${SCHOOL_INFO.contacts.director}`}
                      onClick={(e) => e.stopPropagation()}
                      className="font-mono font-bold text-[#C93807] bg-white hover:bg-amber-50 active:scale-95 flex items-center gap-1.5 px-3 py-1.5 rounded-xl shadow-md transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C93807]" />
                      <span>{SCHOOL_INFO.contacts.director}</span>
                    </a>
                  </div>
                </div>
              }
            />

            {/* 2. Principal Sir Reactive 3D FlipCard */}
            <FlipCard
              width={380}
              height={490}
              radius={24}
              background="rgba(255, 255, 255, 0.08)"
              color="#FFFFFF"
              shadowColor="rgba(0, 0, 0, 0.45)"
              shadowOpacity={0.4}
              tiltMax={10}
              ariaLabel="Principal Sir Mr. Satyavrat Singh - Click or tap to flip card"
              front={
                <div className="relative w-full h-full flex flex-col justify-end p-6 bg-gradient-to-b from-white/10 via-black/30 to-black/85 backdrop-blur-md rounded-3xl overflow-hidden group select-none">
                  {/* Photo with cover & gentle gradient */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={principalSirPhoto} 
                      alt="Principal Sir MR. SATYAVRAT SINGH" 
                      width={380}
                      height={490}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  </div>

                  {/* Bottom Info */}
                  <div className="relative z-10 space-y-2">
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 block">
                        Dreams Valley Public School
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading leading-tight drop-shadow-md">
                        MR. SATYAVRAT SINGH
                      </h3>
                      <p className="text-xs text-white/80">
                        Principal · Holistic Learner Development
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/20 flex items-center justify-between">
                      <a
                        href={`tel:${SCHOOL_INFO.contacts.principal}`}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-mono font-semibold text-white hover:text-blue-300 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-blue-300" />
                        <span>{SCHOOL_INFO.contacts.principal}</span>
                      </a>
                      <span className="text-[11px] text-white/70 italic flex items-center gap-1">
                        <RotateCw className="w-2.5 h-2.5 text-white/50" />
                        <span>Tap to flip</span>
                      </span>
                    </div>
                  </div>
                </div>
              }
              back={
                <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-7 bg-gradient-to-br from-[#FF7A00] via-[#F04E10] to-[#C93807] backdrop-blur-xl rounded-3xl border border-white/30 text-white select-none shadow-2xl overflow-hidden">
                  {/* Subtle decorative glow */}
                  <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-black/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative z-10 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/20 pb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-md shrink-0">
                          <Award className="w-5 h-5 text-amber-200 drop-shadow-xs" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-100 block">
                            Principal&apos;s Message
                          </span>
                          <h4 className="font-extrabold text-white text-base font-heading drop-shadow-sm">
                            MR. SATYAVRAT SINGH
                          </h4>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white/20 text-white border border-white/30 flex items-center gap-1 shadow-xs">
                        <RotateCw className="w-2.5 h-2.5 text-white" />
                        <span>Photo</span>
                      </span>
                    </div>

                    {/* Message Quote */}
                    <div className="space-y-3">
                      <blockquote className="text-xs sm:text-[13px] text-white/95 leading-relaxed italic space-y-2 font-medium">
                        <p>
                          &ldquo;In present times, every student is a reservoir of a multitude of information. It shifts the responsibilities of the institution to ensure they get the right platform and quality education.&rdquo;
                        </p>
                        <p>
                          &ldquo;We believe in holistic development of the child through social, moral, and ethical values in life. Our campus is sufficiently equipped to fulfill every learner&apos;s need.&rdquo;
                        </p>
                      </blockquote>

                      <div className="p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-white/25 text-xs text-white">
                        <span className="font-bold text-white block">Parent Meeting Hours</span>
                        <span className="text-[11px] text-amber-100/90 font-medium">10:00 AM – 12:00 PM &amp; 1:00 PM – 2:30 PM (Working Days)</span>
                      </div>
                    </div>
                  </div>

                  {/* Footer Contact */}
                  <div className="relative z-10 pt-3 border-t border-white/20 flex items-center justify-between text-xs">
                    <span className="text-white/90 font-medium">Principal Office:</span>
                    <a 
                      href={`tel:${SCHOOL_INFO.contacts.principal}`}
                      onClick={(e) => e.stopPropagation()}
                      className="font-mono font-bold text-[#C93807] bg-white hover:bg-amber-50 active:scale-95 flex items-center gap-1.5 px-3 py-1.5 rounded-xl shadow-md transition-all"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C93807]" />
                      <span>{SCHOOL_INFO.contacts.principal}</span>
                    </a>
                  </div>
                </div>
              }
            />

          </div>
        </AnimatedContent>


      </section>

      {/* 2.5 INTERACTIVE SOCIAL MEDIA & VIDEO FEED SECTION */}
      <Suspense fallback={<div className="min-h-[280px] flex items-center justify-center text-white/50"><div className="w-6 h-6 border-2 border-white/20 border-t-[#FF7A00] rounded-full animate-spin" /></div>}>
        <SocialVideoFeedSection />
      </Suspense>

      {/* 3. SCHOOL INTRODUCTION & SOCIETY FOUNDATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={40} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                  About The Institution
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                  Nurturing Potential within a Caring and Inspiring Environment
                </h2>
              </div>

              <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                Under the aegis of <strong className="text-white font-semibold">&quot;{SCHOOL_INFO.society}&quot;</strong>, Dreams Valley Public School was established in 2016 to bridge the gap between quality education and community accessibility. We believe that all children can achieve their full potential when surrounded by devoted educators and world-class infrastructure.
              </p>

              <div className="pt-2">
                <MagicBento
                  columns={2}
                  theme="dark"
                  glowColor="rgba(255, 255, 255, 0.12)"
                  radius={16}
                  gap={16}
                  enableBorderGlow={false}
                  enableSpotlight={false}
                  enableTilt
                  items={[
                    {
                      id: 'mission',
                      content: (
                        <div className="p-5 space-y-1.5 h-full flex flex-col justify-center">
                          <span className="text-xs font-bold text-white uppercase tracking-wide block">
                            Our Mission
                          </span>
                          <p className="text-xs text-white/80 leading-relaxed">
                            To develop inquiring, knowledgeable, and caring young people who contribute to a peaceful and progressive nation.
                          </p>
                        </div>
                      )
                    },
                    {
                      id: 'vision',
                      content: (
                        <div className="p-5 space-y-1.5 h-full flex flex-col justify-center">
                          <span className="text-xs font-bold text-[#FF7A00] uppercase tracking-wide block">
                            Our Vision
                          </span>
                          <p className="text-xs text-white/80 leading-relaxed">
                            Every student achieving at their maximum potential in an engaging, inspiring, and ethical learning atmosphere.
                          </p>
                        </div>
                      )
                    }
                  ]}
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-xs font-bold text-white/90 hover:text-[#FF7A00] transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
                >
                  <span>Read Full School History &amp; 7 Core Aims</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <MagicBentoCard glowColor="#172B73" radius={18} noPadding>
                <div className="overflow-hidden p-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
                  <div className="rounded-xl overflow-hidden aspect-4/3 bg-slate-900/40 relative group">
                    <img 
                      src={campusBuildingPhoto} 
                      alt="Dreams Valley Public School Front Campus Building & Grounds" 
                      width={640}
                      height={480}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/65 backdrop-blur-md text-white text-[10px] font-bold border border-white/20 shadow-md">
                      Campus Main
                    </div>
                  </div>
                  <div className="p-3 text-xs text-white/90 flex items-center justify-between gap-3 font-medium">
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#FF7A00]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
                        <span>Front Campus Grounds &amp; Lawn</span>
                      </div>
                      <p className="font-semibold text-white truncate text-xs sm:text-[13px] mt-0.5" title="Near Art Ichol, Satna Road, Unchehra (M.P.)">
                        Near Art Ichol, Satna Road, Unchehra (M.P.)
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onNavigate('gallery')}
                      className="shrink-0 text-[11px] font-semibold text-[#FF7A00] hover:text-white hover:bg-white/15 transition-all flex items-center gap-1 cursor-pointer bg-white/10 px-2.5 py-1.5 rounded-lg border border-white/15"
                      title="View all photos in official gallery"
                    >
                      <span>Gallery</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </MagicBentoCard>


            </div>

          </div>
        </AnimatedContent>
      </section>



      {/* 9. DAY-WISE SCHOOL UNIFORM SHOWCASE (Official Charts: Junior & Senior Wings) */}
      <DayWiseUniformSection 
        onNavigate={onNavigate} 
        showAcademicsLink={true} 
      />

      {/* 10. GENUINE TESTIMONIALS (Parents, Faculty, Alumni) */}
      <section className="bg-white/[0.04] backdrop-blur-xs py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Voices of Trust
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                What Parents &amp; Alumni Say
              </h2>
              <p className="text-xs sm:text-sm text-white/80">
                Genuine feedback from families whose children thrive every day at Dreams Valley.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={40} direction="vertical" duration={0.85} delay={0.1} threshold={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((test) => (
                <div key={test.id} className="soft-card p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-white/90 leading-relaxed italic">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${test.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 border border-white/20`}>
                      {test.author.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white font-heading">{test.author}</h3>
                      <p className="text-[11px] text-white/70">{test.childGrade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>

        </div>
      </section>



      {/* 12. BOTTOM ADMISSIONS CALL TO ACTION CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={40} direction="vertical" duration={0.85} threshold={0.1}>
          <div className="bg-gradient-to-r from-[#172B73] via-[#101E53] to-[#172B73] rounded-2xl p-6 sm:p-10 lg:p-12 text-white shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Admissions Content */}
            <div className="max-w-2xl space-y-4 relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F4511E] text-white shadow-xs">
                Admissions Open 2026–2027
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Give Your Child the Foundation They Deserve
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-normal">
                Join the Dreams Valley family at Ichol, Satna. Transparent admissions, modern smart education, sports development, and verified bus fleet transportation from Nursery to Class XII.
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
                <button
                  type="button"
                  onClick={onOpenAdmission}
                  className="btn-admissions px-6 py-3 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 cursor-pointer shadow-lg rounded-xl"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Fill Online Application</span>
                </button>
                <a
                  href={`tel:${SCHOOL_INFO.contacts.principal}`}
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#F4511E]" />
                  <span>Call Principal (MR. SATYAVRAT SINGH): {SCHOOL_INFO.contacts.principal}</span>
                </a>
              </div>
            </div>

            {/* Official School Crest on Pure Solid White Circle (Reveals All Transparent/Cutout Text) */}
            <div className="shrink-0 flex items-center justify-center order-1 lg:order-2">
              <div className="w-36 h-36 xs:w-44 xs:h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full bg-white p-2 sm:p-3 shadow-2xl flex items-center justify-center border-4 border-[#FF7A00] ring-4 ring-white/30 transition-transform duration-300 hover:scale-105 select-none">
                <img 
                  src={SCHOOL_INFO.logoUrl} 
                  alt="Dreams Valley Public School Official Crest" 
                  width={240}
                  height={240}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

          </div>
        </AnimatedContent>
      </section>

    </div>
  );
};

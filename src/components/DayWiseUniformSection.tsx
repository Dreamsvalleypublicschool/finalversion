import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  ZoomIn, 
  X, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';
import AnimatedContent from './reactbits/AnimatedContent';
import { PageId } from '../types';

interface DayWiseUniformSectionProps {
  onNavigate?: (page: PageId) => void;
  showAcademicsLink?: boolean;
}

export interface DayUniformDetail {
  days: string;
  badgeColor: string;
  badgeBg: string;
  badgeBorder: string;
  title: string;
  boys: string;
  girls: string;
  accessories: string;
  footwear: string;
  palette: { name: string; hex: string }[];
}

export const JUNIOR_UNIFORM_DAYS: DayUniformDetail[] = [
  {
    days: "Monday, Tuesday, Friday",
    badgeColor: "text-blue-300",
    badgeBg: "bg-blue-500/20",
    badgeBorder: "border-blue-400/30",
    title: "Dual-Tone Orange & Sky Blue Polo Uniform",
    boys: "Dual-tone polo T-shirt (orange upper chest & back with sky blue V-chevron & sky blue collar/cuff trim) with DVPS crest + tailored dark navy trousers.",
    girls: "Matching orange & sky blue dual-tone polo T-shirt with DVPS crest + dark navy pleated skirt + double braided hair with ribbons.",
    accessories: "Navy school belt with golden crest buckle, official student ID card with lanyard.",
    footwear: "Navy blue socks with white sports stripes + clean polished black shoes.",
    palette: [
      { name: "DVPS Orange", hex: "#FF7A00" },
      { name: "Sky Blue", hex: "#38BDF8" },
      { name: "Navy Blue", hex: "#172B73" }
    ]
  },
  {
    days: "Wednesday & Thursday",
    badgeColor: "text-amber-300",
    badgeBg: "bg-amber-500/20",
    badgeBorder: "border-amber-400/30",
    title: "Lemon Yellow & Brown Plaid Checkered Uniform",
    boys: "Lemon yellow polo T-shirt with brown/red plaid checkered collar, placket, and sleeve cuffs + embroidered crest + matching brown-and-cream checkered plaid trousers.",
    girls: "Lemon yellow polo T-shirt with matching checkered plaid collar, placket, and sleeve cuffs + matching brown-and-cream pleated checkered plaid skirt.",
    accessories: "School belt with crest buckle, student ID card badge.",
    footwear: "Navy blue striped socks + polished black leather shoes.",
    palette: [
      { name: "Lemon Yellow", hex: "#FACC15" },
      { name: "Plaid Brown", hex: "#78350F" },
      { name: "Cream Accent", hex: "#FEF3C7" }
    ]
  },
  {
    days: "Saturday",
    badgeColor: "text-emerald-300",
    badgeBg: "bg-emerald-500/20",
    badgeBorder: "border-emerald-400/30",
    title: "House Sports & PT Athletic Uniform",
    boys: "Emerald green house sports polo T-shirt with dark navy blue collar & button placket, embroidered crest + comfortable black athletic track pants.",
    girls: "Emerald green house sports polo T-shirt with dark navy blue collar & button placket, embroidered crest + comfortable black athletic track pants.",
    accessories: "House sports badge / student ID card with lanyard.",
    footwear: "Black athletic sports shoes / sneakers with breathable socks.",
    palette: [
      { name: "House Green", hex: "#16A34A" },
      { name: "Navy Collar", hex: "#172B73" },
      { name: "Track Black", hex: "#0F172A" }
    ]
  }
];

export const SENIOR_UNIFORM_DAYS: DayUniformDetail[] = [
  {
    days: "Monday, Tuesday, Friday",
    badgeColor: "text-blue-300",
    badgeBg: "bg-blue-500/20",
    badgeBorder: "border-blue-400/30",
    title: "Sky Blue & Navy Formal Blazer/Waistcoat Uniform",
    boys: "Crisp sky blue full-sleeve formal shirt with dark navy contrast collar & cuff accents + dark navy diagonal-striped school necktie + dark navy tailored trousers.",
    girls: "Crisp sky blue full-sleeve formal shirt with dark navy contrast collar + tailored dark navy waistcoat / vest jacket with embroidered DVPS school crest + dark navy trousers or pleated skirt.",
    accessories: "Dark navy diagonal-striped school tie, school belt with golden crest buckle, student ID card.",
    footwear: "Polished black formal leather shoes with navy socks.",
    palette: [
      { name: "Sky Blue", hex: "#7DD3FC" },
      { name: "Dark Navy", hex: "#0F1E4B" },
      { name: "Crest Red", hex: "#F4511E" }
    ]
  },
  {
    days: "Wednesday & Thursday",
    badgeColor: "text-pink-300",
    badgeBg: "bg-pink-500/20",
    badgeBorder: "border-pink-400/30",
    title: "Blush Pink & Dark Navy Formal Uniform",
    boys: "Soft blush pink full-sleeve formal shirt with dark navy contrast collar & cuff accents + dark navy diagonal-striped school necktie + dark navy tailored trousers.",
    girls: "Soft blush pink full-sleeve formal shirt with dark navy contrast collar + tailored dark navy waistcoat / vest jacket with embroidered school crest + dark navy trousers or skirt.",
    accessories: "Dark navy diagonal-striped tie, school belt with crest buckle, student ID card badge.",
    footwear: "Polished black formal shoes with navy socks.",
    palette: [
      { name: "Blush Pink", hex: "#F472B6" },
      { name: "Dark Navy", hex: "#0F1E4B" },
      { name: "Striped Tie", hex: "#1E293B" }
    ]
  },
  {
    days: "Saturday",
    badgeColor: "text-emerald-300",
    badgeBg: "bg-emerald-500/20",
    badgeBorder: "border-emerald-400/30",
    title: "House Sports & Co-Curricular Activity Uniform",
    boys: "Emerald green sports polo T-shirt with dark navy contrast collar and button placket, embroidered DVPS school crest + black athletic track pants.",
    girls: "Emerald green sports polo T-shirt with dark navy contrast collar and button placket, embroidered DVPS school crest + black athletic track pants.",
    accessories: "House sports badge / student ID card with school lanyard.",
    footwear: "Black athletic sports shoes / sneakers with sports socks for physical education and drill.",
    palette: [
      { name: "Emerald Green", hex: "#16A34A" },
      { name: "Navy Contrast", hex: "#172B73" },
      { name: "Athletic Black", hex: "#0F172A" }
    ]
  }
];

export const DayWiseUniformSection: React.FC<DayWiseUniformSectionProps> = ({ 
  onNavigate,
  showAcademicsLink = true
}) => {
  const [showJuniorDetails, setShowJuniorDetails] = useState<boolean>(false);
  const [showSeniorDetails, setShowSeniorDetails] = useState<boolean>(false);
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string; subtitle: string } | null>(null);

  const juniorImg = "/assets/aistudio/2ED17671-C473-4E70-AA58-BA8BB66A8781_b63efe1d.webp";
  const seniorImg = "/assets/aistudio/79BC02CD-580E-4A96-B01D-EBB43388047C_0f3a8445.webp";

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
      
      {/* SECTION HEADER */}
      <AnimatedContent distance={30} direction="vertical" duration={0.7} threshold={0.1}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/15 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A00]">
              <Sparkles className="w-4 h-4 text-[#FF7A00]" />
              <span>Official School Dress Discipline</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight">
              Day-Wise School Uniform Schedule
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
              Official day-specific dress schedule for Dreams Valley Public School. Both Junior Wing (Classes Nursery to 5th) and Senior Wing (Classes 6th to 12th) are displayed below side-by-side.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white/90">
              Monday to Saturday Schedule
            </span>
          </div>
        </div>
      </AnimatedContent>

      {/* TWO BALANCED SIDE-BY-SIDE SECTIONS (NO TOGGLE, NO EMPTY GAPS) */}
      <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          
          {/* ================= COLUMN 1: JUNIOR WING ================= */}
          <div className="rounded-3xl p-5 sm:p-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A00] block">
                    Junior Wing · Primary Section
                  </span>
                  <h3 className="font-bold text-white text-base sm:text-lg font-heading">
                    Junior Wing Uniform (Nursery to Class 5th)
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setZoomImage({
                    src: juniorImg,
                    title: "Junior Wing Day-Wise Uniform Chart",
                    subtitle: "Pre-Primary & Primary · Nursery to Class 5th"
                  })}
                  className="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white text-[11px] font-semibold inline-flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-xs"
                  title="Zoom Junior Chart"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <span>Zoom Photo</span>
                </button>
              </div>

              {/* Compact Photo Display (Height Constrained to Prevent Large Gaps) */}
              <div 
                onClick={() => setZoomImage({
                  src: juniorImg,
                  title: "Junior Wing Day-Wise Uniform Chart",
                  subtitle: "Pre-Primary & Primary · Nursery to Class 5th"
                })}
                className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/15 bg-slate-950/60 flex items-center justify-center p-2 cursor-pointer group shadow-inner"
              >
                <img 
                  src={juniorImg} 
                  alt="Junior Students Day-Wise School Uniform Chart (Mon to Sat)" 
                  width={600}
                  height={667}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
                  <span className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-[#FF7A00]" />
                    <span>Click to View Full Chart</span>
                  </span>
                </div>
              </div>

              {/* Quick Summary Chips */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/70 block">
                  Weekly Schedule Overview:
                </span>
                <div className="space-y-1.5 text-xs text-white/90">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-blue-500/15 border border-blue-400/20">
                    <span className="font-bold text-blue-300">Mon, Tue, Fri:</span>
                    <span className="text-[11px] text-white/80">Orange &amp; Sky Blue Polo + Navy Trousers/Skirt</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-amber-500/15 border border-amber-400/20">
                    <span className="font-bold text-amber-300">Wed &amp; Thu:</span>
                    <span className="text-[11px] text-white/80">Lemon Yellow &amp; Brown Plaid Checkered Attire</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/15 border border-emerald-400/20">
                    <span className="font-bold text-emerald-300">Saturday:</span>
                    <span className="text-[11px] text-white/80">Emerald Green House Polo + Black Track Pants</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Toggle View Detail Button */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                type="button"
                onClick={() => setShowJuniorDetails(!showJuniorDetails)}
                className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#FF7A00] hover:bg-[#ff8c1a] text-white flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <span>{showJuniorDetails ? 'Hide Day-Wise Schedule' : 'View Complete Day-Wise Schedule'}</span>
                {showJuniorDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {/* Expandable Day-Wise Content Accordion */}
              {showJuniorDetails && (
                <div className="space-y-3 pt-2 animate-in fade-in duration-200">
                  {JUNIOR_UNIFORM_DAYS.map((detail, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-black/35 border border-white/10 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${detail.badgeBg} ${detail.badgeColor} ${detail.badgeBorder}`}>
                          {detail.days}
                        </span>
                        <div className="flex items-center gap-1">
                          {detail.palette.map((p, pIdx) => (
                            <span 
                              key={pIdx} 
                              className="w-3 h-3 rounded-full border border-white/20" 
                              style={{ backgroundColor: p.hex }} 
                              title={p.name} 
                            />
                          ))}
                        </div>
                      </div>

                      <h4 className="font-bold text-white text-xs sm:text-sm font-heading">
                        {detail.title}
                      </h4>

                      <div className="space-y-1.5 text-[11px] text-white/85">
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0 mt-0.5" />
                          <p><strong>Boys:</strong> {detail.boys}</p>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0 mt-0.5" />
                          <p><strong>Girls:</strong> {detail.girls}</p>
                        </div>
                        <div className="pt-1 border-t border-white/10 text-[10px] text-white/70 flex flex-wrap gap-2">
                          <span><strong>Belt/ID:</strong> {detail.accessories}</span>
                          <span><strong>Shoes:</strong> {detail.footwear}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* ================= COLUMN 2: SENIOR WING ================= */}
          <div className="rounded-3xl p-5 sm:p-6 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Header Badge */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A00] block">
                    Senior Wing · Middle to Class 12th
                  </span>
                  <h3 className="font-bold text-white text-base sm:text-lg font-heading">
                    Senior Wing Uniform (Classes 6th to 12th)
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setZoomImage({
                    src: seniorImg,
                    title: "Senior Wing Day-Wise Uniform Chart",
                    subtitle: "Middle, High School & Senior Secondary · Classes 6th to 12th"
                  })}
                  className="px-2.5 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white text-[11px] font-semibold inline-flex items-center gap-1.5 transition-all cursor-pointer shrink-0 shadow-xs"
                  title="Zoom Senior Chart"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <span>Zoom Photo</span>
                </button>
              </div>

              {/* Compact Photo Display (Height Constrained Matching Column 1) */}
              <div 
                onClick={() => setZoomImage({
                  src: seniorImg,
                  title: "Senior Wing Day-Wise Uniform Chart",
                  subtitle: "Middle, High School & Senior Secondary · Classes 6th to 12th"
                })}
                className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden border border-white/15 bg-slate-950/60 flex items-center justify-center p-2 cursor-pointer group shadow-inner"
              >
                <img 
                  src={seniorImg} 
                  alt="Senior Students Day-Wise School Uniform Chart (Mon to Sat)" 
                  width={600}
                  height={667}
                  loading="lazy"
                  decoding="async"
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-3">
                  <span className="px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-white/20 flex items-center gap-1.5">
                    <ZoomIn className="w-3.5 h-3.5 text-[#FF7A00]" />
                    <span>Click to View Full Chart</span>
                  </span>
                </div>
              </div>

              {/* Quick Summary Chips */}
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/70 block">
                  Weekly Schedule Overview:
                </span>
                <div className="space-y-1.5 text-xs text-white/90">
                  <div className="flex items-center justify-between p-2 rounded-xl bg-blue-500/15 border border-blue-400/20">
                    <span className="font-bold text-blue-300">Mon, Tue, Fri:</span>
                    <span className="text-[11px] text-white/80">Sky Blue Shirt + Navy Waistcoat/Tie &amp; Trousers</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-pink-500/15 border border-pink-400/20">
                    <span className="font-bold text-pink-300">Wed &amp; Thu:</span>
                    <span className="text-[11px] text-white/80">Blush Pink Shirt + Navy Waistcoat/Tie &amp; Trousers</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-500/15 border border-emerald-400/20">
                    <span className="font-bold text-emerald-300">Saturday:</span>
                    <span className="text-[11px] text-white/80">Emerald Green House Polo + Black Track Pants</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Toggle View Detail Button */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                type="button"
                onClick={() => setShowSeniorDetails(!showSeniorDetails)}
                className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold bg-[#172B73] hover:bg-[#1e368f] text-white flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer border border-white/20"
              >
                <span>{showSeniorDetails ? 'Hide Day-Wise Schedule' : 'View Complete Day-Wise Schedule'}</span>
                {showSeniorDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {/* Expandable Day-Wise Content Accordion */}
              {showSeniorDetails && (
                <div className="space-y-3 pt-2 animate-in fade-in duration-200">
                  {SENIOR_UNIFORM_DAYS.map((detail, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-black/35 border border-white/10 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${detail.badgeBg} ${detail.badgeColor} ${detail.badgeBorder}`}>
                          {detail.days}
                        </span>
                        <div className="flex items-center gap-1">
                          {detail.palette.map((p, pIdx) => (
                            <span 
                              key={pIdx} 
                              className="w-3 h-3 rounded-full border border-white/20" 
                              style={{ backgroundColor: p.hex }} 
                              title={p.name} 
                            />
                          ))}
                        </div>
                      </div>

                      <h4 className="font-bold text-white text-xs sm:text-sm font-heading">
                        {detail.title}
                      </h4>

                      <div className="space-y-1.5 text-[11px] text-white/85">
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0 mt-0.5" />
                          <p><strong>Boys:</strong> {detail.boys}</p>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A00] shrink-0 mt-0.5" />
                          <p><strong>Girls:</strong> {detail.girls}</p>
                        </div>
                        <div className="pt-1 border-t border-white/10 text-[10px] text-white/70 flex flex-wrap gap-2">
                          <span><strong>Tie &amp; Belt:</strong> {detail.accessories}</span>
                          <span><strong>Shoes:</strong> {detail.footwear}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </AnimatedContent>

      {/* BOTTOM SEAMLESS GUIDELINES BAR (ELIMINATES AWKWARD GAPS) */}
      <AnimatedContent distance={30} direction="vertical" duration={0.7} threshold={0.1}>
        <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/90">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-[#FF7A00] shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-bold text-white block text-sm">
                Daily Assembly Inspection &amp; Student Turnout Standards:
              </span>
              <p className="text-white/70 text-xs">
                Uniform tidiness, official ID badge with lanyard, and clean polished shoes are inspected every morning at 8:45 AM assembly.
              </p>
            </div>
          </div>

          {showAcademicsLink && onNavigate && (
            <button
              type="button"
              onClick={() => onNavigate('academics')}
              className="px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 shadow-sm"
            >
              <span>Explore All Academic Rules</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF7A00]" />
            </button>
          )}
        </div>
      </AnimatedContent>

      {/* HIGH-RESOLUTION ZOOM LIGHTBOX MODAL */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label={zoomImage.title}
          onClick={() => setZoomImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col bg-slate-900 border border-white/25 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/15 flex items-center justify-between bg-black/40">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A00] block">
                  Official Uniform Chart Preview
                </span>
                <h3 className="font-bold text-white text-base sm:text-lg font-heading">
                  {zoomImage.title}
                </h3>
                <p className="text-xs text-white/70">
                  {zoomImage.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setZoomImage(null)}
                className="w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="p-2 sm:p-4 overflow-auto flex-1 flex items-center justify-center bg-black/60">
              <img 
                src={zoomImage.src} 
                alt={zoomImage.title}
                width={900}
                height={1000}
                className="max-h-[70vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 sm:p-4 border-t border-white/15 bg-black/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/80">
              <span className="flex items-center gap-2 text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Mon, Tue, Fri · Wed, Thu · Sat House Sports Uniform</span>
              </span>
              <button
                type="button"
                onClick={() => setZoomImage(null)}
                className="px-4 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold transition-colors cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default DayWiseUniformSection;

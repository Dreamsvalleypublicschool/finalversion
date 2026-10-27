import React, { useState } from 'react';
import { PageId, GalleryPhoto } from '../../types';
import { ALL_GALLERY_PHOTOS } from '../../data/galleryPhotos';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Search
} from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent';

interface GalleryPageProps {
  onNavigate?: (page: PageId) => void;
  onOpenAdmission: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenAdmission }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(24);

  const categories = ['All', 'Campus', 'Activities', 'Celebrations', 'Sports', 'Academic'];

  const filteredPhotos = ALL_GALLERY_PHOTOS.filter((photo) => {
    const matchesCat = selectedCategory === 'All' || photo.category === selectedCategory;
    const matchesSearch = 
      photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      photo.caption.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const displayedPhotos = filteredPhotos.slice(0, visibleCount);

  const openLightbox = (photo: GalleryPhoto) => {
    const idx = filteredPhotos.findIndex(p => p.id === photo.id);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

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
              <span>Visual Archive · Official Campus Moments &amp; Highlights</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
              Official Photo Gallery
            </h1>
            <p className="text-white/80 max-w-3xl text-sm sm:text-base leading-relaxed font-normal">
              Authentic photography from Dreams Valley Public School: Class 10th Board Toppers, Convocation &amp; Merit Felicitation, Mukundpur Educational Tour, International Yoga Day, Diwali Rangoli, and Campus Assemblies.
            </p>
          </div>
        </AnimatedContent>
      </section>

      {/* 2. Interactive Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <AnimatedContent distance={25} direction="vertical" duration={0.6} trigger="mount">
        <div className="soft-card p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-white/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              aria-label="Search photo gallery"
              placeholder="Search photos (e.g. Director, Building, Sports, Day)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setVisibleCount(24); }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer outline-none focus:outline-none focus:ring-0 ${
                  selectedCategory === cat
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

        <div className="flex items-center justify-between text-xs font-medium text-white/70 px-1">
          <span>Showing {displayedPhotos.length} of {filteredPhotos.length} total photographs</span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-[#FF7A00] hover:underline font-semibold cursor-pointer"
            >
              Clear search filter
            </button>
          )}
        </div>
      </section>

      {/* 3. Photo Grid (Soft UI Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="sr-only">Campus Moments Photograph Archive</h2>
        <AnimatedContent key={`${selectedCategory}-${searchQuery}`} distance={30} direction="vertical" duration={0.6} trigger="mount">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo)}
              className="group soft-card-interactive p-2.5 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div className="aspect-4/3 overflow-hidden rounded-xl bg-slate-900/40 relative">
                <img
                  src={photo.src}
                  alt={photo.title}
                  width={400}
                  height={300}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/assets/aistudio/6a59c1a9-d819-4f95-94bc-81346e3b2605_a0c7c797.webp';
                  }}
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/15 shadow-xs">
                  {photo.category}
                </span>
                <div className="absolute inset-0 bg-[#0f1b3e]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-white text-[#FF7A00] flex items-center justify-center shadow-md">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="pt-2.5 px-1 space-y-0.5">
                <h3 className="font-bold text-white text-xs font-heading line-clamp-1">
                  {photo.title}
                </h3>
                <p className="text-[11px] text-white/70 line-clamp-1">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
        </AnimatedContent>

        {/* Load More Button */}
        {visibleCount < filteredPhotos.length && (
          <div className="text-center pt-10">
            <button
              type="button"
              onClick={() => setVisibleCount(prev => prev + 24)}
              className="btn-admissions px-8 py-3 text-xs sm:text-sm font-semibold cursor-pointer rounded-[10px]"
            >
              Load More Photos ({filteredPhotos.length - visibleCount} remaining)
            </button>
          </div>
        )}
      </section>

      {/* 4. Fullscreen Lightbox Modal (Soft UI Layout) */}
      {currentPhoto && (
        <div 
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-150"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-[#0f1b3e] rounded-2xl overflow-hidden border border-white/20 shadow-2xl text-white"
          >
            {/* Top Toolbar */}
            <div className="p-4 bg-[#101E53] text-white flex items-center justify-between border-b border-white/15">
              <div>
                <span className="text-[10px] font-mono text-[#FF7A00] uppercase tracking-wider block">
                  {currentPhoto.category} · Photo {(lightboxIndex ?? 0) + 1} of {filteredPhotos.length}
                </span>
                <h2 className="text-sm font-bold text-white font-heading">{currentPhoto.title}</h2>
              </div>
              <button
                onClick={closeLightbox}
                className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Preview Container */}
            <div className="relative flex-1 min-h-[320px] max-h-[70vh] flex items-center justify-center bg-black/95 overflow-hidden p-2">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.title}
                width={900}
                height={600}
                decoding="async"
                className="max-h-full max-w-full object-contain"
              />

              {/* Prev / Next controls */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-xs transition-colors cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption Footer */}
            <div className="p-4 bg-[#0a1332] text-xs text-white/90 border-t border-white/15 flex items-center justify-between font-medium">
              <p>{currentPhoto.caption}</p>
              <span className="text-[#FF7A00] text-[11px] font-semibold shrink-0 ml-4 font-mono">
                Dreams Valley Public School, Ichol
              </span>
            </div>
          </div>
        </div>
      )}

      {/* 5. Bottom Admission Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={35} direction="vertical" duration={0.7} trigger="scroll">
        <div className="soft-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h2 className="text-lg font-bold text-white font-heading">
              Be a part of our thriving school family
            </h2>
            <p className="text-xs text-white/75 mt-1">
              Admissions are open for session 2026–2027 from Nursery to Class XII.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenAdmission}
            className="btn-admissions px-6 py-2.5 text-xs font-semibold cursor-pointer shrink-0 rounded-[10px]"
          >
            Apply Online Now
          </button>
        </div>
        </AnimatedContent>
      </section>

    </div>
  );
};

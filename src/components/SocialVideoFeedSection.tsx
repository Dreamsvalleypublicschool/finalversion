import React, { useState } from 'react';
import { 
  Youtube, 
  Instagram, 
  Facebook,
  Play, 
  ExternalLink, 
  Share2,
  Tv,
  RotateCcw
} from 'lucide-react';
import AnimatedContent from './reactbits/AnimatedContent';

interface YouTubeVideo {
  id: string;
  videoId: string;
  title: string;
  category: string;
  description: string;
  viewsEstimate: string;
}

const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: 'yt-1',
    videoId: 'UtLTsEeeI_U',
    title: 'Important Tips on Parenting & How to Deal with Kids',
    category: 'Parenting & Guidance',
    description: 'Valuable insights from Principal Sir on guiding students with patience, positive habits, and emotional well-being.',
    viewsEstimate: 'Official Broadcast'
  },
  {
    id: 'yt-2',
    videoId: 'A3_nrwP_ftE',
    title: 'Why Healthy Diet is Important with Fitness Coach Akash Chaurasiya',
    category: 'Health & Nutrition Workshop',
    description: 'Interactive campus fitness session highlighting balanced student nutrition and physical discipline.',
    viewsEstimate: 'Campus Workshop'
  },
  {
    id: 'yt-3',
    videoId: 'p-QptXkqWsg',
    title: 'School Examination Walkthrough & Hall Visit',
    category: 'Academic Standards',
    description: 'Disciplined and focused environment inside Dreams Valley examination halls during evaluation.',
    viewsEstimate: 'Campus Life'
  },
  {
    id: 'yt-4',
    videoId: 'g5-L6J6ezig',
    title: 'Cancer Awareness & Healthcare Program | Vision India',
    category: 'Community Health',
    description: 'Special student health sensitization workshop with Vision India Healthcare Foundation.',
    viewsEstimate: 'Awareness Seminar'
  }
];

export const SocialVideoFeedSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<YouTubeVideo>(YOUTUBE_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    const shareUrl = `https://www.youtube.com/watch?v=${activeVideo.videoId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleSelectVideo = (vid: YouTubeVideo) => {
    setActiveVideo(vid);
    setIsPlaying(true);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
      
      {/* SECTION HEADER */}
      <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/15 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF7A00]">
              <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-ping" />
              <span>Campus Video Broadcasts &amp; Social Channels</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-heading tracking-tight">
              Latest Video Broadcasts
            </h2>
            <p className="text-xs sm:text-sm text-white/80 max-w-2xl">
              Watch official campus video highlights, workshops, and educational guidance from Dreams Valley Public School, Ichol.
            </p>
          </div>

          {/* Quick External Channel Links (YouTube, Instagram, Facebook) */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* 1. YouTube Button */}
            <a
              href="https://www.youtube.com/@SatyavratSingh1989/featured"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official YouTube Channel"
              title="Official YouTube Channel (@SatyavratSingh1989)"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#FF0000]/20 hover:bg-[#FF0000]/30 border border-red-500/40 text-white transition-transform hover:scale-105 shadow-md cursor-pointer shrink-0"
            >
              <Youtube className="w-5 h-5 text-[#FF0000]" />
            </a>

            {/* 2. Instagram Button */}
            <a
              href="https://www.instagram.com/dreamsvalleypublicschool?igsh=MW90cHphYnl1eWdlYg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official Instagram Profile"
              title="Official Instagram (@dreamsvalleypublicschool)"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-orange-500/20 hover:from-pink-500/30 hover:to-orange-500/30 border border-pink-500/40 text-white transition-transform hover:scale-105 shadow-md cursor-pointer shrink-0"
            >
              <Instagram className="w-5 h-5 text-pink-400" />
            </a>

            {/* 3. Facebook Button */}
            <a
              href="https://www.facebook.com/dreamsvalleypublicschool"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Official Facebook Page"
              title="Official Facebook Page (Dreams Valley Public School)"
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2]/30 border border-blue-500/40 text-white transition-transform hover:scale-105 shadow-md cursor-pointer shrink-0"
            >
              <Facebook className="w-5 h-5 text-[#1877F2]" />
            </a>
          </div>
        </div>
      </AnimatedContent>

      {/* YOUTUBE RESPONSIVE EMBED PLAYER + PLAYLIST SELECTOR */}
      <AnimatedContent distance={40} direction="vertical" duration={0.85} threshold={0.1}>
        <div className="rounded-3xl p-5 sm:p-7 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF0000] flex items-center justify-center text-white shadow-lg shrink-0">
                <Youtube className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                    Latest Video Broadcast
                  </h3>
                  <span className="text-[10px] uppercase font-bold text-red-400 bg-red-500/20 px-2 py-0.5 rounded border border-red-500/30">
                    Official Player
                  </span>
                </div>
                <p className="text-xs text-white/70">
                  Dreams Valley Senior Secondary School Ichol &middot; Official Channel
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 flex-wrap">
              {isPlaying && (
                <button
                  onClick={() => setIsPlaying(false)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white/90 hover:text-white text-xs font-medium border border-white/15 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                  title="Close video and return to preview poster"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-white/80" />
                  <span>Close Video</span>
                </button>
              )}

              <button
                onClick={handleShare}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white/90 hover:text-white text-xs font-medium border border-white/15 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Copy Video Link"
              >
                <Share2 className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>{copiedLink ? 'Link Copied!' : 'Share Video'}</span>
              </button>

              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#FF0000] hover:bg-red-700 text-white text-xs font-bold inline-flex items-center gap-1.5 transition-colors shadow-md"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* MAIN PLAYER GRID: Responsive Embed on Left, Selectable Videos on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* 16:9 Video Embed Player / Poster */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              {isPlaying ? (
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/90 border border-white/20 shadow-2xl">
                  <iframe
                    key={activeVideo.videoId}
                    src={`https://www.youtube-nocookie.com/embed/${activeVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full border-0 absolute inset-0"
                  />
                </div>
              ) : (
                <div
                  onClick={() => setIsPlaying(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsPlaying(true);
                    }
                  }}
                  aria-label={`Play video: ${activeVideo.title}`}
                  className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/80 border border-white/20 shadow-2xl group cursor-pointer select-none"
                >
                  {/* High quality YouTube Thumbnail Poster */}
                  <img
                    src={`https://img.youtube.com/vi/${activeVideo.videoId}/hqdefault.jpg`}
                    alt={activeVideo.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />

                  {/* Ambient gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/30 group-hover:via-black/25 transition-colors" />

                  {/* Top Badge: Category & Resolution */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-[#FF7A00] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/15 shadow-sm">
                      {activeVideo.category}
                    </span>
                    <span className="text-[10px] font-bold text-white bg-red-600/90 backdrop-blur-md px-2 py-0.5 rounded border border-red-500/40 shadow-sm flex items-center gap-1">
                      <Youtube className="w-3 h-3" />
                      <span>Tap to Play</span>
                    </span>
                  </div>

                  {/* Centered Large Play Button with Glowing Rings */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FF7A00]/30 animate-ping opacity-75" />
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#FF7A00] via-[#FF5722] to-[#FF0000] text-white flex items-center justify-center shadow-2xl shadow-orange-500/60 group-hover:scale-110 group-active:scale-95 transition-transform duration-300 border-2 border-white/60">
                        <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1 text-white" />
                      </div>
                    </div>
                    <div className="text-center px-4">
                      <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/25 group-hover:border-[#FF7A00] transition-colors shadow-lg">
                        <Play className="w-3.5 h-3.5 fill-current text-[#FF7A00]" />
                        <span>Tap to Play Video Broadcast</span>
                      </span>
                    </div>
                  </div>

                  {/* Bottom Info inside the preview */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 pointer-events-none flex items-center justify-between text-xs text-white/80">
                    <span className="line-clamp-1 max-w-[75%] font-medium text-white/90">
                      {activeVideo.title}
                    </span>
                    <span className="text-[11px] text-[#FF7A00] font-bold shrink-0">
                      Click to watch
                    </span>
                  </div>
                </div>
              )}

              {/* Video Title & Meta Bar */}
              <div className="mt-3.5 p-3.5 rounded-xl bg-black/30 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {activeVideo.title}
                  </h4>
                  <p className="text-white/70 text-xs mt-0.5 line-clamp-1">
                    {activeVideo.description}
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="text-[11px] font-bold text-[#FF7A00] uppercase block">
                    {activeVideo.category}
                  </span>
                  <span className="text-[10px] text-white/50">
                    Channel: @SatyavratSingh1989
                  </span>
                </div>
              </div>
            </div>

            {/* Video Playlist Selector */}
            <div className="lg:col-span-4 flex flex-col space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-white/90 pb-1">
                <span className="flex items-center gap-1.5">
                  <Tv className="w-3.5 h-3.5 text-[#FF7A00]" />
                  <span>Recent School Videos</span>
                </span>
                <span className="text-[11px] text-white/60 font-mono">
                  {YOUTUBE_VIDEOS.length} Videos
                </span>
              </div>

              <div className="space-y-2.5 flex-1 overflow-y-auto max-h-[380px] lg:max-h-[460px] pr-1">
                {YOUTUBE_VIDEOS.map((vid) => {
                  const isCurrent = vid.videoId === activeVideo.videoId;
                  return (
                    <button
                      key={vid.id}
                      onClick={() => handleSelectVideo(vid)}
                      className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 cursor-pointer group ${
                        isCurrent 
                          ? 'bg-[#F4511E]/25 border-[#FF7A00] shadow-lg ring-1 ring-[#FF7A00]/50' 
                          : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {/* Video Thumbnail Preview */}
                      <div className="relative w-24 aspect-video rounded-lg overflow-hidden shrink-0 bg-black/40 border border-white/10">
                        <img 
                          src={`https://img.youtube.com/vi/${vid.videoId}/mqdefault.jpg`} 
                          alt={vid.title} 
                          width={96}
                          height={54}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className={`absolute inset-0 flex items-center justify-center ${isCurrent ? 'bg-black/30' : 'bg-black/40 group-hover:bg-black/20'}`}>
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isCurrent ? 'bg-[#F4511E] text-white' : 'bg-white/80 text-black group-hover:scale-110'} transition-transform`}>
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                          </div>
                        </div>
                      </div>

                      {/* Video Text */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A00] block truncate">
                          {vid.category}
                        </span>
                        <h5 className={`text-xs font-bold leading-snug line-clamp-2 mt-0.5 ${isCurrent ? 'text-white' : 'text-white/90 group-hover:text-white'}`}>
                          {vid.title}
                        </h5>
                        <p className="text-[11px] text-white/60 mt-1 line-clamp-1">
                          {vid.viewsEstimate}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Channel Subscribe Box */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-red-600/20 via-orange-600/15 to-transparent border border-red-500/30 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-white text-xs">Subscribe on YouTube</p>
                  <p className="text-[11px] text-white/70">Never miss school announcements</p>
                </div>
                <a
                  href="https://www.youtube.com/@SatyavratSingh1989/featured?sub_confirmation=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#FF0000] hover:bg-red-700 text-white font-bold text-xs shadow transition-all hover:scale-105"
                >
                  Subscribe
                </a>
              </div>
            </div>

          </div>
        </div>
      </AnimatedContent>

    </section>
  );
};

export default SocialVideoFeedSection;

import { useState, useRef } from "react";

function SeasonsEpisodes({ seasons }) {
  const [selectedSeason, setSelectedSeason] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const scrollContainerRef = useRef(null);

  const handlePlayClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Use the provided seasons data
  const seasonsData = seasons || [];

  return (
    <div className="lg:col-span-2 bg-brand-surface border border-brand-border rounded-xl p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        Seasons and Episodes
      </h2>

      {/* Seasons Navigation with Scroll Buttons */}
      <div className="relative mb-4 sm:mb-6">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-brand-background/90 backdrop-blur-sm border border-brand-border rounded-full flex items-center justify-center hover:bg-brand-surface transition-all shadow-lg"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Scrollable Container with Custom Styling */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-3 overflow-x-auto scroll-smooth px-12"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          
          {seasonsData.map((season) => (
            <button
              key={season.seasonNumber}
              onClick={() => setSelectedSeason(season.seasonNumber)}
              className={`px-5 py-3 rounded-lg whitespace-nowrap font-medium transition-all text-sm sm:text-base shrink-0 ${
                selectedSeason === season.seasonNumber
                  ? "bg-brand-primary text-white shadow-lg scale-105"
                  : "bg-brand-background border border-brand-border text-grey-60 hover:bg-brand-surface hover:border-white/20"
              }`}
            >
              <span className="font-semibold">Season {season.seasonNumber}</span>
              <span className={`ml-2 text-xs ${selectedSeason === season.seasonNumber ? 'text-white/80' : 'text-grey-60'}`}>
                {season.episodes.length} Episodes
              </span>
            </button>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-brand-background/90 backdrop-blur-sm border border-brand-border rounded-full flex items-center justify-center hover:bg-brand-surface transition-all shadow-lg"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Gradient Fade Effects */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-brand-surface to-transparent pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-brand-surface to-transparent pointer-events-none"></div>
      </div>

      {/* Episodes List */}
      <div className="flex flex-col gap-3 sm:gap-4">
        {seasonsData
          .find((season) => season.seasonNumber === selectedSeason)
          ?.episodes.map((episode) => (
            <div
              key={episode.episodeNumber}
              onClick={handlePlayClick}
              className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-brand-background border border-brand-border p-3 sm:p-4 md:p-5 rounded-lg hover:bg-brand-surface/70 hover:border-white/20 transition-all cursor-pointer group"
            >
              <span className="text-grey-60 font-bold text-lg sm:text-xl md:text-2xl min-w-10 sm:min-w-12 text-center">
                {String(episode.episodeNumber).padStart(2, "0")}
              </span>
              <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-36 md:h-24 lg:w-40 lg:h-24 bg-brand-border rounded-lg shrink-0"></div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm sm:text-base mb-1 line-clamp-2 group-hover:text-brand-primary transition-colors">
                  {episode.title}
                </h3>
                <p className="text-grey-60 text-xs sm:text-sm">
                  {episode.duration}
                </p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayClick();
                }}
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center border border-brand-border rounded-full bg-brand-surface shrink-0 text-sm sm:text-base hover:bg-brand-primary hover:border-brand-primary transition-all group-hover:scale-110"
              >
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          ))}
      </div>

      {isLoading && (
        <div className="fixed inset-0 bg-neutral-dark/90 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 border-4 border-white/20 border-t-brand-primary rounded-full animate-spin"></div>
            <p className="text-absolutewhite text-lg font-medium">Loading Episode...</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SeasonsEpisodes;
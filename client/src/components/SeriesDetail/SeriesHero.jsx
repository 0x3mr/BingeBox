import { useState } from 'react';

function SeriesHero({ series }) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="relative mt-[-130px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">
      <img
        className="w-full h-full object-cover"
        src={series.background}
        alt={series.title}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, var(--color-brand-background) 0%, transparent 100%)",
        }}
      ></div>

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-24 max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
          {series.title}
        </h1>
        <p className="text-grey-60 mb-4 sm:mb-6 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed pr-4">
          {series.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          <button 
            onClick={handlePlayClick}
            className="bg-brand-primary hover:bg-brand-secondary px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 font-semibold rounded-lg transition-colors text-sm sm:text-base"
          >
            ▶ Play Now
          </button>
          <button className="bg-brand-background border border-brand-border hover:border-white/40 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg transition-all text-lg sm:text-xl">
            +
          </button>
          <button className="bg-brand-background border border-brand-border hover:border-white/40 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg transition-all text-lg sm:text-xl">
            ♡
          </button>
          <button className="bg-brand-background border border-brand-border hover:border-white/40 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg transition-all text-lg sm:text-xl">
            🔊
          </button>
        </div>
      </div>

      {isLoading && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 border-4 border-white/20 border-t-brand-primary rounded-full animate-spin"></div>
            <p className="text-white text-lg font-medium">Loading Player...</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default SeriesHero;
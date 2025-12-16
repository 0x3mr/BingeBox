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

      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-24 max-w-4xl keep-white-on-image">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
          {series.title}
        </h1>
        <p className="text-grey-60 mb-4 sm:mb-6 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed pr-4">
          {series.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          <button
            onClick={handlePlayClick}
            className="bg-brand-primary hover:bg-brand-secondary px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 font-semibold rounded-lg transition-colors text-sm sm:text-base flex items-center gap-2"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Play Now</span>
          </button>
          <button className="bg-brand-background border border-brand-border hover:border-white/40 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg transition-all text-sm sm:text-base flex items-center justify-center">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
          <button className="bg-brand-background border border-brand-border hover:border-white/40 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg transition-all text-sm sm:text-base flex items-center justify-center">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.65 11.54l-1.25 1.31z" />
            </svg>
          </button>
          <button className="bg-brand-background border border-brand-border hover:border-white/40 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg transition-all text-sm sm:text-base flex items-center justify-center">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M5 9v6h4l5 5V4L9 9H5z" />
              <path d="M19 12a2 2 0 0 0-2-2" />
              <path d="M19 18a6 6 0 0 0 0-12" />
            </svg>
          </button>
        </div>
      </div>

      {isLoading && (
        <div className="fixed inset-0 bg-neutral-dark/90 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 border-4 border-white/20 border-t-brand-primary rounded-full animate-spin"></div>
            <p className="text-absolutewhite text-lg font-medium">Loading Player...</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default SeriesHero;
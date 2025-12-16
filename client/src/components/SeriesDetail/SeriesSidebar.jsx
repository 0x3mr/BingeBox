function SeriesSidebar({ series }) {
  return (
    <aside className="bg-brand-background border border-brand-border p-4 sm:p-5 md:p-6 rounded-xl flex flex-col gap-4 sm:gap-5 md:gap-6">
      <div>
        <div className="flex items-center gap-2 text-grey-60 mb-2 sm:mb-3 text-sm sm:text-base">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-surface border border-brand-border">
            <svg
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
          </span>
          <span>Released Year</span>
        </div>
        <p className="text-xl sm:text-2xl font-semibold">
          {series.releaseYear}
        </p>
      </div>

      <div>
        <div className="flex items-center gap-2 text-grey-60 mb-2 sm:mb-3 text-sm sm:text-base">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-surface border border-brand-border">
            <svg
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </span>
          <span>Available Languages</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {series.languages.map((lang) => (
            <span
              key={lang}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-brand-surface border border-brand-border text-xs sm:text-sm"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 text-grey-60 mb-2 sm:mb-3 text-sm sm:text-base">
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-brand-surface border border-brand-border">
            <svg
              className="w-3 h-3"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.77 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </span>
          <span>Ratings</span>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
          <div className="bg-brand-surface border border-brand-border p-3 sm:p-4 rounded-lg hover:bg-brand-surface/70 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(79,195,247,0.2)] transition cursor-pointer">
            <p className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
              IMDb
            </p>
            <p className="font-bold text-base sm:text-lg">
              {series.imdbRating}{" "}
              <span className="text-grey-60 font-normal">/10</span>
            </p>
          </div>

          <div className="bg-brand-surface border border-brand-border p-3 sm:p-4 rounded-lg hover:bg-brand-surface/70 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(79,195,247,0.2)] transition cursor-pointer">
            <p className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
              BingeBox
            </p>
            <p className="font-bold text-base sm:text-lg">
              {series.bingeBoxRating}{" "}
              <span className="text-grey-60 font-normal">/10</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-grey-60 mb-2 sm:mb-3 text-sm sm:text-base">Genres</p>
        <div className="flex flex-wrap gap-2">
          {series.genres.map((genre) => (
            <span
              key={genre}
              className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-brand-surface border border-brand-border text-xs sm:text-sm"
            >
              {genre}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="text-grey-60 mb-2 sm:mb-3 text-sm sm:text-base">
          Director
        </p>
        <div className="flex gap-2 sm:gap-3 bg-brand-surface p-3 sm:p-4 rounded-lg border border-brand-border items-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-border rounded-lg shrink-0"></div>
          <div>
            <p className="font-medium text-sm sm:text-base">
              {series.director}
            </p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-grey-60 mb-2 sm:mb-3 text-sm sm:text-base">Music</p>
        <div className="flex gap-2 sm:gap-3 bg-brand-surface p-3 sm:p-4 rounded-lg border border-brand-border items-center">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-border rounded-lg shrink-0"></div>
          <div>
            <p className="font-medium text-sm sm:text-base">{series.music}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SeriesSidebar;

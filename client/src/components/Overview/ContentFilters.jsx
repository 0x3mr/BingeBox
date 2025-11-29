// ContentFilters Component: Contains the search bar and the main content filter buttons.
function ContentFilters() {
  return (
    <section className="mb-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Search Input */}
        <div className="w-full md:w-1/2 relative">
          <input
            type="text"
            placeholder="Search movies, shows..."
            className="w-full bg-brand-surface/50 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary transition"
          />
          <svg
            className="w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Genre Buttons */}
        <div className="w-full md:w-auto flex flex-wrap gap-3 md:justify-end">
          <button className="px-4 py-2 rounded-full bg-brand-primary border border-brand-primary text-black font-semibold transition hover:bg-sky-500">
            All
          </button>
          <button className="px-4 py-2 rounded-full bg-brand-surface/50 border border-white/10 text-white/80 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-surface/70 transition backdrop-blur-xl">
            Action
          </button>
          <button className="px-4 py-2 rounded-full bg-brand-surface/50 border border-white/10 text-white/80 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-surface/70 transition backdrop-blur-xl">
            Comedy
          </button>
          <button className="px-4 py-2 rounded-full bg-brand-surface/50 border border-white/10 text-white/80 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-surface/70 transition backdrop-blur-xl">
            Drama
          </button>
          <button className="px-4 py-2 rounded-full bg-brand-surface/50 border border-white/10 text-white/80 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-surface/70 transition backdrop-blur-xl">
            Sci-Fi
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContentFilters;

import { useState, useEffect } from "react";

function ContentFilters({ setFilter, onSearch }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState("All"); // initially All is selected

  const filters = [
    "All",
    "Action",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Thriller",
    "Romance",
  ];

  useEffect(() => {
    setFilter("All"); // ensure initial filter applied
  }, [setFilter]);

  return (
    <section className="mb-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Search Input */}
        <div className="w-full md:w-1/2 relative">
          <input
            value={query}
            onChange={(e) => {
              const value = e.target.value;
              setQuery(value);
              if (typeof onSearch === "function") onSearch(value);
            }}
            type="text"
            placeholder="Search movies, shows..."
            className="w-full bg-brand-surface/50 backdrop-blur-xl border border-white/10 rounded-full px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-brand-primary transition"
          />
          <svg
            className="w-5 h-5 absolute right-5 top-1/2 -translate-y-1/2 text-textgray pointer-events-none"
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

        {/* Filter Buttons */}
        <div className="w-full md:w-auto flex flex-wrap gap-3 md:justify-end">
          {filters.map((f) => {
            const isActive = selected === f;
            return (
              <button
                key={f}
                onClick={() => {
                  setSelected(f);
                  setFilter(f);
                }}
                className={
                  isActive
                    ? "px-4 py-2 rounded-full bg-brand-primary text-black font-semibold border border-brand-primary shadow transition"
                    : "px-4 py-2 rounded-full bg-brand-surface/50 border border-white/10 text-white/80 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-surface/70 transition backdrop-blur-xl"
                }
              >
                {f}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ContentFilters;

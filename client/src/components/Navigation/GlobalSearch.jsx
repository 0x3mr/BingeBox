import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function GlobalSearch({ moviesData = [], seriesData = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Combine movies and series data
  const allContent = [
    ...moviesData.map(item => ({ ...item, contentType: 'movie' })),
    ...seriesData.map(item => ({ ...item, contentType: 'series' }))
  ];

  // Filter results based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setResults([]);
      setSelectedIndex(-1);
      return;
    }

    const filtered = allContent
      .filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.genres?.some(genre => 
          genre.toLowerCase().includes(searchQuery.toLowerCase())
        )
      )
      .slice(0, 6); // Limit to 6 results

    setResults(filtered);
    setSelectedIndex(-1);
  }, [searchQuery]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchQuery("");
        setResults([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setSearchQuery("");
      setResults([]);
      setSelectedIndex(-1);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => 
        prev < results.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      handleResultClick(results[selectedIndex]);
    }
  };

  const handleResultClick = (item) => {
    const path = item.contentType === 'movie' 
      ? `/movie/${item.id}` 
      : `/series/${item.id}`;
    navigate(path);
    setIsOpen(false);
    setSearchQuery("");
    setResults([]);
    setSelectedIndex(-1);
  };

  const highlightMatch = (text, query) => {
    if (!query.trim()) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() 
        ? <mark key={index} className="bg-brand-primary/30 text-white">{part}</mark>
        : part
    );
  };

  const openSearch = () => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Search Button */}
      <button
        type="button"
        onClick={openSearch}
        aria-label="Search"
        className="p-2 rounded-md bg-white/6 backdrop-blur-md border border-white/10 hover:bg-white/12 hover:shadow-[0_0_10px_rgba(79,195,247,0.12)] transition"
      >
        <svg
          className="w-5 h-5 text-white/90"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>

      {/* Search Modal/Dropdown */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-brand-surface/95 backdrop-blur-xl border border-brand-border rounded-2xl shadow-2xl overflow-hidden">
            {/* Search Input */}
            <div className="flex items-center gap-3 p-4 border-b border-brand-border">
              <svg
                className="w-5 h-5 text-grey-60"
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
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search movies and series..."
                className="flex-1 bg-transparent text-white text-lg outline-none placeholder-grey-60"
              />
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSearchQuery("");
                  setResults([]);
                }}
                className="text-grey-60 hover:text-white transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {searchQuery.trim() === "" ? (
                <div className="p-8 text-center text-grey-60">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <p className="text-lg">Start typing to search...</p>
                </div>
              ) : results.length === 0 ? (
                <div className="p-8 text-center text-grey-60">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-lg">No results found for "{searchQuery}"</p>
                  <p className="text-sm mt-2">Try searching with different keywords</p>
                </div>
              ) : (
                <div className="py-2">
                  {results.map((item, index) => (
                    <div
                      key={`${item.contentType}-${item.id}`}
                      onClick={() => handleResultClick(item)}
                      className={`flex items-center gap-4 p-4 cursor-pointer transition-all ${
                        selectedIndex === index
                          ? "bg-brand-background border-l-4 border-brand-primary"
                          : "hover:bg-brand-background/50"
                      }`}
                    >
                      {/* Thumbnail */}
                      <div className="w-16 h-24 rounded-lg overflow-hidden bg-brand-border shrink-0">
                        {item.poster ? (
                          <img
                            src={item.poster}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-grey-60">
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Content Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-semibold text-lg mb-1 truncate">
                          {highlightMatch(item.title, searchQuery)}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-grey-60">
                          <span className="px-2 py-0.5 bg-brand-primary/20 text-brand-primary rounded uppercase text-xs font-medium">
                            {item.contentType}
                          </span>
                          {item.releaseYear && <span>{item.releaseYear}</span>}
                          {item.genres && item.genres.length > 0 && (
                            <span>{item.genres.slice(0, 2).join(", ")}</span>
                          )}
                        </div>
                        {item.shortDescription && (
                          <p className="text-grey-60 text-sm mt-1 line-clamp-1">
                            {item.shortDescription}
                          </p>
                        )}
                      </div>

                      {/* Play Icon */}
                      <div className="shrink-0">
                        <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Hint */}
            {results.length > 0 && (
              <div className="px-4 py-3 border-t border-brand-border bg-brand-background/50 text-grey-60 text-sm flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-white/10 rounded text-xs">↑↓</kbd>
                    Navigate
                  </span>
                  <span className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Enter</kbd>
                    Select
                  </span>
                  <span className="flex items-center gap-2">
                    <kbd className="px-2 py-1 bg-white/10 rounded text-xs">Esc</kbd>
                    Close
                  </span>
                </div>
                <span>{results.length} result{results.length !== 1 ? 's' : ''}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default GlobalSearch;
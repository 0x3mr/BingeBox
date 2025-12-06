import { useEffect, useState } from "react";
import MoviePosterCard from "$/components/Home/MoviePosterCard";

export default function TopSearchesSection() {
  const [topSearches, setTopSearches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/topSearches")
      .then((res) => res.json())
      .then((data) => {
        setTopSearches(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch top searches:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white px-4">Loading top searches...</p>;

  return (
    <section className="px-4 md:px-[50px] py-[60px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[28px] font-semibold mb-6 text-white">
          Top Searches
        </h2>

        <button className="w-[120px] h-[30px] rounded-full border border-white/20 bg-white/20 backdrop-blur-md flex items-center justify-center gap-1.5 text-white text-base transition hover:bg-white/30">
          <span>View More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 11"
            className="w-[6px] h-[11px]"
          >
            <path
              d="M1 1L5 5.5L1 10"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex md:grid overflow-x-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 pb-2 no-scrollbar">
        {topSearches.map((movie) => (
          <MoviePosterCard key={movie.id} image={movie.image} />
        ))}
      </div>
    </section>
  );
}

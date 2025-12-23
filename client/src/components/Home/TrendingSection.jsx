import { useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";
import { API_URL, assetUrl } from "../../api";

export default function TrendingSection() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [trendingRes, moviesRes] = await Promise.all([
          fetch(`${API_URL}/trending`),
          fetch(`${API_URL}/movies`),
        ]);

        const trendingData = await trendingRes.json();
        const moviesData = await moviesRes.json();

        const movieIdByTitle = {};
        moviesData.forEach((m) => {
          if (m.title) {
            movieIdByTitle[m.title] = m.id;
          }
        });

        const enriched = trendingData.map((item) => ({
          ...item,
          image: assetUrl(item.image),
          movieId: movieIdByTitle[item.title] || null,
        }));

        setTrending(enriched);
      } catch (err) {
        console.error("Failed to fetch trending or movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return <p className="text-white px-4">Loading trending movies...</p>;

  return (
    <section className="w-full px-4 md:px-[47px] py-8 mt-8">
      <h2 className="font-medium text-white text-[28px] mb-6 -translate-y-4">
        Latest & Trending
      </h2>
      <div className="flex items-end gap-2.5 overflow-x-auto overflow-y-clip -translate-y-4 pb-2 no-scrollbar">
        {trending.map((movie, index) => (
          <TrendingCard
            key={movie.id}
            id={movie.movieId}
            rank={index + 1}
            image={movie.image}
          />
        ))}
      </div>
    </section>
  );
}

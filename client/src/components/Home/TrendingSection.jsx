import { useEffect, useState } from "react";
import TrendingCard from "$/components/Home/TrendingCard";

export default function TrendingSection() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/trending")
      .then((res) => res.json())
      .then((data) => {
        setTrending(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch trending movies:", err);
        setLoading(false);
      });
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
          <TrendingCard key={movie.id} rank={index + 1} image={movie.image} />
        ))}
      </div>
    </section>
  );
}

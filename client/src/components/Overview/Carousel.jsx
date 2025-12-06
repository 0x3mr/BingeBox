import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Carousel({ title, filter, searchQuery, endpoint = "movies" }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      if (!mounted) return;

      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`http://localhost:4000/${endpoint}`);
        if (!res.ok)
          throw new Error(`Failed to fetch ${endpoint} (${res.status})`);
        const data = await res.json();
        if (mounted) setItems(Array.isArray(data) ? data : []);
      } catch (err) {
        if (mounted) setError(err.message || "Fetch error");
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, [endpoint]);

  // Apply filter
  const filteredByFilter =
    filter && filter !== "All"
      ? items.filter((item) => {
          const f = filter.toLowerCase();
          const hasGenre = item.genres?.some((g) =>
            g?.toLowerCase().includes(f),
          );
          const hasCategory = item.category?.toLowerCase().includes(f);
          const hasType = item.type?.toLowerCase().includes(f);
          return hasGenre || hasCategory || hasType;
        })
      : items;

  // Apply search
  const filteredItems = searchQuery
    ? filteredByFilter.filter((item) =>
        item.title?.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : filteredByFilter;

  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">{title}</h2>

      {loading && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-72 rounded-xl bg-gray-800/40 animate-pulse"
            />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="text-red-400">
          Error loading {endpoint}: {error}
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6">
          {filteredItems.map((item) => {
            const isSeries =
              endpoint === "series" ||
              item.season ||
              /season|episode/i.test(item.duration || "");

            const toPath = isSeries
              ? `/series/${item.id}`
              : `/movie/${item.id}`;

            return (
              <div
                key={item.id}
                onClick={() => item.id && navigate(toPath)}
                className="cursor-pointer w-full relative rounded-xl overflow-hidden group bg-brand-surface/50 backdrop-blur-xl border border-white/10 transition-all hover:scale-[1.02] hover:border-brand-primary shadow-xl"
              >
                <img
                  src={
                    item.poster || `https://picsum.photos/300/450?${item.id}`
                  }
                  className="w-full aspect-2/3 object-cover"
                  alt={item.title}
                />

                <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/90 via-black/30 to-transparent">
                  <h3 className="text-sm font-semibold truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/70">
                    {item.category ?? item.releaseYear}
                  </p>
                </div>
              </div>
            );
          })}

          {filteredItems.length === 0 && (
            <p className="text-gray-400 col-span-full">No items found.</p>
          )}
        </div>
      )}
    </section>
  );
}

export default Carousel;

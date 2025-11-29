// MovieCarousel Component: A reusable component to display a horizontal list of movie cards.
function MovieCarousel({ title, type, startSeed, count }) {
  const items = Array.from({ length: count }, (_, i) => i + 1);

  // Helper function to dynamically generate content for each card
  const generateCardContent = (i) => {
    switch (type) {
      case "New Release":
        return {
          title: `Movie Title ${i}`,
          meta: "Action • 2024",
        };
      case "Trending":
        return {
          title: `Trending Movie ${i}`,
          meta: "Action • 2023",
        };
      case "Original":
        return {
          title: `Original ${i}`,
          meta: "Drama • Exclusive",
        };
      default:
        return {
          title: `Placeholder ${i}`,
          meta: "Unknown • 2020",
        };
    }
  };

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <a
          href="#"
          className="text-gray-400 hover:text-brand-primary transition text-sm md:text-base"
        >
          View All &rarr;
        </a>
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {items.map((i) => {
          const content = generateCardContent(i);
          return (
            <div
              key={i}
              className="shrink-0 w-44 sm:w-56 md:w-64 relative rounded-xl overflow-hidden group bg-brand-surface/50 backdrop-blur-xl border border-white/10 transition-all hover:scale-[1.02] hover:border-brand-primary shadow-xl"
            >
              <img
                src={`https://picsum.photos/300/450?${startSeed + i}`}
                className="w-full aspect-2/3 object-cover"
                alt={`${type} ${i}`}
              />
              <div className="absolute inset-x-0 bottom-0 p-4 bg-linear-to-t from-black/90 via-black/30 to-transparent transition-opacity">
                <h3 className="text-lg font-semibold truncate">
                  {content.title}
                </h3>
                <p className="text-sm text-white/70">{content.meta}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MovieCarousel;
function SeriesCast() {
  return (
    <section className="mt-8 sm:mt-10 md:mt-12">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Cast</h2>
        <div className="flex gap-2">
          <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-brand-border rounded-full bg-brand-surface flex items-center justify-center hover:bg-brand-background transition-colors text-sm sm:text-base">
            ←
          </button>
          <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-brand-border rounded-full bg-brand-surface flex items-center justify-center hover:bg-brand-background transition-colors text-sm sm:text-base">
            →
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-brand-surface border border-brand-border rounded-lg hover:bg-brand-background hover:border-brand-primary hover:scale-105 hover:shadow-[0_8px_24px_rgba(79,195,247,0.3)] transition cursor-pointer"
          ></div>
        ))}
      </div>
    </section>
  );
}

export default SeriesCast;


// GenreGrid Component: Displays a grid of movie/show genres.
function GenreGrid() {
    const genres = [
      "ACTION",
      "COMEDY",
      "DRAMA",
      "HORROR",
      "ROMANCE",
      "SCI-FI",
      "ANIME",
      "DOCUMENTARY",
    ];
  
    return (
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Explore Genres</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
          {genres.map((genre, idx) => (
            <div
              key={genre}
              className={`aspect-video rounded-xl backdrop-blur-xl border border-white/10 flex items-center justify-center font-semibold text-lg hover:scale-[1.03] hover:border-brand-primary transition shadow-xl cursor-pointer ${
                idx === 0
                  ? "bg-brand-primary/30"
                  : idx === 1
                    ? "bg-purple-700/30"
                    : idx === 2
                      ? "bg-blue-700/30"
                      : idx === 3
                        ? "bg-green-700/30"
                        : idx === 4
                          ? "bg-orange-700/30"
                          : idx === 5
                            ? "bg-pink-700/30"
                            : idx === 6
                              ? "bg-sky-700/30"
                              : "bg-indigo-700/30"
              }`}
            >
              {genre}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default GenreGrid;
  
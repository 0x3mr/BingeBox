function MovieSidebar({ movie }) {
  return (
    <aside className="w-full md:w-[416px] flex flex-col gap-6 p-6 md:p-10 bg-brand-surface rounded-lg border border-brand-border">
      <div className="flex flex-col gap-2.5 w-full">
        <h3 className="text-grey-60">Released Year</h3>
        <p className="font-semibold text-absolutewhite">{movie.releaseYear}</p>
      </div>

      <div className="flex flex-col gap-2.5 w-full">
        <h3 className="text-grey-60">Available Languages</h3>
        <div className="flex flex-wrap gap-2.5 w-full">
          {movie.languages.map((lang, idx) => (
            <span
              key={idx}
              className="flex items-center px-3 py-1.5 bg-brand-background rounded-md border border-brand-border text-sm"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2.5 w-full">
        <h3 className="text-grey-60">Director</h3>
        <p className="text-absolutewhite">{movie.director}</p>
      </div>

      <div className="flex flex-col gap-2.5 w-full">
        <h3 className="text-grey-60">Music</h3>
        <p className="text-absolutewhite">{movie.music}</p>
      </div>

      <div className="flex flex-col gap-2.5 w-full">
        <h3 className="text-grey-60">Genres</h3>
        <div className="flex gap-2.5">
          {movie.genres.map((g, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 bg-brand-background rounded-md border border-brand-border text-sm"
            >
              {g}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default MovieSidebar;

function MovieDescription({ movie }) {
  return (
    <article className="flex flex-col gap-2.5 p-10 w-full bg-brand-surface rounded-lg border border-brand-border">
      <h2 className="text-grey-60">Description</h2>
      <p className="text-absolutewhite">{movie.longDescription}</p>
    </article>
  );
}

export default MovieDescription;

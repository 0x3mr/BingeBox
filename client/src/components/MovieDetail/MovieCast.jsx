import { assetUrl } from "../../api";

function MovieCast({ cast }) {
  return (
    <article className="flex flex-col gap-5 p-6 md:p-10 w-full bg-brand-surface rounded-lg border border-brand-border">
      <div className="flex items-center w-full gap-4 md:gap-8">
        <h2 className="flex-1 font-inter text-white-60">Cast</h2>
      </div>
      <div className="grid grid-cols-4 gap-2.5 w-full">
        {cast.map((c, index) => (
          <div
            key={index}
            className="h-[150px] bg-neutral-dark rounded-md overflow-hidden"
          >
            <img
              src={assetUrl(c.image)}
              alt={c.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </article>
  );
}

export default MovieCast;

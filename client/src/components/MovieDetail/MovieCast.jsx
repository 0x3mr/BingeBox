import cast1 from "$/assets/movie/640x-d40dc2f30654100e8491d77ad64db513237c6a07b21d3ce6e4996e8b44c396ea.jpg";
import cast2 from "$/assets/movie/Nelly-1-jpg.webp";
import cast3 from "$/assets/movie/1703597867.webp";
import cast4 from "$/assets/movie/images.webp";

function MovieCast() {
  const castImages = [cast1, cast2, cast3, cast4];

  return (
    <article className="flex flex-col gap-5 p-6 md:p-10 w-full bg-brand-surface rounded-lg border border-brand-border">
      <div className="flex items-center w-full gap-4 md:gap-8">
        <h2 className="flex-1 font-inter text-white-60">Cast</h2>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-brand-background border border-brand-border"></button>
          <button className="w-10 h-10 rounded-full bg-brand-background border border-brand-border"></button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2.5 w-full">
        {castImages.map((cast, index) => (
          <div
            key={index}
            className="h-[150px] bg-neutral-dark rounded-md overflow-hidden"
          >
            <img
              src={cast}
              alt="Cast member"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </article>
  );
}

export default MovieCast;

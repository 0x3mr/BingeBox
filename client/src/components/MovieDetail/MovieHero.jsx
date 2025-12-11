import { useState } from 'react';
import movieHero from "$/assets/movie/61433093511.png";

function MovieHero({ movie }) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePlayClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section
      className="w-full max-w-[1280px] h-[468px] md:h-[709px] mx-auto mt-[20px] rounded-xl overflow-hidden relative flex flex-col items-center justify-end gap-5 md:gap-6 pt-6 md:pt-10 pb-4 px-6 md:px-10 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0) 100%), url(${movie.background})`,
      }}
    >
      <div
        className="absolute inset-0 p-px rounded-xl"
        style={{
          background:
            "linear-gradient(180deg, rgba(51, 65, 85, 1) 0%, rgba(51, 65, 85, 0) 100%)",
        }}
      ></div>
      <header className="items-center gap-1 md:gap-0.5 px-4 md:px-[100px] w-full flex flex-col">
        <h1 className="font-bold text-absolutewhite text-2xl md:text-3xl text-center">
          {movie.title}
        </h1>
        <p className="text-grey-60 text-center text-sm">
          {movie.shortDescription}
        </p>
      </header>
      <div className="inline-flex items-center gap-3 md:gap-5 relative z-1">
        <button
          type="button"
          onClick={handlePlayClick}
          className="box-border gap-2 md:gap-2.5 px-5 py-3.5 bg-brand-primary rounded-lg inline-flex items-center cursor-pointer"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="font-semibold text-absolutewhite text-sm">
            Play Now
          </span>
        </button>
      </div>

      {isLoading && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-16 border-4 border-white/20 border-t-brand-primary rounded-full animate-spin"></div>
            <p className="text-white text-lg font-medium">Loading Player...</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default MovieHero;
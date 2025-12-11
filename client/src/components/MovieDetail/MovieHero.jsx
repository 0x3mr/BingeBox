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
        backgroundImage: `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0) 100%), url(${movieHero})`,
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
          The Blue Elephant
        </h1>
        <p className="text-grey-60 text-center text-sm">
          Dr. Yehia, a psychiatrist at El-Abbasiya Hospital, returns to work
          after a long absence only to find his first case involves a close
          friend accused of murder. As Yehia investigates, he uncovers a world
          of hallucinations, mystery, and dark secrets that challenge his mind
          and beliefs.
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
        <div className="flex items-center gap-2">
          <button className="w-12 h-12 rounded-lg bg-black-10 border border-brand-border flex items-center justify-center">
            <svg
              className="w-6 h-6"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          </button>
          <button className="w-12 h-12 rounded-lg bg-black-10 border border-brand-border flex items-center justify-center">
            <svg
              className="w-6 h-6"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.113 11.323H3.5V5.6l3.02-4.297a1.303 1.303 0 0 1 2.356.93L8.65 3.861h1.99c.87 0 2.611.87 2.611 2.61s-1.75 5.722-3.601 5.722c-2.437 0-4.521-.58-5.536-.87M.75 5.375C.75 4.615 1.366 4 2.125 4v0c.76 0 1.375.616 1.375 1.375v5.75c0 .76-.616 1.375-1.375 1.375v0c-.76 0-1.375-.616-1.375-1.375z"
              />
            </svg>
          </button>
          <button className="w-12 h-12 rounded-lg bg-black-10 border border-brand-border flex items-center justify-center">
            <svg
              className="w-6 h-6"
              viewBox="0 0 480 472"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M5 237q0 35 26.5 60.5T95 323h43q14 0 21 10l43 66q18 30 57 30h43q18 0 31.5-12.5T347 387V45q0-17-13-29.5T302 3h-43q-39 0-57 30l-43 66q-7 10-21 10H95q-37 0-63.5 25.5T5 195v42zm43-42q0-18 13.5-30.5T95 152h43q36 0 57-30l43-66q7-11 21-11h45v342h-45q-14 0-21-11l-43-66q-16-30-57-30H95q-20 0-33.5-12.5T48 237v-42zm363 85V152q0-21-22-21q-21 0-21 21v128q0 21 21 21q22 0 22-21zm42-213q-21 0-21 21v256q0 21 21 21q22 0 22-21V88q0-21-22-21z"
              />
            </svg>
          </button>
        </div>
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
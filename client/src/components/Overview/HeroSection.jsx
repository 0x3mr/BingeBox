import { useState, useEffect } from "react";

import img1 from "../../assets/overview/image.png";
import img2 from "../../assets/overview/image2.png";
import img3 from "../../assets/overview/image3.png";

function HeroSection() {
  const images = [img1, img2, img3];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // start fade-out

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(false); // fade-in
      }, 400); // fade duration
    }, 5000); // slide duration

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      aria-label="Featured movie"
      className="relative h-[60vh] md:h-[80vh] flex items-end mb-16 overflow-hidden"
    >
      {/* Background Image with Fade */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
          fade ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-brand-background via-black/30 to-black/70"></div>

      <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 pb-12 w-full relative z-20">
        <p className="text-sm font-semibold text-brand-primary mb-2">
          FEATURED MOVIE
        </p>

        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
          Avengers: Endgame
        </h1>

        <p className="max-w-xl text-white/80 text-lg mb-8">
          With the help of remaining allies, the Avengers assemble once more to
          undo Thanos's actions and restore balance to the universe.
        </p>

        <div className="flex items-center space-x-4">
          <button className="flex items-center px-6 py-3 bg-brand-primary rounded-full font-bold text-black shadow-lg shadow-brand-primary/50 hover:bg-sky-500 transition">
            WATCH NOW
          </button>

          <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition border border-white/10">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <button className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 transition border border-white/10">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

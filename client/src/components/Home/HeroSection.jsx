import { useEffect, useState } from "react";

export default function HeroSection() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/hero")
      .then((res) => res.json())
      .then((data) => setHeroData(data))
      .catch((err) => console.error("Failed to fetch hero data:", err));
  }, []);

  if (!heroData) return <p className="text-white px-4">Loading hero...</p>;

  return (
    <section
      id="hero"
      className="relative w-full min-h-[70vh] min-[420px]:min-h-[80vh] md:min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat pt-24"
      style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-linear-to-t from-brand-background via-transparent to-transparent"></div>

      <div className="relative z-20 w-[436px] max-w-[90%] flex flex-col items-center gap-4 mt-12 keep-white-on-image">
        <img
          src={heroData.logoImage}
          alt="Hero Logo"
          className="w-[300px] sm:w-[340px] md:w-[357px] mb-3"
        />

        {/* Tags */}
        <div className="flex items-center justify-center gap-2 flex-wrap px-4">
          {heroData.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-base md:text-xl text-white/80 ${index === 0 ? "px-3 py-1.5 rounded-full border border-white/50 backdrop-blur-md" : ""}`}
            >
              {tag}
              {/* Add separator after all tags except the first and last */}
              {index > 0 && index < heroData.tags.length - 1 && (
                <span className="mx-2">•</span>
              )}
            </span>
          ))}
        </div>

        <p className="text-sm md:text-base text-white/80 text-center px-4">
          {heroData.description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3.5 mt-2 flex-col sm:flex-row w-full sm:w-auto px-4">
          <button className="w-full sm:w-[206px] h-[50px] rounded-full border border-white/20 bg-white/90 text-black font-medium backdrop-blur-sm hover:scale-105 transition">
            Watch Now
          </button>
          <button className="w-full sm:w-[206px] h-[50px] rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 hover:shadow-[0_0_12px_rgba(255,255,255,0.12)] transition">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from "react";
import ContinueWatchingCard from "./ContinueWatchingCard";

const BASE = import.meta.env.BASE_URL || "/";
const Deadpool2 = `${BASE}assets/home/Deadpool2.jpg`;
const Goodfellas = `${BASE}assets/home/Goodfellas.webp`;
const BreakingBad = `${BASE}assets/home/BreakingBad.jpg`;
const Dexter = `${BASE}assets/home/Dexter.webp`;
const Friends = `${BASE}assets/home/Friends.jpg`;
const Housemd = `${BASE}assets/home/Housemd.jpg`;

export default function ContinueWatchingSection() {
  const scrollContainerRef = useRef(null);

  // Horizontal keyboard navigation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleKeyDown = (e) => {
      // Only handle if not typing in an input
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      ) {
        return;
      }

      // Check if section is in viewport
      const rect = container.getBoundingClientRect();
      const isInView =
        rect.top < window.innerHeight && rect.bottom > 0;

      if (!isInView) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        container.scrollBy({ left: -300, behavior: "smooth" });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="px-4 md:px-[50px] py-[60px]">
      <h2 className="text-[28px] font-semibold mb-6 text-white">
        Continue Watching
      </h2>

      <div
        ref={scrollContainerRef}
        className="flex md:grid overflow-x-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 pb-2 no-scrollbar"
      >
        <ContinueWatchingCard
          image={Goodfellas}
          progress={60}
          episode="1 hour 18 mins mins left"
        />
        <ContinueWatchingCard
          image={Dexter}
          progress={20}
          episode="Season 5 Episode 10"
        />
        <ContinueWatchingCard
          image={BreakingBad}
          progress={90}
          episode="Season 3 Episode 7"
        />
        <ContinueWatchingCard
          image={Friends}
          progress={30}
          episode="Season 9 Episode 16"
        />
        <ContinueWatchingCard
          image={Deadpool2}
          progress={50}
          episode="46 mins mins left"
        />
        <ContinueWatchingCard
          image={Housemd}
          progress={40}
          episode="Season 1 Episode 4"
        />
      </div>
    </section>
  );
}

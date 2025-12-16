import Footer from "../components/Navigation/Footer";
import HeroSection from "../components/Overview/HeroSection";
import ContentFilters from "../components/Overview/ContentFilters";
import Carousel from "../components/Overview/Carousel";
import RegionGrid from "../components/Overview/RegionGrid";
import GenreGrid from "../components/Overview/GenreGrid";
import CTA from "../components/Shared/CTA";

import { useState } from "react";

function Overview() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-brand-background text-absolutewhite min-h-screen relative overflow-x-hidden">
      {/* Background Blur Element */}
      <div className="absolute inset-x-0 top-0 h-[112px] bg-neutral-dark rounded-[1361px] filter blur-[100px] z-0 opacity-70">
        test
      </div>

      <main role="main" className="relative z-10 pb-20 max-w-[1920px] mx-auto">
        <HeroSection />

        <div className="px-6 md:px-12 lg:px-24">
          {/* SEARCH + FILTER INPUTS */}
          <ContentFilters setFilter={setFilter} onSearch={setSearchQuery} />

          {/* FULL MOVIES - NEW RELEASES */}
          <Carousel
            title="New Releases"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            }
            type="New Release"
            startSeed={10}
            count={9999} // <-- show ALL that match
            filter={filter}
            searchQuery={searchQuery}
            endpoint="movies"
          />

          {/* FULL SERIES - TRENDING */}
          <Carousel
            title="Trending Now"
            icon={
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            }
            type="Trending"
            startSeed={20}
            count={9999} // <-- show ALL that match
            filter={filter}
            searchQuery={searchQuery}
            endpoint="series"
          />

          {/* ONLY ORIGINALS */}
          <Carousel
            title="BingeBox Originals"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            }
            type="Original"
            startSeed={30}
            count={9999} // <-- show ALL originals
            filter={filter}
            searchQuery={searchQuery}
            endpoint="movies"
          />

          <RegionGrid />
          <GenreGrid />
        </div>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default Overview;

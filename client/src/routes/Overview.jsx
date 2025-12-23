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
    <div className="bg-brand-background text-white min-h-screen relative overflow-x-hidden">
      {/* Background Blur Element */}
      <div className="absolute inset-x-0 top-0 h-[112px] bg-black rounded-[1361px] filter blur-[100px] z-0 opacity-70">
        test
      </div>

      <main role="main" className="relative z-10 pb-20 max-w-[1920px] mx-auto">
        <HeroSection />

        <div className="px-6 md:px-12 lg:px-24">
          {/* SEARCH + FILTER INPUTS */}
          <ContentFilters setFilter={setFilter} onSearch={setSearchQuery} />

          {/* FULL MOVIES - NEW RELEASES */}
          <Carousel
            title="✨ New Releases"
            type="New Release"
            startSeed={10}
            count={9999} // <-- show ALL that match
            filter={filter}
            searchQuery={searchQuery}
            endpoint="movies"
          />

          {/* FULL SERIES - TRENDING */}
          <Carousel
            title="🔥 Trending Now"
            type="Trending"
            startSeed={20}
            count={9999} // <-- show ALL that match
            filter={filter}
            searchQuery={searchQuery}
            endpoint="series"
          />

          {/* ONLY ORIGINALS */}
          <Carousel
            title="🎬 BingeBox Originals"
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

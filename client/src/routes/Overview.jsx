import Header from "$/components/Navigation/Header";
import Footer from "$/components/Navigation/Footer";
import HeroSection from "$/components/Overview/HeroSection";
import ContentFilters from "$/components/Overview/ContentFilters";
import MovieCarousel from "$/components/Overview/MovieCarousel";
import RegionGrid from "$/components/Overview/RegionGrid";
import GenreGrid from "$/components/Overview/GenreGrid";
import CTA from "$/components/Shared/CTA";

// Overview Component: The main page layout that stitches all the sub-components together.
function Overview() {
  return (
    <div className="bg-brand-background text-white min-h-screen relative overflow-x-hidden">
      {/* Background Blur Element */}
      <div className="absolute inset-x-0 top-0 h-[112px] bg-black rounded-[1361px] filter blur-[100px] z-0 opacity-70">
        test
      </div>

      {/* <Header /> */}

      <main role="main" className="relative z-10 pb-20 max-w-[1920px] mx-auto">
        <HeroSection />

        <div className="px-6 md:px-12 lg:px-24">
          <ContentFilters />

          {/* New Releases Carousel */}
          <MovieCarousel
            title="✨ New Releases"
            type="New Release"
            startSeed={10}
            count={6}
          />

          {/* Trending Now Carousel */}
          <MovieCarousel
            title="🔥 Trending Now"
            type="Trending"
            startSeed={20}
            count={6}
          />

          {/* BingeBox Originals Carousel */}
          <MovieCarousel
            title="🎬 BingeBox Originals"
            type="Original"
            startSeed={30}
            count={3}
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

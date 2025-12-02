import Header from "$/components/Navigation/Header";
import Footer from "$/components/Navigation/Footer";
import SeriesHero from "$/components/SeriesDetail/SeriesHero";
import SeasonsEpisodes from "$/components/SeriesDetail/SeasonsEpisodes";
import SeriesSidebar from "$/components/SeriesDetail/SeriesSidebar";
import SeriesDescription from "$/components/SeriesDetail/SeriesDescription";
import SeriesCast from "$/components/SeriesDetail/SeriesCast";
import SeriesReviews from "$/components/SeriesDetail/SeriesReviews";
import CTA from "$/components/Shared/CTA";

function SeriesDetailPage() {
  return (
    <div className="bg-brand-background text-absolutewhite font-sans overflow-x-hidden pt-[130px]">
      <div className="w-full min-h-screen relative">
        <div className="absolute inset-x-0 top-0 h-[112px] bg-brand-surface rounded-[1361px] filter blur-[100px] z-10"></div>

        {/* <Header /> */}

        <SeriesHero />

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <SeasonsEpisodes />
            <SeriesSidebar />
          </div>

          <SeriesDescription />
          <SeriesCast />
          <SeriesReviews />
        </div>

        <CTA />

        <Footer />
      </div>
    </div>
  );
}

export default SeriesDetailPage;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Navigation/Footer";
import SeriesHero from "../components/SeriesDetail/SeriesHero";
import SeasonsEpisodes from "../components/SeriesDetail/SeasonsEpisodes";
import SeriesSidebar from "../components/SeriesDetail/SeriesSidebar";
import SeriesDescription from "../components/SeriesDetail/SeriesDescription";
import SeriesCast from "../components/SeriesDetail/SeriesCast";
import SeriesReviews from "../components/SeriesDetail/SeriesReviews";
import CTA from "../components/Shared/CTA";

function SeriesDetailPage() {
  const { id } = useParams(); // get the id from URL
  const [series, setSeries] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const res = await fetch("http://localhost:4000/series");
        const data = await res.json();
        // ensure we match even if id types differ (number vs string)
        const matchedSeries = data.find((s) => String(s.id) === String(id));
        setSeries(matchedSeries);
      } catch (error) {
        console.error("Error fetching series:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSeries();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading...
      </div>
    );
  }

  if (!series) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Series not found.
      </div>
    );
  }

  return (
    <div className="bg-brand-background text-absolutewhite font-sans overflow-x-hidden pt-[130px]">
      <div className="w-full min-h-screen relative">
        <div className="absolute inset-x-0 top-0 h-[112px] bg-brand-surface rounded-[1361px] filter blur-[100px] z-10"></div>

        <SeriesHero series={series} />

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <SeasonsEpisodes seasons={series.seasons} />
            <SeriesSidebar series={series} />
          </div>

          <SeriesDescription longDescription={series.longDescription} />
          <SeriesCast cast={series.cast} />
          <SeriesReviews reviews={series.reviews} />
        </div>

        <CTA />

        <Footer />
      </div>
    </div>
  );
}

export default SeriesDetailPage;

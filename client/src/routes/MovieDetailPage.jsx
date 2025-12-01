import Header from "$/components/Navigation/Header";
import Footer from "$/components/Navigation/Footer";
import MovieHero from "$/components/MovieDetail/MovieHero";
import MovieDescription from "$/components/MovieDetail/MovieDescription";
import MovieCast from "$/components/MovieDetail/MovieCast";
import MovieReviews from "$/components/MovieDetail/MovieReviews";
import MovieSidebar from "$/components/MovieDetail/MovieSidebar";
import CTA from "$/components/Shared/CTA";

function MovieDetailPage() {
  return (
    <div className="bg-brand-background text-absolutewhite font-inter min-w-[390px]">
      <div className="w-full min-h-screen relative pt-[130px]">
        <div className="absolute inset-x-0 top-0 h-[112px] bg-brand-surface rounded-[1361px] filter blur-[100px] z-10"></div>

        <Header />

        <MovieHero />

        <section className="w-full max-w-[1286px] mx-auto mt-[30px] md:mt-[80px] flex flex-col md:flex-row gap-5 px-4 md:px-6 lg:px-8">
          <div className="flex-1 flex flex-col md:items-end gap-5">
            <MovieDescription />
            <MovieCast />
            <MovieReviews />
          </div>

          <MovieSidebar />
        </section>

        <CTA />

        <Footer />
      </div>
    </div>
  );
}

export default MovieDetailPage;

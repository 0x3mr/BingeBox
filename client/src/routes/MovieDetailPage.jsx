import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Footer from "../components/Navigation/Footer";
import CTA from "../components/Shared/CTA";

// Components
import MovieHero from "../components/MovieDetail/MovieHero";
import MovieDescription from "../components/MovieDetail/MovieDescription";
import MovieCast from "../components/MovieDetail/MovieCast";
import MovieReviews from "../components/MovieDetail/MovieReviews";
import MovieSidebar from "../components/MovieDetail/MovieSidebar";

function MovieDetailPage() {
  const { id } = useParams(); // get the id from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch("http://localhost:4000/movies");
        const data = await res.json();
        // ensure we match even if id types differ (number vs string)
        const matchedMovie = data.find((m) => String(m.id) === String(id));
        setMovie(matchedMovie);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Loading...
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Movie not found.
      </div>
    );
  }

  return (
    <div className="bg-brand-background text-absolutewhite font-inter min-w-[390px]">
      <div className="w-full min-h-screen relative pt-[130px]">
        <div className="absolute inset-x-0 top-0 h-[112px] bg-brand-surface rounded-[1361px] filter blur-[100px] z-10"></div>

        <MovieHero movie={movie} />

        <section className="w-full max-w-[1286px] mx-auto mt-[30px] md:mt-[80px] flex flex-col md:flex-row gap-5 px-4 md:px-6 lg:px-8">
          <div className="flex-1 flex flex-col md:items-end gap-5">
            <MovieDescription movie={movie} />
            <MovieCast cast={movie.cast} />
            <MovieReviews reviews={movie.reviews} />
          </div>

          <MovieSidebar movie={movie} />
        </section>

        <CTA />

        <Footer />
      </div>
    </div>
  );
}

export default MovieDetailPage;

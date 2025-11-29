import Header from "$/components/Navigation/Header";
import Footer from "$/components/Navigation/Footer";
import seriesHero from "../assets/series/97ef0cd5-a6cf-47b0-b335-9892fc3d51be.png";
import { useState } from "react";

function SeriesDetailPage() {
  const [selectedSeason, setSelectedSeason] = useState(0);

  const seasons = [
    { id: 0, name: "Season 01", episodes: 9 },
    { id: 1, name: "Season 02", episodes: 9 },
    { id: 2, name: "Season 03", episodes: 8 },
  ];

  const episodes = [
    {
      id: 1,
      title: "Chapter One: The Vanishing of Will Byers",
      duration: "48 min",
    },
    {
      id: 2,
      title: "Chapter Two: The Weirdo on Maple Street",
      duration: "56 min",
    },
    { id: 3, title: "Chapter Three: Holly, Jolly", duration: "52 min" },
    { id: 4, title: "Chapter Four: The Body", duration: "51 min" },
  ];

  return (
    <div className="bg-brand-background text-absolutewhite font-sans overflow-x-hidden pt-[130px]">
      <div className="w-full min-h-screen relative">
        <div className="absolute inset-x-0 top-0 h-[112px] bg-brand-surface rounded-[1361px] filter blur-[100px] z-10"></div>

        <Header />

        <section className="relative mt-[-130px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={seriesHero}
            alt="Stranger Things"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, var(--color-brand-background) 0%, transparent 100%)",
            }}
          ></div>

          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-24 max-w-4xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4">
              Stranger Things
            </h1>
            <p className="text-grey-60 mb-4 sm:mb-6 max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed pr-4">
              When a young boy vanishes, a small town uncovers a mystery
              involving secret experiments, terrifying supernatural forces and
              one strange little girl. Set in the 1980s.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              <button className="bg-brand-primary hover:bg-brand-secondary px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 font-semibold rounded-lg transition-colors text-sm sm:text-base">
                ▶ Play Now
              </button>
              <button className="bg-brand-background border border-brand-border hover:border-white/40 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg transition-all text-lg sm:text-xl">
                +
              </button>
              <button className="bg-brand-background border border-brand-border hover:border-white/40 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg transition-all text-lg sm:text-xl">
                ♡
              </button>
              <button className="bg-brand-background border border-brand-border hover:border-white/40 px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-lg transition-all text-lg sm:text-xl">
                🔊
              </button>
            </div>
          </div>
        </section>

        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8 sm:py-10 md:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2 bg-brand-surface border border-brand-border rounded-xl p-4 sm:p-6 md:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                Seasons and Episodes
              </h2>

              <div className="flex gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 overflow-x-auto pb-2 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8">
                {seasons.map((season) => (
                  <button
                    key={season.id}
                    onClick={() => setSelectedSeason(season.id)}
                    className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg whitespace-nowrap font-medium transition-all text-sm sm:text-base ${
                      selectedSeason === season.id
                        ? "bg-brand-background border border-brand-border"
                        : "border border-brand-border text-grey-60 hover:bg-brand-background"
                    }`}
                  >
                    {season.name}{" "}
                    <span className="text-grey-60">
                      {season.episodes} Episodes
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                {episodes.map((episode) => (
                  <div
                    key={episode.id}
                    className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-brand-background border border-brand-border p-3 sm:p-4 md:p-5 rounded-lg hover:bg-brand-surface/70 transition-colors cursor-pointer"
                  >
                    <span className="text-grey-60 font-bold text-lg sm:text-xl md:text-2xl min-w-10 sm:min-w-12 text-center">
                      {String(episode.id).padStart(2, "0")}
                    </span>
                    <div className="w-24 h-16 sm:w-32 sm:h-20 md:w-36 md:h-24 lg:w-40 lg:h-24 bg-brand-border rounded-lg shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm sm:text-base mb-1 line-clamp-2">
                        {episode.title}
                      </h3>
                      <p className="text-grey-60 text-xs sm:text-sm">
                        {episode.duration}
                      </p>
                    </div>
                    <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center border border-brand-border rounded-full bg-brand-surface shrink-0 text-sm sm:text-base">
                      ▶
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <aside className="bg-brand-background border border-brand-border p-4 sm:p-5 md:p-6 rounded-xl flex flex-col gap-4 sm:gap-5 md:gap-6">
              <div>
                <div className="flex items-center gap-2 text-grey-60 mb-2 sm:mb-3 text-sm sm:text-base">
                  <span>📅</span> Released Year
                </div>
                <p className="text-xl sm:text-2xl font-semibold">2022</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-grey-60 mb-2 sm:mb-3 text-sm sm:text-base">
                  <span>🌐</span> Available Languages
                </div>
                <div className="flex flex-wrap gap-2">
                  {["English", "Hindi", "Tamil", "Telegu", "Kannada"].map(
                    (lang) => (
                      <span
                        key={lang}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-brand-surface border border-brand-border text-xs sm:text-sm"
                      >
                        {lang}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-grey-60 mb-2 sm:mb-3 text-sm sm:text-base">
                  <span>⭐</span> Ratings
                </div>
                <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                  <div className="bg-brand-surface border border-brand-border p-3 sm:p-4 rounded-lg hover:bg-brand-surface/70 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(79,195,247,0.2)] transition cursor-pointer">
                    <p className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      IMDb
                    </p>
                    <p className="font-bold text-base sm:text-lg">
                      <span className="text-brand-primary">⭐⭐⭐⭐</span>
                      <span> 4.5</span>
                    </p>
                  </div>

                  <div className="bg-brand-surface border border-brand-border p-3 sm:p-4 rounded-lg hover:bg-brand-surface/70 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_16px_rgba(79,195,247,0.2)] transition cursor-pointer">
                    <p className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                      BingeBox
                    </p>
                    <p className="font-bold text-base sm:text-lg">
                      <span className="text-brand-primary">⭐⭐⭐⭐</span>
                      <span> 4</span>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-grey-60 mb-2 sm:mb-3 text-sm sm:text-base">
                  Genres
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Sci-Fi TV", "Teen TV Shows", "US TV Shows"].map(
                    (genre) => (
                      <span
                        key={genre}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md bg-brand-surface border border-brand-border text-xs sm:text-sm"
                      >
                        {genre}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div>
                <p className="text-grey-60 mb-2 sm:mb-3 text-sm sm:text-base">
                  Director
                </p>
                <div className="flex gap-2 sm:gap-3 bg-brand-surface p-3 sm:p-4 rounded-lg border border-brand-border items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-border rounded-lg shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">
                      The Duffer Brothers
                    </p>
                    <p className="text-grey-60 text-xs sm:text-sm">From USA</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-grey-60 mb-2 sm:mb-3 text-sm sm:text-base">
                  Music
                </p>
                <div className="flex gap-2 sm:gap-3 bg-brand-surface p-3 sm:p-4 rounded-lg border border-brand-border items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-border rounded-lg shrink-0"></div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">
                      Kyle Dixon
                    </p>
                    <p className="text-grey-60 text-xs sm:text-sm">From USA</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <section className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">
              Description
            </h2>
            <p className="text-grey-60 leading-relaxed text-sm sm:text-base">
              When a young boy vanishes, a small town uncovers a mystery
              involving secret experiments, terrifying supernatural forces and
              one strange little girl.
            </p>
          </section>

          <section className="mt-8 sm:mt-10 md:mt-12">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold">Cast</h2>
              <div className="flex gap-2">
                <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-brand-border rounded-full bg-brand-surface flex items-center justify-center hover:bg-brand-background transition-colors text-sm sm:text-base">
                  ←
                </button>
                <button className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border border-brand-border rounded-full bg-brand-surface flex items-center justify-center hover:bg-brand-background transition-colors text-sm sm:text-base">
                  →
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-brand-surface border border-brand-border rounded-lg hover:bg-brand-background hover:border-brand-primary hover:scale-105 hover:shadow-[0_8px_24px_rgba(79,195,247,0.3)] transition cursor-pointer"
                ></div>
              ))}
            </div>
          </section>

          <section className="mt-8 sm:mt-10 md:mt-12">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-semibold">Reviews</h2>
              <button className="border border-brand-border bg-brand-surface px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg hover:bg-brand-background transition-colors text-sm sm:text-base w-full sm:w-auto">
                + Add Your Review
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              <div className="bg-brand-surface border border-brand-border p-4 sm:p-5 md:p-6 rounded-xl hover:bg-brand-background hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition cursor-pointer">
                <div className="flex justify-between mb-3 sm:mb-4">
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      Arlind Boy
                    </h3>
                    <p className="text-grey-60 text-xs sm:text-sm">
                      From India
                    </p>
                  </div>
                  <div className="text-xs sm:text-sm flex items-center gap-2">
                    <span className="text-brand-primary">⭐⭐⭐⭐⭐</span>
                    <span className="text-grey-60">5</span>
                  </div>
                </div>
                <p className="text-grey-60 leading-relaxed text-sm sm:text-base">
                  This show is a total blast! Loved the way they re-created the
                  80s...
                </p>
              </div>

              <div className="bg-brand-surface border border-brand-border p-4 sm:p-5 md:p-6 rounded-xl hover:bg-brand-background hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.5)] transition cursor-pointer">
                <div className="flex justify-between mb-3 sm:mb-4">
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      Shakirti
                    </h3>
                    <p className="text-grey-60 text-xs sm:text-sm">
                      From India
                    </p>
                  </div>
                  <div className="text-xs sm:text-sm flex items-center gap-2">
                    <span className="text-brand-primary">⭐⭐⭐⭐⭐</span>
                    <span className="text-grey-60">5</span>
                  </div>
                </div>
                <p className="text-grey-60 leading-relaxed text-sm sm:text-base">
                  A restless king promises his lands to the local tribals...
                </p>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-12 sm:mt-14 md:mt-16 bg-brand-surface border-y border-brand-border">
          <div className="max-w-screen-2xl mx-auto p-6 sm:p-8 md:p-12 lg:p-16 xl:p-24 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:text-left">
            <div className="max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                Start your free trial today!
              </h2>
              <p className="text-grey-60 text-base sm:text-lg">
                This is a clear and concise call to action encouraging sign-up.
              </p>
            </div>
            <button className="bg-brand-primary px-6 py-3 sm:px-8 sm:py-4 font-semibold rounded-lg hover:bg-brand-secondary whitespace-nowrap transition-colors text-sm sm:text-base w-full sm:w-auto">
              Start a Free Trial
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default SeriesDetailPage;

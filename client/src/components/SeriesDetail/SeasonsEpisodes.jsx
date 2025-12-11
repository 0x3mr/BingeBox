import { useState } from "react";

function SeasonsEpisodes({ seasons }) {
  const [selectedSeason, setSelectedSeason] = useState(0);

  // Use the provided seasons data
  const seasonsData = seasons || [];

  return (
    <div className="lg:col-span-2 bg-brand-surface border border-brand-border rounded-xl p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        Seasons and Episodes
      </h2>

      <div className="flex gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 overflow-x-auto pb-2 -mx-4 sm:-mx-6 md:-mx-8 px-4 sm:px-6 md:px-8">
        {seasonsData.map((season) => (
          <button
            key={season.seasonNumber}
            onClick={() => setSelectedSeason(season.seasonNumber)}
            className={`px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg whitespace-nowrap font-medium transition-all text-sm sm:text-base ${
              selectedSeason === season.seasonNumber
                ? "bg-brand-background border border-brand-border"
                : "border border-brand-border text-grey-60 hover:bg-brand-background"
            }`}
          >
            Season {season.seasonNumber}{" "}
            <span className="text-grey-60">
              - {season.episodes.length} Episodes
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {seasonsData
          .find((season) => season.seasonNumber === selectedSeason)
          ?.episodes.map((episode) => (
            <div
              key={episode.episodeNumber}
              className="flex items-center gap-2 sm:gap-3 md:gap-4 bg-brand-background border border-brand-border p-3 sm:p-4 md:p-5 rounded-lg hover:bg-brand-surface/70 transition-colors cursor-pointer"
            >
              <span className="text-grey-60 font-bold text-lg sm:text-xl md:text-2xl min-w-10 sm:min-w-12 text-center">
                {String(episode.episodeNumber).padStart(2, "0")}
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
  );
}

export default SeasonsEpisodes;

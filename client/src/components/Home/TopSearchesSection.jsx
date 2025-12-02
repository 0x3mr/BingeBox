import MoviePosterCard from "$/components/Home/MoviePosterCard";
import JusticeLeague from "../../assets/home/JusticeLeague.webp";
import ThorRagnarok from "../../assets/home/ThorRagnarok.webp";
import Titanic from "../../assets/home/Titanic.jpg";
import JumanjiNextLevel from "../../assets/home/jumaninextlevel.jpg";
import Joker from "../../assets/home/Joker.webp";
import JerryMaguirre from "../../assets/home/JerryMaguire.jpg";

export default function TopSearchesSection() {
  return (
    <section className="px-4 md:px-[50px] py-[60px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[28px] font-semibold mb-6 text-white">
          Top Searches
        </h2>

        <button className="w-[120px] h-[30px] rounded-full border border-white/20 bg-white/20 backdrop-blur-md flex items-center justify-center gap-1.5 text-white text-base transition hover:bg-white/30">
          <span>View More</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 11"
            className="w-[6px] h-[11px]"
          >
            <path
              d="M1 1L5 5.5L1 10"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="flex md:grid overflow-x-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 pb-2 no-scrollbar">
        <MoviePosterCard image={JusticeLeague} />
        <MoviePosterCard image={ThorRagnarok} />
        <MoviePosterCard image={Titanic} />
        <MoviePosterCard image={JumanjiNextLevel} />
        <MoviePosterCard image={Joker} />
        <MoviePosterCard image={JerryMaguirre} />
      </div>
    </section>
  );
}

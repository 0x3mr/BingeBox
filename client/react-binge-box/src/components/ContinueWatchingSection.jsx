import ContinueWatchingCard from "./ContinueWatchingCard";
import spidermanHero from "../assets/home/spiderman-hero.png";

export default function ContinueWatchingSection() {
  return (
    <section className="px-4 md:px-[50px] py-[60px]">
      <h2 className="text-[28px] font-semibold mb-6 text-white">Continue Watching</h2>

      <div className="flex md:grid overflow-x-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 pb-2">
        <ContinueWatchingCard
          image={spidermanHero}
          progress={60}
          episode="Episode 4 of 10"
        />
      </div>
    </section>
  );
}

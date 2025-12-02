import TrendingCard from "$/components/Home/TrendingCard";
import skyfall from "$/assets/home/Skyfall.webp";
import captainamericacivilwar from "$/assets/home/captain-america-civil-war.jpg";
import DarkKnightRises from "$/assets/home/DarkKnightRises.jpg";
import Matrix from "$/assets/home/Matrix.jpg";
import Interstellar from "$/assets/home/interstellar.jpg";
import Notebook from "$/assets/home/Notebook.jpg";
import Cars2 from "$/assets/home/Cars2.webp";
import Dunkirk from "$/assets/home/Dunkirk.jpg";
import PulpFiction from "$/assets/home/PulpFiction.webp";
import spidermanacross from "$/assets/home/spider-man-across-the-spider-verse.webp";

export default function TrendingSection() {
  return (
    <section className="w-full px-4 md:px-[47px] py-8 mt-8">
      <h2 className="font-medium text-white text-[28px] mb-6 -translate-y-4">
        Latest & Trending
      </h2>
      <div className="flex items-end gap-2.5 overflow-x-auto overflow-y-clip -translate-y-4 pb-2 no-scrollbar">
        <TrendingCard rank={1} image={Interstellar} />
        <TrendingCard rank={2} image={Cars2} />
        <TrendingCard rank={3} image={skyfall} />
        <TrendingCard rank={4} image={captainamericacivilwar} />
        <TrendingCard rank={5} image={DarkKnightRises} />
        <TrendingCard rank={6} image={Matrix} />
        <TrendingCard rank={7} image={Notebook} />
        <TrendingCard rank={8} image={Dunkirk} />
        <TrendingCard rank={9} image={PulpFiction} />
        <TrendingCard rank={10} image={spidermanacross} />
      </div>
    </section>
  );
}

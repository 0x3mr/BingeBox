import CategoryCard from "./CategoryCard";
import Faster from "$/assets/home/Faster.jpg";
import RomeoandJuliet from "$/assets/home/RomeoandJuliet.jpg";
import Spidermanfar from "$/assets/home/Spiderman-far-from-home.jpg";

export default function CategoriesSection() {
  return (
    <section className="px-4 md:px-[50px] py-[60px]">
      <h2 className="text-[28px] font-semibold mb-6 text-white">
        Featured Categories
      </h2>

      <div className="flex md:grid overflow-x-auto md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-2 no-scrollbar">
        <CategoryCard image={Faster} title="Action" />
        <CategoryCard image={Spidermanfar} title="Comic" />
        <CategoryCard image={RomeoandJuliet} title="Romance" />
      </div>
    </section>
  );
}

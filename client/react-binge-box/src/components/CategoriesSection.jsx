import CategoryCard from "./CategoryCard";
import spidermanHero from "../assets/home/spiderman-hero.png";

export default function CategoriesSection() {
  return (
    <section className="px-4 md:px-[50px] py-[60px]">
      <h2 className="text-[28px] font-semibold mb-6 text-white">Featured Categories</h2>

      <div className="flex md:grid overflow-x-auto md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-2">
        <CategoryCard image={spidermanHero} title="Action" />
        <CategoryCard image="https://via.placeholder.com/600x350" title="Drama" />
        <CategoryCard image="https://via.placeholder.com/600x350" title="Comedy" />
      </div>
    </section>
  );
}

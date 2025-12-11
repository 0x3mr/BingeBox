import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white px-4">Loading categories...</p>;

  return (
    <section className="px-4 md:px-[50px] py-[60px]">
      <h2 className="text-[28px] font-semibold mb-6 text-white">
        Featured Categories
      </h2>

      <div className="flex md:grid overflow-x-auto md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-2 no-scrollbar">
        {categories.map((cat) => (
          <CategoryCard key={cat.id} image={cat.image} title={cat.title} />
        ))}
      </div>
    </section>
  );
}

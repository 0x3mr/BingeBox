import { useEffect, useState, useRef } from "react";
import CategoryCard from "./CategoryCard";
import { API_URL, assetUrl } from "../../api";

export default function CategoriesSection() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    fetch(`${API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(
          (data || []).map((cat) => ({
            ...cat,
            image: assetUrl(cat.image),
          })),
        );
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
        setLoading(false);
      });
  }, []);

  // Horizontal keyboard navigation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleKeyDown = (e) => {
      // Only handle if not typing in an input
      if (
        e.target.tagName === "INPUT" ||
        e.target.tagName === "TEXTAREA" ||
        e.target.isContentEditable
      ) {
        return;
      }

      // Check if section is in viewport
      const rect = container.getBoundingClientRect();
      const isInView =
        rect.top < window.innerHeight && rect.bottom > 0;

      if (!isInView) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        container.scrollBy({ left: -300, behavior: "smooth" });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        container.scrollBy({ left: 300, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (loading) return <p className="text-white px-4">Loading categories...</p>;

  return (
    <section className="px-4 md:px-[50px] py-[60px]">
      <h2 className="text-[28px] font-semibold mb-6 text-white">
        Featured Categories
      </h2>

      <div
        ref={scrollContainerRef}
        className="flex md:grid overflow-x-auto md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 pb-2 no-scrollbar"
      >
        {categories.map((cat) => (
          <CategoryCard key={cat.id} image={cat.image} title={cat.title} />
        ))}
      </div>
    </section>
  );
}

export default function CategoryCard({ image, title }) {
  return (
    <a
      href="#"
      className="relative shrink-0 w-[220px] sm:w-[260px] md:w-auto rounded-2xl overflow-hidden hover:scale-105 transition-all"
    >
      <img src={image} alt={title} className="w-full h-[298px] object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex items-end p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
    </a>
  );
}

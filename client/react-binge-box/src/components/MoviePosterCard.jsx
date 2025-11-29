export default function MoviePosterCard({ image, children }) {
  return (
    <a
      href="#"
      className="relative shrink-0 w-[220px] sm:w-[260px] md:w-auto rounded-xl overflow-hidden bg-white/10 hover:scale-105 transition-all"
    >
      <img src={image} alt="Movie Poster" className="w-full h-[298px] object-cover" />
      {children}
    </a>
  );
}

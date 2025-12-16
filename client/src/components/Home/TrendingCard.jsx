import { Link } from "react-router-dom";

export default function TrendingCard({ id, rank, image }) {
  const to = id ? `/movie/${id}` : "#";

  return (
    <Link
      to={to}
      className="relative shrink-0 w-[220px] sm:w-60 md:w-[281px] h-[298px] cursor-pointer transition-transform hover:scale-105"
    >
      <div className="absolute left-0 top-0 w-[250px] h-[298px] text-center font-[1000] text-[250px] leading-[298px] backdrop-blur-l text-white/90">
        {rank}
      </div>
      <img
        className="absolute top-[82px] left-[129px] w-[166px] h-[206px] object-cover rounded-lg shadow-lg"
        alt={`Trending item ${rank}`}
        src={image}
      />
    </Link>
  );
}

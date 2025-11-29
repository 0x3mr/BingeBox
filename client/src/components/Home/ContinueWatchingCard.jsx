export default function ContinueWatchingCard({ image, progress, episode }) {
  return (
    <a
      href="#"
      className="relative shrink-0 w-[220px] sm:w-[260px] md:w-auto rounded-xl overflow-hidden bg-white/10 hover:scale-105 transition-all"
    >
      <img
        src={image}
        alt="Continue watching"
        className="w-full h-[298px] object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 p-3 bg-linear-to-t from-black/60 via-transparent">
        <div className="w-full h-1 bg-white/20 rounded">
          <div
            className="h-1 bg-red-500 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-white/80 mt-2">{episode}</p>
      </div>
    </a>
  );
}

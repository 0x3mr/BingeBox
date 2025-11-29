// RegionGrid Component: Displays a grid of regional content categories.
function RegionGrid() {
  const regions = [
    "KHALIJI",
    "WESTERN",
    "ARABIC",
    "TURKISH",
    "SAUDI",
    "EGYPTIAN",
    "BOLLYWOOD",
    "KOREAN",
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Explore Regions & More
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
        {regions.map((region, idx) => (
          <div
            key={region}
            className={`aspect-video rounded-xl backdrop-blur-xl border border-white/10 flex items-center justify-center font-semibold text-lg hover:scale-[1.03] hover:border-brand-primary transition shadow-xl cursor-pointer ${
              idx === 0
                ? "bg-green-700/30"
                : idx === 1
                  ? "bg-purple-700/30"
                  : idx === 2
                    ? "bg-pink-700/30"
                    : idx === 3
                      ? "bg-teal-700/30"
                      : idx === 4
                        ? "bg-yellow-700/30"
                        : idx === 5
                          ? "bg-cyan-700/30"
                          : idx === 6
                            ? "bg-blue-700/30"
                            : "bg-fuchsia-700/30"
            }`}
          >
            {region}
          </div>
        ))}
      </div>
    </section>
  );
}

export default RegionGrid;
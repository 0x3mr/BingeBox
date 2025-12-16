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
        {regions.map((region, idx) => {
          // Consistent color palette using brand colors
          const colorClasses = [
            "bg-linear-to-br from-brand-primary/40 to-cyan-600/30", // KHALIJI
            "bg-linear-to-br from-brand-secondary/40 to-slate-700/30", // WESTERN
            "bg-linear-to-br from-brand-primary/30 to-brand-secondary/40", // ARABIC
            "bg-linear-to-br from-cyan-500/40 to-brand-primary/30", // TURKISH
            "bg-linear-to-br from-brand-secondary/50 to-indigo-700/30", // SAUDI
            "bg-linear-to-br from-brand-primary/40 to-teal-600/30", // EGYPTIAN
            "bg-linear-to-br from-indigo-600/40 to-brand-primary/30", // BOLLYWOOD
            "bg-linear-to-br from-brand-secondary/40 to-cyan-700/30", // KOREAN
          ];

          return (
            <div
              key={region}
              className={`aspect-video rounded-xl backdrop-blur-xl border border-white/10 flex items-center justify-center font-semibold text-lg hover:scale-[1.03] hover:border-brand-primary transition shadow-xl cursor-pointer ${colorClasses[idx]}`}
            >
              {region}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default RegionGrid;

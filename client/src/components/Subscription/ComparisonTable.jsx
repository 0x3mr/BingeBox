// Plan Comparison Table Section
function PlanComparisonTable() {
  const comparisonData = [
    {
      feature: "Price",
      basic: "$9.99/Month",
      standard: "$12.99/Month",
      premium: "$14.99/Month",
    },
    {
      feature: "Content",
      basic:
        "Access to a wide selection of movies and shows, including some new releases.",
      standard:
        "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
      premium:
        "Access to the widest selection of movies and shows, including all new releases and offline viewing.",
    },
    {
      feature: "Devices",
      basic: "Watch on one device",
      standard: "Watch on two devices",
      premium: "Watch on four devices",
    },
    {
      feature: "Free Trial",
      basic: "7 Days",
      standard: "7 Days",
      premium: "7 Days",
    },
    {
      feature: "Cancel Anytime",
      basic: "Yes",
      standard: "Yes",
      premium: "Yes",
    },
    {
      feature: "HDR",
      basic: "No",
      standard: "Yes",
      premium: "Yes",
    },
    {
      feature: "Dolby Atmos",
      basic: "No",
      standard: "Yes",
      premium: "Yes",
    },
    {
      feature: "Ad-Free",
      basic: "No",
      standard: "Yes",
      premium: "Yes",
    },
    {
      feature: "Offline Viewing",
      basic: "No",
      standard: "Yes, for select titles.",
      premium: "Yes, for all titles.",
    },
    {
      feature: "Family Sharing",
      basic: "No",
      standard: "Yes, up to 5 family members.",
      premium: "Yes, up to 6 family members.",
    },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 md:px-8 mt-24">
      <div className="flex flex-col items-start mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Compare our plans and find the right one for you
        </h2>
        <p className="text-gray-400 max-w-[700px]">
          BingeBox offers three different plans to fit your needs: Basic,
          Standard, and Premium. Compare their features and pick what fits your
          viewing habits best.
        </p>
      </div>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[768px] w-full rounded-xl border border-brand-border overflow-hidden">
          <div className="flex bg-[#11141C] border-b border-brand-border">
            <div className="flex-1 p-4 md:p-6 font-semibold text-white">
              Features
            </div>
            <div className="flex-1 p-4 md:p-6 border-l border-brand-border text-center font-semibold text-white">
              Basic
            </div>
            <div className="flex-1 p-4 md:p-6 border-l border-brand-border text-center font-semibold text-white flex items-center justify-center gap-2">
              Standard
              <span className="bg-brand-primary/10 text-brand-primary text-xs px-2 py-0.5 rounded-md">
                Popular
              </span>
            </div>
            <div className="flex-1 p-4 md:p-6 border-l border-brand-border text-center font-semibold text-white">
              Premium
            </div>
          </div>

          {comparisonData.map((row, idx) => (
            <div
              key={idx}
              className={`flex ${idx === comparisonData.length - 1 ? "border-t" : "border-b"} border-brand-border`}
            >
              <div className="flex-1 p-4 text-gray-400">{row.feature}</div>
              <div className="flex-1 p-4 border-l border-brand-border text-gray-400 text-sm">
                {row.basic}
              </div>
              <div className="flex-1 p-4 border-l border-brand-border text-gray-400 text-sm">
                {row.standard}
              </div>
              <div className="flex-1 p-4 border-l border-brand-border text-gray-400 text-sm">
                {row.premium}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlanComparisonTable;

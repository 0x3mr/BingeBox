import StatCard from "./StatCard";

function ProfileStatsGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="This Month"
          value="24 Movies"
          subtitle="+12% from last month"
          green
          icon={
            <svg
              className="w-4 h-4 text-[#00c950]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          }
        />

        <StatCard
          title="Watch Time (week)"
          value="52.5 hrs"
          subtitle="+8% from last month"
          green
          icon={
            <svg
              className="w-4 h-4 text-[#00c950]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              ></path>
            </svg>
          }
        />

        <StatCard
          title="Avg. Rating"
          value="4.3"
          subtitle="Based on 156 ratings"
          icon={
            <svg
              className="w-5 h-5 fill-current text-absolutewhite"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          }
        />

        <StatCard title="Streak" value="15 days" subtitle="Keep it up!" />
      </div>
    </section>
  );
}

export default ProfileStatsGrid;

import Footer from "../components/Navigation/Footer";

import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileStatsGrid from "../components/Profile/ProfileStatsGrid";
import ProfileChart from "../components/Profile/ProfileChart";
import GenreTrendsChart from "../components/Profile/GenreTrendsChart";
import ContentDistributionChart from "../components/Profile/ContentDistributionChart";
import GenrePreferencesChart from "../components/Profile/GenrePreferencesChart";
import WeeklyActivityChart from "../components/Profile/WeeklyActivityChart";
import TrendingStatsChart from "../components/Profile/TrendingStatsChart";
import ProfileNav from "../components/Profile/ProfileNav";

function Profile() {
  return (
    <div className="bg-brand-background font-inter min-h-screen">
      {/* <Header /> */}

      <main
        role="main"
        className="pt-[150px] pb-20 px-4 md:px-12 bg-brand-background overflow-x-hidden w-full min-h-screen z-0"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-8 w-full mb-8">
            <ProfileHeader />
            <ProfileStatsGrid />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <ProfileNav />

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Analytics Dashboard */}
              <div className="w-full">
                <h2 className="text-2xl font-semibold text-absolutewhite mb-6">
                  Analytics Dashboard
                </h2>
                
                <div className="flex flex-col gap-6">
                  {/* First Row - Bar Chart (Hours Watched) */}
                  <ProfileChart />

                  {/* Second Row - Line Chart (Interactive - Time Period Switching) */}
                  <GenreTrendsChart />

                  {/* Third Row - Two Charts Side by Side */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Pie Chart with Drill-down (Interactive) */}
                    <ContentDistributionChart />
                    {/* Donut Chart with Filtering (Interactive) */}
                    <GenrePreferencesChart />
                  </div>

                  {/* Fourth Row - Radar Chart */}
                  <WeeklyActivityChart />

                  {/* Fifth Row - External API Chart (Real-time Data) */}
                  <TrendingStatsChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;

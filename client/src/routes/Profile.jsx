import Footer from "../components/Navigation/Footer";

import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileStatsGrid from "../components/Profile/ProfileStatsGrid";
import ProfileChart from "../components/Profile/ProfileChart";
import ProfileNav from "../components/Profile/ProfileNav";

function Profile() {
  return (
    <div className="bg-brand-background font-inter min-h-screen">
      {/* <Header /> */}

      <main
        role="main"
        className="pt-[150px] flex items-center justify-center bg-brand-background overflow-x-hidden w-full min-h-screen z-0"
      >
        <div className="flex flex-col w-full max-w-[1440px] items-start bg-brand-surface px-4 md:px-16 py-12">
          <div className="flex flex-col items-start gap-8 w-full">
            <ProfileHeader />

            <ProfileStatsGrid />

            <ProfileChart />

            <ProfileNav />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Profile;

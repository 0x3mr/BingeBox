// /src/routes/Settings.jsx

import Header from "$/components/Navigation/Header";
import Footer from "$/components/Navigation/Footer";

import Sidebar from "$/components/Settings/Sidebar";
import ProfileInfo from "$/components/Settings/ProfileInfo";
import StreamingPreferences from "$/components/Settings/StreamingPreferences";
import ConnectedDevices from "$/components/Settings/ConnectedDevices";
import DangerZone from "$/components/Settings/DangerZone";

function Settings() {
  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen">
      <div className="absolute inset-x-0 top-0 h-[112px] bg-black rounded-[1361px] filter blur-[100px] z-10"></div>

      <Header />

      <main
        role="main"
        className="relative z-10 pt-[150px] pb-20 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              Account Settings
            </h1>
            <p className="text-gray-400 text-lg">
              Manage your BingeBox preferences and account settings
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <Sidebar />

            <div className="lg:col-span-3 space-y-8">
              <ProfileInfo />
              <StreamingPreferences />
              <ConnectedDevices />
              <DangerZone />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Settings;

import Header from "../components/Header";
import Footer from "../components/Footer";

import HeroSection from "../components/HeroSection";
import TrendingSection from "../components/TrendingSection";
import TopSearchesSection from "../components/TopSearchesSection";
import ContinueWatchingSection from "../components/ContinueWatchingSection";
import CategoriesSection from "../components/CategoriesSection";

export default function Home() {
  return (
    <div className="bg-[#0b132b] text-white font-['Inter',sans-serif] overflow-x-hidden min-h-screen">
      <Header />

      <HeroSection />
      <TrendingSection />
      <TopSearchesSection />
      <ContinueWatchingSection />
      <CategoriesSection />

      <Footer />
    </div>
  );
}

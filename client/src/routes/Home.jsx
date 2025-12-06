import Footer from "$/components/Navigation/Footer";

import HeroSection from "../components/Home/HeroSection";
import TrendingSection from "../components/Home/TrendingSection";
import TopSearchesSection from "../components/Home/TopSearchesSection";
import ContinueWatchingSection from "../components/Home/ContinueWatchingSection";
import CategoriesSection from "../components/Home/CategoriesSection";

export default function Home() {
  return (
    <div className="bg-brand-background text-white font-['Inter',sans-serif] overflow-x-hidden min-h-screen">
      <HeroSection />
      <TrendingSection />
      <TopSearchesSection />
      <ContinueWatchingSection />
      <CategoriesSection />

      <Footer />
    </div>
  );
}

import Header from "../components/Navigation/Header";
import Footer from "../components/Navigation/Footer";

import SubscriptionHero from "../components/Subscription/SubscriptionHero";
import PricingCards from "../components/Subscription/PricingCards";
import ComparisonTable from "../components/Subscription/ComparisonTable";
import CTA from "../components/Shared/CTA";

function Subscription() {
  return (
    <div className="m-0 min-h-screen w-full font-inter bg-brand-background text-absolutewhite">
      <div className="w-full min-h-screen flex flex-col">
        {/* Visual Effect: Top blurred black gradient/glow */}
        <div className="absolute inset-x-0 top-0 h-[112px] bg-neutral-dark rounded-[1361px] filter blur-[100px] z-10"></div>

        {/* Navigation Bar */}
        {/* <Header /> */}

        {/* Main Content Wrapper: Ensures content fills space and pushes footer down */}
        <div className="flex-1">
          {/* Section 1: Hero Text (Title and Subtitle) */}
          <SubscriptionHero />

          {/* Section 2: Pricing Cards (Basic, Standard, Premium) */}
          <PricingCards />

          {/* Section 3: Feature Comparison Table */}
          <ComparisonTable />

          {/* Section 4: Bottom Call-to-Action Banner */}
          <CTA />
        </div>

        {/* Footer Navigation */}
        <Footer />
      </div>
    </div>
  );
}

export default Subscription;

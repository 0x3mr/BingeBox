import LanguageSelector from "./Blocks/LanguageSelector";
import SocialMediaLinks from "./Blocks/SocialMediaLinks";
import DownloadAppLinks from "./Blocks/DownloadAppLinks";
import FooterSection from "./Blocks/FooterSection";

const companyLinks = [
  { text: "About Us", href: "#" },
  { text: "Careers", href: "#" },
];

const helpLinks = [
  { text: "Visit Help Center", href: "#" },
  { text: "Share Feedback", href: "#" },
];

function Footer() {
  return (
    <footer className="w-full bg-black/50 border-t border-white/10 py-12 px-4 md:px-20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <FooterSection title="Company" links={companyLinks} />
        <FooterSection title="Need Help" links={helpLinks} />
        <LanguageSelector />
        <SocialMediaLinks />
        <DownloadAppLinks />
      </div>

      <p className="text-center text-sm text-white/40 my-12">
        &copy; 2025 BingeBox. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;

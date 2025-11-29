function Footer() {
  return (
    <footer
      role="contentinfo"
      className="w-full bg-black/50 border-t border-white/10 py-12 px-4 md:px-20 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          <a href="#" className="block text-white/70 hover:text-white mb-2">
            About Us
          </a>
          <a href="#" className="block text-white/70 hover:text-white">
            Careers
          </a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Need Help</h3>
          <a href="#" className="block text-white/70 hover:text-white mb-2">
            Visit Help Center
          </a>
          <a href="#" className="block text-white/70 hover:text-white">
            Share Feedback
          </a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">View Website In</h3>
          <div
            className="flex items-center gap-3 border border-white/30 rounded-xl px-3 py-2 w-fit"
            role="combobox"
            aria-label="Select language"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M5 7l5 5 5-5"
                stroke="white"
                strokeOpacity="0.8"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>English</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Social Media</h3>
          <div className="flex gap-5">
            <a href="#" aria-label="Visit our Instagram page" className="hover:opacity-80 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
                width="22"
                alt="Instagram"
              />
            </a>
            <a href="#" aria-label="Visit our Twitter page" className="hover:opacity-80 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                width="22"
                alt="Twitter"
              />
            </a>
            <a href="#" aria-label="Visit our YouTube channel" className="hover:opacity-80 transition">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                width="22"
                alt="YouTube"
              />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Download Our App</h3>
          <div className="flex flex-col gap-3">
            <a href="#" aria-label="Download on App Store" className="w-[50px] hover:opacity-90 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_(iOS).svg"
                alt="Download on App Store"
              />
            </a>
            <a href="#" aria-label="Get it on Google Play" className="w-[150px] hover:opacity-90 transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
              />
            </a>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-white/40 mt-10">
        &copy; 2025 BingeBox. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;


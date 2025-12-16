import { Link } from "react-router-dom";

// NotFound Component: A stylized 404 error page with a cinematic, customer-friendly design.
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-background text-absolutewhite font-inter p-4 sm:p-6">
      {/* Dynamic Background Glitch Effect */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #0f0f0f 0, #0f0f0f 2px, transparent 2px, transparent 4px), repeating-linear-gradient(-45deg, #0f0f0f 0, #0f0f0f 2px, transparent 2px, transparent 4px)",
          backgroundSize: "8px 8px",
          filter: "blur(1px)",
        }}
      ></div>

      {/* Main Content Card - Larger and more segmented */}
      <div className="relative z-10 w-full max-w-xl bg-brand-surface/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-brand-border shadow-[0_0_80px_rgba(255,255,255,0.1)]">
        {/* Header Section: 404 Visual */}
        <div className="p-10 text-center border-b border-white/10">
          <p className="text-sm font-semibold text-brand-primary mb-2 uppercase tracking-widest">
            Error
          </p>
          <h1 className="text-8xl sm:text-[10rem] font-black text-white tracking-tighter leading-none relative">
            4
            <span className="text-brand-primary/80 transition-all hover:scale-110 inline-block">
              0
            </span>
            4
          </h1>
        </div>

        {/* Body Section: Customer Message */}
        <div className="p-8 sm:p-10 text-center">
          <p className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight text-white">
            Oops! This Screen is Blank.
          </p>

          <p className="text-white/70 text-lg mb-10 max-w-sm mx-auto">
            The page you're looking for seems to have been removed from the
            playlist or never existed. Don't worry, the show must go on!
          </p>

          {/* Call to Action Button */}
          <Link
            to="/"
            className="inline-flex items-center justify-center px-10 py-3 bg-brand-primary rounded-full font-bold text-black shadow-xl shadow-brand-primary/40 hover:bg-sky-500 transition duration-300 hover:scale-[1.03] space-x-2"
          >
            {/* SVG Arrow icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span>Back to Main Library</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;

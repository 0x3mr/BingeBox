import { useState, useRef, useEffect } from "react";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const languages = ["English", "Arabic", "French", "Spanish"];
  const dropdownRef = useRef(null);

  // Robustly close dropdown if clicked outside
  useEffect(() => {
    // Only run the effect and attach the listener when the menu is open
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown container
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Use a setTimeout to attach the listener. This ensures the listener is
    // registered *after* the current click event (the one that set isOpen=true)
    // has finished propagating, preventing the dropdown from instantly closing.
    const timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);

    // Cleanup function to remove the listener and clear the timeout
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]); // Re-run effect when 'isOpen' changes

  return (
    <div className="relative" ref={dropdownRef}>
      <h3 className="text-lg font-semibold mb-4 text-white">View Website In</h3>

      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-3 border border-white/30 rounded-xl px-3 py-2 w-fit cursor-pointer hover:bg-white/10 transition backdrop-blur-md bg-white/5"
        role="combobox"
        aria-expanded={isOpen}
        aria-controls="language-menu"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 7l5 5 5-5"
            stroke="white"
            strokeOpacity="0.8"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
        <span>{language}</span>
      </button>

      {isOpen && (
        <div
          id="language-menu"
          className="absolute left-0 mt-2 w-44 bg-brand-surface/70 backdrop-blur-md border border-brand-border/50 rounded-lg shadow-lg z-40"
          role="menu"
          tabIndex="-1"
        >
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-3 text-white/80 hover:text-brand-primary hover:cursor-pointer hover:bg-brand-border/40 transition"
              role="menuitem"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;

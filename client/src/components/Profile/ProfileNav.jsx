import { Link } from "react-router-dom";

function ProfileNav() {
  const navItems = [
    { icon: "icon-3", label: "Continue Watching", to: null },
    { icon: "icon-2", label: "My Watchlist", to: null },
    { icon: "icon-6", label: "Watch History", to: null },
    { icon: "icon-10", label: "Account Settings", to: "/settings" },
  ];

  const NavButton = ({ item, isLink = false }) => {
    const content = (
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 flex items-center justify-center">
            <img
              className="w-full h-full transition-all duration-200"
              alt={item.label}
              src={`https://c.animaapp.com/mhj4bhqeU8XhYM/img/${item.icon}.svg`}
              style={{
                filter: "brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(186deg) brightness(118%) contrast(119%)",
              }}
            />
          </div>
          <span className="font-semibold text-sm">{item.label}</span>
        </div>
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );

    const baseClasses =
      "group flex items-center px-4 py-3 w-full text-left rounded-lg border transition-all duration-200 text-white/80 border-transparent hover:bg-white/10 hover:text-brand-primary hover:border-brand-primary/30";

    if (isLink && item.to) {
      return (
        <Link key={item.label} to={item.to} className={baseClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button key={item.label} className={baseClasses}>
        {content}
      </button>
    );
  };

  return (
    <aside className="lg:col-span-1">
      <div className="bg-brand-surface border border-brand-border rounded-xl p-6 sticky top-32">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavButton key={item.label} item={item} isLink={!!item.to} />
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default ProfileNav;

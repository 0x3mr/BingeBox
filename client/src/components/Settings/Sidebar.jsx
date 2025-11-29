export default function Sidebar() {
  return (
    <aside className="lg:col-span-1">
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 sticky top-32">
        <nav className="space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 bg-brand-primary/20 text-brand-primary rounded-lg border border-brand-primary/50"
          >
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="font-semibold">Profile</span>
          </a>

          {["Security", "Billing", "Notifications", "Preferences"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="flex items-center gap-3 px-4 py-3 text-white/80 hover:bg-white/10 hover:text-brand-primary rounded-lg transition"
              >
                <span>{item}</span>
              </a>
            ),
          )}
        </nav>
      </div>
    </aside>
  );
}

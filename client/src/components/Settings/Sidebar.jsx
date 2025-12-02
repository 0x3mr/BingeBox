export default function Sidebar({ activeSection, setActiveSection }) {
  const sections = [
    "Profile",
    "Security",
    "Billing",
    "Notifications",
    "Preferences",
  ];

  return (
    <aside className="lg:col-span-1">
      <div className="bg-white/5 border border-white/10 rounded-xl p-6 sticky top-32">
        <nav className="space-y-2">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`flex items-center gap-3 px-4 py-3 w-full text-left rounded-lg border transition
                ${
                  activeSection === section
                    ? "bg-brand-primary/20 text-brand-primary border-brand-primary/50"
                    : "text-white/80 border-transparent hover:bg-white/10 hover:text-brand-primary"
                }`}
            >
              <span className="font-semibold">{section}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}

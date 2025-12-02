const appLinks = [
  {
    name: "App Store",
    href: "#",
    src: "https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_(iOS).svg",
    width: "50", // just a number
  },
  {
    name: "Google Play",
    href: "#",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg",
    width: "150",
  },
];

const DownloadAppLinks = () => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-white">Download Our App</h3>
    <div className="flex flex-col gap-3">
      {appLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          aria-label={`Download on ${link.name}`}
          className="hover:opacity-90 transition"
        >
          <img
            src={link.src}
            alt={link.name}
            style={{ width: `${link.width}px` }}
          />
        </a>
      ))}
    </div>
  </div>
);

export default DownloadAppLinks;

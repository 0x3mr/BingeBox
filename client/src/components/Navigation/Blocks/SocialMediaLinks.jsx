const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    src: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
  },
  {
    name: "Twitter",
    href: "#",
    src: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  },
  {
    name: "YouTube",
    href: "#",
    src: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
  },
];

const SocialMediaLinks = () => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-white">Social Media</h3>
    <div className="flex gap-5">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          aria-label={`Visit our ${link.name} page`}
          className="hover:opacity-80 transition"
        >
          <img src={link.src} width="22" alt={link.name} />
        </a>
      ))}
    </div>
  </div>
);

export default SocialMediaLinks;

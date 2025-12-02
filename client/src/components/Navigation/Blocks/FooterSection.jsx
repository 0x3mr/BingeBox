const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-white">{title}</h3>
    {links.map((link) => (
      <a
        key={link.text}
        href={link.href}
        className="block text-white/70 hover:text-white mb-2"
      >
        {link.text}
      </a>
    ))}
  </div>
);

export default FooterSection;

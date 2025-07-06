export default function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-sm">© 2025 Be Group</p>
      </div>
    </footer>
  );
}

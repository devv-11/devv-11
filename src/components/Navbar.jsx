import { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { navLinks } from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive("#" + sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-bg/90 backdrop-blur-md border-b border-dark-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a
          href="#home"
          className="flex items-center gap-2 text-neon font-mono font-bold text-lg tracking-wider"
        >
          <Terminal size={20} />
          <span className="text-glow">{"<DevAnand />"}</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`px-4 py-2 text-sm font-mono rounded transition-all duration-200 ${
                active === link.href
                  ? "text-neon bg-neon/10 text-glow"
                  : "text-gray-400 hover:text-neon"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-neon p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-md border-b border-dark-border">
          <div className="flex flex-col px-6 py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setMobileOpen(false);
                }}
                className={`py-3 px-4 font-mono text-sm rounded transition-all ${
                  active === link.href
                    ? "text-neon bg-neon/10"
                    : "text-gray-400 hover:text-neon"
                }`}
              >
                <span className="text-neon/50 mr-2">$</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

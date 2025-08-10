import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { MapPin, History, Compass, Github } from "lucide-react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClasses = ({ isActive }) =>
    [
      "px-3 py-2 rounded-lg transition font-medium",
      isActive
        ? "text-gulf-700 bg-gulf-50"
        : "text-neutral-700 hover:text-neutral-900 hover:bg-sand-100",
    ].join(" ");

  return (
    <header
      className={`sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-black/5 ${
        isSticky ? "is-sticky" : ""
      }`}
    >
      <a href="#main" className="skip-link">Skip to content</a>

      <div className="container-page flex items-center justify-between h-16">
    
        <div className="flex items-center gap-2">
          <MapPin className="w-6 h-6 text-gulf-600" aria-hidden="true" />
          <Link to="/" className="text-lg sm:text-xl font-semibold tracking-tight">
            {import.meta.env.VITE_APP_NAME || "Kuwait TimeMap"}
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/timeline" className={navLinkClasses}>
            <span className="inline-flex items-center gap-2">
              <History className="w-4 h-4" />
              Timeline
            </span>
          </NavLink>
          <NavLink to="/explore" className={navLinkClasses}>
            <span className="inline-flex items-center gap-2">
              <Compass className="w-4 h-4" />
              Explore
            </span>
          </NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/createdbyamir/kuwait-timemap"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline hidden sm:inline-flex"
            aria-label="View on GitHub"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>

      <div className="md:hidden border-t border-black/5">
        <div className="container-page py-2 flex gap-2">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/timeline" className={navLinkClasses}>
            Timeline
          </NavLink>
          <NavLink to="/explore" className={navLinkClasses}>
            Explore
          </NavLink>
        </div>
      </div>
    </header>
  );
}

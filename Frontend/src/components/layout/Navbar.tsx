import { useEffect, useState } from "react";
import { Home, Menu, X } from "lucide-react";
import { C } from "../../constants/theme";
import { NAV_LINKS, type NavLink } from "../../constants/navigation";

interface NavbarProps {
  active: NavLink;
  onNavigate: (link: NavLink) => void;
}

export function Navbar({ active, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link: NavLink) => {
    onNavigate(link);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        backdropFilter: scrolled ? "blur(24px)" : "blur(8px)",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(8px)",
        background: scrolled ? "rgba(11,16,32,0.88)" : "rgba(11,16,32,0.4)",
        borderBottom: scrolled ? `1px solid ${C.glassBorder}` : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", flexShrink: 0 }} onClick={() => handleNav("Home")}>
          <div
            style={{
              width: 36, height: 36, borderRadius: 10,
              background: `linear-gradient(135deg,${C.cyan},${C.purple})`,
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 20px rgba(0,229,255,0.4)", flexShrink: 0,
            }}
          >
            <Home size={18} color="#0B1020" />
          </div>
          <span style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: "1.05rem", color: C.text }}>
            House<span style={{ color: C.cyan }}>AI</span>
          </span>
        </div>

        <div className="hide-mobile" style={{ gap: "1.5rem", alignItems: "center" }}>
          {NAV_LINKS.map((link) => (
            <span key={link} className="nav-link" onClick={() => handleNav(link)} style={{ color: active === link ? C.cyan : C.muted }}>
              {link}
            </span>
          ))}
        </div>

        <button className="neon-btn hide-mobile" style={{ padding: "0.5rem 1.4rem", fontSize: "0.875rem" }} onClick={() => handleNav("Prediction")}>
          Get Started
        </button>

        <button
          className="hide-desktop"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          type="button"
          style={{
            background: "rgba(255,255,255,0.06)", border: `1px solid ${C.glassBorder}`,
            borderRadius: 10, padding: "0.5rem", cursor: "pointer",
            color: C.text, alignItems: "center", justifyContent: "center",
            minWidth: 44, minHeight: 44,
          }}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="slide-down"
          style={{
            background: "rgba(11,16,32,0.96)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            borderTop: `1px solid ${C.glassBorder}`,
            padding: "0.75rem 1rem 1rem",
          }}
        >
          {NAV_LINKS.map((link) => (
            <div key={link} className="mobile-nav-link" style={{ color: active === link ? C.cyan : C.muted }} onClick={() => handleNav(link)}>
              {link}
            </div>
          ))}
          <div style={{ padding: "0.5rem 0.5rem 0" }}>
            <button className="neon-btn" style={{ width: "100%", padding: "0.75rem", fontSize: "0.95rem" }} type="button" onClick={() => handleNav("Prediction")}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

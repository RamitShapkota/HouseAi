import { Github, FileText, Mail, Linkedin } from "lucide-react";
import { C } from "../../constants/theme";

const SOCIAL_LINKS = [
  { icon: Github, label: "GitHub" },
  { icon: FileText, label: "Docs" },
  { icon: Mail, label: "Contact" },
  { icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 1rem",
        background: "rgba(18,26,47,0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderTop: `1px solid ${C.glassBorder}`,
      }}
    >
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: "1.5rem", alignItems: "center", textAlign: "center" }}>
        <div>
          <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: "1.15rem", color: C.text }}>
            House<span style={{ color: C.cyan }}>AI</span>
          </div>
          <div style={{ color: C.muted, fontSize: "0.82rem", marginTop: 3 }}>AI-powered property valuation engine</div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1.5rem" }}>
          {SOCIAL_LINKS.map(({ icon: Icon, label }) => (
            <div
              key={label}
              style={{ display: "flex", alignItems: "center", gap: 6, color: C.muted, cursor: "pointer", transition: "color 0.3s", minHeight: 44 }}
              onMouseEnter={(e) => (e.currentTarget.style.color = C.cyan)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              <Icon size={15} />
              <span style={{ fontSize: "0.82rem" }}>{label}</span>
            </div>
          ))}
        </div>

        <div style={{ color: C.muted, fontSize: "0.75rem" }}>© 2024 HouseAI. Built with Machine Learning.</div>
      </div>
    </footer>
  );
}

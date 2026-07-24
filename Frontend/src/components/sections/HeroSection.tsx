import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { C } from "../../constants/theme";
import { StatCard } from "../common/StatCard";

function House3D() {
  return (
    <div className="house-wrap float-slow" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
          width: "70%", height: 50, borderRadius: "50%",
          background: "radial-gradient(ellipse,rgba(0,229,255,0.3) 0%,transparent 70%)",
          filter: "blur(15px)",
        }}
      />
      <svg
        viewBox="0 0 260 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", height: "auto", filter: "drop-shadow(0 0 30px rgba(0,229,255,0.4))" }}
      >
        <polygon points="130,20 240,110 20,110" fill="url(#roofGrad)" stroke={C.cyan} strokeWidth="1.5" />
        <rect x="40" y="108" width="180" height="120" rx="4" fill="url(#bodyGrad)" stroke={C.purple} strokeWidth="1.5" />
        <rect x="108" y="158" width="44" height="70" rx="6" fill="rgba(0,229,255,0.15)" stroke={C.cyan} strokeWidth="1.5" />
        <circle cx="148" cy="193" r="3" fill={C.cyan} />
        <rect x="55" y="128" width="40" height="34" rx="4" fill="rgba(123,97,255,0.2)" stroke={C.purple} strokeWidth="1" />
        <rect x="165" y="128" width="40" height="34" rx="4" fill="rgba(123,97,255,0.2)" stroke={C.purple} strokeWidth="1" />
        <line x1="75" y1="128" x2="75" y2="162" stroke={C.purple} strokeWidth="0.8" />
        <line x1="55" y1="145" x2="95" y2="145" stroke={C.purple} strokeWidth="0.8" />
        <line x1="185" y1="128" x2="185" y2="162" stroke={C.purple} strokeWidth="0.8" />
        <line x1="165" y1="145" x2="205" y2="145" stroke={C.purple} strokeWidth="0.8" />
        <path d="M40 108 L20 90 M220 108 L240 90" stroke={C.cyan} strokeWidth="0.8" strokeDasharray="3,3" opacity="0.6" />
        <circle cx="20" cy="90" r="3" fill={C.cyan} opacity="0.6" />
        <circle cx="240" cy="90" r="3" fill={C.cyan} opacity="0.6" />
        <rect x="170" y="50" width="22" height="38" rx="3" fill="url(#chimneyGrad)" stroke={C.cyan} strokeWidth="1" />
        <defs>
          <linearGradient id="roofGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={C.cyan} stopOpacity="0.6" />
            <stop offset="100%" stopColor={C.purple} stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(18,26,47,0.9)" />
            <stop offset="100%" stopColor="rgba(11,16,32,0.95)" />
          </linearGradient>
          <linearGradient id="chimneyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={C.cyan} stopOpacity="0.4" />
            <stop offset="100%" stopColor={C.purple} stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>
      <div
        className="float-anim"
        style={{
          position: "absolute", top: 10, right: -10,
          background: "linear-gradient(135deg,rgba(0,229,255,0.2),rgba(123,97,255,0.2))",
          border: `1px solid ${C.cyan}50`, borderRadius: 12, padding: "5px 12px",
          backdropFilter: "blur(10px)", boxShadow: "0 0 20px rgba(0,229,255,0.2)",
          animationDelay: "1s",
        }}
      >
        <div style={{ fontSize: "0.65rem", color: C.muted }}>Est. Value</div>
        <div style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, color: C.cyan, fontSize: "0.85rem" }}>$487K</div>
      </div>
      <div
        className="float-anim pulse-glow"
        style={{
          position: "absolute", bottom: 30, left: -10,
          background: "rgba(138,46,255,0.2)", border: `1px solid ${C.accent}50`,
          borderRadius: 10, padding: "5px 10px", backdropFilter: "blur(10px)", animationDelay: "0.5s",
        }}
      >
        <div style={{ fontSize: "0.65rem", color: C.purple, fontWeight: 600 }}>⚡ AI Ready</div>
      </div>
    </div>
  );
}

interface HeroSectionProps {
  onPredict: () => void;
}

export function HeroSection({ onPredict }: HeroSectionProps) {
  return (
    <section className="section-pad" style={{ paddingTop: "calc(68px + 3rem)", paddingBottom: "3rem" }}>
      <div className="container">
        <div className="hero-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} style={{ textAlign: "left" }}>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px",
                background: "rgba(0,229,255,0.1)", border: `1px solid ${C.cyan}40`,
                borderRadius: 100, marginBottom: "1.2rem",
                boxShadow: "0 0 20px rgba(0,229,255,0.1)",
              }}
            >
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: C.cyan, flexShrink: 0 }} className="pulse-glow" />
              <span style={{ fontSize: "clamp(0.7rem,2.5vw,0.8rem)", color: C.cyan, fontWeight: 500 }}>AI-Powered Prediction Engine</span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 6vw, 3.8rem)", fontWeight: 800, lineHeight: 1.1, color: C.text, marginBottom: "1rem" }}>
              AI House Price
              <br />
              <span className="shimmer-text">Prediction</span>
            </h1>

            <p style={{ fontSize: "clamp(0.9rem,2.5vw,1.05rem)", color: C.muted, lineHeight: 1.8, marginBottom: "2rem", maxWidth: 480 }}>
              Predict the market value of your property instantly using Machine Learning and AI with 97.3% accuracy.
            </p>

            <div className="hero-btns">
              <button
                className="neon-btn"
                style={{ padding: "0.85rem 1.6rem", fontSize: "clamp(0.875rem,2.5vw,1rem)", display: "flex", alignItems: "center", gap: 8 }}
                onClick={onPredict}
              >
                Predict Price <ArrowRight size={16} />
              </button>
              <button className="neon-btn-outline" style={{ padding: "0.85rem 1.6rem", fontSize: "clamp(0.875rem,2.5vw,1rem)" }}>
                Learn More
              </button>
            </div>

            <div className="stat-row">
              <StatCard value="97.3%" label="Accuracy" color={C.cyan} />
              <StatCard value="2.4s" label="Fast Prediction" color={C.purple} />
              <StatCard value="50K+" label="Properties" color={C.success} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <House3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

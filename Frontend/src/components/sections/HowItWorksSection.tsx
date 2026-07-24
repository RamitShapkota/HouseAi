import { motion } from "motion/react";
import { C } from "../../constants/theme";
import { STEPS } from "../../constants/steps";
import { GlassCard } from "../common/GlassCard";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export function HowItWorksSection() {
  const isMd = useMediaQuery("(min-width: 768px)");

  return (
    <section className="section-pad">
      <div className="container" style={{ maxWidth: 860 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <span style={{ color: C.purple, fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Process</span>
          <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 800, color: C.text, marginTop: "0.5rem" }}>
            How It <span className="shimmer-text">Works</span>
          </h2>
        </motion.div>

        <div style={{ position: "relative" }}>
          {isMd ? (
            <div
              style={{
                position: "absolute", left: "50%", top: 0, bottom: 0, width: 2,
                background: `linear-gradient(to bottom,${C.cyan},${C.purple},${C.accent})`,
                transform: "translateX(-50%)",
                boxShadow: `0 0 10px ${C.cyan}60`, borderRadius: 2,
              }}
            />
          ) : (
            <div
              style={{
                position: "absolute", left: 20, top: 0, bottom: 0, width: 2,
                background: `linear-gradient(to bottom,${C.cyan},${C.purple},${C.accent})`,
                boxShadow: `0 0 10px ${C.cyan}60`, borderRadius: 2,
              }}
            />
          )}

          {STEPS.map((s, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, x: isMd ? (isLeft ? -30 : 30) : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: "flex",
                  justifyContent: isMd ? (isLeft ? "flex-start" : "flex-end") : "flex-end",
                  marginBottom: "1.5rem", position: "relative",
                  paddingLeft: isMd ? 0 : 44,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: isMd ? "50%" : 12,
                    top: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 16, height: 16, borderRadius: "50%",
                    background: `linear-gradient(135deg,${C.cyan},${C.purple})`,
                    boxShadow: `0 0 12px ${C.cyan}80`, zIndex: 2,
                  }}
                />

                <GlassCard style={{ width: isMd ? "44%" : "100%", padding: "1.2rem 1.4rem", boxShadow: `0 0 20px ${C.cyan}0A` }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                        background: `linear-gradient(135deg,${C.cyan}20,${C.purple}20)`,
                        border: `1px solid ${C.cyan}30`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      <s.icon size={16} color={C.cyan} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.65rem", color: C.cyan, fontWeight: 700, letterSpacing: "0.1em" }}>{s.n}</div>
                      <div style={{ fontWeight: 700, color: C.text, fontSize: "0.9rem" }}>{s.label}</div>
                    </div>
                  </div>
                  <p style={{ color: C.muted, fontSize: "0.82rem", marginTop: "0.7rem", lineHeight: 1.6 }}>{s.desc}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

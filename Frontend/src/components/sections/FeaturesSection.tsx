import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { C } from "../../constants/theme";
import { FEATURES } from "../../constants/features";
import { GlassCard } from "../common/GlassCard";
import { NeonIcon } from "../common/NeonIcon";

export function FeaturesSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3rem" }}
        >
          <span style={{ color: C.cyan, fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Capabilities</span>
          <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 800, color: C.text, marginTop: "0.5rem" }}>
            Why Choose <span className="shimmer-text">HouseAI</span>
          </h2>
          <p style={{ color: C.muted, marginTop: "0.75rem", maxWidth: 540, margin: "0.75rem auto 0", fontSize: "clamp(0.875rem,2.5vw,1rem)" }}>
            Enterprise-grade prediction technology wrapped in a beautiful, intuitive interface.
          </p>
        </motion.div>

        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="card-hover" style={{ padding: "1.6rem", boxShadow: `0 0 30px ${f.color}08,inset 0 1px 0 rgba(255,255,255,0.06)`, height: "100%" }}>
                <NeonIcon icon={f.icon} color={f.color} />
                <h3 style={{ color: C.text, fontWeight: 700, marginTop: "1rem", marginBottom: "0.5rem", fontSize: "1rem" }}>{f.title}</h3>
                <p style={{ color: C.muted, fontSize: "0.875rem", lineHeight: 1.7 }}>{f.desc}</p>
                <div style={{ marginTop: "1.2rem", display: "flex", alignItems: "center", gap: 6, color: f.color, fontSize: "0.82rem", fontWeight: 600 }}>
                  Explore <ArrowRight size={13} />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

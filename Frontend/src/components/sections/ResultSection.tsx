import { motion } from "motion/react";
import { CheckCircle, Star } from "lucide-react";
import { C } from "../../constants/theme";
import type { PredictionResult } from "../../types/prediction";
import { GlassCard } from "../common/GlassCard";
import { useCountUp } from "../../hooks/useCountUp";

interface ResultSectionProps {
  result: PredictionResult;
  onReset: () => void;
}

function AnimatedPrice({ target }: { target: number }) {
  const current = useCountUp(target);
  return <>{current.toLocaleString()}</>;
}

export function ResultSection({ result, onReset }: ResultSectionProps) {
  const stats = [
    { label: "Confidence Score", value: `${result.confidence}%`, color: C.cyan },
    { label: "Price Range", value: `$${(result.low / 1000).toFixed(0)}K–$${(result.high / 1000).toFixed(0)}K`, color: C.purple },
    { label: "Market Trend", value: result.trend, color: C.warning },
  ];

  return (
    <section className="section-pad">
      <div className="container" style={{ maxWidth: 860 }}>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, type: "spring" }}>
          <GlassCard
            style={{
              padding: "clamp(1.5rem,5vw,3rem)",
              boxShadow: "0 0 80px rgba(0,245,160,0.12),0 0 0 1px rgba(0,245,160,0.2),inset 0 1px 0 rgba(255,255,255,0.08)",
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.2rem" }}>
              <div
                className="pulse-glow"
                style={{
                  width: 60, height: 60, borderRadius: "50%",
                  background: `${C.success}20`, border: `2px solid ${C.success}60`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: `0 0 30px ${C.success}40`,
                }}
              >
                <CheckCircle size={26} color={C.success} />
              </div>
            </div>

            <div style={{ color: C.muted, fontSize: "0.875rem", marginBottom: "0.4rem" }}>Predicted House Price</div>
            <div style={{ fontFamily: "'Space Grotesk'", fontSize: "clamp(2rem,8vw,4.5rem)", fontWeight: 800, color: C.success }}>
              $<AnimatedPrice target={result.price} />
            </div>

            <div className="result-grid" style={{ marginTop: "2rem" }}>
              {stats.map((item) => (
                <div key={item.label} className="glass-card" style={{ padding: "1rem", borderColor: `${item.color}30`, boxShadow: `0 0 20px ${item.color}10` }}>
                  <div style={{ color: C.muted, fontSize: "0.72rem", marginBottom: "0.35rem" }}>{item.label}</div>
                  <div style={{ color: item.color, fontWeight: 700, fontSize: "clamp(0.85rem,3vw,1rem)", fontFamily: "'Space Grotesk'" }}>{item.value}</div>
                </div>
              ))}
            </div>

            <div className="glass-card" style={{ marginTop: "1.2rem", padding: "1rem 1.2rem", textAlign: "left", borderColor: `${C.cyan}20`, display: "flex", alignItems: "flex-start", gap: 10 }}>
              <Star size={18} color={C.warning} style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ color: C.text, fontWeight: 600, fontSize: "0.875rem" }}>Recommendation</div>
                <div style={{ color: C.muted, fontSize: "0.82rem", marginTop: 2, lineHeight: 1.6 }}>
                  {result.trend === "Rising Market"
                    ? "Strong investment opportunity — market demand is increasing in this area. Consider acting quickly."
                    : "Property value is stable with moderate appreciation expected. Good long-term investment."}
                </div>
              </div>
            </div>

            <button className="neon-btn-outline" type="button" onClick={onReset} style={{ marginTop: "1.8rem", padding: "0.7rem 1.8rem", fontSize: "0.875rem" }}>
              ← New Prediction
            </button>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "motion/react";
import { BarChart3, TrendingUp, Activity, Target } from "lucide-react";
import { C } from "../../constants/theme";
import { ACCURACY_DONUT_DATA } from "../../constants/chartData";
import { GlassCard } from "../common/GlassCard";
import { HBarChart, TrendLineChart, VBarChart, AccuracyDonutChart } from "./AnalyticsCharts";

export function AnalyticsSection() {
  return (
    <section className="section-pad">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
        >
          <span style={{ color: C.accent, fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Dashboard</span>
          <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 800, color: C.text, marginTop: "0.5rem" }}>
            Market <span className="shimmer-text">Analytics</span>
          </h2>
        </motion.div>

        <div className="two-col-grid">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <GlassCard style={{ padding: "1.5rem" }}>
              <h3 style={{ color: C.text, fontWeight: 700, marginBottom: "1.2rem", fontSize: "0.9rem" }}>
                <BarChart3 size={14} style={{ display: "inline", marginRight: 7 }} color={C.cyan} />
                Feature Importance
              </h3>
              <HBarChart />
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <GlassCard style={{ padding: "1.5rem" }}>
              <h3 style={{ color: C.text, fontWeight: 700, marginBottom: "0.8rem", fontSize: "0.9rem" }}>
                <TrendingUp size={14} style={{ display: "inline", marginRight: 7 }} color={C.success} />
                Price Trend (12 Months)
              </h3>
              <TrendLineChart />
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <GlassCard style={{ padding: "1.5rem" }}>
              <h3 style={{ color: C.text, fontWeight: 700, marginBottom: "0.8rem", fontSize: "0.9rem" }}>
                <Activity size={14} style={{ display: "inline", marginRight: 7 }} color={C.purple} />
                Price Distribution
              </h3>
              <VBarChart />
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <GlassCard style={{ padding: "1.5rem" }}>
              <h3 style={{ color: C.text, fontWeight: 700, marginBottom: "1rem", fontSize: "0.9rem" }}>
                <Target size={14} style={{ display: "inline", marginRight: 7 }} color={C.warning} />
                Prediction Accuracy
              </h3>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <div style={{ flex: "0 0 auto", width: "min(50%,160px)" }}>
                  <AccuracyDonutChart />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", flex: 1, minWidth: 0 }}>
                  {ACCURACY_DONUT_DATA.map((item) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                      <div style={{ width: 9, height: 9, borderRadius: 3, background: item.color, flexShrink: 0, boxShadow: `0 0 6px ${item.color}` }} />
                      <span style={{ color: C.muted, fontSize: "0.8rem", flex: 1, minWidth: 0 }}>{item.label}</span>
                      <span style={{ color: C.text, fontWeight: 700, fontSize: "0.8rem" }}>{item.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

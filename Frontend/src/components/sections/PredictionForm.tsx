import { useState } from "react";
import { motion } from "motion/react";
import { AlertCircle, Brain } from "lucide-react";
import { C } from "../../constants/theme";
import { DEFAULT_FORM, FORM_FIELDS } from "../../constants/formFields";
import { predictHousePrice } from "../../services/prediction.service";
import type { PredictionResult, PropertyFormData } from "../../types/prediction";
import { GlassCard } from "../common/GlassCard";

interface PredictionFormProps {
  onResult: (result: PredictionResult) => void;
}

export function PredictionForm({ onResult }: PredictionFormProps) {
  const [form, setForm] = useState<PropertyFormData>(DEFAULT_FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    setLoading(true);
    try {
      const result = await predictHousePrice(form);
      onResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-pad">
      <div className="container" style={{ maxWidth: 860 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "2.5rem" }}
        >
          <span style={{ color: C.success, fontWeight: 600, fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>Prediction Engine</span>
          <h2 style={{ fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 800, color: C.text, marginTop: "0.5rem" }}>
            Predict Your <span className="shimmer-text">Property Value</span>
          </h2>
          <p style={{ color: C.muted, marginTop: "0.75rem", fontSize: "clamp(0.875rem,2.5vw,1rem)" }}>Fill in your property details for an instant AI-powered valuation.</p>
        </motion.div>

        <GlassCard
          style={{
            padding: "clamp(1.2rem, 4vw, 2.5rem)",
            boxShadow: "0 0 60px rgba(0,229,255,0.08),0 0 0 1px rgba(0,229,255,0.1),inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          <div className="form-grid">
            {FORM_FIELDS.map((field) => (
              <div key={field.key}>
                <label style={{ display: "block", color: C.muted, fontSize: "0.78rem", fontWeight: 600, marginBottom: "0.45rem", letterSpacing: "0.05em" }}>
                  <field.icon size={11} style={{ display: "inline", marginRight: 5, verticalAlign: "middle" }} />
                  {field.label}
                </label>
                <input
                  className="glass-input"
                  type="number"
                  placeholder={field.placeholder}
                  value={form[field.key]}
                  onChange={(e) => setForm((p) => ({ ...p, [field.key]: e.target.value }))}
                  style={{ padding: "0.8rem 1rem", fontSize: "0.9rem" }}
                />
              </div>
            ))}
          </div>

          {error && (
            <div
              className="glass-card"
              style={{
                marginTop: "1.2rem", padding: "0.85rem 1rem", display: "flex",
                alignItems: "flex-start", gap: 9, borderColor: `${C.error}40`,
                background: "rgba(255,93,115,0.08)",
              }}
            >
              <AlertCircle size={17} color={C.error} style={{ flexShrink: 0, marginTop: 1 }} />
              <span style={{ color: C.error, fontSize: "0.82rem", lineHeight: 1.5 }}>{error}</span>
            </div>
          )}

          <button
            className="neon-btn gradient-animated"
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%", marginTop: "1.8rem", padding: "1rem",
              fontSize: "clamp(0.9rem,3vw,1.05rem)", fontWeight: 700,
              background: loading ? "rgba(0,229,255,0.3)" : `linear-gradient(135deg,${C.cyan},${C.purple},${C.accent},${C.cyan})`,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            }}
          >
            {loading ? (
              <>
                <div className="spin-slow" style={{ width: 20, height: 20, border: "3px solid rgba(11,16,32,0.3)", borderTopColor: "#0B1020", borderRadius: "50%", flexShrink: 0 }} />
                Analyzing Property...
              </>
            ) : (
              <>
                <Brain size={18} />
                Predict House Price
              </>
            )}
          </button>
        </GlassCard>
      </div>
    </section>
  );
}

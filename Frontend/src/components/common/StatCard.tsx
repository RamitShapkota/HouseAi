import { C } from "../../constants/theme";

interface StatCardProps {
  value: string;
  label: string;
  color: string;
}

export function StatCard({ value, label, color }: StatCardProps) {
  return (
    <div
      className="glass-card"
      style={{
        padding: "0.85rem 1.2rem",
        borderColor: `${color}30`,
        boxShadow: `0 0 20px ${color}15,inset 0 1px 0 rgba(255,255,255,0.08)`,
        minWidth: 110, flex: "0 0 auto",
      }}
    >
      <div style={{ fontSize: "clamp(1.1rem,3vw,1.5rem)", fontWeight: 700, color, fontFamily: "'Space Grotesk'" }}>{value}</div>
      <div style={{ fontSize: "0.75rem", color: C.muted, marginTop: 2 }}>{label}</div>
    </div>
  );
}

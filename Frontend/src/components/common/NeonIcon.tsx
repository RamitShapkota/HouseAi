import type { LucideIcon } from "lucide-react";
import { C } from "../../constants/theme";

interface NeonIconProps {
  icon: LucideIcon;
  color?: string;
  size?: number;
}

export function NeonIcon({ icon: Icon, color = C.cyan, size = 20 }: NeonIconProps) {
  return (
    <div
      style={{
        width: 48, height: 48, borderRadius: 14, flexShrink: 0,
        background: `${color}18`, border: `1px solid ${color}40`,
        display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: `0 0 15px ${color}30`,
      }}
    >
      <Icon size={size} color={color} />
    </div>
  );
}

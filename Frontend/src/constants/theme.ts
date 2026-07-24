/**
 * Central color palette for the HouseAI UI. Kept as plain hex/rgba strings
 * (rather than CSS custom properties) since that's how the original design
 * was authored — components read `C.cyan`, `C.muted`, etc. directly.
 */
export const C = {
  bg: "#0B1020",
  bg2: "#121A2F",
  cyan: "#00E5FF",
  purple: "#7B61FF",
  accent: "#8A2EFF",
  highlight: "#3AF7FF",
  success: "#00F5A0",
  warning: "#FFC857",
  error: "#FF5D73",
  text: "#FFFFFF",
  muted: "#B7C0D4",
  glass: "rgba(255,255,255,0.06)",
  glassBorder: "rgba(255,255,255,0.12)",
} as const;

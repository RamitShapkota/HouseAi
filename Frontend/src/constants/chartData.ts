import { C } from "./theme";

export const FEATURE_IMPORTANCE_DATA = [
  { label: "Sq Footage", pct: 95, color: C.cyan },
  { label: "Location", pct: 88, color: C.purple },
  { label: "Schools", pct: 76, color: C.cyan },
  { label: "Bedrooms", pct: 68, color: C.purple },
  { label: "Age", pct: 61, color: C.cyan },
  { label: "Bathrooms", pct: 54, color: C.purple },
  { label: "Garage", pct: 42, color: C.cyan },
  { label: "Lot Size", pct: 38, color: C.purple },
];

export const TREND_PRICES = [388, 402, 415, 398, 430, 448, 461, 455, 472, 489, 498, 511];
export const TREND_MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

export const PRICE_DISTRIBUTION_DATA = [
  { label: "<200K", h: 20 },
  { label: "200-300K", h: 45 },
  { label: "300-400K", h: 73 },
  { label: "400-500K", h: 99 },
  { label: "500-600K", h: 82 },
  { label: "600K+", h: 45 },
];

export const ACCURACY_DONUT_DATA = [
  { label: "Excellent", pct: 35, color: C.success },
  { label: "Good", pct: 40, color: C.cyan },
  { label: "Average", pct: 18, color: C.warning },
  { label: "Below Avg", pct: 7, color: C.error },
];

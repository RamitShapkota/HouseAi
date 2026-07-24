import { Brain, Target, Zap, BarChart3, Activity, Smartphone, type LucideIcon } from "lucide-react";
import { C } from "./theme";

export interface Feature {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
}

export const FEATURES: Feature[] = [
  { icon: Brain, title: "Machine Learning", desc: "Advanced ML models trained on 50,000+ real estate data points for pinpoint accuracy.", color: C.cyan },
  { icon: Target, title: "Accurate Valuation", desc: "Multi-factor analysis considers location, size, age, and 20+ other variables.", color: C.purple },
  { icon: Zap, title: "Instant Results", desc: "Get your property valuation in under 3 seconds with real-time processing.", color: C.warning },
  { icon: BarChart3, title: "Interactive Dashboard", desc: "Visual analytics with charts, trends, and market comparisons.", color: C.success },
  { icon: Activity, title: "Smart Analytics", desc: "Deep insights into price drivers and market dynamics for informed decisions.", color: C.accent },
  { icon: Smartphone, title: "Responsive Design", desc: "Seamless experience across desktop, tablet, and mobile devices.", color: C.highlight },
];

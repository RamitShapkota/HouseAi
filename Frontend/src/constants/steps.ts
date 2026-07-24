import { Layers, Shield, SquareCode, Brain, Zap, DollarSign, type LucideIcon } from "lucide-react";

export interface TimelineStep {
  n: string;
  label: string;
  desc: string;
  icon: LucideIcon;
}

export const STEPS: TimelineStep[] = [
  { n: "01", label: "Dataset", desc: "Raw real estate data from multiple verified sources", icon: Layers },
  { n: "02", label: "Data Cleaning", desc: "Remove outliers, handle missing values, normalize data", icon: Shield },
  { n: "03", label: "Preprocessing", desc: "Feature engineering and data transformation pipeline", icon: SquareCode },
  { n: "04", label: "ML Model", desc: "XGBoost & Neural Network ensemble for maximum accuracy", icon: Brain },
  { n: "05", label: "Prediction", desc: "Real-time inference with confidence scoring", icon: Zap },
  { n: "06", label: "Final Price", desc: "Accurate valuation with market trend analysis", icon: DollarSign },
];

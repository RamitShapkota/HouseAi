import type { PredictionRequest, PredictionResult } from "../types/prediction";

/**
 * Placeholder estimate used only while `USE_MOCK_PREDICTION` is on
 * (see lib/env.ts). This is NOT a real ML model — it's a simple weighted
 * formula that stands in for the backend response so the UI has something
 * realistic to render during development. Delete this once the real
 * /predict endpoint is live and VITE_USE_MOCK_API=false.
 */
export function mockPredictPrice(f: PredictionRequest): PredictionResult {
  const price =
    Math.round(
      (f.sqft * 180 +
        f.bedrooms * 12000 +
        f.bathrooms * 15000 +
        f.garage * 18000 +
        f.lotSize * 3 -
        f.age * 1800 +
        f.schoolRating * 9000 -
        f.distance * 2500) /
        1000,
    ) * 1000;

  const confidence = Math.round((Math.min(99, 88 + Math.random() * 9)) * 10) / 10;
  const safePrice = Math.max(80000, price);

  return {
    price: safePrice,
    confidence,
    low: Math.round((safePrice * 0.93) / 1000) * 1000,
    high: Math.round((safePrice * 1.07) / 1000) * 1000,
    trend: f.schoolRating > 7 && f.distance < 10 ? "Rising Market" : "Stable Market",
  };
}

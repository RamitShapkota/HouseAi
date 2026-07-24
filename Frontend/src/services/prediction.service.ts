import { apiRequest } from "./api";
import { USE_MOCK_PREDICTION } from "./env";
import { mockPredictPrice } from "./mockPrediction";
import type { PredictionRequest, PredictionResult, PropertyFormData } from "../types/prediction";

/** Simulated network latency for the mock path, so the loading UI still feels real. */
const MOCK_LATENCY_MS = 1400;

/**
 * Converts the raw string form values into the numeric payload the backend expects.
 * Falls back to sensible defaults for empty/invalid fields, matching the
 * placeholders shown in the form.
 */
export function toPredictionRequest(form: PropertyFormData): PredictionRequest {
  const num = (value: string, fallback: number) => {
    const parsed = parseFloat(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  };

  return {
    sqft: num(form.sqft, 1800),
    bedrooms: num(form.bedrooms, 3),
    bathrooms: num(form.bathrooms, 2),
    garage: num(form.garage, 1),
    lotSize: num(form.lotSize, 6000),
    age: num(form.age, 10),
    schoolRating: num(form.schoolRating, 7),
    distance: num(form.distance, 8),
  };
}

/**
 * Single entry point the UI calls to get a prediction.
 *
 * - Today (no backend yet): resolves with a local mock estimate.
 * - Once a backend exists: set VITE_API_BASE_URL and VITE_USE_MOCK_API=false
 *   in .env, and this function will POST to `${VITE_API_BASE_URL}/predict`
 *   and return whatever the backend responds with — no other code needs to change.
 *
 * Expected backend contract:
 *   POST /predict
 *   body: PredictionRequest  (see src/types/prediction.ts)
 *   200 response: PredictionResult  (see src/types/prediction.ts)
 */
export async function predictHousePrice(form: PropertyFormData): Promise<PredictionResult> {
  const payload = toPredictionRequest(form);

  if (USE_MOCK_PREDICTION) {
    await new Promise((resolve) => setTimeout(resolve, MOCK_LATENCY_MS));
    return mockPredictPrice(payload);
  }

  return apiRequest<PredictionResult>("/predict", {
    method: "POST",
    body: payload,
  });
}

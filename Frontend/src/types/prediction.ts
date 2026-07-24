/**
 * Shape of the values held by the prediction form's inputs.
 * Kept as strings because that's what <input type="number"> gives us;
 * conversion to numbers happens at the API boundary (see services/prediction.service.ts).
 */
export interface PropertyFormData {
  sqft: string;
  bedrooms: string;
  bathrooms: string;
  garage: string;
  lotSize: string;
  age: string;
  schoolRating: string;
  distance: string;
}

/**
 * The payload sent to the backend's /predict endpoint.
 * This is the contract the backend implementation should expect.
 */
export interface PredictionRequest {
  sqft: number;
  bedrooms: number;
  bathrooms: number;
  garage: number;
  lotSize: number;
  age: number;
  schoolRating: number;
  distance: number;
}

/**
 * The response shape expected back from the backend's /predict endpoint.
 * This is the contract the backend implementation should return.
 */
export interface PredictionResult {
  price: number;
  confidence: number;
  low: number;
  high: number;
  trend: "Rising Market" | "Stable Market";
}

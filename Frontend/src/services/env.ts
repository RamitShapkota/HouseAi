/**
 * Central place to read build-time environment variables (Vite exposes
 * anything prefixed with VITE_ via import.meta.env).
 *
 * Set these in a local `.env` file (see `.env.example`):
 *   VITE_API_BASE_URL=https://api.yourdomain.com
 *   VITE_USE_MOCK_API=false
 */

export const API_BASE_URL: string = import.meta.env.VITE_API_BASE_URL ?? "";

/**
 * When true (or when no API base URL is configured yet), the app falls back
 * to a local, client-side estimate instead of calling a real backend.
 * This lets the UI stay fully functional before the backend exists.
 * Flip VITE_USE_MOCK_API=false once a real API is available.
 */
export const USE_MOCK_PREDICTION: boolean =
  import.meta.env.VITE_USE_MOCK_API === "true" || !API_BASE_URL;

export const REQUEST_TIMEOUT_MS = 15000;

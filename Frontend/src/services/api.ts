import { API_BASE_URL, REQUEST_TIMEOUT_MS } from "./env";

export class ApiError extends Error {
  status?: number;
  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

interface RequestOptions {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  signal?: AbortSignal;
}

/**
 * Thin fetch wrapper shared by all API calls:
 * - prefixes requests with VITE_API_BASE_URL
 * - sets JSON headers
 * - times out slow requests
 * - normalizes errors into ApiError so callers can show a friendly message
 */
export async function apiRequest<TResponse>(
  path: string,
  { method = "GET", body, signal }: RequestOptions = {},
): Promise<TResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  // Let an external abort signal (e.g. component unmount) cancel too.
  signal?.addEventListener("abort", () => controller.abort());

  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body !== undefined ? JSON.stringify(body) : undefined,
      signal: controller.signal,
    });

    if (!response.ok) {
      const message = await response
        .json()
        .then((data) => data?.message ?? `Request failed with status ${response.status}`)
        .catch(() => `Request failed with status ${response.status}`);
      throw new ApiError(message, response.status);
    }

    if (response.status === 204) {
      return undefined as TResponse;
    }

    return (await response.json()) as TResponse;
  } catch (err) {
    if (err instanceof ApiError) throw err;
    if (err instanceof Error && err.name === "AbortError") {
      throw new ApiError("The request timed out. Please try again.");
    }
    throw new ApiError(
      err instanceof Error ? err.message : "Something went wrong. Please try again.",
    );
  } finally {
    clearTimeout(timeoutId);
  }
}

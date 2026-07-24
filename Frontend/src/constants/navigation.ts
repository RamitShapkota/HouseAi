export const NAV_LINKS = ["Home", "Features", "How It Works", "Prediction", "Analytics"] as const;

export type NavLink = (typeof NAV_LINKS)[number];

/** Maps each nav label to the DOM id of the section it should scroll to. */
export const NAV_SECTION_IDS: Record<NavLink, string> = {
  Home: "hero",
  Features: "features",
  "How It Works": "howitworks",
  Prediction: "prediction",
  Analytics: "analytics",
};

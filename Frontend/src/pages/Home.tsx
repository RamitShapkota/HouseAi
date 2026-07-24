import { useState } from "react";
import { C } from "../constants/theme";
import { NAV_SECTION_IDS, type NavLink } from "../constants/navigation";
import type { PredictionResult } from "../types/prediction";
import { Background } from "../components/layout/Background";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { FeaturesSection } from "../components/sections/FeaturesSection";
import { HowItWorksSection } from "../components/sections/HowItWorksSection";
import { PredictionForm } from "../components/sections/PredictionForm";
import { ResultSection } from "../components/sections/ResultSection";
import { AnalyticsSection } from "../components/sections/AnalyticsSection";

export function Home() {
  const [active, setActive] = useState<NavLink>("Home");
  const [result, setResult] = useState<PredictionResult | null>(null);

  const scrollToSection = (link: NavLink) => {
    setActive(link);
    const el = document.getElementById(NAV_SECTION_IDS[link]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: C.bg, minHeight: "100vh", color: C.text, position: "relative", overflowX: "hidden" }}>
      <Background />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar active={active} onNavigate={scrollToSection} />
        <main>
          <div id="hero">
            <HeroSection onPredict={() => scrollToSection("Prediction")} />
          </div>
          <div id="features">
            <FeaturesSection />
          </div>
          <div id="howitworks">
            <HowItWorksSection />
          </div>
          <div id="prediction">{result ? <ResultSection result={result} onReset={() => setResult(null)} /> : <PredictionForm onResult={setResult} />}</div>
          <div id="analytics">
            <AnalyticsSection />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

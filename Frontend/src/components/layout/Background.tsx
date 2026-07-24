import type { CSSProperties } from "react";
import { C } from "../../constants/theme";

const AURORA_BLOBS = [
  { x: "5%", y: "10%", w: 500, h: 500, color: "rgba(0,229,255,0.08)", delay: "0s", dur: 14 },
  { x: "60%", y: "5%", w: 600, h: 400, color: "rgba(123,97,255,0.09)", delay: "2s", dur: 16 },
  { x: "80%", y: "50%", w: 450, h: 450, color: "rgba(138,46,255,0.07)", delay: "4s", dur: 18 },
  { x: "10%", y: "60%", w: 400, h: 500, color: "rgba(0,229,255,0.06)", delay: "1s", dur: 15 },
  { x: "40%", y: "70%", w: 350, h: 350, color: "rgba(58,247,255,0.05)", delay: "3s", dur: 13 },
];

const PARTICLE_COUNT = 20;

/** Fixed, non-interactive backdrop: grid lines, aurora blobs, and drifting particles. */
export function Background() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute", inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.03) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {AURORA_BLOBS.map((b, i) => (
        <div
          key={i}
          style={{
            position: "absolute", left: b.x, top: b.y, width: b.w, height: b.h,
            background: `radial-gradient(ellipse,${b.color} 0%,transparent 70%)`,
            filter: "blur(40px)",
            animation: `aurora ${b.dur}s ease-in-out infinite`,
            animationDelay: b.delay,
          }}
        />
      ))}
      {Array.from({ length: PARTICLE_COUNT }).map((_, i) => {
        const dur = (8 + Math.random() * 12).toFixed(2);
        const delay = (Math.random() * 10).toFixed(2);
        const drift = ((Math.random() - 0.5) * 100).toFixed(0);
        const color = i % 2 === 0 ? C.cyan : C.purple;
        return (
          <div
            key={i}
            style={
              {
                position: "absolute", left: `${Math.random() * 100}%`, bottom: 0,
                width: 2, height: 2, borderRadius: "50%",
                background: color, opacity: 0,
                ["--drift" as string]: `${drift}px`,
                animation: `particle ${dur}s ${delay}s ease-in infinite`,
                boxShadow: `0 0 6px ${color}`,
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
}

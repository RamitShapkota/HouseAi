import { C } from "../../constants/theme";
import { FEATURE_IMPORTANCE_DATA, TREND_PRICES, TREND_MONTHS, PRICE_DISTRIBUTION_DATA, ACCURACY_DONUT_DATA } from "../../constants/chartData";

export function HBarChart() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {FEATURE_IMPORTANCE_DATA.map((d) => (
        <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 72, fontSize: "0.72rem", color: C.muted, textAlign: "right", flexShrink: 0 }}>{d.label}</div>
          <div style={{ flex: 1, height: 10, background: "rgba(255,255,255,0.06)", borderRadius: 6, overflow: "hidden" }}>
            <div
              style={{
                width: `${d.pct}%`, height: "100%", borderRadius: 6,
                background: `linear-gradient(90deg,${d.color}80,${d.color})`,
                boxShadow: `0 0 8px ${d.color}60`,
                transition: "width 1s ease",
              }}
            />
          </div>
          <div style={{ width: 28, fontSize: "0.7rem", color: d.color, fontWeight: 700, flexShrink: 0 }}>{d.pct}%</div>
        </div>
      ))}
    </div>
  );
}

export function TrendLineChart() {
  const W = 300, H = 140, pad = { t: 10, r: 10, b: 24, l: 42 };
  const iW = W - pad.l - pad.r, iH = H - pad.t - pad.b;
  const min = Math.min(...TREND_PRICES), max = Math.max(...TREND_PRICES);
  const pts = TREND_PRICES.map((v, i) => [
    pad.l + (i / (TREND_PRICES.length - 1)) * iW,
    pad.t + iH - ((v - min) / (max - min)) * iH,
  ]);
  const poly = pts.map((p) => p.join(",")).join(" ");
  const area = `M${pts[0][0]},${pts[0][1]} ` + pts.slice(1).map((p) => `L${p[0]},${p[1]}`).join(" ") + ` L${pts[pts.length - 1][0]},${pad.t + iH} L${pts[0][0]},${pad.t + iH} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", overflow: "visible" }}>
      <defs>
        <linearGradient id="lg-trend" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.cyan} stopOpacity={0.35} />
          <stop offset="100%" stopColor={C.cyan} stopOpacity={0} />
        </linearGradient>
      </defs>
      {[0, 25, 50, 75, 100].map((t) => {
        const y = pad.t + iH - (t / 100) * iH;
        return <line key={t} x1={pad.l} x2={pad.l + iW} y1={y} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth={1} />;
      })}
      {[0, 2, 4, 6, 8, 10, 11].map((i) => {
        const price = min + ((max - min) * i) / 11;
        const y = pad.t + iH - ((price - min) / (max - min)) * iH;
        return (
          <text key={i} x={pad.l - 4} y={y + 3} fontSize={7} fill={C.muted} textAnchor="end">
            ${Math.round(price / 1000)}K
          </text>
        );
      })}
      <path d={area} fill="url(#lg-trend)" />
      <polyline points={poly} fill="none" stroke={C.cyan} strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" style={{ filter: `drop-shadow(0 0 4px ${C.cyan})` }} />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={2.5} fill={C.cyan} style={{ filter: `drop-shadow(0 0 3px ${C.cyan})` }} />
      ))}
      {TREND_MONTHS.map((m, i) => {
        const x = pad.l + (i / (TREND_PRICES.length - 1)) * iW;
        return (
          <text key={i} x={x} y={H - 4} fontSize={7} fill={C.muted} textAnchor="middle">
            {m}
          </text>
        );
      })}
    </svg>
  );
}

export function VBarChart() {
  const max = Math.max(...PRICE_DISTRIBUTION_DATA.map((d) => d.h));
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 160, paddingTop: 10 }}>
      {PRICE_DISTRIBUTION_DATA.map((d) => (
        <div key={d.label} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, height: "100%" }}>
          <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
            <div
              style={{
                width: "100%", borderRadius: "6px 6px 0 0",
                height: `${(d.h / max) * 100}%`,
                background: `linear-gradient(to top,${C.purple}90,${C.accent}80)`,
                boxShadow: `0 0 8px ${C.purple}50`,
                transition: "height 1s ease",
              }}
            />
          </div>
          <div style={{ fontSize: "0.6rem", color: C.muted, textAlign: "center", lineHeight: 1.2 }}>{d.label}</div>
        </div>
      ))}
    </div>
  );
}

export function AccuracyDonutChart() {
  const cx = 90, cy = 90, r = 65, ri = 42;
  let angle = -90;
  const total = ACCURACY_DONUT_DATA.reduce((s, d) => s + d.pct, 0);
  const slices = ACCURACY_DONUT_DATA.map((d) => {
    const sweep = (d.pct / total) * 360;
    const start = angle;
    angle += sweep;
    return { ...d, start, sweep };
  });
  const arc = (cx: number, cy: number, r: number, startDeg: number, sweepDeg: number) => {
    const s = (startDeg * Math.PI) / 180, e = ((startDeg + sweepDeg) * Math.PI) / 180;
    const x1 = cx + r * Math.cos(s), y1 = cy + r * Math.sin(s);
    const x2 = cx + r * Math.cos(e), y2 = cy + r * Math.sin(e);
    const large = sweepDeg > 180 ? 1 : 0;
    return `M${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2}`;
  };

  return (
    <svg viewBox="0 0 180 180" style={{ width: "100%", maxWidth: 180, height: "auto" }}>
      {slices.map((s, i) => (
        <path
          key={i}
          d={
            arc(cx, cy, r, s.start, s.sweep - 1) +
            ` L${cx + ri * Math.cos(((s.start + s.sweep - 1) * Math.PI) / 180)},${cy + ri * Math.sin(((s.start + s.sweep - 1) * Math.PI) / 180)} A${ri},${ri} 0 ${s.sweep > 180 ? 1 : 0},0 ${cx + ri * Math.cos((s.start * Math.PI) / 180)},${cy + ri * Math.sin((s.start * Math.PI) / 180)} Z`
          }
          fill={s.color}
          fillOpacity={0.85}
          style={{ filter: `drop-shadow(0 0 4px ${s.color}80)` }}
        />
      ))}
      <circle cx={cx} cy={cy} r={ri - 2} fill="rgba(11,16,32,0.95)" />
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize={11} fill={C.text} fontWeight={700}>
        97.3%
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize={7} fill={C.muted}>
        Accuracy
      </text>
    </svg>
  );
}

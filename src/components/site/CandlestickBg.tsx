// Decorative SVG - subtle candlestick + line chart pattern for hero backgrounds.
export function CandlestickBg({ className = "" }: { className?: string }) {
  // Generate deterministic candles
  const r2 = (n: number) => Math.round(n * 100) / 100;
  const candles = Array.from({ length: 60 }, (_, i) => {
    const seed = Math.sin(i * 12.9898) * 43758.5453;
    const r = seed - Math.floor(seed);
    const y = r2(120 + r * 120);
    const h = r2(20 + Math.abs(Math.sin(i * 0.7)) * 60);
    const up = Math.sin(i * 1.3) > 0;
    const wick = h + 20 + r * 20;
    return {
      x: i * 22 + 10,
      y,
      h,
      up,
      wickTop: r2(y - (wick - h) / 2),
      wickBottom: r2(y + h + (wick - h) / 2),
    };
  });
  // Line path
  const linePts = Array.from({ length: 80 }, (_, i) => {
    const seed = Math.sin(i * 3.1 + 1.7) * 43758.5453;
    const r = seed - Math.floor(seed);
    return `${i * 17},${r2(180 + r * 90 + Math.sin(i / 4) * 30)}`;
  }).join(" ");

  return (
    <svg
      aria-hidden
      viewBox="0 0 1400 400"
      preserveAspectRatio="none"
      className={"pointer-events-none absolute inset-0 h-full w-full " + className}
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--bull)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--bull)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="fadeMask" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="20%" stopColor="#000" stopOpacity="1" />
          <stop offset="80%" stopColor="#000" stopOpacity="1" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </linearGradient>
        <mask id="fade">
          <rect width="1400" height="400" fill="url(#fadeMask)" />
        </mask>
      </defs>
      <g mask="url(#fade)" opacity="0.35">
        {candles.map((c, i) => (
          <g key={i}>
            <line
              x1={c.x + 4}
              x2={c.x + 4}
              y1={c.wickTop}
              y2={c.wickBottom}
              stroke={c.up ? "var(--bull)" : "var(--bear)"}
              strokeWidth="1"
              opacity="0.6"
            />
            <rect
              x={c.x}
              y={c.y}
              width="8"
              height={c.h}
              fill={c.up ? "var(--bull)" : "var(--bear)"}
              opacity="0.5"
            />
          </g>
        ))}
        <polyline
          points={linePts}
          fill="none"
          stroke="var(--bull)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          opacity="0.7"
        />
        <polygon
          points={`0,400 ${linePts} 1400,400`}
          fill="url(#lineGrad)"
          opacity="0.35"
        />
      </g>
    </svg>
  );
}
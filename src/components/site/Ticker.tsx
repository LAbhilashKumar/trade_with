import { tickerPairs } from "@/lib/mock-data";

export function Ticker() {
  const items = [...tickerPairs, ...tickerPairs];
  return (
    <div className="w-full overflow-hidden border-y border-border bg-surface/80 backdrop-blur-sm">
      <div className="flex items-center gap-3 py-2 animate-ticker whitespace-nowrap">
        {items.map((t, i) => {
          const up = t.change >= 0;
          return (
            <div
              key={i}
              className="flex items-center gap-2 px-4 border-r border-border/60 font-mono text-xs"
            >
              <span className="text-muted-foreground">{t.pair}</span>
              <span className="text-foreground">{t.price.toFixed(t.pair === "USD/INR" || t.pair.includes("JPY") || t.pair === "XAU/USD" ? 2 : 4)}</span>
              <span className={up ? "text-bull" : "text-bear"}>
                {up ? "▲" : "▼"} {Math.abs(t.change).toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
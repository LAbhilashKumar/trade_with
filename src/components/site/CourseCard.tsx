import { Link } from "@tanstack/react-router";
import { Course, formatINR } from "@/lib/mock-data";
import { Clock, Layers, ArrowRight, Star } from "lucide-react";

const levelColor: Record<Course["level"], string> = {
  Beginner: "text-bull border-primary/30 bg-primary/10",
  Intermediate: "text-[color:var(--info)] border-[color:var(--info)]/30 bg-[color:var(--info)]/10",
  Advanced: "text-bear border-destructive/30 bg-destructive/10",
};

export function CourseCard({ course }: { course: Course }) {
  const featured = course.featured;
  return (
    <Link
      to="/courses/$slug"
      params={{ slug: course.slug }}
      className={
        "group relative flex flex-col rounded-lg border bg-card card-hover-glow overflow-hidden " +
        (featured ? "border-primary/40 glow-primary" : "border-border")
      }
    >
      {featured && (
        <div className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full border border-primary/40 bg-primary/15 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-bull">
          <Star className="size-3 fill-current" /> Flagship
        </div>
      )}
      <div className="relative aspect-[16/9] overflow-hidden bg-surface-2">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <MiniChart bullish={course.level !== "Beginner"} />
        <div className="absolute bottom-3 left-3">
          <span className={"inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider " + levelColor[course.level]}>
            {course.level}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-bull transition-colors">
          {course.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {course.description}
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground font-mono">
          <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" />{course.duration}</span>
          <span className="inline-flex items-center gap-1.5"><Layers className="size-3.5" />{course.modulesCount} modules</span>
        </div>
        <div className="mt-5 flex items-center justify-between pt-4 border-t border-border">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Price</div>
            <div className="font-mono text-lg font-semibold text-foreground">{formatINR(course.priceINR)}</div>
          </div>
          <span className="inline-flex items-center gap-1 text-sm text-bull font-medium">
            View course <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function MiniChart({ bullish }: { bullish: boolean }) {
  const pts = Array.from({ length: 20 }, (_, i) => {
    const seed = Math.sin(i * 4.3 + (bullish ? 1 : 5)) * 43758.5453;
    const r = seed - Math.floor(seed);
    const base = bullish ? 90 - i * 2.2 : 30 + i * 2.2;
    return `${i * 18 + 10},${base + r * 20}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 360 130" className="absolute inset-0 h-full w-full">
      <polyline
        points={pts}
        fill="none"
        stroke={bullish ? "var(--bull)" : "var(--bear)"}
        strokeWidth="1.5"
        opacity="0.7"
      />
    </svg>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { courses, Level } from "@/lib/mock-data";
import { CourseCard } from "@/components/site/CourseCard";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: [
      { title: "Courses — TWS Forex Trading" },
      { name: "description", content: "Structured forex courses from fundamentals to live-trading bootcamps. Beginner, intermediate, and advanced tracks." },
      { property: "og:title", content: "TWS Forex Courses" },
      { property: "og:description", content: "Beginner to advanced forex courses with live mentorship." },
    ],
  }),
  component: CoursesIndex,
});

const filters = ["All", "Beginner", "Intermediate", "Advanced"] as const;
type Filter = typeof filters[number];

function CoursesIndex() {
  const [filter, setFilter] = useState<Filter>("All");
  const list = filter === "All" ? courses : courses.filter((c) => c.level === (filter as Level));
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
      <div className="max-w-2xl">
        <div className="text-xs font-mono uppercase tracking-widest text-bull">Curriculum</div>
        <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">Courses</h1>
        <p className="mt-4 text-muted-foreground">
          Every course is built as a step in a longer journey — from your
          first pip to a documented, tested trading edge.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-md border px-3 py-1.5 text-xs font-mono uppercase tracking-widest transition-colors",
              filter === f
                ? "border-primary/50 bg-primary/15 text-bull"
                : "border-border bg-surface text-muted-foreground hover:text-foreground",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((c) => (
          <CourseCard key={c.slug} course={c} />
        ))}
      </div>
    </div>
  );
}
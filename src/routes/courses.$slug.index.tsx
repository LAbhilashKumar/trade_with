import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCourse, formatINR, type Course } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Clock, Layers, ArrowRight, Star, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/courses/$slug/")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.course.title} — TWS Forex Trading` },
          { name: "description", content: loaderData.course.tagline },
          { property: "og:title", content: loaderData.course.title },
          { property: "og:description", content: loaderData.course.tagline },
        ]
      : [],
  }),
  component: CourseDetail,
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-display text-3xl font-bold">Course not found</h1>
      <p className="mt-3 text-muted-foreground">This course doesn't exist or has been moved.</p>
      <Button asChild className="mt-6"><Link to="/courses">Browse courses</Link></Button>
    </div>
  ),
});

function CourseDetail() {
  const { course } = Route.useLoaderData() as { course: Course };
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, color-mix(in oklab, var(--bull) 12%, transparent), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-bull">
                {course.level}
              </span>
              {course.featured && (
                <span className="inline-flex items-center gap-1 rounded-md border border-primary/40 bg-primary/15 px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-bull">
                  <Star className="size-3 fill-current" /> Flagship
                </span>
              )}
            </div>
            <h1 className="mt-5 font-display text-4xl md:text-5xl font-bold tracking-tight">
              {course.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              {course.tagline}
            </p>
            <div className="mt-6 flex items-center flex-wrap gap-4 text-sm font-mono text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Clock className="size-4" />{course.duration}</span>
              <span className="inline-flex items-center gap-1.5"><Layers className="size-4" />{course.modulesCount} modules</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="size-4 text-bull" />Lifetime access</span>
            </div>
          </div>
          <div className="rounded-lg border border-primary/30 bg-surface p-6 glow-primary self-start">
            <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">One-time price</div>
            <div className="mt-2 font-mono text-4xl font-bold">{formatINR(course.priceINR)}</div>
            <Button asChild size="lg" className="mt-5 w-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium">
              <Link to="/courses/$slug/enroll" params={{ slug: course.slug }}>
                Enroll Now <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </Button>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><Check className="size-4 text-bull shrink-0 mt-0.5" />Lifetime access & updates</li>
              <li className="flex gap-2"><Check className="size-4 text-bull shrink-0 mt-0.5" />Live Q&A sessions</li>
              <li className="flex gap-2"><Check className="size-4 text-bull shrink-0 mt-0.5" />Private community access</li>
              <li className="flex gap-2"><Check className="size-4 text-bull shrink-0 mt-0.5" />7-day refund window</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-16">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-bull">Overview</div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight">About this course</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{course.description}</p>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-bull">What you'll learn</div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight">Learning outcomes</h2>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
              {course.outcomes.map((o) => (
                <li key={o} className="flex gap-3 rounded-md border border-border bg-surface p-4">
                  <Check className="size-5 text-bull shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/90">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-bull">Curriculum</div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight">Module breakdown</h2>
            <Accordion type="single" collapsible className="mt-6 rounded-md border border-border bg-surface divide-y divide-border">
              {course.modules.map((m, i) => (
                <AccordionItem key={m.title} value={`m-${i}`} className="border-0 px-5">
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <span className="font-mono text-xs text-muted-foreground w-8">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-medium text-foreground">{m.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-12 pb-2 text-sm text-muted-foreground font-mono">
                      {m.lessons} lessons · video + worksheets
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-bull">Student voices</div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight">What graduates say</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {course.testimonials.map((t) => (
                <div key={t.name} className="rounded-md border border-border bg-surface p-5">
                  <div className="text-bull mb-3">★★★★★</div>
                  <p className="text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-4 pt-3 border-t border-border">
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground font-mono">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-bull">FAQ</div>
            <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold tracking-tight">Frequently asked</h2>
            <Accordion type="single" collapsible className="mt-6 rounded-md border border-border bg-surface divide-y divide-border">
              {course.faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`f-${i}`} className="border-0 px-5">
                  <AccordionTrigger className="hover:no-underline text-left font-medium">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-lg border border-border bg-surface p-6">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Instructor</div>
            <div className="mt-3 flex items-center gap-3">
              <div className="size-12 rounded-full bg-gradient-to-br from-primary/30 to-info/20 border border-border" />
              <div>
                <div className="font-medium">Lead Mentor, TWS</div>
                <div className="text-xs text-muted-foreground font-mono">12+ years live trading</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Full-time forex trader across London and NY sessions. Focused on
              process, journal discipline, and honest accountability.
            </p>
          </div>
        </aside>
      </div>

      {/* Sticky bottom CTA */}
      {showSticky && (
        <div className="fixed bottom-4 left-1/2 z-30 -translate-x-1/2 w-[calc(100%-2rem)] max-w-2xl rounded-lg border border-primary/40 bg-background/95 backdrop-blur px-5 py-3 flex items-center justify-between glow-primary animate-fade-in">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{course.title}</div>
            <div className="font-mono text-lg font-semibold">{formatINR(course.priceINR)}</div>
          </div>
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link to="/courses/$slug/enroll" params={{ slug: course.slug }}>Enroll Now</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
// import { createFileRoute, Link } from "@tanstack/react-router";
// import { Button } from "@/components/ui/button";
// import { CandlestickBg } from "@/components/site/CandlestickBg";
// import { Ticker } from "@/components/site/Ticker";
// import { CourseCard } from "@/components/site/CourseCard";
// import { courses, homeTestimonials, stats } from "@/lib/mock-data";
// import { ArrowRight, PlayCircle, LineChart, Users, GraduationCap, MessageSquare, ShieldCheck } from "lucide-react";
// import { motion } from "motion/react";

// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "TWS Forex Trading — Structured Forex Education" },
//       { name: "description", content: "Mentor-backed forex trading courses for serious traders. Structured curriculum, live sessions, real accountability." },
//       { property: "og:title", content: "TWS Forex Trading" },
//       { property: "og:description", content: "Mentor-backed forex trading courses for serious traders." },
//     ],
//   }),
//   component: Home,
// });

// function Home() {
//   const featured = courses.filter((c) => c.featured || c.level !== "Advanced").slice(0, 3);
//   return (
//     <div>
//       {/* HERO */}
//       <section className="relative overflow-hidden border-b border-border">
//         <div className="absolute inset-0 grid-bg opacity-40" />
//         <CandlestickBg />
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(ellipse at 20% 20%, color-mix(in oklab, var(--bull) 12%, transparent), transparent 60%), radial-gradient(ellipse at 80% 80%, color-mix(in oklab, var(--info) 8%, transparent), transparent 60%)",
//           }}
//         />
//         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24 md:pt-28 md:pb-32">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-3xl"
//           >
//             <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
//               <span className="size-1.5 rounded-full bg-bull pulse-dot" /> Live cohort · Enrolling now
//             </div>
//             <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
//               Master forex trading with
//               <span className="text-bull"> structure</span>, not
//               <span className="text-bear"> speculation</span>.
//             </h1>
//             <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
//               TWS trains disciplined retail traders through a mentor-backed
//               curriculum, live market sessions, and real accountability — not
//               screenshots and hype.
//             </p>
//             <div className="mt-8 flex flex-wrap items-center gap-3">
//               <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-medium">
//                 <Link to="/courses">
//                   Explore Courses <ArrowRight className="ml-1.5 size-4" />
//                 </Link>
//               </Button>
//               <Button asChild size="lg" variant="outline" className="border-border bg-surface/40 hover:bg-surface">
//                 <a href="#intro">
//                   <PlayCircle className="mr-1.5 size-4" /> Watch Intro
//                 </a>
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <Ticker />

//       {/* STATS */}
//       <section className="border-b border-border">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-6">
//           {stats.map((s) => (
//             <div key={s.label} className="rounded-lg border border-border bg-surface p-5">
//               <div className="font-mono text-3xl font-semibold text-foreground">{s.value}</div>
//               <div className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHY */}
//       <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
//         <SectionHeader
//           eyebrow="Why TWS"
//           title="Built for traders who want an edge, not entertainment."
//           sub="Four pillars that separate our program from the noise flooding your feed."
//         />
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//           {[
//             { icon: LineChart, title: "Live Market Sessions", desc: "Trade real setups alongside mentors during London and New York opens." },
//             { icon: GraduationCap, title: "Structured Curriculum", desc: "From currency pairs to institutional order flow — nothing skipped." },
//             { icon: MessageSquare, title: "1-on-1 Mentorship", desc: "Direct feedback on your trades and your journal. Weekly." },
//             { icon: Users, title: "Serious Community", desc: "A private desk of traders who ship playbooks, not moon-shot memes." },
//           ].map((f) => (
//             <div key={f.title} className="rounded-lg border border-border bg-card card-hover-glow p-6">
//               <div className="inline-flex size-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-bull">
//                 <f.icon className="size-5" />
//               </div>
//               <h3 className="mt-4 font-display font-semibold text-foreground">{f.title}</h3>
//               <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FEATURED COURSES */}
//       <section className="border-t border-border bg-surface/30">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
//           <div className="flex items-end justify-between flex-wrap gap-4">
//             <SectionHeader
//               eyebrow="Featured Courses"
//               title="Where do you want to start?"
//               sub="From your first trade to a written, tested playbook."
//               className="max-w-xl"
//             />
//             <Button asChild variant="ghost" className="text-bull hover:text-bull hover:bg-primary/10">
//               <Link to="/courses">All courses <ArrowRight className="ml-1 size-4" /></Link>
//             </Button>
//           </div>
//           <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
//             {featured.map((c) => (
//               <CourseCard key={c.slug} course={c} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ABOUT TEASER */}
//       <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20" id="intro">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <div className="relative aspect-[4/5] max-w-sm rounded-lg border border-border overflow-hidden bg-surface-2">
//             <div className="absolute inset-0 grid-bg opacity-30" />
//             <div
//               className="absolute inset-0"
//               style={{
//                 background: "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--bull) 20%, transparent), transparent 60%)",
//               }}
//             />
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="font-display text-6xl font-bold text-foreground/20">TWS</div>
//             </div>
//             <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-md border border-border bg-background/70 backdrop-blur px-3 py-2">
//               <ShieldCheck className="size-4 text-bull" />
//               <span className="text-xs font-mono text-muted-foreground">Verified 12+ years live</span>
//             </div>
//           </div>
//           <div>
//             <div className="text-xs font-mono uppercase tracking-widest text-bull">Meet your mentor</div>
//             <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
//               12 years on the desk. Now teaching the discipline nobody else does.
//             </h2>
//             <p className="mt-4 text-muted-foreground leading-relaxed">
//               After more than a decade trading forex full-time across
//               London and New York sessions, our lead mentor built TWS to give
//               retail traders a real path — one built on process, journal
//               discipline, and honest accountability.
//             </p>
//             <div className="mt-6 flex items-center gap-3">
//               <Button asChild variant="outline" className="border-border bg-surface/40">
//                 <Link to="/about">Read the full story <ArrowRight className="ml-1.5 size-4" /></Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* TESTIMONIALS */}
//       <section className="border-t border-border bg-surface/30">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
//           <SectionHeader
//             eyebrow="Trader Voices"
//             title="Real students. Real playbooks."
//             sub="No screenshots of hypothetical gains. Just what our traders actually say."
//           />
//           <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
//             {homeTestimonials.map((t) => (
//               <div key={t.name} className="rounded-lg border border-border bg-card p-6">
//                 <div className="flex items-center gap-1 text-bull mb-4">
//                   {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
//                 </div>
//                 <p className="text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
//                 <div className="mt-6 pt-4 border-t border-border">
//                   <div className="font-medium text-sm">{t.name}</div>
//                   <div className="text-xs text-muted-foreground font-mono">{t.role}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FINAL CTA */}
//       <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
//         <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-surface p-10 md:p-14 text-center">
//           <div className="absolute inset-0 grid-bg opacity-30" />
//           <div
//             className="absolute inset-0"
//             style={{
//               background: "radial-gradient(ellipse at 50% 100%, color-mix(in oklab, var(--bull) 25%, transparent), transparent 60%)",
//             }}
//           />
//           <div className="relative">
//             <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
//               Ready to trade with confidence?
//             </h2>
//             <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
//               Join a cohort of serious traders. Structured lessons, live
//               mentorship, and a written edge you can defend.
//             </p>
//             <div className="mt-8">
//               <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
//                 <Link to="/courses">Get Started <ArrowRight className="ml-1.5 size-4" /></Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// function SectionHeader({
//   eyebrow,
//   title,
//   sub,
//   className = "",
// }: {
//   eyebrow: string;
//   title: string;
//   sub?: string;
//   className?: string;
// }) {
//   return (
//     <div className={className}>
//       <div className="text-xs font-mono uppercase tracking-widest text-bull">{eyebrow}</div>
//       <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
//       {sub && <p className="mt-3 text-muted-foreground max-w-2xl">{sub}</p>}
//     </div>
//   );
// }


import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CandlestickBg } from "@/components/site/CandlestickBg";
import { Ticker } from "@/components/site/Ticker";
import { CourseCard } from "@/components/site/CourseCard";
import { courses, homeTestimonials, stats } from "@/lib/mock-data";
import { ArrowRight, PlayCircle, LineChart, Users, GraduationCap, MessageSquare, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TWS Forex Trading — Structured Forex Education" },
      { name: "description", content: "Mentor-backed forex trading courses for serious traders. Structured curriculum, live sessions, real accountability." },
      { property: "og:title", content: "TWS Forex Trading" },
      { property: "og:description", content: "Mentor-backed forex trading courses for serious traders." },
    ],
  }),
  component: Home,
});

function Home() {
  const featured = courses;
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <CandlestickBg />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, color-mix(in oklab, var(--bull) 12%, transparent), transparent 60%), radial-gradient(ellipse at 80% 80%, color-mix(in oklab, var(--info) 8%, transparent), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
              <span className="size-1.5 rounded-full bg-bull pulse-dot" /> Live cohort · Enrolling now
            </div>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Master forex trading with
              <span className="text-bull"> structure</span>, not
              <span className="text-bear"> speculation</span>.
            </h1>
            <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              TWS trains disciplined retail traders through a mentor-backed
              curriculum, live market sessions, and real accountability — not
              screenshots and hype.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-medium">
                <Link to="/courses">
                  Explore Courses <ArrowRight className="ml-1.5 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border bg-surface/40 hover:bg-surface">
                <a href="#intro">
                  <PlayCircle className="mr-1.5 size-4" /> Watch Intro
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Ticker />

      {/* STATS */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-surface p-5">
              <div className="font-mono text-3xl font-semibold text-foreground">{s.value}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <SectionHeader
          eyebrow="Why TWS"
          title="Built for traders who want an edge, not entertainment."
          sub="Four pillars that separate our program from the noise flooding your feed."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: LineChart, title: "Live Market Sessions", desc: "Trade real setups alongside mentors during London and New York opens." },
            { icon: GraduationCap, title: "Structured Curriculum", desc: "From currency pairs to institutional order flow — nothing skipped." },
            { icon: MessageSquare, title: "1-on-1 Mentorship", desc: "Direct feedback on your trades and your journal. Weekly." },
            { icon: Users, title: "Serious Community", desc: "A private desk of traders who ship playbooks, not moon-shot memes." },
          ].map((f) => (
            <div key={f.title} className="rounded-lg border border-border bg-card card-hover-glow p-6">
              <div className="inline-flex size-10 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-bull">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeader
              eyebrow="Featured Courses"
              title="Where do you want to start?"
              sub="From your first trade to a written, tested playbook."
              className="max-w-xl"
            />
            <Button asChild variant="ghost" className="text-bull hover:text-bull hover:bg-primary/10">
              <Link to="/courses">All courses <ArrowRight className="ml-1 size-4" /></Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl">
            {featured.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20" id="intro">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="relative aspect-[4/5] max-w-sm rounded-lg border border-border overflow-hidden bg-surface-2">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--bull) 20%, transparent), transparent 60%)",
              }}
            />
            <img
              src="/mentor.jpg"
              alt="Sudharshan — Founder, TWS Forex Trading"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 rounded-md border border-border bg-background/70 backdrop-blur px-3 py-2">
              <ShieldCheck className="size-4 text-bull" />
              <span className="text-xs font-mono text-muted-foreground">Verified 12+ years live</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-bull">Meet your mentor</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
              12 years on the desk. Now teaching the discipline nobody else does.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              After more than a decade trading forex full-time across
              London and New York sessions, our lead mentor built TWS to give
              retail traders a real path — one built on process, journal
              discipline, and honest accountability.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Button asChild variant="outline" className="border-border bg-surface/40">
                <Link to="/about">Read the full story <ArrowRight className="ml-1.5 size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
          <SectionHeader
            eyebrow="Trader Voices"
            title="Real students. Real playbooks."
            sub="No screenshots of hypothetical gains. Just what our traders actually say."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {homeTestimonials.map((t) => (
              <div key={t.name} className="rounded-lg border border-border bg-card p-6">
                <div className="flex items-center gap-1 text-bull mb-4">
                  {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">"{t.quote}"</p>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-surface p-10 md:p-14 text-center">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at 50% 100%, color-mix(in oklab, var(--bull) 25%, transparent), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Ready to trade with confidence?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Join a cohort of serious traders. Structured lessons, live
              mentorship, and a written edge you can defend.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary">
                <Link to="/courses">Get Started <ArrowRight className="ml-1.5 size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  sub,
  className = "",
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="text-xs font-mono uppercase tracking-widest text-bull">{eyebrow}</div>
      <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground max-w-2xl">{sub}</p>}
    </div>
  );
}

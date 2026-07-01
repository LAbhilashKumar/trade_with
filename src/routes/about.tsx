import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Award, Globe2, LineChart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TWS Forex Trading" },
      { name: "description", content: "12+ years of live forex trading experience. Meet the mentor behind TWS." },
      { property: "og:title", content: "About TWS Forex Trading" },
      { property: "og:description", content: "12+ years of live forex trading. Meet the mentor behind TWS." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="relative border-b border-border overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-bull">About TWS</div>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">
              We teach the discipline<br />the market rewards.
            </h1>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl">
              TWS Forex Trading was built by a full-time trader who spent
              years watching retail students chase indicators, signals and
              screenshots. We built the opposite: a structured, mentor-backed
              path centered on process, journal discipline, and accountability.
            </p>
          </div>
          <div className="relative aspect-square max-w-md justify-self-center rounded-lg border border-border overflow-hidden bg-surface-2">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(circle at 50% 40%, color-mix(in oklab, var(--bull) 25%, transparent), transparent 60%)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center font-display text-7xl font-bold text-foreground/20">TWS</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="text-xs font-mono uppercase tracking-widest text-bull">The mentor</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight max-w-2xl">
          12 years on the desk. 8 markets. 2,400+ students.
        </h2>
        <div className="mt-10 grid md:grid-cols-4 gap-5">
          {[
            { icon: LineChart, label: "Years live trading", value: "12+" },
            { icon: Globe2, label: "Sessions covered", value: "LDN · NY" },
            { icon: Award, label: "Certifications", value: "CMT · CFTe" },
            { icon: ShieldCheck, label: "Students trained", value: "2,400+" },
          ].map((s) => (
            <div key={s.label} className="rounded-lg border border-border bg-surface p-5">
              <s.icon className="size-5 text-bull" />
              <div className="mt-3 font-mono text-2xl font-semibold">{s.value}</div>
              <div className="mt-1 text-xs font-mono uppercase tracking-widest text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 py-20">
          <div className="text-xs font-mono uppercase tracking-widest text-bull">Philosophy</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">
            Process over predictions.
          </h2>
          <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Most trading education is entertainment. It sells a lifestyle,
              a screenshot, a shortcut. We think that's why 90% of retail
              traders lose — they were sold outcomes, not systems.
            </p>
            <p>
              TWS teaches trading the way it's actually done inside prop firms
              and family offices: a written playbook, ruthless journaling,
              defined risk, and unglamorous repetition until the edge is
              statistically clear.
            </p>
            <p>
              If you want to trade seriously, we'd love to have you in the
              next cohort.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-20">
        <div className="text-xs font-mono uppercase tracking-widest text-bull">Milestones</div>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold tracking-tight">A short timeline.</h2>
        <ol className="mt-10 space-y-6 border-l border-border pl-8 relative">
          {[
            { y: "2013", t: "First live account. Blew it up in six weeks." },
            { y: "2015", t: "Joined a London-based prop firm. Learned what process actually means." },
            { y: "2018", t: "Moved full-time to forex. Documented the first written edge." },
            { y: "2021", t: "Launched private mentorship. First 40 students." },
            { y: "2024", t: "TWS opens to public cohorts. 2,400+ students to date." },
          ].map((m) => (
            <li key={m.y} className="relative">
              <span className="absolute -left-[38px] top-1 size-3 rounded-full bg-bull border-4 border-background" />
              <div className="font-mono text-sm text-bull">{m.y}</div>
              <div className="mt-1 text-foreground/90">{m.t}</div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCourse, formatINR, type Course } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useRef, useState } from "react";
import { Upload, Check, Clock3, ShieldCheck, Copy, PartyPopper, Lock, PlayCircle, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export const Route = createFileRoute("/courses/$slug/enroll")({
  loader: ({ params }) => {
    const course = getCourse(params.slug);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [{ title: `Enroll — ${loaderData.course.title} | TWS` }, { name: "description", content: `Complete your enrollment for ${loaderData.course.title}.` }]
      : [],
  }),
  component: Enroll,
});

type Step = 1 | 2 | 3 | 4;

function Enroll() {
  const { course } = Route.useLoaderData() as { course: Course };
  const [step, setStep] = useState<Step>(1);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [txId, setTxId] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(f: File) {
    setFile(f);
    const url = URL.createObjectURL(f);
    setPreview(url);
  }

  function submitForReview() {
    if (!file) return toast.error("Please upload a screenshot of your payment.");
    if (!name || !email) return toast.error("Please add your name and email.");
    setStep(3);
    toast.success("Submitted for verification.");
  }

  function copyUpi() {
    navigator.clipboard.writeText("tws.forex@upi");
    toast.success("UPI ID copied");
  }

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-16">
      {/* Course header */}
      <div className="flex items-center justify-between flex-wrap gap-4 rounded-lg border border-border bg-surface p-5">
        <div>
          <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">Enrolling in</div>
          <div className="mt-1 font-display text-xl font-semibold">{course.title}</div>
          <div className="text-xs text-muted-foreground font-mono mt-1">{course.level} · {course.duration}</div>
        </div>
        <div className="text-right">
          <div className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground">Total</div>
          <div className="font-mono text-2xl font-bold">{formatINR(course.priceINR)}</div>
        </div>
      </div>

      {/* Stepper */}
      <Stepper step={step} />

      <div className="mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg border border-border bg-surface p-6">
                  <h3 className="font-display text-lg font-semibold">Payment instructions</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Pay <span className="font-mono text-foreground">{formatINR(course.priceINR)}</span> via UPI or bank transfer, then upload
                    your payment confirmation in the next step.
                  </p>
                  <div className="mt-6 space-y-3">
                    <PaymentRow label="UPI ID" value="tws.forex@upi" onCopy={copyUpi} />
                    <PaymentRow label="Account" value="TWS Forex Trading" />
                    <PaymentRow label="A/C No" value="0123 4567 8910" />
                    <PaymentRow label="IFSC" value="HDFC0001234" />
                  </div>
                  <div className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="size-4 text-bull shrink-0 mt-0.5" />
                    <span>Manual verification typically completes within a few hours.</span>
                  </div>
                </div>
                <div className="rounded-lg border border-border bg-surface p-6 flex flex-col items-center justify-center text-center">
                  <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Scan to pay</div>
                  <div className="mt-4 aspect-square w-48 rounded-md border border-border bg-background p-3 grid place-items-center">
                    <QRPlaceholder />
                  </div>
                  <div className="mt-4 font-mono text-sm">tws.forex@upi</div>
                  <div className="mt-1 font-mono text-lg font-semibold">{formatINR(course.priceINR)}</div>
                </div>
                <div className="md:col-span-2 flex justify-end">
                  <Button
                    size="lg"
                    onClick={() => setStep(2)}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    I've paid — Continue
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-lg border border-border bg-surface p-6">
                  <h3 className="font-display text-lg font-semibold">Upload payment screenshot</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Drag & drop or browse. We'll verify against your transaction.
                  </p>
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragOver(false);
                      const f = e.dataTransfer.files?.[0];
                      if (f) handleFile(f);
                    }}
                    onClick={() => inputRef.current?.click()}
                    className={cn(
                      "mt-4 aspect-video rounded-md border border-dashed cursor-pointer flex flex-col items-center justify-center transition-colors overflow-hidden",
                      dragOver ? "border-primary/60 bg-primary/5" : "border-border bg-background/50 hover:border-primary/40",
                    )}
                  >
                    {preview ? (
                      <img src={preview} alt="preview" className="h-full w-full object-contain" />
                    ) : (
                      <>
                        <Upload className="size-6 text-muted-foreground" />
                        <div className="mt-2 text-sm text-muted-foreground">Drag & drop or click to browse</div>
                        <div className="mt-1 text-[11px] font-mono text-muted-foreground">PNG, JPG up to 5MB</div>
                      </>
                    )}
                    <input
                      ref={inputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
                    />
                  </div>
                  {file && (
                    <div className="mt-3 text-xs text-muted-foreground font-mono truncate">
                      {file.name} · {(file.size / 1024).toFixed(0)} KB
                    </div>
                  )}
                </div>
                <div className="rounded-lg border border-border bg-surface p-6 space-y-4">
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Rohan Malhotra" className="mt-1.5 bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="mt-1.5 bg-background" />
                  </div>
                  <div>
                    <Label htmlFor="tx">Transaction ID (optional)</Label>
                    <Input id="tx" value={txId} onChange={(e) => setTxId(e.target.value)} placeholder="e.g. 43829..." className="mt-1.5 bg-background font-mono" />
                  </div>
                </div>
                <div className="md:col-span-2 flex justify-between">
                  <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
                  <Button size="lg" onClick={submitForReview} className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Submit for verification
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="rounded-lg border border-border bg-surface p-10 text-center">
                <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full border border-[color:var(--info)]/40 bg-[color:var(--info)]/10 text-[color:var(--info)]">
                  <Clock3 className="size-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">Payment under review</h3>
                <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                  Thanks {name || "trader"} — we've received your submission. Verification
                  typically takes a few hours. You'll be notified at{" "}
                  <span className="font-mono text-foreground">{email || "your email"}</span> once approved.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-1.5">
                  <span className="size-1.5 rounded-full bg-[color:var(--info)] pulse-dot" />
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Awaiting admin approval</span>
                </div>
                {/* Demo control */}
                <div className="mt-10 mx-auto max-w-md rounded-md border border-dashed border-border bg-background/60 p-4 text-left">
                  <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-muted-foreground">
                    <Wrench className="size-3.5" /> Demo controls
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    In production, an admin approves the payment. For this demo, use the button below.
                  </p>
                  <Button
                    onClick={() => setStep(4)}
                    variant="outline"
                    className="mt-3 w-full border-primary/40 text-bull hover:bg-primary/10"
                  >
                    Simulate Admin Approval
                  </Button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div>
                <div className="rounded-lg border border-primary/40 bg-surface p-10 text-center glow-primary">
                  <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-bull">
                    <PartyPopper className="size-6" />
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-bold">You're in.</h3>
                  <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                    Your enrollment in <span className="text-foreground font-medium">{course.title}</span> is confirmed.
                    Access is unlocked below.
                  </p>
                </div>
                <div className="mt-8 rounded-lg border border-border bg-surface p-6">
                  <div className="flex items-center justify-between">
                    <h4 className="font-display text-lg font-semibold">Course access</h4>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-bull">
                      <span className="size-1.5 rounded-full bg-bull" /> Unlocked
                    </span>
                  </div>
                  <ul className="mt-5 divide-y divide-border rounded-md border border-border overflow-hidden">
                    {course.modules.map((m, i) => (
                      <li key={m.title} className="flex items-center gap-4 px-4 py-3 bg-background hover:bg-surface-2 transition-colors cursor-pointer">
                        <div className="inline-flex size-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-bull">
                          {i === 0 ? <PlayCircle className="size-4" /> : <Lock className="size-4 text-muted-foreground" />}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{m.title}</div>
                          <div className="text-xs text-muted-foreground font-mono">{m.lessons} lessons</div>
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">
                          {i === 0 ? "Start" : "Available"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex justify-center">
                  <Button asChild variant="outline">
                    <Link to="/courses">Back to all courses</Link>
                  </Button>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function Stepper({ step }: { step: Step }) {
  const steps = [
    { n: 1, label: "Submitted", full: "Payment" },
    { n: 2, label: "Upload", full: "Screenshot" },
    { n: 3, label: "Under Review", full: "Verification" },
    { n: 4, label: "Approved", full: "Access" },
  ];
  return (
    <div className="mt-8">
      <div className="flex items-center">
        {steps.map((s, i) => {
          const done = step > s.n;
          const active = step === s.n;
          return (
            <div key={s.n} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "size-8 rounded-full border-2 grid place-items-center font-mono text-xs transition-colors",
                    done && "border-primary bg-primary text-primary-foreground",
                    active && "border-primary text-bull bg-primary/10",
                    !done && !active && "border-border text-muted-foreground bg-surface",
                  )}
                >
                  {done ? <Check className="size-4" /> : s.n}
                </div>
                <div className={cn("mt-2 text-[10px] font-mono uppercase tracking-widest hidden sm:block", active || done ? "text-foreground" : "text-muted-foreground")}>
                  {s.label}
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className={cn("h-px flex-1 mx-2 sm:mx-3 -mt-5", done ? "bg-primary" : "bg-border")} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PaymentRow({ label, value, onCopy }: { label: string; value: string; onCopy?: () => void }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2">
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-mono text-sm">{value}</div>
      </div>
      {onCopy && (
        <button onClick={onCopy} className="text-muted-foreground hover:text-bull" aria-label="Copy">
          <Copy className="size-4" />
        </button>
      )}
    </div>
  );
}

function QRPlaceholder() {
  // Fake QR grid
  const cells = Array.from({ length: 21 * 21 }, (_, i) => {
    const seed = Math.sin(i * 12.9898) * 43758.5453;
    const r = seed - Math.floor(seed);
    return r > 0.55;
  });
  return (
    <div className="grid grid-cols-[repeat(21,1fr)] gap-[1px] w-full h-full">
      {cells.map((on, i) => (
        <div key={i} className={on ? "bg-foreground" : "bg-transparent"} />
      ))}
    </div>
  );
}
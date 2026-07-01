import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TWS Forex Trading" },
      { name: "description", content: "Get in touch with TWS Forex Trading. Questions, partnerships, or enrollment support." },
      { property: "og:title", content: "Contact TWS Forex Trading" },
      { property: "og:description", content: "Reach out to the TWS team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) return toast.error("Please fill in all fields.");
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent. We'll be in touch shortly.");
      setName(""); setEmail(""); setMessage("");
      setSubmitting(false);
    }, 700);
  }

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
      <div className="text-xs font-mono uppercase tracking-widest text-bull">Contact</div>
      <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold tracking-tight">Get in touch.</h1>
      <p className="mt-4 text-muted-foreground max-w-xl">
        Questions about a course, partnership, or enrollment support — drop a
        note and we'll get back within one business day.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <form onSubmit={submit} className="md:col-span-2 rounded-lg border border-border bg-surface p-6 space-y-4">
          <div>
            <Label htmlFor="cn">Full name</Label>
            <Input id="cn" value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5 bg-background" />
          </div>
          <div>
            <Label htmlFor="ce">Email</Label>
            <Input id="ce" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1.5 bg-background" />
          </div>
          <div>
            <Label htmlFor="cm">Message</Label>
            <Textarea id="cm" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1.5 bg-background resize-none" />
          </div>
          <Button type="submit" disabled={submitting} size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            {submitting ? "Sending..." : "Send message"}
          </Button>
        </form>

        <div className="space-y-4">
          <ContactCard icon={Mail} label="Email" value="hello@twsforex.com" />
          <ContactCard icon={MessageCircle} label="WhatsApp" value="+91 98765 43210" />
          <ContactCard icon={MapPin} label="Location" value="Bengaluru, India" />
          <div className="rounded-lg border border-border bg-surface p-5 text-xs text-muted-foreground leading-relaxed">
            <span className="text-foreground/80 font-medium">Support hours:</span> Mon–Fri, 9am–6pm IST. Live cohort members get 24/7 Discord support.
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <div className="inline-flex size-9 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-bull">
        <Icon className="size-4" />
      </div>
      <div className="mt-3 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{label}</div>
      <div className="mt-1 font-mono text-sm text-foreground">{value}</div>
    </div>
  );
}
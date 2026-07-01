export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface Course {
  slug: string;
  title: string;
  level: Level;
  priceINR: number;
  duration: string;
  modulesCount: number;
  tagline: string;
  description: string;
  featured?: boolean;
  modules: { title: string; lessons: number }[];
  outcomes: string[];
  faqs: { q: string; a: string }[];
  testimonials: { name: string; quote: string; role: string }[];
}

export const courses: Course[] = [
  {
    slug: "forex-fundamentals",
    title: "Forex Fundamentals",
    level: "Beginner",
    priceINR: 2999,
    duration: "4 weeks",
    modulesCount: 6,
    tagline: "Build a rock-solid foundation before you place a single trade.",
    description:
      "A structured introduction to the forex market — how currency pairs move, why they move, and how professionals think about them.",
    modules: [
      { title: "Module 1: Understanding Currency Pairs", lessons: 5 },
      { title: "Module 2: How the Forex Market Works", lessons: 4 },
      { title: "Module 3: Reading a Price Chart", lessons: 6 },
      { title: "Module 4: Order Types & Execution", lessons: 4 },
      { title: "Module 5: Introduction to Analysis", lessons: 5 },
      { title: "Module 6: Building Your First Trade Plan", lessons: 3 },
    ],
    outcomes: [
      "Read and interpret major, minor, and exotic pairs with confidence",
      "Understand pips, lots, leverage and margin without hand-waving",
      "Place market, limit, and stop orders on any broker platform",
      "Build a written trade plan you can actually follow",
    ],
    faqs: [
      { q: "Do I need prior trading experience?", a: "No. This course starts from zero and assumes no prior exposure to markets." },
      { q: "Is the course live or self-paced?", a: "Self-paced video lessons with two live Q&A sessions per month." },
      { q: "How long do I have access?", a: "Lifetime access, including all future updates to this course." },
      { q: "What's your refund policy?", a: "7-day refund window if you've completed less than 20% of the material." },
    ],
    testimonials: [
      { name: "Rohan M.", role: "New trader, Bengaluru", quote: "Finally understand what leverage actually does to my account. The trade-plan template alone is worth it." },
      { name: "Priya S.", role: "Career switcher, Pune", quote: "Clear, structured, no hype. I stopped guessing after week two." },
    ],
  },
  {
    slug: "price-action-mastery",
    title: "Price Action Mastery",
    level: "Intermediate",
    priceINR: 6999,
    duration: "6 weeks",
    modulesCount: 8,
    tagline: "Read the market without a dozen indicators cluttering your chart.",
    description:
      "A deep dive into pure price action — market structure, supply and demand, and high-probability setups you can trade on any timeframe.",
    modules: [
      { title: "Module 1: Market Structure Foundations", lessons: 5 },
      { title: "Module 2: Support, Resistance & Liquidity", lessons: 6 },
      { title: "Module 3: Candlestick Patterns That Actually Work", lessons: 7 },
      { title: "Module 4: Supply & Demand Zones", lessons: 6 },
      { title: "Module 5: Trend, Range & Reversal Playbooks", lessons: 8 },
      { title: "Module 6: Multi-Timeframe Analysis", lessons: 5 },
      { title: "Module 7: Entry Models & Confirmations", lessons: 6 },
      { title: "Module 8: Building a Repeatable Setup", lessons: 4 },
    ],
    outcomes: [
      "Identify market structure shifts in real time",
      "Trade three high-probability setups with clear invalidation",
      "Cut indicator noise and trade what price is actually doing",
      "Journal and refine your edge week over week",
    ],
    faqs: [
      { q: "Do I need to finish Fundamentals first?", a: "Recommended if you're new. If you already trade, you can start here." },
      { q: "Which timeframes are covered?", a: "Everything from 15m intraday to daily swing setups." },
      { q: "Is there a community?", a: "Yes — private Discord with weekly setup breakdowns." },
      { q: "How long do I have access?", a: "Lifetime access, including future revisions." },
    ],
    testimonials: [
      { name: "Arjun K.", role: "Swing trader, Delhi", quote: "Removed six indicators from my chart after week three. My win rate went up." },
      { name: "Neha R.", role: "Intraday trader, Mumbai", quote: "The multi-timeframe framework is what I was missing for two years." },
    ],
  },
  {
    slug: "advanced-technical-analysis",
    title: "Advanced Technical Analysis",
    level: "Advanced",
    priceINR: 9999,
    duration: "8 weeks",
    modulesCount: 9,
    tagline: "Institutional-grade analysis without the mysticism.",
    description:
      "Order flow, volume profile, session opens, and confluence models used by professional discretionary traders.",
    modules: [
      { title: "Module 1: Order Flow Basics", lessons: 5 },
      { title: "Module 2: Volume Profile & VWAP", lessons: 6 },
      { title: "Module 3: Session Opens & Killzones", lessons: 5 },
      { title: "Module 4: Liquidity Engineering", lessons: 6 },
      { title: "Module 5: Fair Value Gaps & Imbalances", lessons: 5 },
      { title: "Module 6: Correlation & DXY Framework", lessons: 4 },
      { title: "Module 7: News-Driven Volatility", lessons: 5 },
      { title: "Module 8: Confluence Playbook", lessons: 6 },
      { title: "Module 9: Case Studies from Live Trades", lessons: 8 },
    ],
    outcomes: [
      "Read order flow and volume profile like a professional desk",
      "Trade session-open models with defined risk",
      "Use correlation and DXY to filter trade quality",
      "Assemble a confluence-based decision framework",
    ],
    faqs: [
      { q: "Is this suitable for beginners?", a: "No. You should be trading at least six months and comfortable with structure." },
      { q: "Does it cover crypto?", a: "The frameworks apply, but examples are forex-first." },
      { q: "Are live trades included?", a: "Yes — 12 real-money trade walkthroughs with journaled reasoning." },
      { q: "How long do I have access?", a: "Lifetime access with quarterly content updates." },
    ],
    testimonials: [
      { name: "Vikram T.", role: "Prop-firm trader", quote: "Passed my second challenge two weeks after the killzone module. Coincidence? Doubt it." },
      { name: "Sanjana B.", role: "Full-time trader", quote: "The DXY framework changed how I filter every setup." },
    ],
  },
  {
    slug: "risk-management-psychology",
    title: "Risk Management & Trading Psychology",
    level: "Intermediate",
    priceINR: 4999,
    duration: "3 weeks",
    modulesCount: 5,
    tagline: "The only edge that survives a bad week.",
    description:
      "Position sizing, drawdown discipline, and the mental frameworks that separate consistent traders from account blowups.",
    modules: [
      { title: "Module 1: Position Sizing Mathematics", lessons: 4 },
      { title: "Module 2: Drawdown Rules & Recovery", lessons: 4 },
      { title: "Module 3: The Trader's Journal", lessons: 3 },
      { title: "Module 4: Emotional Discipline Frameworks", lessons: 5 },
      { title: "Module 5: Building Your Risk Playbook", lessons: 4 },
    ],
    outcomes: [
      "Size every trade to a fixed fractional risk model",
      "Recover from drawdown without revenge trading",
      "Journal in a way that actually improves your P&L",
      "Build a written risk playbook you enforce daily",
    ],
    faqs: [
      { q: "Do I need a live account?", a: "Preferred but not required — the frameworks apply on demo too." },
      { q: "How much math is involved?", a: "Basic arithmetic. We give you the calculators." },
      { q: "Is there 1-on-1 support?", a: "Group coaching call weekly; 1-on-1 is available as an add-on." },
      { q: "Refund policy?", a: "7-day, less than 20% completion." },
    ],
    testimonials: [
      { name: "Karan D.", role: "Recovering revenge trader", quote: "First month in years I didn't blow through my daily loss limit." },
      { name: "Ishita V.", role: "Part-time trader", quote: "The journal template is deceptively simple. It works." },
    ],
  },
  {
    slug: "live-trading-bootcamp",
    title: "Live Trading Bootcamp",
    level: "Advanced",
    priceINR: 14999,
    duration: "6 weeks",
    modulesCount: 12,
    featured: true,
    tagline: "Six weeks of live sessions, real capital, and personal mentorship.",
    description:
      "Our flagship program. Trade live alongside the desk, get your trades reviewed daily, and leave with a documented edge.",
    modules: [
      { title: "Week 1: Pre-Market Routine", lessons: 5 },
      { title: "Week 1: Live Session Playbook", lessons: 6 },
      { title: "Week 2: London Open Setups", lessons: 5 },
      { title: "Week 2: Trade Review Framework", lessons: 4 },
      { title: "Week 3: New York Open Models", lessons: 6 },
      { title: "Week 3: News Trading Discipline", lessons: 4 },
      { title: "Week 4: Swing Trade Construction", lessons: 5 },
      { title: "Week 4: Portfolio-Level Risk", lessons: 4 },
      { title: "Week 5: Journal Audit & Edge Refinement", lessons: 5 },
      { title: "Week 5: 1-on-1 Mentor Review", lessons: 2 },
      { title: "Week 6: Certification Trading Week", lessons: 6 },
      { title: "Week 6: Graduation & Ongoing Access", lessons: 3 },
    ],
    outcomes: [
      "Trade live alongside a mentor five days a week",
      "Document your personal edge with statistical backing",
      "Get every trade reviewed for 6 straight weeks",
      "Graduate with a written, tested, repeatable playbook",
    ],
    faqs: [
      { q: "How much time per day?", a: "2–3 hours during active sessions, 5 days/week." },
      { q: "Do I need capital to participate?", a: "Demo is fine for weeks 1–2. Live capital recommended from week 3." },
      { q: "Cohort size?", a: "Capped at 25 to keep mentorship personal." },
      { q: "Refund policy?", a: "Full refund before day 7 if you attend all live sessions and it's not for you." },
    ],
    testimonials: [
      { name: "Aditya P.", role: "Bootcamp graduate", quote: "The daily trade review is unlike anything else on the market. It compounds fast." },
      { name: "Meera J.", role: "Cohort 3", quote: "Graduated with a written edge and a journaled 68% win rate over six weeks." },
      { name: "Rahul N.", role: "Cohort 2", quote: "Worth 3x the price. The mentor calls alone changed my career." },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}

export const homeTestimonials = [
  { name: "Aditya P.", role: "Full-time trader", quote: "TWS gave me a framework, not a fantasy. That's the difference." },
  { name: "Meera J.", role: "Bootcamp graduate", quote: "Structured, disciplined, and genuinely mentor-backed. Rare in this space." },
  { name: "Vikram T.", role: "Prop-firm trader", quote: "Passed my funded challenge inside a month. The killzone module did it." },
];

export const tickerPairs = [
  { pair: "EUR/USD", price: 1.0847, change: 0.23 },
  { pair: "GBP/JPY", price: 192.44, change: -0.41 },
  { pair: "USD/JPY", price: 154.12, change: 0.18 },
  { pair: "AUD/USD", price: 0.6612, change: -0.09 },
  { pair: "USD/CAD", price: 1.3684, change: 0.32 },
  { pair: "GBP/USD", price: 1.2681, change: -0.15 },
  { pair: "NZD/USD", price: 0.6104, change: 0.27 },
  { pair: "EUR/GBP", price: 0.8552, change: 0.05 },
  { pair: "USD/CHF", price: 0.8811, change: -0.22 },
  { pair: "EUR/JPY", price: 167.21, change: 0.44 },
  { pair: "XAU/USD", price: 2384.5, change: 0.61 },
  { pair: "USD/INR", price: 83.42, change: -0.03 },
];

export const stats = [
  { label: "Students trained", value: "2,400+" },
  { label: "Years of experience", value: "12" },
  { label: "Avg. course rating", value: "4.8/5" },
  { label: "Cohort completion", value: "87%" },
];

export function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}
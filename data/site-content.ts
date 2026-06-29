/* ============================================================================
 *  site-content.ts  —  THE ONE FILE TO EDIT
 * ============================================================================
 *  Every piece of visible text, every stat, product, value prop, testimonial,
 *  FAQ, nav link, phone number and CTA label on the site lives here. Components
 *  read from this file — so to change the headline, swap a phone number, add a
 *  product card or edit an FAQ, edit DATA HERE, not the JSX.
 *
 *  HOW TO EDIT
 *  -----------
 *  • Text  : change the string. Keep the quotes.
 *  • Lists : add/remove items inside the [ ... ] arrays (copy an existing
 *            item as a template; mind the trailing comma).
 *  • Icons : the `icon` fields use lucide-react icon names (PascalCase).
 *            Browse names at https://lucide.dev/icons — e.g. "ShieldCheck".
 *            If you type a name that doesn't exist it falls back to a shield.
 *  • TODO  : anything marked `TODO:` needs real client-supplied data or a
 *            compliance review before launch.
 *
 *  Theme colors & fonts are NOT here — those live in tailwind.config.ts.
 * ==========================================================================*/

// ---------------------------------------------------------------------------
//  BRAND / GLOBAL
// ---------------------------------------------------------------------------
export const brand = {
  name: "TMF Life & Legacy",
  shortName: "TMF",
  tagline: "Protecting What Matters Most.",
  logo: {
    src: "/TMF_logo.png", // ← swap this file in /public to change the logo
    alt: "TMF Life & Legacy — gold monogram framed by laurel branches",
  },
};

// ---------------------------------------------------------------------------
//  CONTACT  (one-line swaps)
// ---------------------------------------------------------------------------
export const contact = {
  // Email is the ONLY contact method on the site.
  // Pulled from env when set, otherwise this fallback is used everywhere.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "admin@tmflife.com",
  // General info shown in the footer (not a contact action).
  location: "Serving families nationwide",
  // Physical office address.
  address: {
    line1: "1300 Old Congress Avenue",
    city: "West Palm Beach",
    state: "FL",
    zip: "33409",
    full: "1300 Old Congress Avenue, West Palm Beach, FL 33409",
  },
  hours: "We reply Mon–Fri · 9am–7pm ET",
};

// ---------------------------------------------------------------------------
//  FORM ENDPOINT  (where the quote/careers form submits)
// ---------------------------------------------------------------------------
//  Leave NEXT_PUBLIC_FORM_ENDPOINT unset to use the mailto: fallback.
//  See components/sections/ContactForm.tsx for the submit logic + TODO.
export const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

// ---------------------------------------------------------------------------
//  NAVIGATION  (anchor links — `href` must match a section id below)
// ---------------------------------------------------------------------------
// NOTE: "Careers" and "Contact" are intentionally NOT here — the header's two
// buttons ("Join Our Team" → #careers, "Get in Touch" → #contact) already cover
// them, so listing them as nav links too would be redundant.
export const navLinks = [
  { label: "Coverage", href: "#coverage" },
  { label: "Why TMF", href: "#why-tmf" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

// CTA labels reused across header, hero and bands — edit once, change everywhere.
export const cta = {
  // Client CTA. There is no quote form — this scrolls to the Contact section,
  // whose button opens the visitor's email app to admin@tmflife.com.
  quote: "Get in Touch",
  quoteHref: "#contact",
  join: "Join Our Team",
  joinHref: "#careers",
  apply: "Apply to Join",
  how: "How It Works",
  howHref: "#how-it-works",
};

// ---------------------------------------------------------------------------
//  HERO
// ---------------------------------------------------------------------------
export const hero = {
  // The headline is split so the middle phrase can render in metallic gold.
  headlineLead: "Protecting",
  headlineAccent: "What Matters Most",
  headlineTrail: ".",
  subhead:
    "Thoughtful life insurance and legacy planning for the people you love most. We help you secure your family's future today—and leave something lasting for tomorrow.",
  primaryCta: cta.quote,
  primaryHref: cta.quoteHref,
  secondaryCta: cta.how,
  secondaryHref: cta.howHref,
  // Quieter link for the second audience (prospective agents).
  agentNudge: "Looking to join our team?",
  agentNudgeHref: cta.joinHref,
  microcopy: "Free, no-obligation — we'll reply to you personally.",
  trustChips: [
    "No-medical-exam options",
    "Top-rated carriers",
    "Free, no-obligation quote",
    "Coverage in minutes",
  ],
};

// ---------------------------------------------------------------------------
//  STATS BAR  (animated count-up)
// ---------------------------------------------------------------------------
//  `value` is the number to count to; `prefix`/`suffix` wrap it.
//  TODO: confirm real figures with the client before launch.
export const stats = [
  { value: 12000, prefix: "", suffix: "+", label: "Families Protected" },
  { value: 25, prefix: "", suffix: "+", label: "Years of Combined Experience" },
  { value: 30, prefix: "", suffix: "+", label: "A-Rated Carriers" },
  { value: 100, prefix: "", suffix: "%", label: "Claims-Support Commitment" },
];

// ---------------------------------------------------------------------------
//  COVERAGE / PRODUCTS
// ---------------------------------------------------------------------------
export const coverage = {
  eyebrow: "Our Coverage",
  heading: "Protection tailored to every chapter of life",
  intro:
    "From affordable term protection to lifelong policies that build value, we match you with coverage that fits your family, your goals, and your budget.",
  // Add or remove cards by editing this array.
  items: [
    {
      icon: "Clock",
      title: "Term Life Insurance",
      description:
        "Affordable, straightforward protection for a set period—ideal for covering your family's biggest financial years.",
    },
    {
      icon: "Infinity",
      title: "Whole Life Insurance",
      description:
        "Lifelong coverage with guaranteed benefits that builds cash value you can borrow against over time.",
    },
    {
      icon: "TrendingUp",
      title: "Indexed Universal Life (IUL)",
      description:
        "Flexible permanent coverage with cash-value growth potential tied to a market index—without direct market risk.",
    },
    {
      icon: "HeartHandshake",
      title: "Final Expense",
      description:
        "Dignified, easy-to-qualify coverage that spares your loved ones the burden of funeral and end-of-life costs.",
    },
    {
      icon: "Home",
      title: "Mortgage Protection",
      description:
        "Coverage designed to pay off the mortgage so your family can stay in the home you built together.",
    },
    {
      icon: "Sparkles",
      title: "Living Benefits & Legacy Planning",
      description:
        "Policies with living benefits you can access for qualifying illnesses—protection that works while you're still here.",
    },
  ],
  learnMore: "Learn more",
};

// ---------------------------------------------------------------------------
//  WHY CHOOSE TMF  (value props)
// ---------------------------------------------------------------------------
export const whyTmf = {
  eyebrow: "Why TMF",
  heading: "A standard of care worthy of your legacy",
  intro:
    "We treat your family's future the way we'd treat our own—with honesty, patience, and a plan built entirely around you.",
  items: [
    {
      icon: "UserCheck",
      title: "Personalized Guidance",
      description:
        "A dedicated advisor learns your story and builds a plan around your family—never a one-size-fits-all script.",
    },
    {
      icon: "Award",
      title: "Top-Rated Carriers",
      description:
        "We shop a wide network of financially strong, A-rated carriers so you get the right coverage at the right price.",
    },
    {
      icon: "Zap",
      title: "Fast & Simple Process",
      description:
        "Clear questions, plain-language answers, and no-medical-exam options that can put you on the path to coverage quickly.",
    },
    {
      icon: "Handshake",
      title: "No-Pressure Advice",
      description:
        "We educate first and let you decide. No jargon, no hard sells—just honest recommendations you can trust.",
    },
    {
      icon: "Wallet",
      title: "Coverage for Every Budget",
      description:
        "From starter term policies to comprehensive legacy plans, we find protection that fits what you can comfortably afford.",
    },
    {
      icon: "LifeBuoy",
      title: "Lifelong Support",
      description:
        "We're here long after the policy is issued—for reviews, life changes, and guiding your family through a claim.",
    },
  ],
};

// ---------------------------------------------------------------------------
//  HOW IT WORKS  (3 steps)
// ---------------------------------------------------------------------------
export const howItWorks = {
  eyebrow: "How It Works",
  heading: "Coverage made clear in three simple steps",
  steps: [
    {
      title: "Tell us about you",
      description:
        "Answer a few quick, no-obligation questions about your family, your goals, and what you'd like to protect.",
    },
    {
      title: "We match you",
      description:
        "Your advisor compares top-rated carriers to find the coverage and price that fit you best—and explains every option.",
    },
    {
      title: "Get protected",
      description:
        "Apply with confidence and secure your policy. From there, you have lasting peace of mind and a team in your corner.",
    },
  ],
};

// ---------------------------------------------------------------------------
//  ABOUT / MISSION  ("The Legacy")
// ---------------------------------------------------------------------------
export const about = {
  eyebrow: "The Legacy",
  heading: "More than a policy—a promise to the people you love",
  // Each string is a paragraph.
  body: [
    "TMF Life & Legacy was built on a simple belief: protecting your family should feel personal, not transactional. A life insurance policy is really a promise—that the people you love will be cared for, that the life you've built will endure, and that your legacy will outlast you.",
    "We sit on your side of the table. We take the time to understand your family, explain your options in plain language, and design protection that grows with you. No pressure, no jargon—just guidance you can trust at one of life's most important crossroads.",
    "That's the meaning behind our name. Life is the protection you put in place today. Legacy is what that protection makes possible for generations to come. Together, they're how we help you protect what matters most.",
  ],
  pullQuote: "Protecting What Matters Most.",
};

// ---------------------------------------------------------------------------
//  CAREERS  (for prospective agents)
// ---------------------------------------------------------------------------
export const careers = {
  eyebrow: "For Agents",
  heading: "Build a career—and a legacy—with TMF",
  intro:
    "Whether you're a licensed producer or just beginning your journey, TMF is a place to grow. We pair real mentorship with the tools, carriers, and culture you need to do meaningful work and build something lasting for your own family, too.",
  // What we offer — icon grid.
  offers: [
    {
      icon: "GraduationCap",
      title: "Hands-On Training & Mentorship",
      description:
        "Learn from experienced producers who invest in your success with real coaching—not a sink-or-swim handbook.",
    },
    {
      icon: "Building2",
      title: "Strong Carrier Relationships",
      description:
        "Represent a broad shelf of top-rated carriers so you can serve clients well and recommend with confidence.",
    },
    {
      icon: "TrendingUp",
      title: "A Clear Path to Grow",
      description:
        "Defined steps for advancement and leadership, so you always know what's next and how to get there.",
    },
    {
      icon: "Users",
      title: "Supportive Team Culture",
      description:
        "A people-first environment where teammates share what works and genuinely want to see you win.",
    },
    {
      icon: "Laptop",
      title: "Modern Tools & Systems",
      description:
        "Quoting, CRM, and client tools that cut busywork so you can focus on relationships and results.",
    },
    {
      icon: "LineChart",
      title: "Uncapped Earning Potential",
      // TODO: replace with compliance-approved earnings language. Avoid
      // specific income figures or guarantees until reviewed.
      description:
        "Your effort is rewarded. We give you the runway, training, and support to build the income you work toward.",
    },
  ],
  // Who thrives here — short honest list.
  thrive: {
    heading: "Who thrives at TMF",
    items: [
      "Coachable—open to feedback and always learning",
      "Driven—self-motivated and consistent, week after week",
      "People-first—genuinely cares about clients and teammates",
      "Resilient—stays steady and keeps showing up",
    ],
  },
  // Culture / promise note tying back to the Legacy theme.
  promise: {
    heading: "Our promise to our team",
    body: "We believe the best way to protect families is to invest in the people who serve them. We'll champion your growth, celebrate your wins, and hold the same standard of care for our team that we hold for our clients. Build your legacy here—we'll build it with you.",
  },
  primaryCta: cta.join,
  primaryHref: cta.quoteHref, // careers tab of the contact form
  // TODO: wire up a real agent portal before exposing this link.
  agentLoginLabel: "Agent Login",
  agentLoginHref: "#", // TODO: replace with real agent portal URL
};

// ---------------------------------------------------------------------------
//  TESTIMONIALS  (grouped by audience)
// ---------------------------------------------------------------------------
//  TODO: replace all placeholder testimonials with real, approved quotes.
export const testimonials = {
  eyebrow: "Testimonials",
  heading: "Trusted by families—and by the agents who serve them",
  clients: {
    label: "From Our Clients",
    items: [
      {
        quote:
          "They explained everything in a way I actually understood. For the first time, I feel like my kids are truly protected no matter what happens.",
        name: "Marcus & Tasha R.",
        detail: "Term Life · Atlanta, GA",
        rating: 5,
      },
      {
        quote:
          "No pressure, no confusing jargon—just honest help finding the right policy for our budget. The whole process was easier than I expected.",
        name: "Diane K.",
        detail: "Whole Life · Columbus, OH",
        rating: 5,
      },
      {
        quote:
          "My advisor treated my family like her own. I finally have peace of mind knowing our home and our future are protected.",
        name: "Robert M.",
        detail: "Mortgage Protection · Tampa, FL",
        rating: 5,
      },
    ],
  },
  agents: {
    label: "From Our Team",
    items: [
      {
        quote:
          "The mentorship here is real. I came in brand new and never felt alone—someone was always in my corner helping me grow.",
        name: "Jasmine T.",
        detail: "Agent · 2 years with TMF",
        rating: 5,
      },
      {
        quote:
          "Strong carriers, modern tools, and a team that genuinely wants you to win. TMF gave me a path I could actually build a future on.",
        name: "David O.",
        detail: "Agent · 4 years with TMF",
        rating: 5,
      },
    ],
  },
};

// ---------------------------------------------------------------------------
//  FAQ  (mixed audiences — `audience` is "client" or "agent" for the tag)
// ---------------------------------------------------------------------------
export const faq = {
  eyebrow: "Questions & Answers",
  heading: "Everything you're wondering, answered",
  items: [
    {
      audience: "client",
      q: "How much does life insurance cost?",
      a: "It depends on your age, health, the type of policy, and how much coverage you choose—but many families are surprised by how affordable protection can be. We compare top-rated carriers to find you the best value, and your quote is always free and no-obligation.",
    },
    {
      audience: "client",
      q: "Do I need a medical exam to get covered?",
      a: "Not always. Many carriers offer no-medical-exam options that rely on a few health questions instead of a physical. Depending on your age and the coverage amount, you may be able to qualify quickly. We'll help you find the simplest path that fits your situation.",
    },
    {
      audience: "client",
      q: "How much coverage do I actually need?",
      a: "A common starting point is enough to replace income, pay off debts like a mortgage, and cover future needs such as education. Everyone's situation is different, so your advisor will help you land on an amount that protects your family without overpaying.",
    },
    {
      audience: "client",
      q: "What's the difference between term and whole life?",
      a: "Term life covers you for a set number of years and is typically the most affordable option. Whole life is permanent coverage that lasts your lifetime and builds cash value over time. Many families use a mix—we'll explain the trade-offs so you can choose with confidence.",
    },
    {
      audience: "client",
      q: "What are 'living benefits'?",
      a: "Living benefits are policy features that let you access part of your death benefit while you're still living if you experience a qualifying illness, such as a critical or chronic condition. It's protection that can help you—not just your beneficiaries.",
    },
    {
      audience: "client",
      q: "How fast can I get coverage?",
      a: "With no-medical-exam products, some applicants can be approved in a matter of days, and in some cases much sooner. Policies requiring underwriting take a bit longer. We'll set clear expectations up front based on the option you choose.",
    },
    {
      audience: "agent",
      q: "Do I need a license to join TMF?",
      a: "To sell insurance you'll need a state life insurance license. If you're not licensed yet, that's okay—we welcome motivated people who are in the process, and we'll point you toward the steps to get licensed and started.",
    },
    {
      audience: "agent",
      q: "What support and training do you provide?",
      a: "New team members get hands-on mentorship, structured training, and ongoing coaching from experienced producers, plus modern quoting and CRM tools and access to a broad shelf of carriers. You'll never be left to figure it out alone.",
    },
    {
      audience: "agent",
      q: "What does the day-to-day look like?",
      a: "Agents connect with families, understand their needs, present suitable options from our carriers, and help them get protected—then support them over time. It's relationship-driven work with the backing of a team that wants you to succeed.",
    },
    {
      audience: "agent",
      q: "How do agents earn?",
      // TODO: replace with compliance-approved earnings language before launch.
      a: "Agents are compensated based on the business they help place, with room to grow as you develop. We'll walk you through the details and expectations directly—earnings depend on your effort, licensing, and the opportunities you pursue.",
    },
  ],
};

// ---------------------------------------------------------------------------
//  FINAL CTA BAND  (two audiences)
// ---------------------------------------------------------------------------
export const finalCta = {
  tagline: brand.tagline,
  heading: "Your family's future is worth protecting today",
  client: {
    text: "Get a free, no-obligation quote and see how affordable peace of mind can be.",
    cta: cta.quote,
    href: cta.quoteHref,
  },
  agent: {
    text: "Ready to build a meaningful career with real support? Let's talk.",
    cta: cta.join,
    href: cta.joinHref,
  },
};

// ---------------------------------------------------------------------------
//  CONTACT  (email-only — no form for now)
// ---------------------------------------------------------------------------
export const contactSection = {
  eyebrow: "Get Started",
  heading: "Let's protect what matters most",
  intro:
    "Ready for a free, no-obligation quote—or curious about joining the team? Send us a note and a member of TMF Life & Legacy will personally get back to you.",
  // The big primary action: opens the visitor's email client to admin@tmflife.com.
  emailButtonLabel: "Email Us",
  // Pre-filled subject line for the mailto link.
  emailSubject: "Inquiry — TMF Life & Legacy",
  // Reassurance line under the email button.
  responseNote: "We personally read and reply to every message.",
};

// ---------------------------------------------------------------------------
//  FOOTER
// ---------------------------------------------------------------------------
export const footer = {
  blurb:
    "TMF Life & Legacy helps families protect what matters most with thoughtful life insurance and legacy planning—and gives driven agents a place to build a career worth being proud of.",
  // Social links — set href to "#" to hide or update with real profiles.
  // TODO: replace "#" with real social URLs (or remove unused items).
  socials: [
    { icon: "Facebook", label: "Facebook", href: "#" },
    { icon: "Instagram", label: "Instagram", href: "#" },
    { icon: "Linkedin", label: "LinkedIn", href: "#" },
  ],
  // Legal disclaimers — TODO: have a licensed compliance professional review.
  disclaimers: [
    "TMF Life & Legacy is an independent insurance agency. Product availability, features, and rates vary by state and are subject to carrier underwriting and approval.",
    "This website is for general informational purposes only and does not constitute financial, tax, or legal advice. Any quotes provided are estimates and not a guarantee of coverage, eligibility, or pricing.",
    "Guarantees are based on the claims-paying ability of the issuing insurance carrier. Please consult a licensed professional regarding your specific situation.",
  ],
  copyright: "© 2026 TMF Life & Legacy. All rights reserved.",
};

// ---------------------------------------------------------------------------
//  SEO  (used in app/layout.tsx)
// ---------------------------------------------------------------------------
export const seo = {
  title: "TMF Life & Legacy — Protecting What Matters Most",
  description:
    "Premium life insurance and legacy planning for families. Term, whole, IUL, final expense and mortgage protection from top-rated carriers. Get a free, no-obligation quote—or build your career with TMF.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://tmflife.com",
  ogImage: "/TMF_logo.png", // TODO: replace with a 1200×630 social share image.
};

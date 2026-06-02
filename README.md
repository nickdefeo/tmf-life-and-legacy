# TMF Life & Legacy — Website

A premium, single-scroll marketing site for **TMF Life & Legacy** — _"Protecting What Matters Most."_ Black-and-gold, editorial-luxury design, built to serve two audiences: **families looking for coverage** and **prospective agents** exploring a career.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + lucide-react**. No backend required. Deploys to Vercel out of the box.

---

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build (must pass before deploy)
npm run start    # serve the production build locally
npm run lint     # lint
```

Requires Node 18.18+ (Node 20+ recommended).

---

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → **Add New… → Project** → import the repo.
3. Vercel auto-detects Next.js. **No configuration needed** — just click **Deploy**.
4. (Optional) Add environment variables under **Project Settings → Environment Variables** (see `.env.example`). None are required for the site to work.

Every push to your main branch redeploys automatically.

---

## ✏️ Where to edit common things

| I want to change…                | Edit this file                                            |
| -------------------------------- | --------------------------------------------------------- |
| **Any text, stat, product, testimonial, FAQ, nav link, CTA label** | **`data/site-content.ts`** ← start here for almost everything |
| **Phone number / email / hours** | `data/site-content.ts` → `contact`                        |
| **The logo**                     | replace `public/TMF_logo.png` (keep the filename, or update `brand.logo.src`) |
| **Colors, fonts, shadows**       | `tailwind.config.ts` (mirrored in `app/globals.css`)      |
| **Contact email**                | `data/site-content.ts` → `contact.email` (or `NEXT_PUBLIC_CONTACT_EMAIL`) |
| **SEO title / description / OG** | `data/site-content.ts` → `seo`                            |
| **A whole section's layout**     | the matching file in `components/sections/`               |

> **Rule of thumb:** if it's _words or data_, it's in `data/site-content.ts`. If it's _the look_, it's in `tailwind.config.ts`. You rarely need to touch the components.

### Adding a product card, FAQ, or testimonial

Open `data/site-content.ts`, find the relevant array (e.g. `coverage.items`, `faq.items`, `testimonials.clients.items`), copy an existing entry, and edit it. Watch the commas. Icon names come from [lucide.dev/icons](https://lucide.dev/icons) (PascalCase, e.g. `"ShieldCheck"`).

---

## Contact

The site currently uses **email only — there is no form**. Every "Get a Free Quote" / "Join Our Team" button scrolls to the Contact section, whose primary action is a `mailto:` link to `contact.email` (defaults to `admin@tmflife.com`). Change the address in `data/site-content.ts` → `contact.email` (or set `NEXT_PUBLIC_CONTACT_EMAIL`).

If you want to add a real form later, `components/sections/ContactForm.tsx` is the place to build it (the filename is kept for that purpose).

---

## Project structure

```
app/
  layout.tsx        SEO metadata, fonts, JSON-LD, <html> shell
  page.tsx          Section order (the whole page assembly)
  globals.css       CSS variables + base styles
  Providers.tsx     Framer Motion reduced-motion config
components/
  sections/         One file per page section (Header, Hero, …, Footer)
  ui/               Shared bits (Button, Reveal, Icon, SectionHeading…)
data/
  site-content.ts   ← ALL editable copy & data
public/
  TMF_logo.png      the logo
DESIGN.md           the design system (tokens, scale, components)
tailwind.config.ts  theme tokens (colors, fonts, shadows)
.env.example        environment variables template
```

---

## ✅ TODO before launch

These are marked with `TODO:` in the code (mostly in `data/site-content.ts`):

- [ ] Confirm the **contact email** (`contact.email`) and **service area / hours**.
- [ ] Replace placeholder **stats** with real, verifiable figures.
- [ ] Replace placeholder **testimonials** (client + agent) with real, approved quotes.
- [ ] Replace **earnings language** in Careers + FAQ with **compliance-approved** wording (no income guarantees).
- [ ] Have a **licensed compliance professional review** all disclaimers and insurance copy.
- [ ] Add real **social media URLs** (or remove unused ones) in `footer.socials`.
- [ ] Wire up the **agent login** link (`careers.agentLoginHref`).
- [ ] Add a proper **1200×630 social share image** (`seo.ogImage`) — currently uses the logo.
- [ ] (Optional / later) Add a real **contact form** if email-only isn't enough.

---

## Notes on the design system

`DESIGN.md` is the source of truth for the visual language. It was authored from the TMF brand spec (the `designmd` integration was unavailable during the build — see the note at the top of that file). Brand palette, type scale, and component patterns all live there and are mirrored in `tailwind.config.ts`.

Accessibility: WCAG-AA contrast (ivory ~16:1 and gold ~7.4:1 on black), keyboard-navigable nav/accordion/form, visible gold focus rings, ARIA labels on icon controls, and full `prefers-reduced-motion` support.

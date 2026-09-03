# TMF Life & Legacy — Website

A premium, single-scroll marketing site for **TMF Life & Legacy** — _"Protecting What Matters Most."_ Deep-navy and lime-green editorial design, built to serve two audiences: **families looking for coverage** and **prospective agents** exploring a career.

> The earlier black-and-gold version is preserved at tag `v1-black-gold` / branch `backup/v1-black-gold`. To compare or revert: `git checkout v1-black-gold`.

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
| **Phone / email / address / licensed states** | `data/site-content.ts` → `contact`           |
| **The logo**                     | `components/ui/Logo.tsx` (inline SVG tree + Cormorant wordmark) — see DESIGN.md §6 |
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
  tmf-mark.svg      the tree mark, standalone
  og.png            1200x630 social share card
  TMF_logo*.png     the retired gold logo (kept for reference; unreferenced)
app/
  icon.svg          favicon (navy tile + tree)
  apple-icon.png    180x180 touch icon
DESIGN.md           the design system (tokens, scale, components)
tailwind.config.ts  theme tokens (colors, fonts, shadows)
.env.example        environment variables template
```

---

## ✅ TODO before launch

These are marked with `TODO:` in the code (mostly in `data/site-content.ts`):

- [ ] Confirm the **contact email** (`contact.email`) and **hours**.
- [ ] Confirm the **licensed states** (`contact.licensedStates`) — these drive the
      "2 States Licensed" stat, the footer, and the JSON-LD `areaServed`. The site
      no longer claims nationwide service.
- [ ] Replace placeholder **testimonials** (client + agent) with real, approved quotes.
- [ ] Replace **earnings language** in Careers + FAQ with **compliance-approved** wording (no income guarantees).
- [ ] Have a **licensed compliance professional review** all disclaimers and insurance copy.
- [ ] Add real **social media URLs** (or remove unused ones) in `footer.socials`.
- [ ] Wire up the **agent login** link (`careers.agentLoginHref`).
- [ ] (Optional / later) Add a real **contact form** if email-only isn't enough.

---

## Notes on the design system

`DESIGN.md` is the source of truth for the visual language — brand palette, contrast rules, type scale, component patterns and logo construction. Colors are mirrored in `tailwind.config.ts` and `app/globals.css`; change them in both.

Accessibility: WCAG-AA contrast (Praxeti White ~15.7:1 and lime ~12.2:1 on navy), keyboard-navigable nav/accordion, visible lime focus rings, ARIA labels on icon controls, and full `prefers-reduced-motion` support.

⚠️ One palette trap worth knowing: **Picture Book Green `#00804C` is only 3.3:1 on navy and fails AA as text.** Use it as a filled surface with light text on it, never as green type on the navy. DESIGN.md §1 has the full contrast table.

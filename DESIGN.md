# DESIGN.md — TMF Life & Legacy

A deep-navy, editorial system with a lime-green accent. Navy for trust,
permanence and calm; lime as a high-energy accent for every call to action;
Mantis green for the quieter supporting marks. Generous negative space,
high-contrast serif display type, thin green hairline rules that echo the
logo's baseline rule.

> **Revision history:** the site previously used a black-and-gold palette with
> Cinzel display caps. That version is preserved at the git tag
> `v1-black-gold` (and the `backup/v1-black-gold` branch) if you need to
> compare or revert. Tokens here are mirrored in `tailwind.config.ts` and
> `app/globals.css` — this file is the source of truth for intent.

---

## 1. Color tokens

The six brand colors, plus a few derived navy tints for depth.

| Brand name             | Token          | Value                   | Use                                  |
| ---------------------- | -------------- | ----------------------- | ------------------------------------ |
| Midnight Mirage        | `navy`         | `#001F3F`               | Primary background                   |
| —                      | `navy-deep`    | `#00152B`               | Footer, overlays, hero vignette      |
| —                      | `navy-soft`    | `#002A56`               | Alternating section background       |
| —                      | `navy-card`    | `#0A3061`               | Card surfaces                        |
| Nuit Blanche           | `navy-mid`     | `#1E488F`               | Elevated bands, mid-tone surfaces    |
| Praxeti White          | `praxeti`      | `#F6F7ED`               | Primary light text, light sections   |
| —                      | `praxeti-muted`| `#B0C0D4`               | Secondary text on navy               |
| First Colors of Spring | `lime`         | `#DBE64C`               | Primary CTA fill, accent words       |
| —                      | `lime-bright`  | `#E8F06B`               | Hover / highlight                    |
| —                      | `lime-deep`    | `#C2CE33`               | Pressed states                       |
| Mantis                 | `mantis`       | `#74C365`               | Secondary accent — icons, checkmarks |
| Picture Book Green     | `mantis-deep`  | `#00804C`               | Badge/pill **surfaces only**         |
| —                      | `hairline`     | `rgba(116,195,101,0.30)`| Hairline dividers / card borders     |

**Accent gradient** (hero accent words, brand headings) — apply with
`.text-accent-gradient` / `bg-accent-gradient`:
`linear-gradient(135deg,#DBE64C 0%,#B8DC55 40%,#74C365 100%)`

### Contrast — read this before using green as text

Measured against `navy` `#001F3F`:

| Foreground             | Ratio       | Verdict                                  |
| ---------------------- | ----------- | ---------------------------------------- |
| `praxeti` `#F6F7ED`    | **15.7:1**  | AAA — body copy                          |
| `lime` `#DBE64C`       | **12.2:1**  | AAA — and 12.2:1 the other way too       |
| `mantis` `#74C365`     | **7.8:1**   | AA — icons, checkmarks, small accents    |
| `mantis-deep` `#00804C`| **3.3:1**   | ❌ **fails AA as text**                  |

- `lime` is the rare accent that works **both** as text on navy and as a fill
  with navy text on it (the primary button). Navy-on-lime is 12.2:1.
- **`mantis-deep` (Picture Book Green) must never be used as type on navy.**
  Use it only as a filled surface with `praxeti` text on it (5.0:1).
- `navy-mid` (Nuit Blanche) as a surface with `praxeti` text is 8.8:1.

## 2. Typography

- **Cormorant Garamond** (high-contrast serif) — large editorial headlines
  (`h1`, `h2`), stat numerals, pull quotes, and the `TMF` wordmark. Weight
  500–600, tight line-height (1.05–1.15). Italic is the house accent for
  emphasised words inside a headline.
- **Inter** (sans) — body, UI, buttons, nav, and eyebrow labels. Weight 400
  body, 500–600 UI, 600 for eyebrows.

**Type scale (clamp-based, fluid):**

| Role            | Size                                   | Family    |
| --------------- | -------------------------------------- | --------- |
| Display / h1    | `clamp(2.75rem, 6vw, 5rem)`            | Cormorant |
| Section / h2    | `clamp(2rem, 4vw, 3.25rem)`            | Cormorant |
| Card title / h3 | `1.5rem`                               | Cormorant |
| Stat numeral    | `text-5xl` → `text-6xl`                | Cormorant |
| Eyebrow         | `0.75–0.875rem` caps, `0.22em` tracked | Inter 600 |
| Body            | `1rem–1.125rem`, line-height 1.7       | Inter     |
| Small / label   | `0.875rem`                             | Inter     |

## 3. Spacing & layout

- 4px base scale (Tailwind default).
- Section vertical padding: `py-20` (mobile) → `py-28` → `py-32` (desktop),
  via `.section-pad`.
- Content max width: `1200px`, gutter `px-5` → `px-8`, via `.container-tmf`.
- Grids: 1 col mobile → 2 col tablet → 3 col desktop, gap `gap-6`/`gap-8`.
- Alternate section backgrounds `navy` / `navy-soft` for rhythm; use
  `navy-mid` for a deliberately elevated band.

## 4. Components

- **Buttons**
  - _Primary:_ `lime` fill, **navy** text, weight 600, `rounded-full`, soft lime
    glow on hover (`shadow-lime`), 200–300ms transition, lift on hover.
  - _Secondary:_ transparent, 1px lime border, lime text; fills faint lime on hover.
  - _Tertiary / link:_ praxeti text with animated lime underline on hover.
- **Cards** — `navy-card` surface, 1px `hairline` border, `rounded-2xl`,
  `shadow-card`; on hover lift `-translate-y-1`, border brightens to `lime`,
  add `shadow-lime-soft`. Lime line-icon top-left.
- **Dividers** — `.accent-hairline` between sections (center-weighted green
  gradient).
- **Eyebrow label** — Inter 600 caps, `lime`, tracked `0.22em`, followed by a
  short hairline rule.
- **Inputs** — `navy-soft` fill, 1px `hairline` border, praxeti text, lime
  border + glow on focus, `rounded-lg`.
- **Accordion** — lime `+ / –` indicator, hairline separators, smooth expand.

## 5. Motion

- Scroll-reveal: fade + 16px upward translate, staggered ~80ms across grid items.
- Header: transparent over hero → solid `navy-soft` + hairline border after
  ~24px scroll.
- Stats: count-up when scrolled into view (true value exposed to screen
  readers via `sr-only`, since the animation starts at 0).
- Hover: button lime glow; card border-highlight + lift; animated lime
  underline on text links.
- All transitions 200–300ms ease-out. **Respect `prefers-reduced-motion`** —
  disable transforms/animations.

## 6. Logo & motifs

The mark is a **tree** — roots, trunk, canopy — for legacy, growth and
generations. It lives in `components/ui/Logo.tsx`:

- The tree is **inline SVG** (~2KB): a lime crown built from overlapping
  ellipses for an organic scalloped edge, painted twice with a 5px vertical
  offset so `mantis` survives only as a shadow rim along the bottom (a crown
  lit from above, from one shape definition).
- The trunk and roots use **`currentColor`**, so the lockup adapts to context:
  wrap in `text-praxeti` on navy, `text-navy` on light.
- The **`TMF` wordmark is real text** in Cormorant Garamond, not traced
  outlines — same webfont as the headlines, and it stays selectable.
- `Logo` renders the full vertical lockup (tree / TMF / rule / LIFE & LEGACY);
  `TmfMark` renders the tree alone for tight spaces.

Standalone assets, all generated from the same geometry:
`public/tmf-mark.svg` (tree), `app/icon.svg` (favicon — navy rounded tile so
it reads on any tab colour), `app/apple-icon.png` (180×180),
`public/og.png` (1200×630 share card).

Echo the mark throughout: **leaf/canopy curves**, **thin green rule lines**,
and a very faint green radial glow (`.radial-glow`) behind the hero and on
dark CTA bands. Keep lime as an accent, never a flood.

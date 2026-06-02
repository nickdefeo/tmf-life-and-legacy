# DESIGN.md — TMF Life & Legacy

> **Source note:** The `designmd` MCP server was unavailable during the build
> (HTTP 403 — no `DESIGNMD_API_KEY` configured), so this design system was
> authored directly from the TMF brand spec rather than downloaded from a kit.
> It is the **source of truth** for tokens, scale, and component patterns.
> The tokens here are mirrored in `tailwind.config.ts` and `app/globals.css`.

A dark, cinematic, editorial-luxury system. Black for permanence and
sophistication; gold as a restrained accent for trust and prestige. Generous
negative space, high-contrast serif display type, thin gold hairline rules that
echo the logo's laurel-and-star motifs.

---

## 1. Color tokens

| Token          | Value                     | Use                                   |
| -------------- | ------------------------- | ------------------------------------- |
| `--black`      | `#0A0A0A`                 | Primary background                    |
| `--black-soft` | `#111111`                 | Alternating section background        |
| `--black-card` | `#16140F`                 | Card surfaces (warm-tinted)           |
| `--gold`       | `#C9A24B`                 | Primary gold — borders, icons, labels |
| `--gold-bright`| `#E8C766`                 | Highlights / hover / focus            |
| `--gold-deep`  | `#9A7B2E`                 | Shadows / pressed states              |
| `--ivory`      | `#F5EFE0`                 | Primary light text                    |
| `--ivory-muted`| `#C9C2B2`                 | Secondary text                        |
| `--gold-line`  | `rgba(201,162,75,0.28)`   | Hairline dividers / card borders      |

**Metallic gold** (hero accent words, brand headings) — apply with
`background-clip: text`:
`linear-gradient(135deg,#BF953F 0%,#FCF6BA 35%,#B38728 60%,#FBF5B7 80%,#AA771C 100%)`

**Contrast (WCAG):** ivory `#F5EFE0` on black `#0A0A0A` ≈ 16:1 (AAA). Gold
`#C9A24B` on black ≈ 7.4:1 (AA for normal text, AAA for large). Use gold for
large/bold text and accents; use ivory for body copy. Never put gold body text
on `--black-card` at small sizes.

## 2. Typography

- **Cinzel** (serif caps) — eyebrows, brand-echo labels, stat numerals, small
  caps. Letter-spacing `0.28em` for eyebrows.
- **Cormorant Garamond** (high-contrast serif) — large editorial headlines
  (`h1`, `h2`). Weight 500–600, tight line-height (1.05–1.15).
- **Inter** (sans) — body, UI, buttons, nav. Weight 400 body, 500–600 UI.

**Type scale (clamp-based, fluid):**

| Role            | Size                                   | Family    |
| --------------- | -------------------------------------- | --------- |
| Display / h1    | `clamp(2.75rem, 6vw, 5rem)`            | Cormorant |
| Section / h2    | `clamp(2rem, 4vw, 3.25rem)`            | Cormorant |
| Card title / h3 | `1.5rem`                               | Cormorant |
| Eyebrow         | `0.75–0.875rem` caps, `0.28em` tracked | Cinzel    |
| Body            | `1rem–1.125rem`, line-height 1.7       | Inter     |
| Small / label   | `0.875rem`                             | Inter     |

## 3. Spacing & layout

- 4px base scale (Tailwind default).
- Section vertical padding: `py-20` (mobile) → `py-28` → `py-32` (desktop).
- Content max width: `1200px`, gutter `px-5` → `px-8`.
- Grids: 1 col mobile → 2 col tablet → 3 col desktop, gap `gap-6`/`gap-8`.
- Alternate section backgrounds `--black` / `--black-soft` for rhythm.

## 4. Components

- **Buttons**
  - _Primary:_ gold fill (`--gold`), black text, weight 600, radius `rounded-full`,
    soft gold glow on hover (`shadow-gold`), 200–300ms transition, scale 1.02 on hover.
  - _Secondary:_ transparent, 1px gold border, gold text; fills faint gold on hover.
  - _Tertiary / link:_ ivory text with animated gold underline on hover.
- **Cards** — `--black-card` surface, 1px `--gold-line` border, `rounded-2xl`,
  `shadow-card`; on hover lift `-translate-y-1`, border brightens to `--gold`,
  add `shadow-gold-soft`. Gold line-icon top-left.
- **Dividers** — `.gold-hairline` between sections (center-weighted gold gradient).
- **Eyebrow label** — Cinzel caps, gold, tracked `0.28em`, often with a short
  gold rule or sparkle (✦) beside it.
- **Inputs** — dark `--black-soft` fill, 1px `--gold-line` border, ivory text,
  gold border + glow on focus, `rounded-lg`.
- **Accordion** — gold `+ / –` indicator, hairline separators, smooth height
  expand/collapse.

## 5. Motion

- Scroll-reveal: fade + 16px upward translate, staggered ~80ms across grid items.
- Header: transparent over hero → solid `--black-soft` + gold hairline border
  after ~24px scroll.
- Stats: count-up when scrolled into view.
- Hover: button gold glow; card border-highlight + lift; animated gold underline
  on text links.
- All transitions 200–300ms ease-out. **Respect `prefers-reduced-motion`** —
  disable transforms/animations.

## 6. Motifs

Echo the logo throughout: **laurel sprigs**, a **four-point sparkle/star (✦)**,
and **thin gold rule lines**. Use a very faint gold radial glow behind the hero
logo and on dark CTA bands. Keep gold as accent, never a flood.

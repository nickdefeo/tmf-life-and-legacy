# DESIGN.md — TMF Life & Legacy

A **blue and green** editorial system. Blue carries the ground and structure
(Midnight Mirage base, Nuit Blanche for elevated bands); green carries every
accent (solid Mantis for type, icons and borders; Picture Book Green for CTA
fills). Generous negative space, high-contrast serif display type, thin green
hairline rules.

**Yellow is held back.** First Colors of Spring `#DBE64C` remains a brand
colour but is deliberately absent from the UI — no fills, borders or labels.
Reach for it only as a rare, small highlight.

**Tone: sober, not playful.** This is a life insurance agency. No gradients in
type, no decorative flourishes, no more than one accent colour in a given
block. Restraint reads as trustworthy.

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
| Nuit Blanche           | `navy-mid`     | `#1E488F`               | Elevated bands — currently the Stats bar |
| Praxeti White          | `praxeti`      | `#F6F7ED`               | Primary light text, light sections   |
| —                      | `praxeti-muted`| `#B0C0D4`               | Secondary text on navy               |
| First Colors of Spring | `lime`         | `#DBE64C`               | **Held in reserve — unused in the UI** |
| —                      | `lime-bright`  | `#E8F06B`               | Hover / highlight                    |
| —                      | `lime-deep`    | `#C2CE33`               | Pressed states                       |
| Mantis                 | `mantis`       | `#74C365`               | **Accent type**, icons, checks, borders |
| Picture Book Green     | `mantis-deep`  | `#00804C`               | **Primary CTA fill** (white text)    |
| —                      | `mantis-deeper`| `#006B40`               | CTA hover / pressed                  |
| —                      | `hairline`     | `rgba(116,195,101,0.30)`| Hairline dividers / card borders     |

**No gradients in type.** Accent words, stat numerals and step numbers are
**solid `mantis` `#74C365`**. An earlier revision used a lime→mantis gradient
on text; it read playful, which is wrong for a life insurance agency. Solid
only.

### Contrast — read this before using green as text

Measured against `navy` `#001F3F`:

| Foreground             | Ratio       | Verdict                                  |
| ---------------------- | ----------- | ---------------------------------------- |
| `praxeti` `#F6F7ED`    | **15.3:1**  | AAA — body copy                          |
| `praxeti-muted`        | **8.9:1**   | AAA — secondary copy                     |
| `mantis` `#74C365`     | **7.7:1**   | AA — accent type, icons, borders         |
| `lime` `#DBE64C`       | **12.2:1**  | passes, but held in reserve — see above   |
| `mantis-deep` `#00804C`| **3.3:1**   | ❌ **fails AA as text**                  |

- **`mantis-deep` (Picture Book Green) must never be used as type.** It is a
  fill. `praxeti` on it is **4.6:1**, and on `mantis-deeper` (hover) **6.1:1**.
- ⚠️ **Never put navy text on `mantis-deep` — that is only 3.3:1 and fails AA.**
  The primary button is Picture Book Green with **Praxeti White** text.
- `navy-mid` (Nuit Blanche) with `praxeti` is 8.2:1, `praxeti-muted` 4.8:1, and
  `mantis` 4.1:1 — so on that band, green is for **large text only**.

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
  - _Primary:_ `mantis-deep` (Picture Book Green) fill, **`praxeti` white**
    text, weight 600, `rounded-full`, green glow on hover (`shadow-accent`),
    darkening to `mantis-deeper`, 200–300ms transition, lift on hover.
  - _Secondary:_ transparent, 1px `mantis` border, `mantis` text; fills faint
    green on hover.
  - _Tertiary / link:_ praxeti text with animated green underline on hover.
- **Cards** — `navy-card` surface, 1px `hairline` border, `rounded-2xl`,
  `shadow-card`; on hover lift `-translate-y-1`, border brightens to `lime`,
  add `shadow-accent-soft`. Mantis line-icon top-left.
- **Dividers** — `.accent-hairline` between sections (center-weighted green
  gradient).
- **Eyebrow label** — Inter 600 caps, `mantis`, tracked `0.22em`, followed by a
  short hairline rule.
- **Inputs** — `navy-soft` fill, 1px `hairline` border, praxeti text, `mantis`
  border + glow on focus, `rounded-lg`.
- **Accordion** — `mantis` `+ / –` indicator, hairline separators, smooth expand.

## 5. Motion

- Keep motion minimal and quiet; nothing bouncy or elastic.
- Scroll-reveal: fade + 16px upward translate, staggered ~80ms across grid items.
- Header: transparent over hero → solid `navy-soft` + hairline border after
  ~24px scroll.
- Stats: count-up when scrolled into view (true value exposed to screen
  readers via `sr-only`, since the animation starts at 0).
- Hover: button green glow; card border-highlight + lift; animated green
  underline on text links.
- All transitions 200–300ms ease-out. **Respect `prefers-reduced-motion`** —
  disable transforms/animations.

## 6. Logo & motifs

The mark is a **hollow laurel wreath crowned by a four-point star**. It carries
the vocabulary of the retired gold mark — laurel, star, arch — into the new
palette. Laurel means honour and legacy, which is the brand; a generic tree
does not.

It lives in `components/ui/Logo.tsx`:

- Two laurel branches sweep up and inward from a shared base. Leaves ride each
  stem at angles derived from the curve's **tangent**, so spacing stays even
  and the sweep reads as growth rather than a fan. Leaf length tapers toward
  the apex.
- **No trunk inside the wreath.** A vertical shaft with a flared base reads as
  a sword or torch — award/military iconography, wrong for life insurance. The
  original gold mark framed the *TMF letters*, not a tree.
- Emitted as real SVG **béziers** — each leaf is two cubic segments, each stem
  one stroked cubic. 19 elements, ~2.4KB, small enough to inline and still
  hand-editable.

Two **densities**, because a scaled-down full mark turns to mush below ~32px:

| `detail`  | Leaves/side | Use            |
| --------- | ----------- | -------------- |
| `full`    | 8           | Display sizes  |
| `compact` | 5, heavier  | Favicon, ≤32px |

Two **tones** — this one is not optional:

| `tone`  | Colors        | Background     |
| ------- | ------------- | -------------- |
| `light` | lime + mantis | navy           |
| `dark`  | navy + green  | Praxeti White  |

⚠️ **Lime on Praxeti White is 1.3:1** — the wreath would effectively disappear.
Any placement on a light section must pass `tone="dark"`.

`Logo` renders the full vertical lockup (wreath / TMF / rule / LIFE & LEGACY);
`TmfMark` renders the wreath alone. The **`TMF` wordmark is real text** in
Cormorant Garamond, not traced outlines — same webfont as the headlines, and
it stays selectable. Lockup text uses `currentColor`, so wrap in
`text-praxeti` on navy or `text-navy` on light, and pass the matching `tone`.

Standalone assets, all generated from the same control points:
`public/tmf-mark.svg` (wreath), `app/icon.svg` (favicon — compact wreath on a
navy rounded tile so it reads on any tab colour), `app/apple-icon.png`
(180×180), `public/og.png` (1200×630 share card).

Echo the mark throughout: **laurel leaf curves**, the **four-point star** as a
small accent, **thin green rule lines**, and a very faint green radial glow
(`.radial-glow`) behind the hero and on dark CTA bands. Keep green as an accent, never a flood.

# TMF Life & Legacy — Brand & Logo Brief

**Purpose of this document:** a complete handoff for a designer taking over the
identity work. Part 1 is the locked colour scheme and type system already
implemented on the site. Part 2 is the logo brief, including an honest record
of what has already been tried and rejected. Part 3 is a copy-pasteable prompt.

---

## 1. The company

| | |
|---|---|
| **Name** | TMF Life & Legacy |
| **Tagline** | Protecting What Matters Most. |
| **Legal** | A d/b/a of National Life Advisors LLC, a licensed life, accident and health insurance agency |
| **Type** | Independent life insurance agency (not a carrier — it shops multiple carriers) |
| **Licensed in** | New York and Florida only |
| **Office** | Pompano Beach, FL |
| **Carriers** | Americo, AIG, Transamerica, John Hancock, National Life Group |
| **Products** | Term Life, Whole Life, Indexed Universal Life (IUL), Final Expense, Mortgage Protection, Living Benefits |

**Two audiences, equally important:**
1. **Families** buying coverage — often first-time buyers, price-sensitive, wary of being sold to.
2. **Prospective agents** — the agency actively recruits, so the brand must also read as a credible employer.

### Tone — the single most important constraint

**Sober. Trustworthy. Permanent. Editorial.**

This is a company people buy from while thinking about their own death and
their children's future. The identity must feel like an institution that will
still be there in thirty years.

**Explicitly not:** playful, bouncy, startup-y, "friendly tech", clip-art,
gradient-heavy, or illustrative. No rounded cartoon shapes. Restraint reads as
trustworthy; decoration reads as inexperience.

---

## 2. Colour scheme — LOCKED, do not substitute

Six brand colours. These are fixed; the logo must be built from this palette.

| Brand name | Hex | Role |
|---|---|---|
| **Midnight Mirage** | `#001F3F` | Primary background. The brand's base colour. |
| **Nuit Blanche** | `#1E488F` | Elevated surfaces, mid-tone bands |
| **Praxeti White** | `#F6F7ED` | Primary text on navy; light section backgrounds |
| **First Colors of Spring** | `#DBE64C` | CTA fills and borders **only** — never type |
| **Mantis** | `#74C365` | Accent type, icons, checkmarks |
| **Picture Book Green** | `#00804C` | Filled badge/pill surfaces **only** — never type |

Supporting tints derived for depth (available, not required in the logo):
`#00152B` deep navy · `#002A56` soft navy · `#0A3061` card navy ·
`#B0C0D4` muted text · `#E8F06B` lime hover · `#C2CE33` lime pressed

### Measured contrast — these numbers are the real constraints

Against navy `#001F3F`:

| Foreground | Ratio | Verdict |
|---|---|---|
| Praxeti White `#F6F7ED` | **15.7:1** | AAA |
| First Colors of Spring `#DBE64C` | **12.2:1** | AAA (both directions) |
| Mantis `#74C365` | **7.8:1** | AA |
| Picture Book Green `#00804C` | **3.3:1** | ❌ fails AA as type |

Against Praxeti White `#F6F7ED`:

| Foreground | Ratio | Verdict |
|---|---|---|
| Midnight Mirage `#001F3F` | **15.7:1** | AAA |
| Nuit Blanche `#1E488F` | **8.3:1** | AAA |
| Picture Book Green `#00804C` | **4.7:1** | AA (large text / graphics) |
| Mantis `#74C365` | **2.0:1** | ❌ effectively invisible |
| First Colors of Spring `#DBE64C` | **1.3:1** | ❌ **completely invisible** |

> ⚠️ **The trap that will bite you:** the lime `#DBE64C` is the brand's most
> recognisable colour and it is *invisible on white* (1.3:1). Any logo built
> primarily from lime will vanish on letterhead, invoices, a white slide, or a
> light website section. **The logo needs two colourways** — see §4.

### Gradients

**None in type.** A previous revision used a lime→Mantis gradient on headlines
and stat numerals; it was rejected for reading playful. Type is solid colour
only. The logo should likewise be **flat solid colour** — no gradients, no
bevels, no drop shadows, no metallic effects.

---

## 3. Typography — already implemented

| Role | Typeface | Notes |
|---|---|---|
| Display headlines, stat numerals, the **TMF** wordmark | **Cormorant Garamond**, weight 500–600 | High-contrast serif. Italic is the house device for an emphasised word inside a headline. |
| Body, UI, buttons, nav, eyebrow labels | **Inter**, 400 body / 500–600 UI | Eyebrows are uppercase, tracked `0.22em`. |

Both are Google Fonts, already loaded on the site. **The wordmark should stay
Cormorant Garamond** so it matches the headlines — or, if you letter it
custom, it must sit comfortably beside Cormorant.

---

## 4. Logo brief

### What exists today

The **retired original** was gold: a serif `TMF` monogram framed by two laurel
branches, an arch above, an eight-point star at the apex, `LIFE & LEGACY`
beneath a rule, and `Protecting What Matters Most` on a lower ribbon. It was a
raster PNG (288KB), gold-gradient filled, and unusable in the new palette.

**Equity worth preserving from it:** the **laurel**, the **star**, the **arch**,
and the **serif wordmark**. Those four elements are what made it recognisable.
It is currently kept at `public/TMF_logo_original.png` for reference.

### Deliverables

1. **Primary lockup** — mark + `TMF` + rule + `LIFE & LEGACY`. Vertical
   arrangement preferred (fits the site header), horizontal variant welcome.
2. **Mark alone** — must be recognisable with no wordmark.
3. **Favicon / app-icon variant** — a simplified drawing, not a scaled copy.
4. **Two colourways** (see the contrast tables above):
   - **On navy:** lime and/or Mantis mark, Praxeti White wordmark.
   - **On light:** navy and/or Picture Book Green. Lime is unusable here.
5. **One-colour versions** — solid navy, and solid white (knockout), for fax,
   embroidery, engraving and single-colour print.
6. **Format: SVG**, flat fills, no embedded raster, no gradients, no filters.
   Reasonably few paths — it is inlined into a React component.

### Hard requirements

- **Legible at 16×16 px.** The site uses it as a browser favicon. This is the
  constraint that kills most detailed marks.
- **Works on navy AND on Praxeti White**, per the two colourways.
- Must not depend on a gradient, shadow or texture to read.
- Wordmark must be legible at a header height of roughly 44px.

### What has already been tried and rejected — please don't repeat these

| Attempt | Why it failed |
|---|---|
| **Round tree**, canopy of overlapping circles, white trunk | Generic clip-art. Featureless mass, no negative space, no craft. Looked like a landscaping company. |
| **Radial leaf fan** from a single point | Read as a sunflower/daisy — mechanical radial petals with a hollow centre. |
| **Tapered-fan tree** | Read as a tulip. Flat-bottomed petal arrangement. |
| **Laurel wreath with a vertical trunk through it** | The trunk — a straight shaft with a flared base — read as a **sword or torch**. Award/military iconography, wrong for life insurance. Tried three trunk proportions; all had this problem. |
| **Laurel wreath, hollow, with apex star** | Closest of the attempts and technically sound, but judged not good enough. Currently in the repo as a placeholder. |
| **Two-tone leaves (lime outer / Mantis inner)** | The tonal difference is invisible below ~48px; it buys nothing and just complicates the file. |

**Pattern in the failures:** every literal-plant approach drifted toward a
generic or unintentionally comic form. Directions not yet explored that may be
more promising: a **monogram-led** mark where the `TMF` letterforms carry the
identity with the botanical element strictly supporting; a **geometric
abstraction** of shelter, roots or generational layers; or a **crest/seal**
form, which suits the institutional tone and the laurel equity.

### Reference notes

- A comp exists showing a green tree above a serif `TMF` (the client's initial
  visual direction). Treat it as a colour/tone reference rather than a
  prescription — attempts to execute it literally are what produced the
  rejected marks above.
- The word "Legacy" is doing real work in the name. Generational continuity,
  inheritance and permanence are the concepts to mine — not "growth" in the
  startup sense.

---

## 5. Copy-pasteable prompt

> Design a logo for **TMF Life & Legacy**, an independent life insurance agency
> (a d/b/a of National Life Advisors LLC) licensed in New York and Florida,
> based in Pompano Beach. Tagline: *Protecting What Matters Most.* It sells
> Term, Whole Life, Indexed Universal Life, Final Expense and Mortgage
> Protection, and it also recruits agents, so the brand must read as both a
> trustworthy advisor and a credible employer.
>
> **Tone: sober, institutional, permanent, editorial.** People engage this
> brand while thinking about their own death and their children's future. It
> must feel like an institution that will still exist in thirty years.
> Explicitly avoid: playful, bouncy, startup-y, illustrative, clip-art,
> cartoon-rounded, or gradient-heavy treatments. Restraint reads as trustworthy.
>
> **Use only this palette:** Midnight Mirage `#001F3F` (primary/base),
> Nuit Blanche `#1E488F`, Praxeti White `#F6F7ED`, First Colors of Spring
> `#DBE64C`, Mantis `#74C365`, Picture Book Green `#00804C`.
> Flat solid fills only — no gradients, bevels, shadows or metallic effects.
>
> **Critical technical constraint:** the lime `#DBE64C` has only **1.3:1**
> contrast on Praxeti White and is invisible there, and Mantis is only 2.0:1.
> So deliver **two colourways**: one for navy backgrounds (lime/Mantis mark,
> Praxeti White wordmark) and one for light backgrounds (navy / Picture Book
> Green). Also supply solid one-colour navy and knockout-white versions.
>
> **The previous logo** was gold: a serif `TMF` monogram framed by two laurel
> branches, an arch above, an eight-point star at the apex, and `LIFE & LEGACY`
> beneath a rule. Preserve the equity in the **laurel, the star, the arch and
> the serif wordmark** — carry that vocabulary into the new palette rather than
> replacing it wholesale.
>
> **Wordmark:** set `TMF` in **Cormorant Garamond** (500–600), which is the
> site's display face, with `LIFE & LEGACY` beneath a hairline rule in a
> tracked sans (Inter). Custom lettering is fine if it sits comfortably beside
> Cormorant.
>
> **Deliver:** primary vertical lockup (mark + TMF + rule + LIFE & LEGACY); a
> horizontal variant; the mark alone; and a **simplified favicon drawing that
> is legible at 16×16 px** — a separate drawing, not a scaled-down copy of the
> full mark. Format: **SVG**, flat fills, no embedded raster, modest path count
> (it gets inlined into a React component).
>
> **Already tried and rejected — do not repeat:** a round tree with a canopy of
> overlapping circles (generic clip-art); a radial leaf fan (read as a
> sunflower); a tapered fan (read as a tulip); and a laurel wreath with a
> vertical trunk through the middle (the trunk read as a **sword or torch** at
> every proportion tested). Every literal-plant approach drifted toward a
> generic or unintentionally comic form. **Stronger unexplored directions:** a
> monogram-led mark where the `TMF` letterforms carry the identity and any
> botanical element strictly supports; a geometric abstraction of shelter,
> roots or generational layers; or a **crest/seal** form, which suits both the
> institutional tone and the existing laurel equity.
>
> Mine the word **"Legacy"** — generational continuity, inheritance,
> permanence — rather than "growth" in the startup sense.

---

## 6. Where things live in the codebase

| Item | Path |
|---|---|
| Colour tokens | `tailwind.config.ts` + `app/globals.css` (mirrored) |
| Full design system | `DESIGN.md` |
| Current placeholder logo | `components/ui/Logo.tsx` (inline SVG + text) |
| Standalone mark | `public/tmf-mark.svg` |
| Favicon / touch icon | `app/icon.svg`, `app/apple-icon.png` |
| Social share card | `public/og.png` |
| Retired gold original | `public/TMF_logo_original.png` |
| All site copy and data | `data/site-content.ts` |

**To drop in a finished logo:** replace the SVG paths in
`components/ui/Logo.tsx` (it already supports `tone` light/dark and `detail`
full/compact props), then regenerate `public/tmf-mark.svg`, `app/icon.svg`,
`app/apple-icon.png` and `public/og.png` to match.

The pre-revamp black-and-gold site is preserved at git tag `v1-black-gold`.

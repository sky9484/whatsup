---
name: whatsvp-design
description: Whatsvp! design system — painted-city editorial. Tokens, texture recipe, art-placement rules, and layout grammar for the Whatsvp! landing page. Use whenever building or reviewing Whatsvp! UI so every section reads as one hand-made object; art comes from /public/art/, UI lives in its negative space.
---

# Whatsvp! design system — "painted city, printed UI"

The page is a **paper dossier laid over a painted city**. Organic, painterly life comes
exclusively from the WebP illustrations in `/public/art/`. Everything the user can read or
click is **printed matter**: paper-white panels, 1px ink hairlines, mono eyebrows, one lime
action color. SVG never draws illustrations — it is only for icons, hairlines, dot grids,
and the grain filter. The tension between loose paint and strict print is the identity.

## 1 · Tokens (single source of truth)

Define once on `:root`; never hard-code a hex twice.

```css
:root{
  /* surfaces */
  --paper:      #F6F3EC;   /* page background */
  --panel:      #FCFAF4;   /* paper-white UI panels (cards, chips, stats) */
  --panel-2:    #EFEAE0;   /* recessed wells, table stripes */
  /* ink */
  --ink:        #1E2A3A;   /* body text, default ink */
  --primary:    #0F3361;   /* headings, borders, key UI, links */
  --primary-soft: rgba(15,51,97,.62);
  /* action + accents */
  --cta:        #A6C10B;   /* THE action color. Buttons, live confirmations only */
  --terra:      #D66A3A;   /* accent — italics, underline swashes, hot labels */
  --coral:      #E7785A;   /* lighter companion accent — dots, tags, hovers */
  /* lines */
  --rule:       rgba(15,51,97,.18);  /* hairlines */
  --rule-soft:  rgba(15,51,97,.09);
  /* type */
  --font-display:"Fraunces", Georgia, serif;
  --font-sans:  "Space Grotesk", "Segoe UI", system-ui, sans-serif;
  --font-mono:  "IBM Plex Mono", Consolas, monospace;
  /* rhythm */
  --pad: clamp(20px, 4.2vw, 56px);
  --section-gap: clamp(96px, 10vw, 140px);   /* NEVER below 96px */
  --plate-max: 1360px;
  --ease-out: cubic-bezier(.22,.9,.28,1);
}
```

Color duties are strict:
- `--cta` appears **only** on primary actions and success/live states. If lime shows up in
  decoration, it stops meaning "act here."
- `--terra`/`--coral` are warmth, never actions and never body text (contrast ≈3:1 — display
  sizes and decoration only).
- Text on `--cta` fills is always `--primary` (≈6:1). Text on `--paper`/`--panel` is `--ink`
  or `--primary`. Never white text on lime, never terracotta body copy.

## 2 · Typography

| Role | Face | Rules |
|---|---|---|
| Display / H1 / plate titles | Fraunces | weight 540–640, `opsz` high, letter-spacing −0.02em, line-height ≤1.05. Italic swashes in `--terra` for the one emphasized word. |
| UI, body, buttons | Space Grotesk | 400–700. Body 15–17px, line-height 1.6. |
| Eyebrows, labels, data | IBM Plex Mono | 10–13px, 500–600, letter-spacing .10–.18em, UPPERCASE. Every section opens with a mono eyebrow. |

Scale: H1 `clamp(46px, 6.4vw, 92px)` · plate titles `clamp(34px, 4.6vw, 66px)` ·
card titles 15–21px · mono meta 10–12px.

## 3 · Texture recipe

1. **Grain, site-wide**: fixed full-viewport SVG `feTurbulence` (fractalNoise, baseFrequency
   ≈0.9, 2 octaves, desaturated) at **opacity .035**, `mix-blend-mode:multiply`,
   `pointer-events:none`, above content (z-index ~2000). One element, once.
2. **Paint**: the WebP art itself — never recreate its look with CSS filters or SVG blobs.
3. **Print**: 1px `--rule` hairlines, corner tick marks on plates, dot grids
   (`radial-gradient(var(--rule) 1px, transparent 1px)` at 18–24px spacing) as quiet fields.
4. **Shadows**: hard offsets only — `0 2px 0 var(--primary)` on lime buttons, `-5px 7px 0
   rgba(15,51,97,.14)` on hover lifts. **No soft/heavy blur shadows, no glows.**
5. **Gradients**: banned on interactive elements. Allowed only as ≤8% scrims over art to
   protect text legibility.

## 4 · Art usage — /public/art/ is the only paintbrush

Mapping (see `public/art/mapping.csv` for provenance):

| Asset | Home | Treatment |
|---|---|---|
| `hero-city.webp` | Hero collage | Full-bleed inside a 1.5px `--primary` bordered, 18px-radius frame, slight rotate (≤1deg). HTML pins/cards overlay it. |
| `map-wash.webp` | `#explore` map panel | `object-fit:cover` underlay at **opacity .16–.30, multiply**, so printed pins/legend stay dominant. |
| `community-scene.webp` | Community plate | Framed feature image beside the paths list. |
| `wallet-scene.webp` | `#wallet` | Framed scene paired with (not behind) the navy wallet panel. |
| `about-collage.webp` | About band | Background at low opacity or side collage; text on `--panel` chips above it. |
| `spot-*.webp` | Feature cards / steps | Small emblems ~64–96px, transparent-feel crop, one per card. |
| `shape-*.webp` | Section corners | Decorative, `z-index:0`, opacity .5–.8, never overlapping text blocks. |
| `banner-*.webp` | Ticker/dividers | Very-wide strips as section separators, height ≤120px, `object-fit:cover`. |

Placement laws:
- Art always sits in a **printed frame** (1–1.5px `--primary` border, radius 14–20px) or
  bleeds behind a plate at ≤30% opacity — never floats naked at 100% over `--paper`.
- UI overlays the art's **negative space**; if the art has none, put UI on `--panel` chips
  with 1px `--rule` borders on top of it.
- `loading="lazy"` below the fold; explicit `width`/`height` or `aspect-ratio` to prevent
  CLS; meaningful `alt` on scene images, `alt=""` + `aria-hidden` on decoration.
- Never draw new illustrations in SVG. Icons stay 24px-grid stroke icons in `currentColor`.

## 5 · Layout grammar

- **Plates**: each numbered section is a bordered plate — 1.5px `--primary` border, 20px
  radius, corner tick marks, `--paper` fill. Head row = mono eyebrow + Fraunces title
  (+ italic terra word) + right-aligned mono note. Hairline under the head.
- **Panels**: cards/chips/stats are `--panel` with 1px `--rule` borders, radius 12–16px,
  13–16px padding. Hover: border→`--primary` + translateY(−2…−3px) + hard offset shadow.
- **Spacing**: `--section-gap` (≥96px) between plates; inside plates `clamp(22px,3.4vw,46px)`.
- **Buttons**: pill (999px), min-height 48px (44px+ tap targets everywhere). Primary =
  `--cta` fill / `--primary` text+border / `0 2px 0 --primary`. Ghost = transparent,
  `--primary` text+border. Flat fills only.
- **Responsive**: two-column grids collapse to one column ≤880px; art frames keep
  `aspect-ratio` and move above their copy; ≥375px must be horizontal-scroll-free (except
  intentional snap rows), type floors: body ≥15px, mono ≥10px.
- **Motion**: 150–300ms `--ease-out` micro-moves; ≤8s ambient float on collage cards only.
  Everything inside `@media (prefers-reduced-motion: no-preference)` or neutralized by a
  `reduce` block. Focus: `:focus-visible` 2px `--primary` outline, 3px offset — always visible.

## 6 · Voice

Mono eyebrows are wayfinding (`COMMUNITY · CITY · CHAIN`). Titles state a benefit in plain
words with one italic terra word (`Money that moves like a message.`). Buttons say what
happens: "Get started — it's free", "Explore the map". Numbers get mono treatment. No
crypto jargon above the fold; "no seed phrase, ever" is the promise.

## 7 · Definition of done (per section)

1. Art placed per §4 map; UI in negative space; zero SVG illustrations remain.
2. All hexes are `var(--…)` tokens; lime only on actions.
3. Screenshot at **1440px and 375px**; list top-3 gaps vs reference; fix; re-screenshot.
4. Focus rings visible, reduced-motion respected, no horizontal scroll at 375px.
5. Grain at .035 present exactly once.

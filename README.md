# Whatsup!

A community social OS landing page — an illustrated, watercolor Kuala Lumpur city with
floating UI widgets over it. City discovery, events, community, finance and live rooms.

- **Single static page:** [`index.html`](index.html) (hand-written CSS + a little vanilla JS + GSAP for reveals).
- **Art & UI assets:** `public/art/` (painted WebP scenes and avatars) and
  `public/assets/` (isometric city backgrounds, icon sprite, illustrations, reference widgets).
- **Brand:** navy `#0F2E8A` · lime `#B7FF2A` · paper `#F7F1E8` · coral `#D96A4A`,
  Space Grotesk (display) + DM Sans (body).

## Run locally

Any static server works, e.g.:

```bash
npm run serve        # http-server on :4173
# or: python -m http.server 4173
```

## Tailwind CSS

Tailwind is wired with the brand tokens (`bg-navy`, `text-lime`, `font-display`,
`rounded-xl2`, `shadow-soft`/`shadow-float`, …). Preflight is **off** so it coexists
with the page's own reset.

- **Now (zero build):** `index.html` loads the Tailwind Play CDN with the config inline —
  utilities work instantly. Fine for previewing; the CDN prints a "not for production" warning.
- **Production:** compile a real stylesheet and drop the CDN.

  ```bash
  npm install
  npm run build:css     # -> public/tailwind.css  (npm run watch:css to rebuild on change)
  ```

  Then in `index.html` replace the `<script src="https://cdn.tailwindcss.com">…</script>`
  block with:

  ```html
  <link rel="stylesheet" href="public/tailwind.css">
  ```

Config lives in [`tailwind.config.js`](tailwind.config.js); the entry file is
[`src/tailwind.css`](src/tailwind.css).

## Notes

- Source PNG exports are gitignored; only the optimized WebP assets are committed.
- `node_modules/` is gitignored — run `npm install` before building CSS.

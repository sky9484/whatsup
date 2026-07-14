---
name: whatsvp-design
description: Build or review the Whatsup! full-bleed builder-city experience. Use for Whatsup! landing-page, responsive-art, Web3 community, wallet, map, event, live-stream, or 53-asset interaction work so the product stays Sui-first, chain-agnostic, watercolor-led, accessible, and edge-to-edge.
---

# Whatsup! builder-city system

Create a living protocol atlas for Web3 developers, Web2 engineers, AI builders, founders, and communities. Treat the watercolor city as the interface, not as decoration behind centered marketing cards.

## Preserve the product thesis

- Lead with `Sui-first, chain-agnostic` and show Solana, Ethereum, and Bitcoin as supported networks.
- Use USDC, USDT, and MYRC as primary settlement currencies.
- Use SUI, SOL, ETH, and BTC as primary crypto assets.
- Write about shipping, protocols, AI agents, contributor work, founder rooms, guilds, demos, and community decisions. Do not drift toward designer-focused copy.
- Keep money actions simulated in the static experience. Never imply a transaction was broadcast.

## Compose full bleed

- Use the full viewport width. Anchor copy and actions to responsive edge gutters with `clamp()`.
- Avoid a centered max-width container as the dominant section shape.
- Make the hero at least `100svh` minus navigation and let the art cover the viewport.
- Alternate edge relationships: copy against one edge, product surface or art bleeding to another.
- Recompose below tablet widths. Do not merely shrink desktop grids.
- Permit horizontal overflow only inside deliberate snap or drag rails.

## Art direct images

- Use `<picture>` with mobile, tablet, and desktop sources for hero-scale art.
- Give every supplied reference asset a 480px and 960px responsive derivative plus the original fallback.
- Set `srcset`, `sizes`, explicit dimensions, descriptive alt text, lazy loading below the fold, and `decoding="async"`.
- Change crop or source on mobile for major map, finance, live, and footer scenes.
- Keep `community-pavilion-transparent.webp` large, bottom-left, and section-covering in Events. Let it become in-flow art on narrow mobile.

## Make every asset do work

- Keep all 53 reference assets visible.
- Make each surface keyboard focusable with native or equivalent button semantics.
- Open one reusable accessible dialog/drawer with surface title, domain, description, responsive image, previous/next controls, asset selector, save action, and one domain action.
- Map action families by domain: discovery, people, settlement, guild, live, and events.
- Support pointer drag and keyboard access on horizontal asset rails.
- Provide visible focus, status announcements, reduced motion, and touch targets at least 44px.

## Use the visual language

Use these core tokens:

```css
:root{
  --navy:#0F2E8A;
  --navy-deep:#062660;
  --paper:#F7F1E8;
  --panel:#FFFAF2;
  --lime:#B7FF2A;
  --coral:#D96A4A;
  --edge:clamp(18px,4.2vw,72px);
  --ease:cubic-bezier(.22,.9,.28,1);
}
```

- Use watercolor scenes as atmosphere and strict UI geometry for controls.
- Reserve lime for actions, active Sui state, live state, and successful completion.
- Use Space Grotesk for display and DM Sans for body.
- Prefer hard edge relationships, oversized type, hairlines, and directional movement over repeated rounded cards.
- Use one signature motion system: slow scene depth, rail drag, and cause-and-effect dialog transitions.

## NFT identity stamps

- Include Pudgy Penguins, Bored Ape Yacht Club, and a current Sui-native collection as optional identity stamps.
- Verify the current Sui choice from a live marketplace or official ecosystem source before changing it.
- Use original emoji or abstract identity treatments. Do not copy proprietary NFT artwork from the web.
- Make each stamp interactive and describe its chain/context.

## Verify before handoff

1. Run the production build and `git diff --check`.
2. Confirm exactly 53 asset surfaces and 106 responsive derivatives.
3. Check desktop around 1440px, tablet around 834px, and mobile around 390px.
4. Open an asset using pointer and keyboard; test next/previous, token switching, save, and action feedback.
5. Confirm no unintended horizontal page overflow and no blocking console errors.
6. Confirm mobile loads the mobile hero source and desktop loads the desktop source.

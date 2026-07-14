# Whatsvp! landing-page asset pack

Production-ready visual assets reconstructed for the supplied full landing-page concept. All UI pieces are editable SVG. Illustrated scenes are optimized WebP.

## Brand system

- Navy: `#0F2E8A`
- Lime: `#B7FF2A`
- Peach: `#F4B08A`
- Coral: `#D96A4A`
- Clay: `#C95A3A`
- Paper: `#F7F1E8`
- Suggested type: Space Grotesk for display/UI and Inter for body copy

## Section mapping

| Landing section | Background/illustration | UI assets |
| --- | --- | --- |
| Hero | `backgrounds/hero-kl-social-city.webp` | `nearby-now.svg`, `profile-location-card.svg`, `payment-send-card.svg` |
| Explore | `backgrounds/explore-kl-map.webp` | `search-filter-bar.svg`, `map-event-pin.svg`, `nearby-list.svg`, `upcoming-event-card.svg` |
| Events | `backgrounds/events-featured-card.webp`, `illustrations/community-pavilion-transparent.webp` | `event-card-overlay.svg`, `events-list.svg`, `create-event-steps.svg` |
| Community | `illustrations/community-pavilion-transparent.webp`, `illustrations/plant-corner.svg` | `guild-feed.svg`, `members-list.svg`, `dm-chat.svg` |
| Finance | `backgrounds/finance-kl-blue-hour.webp` | `wallet-card.svg`, `send-money-card.svg`, `community-fund-card.svg`, `security-benefits-row.svg` |
| Live | `backgrounds/live-creator-studio.webp` | `stories-strip.svg`, `host-tools.svg`, `live-poll.svg`, `live-video-overlay.svg` |
| CTA/footer | `backgrounds/footer-kl-community-night.webp` | buttons and wordmark |

The scene WebPs are full-bleed backgrounds, so they are opaque. The pavilion WebP has a transparent outer canvas. Every SVG widget, icon, button and illustration has a transparent outer canvas.

Use `event-card-overlay.svg` over `events-featured-card.webp`, and `live-video-overlay.svg` over `live-creator-studio.webp`. Set both layers to the same aspect ratio with `position:absolute; inset:0`.

The icon collection is a `currentColor` SVG sprite. See `icons/README.md` for usage.

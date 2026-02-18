

# Replace Mobile Slides with a One-Page Scrollable Summary

## The Problem

The current mobile view still tries to render full desktop slides scaled down to 960px -- charts, 5-column grids, and complex layouts are still hard to read on a 375px phone. 60% of your visitors hit this broken experience.

## The Drastic Solution

Completely replace `MobilePresentation` with a **single scrolling landing page** that distills the entire 18-slide deck into 8 focused sections. No slides, no swiping, no scaling -- just a clean, mobile-native page investors can scroll through in 2 minutes.

## What Investors See on Mobile

1. **Hero** -- Logo, tagline, "$250K Pre-Seed 2026" badge
2. **The Problem** -- 3 pain points as compact cards (not 5)
3. **The Solution** -- 90-min guarantee, key differentiators as a short list
4. **Traction** -- 4 big stats in a 2x2 grid: $54.5K month 1, ~$650K run rate, 66 five-star reviews, 500+ homes
5. **Market** -- $76-80B market, 6.9% CAGR, key drivers as bullets
6. **The Ask** -- $250K SAFE at $2M cap, allocation breakdown, investor returns table (20x at $40M exit)
7. **Why Now** -- 3-4 compelling reasons as compact cards
8. **Contact** -- Phone, website, address with tap-to-call/tap-to-email links

## What Gets Cut for Mobile

- Detailed pricebook tables (too dense)
- Multi-chart financial projections (replaced by key numbers)
- 6-phase growth roadmap (too granular)
- Market positioning matrix
- Customer stories slide
- Team org chart
- Funding deployment timeline

These are all still available in the desktop deck -- mobile just needs to hook the investor and get them to call.

## Technical Details

**File to rewrite:** `src/components/presentation/MobilePresentation.tsx`

Replace the entire component with a single scrollable page that:
- Uses native mobile layout (flexbox, no CSS transform/scale)
- All text is sized for mobile (16-20px body, 28-36px headlines)
- Uses the existing brand colors (ORANGE, RED, WARM, GREEN constants)
- Includes the Homets logo at the top
- Has a sticky bottom CTA bar with "Call Now" button (tel: link to 516-259-1191)
- Each section separated by subtle dividers
- Smooth scroll, dark background matching the brand

**No other files change** -- `PresentationShell.tsx` already routes mobile to this component.


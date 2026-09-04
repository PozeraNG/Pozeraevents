# Figma Design System Rules — Pozera Events

Pulled live from Figma via `get_variable_defs` / `get_metadata` on the homepage frame
(`fileKey: Jxei83rWrhkcF0q0ldXhwo`, root node `97:815`, "Frame 2").

**These values override the fallback guesses in `CLAUDE.md`.** Re-run the Figma MCP
workflow if the file changes; update this doc rather than re-deriving from scratch.

## Colors

| Token (Figma name) | Hex | Notes |
|---|---|---|
| `orange` | `#fd7e14` | Primary accent/CTA — **not** `#E8752F` from the CLAUDE.md fallback table. Use this as `--brand-orange`. |
| `global-color-primary` / Black | `#000000` | Primary text/ink |
| `Shark` (`color/azure/15`) | `#212529` | Near-black, used in dark UI (e.g. Academy card) |
| `Emperor` (`global-color-text`) | `#555555` | Body copy / muted text |
| `Pale Sky` (`secondary`) | `#6c757d` | Secondary muted text |
| `Dusty Gray` (`global-color-form-text`) | `#999999` | Form placeholder/input text |
| `Tacao` (`global-color-peach`) | `#f4a492` | Peach accent — decorative, seen near collage imagery |
| `White` (`global-color-secondary`) | `#ffffff` | Section background / surface |
| `White 0.2%` | `#ffffff01` (~transparent) | Near-transparent overlay |

No cream (`#F6EFE3`)-style token surfaced in this frame's variables — the CLAUDE.md
"alternating cream/white section background" motif is not confirmed yet at the token
level. Re-check per-section with `get_design_context`/`get_screenshot` before assuming
cream backgrounds exist; they may be plain fills without a bound variable.

## Typography

Two type families, confirmed via variables:

- **Display/headings — Playfair Display** (not Fraunces/Lora as the CLAUDE.md fallback guessed)
  - Heading 2: Bold 700, 50px / 58px line-height
  - Heading 3: Bold 700, 40px / 46px line-height
  - Heading 5: Regular 400, 22px / 18px line-height
  - Body/Regular: Regular 400, 20px / 26px line-height
- **Body/UI — Jost** (not Inter)
  - Light 300, Regular 400, SemiBold 600 all in use
  - Regular title: 18px / 20px
  - Input text: Light 300, 14px, line-height 100%
  - Options text: Light 300, 14px / 18px
- **Icons**
  - Font Awesome 5 Free, Solid 900, 16px (general icons)
  - Font Awesome 5 Brands, Regular 400, 12px / 33px (social icons)

## Spacing / Sizing

- Common content widths: `1140px` (max content), `665px`, `570px`, `475px`, `285px`, `255px`, `95px`
- Item spacing tokens in use: `4.8`, `5`, `8.8`, `8.81`, `9.81`, `21`, `29`
- Corner radius tokens: `30`, `100`, `240` (240 likely for large circular/pill elements, e.g. back-to-top button or avatar circles)
- Stroke weight: `1`, `2`

## Effects

- `Shadow1`: drop shadow, color `#CCCCCC` at ~80% opacity, offset `(10, 0)`, radius `16`, spread `0`
  — note the **horizontal** offset (x:10, y:0), not the typical soft downward card shadow. Use this
  exact offset for the "rounded photo cards with soft shadow" motif rather than a generic `0 4px 12px` shadow.

## Page structure (from `get_metadata` on node 97:815)

Top-level sections, in document order, with node IDs for later `get_design_context` calls:

| Section (approx.) | Node ID | Maps to CLAUDE.md section # |
|---|---|---|
| Top utility bar (contact/social strip) | `97:821` | — (not in original inventory, extra) |
| Nav (logo, links, CTA) | `97:832` | 1. Sticky nav |
| Hero | `97:817` | 2. Hero |
| About ("What We do, We do With Passion") | `97:1170` | 3. About |
| Video Collections | `97:857` | 4. Video Collections |
| Services ("Not niched to one occasion") | `97:867` | 5. Services |
| make-reservation-section | `97:899` | 6. Wedding Program showcase (needs confirming) |
| Event-Together-Section | `97:920` | 7. How We Work (needs confirming) |
| Team ("Meet Our Creative Event Organizer") | `97:952` | 8. Team |
| Story-Section | `97:990` | 9. Testimonial (needs confirming) |
| Form-Section (Academy) | `97:1004` | 10. Academy dual-card CTA |
| Instagram/TikTok feed | `97:1040` | 11. Instagram/TikTok strip |
| Footer container (includes "Let's Start Planning!" CTA + footer) | `97:1069` | 13+14. Final CTA + Footer combined |

Note: node `97:1069` bundles both the "Let's Start Planning!" final CTA (13) and the
footer (14) into one container — confirm visually via `get_screenshot` whether these
should split into two components in code, or stay as one Footer component with a CTA
sub-block. No separate full-bleed scenic banner frame (13 in CLAUDE.md) was found as a
distinct top-level node — check inside Story-Section (`97:990`) or Event-Together-Section
(`97:920`) for it via `get_design_context`.

## Team members (real copy, confirmed in Figma — not placeholder)

- Paul Ugoma Glory
- Rhys Carter
- Kyle Buckley
- Maisie Walton

## Flags for Paul (resolved during full-page build, 2026-09-03)

1. **Orange accent is `#fd7e14`/`#ff803f`, not `#E8752F`.** Two closely related oranges
   are both real in the design: `#fd7e14` is the bound `orange` variable (used in a few
   solid CTAs), `#ff803f` is an unbound literal used in the nav, top bar, and most CTA
   pills. Built site uses `#ff803f` as the primary interactive orange and `#fd7e14` where
   Figma explicitly bound the variable — both are visibly different from the CLAUDE.md
   fallback `#E8752F`.
2. **Fonts are Playfair Display + Jost**, not Fraunces/Lora + Inter. Confirmed and wired
   into `tailwind.config.ts` / `layout.tsx` via `next/font/google`.
3. **Cream background confirmed real**, at `#fcf8f4` (not `#F6EFE3` from the fallback
   table) — used on Services, Team, and Academy sections, alternating with white per the
   CLAUDE.md motif.
4. **Team section body copy is still Lorem Ipsum placeholder in Figma** — kept as-is in
   the build and flagged here again; needs real copy from Paul.
5. **Full-bleed scenic banner (section 12) found**: it's the "footer-background-img"/
   "ChatGPT Image..." layer that bleeds from the bottom of the Instagram feed section
   into the footer in Figma (one continuous image spanning both). Built as its own
   `ScenicBanner` component between Instagram feed and Footer for maintainability, rather
   than one continuous bled background — footer itself has a plain white/cream
   background in its own `get_design_context` render, so this simplification doesn't
   lose any visible content.
6. **Nav has no social icons** — CLAUDE.md's section-1 description mentioned social
   icons in the nav, but the actual Figma nav has a search icon button instead; social
   icons live in the top utility bar above the nav (Facebook/Twitter/Pinterest/Instagram)
   and again in the footer (Facebook/Twitter/LinkedIn/Google — a different set, not a
   copy-paste of the top bar).
7. **Book a Consultation → Calendly popup** (confirmed with Paul in chat) and
   **Enroll via WhatsApp → wa.me deep link** (inferred from the button's own label,
   consistent with CLAUDE.md's original assumption) are both implemented client-side
   only, no backend. Real Calendly URL and WhatsApp number still need confirming — see
   `.env.local.example` at the project root.

# CLAUDE.md — Pozera Events Website

## Project context

Pozera Events is Paul's full-service event planning company (full planning, coordination, and "The Academy" — a 4-week paid event-planning training arm). This is **separate from Eventra** (Paul's vendor marketplace product) — don't mix the two brands, copy, or design systems.

Reference screenshot: `Frame_2.png` (the current live homepage design, exported from Figma). Treat it as a visual fallback only — **Figma is the source of truth**, not the screenshot. Pull real specs from Figma every session using the workflow below before writing CSS.

## Working with Figma MCP — do this first, every session

1. Ask Paul for the Figma file/frame link if it isn't already in context.
2. Run `get_metadata` on the target frame to get the node tree before pulling anything heavier — don't dump a whole page's `get_design_context` at once, walk it section by section.
3. Run `create_design_system_rules` early and save the output into `/design/figma-rules.md` in this repo — reuse it on every later session instead of re-deriving tokens.
4. Run `get_variable_defs` on the frame to get real color/type/spacing tokens. These override anything guessed below.
5. Use `get_design_context` per-section (nav, hero, about, etc.) to generate the actual markup/styles, not the whole page in one shot.
6. Use `get_screenshot` on each node to visually diff against your built output before moving to the next section.
7. If a code-component mapping already exists, check `get_code_connect_map` before rebuilding something from scratch.

Never guess at a spacing/color value if Figma is reachable — pull it.

## Tech stack (assumption — flag if you want something else)

- **Next.js 14 (App Router) + TypeScript + Tailwind CSS**
- Single-page marketing site with anchor-linked nav (Home / Services / Gallery / About / Academy) unless Figma shows these as separate routes — check the frame structure first, don't assume.
- No backend needed for v1. "Book a Consultation" and "Enroll by WhatsApp" likely deep-link to WhatsApp/a booking tool rather than posting to a database — confirm the real destination before building a form handler.
- Images/video thumbnails as static assets in `/public`, optimized with `next/image`.

## Fallback design tokens (from screenshot — verify against `get_variable_defs`)

**Color**
| Token | Approx. hex | Use |
|---|---|---|
| `--brand-orange` | `#E8752F` | primary CTA, links, accents, icons |
| `--cream-bg` | `#F6EFE3` | alternating section backgrounds |
| `--white-bg` | `#FFFFFF` | alternating section backgrounds |
| `--ink` | `#231F1A` | headings, dark text |
| `--charcoal-card` | `#1B1815` | Academy promo card background |
| `--muted-text` | `#6B6560` | body copy on white/cream |

**Type**
- Display/headings: elegant serif (Figma likely specifies something like Fraunces, Playfair Display, or Lora — confirm via variables). Used sparingly, only on H1/H2.
- Body: clean sans-serif (Inter or similar system-adjacent face).
- Logo "Pozera" wordmark: script/signature font — treat as a locked logo asset, don't reuse this face elsewhere.

**Recurring visual motifs** (build these as reusable components, don't hand-roll per section):
- Small decorative crest/seal icon centered above section eyebrows ("OUR SERVICES", "HOW WE WORK")
- Thin hand-drawn heart/leaf line-art doodles scattered near headings
- Rounded-corner photo cards with soft shadow, occasionally overlapped/stacked in a collage
- 4-step process with a dotted connecting line between numbered circles
- Circular "back to top" orange button, bottom-right

## Section inventory (build in this order, one section = one component)

1. Sticky nav — logo, Home/Services/Gallery/About/Academy links, social icons, "Book a Consultation" button
2. Hero — headline, subtext, CTA, 3-item feature row (Full planning / Coordination / The Academy), portrait image
3. About ("What We do, We do With Passion") — copy + offset photo collage
4. Video Collections — horizontal card row, play-button overlay on thumbnails
5. Services ("Not niched to one occasion") — 2×2 labeled image grid (Weddings, Corporate Events, Birthdays, Every Other Occasion)
6. Wedding Program showcase — large image + 2 stacked images, CTA
7. How We Work — 4-step numbered process with dotted connector
8. Team ("Meet Our Creative Event Organizer") — 2×2 photo grid, name captions
9. Testimonial — quote block, couple photo, carousel arrows
10. Academy dual-card CTA — dark promo card (price/dates) + enrollment form copy + WhatsApp CTA
11. Instagram/TikTok feed strip — small square image row
12. Full-bleed scenic banner photo
13. Final CTA — "Let's Start Planning!" + two buttons
14. Footer — logo, tagline, Company links, contact info, socials, decorative seal graphic

## Visual QA

- After building each section, take a Puppeteer/browser screenshot and compare side-by-side against the `get_screenshot` output for that same Figma node before moving on. Don't wait until the whole page is done to check fidelity.
- Match spacing, font sizes, and color at the pixel level for anything Figma specifies — this is a fidelity build, not a fresh design pass.
- For anything Figma doesn't specify (hover/focus states, loading states, error states, empty states), use the `frontend-design` skill's guardrails: one deliberate moment of boldness, no generic SaaS-card shadow-on-everything, no unnecessary motion on every card.

## Responsiveness

- Mobile-first breakpoints. The 2×2 grids (Services, Team) collapse to 1 column under ~640px.
- The horizontal Video Collections row and Instagram strip should scroll horizontally on mobile rather than wrap.
- Keep the nav collapsing into a mobile menu — confirm the mobile frame in Figma if provided; if not provided, extrapolate conservatively rather than inventing a new pattern.

## Non-negotiables

- Don't invent copy that isn't in Figma/the brief without flagging it as placeholder — Paul will supply or edit real copy.
- Don't mix in Eventra or Pozera Events Academy's other slide-deck palette (berry/rose #6D2E46) — this site has its own orange/cream system.
- Confirm before adding any tracking/analytics, forms that post data, or third-party embeds (Instagram feed, WhatsApp link) — these touch real user data or external services.

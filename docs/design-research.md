# Design research for /websites/

Notes for the local-business page. Patterns below are what this redesign adopts. The page stays first-person and plain-language; the references are about presentation, not copy.

## References

- [Linear marketing design spec](https://tastekit.dev/apps/linear/marketing/DESIGN.md) and [Linear tokens](https://emblematic.dev/sites/linear.app): one sans, display type around weight 500 with about −2.2% tracking, body 15–16px, near-monochrome chrome, color reserved for small moments, section rhythm of 160px or more.
- [Linear brand](https://linear.app/brand): give the work room. Do not crowd screenshots.
- [Vercel marketing spec](https://tastekit.dev/apps/vercel/marketing/DESIGN.md), [Vercel tokens](https://emblematic.dev/sites/vercel.com), [Geist colors](https://vercel.com/geist/colors): near-white canvas (`#fafafa`), ink near-black, hairline borders (`#ebebeb`), primary buttons as pills, depth from a 1px ring plus a very soft shadow, display weight stays light.
- [Stripe type and color](https://designlang.app/design-index/stripe.com) and [Stripe design notes](https://getdesign.md/design-md/stripe/preview): white canvas, soft secondary surface, hairline dividers, large light headlines (about 56px / weight 300), one chromatic primary, spacing on an 8px scale.
- [Stripe on accessible color](https://stripe.com/blog/accessible-color-systems): pick the accent so small text and white-on-button both clear WCAG AA. Do not use a pretty mid-tone that fails on white.
- [LUG Digital work](https://lug.digital/work/) and [Tenworks before/afters](https://www.tenworksweb.com/work/): a rebuild is a short before list and a short after list. Name what changed. Do not invent rankings or revenue.
- [ADDED, Neumeister case](https://www.added.digital/work/neumeister): the work gets the space. The page around it stays quiet.

## Patterns used here

1. **Type.** Self-hosted Inter Variable. Hero about `clamp(2.75rem, 6vw, 4.5rem)`, weight 500, tracking `−0.035em`. Section titles about 2rem / 500. Body 16–17px / 1.6, weight 400. One family for UI and prose.
2. **Color.** Ink `#0a0a0a` on white. Muted text `#525252` (about 7.8:1 on white). Hairlines `#eaeaea`. Surfaces `#fafafa`. One accent, `#24308a` (about 11:1 with white), used for the filled pill, links, the price highlight, and the slider. No teal.
3. **Glows.** Three isolated discs, each one color (soft blue, lavender, warm peach). Each is a circle at low visual strength, then `filter: blur(110px)` so the edge disappears into white. They sit behind the hero, the case study, and the closing call to action. The rest of the page is pure white. No mesh, no stripes, no solid tinted band.
4. **Layout.** Google Voice structure: hero with a short lede and two pills (filled, then outlined), a product image on the right, then alternating text/image rows, then three equal price cards with the middle one outlined, then a quiet close. Content width about 1120px. Section padding 80–112px. Spacing snaps to 8px.
5. **Cards.** `#fafafa` fill, 16–20px radius, no colored side bar, no heavy border. Price cards use a 1px hairline; the middle card uses a 1px accent border and a small “Most popular” label.
6. **Case studies.** A browser frame, a drag slider (range input, keyboard and touch), and a segmented control to switch studies. Two or three outcome lines that describe what changed, with no made-up numbers. Same treatment as the trade-site rebuild pages above, drawn quieter.
7. **Motion.** A short fade/rise when a section enters, only if the browser supports `animation-timeline: view()` and the user has not asked for reduced motion. Otherwise the page is still. Glows do not move.
8. **CTAs.** Pill buttons, 48px tall. Primary is accent fill with white type. Secondary is white with a hairline and near-black type. The phone stays in the header and the hero.

# Site improvement

Phase 1 shipped a working single page. This file is the phase 2 build spec. The brief (`BRIEF.md`) is still the product source of truth. This doc is the *how* and the Taste Skill plan.

Reference energy: [bhushanz.netlify.app](https://bhushanz.netlify.app/). Brother's site energy: top progress bar, dark, dense, finished.

---

## What phase 1 did not change

Rewriting the brief does not restyle the app by itself. The agent has to read the brief *and* Taste Skill, then change components. This pass is that work.

---

## Must-build (this pass)

### 1. Top scroll progress

- Fixed to the top of the viewport. Horizontal. Full width.
- Empty at `scroll = 0`.
- Fills left to right with bright blue as the user scrolls down.
- Not a sidebar. Not a circular indicator.
- Drive it with Motion `useScroll` / `scaleX`. No `window.addEventListener('scroll')`.

### 2. Active nav on a single-page scroll

- Header is a scroll navbar (sticky under the progress bar).
- Links: Work, Skills, Path, About, Contact.
- The link for the section in view is the active state (color + underline or pill).
- Use IntersectionObserver. Cleanup on unmount.

### 3. Steal from Bhushan (energy, not costume)

Want:

- Rounded cards and containers
- More color popping (blue + teal, not a gray slab)
- Tabbed stack / skills
- Staggered vertical timeline with a center line, nodes, cards left/right
- Soft glow on the *active* card / node, not glow on everything

Do not ship:

- `INITIALIZING SYSTEM` / `IDENTITY_RECORD_FOUND` / `LOG_ENTRY` / `MISSION HIGHLIGHTS` as default copy
- Fake skill bars (`React 95%`)
- Three identical stat cards as a feature row
- Long fake percent preloader
- Purple as a second brand (Taste Skill LILA). Teal is the pop color, blue stays primary.

Placeholder copy is allowed. Liam edits later.

### 4. New sections

Insert after Work, before or around About:

| id | Component | Job |
|----|-----------|-----|
| `#skills` | Tabs | Stack by lane: Web / Native / Workflow. Cards inside. |
| `#path` | Timeline | Career / learning path. Alternating cards on a vertical line. |
| `#faq` | Accordion | Hire-me questions. Placeholder answers. |
| `#hire` | CTA band | One Contact action. Same label as the rest of the site. |

### 5. Motion

Every new component gets entrance and interaction motion:

- Timeline cards: slide from their side + fade on scroll
- Center line: scaleY as the section enters
- Tabs: crossfade / slight y on panel change
- Accordion: height + caret rotate
- Cards: hover lift, border goes accent
- CTA: reveal + button already has enter styles
- Progress bar: continuous, 60fps via Motion values

`prefers-reduced-motion`: snap to end state, no perpetual motion.

---

## How we actually use Taste Skill

The skill is a **procedure**. Quoting "senior craft" and then shipping a safe card is not using it. That is what produced the kindergarten Work stage.

Owner: `BRIEF.md` section 16. Do not invent a second design read here.

**Required sequence on every visual pass**

1. Open `.cursor/skills/design-taste-frontend/SKILL.md` and follow it from section 0.
2. Read `BRIEF.md` as the room. This file is only the how.
3. Output the design read from `BRIEF.md` section 15. Do not soften it to "developer portfolio."
4. Set dials from that section: **9 / 8 / 4**. The skill's Portfolio (Developer) 6/5/4 is forbidden here.
5. Apply section 7 locks. When a skill brake fights a lock, name the override in one sentence and keep the lock.
6. Animate with Motion (`whileInView` fade + slide, springs, `useScroll`). If motion dial is 8 and the page does not move, the pass failed (skill: "motion claimed, motion shown").
7. Run skill pre-flight **and** the kindergarten list in `BRIEF.md` section 16.

**What the skill is for on this repo**
- Stop Inter, purple slop, three-equal cards, fake metrics, preloaders, `window` scroll listeners.
- Force a one-line design read and locked dials so we do not freestyle.

**What the skill is not for**
- Permission to cage art in a card.
- Permission to ship toy Three.js as "restraint."
- Permission to keep headers white and quiet because "one accent, saturation under 80%."

---

## Hero v2 (not yet built)

Owner: `BRIEF.md` section 7A. Current hero (type + boxed waterfront still) is under-spiced.

```
[ moving geometric field, full bleed ]
[ dark blue-black overlay ~60-80%    ]
[ copy + CTAs + a few real points    ]
```

- Field language matches Work: dots / lines / checkers / grids. Idle motion.
- Overlay is mandatory. Type sits on it.
- Kill the photo-column split. Still may be a texture under the overlay, not a card.
- Points: uneven chips or a short list from the 7A table. Never three equal tiles.
- Enter: fade + slide. Field keeps moving after copy lands.
- Reduced motion: freeze the field, keep overlay + type.

---

## Kindergarten reject (Work, 2026-08-31)

Liam's verdict: first-pass, student-grade. Do not polish this. Replace the composition.

What failed:
- Graphic locked inside a bordered rounded pane (a TV, not a field)
- Cascadia as mint cones on a disc
- Other projects as torus / boxes / wire ball
- White title, blue subtitle, everything well-behaved
- The left side has a box because empty dark felt unfinished

What the Bhushan contact shot actually does (steal this):
- Left is **void**. One loose glow or field, no rectangle around it
- Right is the only container: thin glow border, corner ticks, tab stack
- The art is placed in the page, not in a widget

Next Work composition:

```
[ free geometric field ................ ] [ content card                ]
[ no border, no clip, can overlap card ] [ title / copy / project tabs ]
[ off-center, maybe bleeding viewport  ] [ this is the only bezel      ]
```

---

## Token additions

- `--color-pop: #2ee6c8` for nodes, tags, active dots
- Progress track: hairline `--color-line`, fill `--color-accent`
- Cards: `rounded-[var(--radius-box)]`, `border-line`, hover `border-accent` + light accent shadow

---

## Built this pass

- `ScrollProgress` at the top of the viewport (`useScroll` + spring `scaleX`)
- Sticky header with scroll-spy (`IntersectionObserver`)
- Skills tabs, Path timeline, FAQ accordion, Hire CTA
- Desktop social rail (email, Telegram, GitHub, LinkedIn)
- `--color-pop` teal for kickers, nodes, tags
- Copy in `src/content/sections.ts` is scaffold. Edit there.
- Work stage rebuilt: graphic left, project tabs right, Three.js world per tab
- Project copy and themes live in `src/content/projects.ts`
- Three.js is lazy-loaded so the hero stays light. `drei` is installed for a later Path orbit, unused in this pass

## Edit later

Timeline dates, FAQ answers, skill lists, hire CTA copy. Do not invent awards or 12 years.

---

## Costume thesis (review this)

Liam authorized a harder push. Phase 2 stole Bhushan's *finish*. Phase 3 wears more of the costume, on purpose, without becoming a Netlify HUD clone.

**The difference that keeps it unique**

Bhushan is a generic cyber-operator LARP: `IDENTITY_RECORD_FOUND`, fake 95% bars, `ESTABLISH UPLINK`, identical glow on every card. That reads like a theme pack.

This site should read like a **custom terminal built for one engineer**. Same voltage. Different language.

| Keep from the costume | Make it ours |
|---|---|
| Split stage: graphic left, control right | Themed per *project*, not a starfield reused everywhere |
| Corner brackets, thin glow borders | Only on frames and the active tab, not every box |
| Monospace kickers, tracked labels | Liam words. No stolen `MISSION HIGHLIGHTS` |
| Orbit / particle / relay graphics | Three.js scenes we own. Each project has a different *machine* |
| Cyan + a second neon | Blue primary, teal pop. Magenta is a *label* color only if we unlock it below |
| Heavy motion | Scroll + tab + 3D idle. No fake percent preloader |

If a hiring manager can screenshot this and mistake it for bhushanz.netlify.app, we failed. If they think "this person builds interfaces," we won.

---

## How far is "full costume"

Three levels. We are moving from B to C on the Work stage first. The rest waits on this review.

**A. Senior dark (phase 1)**  
Ink, one blue, pills, stills. Safe. Flat.

**B. Soft HUD (phase 2, shipped)**  
Teal pop, kickers, timeline nodes, glow on hover, scroll bar, spy nav. Still a portfolio.

**C. Custom terminal (authorized, Work v1 failed this)**  
- Page void is near-black blue. Not charcoal.  
- Art floats in that void. Corner brackets belong on the *copy* card, never as a frame around the graphic.  
- Geometric fields (dots, lines, checkers, grids). Three.js or SVG. Not toy meshes in a pane.  
- Project tabs as a vertical control stack.  
- Each tab swaps the field (color + pattern + tempo).  
- Headers vibrant blue. Body smooth grey. Futuristic display on every section title.  
- Fade + slide on enters.  
- Optional magenta `#e84d8a` for kickers only, if Liam unlocks it.  

**D. Cosplay ceiling (do not cross unless Liam says so)**  
- Full-screen `INITIALIZING SYSTEM`  
- Skill proficiency bars with made-up percents  
- `LOG_ENTRY` / `INSTALLATION_COMPLETE 61/100`  
- Pink+cyan+green all screaming at once  
- Three equal neon stat cards  
- Copied Bhushan strings  

Review question for Liam: stay at C, or unlock magenta kickers and mono status type.

---

## Three.js plan

Stack: `three` + `@react-three/fiber`. One Canvas per stage. No second WebGL context on the same view.

**Rules**

- The 3D is a *theme*, not a product screenshot and not a hero takeover.
- One shared particle field. Geometry and lights change per project.
- `dpr` capped at 1.5. Pause the loop when the section is offscreen.
- `prefers-reduced-motion`: no Canvas animation. Static CSS rings + tinted fog. Same theme colors.
- Lazy-load the Canvas so the hero stays cheap.
- Do not add OrbitControls for visitors. Idle spin only. This is a stage, not a toy unless we add a lab later.

**Orbit language (reusable)**

We will end up with a small kit, not one-off sketches:

| Primitive | Use |
|---|---|
| Star / dust field | Every graphic pane |
| Concentric rings | Cryptic signal / "encrypted channel" |
| Orbiting nodes | LINQ liquidity / token path |
| Soft volume + scatter | Cascadia, slower, greener |
| Wire lattice | Lab / this repo / experiments |
| Center core | Shared. Color is the theme accent |

Later (after this review): drop a smaller orbit into Path (experience hub) and a calmer field into Contact. Do not sprinkle Canvas on every section. Two or three stages max or the site becomes a GPU demo.

---

## Projects stage (v2, not yet built)

Tab + copy on the right can stay. The left pane as shipped is rejected.

- Graphic is **not** inside the card. No `hud-frame` around the Canvas.
- Place the field in the section: off-center, overlapping, or bleeding the edge.
- Language: abstract geometry. Dots, line rows, checkers, grids, interference. Not a few meshes.
- Per-tab theme is still required (color + pattern + tempo). Shared language, different world.
- Status line can float on the field. It does not need a bezel.
- Fade + slide the card in. Crossfade the field when the tab changes.
- Copy still lives in `src/content/projects.ts`.

**Theme map (pattern, not primitive)**

| Project | Field | Color |
|---|---|---|
| Cryptic | Tight dot orbit / concentric dashed rings | cold electric blue |
| LINQ | Moving checker or token-grid, faster | teal on black-blue |
| Cascadia | Horizontal line rows / moire, slower | green-teal, still dark |
| Lab | Broken grid / interference lattice | blue + teal |

If it still looks like the Three.js examples page, it is not shipped.

---

## Costume backlog (after review)

Do not build all of this in one pass. Ranked:

1. **Hero** — moving field + dark overlay + points (`BRIEF.md` 7A).
2. **Work stage** — free-floating geometric field, tabbed copy. No bezel.
3. **Contact restyle** — same machine as Work: void + card. Email / Telegram / GitHub / LinkedIn. Resume only when a PDF exists.
4. **Path orbit** — geometric field beside the timeline, our tokens.
5. **Page chrome** — faint grid on the void. Brackets on copy cards only.
6. **Magenta unlock** — kickers only, if Liam unlocks it.
7. **Fern / Folio / Mend** — replace Lab when they earn a slot.

---

## Taste Skill after this correction

See `BRIEF.md` section 16. Dials are **9 / 8 / 4**.

Liam wins on: near-black void, vibrant blue headers, free-floating geometric fields, fade + slide everywhere.
Skill wins on: no fake metrics, no preloader, no Inter, no three-equal cards, reduced motion, no window scroll listeners.

---

## Review checklist

Next visual pass is blocked until Liam says go. The brief is the gate.

- [x] Near-black blue void (not charcoal SaaS)
- [x] Work graphic free in the page, no bezel
- [x] Abstract geometry (dots / lines / checkers / grids), not toy meshes
- [x] Vibrant blue headers, smooth grey body, futuristic display
- [x] Fade + slide as the default enter
- [x] Hero: living geometric field under a dark overlay, copy on top
- [x] Hero points from the 7A table, not three equal tiles
- [ ] Magenta kickers: yes / no (still open)
- [ ] Fourth project is Lab, or replace with Fern / Folio / Mend
- [ ] Contact becomes the same machine as Work (void + card)

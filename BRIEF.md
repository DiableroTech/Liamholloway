# Liam Holloway — Site Brief

This is the source of truth. Phase 1 (shell, hero, work, about, contact) is done. Everything from here is: go harder.

---

## North star

This is not a simple personal site. It is the dopest freelance frontend portfolio we can ship. A craft piece. The product *is* the proof.

After ten seconds a hiring manager should think: this person lives in the frontend. React on the web. React Native on phones. Swift is in play. They use AI agents, GitHub Actions, and real workflows. The site itself is the interview.

**The lie we never print:** 12 years of experience.
**The truth we design for:** six years in, the *feel* of twelve. Density, motion, interaction, and finish that read senior. Do not write "12+ years" anywhere on the page. Make the craft do that job.

---

## 1. One-liner

Freelance frontend engineer. Co-founder. This site is the boast and the lab: React, React Native, Swift, AI-native workflows. It has to look like I am fluent even while I am still getting there.

---

## 2. Page kind

- [x] Portfolio (developer / founder / freelance)
- [x] Also a sandbox: new packages, libraries, heavy experiments ship here in later phases

**Primary job:** get hired / get contracted. Employers and freelance clients first.
**Secondary job:** prove range. This repo is where we try the wild stuff on purpose.

---

## 3. Audience

1. Employers and freelance clients who buy frontend
2. Other engineers who can smell a template
3. Anyone deciding if I am worth a conversation

**After 10 seconds:** "This was built by someone who actually knows React. The motion, the type, the interactions. This is not a tutorial portfolio."

**Before they leave:** email `liamholloway2@gmail.com` or Telegram `@Diableros666`.

---

## 4. Positioning

**Claim on the page:** freelance frontend. React (web). React Native (mobile). Swift (iOS, in progress). Co-founder who still writes the interface.

**How to be read:** senior craftsperson. High-ownership operator. Not a corporate bootcamp grad. Not "THE founder of many companies." Co-founder, lead on the product layer.

**Boast level:** loud through the work, specific through the copy. No "passionate developer." No fake tenure.

**Never imply:**
- 12 years of experience (feel it, do not say it)
- Formal CS training (self-taught)
- Fluency as a caption ("fluent in React") - show it
- That this is a throwaway one-pager

**AI / workflow (real, put it in the work and about when we expand):**
- Heavy user of AI agents for coding
- GitHub workflows, GitHub Actions
- Willing to take on hard package/library work in this repo
- Sky is the limit after phase 1

---

## 5. Vibe

This is not a calm developer portfolio. It is a dark, kinetic, slightly dangerous frontend piece. Awwwards-adjacent. Abstract. Geometric. Not a boxed dashboard.

| Keep | Kill |
|------|------|
| near-black blue void, electric headers, geometric art, free-floating graphics, fade + slide motion | charcoal SaaS panels, toy 3D, graphics trapped in a card, timid spacing, "nice portfolio" |

Keep: very dark blue-black, vibrant blue titles, smooth grey body, futuristic display type, art that feels designed (dots, lines, grids, checkers), motion that you feel.
Kill: beige SaaS, Inter, three equal cards, kindergarten primitives (a few cones on a disc), a 3D scene locked inside a rounded rectangle with a border, "welcome to my portfolio."

If a section could live on a junior template, it is not done.
If a graphic looks like a student Three.js demo, it is not done.

---

## 6. References

Steal energy, not layout.

1. https://solana.com/ — palette, motion, product-grade UI
2. https://connerholloway.com/ — dark single page, a lot of information without noise (also: top horizontal scroll progress)
3. https://akkila.dev/ — dark, sleek, skill on display (AI chat is a later phase, not a copy)
4. https://www.aashishjaini.me/ — blue, scroll feel. Take the color, not the preloader
5. https://aakash-sharma.netlify.app/ — density without clutter, scroll quality
6. https://bhushanz.netlify.app/ — PRIMARY energy and *composition* ref. Steal: the void (graphic lives in open black, not inside a box), the right-side glowing content card, tab stack, timeline, floating socials, color voltage. Do NOT steal: fake preloaders, "IDENTITY_RECORD_FOUND" LARP, fake skill percents, three identical stat cards, copied HUD strings. Do NOT "fix" his layout by putting the graphic in a bordered pane. That is the kindergarten miss on Work right now.

Dislike:

1. https://www.redoyanulhaque.me/ — fake percent loader, movie site
2. https://aadi.is-a.dev/ — empty, no palette, no craft
3. https://portfolio-n4sn.vercel.app/ — bland blocks, white on black

No full-screen "Loading 0%" gates. The first viewport *is* the site.

---

## 7. Design constraints

These override Taste Skill defaults when they conflict. The skill's "developer portfolio" preset (variance 6, motion 5, one timid accent, graphics in cards) is **wrong for this site**.

**Color**
- Page void: very dark blue that reads as black. Target ink around `#02060d` / `#030712`. Not charcoal `#0b1218`. Not grey-black.
- Headers: vibrant electric blue. Titles should glow a little. Not flat white-on-charcoal.
- Body: smooth grey. Readable, cool, never chalk-white and never muddy.
- Accent: electric blue (push brighter than the current `#3b94e6` if it still feels shy). Teal pop is allowed on status, nodes, active dots.
- One brand, high voltage. Not a pastel tech theme. Not AI-purple as the brand.

**Type**
- Futuristic display on *all* section headers, not only the hero. Orbitron is the floor. If a heading still looks like a SaaS h2, replace the font or the size.
- Body stays a clean grotesque (IBM Plex or equal). Smooth grey. Max ~65ch.
- Status / kicker lines may be mono. Human sentences stay human.

**Shape / composition**
- Content can live in a card. Art does not.
- Work graphic: free in the section void. No border, no rounded clip-rect, no scanline box, no "TV inside a bezel." Place it off-center, overlapping the card, or bleeding the viewport. Random in the *composition* sense: not centered in a pane.
- Bhushan's contact composition is the model: empty dark field + one floating glow + a card on the right.
- Soft pills for buttons. Cards that hold *copy* may be rounded. Do not wrap the 3D in a card.

**Graphics (Work and any future stage)**
- Abstract geometric art. Think dots, rows, lines, checkerboards, interference grids, repeating circles. Op-art / brutal geometry, not a toy mesh.
- Forbidden as "done": a few cones on a disc, a single torus, a wire icosahedron as the whole idea, anything that looks like a Three.js starter.
- Each project still gets its own world (color + pattern + motion). The *language* is shared: pattern, rhythm, field. Not four random primitives.
- Three.js is a tool. SVG / CSS pattern fields are legal if they look more expensive. The test is "would this hang in a gallery," not "is it 3D."

**Motion**
- Fade in and slide in on every section and every major block. Headers from the side or up. Cards from their side. Tabs crossfade. Graphic field eases when the project changes.
- Motion dial is 8. "Motion claimed, motion shown." A static page is a failed pass.
- Typewriter may stay hero-only.
- `prefers-reduced-motion`: snap to the end state. Do not delete the composition.

**Density:** art needs air. The void is a feature. Do not fill the left field with a box just because empty space feels scary.

**Stack:** Vite + React + TypeScript + Tailwind + Motion + Three/R3F. This *is* the React proof.

**Must never ship:** Inter-as-identity, three equal feature cards, lorem, fake years, fake skill percents, stock photos, long preloaders, graphics caged in a bordered pane, kindergarten 3D, "coded by HAND in REACT," copied Bhushan strings.

---

## 7A. First viewport (hero)

The landing section is the interview. It is under-spiced. Type + a still in a rounded box is not enough. Next pass has to *move*.

**Composition**
- Full-bleed moving graphic as the field. Same geometric language as Work: dots, line rows, checkers, grids, slow drift / orbit / pulse.
- A **darkened overlay** sits on top of that field (near-black blue, ~60–80% so the motion stays visible but copy stays readable). Copy never sits on raw bright art.
- Name, typewriter, body, and CTAs sit *on* the overlay, not in a competing photo column.
- The current waterfront still may live *under* the overlay as texture, or die. It must not remain a bordered image column that splits the hero in half.
- Art is free in the viewport. No bezel around the motion.

**Motion**
- The field is always alive (idle). Copy fades and slides in (existing copy-drift / button-rise can stay, then more).
- Pause or freeze under `prefers-reduced-motion`. Overlay and type remain.
- Do not add a percent preloader. The hero *is* the first frame.

**Points / values on the hero**
Put a few real beats in the first viewport so it is not only a paragraph. Not three identical stat cards. Uneven chips, a short stacked list, or floating callouts.

Use only things we will stand behind (scaffold okay, no fake numbers):

| Point | Why it is here |
|-------|----------------|
| Six years shipping | Tenure without lying |
| Co-founder, lead on the product layer | How to be read |
| React + React Native, Swift in play | The actual stack |
| Cryptic: encrypted messaging, VoIP, the interface people hold | Flagship |
| LINQ: Ethereum staking dapp, mainnet | Range |
| Agents, MCP, GitHub Actions | How the work gets done |
| Self-taught. Small teams. High ownership | Personality |

Do not print "12+ years." Do not print LINQ $4M / $40M unless Liam locks those. Do not invent a fourth company.

**Fail if**
- Hero is still "text left, pretty photo right"
- Motion is only the typewriter
- Overlay is missing and type fights the graphic
- Values render as three equal neon tiles

---

## 8. Phases

**Phase 1 — done.** Tokens, nav, hero, work, about, contact, stills, basic motion.

**Phase 2 — pour it on (now).**
- Top horizontal scroll progress bar (empty at top, fills bright blue as you scroll). Not a sidebar.
- Navbar stays a scroll navbar. Links go active when that section is in view.
- New sections with placeholder copy Liam can edit: Skills (tabs), Path (timeline like bhushanz), FAQ (accordion), mid-page CTA.
- Cards / containers with rounded corners, border glow, more color pop.
- Motion on every new component. `prefers-reduced-motion` respected.
- Full writeup: `docs/site-improvement.md`

**Phase 3 — costume (hero + Work are both under-spiced).** Hero: moving geometric field under a dark overlay, plus a few real points about Liam (section 7A). Work: graphic floats in the dark, no bezel, abstract field, not toy meshes. Then Contact as the same machine. See section 16 and `docs/site-improvement.md`.

**Phase 4 — lab.** Heavy packages, agents, experiments. AI chat only if it is actually good. Nothing that makes the first impression worse.

Writing / press: only with real posts or mentions.

---

## 9. Selected work

Flagship first. Role + outcome. Visuals still pending.

### Cryptic — v1 yes

- Quantum-encrypted messaging, VoIP, crypto trading. Resume also frames a security-first AI workspace.
- Role: co-founder, lead engineer, frontend and mobile (RN, native bridges, CallKit / PushKit).
- Outcome: the product people hold. Be specific when we have numbers we will stand behind.
- Visuals: mood still in place. Real screenshots later.

### LINQ — v1 yes

- Ethereum LP distribution and staking. React + TypeScript dapp, ERC-20 in the UI.
- Role: co-founder, frontend. Dual-token staking, mainnet.
- Outcome: resume claims $4M volume and $40M peak token market cap. Use on the page only if we keep standing behind them.
- Visuals: mood still. Real UI later.

### Later candidates

Fern, Folio, Mend, Cascadia. Cut hard. Eight max on the site.

---

## 10. About

Draft, first person, editable:

Frontend is the job. React on the web, React Native on phones, Swift for iOS as the next native layer. Six years shipping production apps. Co-founded two companies. Three production apps out. Crypto dapps and contracts for a long stretch. The work is moving into AI: agents, MCP, GitHub Actions, the workflow around Cursor and Claude. Self-taught. Small teams, high ownership.

**Facts:** 2 companies co-founded. 3 production apps. Resume location Kamloops, BC (site currently says Vancouver. Pick one and lock it). GitHub: github.com/DiableroTech. LinkedIn: linkedin.com/in/liam-holloway-b5283a241.

**Personality on page:** confident, specific, a little swagger. Not corporate. Not meme.

**Off page:** fake seniority, "fluent in React" as a sentence, phone number unless we decide to publish it.

---

## 11. Achievements

Only if we will defend them:

- LINQ: $4M volume, $40M peak mcap (confirm before a big lockup on the page)
- Cryptic: VoIP, CallKit, iOS release pipeline, remote team 4-6
- Cascadia: ERC-20 / NFT dapps, client sites
- Anthropic / MCP coursework in progress

---

## 12. Contact

**Primary CTA label:** Contact (do not invent "let's talk" / "hire me" duplicates)

| Handle | URL | Show |
|--------|-----|------|
| Email | liamholloway2@gmail.com | yes |
| Telegram | https://t.me/Diableros666 | yes |
| GitHub | https://github.com/DiableroTech | add |
| LinkedIn | https://www.linkedin.com/in/liam-holloway-b5283a241 | add |
| X | | no until we have it |
| Phone | | no unless asked |

---

## 13. Assets

- [x] Generated mood stills (hero, Cryptic, LINQ) — replace with real product shots
- [ ] Portrait
- [ ] Wordmark
- [ ] Real screenshots / logos / video
- [ ] Resume PDF
- [ ] Domain

---

## 14. Practical

**Stack:** Vite, React 19, TypeScript, Tailwind v4, Motion. Taste Skill installed.
**Hosting:** Vercel when we ship.
**Phase 1 done means:** live-feeling single page exists. It is not "finished." It is the floor.

**Definition of done for the next push:** a frontend engineer should feel slightly threatened. Not "nice portfolio." "This person can actually build."

---

## 15. Design read (mandatory, copy this)

Reading this as: freelance frontend portfolio for employers, with a near-black kinetic geometric language, leaning toward custom React + Motion + Three.js fields (not a kit, not a boxed dashboard, not the skill's "developer portfolio" preset).

**Do not substitute** "dark kinetic senior-craft" or "Linear-style developer site." That read produced the kindergarten Work stage.

Dials (locked, do not use the skill's Portfolio/Developer 6/5/4):

| Dial | Value | Why |
|------|-------|-----|
| DESIGN_VARIANCE | 9 | Asymmetric void + floating art. Not a 12-col card grid. |
| MOTION_INTENSITY | 8 | Fade + slide everywhere. Project field must move. |
| VISUAL_DENSITY | 4 | Air around the art. Density lives in the *card*, not the void. |

Locked:
- Ink: near-black blue void
- Headers: vibrant blue, futuristic display
- Body: smooth grey grotesque
- Hero: moving field + dark overlay + copy on top. No photo column as the main event
- Work graphic: free-floating, no container
- Graphic language: dots / lines / rows / checkers / grids
- No preloaders. No fake 12 years. No fake skill percents.

---

## 16. Taste Skill contract

The skill is at `.cursor/skills/design-taste-frontend/SKILL.md`. It does not restyle the repo because a brief exists. A visual pass that skips this section is the failure mode we just hit.

**On every visual pass, in this order:**

1. Read this file. Then `docs/site-improvement.md`. Then the skill.
2. Say the design read from section 15. Verbatim idea, not a safer rewrite.
3. Set the dials from section 15. Ignore the skill's "Portfolio (Developer) = 6 / 5 / 4."
4. Treat section 7 as locks. If a skill rule fights a lock, the lock wins. Write one sentence naming the override.
5. Build with Motion (`whileInView`, springs, `useScroll`). No `window` scroll listeners.
6. Run the skill pre-flight **plus** the kindergarten list below.

**Skill rules that still win**
- No Inter as identity
- No three equal feature cards
- No fake metrics / skill bars
- No full-screen percent preloader
- No em-dashes in UI copy
- `prefers-reduced-motion`
- Phosphor icons, one family
- One page, one system (custom, not shadcn defaults)

**Skill rules that lose on this site**
- "Max 1 shy accent, saturation under 80%" — we want vibrant blue headers
- "Developer portfolio = quieter, less motion"
- "Put media in a rounded card"
- "Dark tech means a HUD box around the art"
- "Restrain neon until it disappears"

**Kindergarten tells (instant fail)**
- 3D or art sitting inside a bordered rounded rectangle
- A handful of cones, a torus, or a wire ball as the whole graphic
- White headers on charcoal that could be any SaaS landing
- No fade / slide on section enter
- Graphic centered and well-behaved in its pane
- The Work stage as it exists on 2026-08-31
- Hero as text + boxed waterfront still, with no living field and no overlay

**How to actually use the skill (not perform it)**
The skill is a sequence, not a vibe adjective. Read brief → design read → dials → locks → build → pre-flight. If you only quote "senior craft" and then ship a safe card, you did not use it. You used the skill's *anti-slop brakes* as the design. Those brakes are for stopping Inter and purple. They are not permission to make a timid site.

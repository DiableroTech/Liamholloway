---
name: portfolio-three
description: >-
  Professional Three.js / R3F live field for the Liamholloway
  portfolio. Abstract WebGL background, scroll-cued motifs,
  section highlights. Use when editing DotField3, site-field,
  particles, shaders, drei, Canvas, or any Three.js scene on
  this site. Prevents a second WebGL context, Three.js demo
  slop, and getBoundingClientRect inside the render loop.
---

# Portfolio Three.js live field

This site is a **live abstract field**, not a 3D product shot
and not a Folio ticket. One WebGL world behind the copy.
Scroll changes that world. DOM stays readable.

## Load first

- Scene host: `src/App.tsx` (`.site-field`),
  `src/components/DotField3.tsx`, `src/index.css` (`.site-field`).
- Tokens: [palette.md](palette.md). One canvas:
  [architecture.md](architecture.md). Scroll language:
  [scroll-cues.md](scroll-cues.md). Budget:
  [performance.md](performance.md). Bans:
  [anti-slop.md](anti-slop.md).
- DOM / type / copy: `design-taste-frontend`. This skill
  **wins** for anything that draws with WebGL.
- Stack already in `package.json`: `three`,
  `@react-three/fiber`, `@react-three/drei`, `motion`.
  Prefer R3F for new scene work. Do not add GSAP to the
  canvas tree.

## Hard rules

1. **One WebGLRenderer.** `.site-field` is the only WebGL
   surface. New motifs are objects in that scene, not a
   second `<canvas>` / `Canvas` / `WebGLRenderer`.
2. **Abstract art only.** Particles, sprites, ribbons,
   instanced quads, light volumes, SDF fog. No GLTF humans,
   rooms, cars, `Text3D` of the name, or the default
   spinning torus/icosahedron.
3. **Palette lock.** Fog `#02060d`, accent `#4db0ff`, pop
   `#2ee6c8`. Same hexes as `--color-ink` / `--color-accent`
   / `--color-pop`. Do not invent a third neon.
4. **Scroll cues the field.** Map section ids (`work`,
   `skills`, `path`, `about`, `faq`, `hire`, `contact`) to
   motifs. Graphics **arrive, slide, dissolve**. They do
   not sit in the HTML as a second 3D widget.
5. **Copy stays king.** Canvas is `pointer-events: none`,
   `aria-hidden`. Never cover type with opaque meshes.
   Contrast on headlines must still pass.
6. **No layout reads in `requestAnimationFrame` /
   `useFrame`.** Cache section rects on resize / scroll
   (ref or store). `DotField3` querying `#about`
   `getBoundingClientRect` every tick is the bug to retire.
7. **Shaders over CPU waves** when a buffer is large.
   Do not `setZ` on every point each frame if a vertex
   shader can do it.
8. **`prefers-reduced-motion`:** one still frame, no
   camera drift, no motif travel. Keep `useReducedMotion`.
9. **Dispose everything you allocate** (geo, mat, textures,
   renderer). Pause the loop when `document.hidden`.
10. **Motion owns DOM. Three owns WebGL.** Share scroll
    progress through a ref/store. Do not tween the same
    mesh with Motion and `useFrame`.
11. **2D canvases** (`GeoField`, `SwirlOrb`, `CascadeRail`)
    are local decoration. Pause when offscreen. Do not
    promote them to a second WebGL path. Prefer folding
    their *job* into the live field over time.
12. **This is not Folio and not a dashboard.** No tickets,
    no USDG, no product chrome.

## Workflow

1. Name the section the motif is for. Read
   [scroll-cues.md](scroll-cues.md).
2. Add or change objects **inside** the site-field scene
   ([architecture.md](architecture.md)).
3. Drive them with progress 0-1 + active section, not
   React state on every frame.
4. Hit [performance.md](performance.md) before calling it
   done. Then [anti-slop.md](anti-slop.md).

## Read next

- World + R3F: [architecture.md](architecture.md)
- Section language: [scroll-cues.md](scroll-cues.md)
- Color / fog: [palette.md](palette.md)
- Budget: [performance.md](performance.md)
- Bans: [anti-slop.md](anti-slop.md)
- Good / bad: [examples.md](examples.md)

## Done when

- [ ] Still one WebGL context
- [ ] Motif is tied to a real section id
- [ ] Reduced-motion still frame exists
- [ ] No `getBoundingClientRect` in the render loop
- [ ] Fog / accent / pop unchanged
- [ ] Type remains readable over the field

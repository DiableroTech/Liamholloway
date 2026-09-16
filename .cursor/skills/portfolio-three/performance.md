# Performance

A portfolio that stutters is a worse demo than a still
field. Cap cost before adding motifs.

## Hard caps

- `setPixelRatio(Math.min(dpr, 1.5))` (already in
  `DotField3`). Do not raise it "for retina crispness."
- One scene, one camera, one renderer.
- Pause `requestAnimationFrame` / R3F loop when
  `document.hidden`. Resume on `visibilitychange`.
- `ResizeObserver` on the parent, not `window.resize`
  plus `getComputedStyle`. Skip `setSize` if CSS box
  did not change (already in `fit()`).

## CPU

The live cloud is `52 * 34` points. Mutating `position.z`
in JavaScript every frame is the current tax. New field
motion belongs in a **vertex shader** (or a precomputed
attribute + one uniform `uTime`).

`getBoundingClientRect` / `querySelector` inside `tick`
is banned. Cache.

Pointer: write NDC to a ref from `pointermove`.
`useFrame` reads it. No `setState`.

## GPU

- Additive points are cheap; full-screen raymarchers
  are not the default. Earn a raymarcher with a still
  60fps on a M-era laptop **and** a mid Android.
- Instancing for repeated motifs. Do not `scene.add` a
  new `Mesh` per scroll into Work.
- Dispose maps created by `CanvasTexture` (`paintOrbMap`
  already does this on unmount). Leaking sprite maps
  on HMR is how the tab dies.

## Motion vs GL

`useReducedMotion()` true → render once, leave the
canvas up, no drift. Do not unmount `.site-field` (that
flashes ink).

DOM Motion (`Hero` pills, `Reveal`, `SwirlOrb` pause)
stays in those components. The field does not import
`motion` except the reduced-motion hook.

## Budget test

Before done: laptop on battery, Chrome, scroll the full
page. If the cloud hitches, cut point count or move the
wave to a shader. Do not "optimize" by adding InstancedMesh
and keeping the CPU loop.

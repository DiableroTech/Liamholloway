# Architecture

The live field is a **single persistent world** behind the
page. HTML scrolls. The GPU scene does not remount.

## Host

```
#root
  #top
    .site-field          /* fixed, inset 0, z-index 0,
                            pointer-events: none */
      <canvas> / R3F Canvas
    .relative.z-10       /* all real UI */
```

Defined in `src/index.css` (`.site-field`) and mounted in
`src/App.tsx`. Do not move the canvas into a section.

## Current vs target

**Now:** `DotField3` owns a raw `WebGLRenderer` on that
canvas: one `Points` cloud (52×34), three additive
sprites that fade in over `#about`. Camera eases toward
the pointer. That is the seed, not the ceiling.

**Next work:** wrap the same host in R3F
(`@react-three/fiber`) + `drei` helpers you actually need
(`useFrame`, `useThree`, maybe `Points` / shaders). Port
the cloud and orb into that tree. Keep one renderer.

Do not leave raw Three **and** an R3F `Canvas` both
mounted.

## Layers (back to front in the scene)

1. **Fog / clear color** `#02060d` (matches `body`).
2. **Field** - the always-on abstract ground (points,
   faint ribbons). Lives the whole scroll.
3. **Cues** - section motifs. Opacity and position are
   functions of scroll progress. Off-section = gone,
   not parked on screen at 5% opacity forever.
4. **Accent volume** - the about-orb (or its successor).
   One hero artifact, not one per section.

UI never goes into the scene graph.

## Camera

Perspective, modest FOV (~55, already in `DotField3`).
Idle drift is tiny. Pointer influence is damped.
Scroll may **truck / dolly a few percent** or rotate
fog density. It must not become a fly-through that
fights reading.

Look-at stays near origin unless a cue explicitly
pulls it, then it returns.

## Data flow

```
scroll / resize  -->  refs (progress, section, pointer)
useFrame         -->  read refs, write uniforms / matrices
React            -->  not notified per frame
```

A tiny module (`useFieldProgress` or a store) is fine.
`useState` for mouse or scroll is not.

## 2D siblings

`GeoField`, `SwirlOrb`, `CascadeRail` paint with
Canvas2D. They are allowed as **in-section ornaments**
if they `running={inView}` (Work already does this for
`SwirlOrb`). They are not the live background. Do not
start a `WebGLRenderer` inside Work / Skills / About.

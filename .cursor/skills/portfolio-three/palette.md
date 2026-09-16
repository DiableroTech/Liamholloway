# Palette

Lock to the site tokens in `src/index.css` `@theme`.

| Token | Hex | In the scene |
|---|---|---|
| ink / fog | `#02060d` | `scene.background`, clear color, fog |
| ink-2 | `#07111c` | deeper wells, never a second bg |
| paper | `#c8d4e2` | almost never unlit; too loud in additive |
| mute | `#8b97a8` | unused in GL |
| line | `#1a2a3a` | unused in GL |
| accent | `#4db0ff` | primary points, orb body |
| pop | `#2ee6c8` | sparse spark, orb core kiss |

`DotField3` already uses `ACCENT`, `POP`, `FOG`. Reuse
those `Color` instances; do not new `Color` per frame.

## Material language

- Additive blending + `transparent` + `depthWrite: false`
  for field and sprites (matches the current cloud/orb).
- Fog color = clear color so the grid does not silhouette
  against a different black.
- Opacity is low. The page grid (`.field-slab`,
  `.has-grid`) already paints. The WebGL field is a
  **glow in the dark**, not a wallpaper that fights the
  CSS grid.
- No texture photographs. Canvas-generated sprite maps
  (see `paintOrbMap`) are the intended richness.

## What not to add

A fourth brand color, rainbow particle systems, HDR
environment maps, Bloom that blows out `#4db0ff` into
white, or a light-mode scene. `html { color-scheme: dark }`
is the site.

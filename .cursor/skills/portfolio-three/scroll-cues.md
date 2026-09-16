# Scroll cues

The field is a **score**. Each section is a bar. Motifs
enter, travel, exit. Recruiter reads copy; the field
underlines where they are.

## Section ids (source of truth)

From the page, not invented:

| id | Job of the cue |
|---|---|
| (hero / `#top`) | Calm field, slow drift, no extra motif |
| `work` | Larger forms slide laterally (frames, shards) |
| `skills` | Parallel lanes / ribbons, not logos in 3D |
| `path` | A curve or dashed trail suggesting time |
| `about` | The orb (already). Keep it rare and bright |
| `faq` | Field quiets. Do not compete with questions |
| `hire` | Accent breathe, still abstract |
| `contact` | Soft pull toward the lower third, then hold |

One **primary** cue on screen. A dying cue from the
previous section may finish its exit. Never three full
motifs at once.

## Progress

Compute once per scroll tick (not inside `useFrame`):

- `pageT` in 0-1 for the whole document
- `sectionT` in 0-1 while that section's box intersects
  the viewport (intersection ratio or mapped top/bottom)

`useFrame` only **reads** those refs.

Enter: 0 → 1 over the first ~20% of the section.
Travel: position along an axis (x for work, y for path).
Exit: 1 → 0 as the next section takes the viewport.

Reduced motion: skip travel. Snap the field palette /
density to the section and freeze.

## What "pop" and "slide" mean here

**Pop:** a motif's opacity and scale ease in. Additive
sprites / points, not a CSS bounce on a mesh.

**Slide:** the motif's position is `mix(start, end,
sectionT)`. Work: enter from `-x`, leave `+x`. Path:
travel along z or a curve. Do not translate the whole
page.

Do not hijack scroll (no pin, no Lenis requirement).
The document scrolls normally. The field **follows**.

## Highlight without covering

Cues live in the **margins and depth**, not on the
text column. Work's copy is `lg:w-[46%]` on the right:
keep heavy WebGL on the left/back. About already places
the orb toward the section's right; do not park a
second volume on the headline.

If a cue needs a color shift, lerp fog or point colors
toward accent/pop. Do not flash the whole clear color.

## Intersection

Prefer `IntersectionObserver` on `[id="work"]` etc. to
set `activeSection`. Fallback: cached
`getBoundingClientRect` from a scroll listener writing
to a ref. Never both, and never in the GL tick.

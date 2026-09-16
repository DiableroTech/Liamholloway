# Examples (Liamholloway)

## Good

**One field, pointer as a ref (pattern to keep):**

```ts
const pointer = { x: 0, y: 0 }
const onMove = (event: PointerEvent) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1
  pointer.y = (event.clientY / window.innerHeight) * 2 - 1
}
```

**Dispose on unmount** (`DotField3` already):

```ts
geo.dispose()
mat.dispose()
layer.map.dispose()
layer.material.dispose()
renderer.dispose()
```

**Cue opacity from a cached flag, not from React:**

```ts
core.material.opacity += ((orbInView ? 0.95 : 0) - core.material.opacity) * fade
```

**Pause 2D ornaments when offscreen** (`Work.tsx`):

```tsx
<SwirlOrb running={inView} />
```

## Bad

**Second WebGL root in a section:**

```tsx
<section id="work">
  <Canvas>{/* WRONG - second renderer */}</Canvas>
</section>
```

**Layout in the GL tick:**

```ts
const tick = () => {
  const rect = document.getElementById("about")!.getBoundingClientRect()
  // WRONG every frame
}
```

**Demo mesh as the portfolio:**

```tsx
<mesh>
  <torusKnotGeometry />
  <meshStandardMaterial color="hotpink" />
</mesh>
```

**Scroll in React state:**

```ts
const [y, setY] = useState(0)
useEffect(() => {
  const onScroll = () => setY(window.scrollY) // WRONG
  window.addEventListener("scroll", onScroll)
}, [])
```

**New brand color in the shader:**

```ts
const NEON = new Color("#b537f2") // WRONG - not accent/pop
```

import { useEffect, useRef } from "react"
import { useReducedMotion } from "motion/react"

export type FieldKind = "dots" | "lines" | "checker" | "grid"

function hexRgb(hex: string) {
  const h = hex.replace("#", "")
  const n = Number.parseInt(h.length === 3 ? h.replace(/./g, "$&$&") : h, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

function paint(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  t: number,
  kind: FieldKind,
  accent: string,
  pop: string,
  fog: string,
  wash: boolean,
) {
  const a = hexRgb(accent)
  const p = hexRgb(pop)
  if (wash) {
    ctx.fillStyle = fog
    ctx.fillRect(0, 0, w, h)
  } else {
    ctx.clearRect(0, 0, w, h)
  }

  if (kind === "dots") {
    const gap = 22
    for (let y = 0; y <= h + gap; y += gap) {
      for (let x = 0; x <= w + gap; x += gap) {
        const wave = Math.sin(t * 0.7 + x * 0.035 + y * 0.028)
        const r = Math.max(0.35, 1.1 + wave * 0.9)
        const usePop = (x + y) % (gap * 4) === 0
        const c = usePop ? p : a
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${0.22 + wave * 0.28})`
        ctx.beginPath()
        ctx.arc(x + wave * 3.5, y + Math.cos(t * 0.5 + x * 0.02) * 2.5, r, 0, Math.PI * 2)
        ctx.fill()
      }
    }
    return
  }

  if (kind === "lines") {
    const gap = 14
    for (let i = 0, y = 0; y <= h; y += gap, i += 1) {
      const phase = Math.sin(t * 0.55 + i * 0.18)
      const c = i % 5 === 0 ? p : a
      ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${0.12 + Math.abs(phase) * 0.28})`
      ctx.lineWidth = i % 7 === 0 ? 1.4 : 0.7
      ctx.setLineDash(i % 3 === 0 ? [6, 10] : [])
      ctx.lineDashOffset = -t * 18 - i * 4
      ctx.beginPath()
      ctx.moveTo(0, y + phase * 4)
      ctx.lineTo(w, y + phase * 4)
      ctx.stroke()
    }
    ctx.setLineDash([])
    return
  }

  if (kind === "checker") {
    const cell = 28
    const ox = ((t * 22) % cell) - cell
    const oy = ((t * 10) % cell) - cell
    for (let y = oy, row = 0; y < h + cell; y += cell, row += 1) {
      for (let x = ox, col = 0; x < w + cell; x += cell, col += 1) {
        if ((row + col) % 2 !== 0) continue
        const pulse = 0.08 + Math.abs(Math.sin(t * 0.6 + row * 0.2 + col * 0.15)) * 0.16
        const c = (row + col) % 4 === 0 ? p : a
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${pulse})`
        ctx.fillRect(x, y, cell - 1, cell - 1)
      }
    }
    return
  }

  const gap = 32
  ctx.lineWidth = 0.8
  for (let pass = 0; pass < 2; pass += 1) {
    const c = pass === 0 ? a : p
    const rot = (pass === 0 ? 0.12 : -0.18) + Math.sin(t * 0.2) * 0.04
    ctx.save()
    ctx.translate(w * 0.45, h * 0.5)
    ctx.rotate(rot)
    ctx.translate(-w * 0.55, -h * 0.55)
    ctx.strokeStyle = `rgba(${c.r},${c.g},${c.b},${pass === 0 ? 0.22 : 0.14})`
    for (let x = -w; x < w * 2; x += gap) {
      ctx.beginPath()
      ctx.moveTo(x, -h)
      ctx.lineTo(x, h * 2)
      ctx.stroke()
    }
    for (let y = -h; y < h * 2; y += gap) {
      ctx.beginPath()
      ctx.moveTo(-w, y)
      ctx.lineTo(w * 2, y)
      ctx.stroke()
    }
    ctx.restore()
  }
}

export function GeoField({
  kind,
  accent = "#4db0ff",
  pop = "#2ee6c8",
  fog = "#02060d",
  running = true,
  wash = true,
  className = "",
}: {
  kind: FieldKind
  accent?: string
  pop?: string
  fog?: string
  running?: boolean
  wash?: boolean
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const parent = canvas.parentElement
    if (!parent) return

    let frame = 0
    let alive = true
    let cssW = 0
    let cssH = 0

    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const nextW = Math.max(1, Math.floor(parent.clientWidth))
      const nextH = Math.max(1, Math.floor(parent.clientHeight))
      if (nextW === cssW && nextH === cssH && canvas.width === Math.floor(nextW * dpr)) {
        return
      }
      cssW = nextW
      cssH = nextH
      canvas.width = Math.floor(nextW * dpr)
      canvas.height = Math.floor(nextH * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      paint(ctx, cssW, cssH, 0, kind, accent, pop, fog, wash)
    }

    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(parent)

    if (reduce || !running) {
      return () => {
        alive = false
        ro.disconnect()
      }
    }

    const start = performance.now()
    const tick = (now: number) => {
      if (!alive) return
      if (cssW > 0 && cssH > 0) {
        paint(ctx, cssW, cssH, (now - start) / 1000, kind, accent, pop, fog, wash)
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      alive = false
      cancelAnimationFrame(frame)
      ro.disconnect()
    }
  }, [accent, fog, kind, pop, reduce, running, wash])

  return (
    <canvas
      ref={canvasRef}
      className={`block h-full w-full ${className}`}
      aria-hidden
    />
  )
}

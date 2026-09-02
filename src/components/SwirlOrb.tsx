import { useEffect, useRef } from "react"
import { useReducedMotion } from "motion/react"

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
  accent: string,
  pop: string,
) {
  ctx.clearRect(0, 0, w, h)
  const a = hexRgb(accent)
  const p = hexRgb(pop)
  const ember = hexRgb("#ff6a3d")
  const cx = w * 0.5
  const cy = h * 0.5
  const span = Math.min(w, h)
  const pad = 40
  const r = Math.max(24, span / 2 - pad)
  const nucleus = Math.max(4, span * 0.017)

  const glow = ctx.createRadialGradient(cx, cy, r * 0.04, cx, cy, r * 1.15)
  glow.addColorStop(0, `rgba(${a.r},${a.g},${a.b},0.38)`)
  glow.addColorStop(0.45, `rgba(${a.r},${a.g},${a.b},0.1)`)
  glow.addColorStop(1, "rgba(0,0,0,0)")
  ctx.fillStyle = glow
  ctx.fillRect(0, 0, w, h)

  ctx.fillStyle = `rgba(${a.r},${a.g},${a.b},0.95)`
  ctx.shadowColor = `rgba(${a.r},${a.g},${a.b},0.85)`
  ctx.shadowBlur = 18
  ctx.beginPath()
  ctx.arc(cx, cy, nucleus, 0, Math.PI * 2)
  ctx.fill()
  ctx.shadowBlur = 0

  const rings = [
    { tilt: 0.42, spin: 0.28, scale: 0.34, color: a, width: 1.15, body: 3.2 },
    { tilt: -0.58, spin: -0.22, scale: 0.46, color: p, width: 0.9, body: 4.6 },
    { tilt: 1.05, spin: 0.16, scale: 0.62, color: a, width: 0.75, body: 3.2 },
    { tilt: -1.22, spin: -0.34, scale: 0.78, color: p, width: 0.65, body: 4.6 },
    { tilt: 0.18, spin: 0.2, scale: 0.88, color: ember, width: 1.35, body: 8.4 },
  ]

  rings.forEach((ring, i) => {
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(t * ring.spin + i * 0.4)
    ctx.scale(1, ring.scale)
    ctx.rotate(ring.tilt)
    ctx.strokeStyle = `rgba(${ring.color.r},${ring.color.g},${ring.color.b},${0.42 + i * 0.08})`
    ctx.lineWidth = ring.width
    ctx.beginPath()
    ctx.ellipse(0, 0, r, r, 0, 0, Math.PI * 2)
    ctx.stroke()

    const ang = t * (0.7 + i * 0.18) + i
    const x = Math.cos(ang) * r
    const y = Math.sin(ang) * r
    ctx.fillStyle = `rgba(${ring.color.r},${ring.color.g},${ring.color.b},0.95)`
    ctx.shadowColor = `rgba(${ring.color.r},${ring.color.g},${ring.color.b},0.8)`
    ctx.shadowBlur = ring.body > 6 ? 16 : 0
    ctx.beginPath()
    ctx.arc(x, y, ring.body, 0, Math.PI * 2)
    ctx.fill()
    ctx.shadowBlur = 0
    ctx.restore()
  })

  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(t * 0.12)
  ctx.strokeStyle = `rgba(${a.r},${a.g},${a.b},0.18)`
  ctx.lineWidth = 0.8
  ctx.beginPath()
  for (let i = 0; i <= 72; i += 1) {
    const u = (i / 72) * Math.PI * 2
    const rr = r * (0.22 + 0.16 * Math.sin(3 * u + t * 0.9))
    const x = Math.cos(u) * rr
    const y = Math.sin(u) * rr
    if (i === 0) ctx.moveTo(x, y)
    else ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.stroke()
  ctx.restore()
}

export function SwirlOrb({
  accent = "#4db0ff",
  pop = "#2ee6c8",
  running = true,
  className = "",
}: {
  accent?: string
  pop?: string
  running?: boolean
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
      paint(ctx, cssW, cssH, 0, accent, pop)
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
        paint(ctx, cssW, cssH, (now - start) / 1000, accent, pop)
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      alive = false
      cancelAnimationFrame(frame)
      ro.disconnect()
    }
  }, [accent, pop, reduce, running])

  return (
    <canvas
      ref={canvasRef}
      className={`block h-full w-full ${className}`}
      aria-hidden
    />
  )
}

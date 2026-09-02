import { useEffect, useRef } from "react"
import { useReducedMotion } from "motion/react"

function hex(n: number) {
  return Math.max(0, Math.min(1, n))
}

function paint(ctx: CanvasRenderingContext2D, w: number, h: number, t: number) {
  ctx.clearRect(0, 0, w, h)
  const cols = 2
  const gap = 2.5
  const brickH = 6
  const brickW = (w - gap * (cols + 1)) / cols
  const rows = Math.ceil((h + brickH) / (brickH + gap))
  const cascade = ((t * 92) % (h + 120)) - 40

  for (let row = 0; row < rows; row += 1) {
    const y = row * (brickH + gap) + gap
    const stagger = row % 2 === 0 ? 0 : brickW * 0.18
    for (let col = 0; col < cols; col += 1) {
      const x = gap + col * (brickW + gap) + stagger * (col === 0 ? 1 : -0.4)
      const dist = Math.abs(y + brickH * 0.5 - cascade)
      const band = hex(1 - dist / 58)
      const idle = 0.1 + 0.08 * (0.5 + 0.5 * Math.sin(t * 1.8 + row * 0.35 + col))
      const glow = idle + band * 0.72
      const hot = band > 0.35
      ctx.fillStyle = hot
        ? `rgba(77,176,255,${0.28 + band * 0.72})`
        : `rgba(77,176,255,${glow})`
      ctx.fillRect(x, y, brickW - stagger * 0.15, brickH)
      if (hot) {
        ctx.fillStyle = `rgba(180,228,255,${band * 0.55})`
        ctx.fillRect(x, y, brickW - stagger * 0.15, Math.max(1, brickH * 0.35))
      }
    }
  }
}

export function CascadeRail({ className = "" }: { className?: string }) {
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
      paint(ctx, cssW, cssH, 0)
    }

    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(parent)

    if (reduce) {
      return () => {
        alive = false
        ro.disconnect()
      }
    }

    const start = performance.now()
    const tick = (now: number) => {
      if (!alive) return
      if (cssW > 0 && cssH > 0) {
        paint(ctx, cssW, cssH, (now - start) / 1000)
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      alive = false
      cancelAnimationFrame(frame)
      ro.disconnect()
    }
  }, [reduce])

  return (
    <canvas
      ref={canvasRef}
      className={`block h-full w-full ${className}`}
      aria-hidden
    />
  )
}

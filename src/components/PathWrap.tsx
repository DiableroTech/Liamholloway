import { useEffect, useRef } from "react"
import { useReducedMotion } from "motion/react"
import { bindFieldCues, fieldCues, type BeatCue } from "../lib/field-cues"

const PAD = 1
const NODE_INSET = 7
const RADIUS = 16
const DRAW_S = 1.75
const PULSE_S = 0.45

function easeInOutCubic(t: number) {
  const x = Math.max(0, Math.min(1, t))
  return x < 0.5 ? 4 * x * x * x : 1 - (-2 * x + 2) ** 3 / 2
}

function slotStroke(beat: BeatCue) {
  const x = beat.left - PAD
  const y = beat.top - PAD
  const w = beat.width + PAD * 2
  const h = beat.height + PAD * 2
  const r = Math.min(RADIUS + PAD, w / 2 - 0.5, h / 2 - 0.5)
  const midY = y + h / 2
  const nearRight = x + w / 2 < beat.nodeX
  const attachX = nearRight ? x + w : x
  const farX = nearRight ? x : x + w
  const inward = nearRight ? -1 : 1
  const sweepUp = nearRight ? 0 : 1
  const sweepDown = nearRight ? 1 : 0

  const dir = attachX >= beat.nodeX ? 1 : -1
  const sx =
    Math.abs(attachX - beat.nodeX) > NODE_INSET + 2
      ? beat.nodeX + dir * NODE_INSET
      : beat.nodeX
  const branchLen = Math.abs(attachX - sx)
  const wrapLen = w + h - 4 * r + Math.PI * r

  return {
    up: `M ${sx} ${midY} L ${attachX} ${midY} L ${attachX} ${y + r} A ${r} ${r} 0 0 ${sweepUp} ${attachX + inward * r} ${y} L ${farX - inward * r} ${y} A ${r} ${r} 0 0 ${sweepUp} ${farX} ${y + r} L ${farX} ${midY}`,
    down: `M ${sx} ${midY} L ${attachX} ${midY} L ${attachX} ${y + h - r} A ${r} ${r} 0 0 ${sweepDown} ${attachX + inward * r} ${y + h} L ${farX - inward * r} ${y + h} A ${r} ${r} 0 0 ${sweepDown} ${farX} ${y + h - r} L ${farX} ${midY}`,
    len: branchLen + wrapLen,
  }
}

function stepClock(current: number, on: boolean, moving: boolean, dt: number, duration: number) {
  if (!moving) return on ? 1 : 0
  const next = current + (on ? dt : -dt) / duration
  return Math.max(0, Math.min(1, next))
}

export function PathWrap() {
  const svgRef = useRef<SVGSVGElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return
    const unbind = bindFieldCues()
    const clocks: number[] = []
    const pulses: number[] = []
    let orbs: HTMLElement[] = []
    let frame = 0
    let alive = true
    let last = performance.now()
    let breathT = 0

    const syncOrbs = () => {
      orbs = Array.from(document.querySelectorAll<HTMLElement>("[data-path-orb]"))
    }
    syncOrbs()

    const paint = (moving: boolean, dt: number) => {
      const beats = fieldCues.beats
      if (orbs.length !== beats.length) syncOrbs()
      while (clocks.length < beats.length) {
        clocks.push(0)
        pulses.push(0)
      }
      clocks.length = beats.length
      pulses.length = beats.length

      const primary = fieldCues.primaryBeat
      const nodes: string[] = []

      beats.forEach((beat, i) => {
        const on = i === primary
        clocks[i] = stepClock(clocks[i] ?? 0, on, moving, dt, DRAW_S)
        pulses[i] = stepClock(pulses[i] ?? 0, on, moving, dt, PULSE_S)
        const draw = easeInOutCubic(clocks[i] ?? 0)

        const orb = orbs[i]
        if (orb) {
          const live = pulses[i] ?? 0
          if (reduce) {
            const scale = on ? 2 : 1
            orb.style.transform = scale > 1 ? `scale(${scale})` : ""
            orb.style.boxShadow = on
              ? "0 0 28px #2ee6c8, 0 0 48px rgba(46,230,200,0.55)"
              : ""
          } else {
            const breath = live * 0.12 * Math.sin(breathT * 2.15)
            const scale = 1 + live * 1.05 + breath
            orb.style.transform = live > 0.01 ? `scale(${scale})` : ""
            orb.style.boxShadow =
              live > 0.01
                ? `0 0 ${14 + live * 18}px #2ee6c8, 0 0 ${26 + live * 24}px rgba(46,230,200,${0.22 + live * 0.4})`
                : ""
          }
        }

        if (draw < 0.01 || beat.width < 2 || beat.nodeX <= 0) return
        const { up, down, len } = slotStroke(beat)
        if (len < 2) return
        const offset = len * (1 - draw)
        const opacity = 0.4 + draw * 0.6
        nodes.push(
          `<path fill="none" d="${up}" pathLength="${len}" stroke-dasharray="${len}" stroke-dashoffset="${offset}" stroke="#4db0ff" stroke-width="1.4" stroke-linejoin="round" stroke-linecap="round" opacity="${opacity}" />`,
          `<path fill="none" d="${down}" pathLength="${len}" stroke-dasharray="${len}" stroke-dashoffset="${offset}" stroke="#2ee6c8" stroke-width="1.1" stroke-linejoin="round" stroke-linecap="round" opacity="${opacity}" />`,
        )
      })
      svg.innerHTML = nodes.join("")
    }

    const tick = (now: number) => {
      if (!alive) return
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      breathT += dt
      paint(!reduce, dt)
      frame = requestAnimationFrame(tick)
    }

    const onHidden = () => {
      if (document.hidden) {
        alive = false
        cancelAnimationFrame(frame)
        return
      }
      if (reduce) {
        paint(false, 1)
        return
      }
      alive = true
      last = performance.now()
      frame = requestAnimationFrame(tick)
    }

    document.addEventListener("visibilitychange", onHidden)
    const onScrollPaint = () => {
      if (reduce) paint(false, 1)
    }
    window.addEventListener("scroll", onScrollPaint, { passive: true })
    window.addEventListener("resize", onScrollPaint)

    if (reduce) {
      paint(false, 1)
    } else {
      frame = requestAnimationFrame(tick)
    }

    return () => {
      alive = false
      cancelAnimationFrame(frame)
      unbind()
      orbs.forEach((orb) => {
        orb.style.transform = ""
        orb.style.boxShadow = ""
      })
      document.removeEventListener("visibilitychange", onHidden)
      window.removeEventListener("scroll", onScrollPaint)
      window.removeEventListener("resize", onScrollPaint)
    }
  }, [reduce])

  return (
    <svg
      ref={svgRef}
      className="pointer-events-none fixed inset-0 z-20"
      style={{ mixBlendMode: "plus-lighter" }}
      width="100%"
      height="100%"
      aria-hidden
    />
  )
}

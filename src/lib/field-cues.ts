export type BeatCue = {
  enter: number
  left: number
  top: number
  width: number
  height: number
  nodeX: number
  nodeY: number
}

export const fieldCues = {
  viewW: 1,
  viewH: 1,
  aboutEnter: 0,
  aboutPx: 0,
  aboutPy: 0,
  pathEnter: 0,
  primaryBeat: -1,
  beats: [] as BeatCue[],
}

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n))
}

function visibleBand(rect: DOMRect, viewH: number) {
  return Math.max(0, Math.min(rect.bottom, viewH) - Math.max(rect.top, 0))
}

function measure() {
  const viewW = window.innerWidth
  const viewH = window.innerHeight
  fieldCues.viewW = viewW
  fieldCues.viewH = viewH

  const about = document.getElementById("about")
  if (about) {
    const rect = about.getBoundingClientRect()
    const visTop = Math.max(rect.top, 0)
    const vis = visibleBand(rect, viewH)
    fieldCues.aboutEnter = clamp01(vis / viewH / 0.42)
    fieldCues.aboutPx = rect.left + rect.width * 0.74
    fieldCues.aboutPy = visTop + vis * 0.32
  } else {
    fieldCues.aboutEnter = 0
  }

  const path = document.getElementById("path")
  if (path) {
    const rect = path.getBoundingClientRect()
    fieldCues.pathEnter = clamp01(visibleBand(rect, viewH) / viewH / 0.35)
  } else {
    fieldCues.pathEnter = 0
  }

  const cards = document.querySelectorAll<HTMLElement>("[data-path-card]")
  const nodes = document.querySelectorAll<HTMLElement>("[data-path-node]")
  if (fieldCues.beats.length !== cards.length) {
    fieldCues.beats = Array.from({ length: cards.length }, () => ({
      enter: 0,
      left: 0,
      top: 0,
      width: 0,
      height: 0,
      nodeX: 0,
      nodeY: 0,
    }))
  }

  let primary = -1
  let best = 0.08
  cards.forEach((card, i) => {
    const rect = card.getBoundingClientRect()
    const vis = visibleBand(rect, viewH)
    const beat = fieldCues.beats[i]
    if (!beat) return
    beat.enter = clamp01(vis / Math.min(rect.height, viewH * 0.7))
    beat.left = rect.left
    beat.top = rect.top
    beat.width = rect.width
    beat.height = rect.height
    const node = nodes[i]
    if (node) {
      const nr = node.getBoundingClientRect()
      beat.nodeX = nr.left + nr.width / 2
    }
    beat.nodeY = rect.top + rect.height / 2
    if (beat.enter > best) {
      best = beat.enter
      primary = i
    }
  })
  fieldCues.primaryBeat = fieldCues.pathEnter > 0.12 ? primary : -1
}

let binds = 0
let unbindCore: (() => void) | null = null

export function bindFieldCues() {
  binds += 1
  if (!unbindCore) {
    const onMeasure = () => measure()
    window.addEventListener("scroll", onMeasure, { passive: true })
    window.addEventListener("resize", onMeasure)
    measure()
    const boot = requestAnimationFrame(measure)
    unbindCore = () => {
      cancelAnimationFrame(boot)
      window.removeEventListener("scroll", onMeasure)
      window.removeEventListener("resize", onMeasure)
    }
  }
  return () => {
    binds -= 1
    if (binds > 0) return
    unbindCore?.()
    unbindCore = null
    binds = 0
  }
}

import { useEffect, useRef } from "react"
import { useReducedMotion } from "motion/react"
import {
  AdditiveBlending,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  Sprite,
  SpriteMaterial,
  Vector3,
  WebGLRenderer,
} from "three"
import { bindFieldCues, fieldCues } from "../lib/field-cues"

const ACCENT = new Color("#4db0ff")
const POP = new Color("#2ee6c8")
const FOG = "#02060d"

function paintOrbMap(kind: "core" | "body" | "bloom") {
  const size = 256
  const sheet = document.createElement("canvas")
  sheet.width = size
  sheet.height = size
  const ctx = sheet.getContext("2d")
  if (!ctx) return sheet
  const mid = size / 2
  const g = ctx.createRadialGradient(mid * 0.72, mid * 0.68, 0, mid, mid, mid)
  if (kind === "core") {
    g.addColorStop(0, "rgba(236, 255, 250, 1)")
    g.addColorStop(0.16, "rgba(46, 230, 200, 0.9)")
    g.addColorStop(0.38, "rgba(77, 176, 255, 0.28)")
    g.addColorStop(1, "rgba(0, 0, 0, 0)")
  } else if (kind === "body") {
    g.addColorStop(0, "rgba(180, 220, 255, 0.52)")
    g.addColorStop(0.2, "rgba(77, 176, 255, 0.72)")
    g.addColorStop(0.42, "rgba(20, 70, 130, 0.36)")
    g.addColorStop(0.58, "rgba(2, 6, 13, 0.34)")
    g.addColorStop(0.74, "rgba(46, 230, 200, 0.1)")
    g.addColorStop(1, "rgba(0, 0, 0, 0)")
  } else {
    g.addColorStop(0, "rgba(77, 176, 255, 0.3)")
    g.addColorStop(0.3, "rgba(46, 230, 200, 0.12)")
    g.addColorStop(0.62, "rgba(77, 176, 255, 0.05)")
    g.addColorStop(1, "rgba(0, 0, 0, 0)")
  }
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  return sheet
}

function makeOrbSprite(kind: "core" | "body" | "bloom", scale: number) {
  const map = new CanvasTexture(paintOrbMap(kind))
  const material = new SpriteMaterial({
    map,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    opacity: 0,
  })
  const sprite = new Sprite(material)
  sprite.scale.set(scale, scale, 1)
  return { sprite, material, map }
}

function buildCloud(cols: number, rows: number, gap: number) {
  const count = cols * rows
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  const ox = ((cols - 1) * gap) / 2
  const oy = ((rows - 1) * gap) / 2
  let i = 0
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const i3 = i * 3
      const x = col * gap - ox
      const y = row * gap - oy
      positions[i3] = x
      positions[i3 + 1] = y
      positions[i3 + 2] = Math.sin(x * 0.59 + y * 0.4) * 2
      const c = (col + row) % 4 === 0 ? POP : ACCENT
      colors[i3] = c.r
      colors[i3 + 1] = c.g
      colors[i3 + 2] = c.b
      i += 1
    }
  }
  const geo = new BufferGeometry()
  geo.setAttribute("position", new BufferAttribute(positions, 3))
  geo.setAttribute("color", new BufferAttribute(colors, 3))
  return geo
}

export function DotField3() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduce = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const parent = canvas.parentElement
    if (!parent) return

    const scene = new Scene()
    scene.background = new Color(FOG)

    const camera = new PerspectiveCamera(55, 1, 0.1, 80)
    camera.position.z = 16

    const renderer = new WebGLRenderer({ canvas, antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5))
    renderer.setClearColor(FOG, 1)

    const geo = buildCloud(52, 34, 0.7)
    const mat = new PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.84,
      depthWrite: false,
      blending: AdditiveBlending,
      sizeAttenuation: true,
    })
    const cloud = new Points(geo, mat)
    scene.add(cloud)

    const core = makeOrbSprite("core", 0.95)
    const body = makeOrbSprite("body", 2.05)
    const bloom = makeOrbSprite("bloom", 3.6)
    scene.add(bloom.sprite, body.sprite, core.sprite)

    const ndc = new Vector3()
    const ray = new Vector3()
    const pinned = new Vector3()

    const pin = (px: number, py: number, dist: number, out: Vector3) => {
      const { viewW, viewH } = fieldCues
      ndc.set((px / viewW) * 2 - 1, -(py / viewH) * 2 + 1, 0.5)
      ndc.unproject(camera)
      ray.copy(ndc).sub(camera.position).normalize()
      out.copy(camera.position).addScaledVector(ray, dist)
    }

    const pos = geo.getAttribute("position")
    const baseZ = new Float32Array(pos.count)
    for (let i = 0; i < pos.count; i += 1) baseZ[i] = pos.getZ(i)

    const pointer = { x: 0, y: 0 }
    const onMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1
      pointer.y = (event.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener("pointermove", onMove)
    const unbindCues = bindFieldCues()

    let cssW = 0
    let cssH = 0
    const fit = () => {
      const nextW = Math.max(1, parent.clientWidth)
      const nextH = Math.max(1, parent.clientHeight)
      if (nextW === cssW && nextH === cssH) return
      cssW = nextW
      cssH = nextH
      camera.aspect = nextW / nextH
      camera.updateProjectionMatrix()
      renderer.setSize(nextW, nextH, false)
    }

    fit()
    const ro = new ResizeObserver(fit)
    ro.observe(parent)

    let frame = 0
    let alive = true
    const start = performance.now()
    let last = start

    const applyField = (t: number, dt: number, moving: boolean) => {
      if (moving) {
        const targetX = Math.sin(t * 0.11) * 0.32 + pointer.x * 1.35
        const targetY = Math.cos(t * 0.08) * 0.2 - pointer.y * 0.85
        camera.position.x += (targetX - camera.position.x) * 0.035
        camera.position.y += (targetY - camera.position.y) * 0.035
      }
      camera.lookAt(0, 0, 0)

      if (moving) {
        for (let i = 0; i < pos.count; i += 1) {
          const x = pos.getX(i)
          const y = pos.getY(i)
          pos.setZ(i, baseZ[i] + Math.sin(t * 0.1 + x * 1.2 + y * 0.77) * 0.35)
        }
        pos.needsUpdate = true
      }

      const fade = moving ? 1 - Math.exp(-dt / 2.4) : 1
      const aboutOn = fieldCues.aboutEnter
      const floatX = moving ? Math.sin(t * 0.55) * 0.16 : 0
      const floatY = moving ? Math.cos(t * 0.42) * 0.12 : 0
      const pulse = moving ? Math.sin(t * 0.8) * 0.08 : 0
      pin(fieldCues.aboutPx, fieldCues.aboutPy, 9, pinned)
      pinned.x += floatX
      pinned.y += floatY
      bloom.sprite.position.copy(pinned)
      body.sprite.position.copy(pinned)
      core.sprite.position.copy(pinned)
      bloom.sprite.scale.setScalar(3.6 + pulse)
      body.sprite.scale.setScalar(2.05 + pulse * 0.4)
      core.material.opacity += ((0.95 * aboutOn) - core.material.opacity) * fade
      body.material.opacity += ((0.82 * aboutOn) - body.material.opacity) * fade
      bloom.material.opacity += ((0.48 * aboutOn) - bloom.material.opacity) * fade
      const orbShown = body.material.opacity > 0.012
      core.sprite.visible = orbShown
      body.sprite.visible = orbShown
      bloom.sprite.visible = orbShown

      renderer.render(scene, camera)
    }

    const tick = (now: number) => {
      if (!alive) return
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      applyField((now - start) / 1000, dt, !reduce)
      frame = requestAnimationFrame(tick)
    }

    const onHidden = () => {
      if (document.hidden) {
        alive = false
        cancelAnimationFrame(frame)
        return
      }
      if (reduce) return
      alive = true
      last = performance.now()
      frame = requestAnimationFrame(tick)
    }

    document.addEventListener("visibilitychange", onHidden)

    if (reduce) {
      applyField(0, 1, false)
    } else {
      frame = requestAnimationFrame(tick)
    }

    return () => {
      alive = false
      cancelAnimationFrame(frame)
      ro.disconnect()
      unbindCues()
      window.removeEventListener("pointermove", onMove)
      document.removeEventListener("visibilitychange", onHidden)
      geo.dispose()
      mat.dispose()
      for (const layer of [core, body, bloom]) {
        layer.map.dispose()
        layer.material.dispose()
      }
      renderer.dispose()
    }
  }, [reduce])

  return (
    <canvas
      ref={canvasRef}
      className="block h-full w-full"
      aria-hidden
    />
  )
}

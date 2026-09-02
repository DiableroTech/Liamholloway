import { motion, useReducedMotion, useScroll, useSpring } from "motion/react"

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const reduce = useReducedMotion()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: reduce ? 400 : 140,
    damping: reduce ? 40 : 28,
    restDelta: 0.001,
  })

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-line/55"
      role="progressbar"
      aria-hidden
    >
      <motion.div
        className="h-full origin-left bg-accent shadow-[0_0_14px_var(--color-accent)]"
        style={{ scaleX }}
      />
    </div>
  )
}

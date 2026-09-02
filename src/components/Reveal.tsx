import { type ReactNode } from "react"
import { motion, useReducedMotion } from "motion/react"

export function Reveal({
  children,
  className,
  from = "up",
}: {
  children: ReactNode
  className?: string
  from?: "up" | "left" | "right"
}) {
  const reduce = useReducedMotion()
  const hidden =
    from === "left"
      ? { opacity: 0, x: -36 }
      : from === "right"
        ? { opacity: 0, x: 36 }
        : { opacity: 0, y: 28 }

  return (
    <motion.div
      className={className}
      initial={reduce ? false : hidden}
      whileInView={reduce ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ type: "spring", stiffness: 90, damping: 18 }}
    >
      {children}
    </motion.div>
  )
}

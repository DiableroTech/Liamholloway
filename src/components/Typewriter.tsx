import { useEffect, useState } from "react"
import { useReducedMotion } from "motion/react"

export function Typewriter({
  phrases,
}: {
  phrases: readonly string[]
}) {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduce) return

    const full = phrases[index]
    const done = !deleting && text === full
    const empty = deleting && text === ""

    if (done) {
      const pause = window.setTimeout(() => setDeleting(true), 1700)
      return () => window.clearTimeout(pause)
    }

    if (empty) {
      const next = window.setTimeout(() => {
        setDeleting(false)
        setIndex((i) => (i + 1) % phrases.length)
      }, 0)
      return () => window.clearTimeout(next)
    }

    const delay = deleting ? 26 : 54
    const tick = window.setTimeout(() => {
      setText(
        deleting
          ? full.slice(0, Math.max(0, text.length - 1))
          : full.slice(0, text.length + 1),
      )
    }, delay)

    return () => window.clearTimeout(tick)
  }, [deleting, index, phrases, reduce, text])

  return (
    <span className="text-accent">
      {reduce ? phrases[0] : text}
      {reduce ? null : <span className="type-caret" aria-hidden="true" />}
    </span>
  )
}

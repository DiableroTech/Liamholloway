import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { heroDeck } from "../content/hero"
import { site } from "../content/site"
import { HudCorners } from "./HudCorners"

const INTERVAL_MS = 5200

export function HeroDeck() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const card = heroDeck[index] ?? heroDeck[0]
  const href = card.href || site.blog || "#"
  const external = href.startsWith("http")

  useEffect(() => {
    if (reduce || paused) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroDeck.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused, reduce])

  return (
    <div
      className="relative w-full max-w-[28rem] lg:w-[28rem] lg:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[20rem] w-full md:h-[22rem]">
        <AnimatePresence>
          <motion.a
            key={card.title}
            href={href}
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            className="surface absolute inset-0 flex flex-col px-6 py-6 no-underline md:px-8 md:py-8"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1] }}
          >
            <HudCorners />
            <p className="kicker">{card.kicker}</p>
            <p className="section-title mt-3 text-3xl md:text-4xl">{card.title}</p>
            <p className="mt-4 max-w-[36ch] flex-1 text-[15px] leading-relaxed text-mute">
              {card.body}
            </p>
            <p className="mt-auto pt-6 text-[12px] tracking-[0.16em] text-accent uppercase">
              {card.action} →
            </p>
          </motion.a>
        </AnimatePresence>
      </div>
      <div className="mt-5 flex items-center gap-2" role="tablist" aria-label="Highlights">
        {heroDeck.map((item, i) => {
          const on = i === index
          return (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={on}
              aria-label={item.title}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                on ? "w-8 bg-accent" : "w-3 bg-line hover:bg-accent/50"
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}

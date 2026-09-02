import { motion, useReducedMotion } from "motion/react"
import { heroCopy, heroPoints } from "../content/hero"
import { Button } from "./Button"
import { HeroDeck } from "./HeroDeck"
import { CascadeRail } from "./CascadeRail"
import { Typewriter } from "./Typewriter"

const PILL_GAPS = [0, 0.42, 0.34, 0.22, 0.18, 0.4, 0.52] as const

function pillDelay(index: number) {
  let delay = 0.85
  for (let i = 0; i <= index; i += 1) delay += PILL_GAPS[i] ?? 0.28
  return delay
}

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section className="relative z-10 flex flex-1 flex-col justify-center px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:pr-24">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-20">
        <div className="flex min-w-0 flex-1 items-stretch gap-8 md:gap-12">
          <div className="w-12 shrink-0 self-stretch md:w-16">
            <CascadeRail />
          </div>
          <div className="min-w-0">
            <div className="hero-text max-w-[62ch]">
              <h1 className="font-hero text-3xl font-semibold uppercase leading-[1.15] tracking-tight text-accent md:text-5xl lg:text-6xl">
                <span className="block text-paper">{heroCopy.lead}</span>
                <span className="block min-h-[1.15em] pb-1 normal-case">
                  <Typewriter phrases={heroCopy.phrases} />
                </span>
              </h1>
              <p className="mt-5 max-w-[52ch] text-[17px] leading-snug text-paper md:text-xl md:leading-snug">
                {heroCopy.subhead}
              </p>
              <p className="mt-4 max-w-[54ch] text-[13px] leading-relaxed text-mute md:text-sm">
                {heroCopy.body}
              </p>
            </div>
            <ul className="mt-7 flex max-w-[62ch] flex-wrap gap-2">
              {heroPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.95,
                    delay: reduce ? 0 : pillDelay(i),
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`rounded-full border px-3 py-1.5 text-[11px] tracking-wide text-paper uppercase ${
                    i === 0 || i === 3
                      ? "border-accent/70 bg-accent/10"
                      : i === 5
                        ? "border-pop/50 text-pop"
                        : "border-line bg-ink/40"
                  }`}
                >
                  {point}
                </motion.li>
              ))}
            </ul>
            <div className="hero-actions mt-8">
              <Button href="#work">Work</Button>
              <Button href="#contact" variant="ghost">
                Contact
              </Button>
            </div>
          </div>
        </div>
        <div className="shrink-0 lg:self-center">
          <HeroDeck />
        </div>
      </div>
    </section>
  )
}

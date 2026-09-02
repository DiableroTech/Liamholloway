import { motion, useReducedMotion } from "motion/react"
import { Button } from "./Button"
import { Reveal } from "./Reveal"

export function Hire() {
  const reduce = useReducedMotion()

  return (
    <section id="hire" className="has-grid scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <motion.div
            className="surface relative overflow-hidden px-6 py-12 md:px-12 md:py-16"
            whileHover={reduce ? undefined : { y: -3 }}
          >
            <span className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-linear-to-b from-accent to-pop" />
            <p className="kicker">Available</p>
            <h2 className="section-title mt-3 max-w-[18ch] text-3xl md:text-5xl">
              Frontend work. Web and phones.
            </h2>
            <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-mute">
              Placeholder CTA. Keep this short when you lock the offer. One
              action. Same label as the rest of the site.
            </p>
            <div className="mt-8">
              <Button href="#contact">Contact</Button>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

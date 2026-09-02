import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { CaretDown } from "@phosphor-icons/react"
import { faqs } from "../content/sections"
import { Reveal } from "./Reveal"

export function Faq() {
  const [open, setOpen] = useState(0)
  const reduce = useReducedMotion()

  return (
    <section id="faq" className="has-grid scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="kicker">Questions</p>
          <h2 className="section-title mt-3 text-3xl md:text-5xl">FAQ</h2>
          <p className="mt-4 max-w-[52ch] text-base text-mute">
            Draft answers. Rewrite these when you know what people actually ask.
          </p>
        </Reveal>

        <ul className="mt-10 max-w-3xl divide-y divide-line border-y border-line">
          {faqs.map((item, i) => {
            const on = open === i
            return (
              <li key={item.q}>
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => setOpen(on ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-[17px] font-medium text-paper md:text-xl">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: on ? 180 : 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="text-pop"
                  >
                    <CaretDown size={18} weight="bold" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {on ? (
                    <motion.div
                      initial={reduce ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 max-w-[62ch] text-[15px] leading-relaxed text-mute">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

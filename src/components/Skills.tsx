import { useState } from "react"
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react"
import { skillLanes } from "../content/sections"
import { Reveal } from "./Reveal"

export function Skills() {
  const [lane, setLane] = useState<(typeof skillLanes)[number]["id"]>("web")
  const reduce = useReducedMotion()
  const active = skillLanes.find((item) => item.id === lane) ?? skillLanes[0]

  return (
    <section id="skills" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="kicker">Stack</p>
          <h2 className="section-title mt-3 text-3xl md:text-5xl">Skills</h2>
        </Reveal>

        <div className="mt-10 flex flex-col gap-8 lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">
          <LayoutGroup>
          <div className="flex flex-row flex-wrap gap-2 lg:flex-col">
            {skillLanes.map((item) => {
              const on = item.id === lane
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLane(item.id)}
                  className={`relative rounded-[var(--radius-box)] px-4 py-3 text-left text-[13px] transition-colors duration-200 ${
                    on
                      ? "text-paper"
                      : "text-mute hover:text-paper"
                  }`}
                >
                  {on ? (
                    <motion.span
                      layoutId="skill-tab"
                      className="absolute inset-0 rounded-[var(--radius-box)] border border-accent/70 bg-ink-2 shadow-[0_0_20px_rgb(59_148_230_/_0.16)]"
                      transition={{ type: "spring", stiffness: 360, damping: 34 }}
                    />
                  ) : (
                    <span className="absolute inset-0 rounded-[var(--radius-box)] border border-line" />
                  )}
                  <span className="relative z-10">
                    <span className="text-pop">// </span>
                    {item.label}
                  </span>
                </button>
              )
            })}
          </div>
          </LayoutGroup>

          <div className="min-h-[220px]">
            <p className="mb-5 text-[13px] text-mute">{active.hint}</p>
            <AnimatePresence mode="wait">
              <motion.ul
                key={active.id}
                className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3"
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                {active.items.map((item, i) => (
                  <motion.li
                    key={item.name}
                    className="surface px-4 py-4"
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : i * 0.045, duration: 0.32 }}
                    whileHover={reduce ? undefined : { y: -3 }}
                  >
                    <p className="font-display text-[15px] font-medium text-paper">
                      {item.name}
                    </p>
                    <p className="mt-1 text-[12px] tracking-wide text-pop uppercase">
                      {item.note}
                    </p>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

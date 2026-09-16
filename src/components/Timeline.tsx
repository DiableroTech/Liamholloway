import { motion, useReducedMotion } from "motion/react"
import { path } from "../content/sections"
import { PathWrap } from "./PathWrap"
import { Reveal } from "./Reveal"

function Corners() {
  return (
    <>
      <span className="pointer-events-none absolute top-3 left-3 h-2.5 w-2.5 border-t border-l border-pop/80" />
      <span className="pointer-events-none absolute top-3 right-3 h-2.5 w-2.5 border-t border-r border-pop/80" />
      <span className="pointer-events-none absolute bottom-3 left-3 h-2.5 w-2.5 border-b border-l border-pop/80" />
      <span className="pointer-events-none absolute right-3 bottom-3 h-2.5 w-2.5 border-r border-b border-pop/80" />
    </>
  )
}

export function Timeline() {
  const reduce = useReducedMotion()

  return (
    <section id="path" className="relative scroll-mt-20 border-t border-line">
      <PathWrap />
      <div className="relative mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="kicker">Path</p>
          <h2 className="section-title mt-3 text-3xl md:text-5xl">Timeline</h2>
          <p className="mt-4 max-w-[52ch] text-base text-mute">
            Dates and copy are scaffolds. Swap in the beats you want named.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute top-0 bottom-0 left-[15px] w-px -translate-x-1/2 bg-line md:left-1/2" />

          <ol>
            {path.map((item, i) => {
              const left = i % 2 === 0
              return (
                <li
                  key={item.title}
                  data-path-beat={i}
                  className="relative grid grid-cols-[32px_1fr] items-start gap-4 py-6 md:grid-cols-[1fr_32px_1fr] md:gap-8 md:py-10"
                >
                  <motion.div
                    data-path-node
                    className="relative z-10 flex h-8 w-8 origin-center items-center justify-center self-center overflow-visible md:col-start-2 md:row-start-1"
                    initial={reduce ? false : { scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-8%" }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  >
                    <span
                      data-path-orb
                      className="block h-3.5 w-3.5 origin-center rounded-full bg-pop shadow-[0_0_14px_var(--color-pop)]"
                    />
                  </motion.div>

                  <motion.article
                    data-path-card
                    className={`path-card relative px-6 py-6 md:row-start-1 ${
                      left ? "md:col-start-1" : "md:col-start-3"
                    }`}
                    initial={
                      reduce
                        ? false
                        : { opacity: 0, x: left ? -28 : 28 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={reduce ? undefined : { y: -4 }}
                  >
                    <Corners />
                    <p className="pr-8 font-display text-xl font-medium tracking-tight text-paper md:text-2xl">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[14px] text-pop">{item.role}</p>
                    <p className="mt-1 text-[13px] text-mute md:hidden">
                      {item.when} · {item.where}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-mute">
                      {item.body}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-accent/40 px-3 py-1 text-[11px] tracking-wide text-paper uppercase"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </motion.article>

                  <motion.p
                    className={`hidden rounded-full border border-line bg-ink px-3 py-1.5 text-[11px] tracking-wide text-mute uppercase self-start md:row-start-1 md:inline-flex md:items-center ${
                      left
                        ? "md:col-start-3 md:justify-self-start"
                        : "md:col-start-1 md:justify-self-end"
                    }`}
                    initial={reduce ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                  >
                    {item.when} · {item.where}
                  </motion.p>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

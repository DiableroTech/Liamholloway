import { useRef, useState } from "react"
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react"
import { projects } from "../content/projects"
import { HudCorners } from "./HudCorners"
import { Reveal } from "./Reveal"
import { SwirlOrb } from "./SwirlOrb"

export function Work() {
  const [active, setActive] = useState(projects[0].slug)
  const project = projects.find((item) => item.slug === active) ?? projects[0]
  const stageRef = useRef<HTMLDivElement>(null)
  const inView = useInView(stageRef, { margin: "20% 0px" })
  const reduce = useReducedMotion()

  return (
    <section id="work" className="scroll-mt-20 overflow-visible border-t border-line">
      <div className="relative mx-auto max-w-[1400px] overflow-visible px-4 py-20 md:px-8 md:py-28">
        <Reveal from="left">
          <p className="kicker">Selected</p>
          <h2 className="section-title mt-3 text-3xl md:text-5xl">Work</h2>
        </Reveal>

        <div ref={stageRef} className="relative mt-12 min-h-[560px] overflow-visible lg:min-h-[720px]">
          <div className="pointer-events-none relative z-0 mx-auto mb-10 h-[26rem] w-[26rem] overflow-visible lg:absolute lg:top-[48%] lg:left-0 lg:mb-0 lg:h-[40rem] lg:w-[40rem] lg:-translate-y-1/2">
            <SwirlOrb running={inView} />
          </div>

          <Reveal from="right" className="relative z-10 ml-auto w-full lg:w-[46%]">
            <div className="surface relative px-5 py-8 shadow-[0_0_40px_rgb(77_176_255_/_0.08)] md:px-8 md:py-10">
              <HudCorners />
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.slug}
                  initial={reduce ? false : { opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={reduce ? undefined : { opacity: 0, x: -16 }}
                  transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="kicker">{project.kicker}</p>
                  <h3 className="section-title mt-3 text-3xl md:text-5xl">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-[14px] text-paper">{project.role}</p>
                  <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-mute">
                    {project.summary}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-accent/40 px-3 py-1 text-[11px] tracking-wide text-paper uppercase"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>

              <ul className="mt-8 flex flex-col gap-2">
                {projects.map((item) => {
                  const on = item.slug === active
                  return (
                    <li key={item.slug}>
                      <button
                        type="button"
                        onClick={() => setActive(item.slug)}
                        className={`flex w-full items-center justify-between gap-3 rounded-[var(--radius-box)] border px-4 py-3 text-left transition-[border-color,box-shadow,background-color] duration-200 ${
                          on
                            ? "border-accent bg-ink shadow-[0_0_22px_rgb(77_176_255_/_0.22)]"
                            : "border-line bg-ink/40 hover:border-accent/45"
                        }`}
                      >
                        <span>
                          <span className="block text-[11px] tracking-[0.16em] text-mute uppercase">
                            {item.status}
                          </span>
                          <span className="mt-0.5 block font-hero text-[14px] tracking-wide text-paper uppercase">
                            {item.name}
                          </span>
                        </span>
                        <span
                          className={`text-[12px] ${on ? "text-pop" : "text-mute"}`}
                        >
                          {on ? "Active" : "Open"}
                        </span>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

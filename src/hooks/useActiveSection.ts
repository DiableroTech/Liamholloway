import { useEffect, useState } from "react"

export const NAV_SECTIONS = [
  "work",
  "skills",
  "path",
  "about",
  "contact",
] as const

export type SectionId = (typeof NAV_SECTIONS)[number]

const ALIAS: Record<string, SectionId> = {
  work: "work",
  skills: "skills",
  path: "path",
  about: "about",
  faq: "about",
  hire: "contact",
  contact: "contact",
}

export function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null)

  useEffect(() => {
    const els = Object.keys(ALIAS)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!hit) return
        const mapped = ALIAS[hit.target.id]
        if (mapped) setActive(mapped)
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0, 0.2, 0.4, 0.6] },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return active
}

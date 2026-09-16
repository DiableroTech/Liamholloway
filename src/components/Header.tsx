import { LayoutGroup, motion } from "motion/react"
import { useActiveSection } from "../hooks/useActiveSection"
import { ScrollProgress } from "./ScrollProgress"

const links = [
  { href: "#work", id: "work", label: "Work" },
  { href: "#skills", id: "skills", label: "Skills" },
  { href: "#path", id: "path", label: "Path" },
  { href: "#about", id: "about", label: "About" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const

export function Header() {
  const active = useActiveSection()

  return (
    <header className="sticky top-0 z-50 shrink-0 border-b border-line/70 bg-ink/80 backdrop-blur-md relative">
      <ScrollProgress />
      <div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between gap-4 px-4 md:px-8">
        <a
          href="#top"
          className="font-hero shrink-0 text-[13px] font-medium tracking-wide text-paper uppercase"
        >
          <span className="sm:hidden">LH</span>
          <span className="hidden sm:inline">Liam Holloway</span>
        </a>
        <nav aria-label="Primary" className="min-w-0">
          <LayoutGroup>
          <ul className="flex items-center justify-end gap-3 overflow-x-auto md:gap-7">
            {links.map((link) => {
              const on = active === link.id
              return (
                <li key={link.href} className="relative shrink-0">
                  <a
                    href={link.href}
                    className={`text-[13px] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                      on ? "text-paper" : "text-mute hover:text-paper"
                    }`}
                    aria-current={on ? "location" : undefined}
                  >
                    {link.label}
                  </a>
                  {on ? (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </li>
              )
            })}
          </ul>
          </LayoutGroup>
        </nav>
      </div>
    </header>
  )
}

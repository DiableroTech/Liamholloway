import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  TelegramLogo,
} from "@phosphor-icons/react"
import { motion, useReducedMotion } from "motion/react"
import { site } from "../content/site"

const items = [
  { href: `mailto:${site.email}`, label: "Email", Icon: EnvelopeSimple },
  { href: site.telegram.href, label: "Telegram", Icon: TelegramLogo },
  { href: site.github, label: "GitHub", Icon: GithubLogo },
  { href: site.linkedin, label: "LinkedIn", Icon: LinkedinLogo },
] as const

export function SocialRail() {
  const reduce = useReducedMotion()

  return (
    <motion.aside
      className="pointer-events-none fixed right-4 bottom-0 z-40 hidden h-[46vh] w-10 flex-col items-center md:flex"
      aria-label="Social"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="pointer-events-auto flex flex-col items-center gap-4">
        {items.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            aria-label={label}
            className="text-paper/80 transition-colors duration-200 hover:text-accent"
          >
            <Icon size={18} weight="regular" />
          </a>
        ))}
      </div>
      <div className="mt-4 w-px flex-1 bg-paper/35" />
    </motion.aside>
  )
}

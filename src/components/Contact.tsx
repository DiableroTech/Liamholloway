import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  TelegramLogo,
} from "@phosphor-icons/react"
import { site } from "../content/site"
import { HudCorners } from "./HudCorners"
import { Reveal } from "./Reveal"

const channels = [
  {
    label: "Direct comms",
    detail: site.email,
    href: `mailto:${site.email}`,
    action: "Connect",
    Icon: EnvelopeSimple,
  },
  {
    label: "Telegram",
    detail: site.telegram.handle,
    href: site.telegram.href,
    action: "Connect",
    Icon: TelegramLogo,
  },
  {
    label: "Code repository",
    detail: "DiableroTech",
    href: site.github,
    action: "Connect",
    Icon: GithubLogo,
  },
  {
    label: "LinkedIn",
    detail: "Liam Holloway",
    href: site.linkedin,
    action: "Connect",
    Icon: LinkedinLogo,
  },
] as const

export function Contact() {
  return (
    <section id="contact" className="has-grid relative scroll-mt-20 border-t border-line">
      <div className="relative mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <Reveal from="right" className="relative z-10 ml-auto w-full lg:w-[48%]">
          <div className="surface relative px-5 py-8 md:px-8 md:py-10">
            <HudCorners />
            <p className="kicker">Incoming</p>
            <h2 className="section-title mt-3 text-3xl md:text-5xl">
              Contact
            </h2>
            <p className="mt-4 max-w-[48ch] text-[15px] leading-relaxed text-mute">
              Email or Telegram. GitHub and LinkedIn if you want the trail.
            </p>
            <ul className="mt-8 flex flex-col gap-2">
              {channels.map((item, i) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className={`flex items-center justify-between gap-3 rounded-[var(--radius-box)] border px-4 py-3 transition-colors duration-200 ${
                      i === 0
                        ? "border-accent bg-ink shadow-[0_0_22px_rgb(77_176_255_/_0.18)]"
                        : "border-line bg-ink/40 hover:border-accent/45"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <item.Icon size={18} className="text-accent" />
                      <span>
                        <span className="block text-[11px] tracking-[0.16em] text-mute uppercase">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-[14px] text-paper">
                          {item.detail}
                        </span>
                      </span>
                    </span>
                    <span className="text-[12px] text-pop">{item.action}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

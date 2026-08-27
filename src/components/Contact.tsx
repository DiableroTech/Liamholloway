import { site } from "../content/site"
import { Reveal } from "./Reveal"

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <a
            href={`mailto:${site.email}`}
            className="font-display block max-w-full text-3xl font-medium tracking-tight break-all text-paper transition-colors hover:text-accent md:text-5xl"
          >
            {site.email}
          </a>
          <p className="mt-6 text-base text-mute">
            Telegram{" "}
            <a
              href={site.telegram.href}
              className="text-paper transition-colors hover:text-accent"
            >
              {site.telegram.handle}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

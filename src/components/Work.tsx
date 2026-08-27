import crypticStill from "../assets/cryptic.jpg"
import linqStill from "../assets/linq.jpg"
import { work } from "../content/site"
import { Reveal } from "./Reveal"

const stills = {
  cryptic: crypticStill,
  linq: linqStill,
} as const

export function Work() {
  const [cryptic, linq] = work

  return (
    <section id="work" className="scroll-mt-16 border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <h2 className="font-display text-3xl font-medium tracking-tight text-paper md:text-4xl">
            Work
          </h2>
        </Reveal>

        <Reveal className="mt-12">
          <article>
            <img
              src={stills.cryptic}
              alt="Dark phone edge with a thin cool blue light."
              className="aspect-[16/9] w-full object-cover"
            />
            <div className="mt-8 max-w-[62ch]">
              <h3 className="font-display text-2xl font-medium tracking-tight text-paper md:text-3xl">
                {cryptic.name}
              </h3>
              <p className="mt-2 text-[13px] text-accent">{cryptic.role}</p>
              <p className="mt-4 text-base leading-relaxed text-mute">
                {cryptic.summary}
              </p>
            </div>
          </article>
        </Reveal>
      </div>

      <div className="border-t border-line bg-ink-2">
        <Reveal className="mx-auto grid max-w-[1400px] md:grid-cols-12">
          <div className="flex flex-col justify-center px-4 py-16 md:col-span-7 md:px-8 md:py-24">
            <h3 className="font-display text-2xl font-medium tracking-tight text-paper md:text-3xl">
              {linq.name}
            </h3>
            <p className="mt-2 text-[13px] text-accent">{linq.role}</p>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-mute">
              {linq.summary}
            </p>
          </div>
          <div className="md:col-span-5">
            <img
              src={stills.linq}
              alt="Dark metal and glass with a single blue highlight."
              className="h-full min-h-[240px] w-full object-cover md:min-h-[420px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

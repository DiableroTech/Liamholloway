import { site } from "../content/site"
import { Reveal } from "./Reveal"

export function About() {
  return (
    <section id="about" className="no-grid scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <Reveal>
          <p className="kicker">Profile</p>
          <h2 className="section-title mt-3 text-3xl md:text-5xl">About</h2>
          <div className="mt-8 max-w-[62ch] space-y-5 text-base leading-relaxed text-mute md:text-[17px]">
            <p>
              I am a full-stack engineer in Vancouver. React and React Native
              are the tools I reach for first, on web and on phones.
            </p>
            <p>
              Most of my years were in crypto: dapps, ERC-20 integrations, the
              product sitting on top of the contract. I started about six years
              ago. Self-taught the whole way.
            </p>
            <p>
              I have co-founded two companies and shipped three production
              apps. The work is moving toward AI. That is where I want the
              next years to go.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.4fr]">
          <div className="surface px-5 py-6">
            <p className="kicker">Companies</p>
            <p className="section-title mt-3 text-4xl">2</p>
            <p className="mt-2 text-[13px] text-mute">Co-founded</p>
          </div>
          <div className="surface px-5 py-6">
            <p className="kicker">Shipped</p>
            <p className="section-title mt-3 text-4xl">3</p>
            <p className="mt-2 text-[13px] text-mute">Production apps</p>
          </div>
          <div className="surface px-5 py-6">
            <p className="kicker">Based</p>
            <p className="mt-3 font-display text-4xl font-medium tracking-tight text-paper">
              {site.location}
            </p>
            <p className="mt-2 text-[13px] text-mute">Currently listed</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

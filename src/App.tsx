import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Faq } from "./components/Faq"
import { Footer } from "./components/Footer"
import { DotField3 } from "./components/DotField3"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Hire } from "./components/Hire"
import { Skills } from "./components/Skills"
import { SocialRail } from "./components/SocialRail"
import { Timeline } from "./components/Timeline"
import { Work } from "./components/Work"

export default function App() {
  return (
    <div id="top">
      <div className="site-field">
        <DotField3 />
      </div>
      <div className="relative z-10">
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:absolute focus:top-6 focus:left-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to work
        </a>
        <Header />
        <div className="relative flex min-h-[calc(100dvh-4rem)] flex-col">
          <Hero />
        </div>
        <main>
          <div className="field-slab">
            <Work />
            <Skills />
          </div>
          <Timeline />
          <About />
          <Faq />
          <Hire />
          <Contact />
        </main>
        <SocialRail />
        <Footer />
      </div>
    </div>
  )
}

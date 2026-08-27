import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Work } from "./components/Work"

export default function App() {
  return (
    <div id="top">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to work
      </a>
      <div className="flex min-h-[100dvh] flex-col">
        <Header />
        <Hero />
      </div>
      <main>
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

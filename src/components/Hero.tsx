import heroStill from "../assets/hero.jpg"

export function Hero() {
  return (
    <section className="flex flex-1 flex-col lg:grid lg:grid-cols-12">
      <div className="hero-copy flex flex-1 flex-col justify-center px-4 py-10 md:px-8 md:py-12 lg:col-span-7 lg:py-0">
        <h1 className="font-display max-w-[14ch] text-4xl font-medium leading-[1.1] tracking-tight text-paper md:text-5xl lg:text-6xl">
          I build products people hold.
        </h1>
        <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-mute md:text-[17px]">
          Full-stack engineer and co-founder in Vancouver. React, React Native,
          and six years of shipping.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center bg-accent px-5 py-2.5 text-[13px] font-medium text-ink transition-transform hover:brightness-110 active:scale-[0.98]"
          >
            Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center border border-line px-5 py-2.5 text-[13px] font-medium text-paper transition-colors hover:border-paper active:scale-[0.98]"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="min-h-[28vh] border-t border-line lg:col-span-5 lg:min-h-0 lg:border-t-0 lg:border-l">
        <img
          src={heroStill}
          alt="Night waterfront, cool blue light on dark water."
          className="h-full min-h-[28vh] w-full object-cover lg:min-h-full"
          fetchPriority="high"
        />
      </div>
    </section>
  )
}

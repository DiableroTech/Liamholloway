const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
] as const

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center border-b border-line bg-ink">
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-4 md:px-8">
        <a
          href="#top"
          className="font-display text-[15px] font-medium tracking-tight text-paper"
        >
          Liam Holloway
        </a>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-5 md:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[13px] text-mute transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

import { type ReactNode } from "react"

type Variant = "primary" | "ghost"

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string
  children: ReactNode
  variant?: Variant
}) {
  const kind = variant === "primary" ? "btn-primary" : "btn-ghost"

  return (
    <a href={href} className={`btn ${kind}`}>
      {children}
    </a>
  )
}

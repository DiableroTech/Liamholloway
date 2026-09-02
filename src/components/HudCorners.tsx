export function HudCorners({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      <span className="absolute top-3 left-3 h-3 w-3 border-t border-l border-pop/80" />
      <span className="absolute top-3 right-3 h-3 w-3 border-t border-r border-accent/80" />
      <span className="absolute bottom-3 left-3 h-3 w-3 border-b border-l border-accent/70" />
      <span className="absolute right-3 bottom-3 h-3 w-3 border-r border-b border-pop/70" />
    </div>
  )
}

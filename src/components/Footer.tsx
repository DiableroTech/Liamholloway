import { site } from "../content/site"

export function Footer() {
  return (
    <footer className="has-grid border-t border-line">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-6 md:px-8">
        <p className="text-[13px] text-mute">{site.name}</p>
        <p className="text-[13px] text-mute">{site.location}</p>
      </div>
    </footer>
  )
}

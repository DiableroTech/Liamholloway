const phrases = [
  "production apps",
  "encrypted VoIP",
  "native bridges",
  "TypeScript UIs",
] as const

export const heroCopy = {
  lead: "I ship",
  phrases,
  subhead:
    "Full-stack developer and co-founder. Lead engineer at Cryptic, a security-first workspace: post-quantum encryption, VoIP calling, multi-chain wallets, and the interface people actually hold.",
  body: "I work in React and TypeScript on the frontend, Go when the backend has to move, Swift and Kotlin when the phone is the product. Six years shipping web, mobile, and desktop in small teams with high ownership. Before Cryptic I built LINQ, a staking dapp on Ethereum, and spent years wiring ERC-20 contracts into real UIs. The work is leaning into AI now: MCP, agent workflows, the tooling around Cursor and Claude. Self-taught.",
} as const

export const heroPoints = [
  "Six years shipping",
  "Co-founder. Lead on the product.",
  "React + React Native. Swift in play.",
  "Cryptic: encrypted messaging, VoIP",
  "LINQ: Ethereum staking, mainnet",
  "Agents, MCP, GitHub Actions",
  "Self-taught. High ownership.",
] as const

export const heroDeck = [
  {
    kicker: "Now",
    title: "Cryptic",
    body: "Encrypted messaging, VoIP, the interface people hold.",
    action: "See the work",
    href: "#work",
  },
  {
    kicker: "Shipped",
    title: "LINQ",
    body: "Staking UI on Ethereum. Mainnet.",
    action: "Open the path",
    href: "#path",
  },
  {
    kicker: "Code",
    title: "DiableroTech",
    body: "Repos, experiments, the public trail.",
    action: "GitHub",
    href: "https://github.com/DiableroTech",
  },
  {
    kicker: "Notes",
    title: "The blog",
    body: "Frontend notes and build logs. Wire the URL when it is live.",
    action: "Read",
    href: "",
  },
] as const

export type Project = {
  slug: string
  name: string
  kicker: string
  role: string
  summary: string
  tags: readonly string[]
  status: string
  graphicLabel: string
  graphicState: string
  theme: {
    kind: "dots" | "lines" | "checker" | "grid"
    accent: string
    pop: string
    fog: string
  }
}

export const projects: readonly Project[] = [
  {
    slug: "cryptic",
    name: "Cryptic",
    kicker: "Flagship",
    role: "Co-founder. Frontend and mobile.",
    summary:
      "Quantum-encrypted messaging with VoIP and trading. I built the product the user holds. Edit this when you lock outcomes.",
    tags: ["React Native", "VoIP", "iOS"],
    status: "Active",
    graphicLabel: "SECURE_CHANNEL",
    graphicState: "LIVE",
    theme: {
      kind: "dots",
      accent: "#4db0ff",
      pop: "#2ee6c8",
      fog: "#02060d",
    },
  },
  {
    slug: "linq",
    name: "LINQ",
    kicker: "Mainnet",
    role: "Co-founder. Dapp and staking UI.",
    summary:
      "LP distribution and staking on Ethereum. React TypeScript surface on the contracts. Swap the metrics when you will stand behind them.",
    tags: ["React", "TypeScript", "Ethereum"],
    status: "Shipped",
    graphicLabel: "LIQUIDITY_PATH",
    graphicState: "MAINNET",
    theme: {
      kind: "checker",
      accent: "#2ee6c8",
      pop: "#4db0ff",
      fog: "#02080c",
    },
  },
  {
    slug: "cascadia",
    name: "Cascadia",
    kicker: "Client work",
    role: "Frontend and dapps.",
    summary:
      "ERC-20 and NFT surfaces, client sites. Placeholder for the work you want named.",
    tags: ["React", "Web3"],
    status: "Archive",
    graphicLabel: "NORTHWEST_FIELD",
    graphicState: "IDLE",
    theme: {
      kind: "lines",
      accent: "#4ade80",
      pop: "#2ee6c8",
      fog: "#030a08",
    },
  },
  {
    slug: "lab",
    name: "Lab",
    kicker: "This repo",
    role: "Experiments. Packages. Agents.",
    summary:
      "The site itself, and whatever we ship next in this repo. Replace this slot with Fern, Folio, or Mend when they earn it.",
    tags: ["React", "Motion", "Three"],
    status: "Open",
    graphicLabel: "WORKBENCH",
    graphicState: "BUILDING",
    theme: {
      kind: "grid",
      accent: "#4db0ff",
      pop: "#2ee6c8",
      fog: "#02060d",
    },
  },
]

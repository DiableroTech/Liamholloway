export const site = {
  name: "Liam Holloway",
  email: "liamholloway2@gmail.com",
  telegram: {
    handle: "@Diableros666",
    href: "https://t.me/Diableros666",
  },
  location: "Vancouver, BC",
} as const

export const work = [
  {
    slug: "cryptic",
    name: "Cryptic",
    role: "Co-founder. Frontend and mobile.",
    summary:
      "Quantum-encrypted messaging with VoIP calling and crypto trading. I built the product the user holds.",
  },
  {
    slug: "linq",
    name: "LINQ",
    role: "Frontend. Dapp and staking UI.",
    summary:
      "LP distribution and staking on Ethereum. I built the React TypeScript dapp and wired ERC-20 contracts into the product.",
  },
] as const

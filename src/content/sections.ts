export const skillLanes = [
  {
    id: "web",
    label: "Web",
    hint: "What this site is built in",
    items: [
      { name: "React", note: "Product UI" },
      { name: "TypeScript", note: "Day language" },
      { name: "Tailwind", note: "Systems" },
      { name: "Vite", note: "This repo" },
      { name: "Motion", note: "Interaction" },
      { name: "Zustand", note: "Client state" },
    ],
  },
  {
    id: "native",
    label: "Native",
    hint: "Phones and the next layer",
    items: [
      { name: "React Native", note: "Shipping apps" },
      { name: "Swift", note: "In progress" },
      { name: "CallKit", note: "Cryptic VoIP" },
      { name: "PushKit", note: "Wake path" },
      { name: "MMKV", note: "Local store" },
    ],
  },
  {
    id: "workflow",
    label: "Workflow",
    hint: "How the work actually gets done",
    items: [
      { name: "Cursor / Claude", note: "Agents" },
      { name: "GitHub Actions", note: "CI" },
      { name: "MCP", note: "Tooling" },
      { name: "Figma", note: "Handoff" },
    ],
  },
] as const

export const path = [
  {
    title: "Cryptic",
    role: "Co-founder, lead engineer",
    when: "2024 - Present",
    where: "Remote",
    body: "Encrypted messaging, VoIP, the product people hold. Edit this with the numbers you will stand behind.",
    tags: ["React Native", "iOS", "CallKit"],
  },
  {
    title: "LINQ",
    role: "Co-founder, frontend",
    when: "2023 - 2024",
    where: "Remote",
    body: "Ethereum LP distribution and staking. React TypeScript dapp on mainnet. Swap this copy when you lock the metrics.",
    tags: ["React", "TypeScript", "Ethereum"],
  },
  {
    title: "Cascadia",
    role: "Frontend and dapps",
    when: "2021 - 2023",
    where: "Client work",
    body: "ERC-20 and NFT surfaces, client sites. Placeholder for the work you want named.",
    tags: ["React", "Web3"],
  },
  {
    title: "Started shipping",
    role: "Self-taught",
    when: "2020",
    where: "BC",
    body: "Six years in. The site is the proof, not a year count.",
    tags: ["React"],
  },
] as const

export const faqs = [
  {
    q: "What do you actually build?",
    a: "Interfaces people hold. Web in React. Phones in React Native. The layer on top of contracts, VoIP, and whatever the product needs. Edit this.",
  },
  {
    q: "Web, mobile, or both?",
    a: "Both. This site is the web proof. Cryptic is the mobile proof. Swift is the next native layer.",
  },
  {
    q: "How do you work with AI?",
    a: "Agents in the loop, not as a caption. Cursor, Claude, MCP, GitHub Actions. The workflow is part of the craft.",
  },
  {
    q: "Are you available?",
    a: "Placeholder. For the right brief, yes. Email or Telegram. The Contact section is the door.",
  },
] as const

export interface Capability {
  title: string;
  description: string;
}

export interface Client {
  name: string;
  role: string;
  slug: string;
  visit?: string;
}

export interface Post {
  title: string;
  date: string;
  href: string;
  image: string;
}

export const CAPABILITIES: Capability[] = [
  {
    title: "Interfaces",
    description:
      "The surfaces people use. Web and mobile applications, marketing sites, and the design systems they grow from.",
  },
  {
    title: "Systems",
    description:
      "The architecture behind the surface. APIs, services, data, and the rules that keep them working.",
  },
  {
    title: "Agents",
    description:
      "Software that does work on someone's behalf. We design the prompts, tools, and guardrails that make AI agents dependable enough to ship.",
  },
  {
    title: "Tools",
    description:
      "Internal software for the people running the business. Operations consoles, content systems, AI workflows, and the glue between vendors.",
  },
];

export const CLIENTS: Client[] = [
  { name: "File Logic", role: "Brand and product", slug: "file-logic" },
  {
    name: "Outr.ai",
    role: "Brand and product",
    slug: "outr-ai",
    visit: "https://outr.ai",
  },
  {
    name: "Vercel",
    role: "Web design",
    slug: "vercel",
    visit: "https://vercel.com",
  },
  {
    name: "Browserbase",
    role: "Marketing site",
    slug: "browserbase",
    visit: "https://browserbase.com",
  },
  { name: "Julius", role: "Product design", slug: "julius" },
  {
    name: "Laravel",
    role: "Marketing site",
    slug: "laravel",
    visit: "https://laravel.com",
  },
  { name: "Swyftfin", role: "Brand and product", slug: "swyftfin" },
  { name: "MatterOS", role: "Brand and product", slug: "matteros" },
  { name: "Ampry", role: "Brand and product", slug: "ampry" },
  {
    name: "Router.so",
    role: "Brand and product",
    slug: "router-so",
    visit: "https://router.so",
  },
  {
    name: "Tackle.io",
    role: "Brand and marketing",
    slug: "tackle-io",
    visit: "https://tackle.io",
  },
  { name: "Route", role: "Brand and marketing", slug: "route" },
];

export const POSTS: Post[] = [
  {
    title: "Four Design Philosophies Shaping Modern UI",
    date: "March 12, 2026",
    href: "#",
    image: "/assets/post.jpg",
  },
  {
    title: "Agent Harness Engineering",
    date: "March 3, 2026",
    href: "#",
    image: "/assets/post.jpg",
  },
  {
    title: "Testing while vibe coding",
    date: "December 30, 2025",
    href: "#",
    image: "/assets/post.jpg",
  },
  {
    title: "Calm Software",
    date: "November 11, 2025",
    href: "#",
    image: "/assets/post.jpg",
  },
];

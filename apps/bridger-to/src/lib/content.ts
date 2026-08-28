export interface LinkItem {
  label: string;
  href: string;
}

export const NAV_LINKS: LinkItem[] = [
  { label: "Work", href: "/work" },
  { label: "Posts", href: "/posts" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS: LinkItem[] = [
  { label: "X", href: "https://x.com/bridgertower" },
  { label: "GitHub", href: "https://github.com/brijr" },
  { label: "YouTube", href: "https://youtube.com/@bridgertower" },
  { label: "LinkedIn", href: "https://linkedin.com/in/brijr" },
];

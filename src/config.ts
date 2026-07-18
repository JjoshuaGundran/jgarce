import type { IconifyIcon } from "@iconify/react";

export const NavLinks = {
  Home: 'home',
  Socials: 'socials',
  Projects: 'projects',
}
export type NavLinksType = typeof NavLinks[keyof typeof NavLinks];

export interface NavItem {
  id: NavLinksType,
  title: string,
  href: string,
  tagline: string,
  icon: IconifyIcon,
}
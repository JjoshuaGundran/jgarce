import { NavLinks } from "../config";
import type { NavLinksType, NavItem } from '../config';

import { useState } from 'react';

import { Icon } from '@iconify/react';
import homeIcon from '@iconify-icons/mdi/home';
import socialsIcon from '@iconify-icons/mdi/media-network';
import projectsIcon from '@iconify-icons/mdi/hammer-wrench';

interface Props {
  active?: NavLinksType;
}

const navItems: NavItem[] = [
  {
    id: NavLinks.Home,
    title: 'Home',
    href: '/',
    tagline: 'Yup. This is me :)',
    icon: homeIcon,
  },
  {
    id: NavLinks.Socials,
    title: 'Socials',
    href: '/socials',
    tagline: 'Find me in these places too!',
    icon: socialsIcon,
  },
  {
    id: NavLinks.Projects,
    title: 'Projects',
    href: '/projects',
    tagline: 'Yeah I built some stuff',
    icon: projectsIcon,
  }
];

export const Navigation = ({ active }: Props) => {
  const [hoverNav, setHoverNav] = useState<NavLinksType | undefined>();
  
  return (
    <nav id='socials' className='text-xl p-3 gap-3 flex flex-wrap items-center justify-around font-semibold'>
      {navItems.map(i => 
        <a
          key={i.id}
          href={i.href}
          className='focus-visible:bg-white/10 hover:text-zinc-100 focus-visible:text-zinc-100 transition-colors px-4 py-1 flex gap-2 rounded-full items-center text-sm md:text-base'
          onMouseEnter={() => i.id === hoverNav ? undefined : setHoverNav(i.id)}
          onMouseLeave={() => setHoverNav(undefined)}
        >
          <Icon icon={i.icon} />
          <span>{i.title}</span>
        </a>
      )}
    </nav>
  );
}
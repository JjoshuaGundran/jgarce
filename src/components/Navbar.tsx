import type { MouseEventHandler } from "react";
import { useState } from "react";
import { Icon } from "@iconify/react";
import menu from "@iconify-icons/mdi/menu";
import close from "@iconify-icons/mdi/close";

interface Props {
  sections: string[];
}

interface MobileProps extends Props {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

interface ButtonProps {
  section: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function Navbar({ sections }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <nav className="flex items-center justify-between pl-3 pr-2 py-2 my-2 rounded-lg flex-wrap border border-purple-100 bg-white">
      <span className="font-bold text-lg tracking-tight">John Gundran</span>
      <div className="items-center justify-center gap-1 hidden sm:flex">
        {sections.map(section => <NavbarButton section={section} onClick={() => setIsOpen(false)} />)}
      </div>
      <button
        type="button"
        className="rounded-sm p-2 sm:hidden"
        onClick={() => setIsOpen((open) => !open)}
      >
        <Icon icon={isOpen ? close : menu} className="size-5" />
      </button>

      {/* Mobile menu */}
      {isOpen && <NavbarMobileView sections={sections} onClick={() => setIsOpen(false)} />}
    </nav>
  )
}

function NavbarMobileView({ sections, onClick }: MobileProps) {
  return (
    <div className="flex w-full flex-col gap-1 border-t border-purple-100 pt-2 mt-2 sm:hidden">
      {sections.map((section) => <NavbarButton key={section} section={section} onClick={onClick} />)}
    </div>
  )
}

function NavbarButton({ section, onClick }: ButtonProps) {
  return (
    <a
      href={`#${section.toLowerCase()}`}
      className="rounded-sm px-5 py-1"
      onClick={onClick}
    >
      {section}
    </a>
  )
}
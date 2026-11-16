import { Icon, type IconifyIcon } from "@iconify/react";
import github from "@iconify-icons/mdi/github";
import linkedIn from "@iconify-icons/mdi/linkedin";
import youtube from "@iconify-icons/mdi/youtube";

interface Target {
  name: string,
  url: string,
  icon: IconifyIcon
}

const TARGETS: Target[] = [
  {
    name: "Github",
    url: "https://github.com/JjoshuaGundran",
    icon: github
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/john-joshua-gundran/",
    icon: linkedIn
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Japafilo",
    icon: youtube
  },
]

export function Navbar() { 
  return (
    <nav className="card flex items-center justify-between pl-3 pr-2 py-2 my-2 flex-wrap">
      <span className="font-bold text-lg tracking-tight">John Gundran</span>
      <div className="items-center justify-center gap-1 hidden sm:flex">
        {TARGETS.map((target) => <a href={target.url} className="rounded-sm p-2"><Icon icon={target.icon} className="size-6" /></a>)}
      </div>
    </nav>
  )
}
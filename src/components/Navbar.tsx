interface Props {
  sections: string[];
}

export function Navbar({ sections }: Props) {
  return (
    <nav className="flex items-center justify-between px-4 py-2 my-2 rounded-2xl bg-red-100">
      <span>John Gundran</span>
      <div className="flex items-center gap-2">
        {sections.map(section => <NavbarButton section={section} />)}
      </div>
    </nav>
  )
}

function NavbarButton({ section }: { section: string }) {
  const id = section.toLowerCase();
  
  return (
    <a className="rounded-2xl px-5 py-1 hover:bg-red-200 hover:cursor-pointer hover:text-red-400" href={"#" + id}>{section}</a>
  )
}
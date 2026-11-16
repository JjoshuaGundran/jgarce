import { Navbar } from "./Navbar"
import { About } from "./About"

const SECTIONS: string[] = ["About", "Projects", "Experience", "Contact"]

export function Main() {
  return (
    <div className="w-full px-4 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Navbar sections={SECTIONS} />
        <About />
      </div>
    </div>
  )
}
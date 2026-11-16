import { Navbar } from "./Navbar"
import { About } from "./About"

export function Main() {
  return (
    <div className="w-full px-4 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <Navbar />
        <About />
      </div>
    </div>
  )
}
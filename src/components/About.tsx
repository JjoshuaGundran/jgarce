export function About() {
  return (
    <section id="about">
      <h2 className="mb-2">About Section</h2>
      <div className="flex gap-2">
        <div className="group relative bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 w-40 h-40 border rounded-2xl text-white overflow-hidden bg-clip-padding">
          <div className="bg-gray-300 text-black p-4 absolute top-0 bottom-0 left-0 right-0 transition-all duration-150 ease group-hover:inset-1 group-hover:rounded-xl">Something</div>
        </div>
      </div>
    </section>
  )
}
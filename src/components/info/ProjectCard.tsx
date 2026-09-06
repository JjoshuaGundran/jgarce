export function ProjectCard() {
  return (
    <div className="flex gap-2 bg-gray-100 rounded-2xl p-2">
      <div className="rounded-2xl bg-teal-300 w-30 h-30"></div>
      <div className="flex flex-col justify-between">
        <h6>Title</h6>
        <p className="opacity-50">Description</p>
      </div>
    </div>
  )
}
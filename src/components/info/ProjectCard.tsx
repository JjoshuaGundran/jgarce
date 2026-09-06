interface Props {
  url: string,
  title: string,
  description?: string,
  image?: string,
}

export function ProjectCard({ url, title, description, image }: Props) {
  return (
    <a className="flex gap-2 border border-gray-100 bg-gray-100 rounded-2xl p-2 hover:border-pink-300 hover:bg-pink-100" href={url}>
      <div className="rounded-2xl bg-teal-300 w-30 h-30 min-w-30 max-w-30 min-h-30 max-h-30">
        {image && <img />}
      </div>
      <div className="flex flex-col justify-between">
        <h6>{title}</h6>
        <p className=" text-sm opacity-50">{description}</p>
      </div>
    </a>
  )
}
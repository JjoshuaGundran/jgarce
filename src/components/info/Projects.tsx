import type { ITabCardProps } from "../../config"
import { AnimatedCard } from "../common/AnimatedCard"
import { ProjectCard } from "./ProjectCard"

interface IProject {
  url: string,
  title: string,
  description?: string,
  image?: string,
}

const projects: IProject[] = [
  {
    url: "#",
    title: "Example Project",
    description: `
      This is just a placeholder project. Will add projects soon :)
      For now, this will just have to be alone. All alone...
      here in this big space.
      `,
  },
]

export function Projects({
  idx,
  className,
  isLast,
  total,
  animation,
  onExitComplete,
  onEnterComplete
}: ITabCardProps) {
  return (
    <AnimatedCard
      key={idx}
      idx={idx}
      total={total}
      animation={animation}
      isLast={isLast}
      onExitComplete={onExitComplete}
      onEnterComplete={onEnterComplete}
      className={className}
    >
      {projects.map((project, idx) =>
        <ProjectCard
          key={idx}
          url={project.url}
          title={project.title}
          description={project.description}
          image={project.image}
        />
      )}
    </AnimatedCard>
  )
}
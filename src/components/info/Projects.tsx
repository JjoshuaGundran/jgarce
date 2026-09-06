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
    url: "#/something",
    title: "Something",
    description: "This is a description for something",
  },
  {
    url: "#/another",
    title: "Another",
    description: `
      Description for another Description for another
      Description for another Description for another
      Description for another Description for another
      Description for another Description for another
      `
  }
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
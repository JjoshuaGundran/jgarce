import type { ITabCard, ITabProps } from "../../config";
import { ContactCard } from "./ContactCard";
import { ProfileCard } from "./ProfileCard";
import { ProjectCard } from "./ProjectCard";
import { SliderCard } from "./SliderCard";

const cards: ITabCard[] = [
  {
    className: "flex-1 p-4 min-w-fit",
    isLast: false,
    component: ProfileCard,
  },
  {
    className: "p-2",
    isLast: false,
    component: SliderCard,
  },
  {
    className: "flex-2 p-2 overflow-y-auto *:bg-gray-100 *:rounded-3xl *:p-2",
    isLast: false,
    component: ProjectCard,
  },
  {
    className: "p-2",
    isLast: true,
    component: ContactCard,
  },
]

export function InfoTab(props: ITabProps) {
  return (
    <>
      {cards.map((card, idx) => {
        const Component = card.component;

        return (
          <Component key={idx} idx={idx} total={4} className={card.className} isLast={card.isLast} {...props} />
        );
      })}
    </>
  )
}
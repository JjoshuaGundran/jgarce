import type { ITabCard, ITabProps } from "../../config";
import { ContactCard } from "./ContactCard";
import { ProfileCard } from "./ProfileCard";
import { ProjectCard } from "./ProjectCard";
import { SliderCard } from "./SliderCard";

const cards: ITabCard[] = [
  {
    className: "flex flex-col gap-15 flex-1 p-4 min-w-fit",
    isLast: false,
    component: ProfileCard,
  },
  {
    className: "p-2",
    isLast: false,
    component: SliderCard,
  },
  {
    className: "flex-2 p-2 overflow-y-auto *:bg-gray-100 *:rounded-2xl *:p-2",
    isLast: false,
    component: ProjectCard,
  },
  {
    className: "p-4 h-fit",
    isLast: true,
    component: ContactCard,
  },
]

export function InfoTab(props: ITabProps) {
  return (
    <>
      {cards.map((card, idx) => {
        const Card = card.component;

        return (
          <Card
            key={idx}
            idx={idx}
            total={4}
            isLast={card.isLast} 
            className={card.className}
            {...props}
          />
        );
      })}
    </>
  )
}
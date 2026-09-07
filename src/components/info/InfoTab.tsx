import type { ITabCard, ITabProps } from "../../config";
import { Contact } from "./Contact";
import { Profile } from "./Profile";
import { Projects } from "./Projects";

const cards: ITabCard[] = [
  {
    className: "flex flex-col gap-10 p-4 min-w-fit",
    isLast: false,
    component: Profile,
  },
  {
    className: "flex flex-col gap-2 flex-2 p-2 overflow-y-auto",
    isLast: false,
    component: Projects,
  },
  {
    className: "flex justify-between items-center p-4 h-fit",
    isLast: true,
    component: Contact,
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
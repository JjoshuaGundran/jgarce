import type { ITabCard, ITabProps } from "../config";
import { AnimatedCard } from "./AnimatedCard";

const cards: ITabCard[] = [
  {
    className: "flex-1 p-4 min-w-fit",
    content: <ProfileCardContent />
  },
  {
    className: "p-2",
    content: <SliderCardContent />
  },
  {
    className: "flex-2 p-2 overflow-y-auto *:bg-gray-100 *:rounded-3xl *:p-2",
    content: <ProjectCardContent />
  },
  {
    className: "p-2",
    content: <ContactCardContent />
  },
]

export function InfoTab({ animation, onExitComplete, onEnterComplete }: ITabProps) {
  return (
    <>
      {cards.map((card, idx) =>
        <AnimatedCard
          key={idx}
          idx={idx}
          total={cards.length}
          animation={animation}
          isLast={cards.length - 1 === idx}
          onExitComplete={onExitComplete}
          onEnterComplete={onEnterComplete}
          className={card.className}
        >
          {card.content}
        </AnimatedCard>
      )}
    </>
  )
}

function ProfileCardContent() {
  return <div>One</div>
}

function SliderCardContent() {
  return <div>Three</div>
}

function ProjectCardContent() {
  return <div><div>Four</div></div>
}

function ContactCardContent() {
  return <div>Five</div>
}
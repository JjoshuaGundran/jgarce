import type { ITabProps } from "../config";
import { AnimatedCard } from "./AnimatedCard";
import { PhotoSection } from "./PhotoSection";

export function PhotoTab({ animation, onExitComplete, onEnterComplete }: ITabProps) {
  return (
    <>
      <AnimatedCard
        key={0}
        idx={0}
        total={1}
        animation={animation}
        isLast={1 - 1 === 0}
        onExitComplete={onExitComplete}
        onEnterComplete={onEnterComplete}
        className=""
      >
        <PhotoSection isVisible={true} />
      </AnimatedCard>
    </>
  )
}
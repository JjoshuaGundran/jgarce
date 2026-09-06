import type { ITabCardProps } from "../../config"
import { AnimatedCard } from "../common/AnimatedCard"

export function Slider({
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
      <div>Two</div>
    </AnimatedCard>
  )
}
import type { ITabCardProps } from "../../config"
import { AnimatedCard } from "../common/AnimatedCard"

export function Profile({
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
      <div>
        <div className="rounded-2xl bg-purple-400 w-30 h-30 lg:w-38 lg:h-38"></div>
      </div>
      <p className="max-w-125 text-[16px] leading-4 lg:text-[20px] lg:leading-6">
        Personal website of John Gundran, a software developer who likes making things. 
        Building useful and hopefully delightful tools, always learning, and occasionally building
        something that makes life a little more interesting.
      </p>
    </AnimatedCard>
  )
}
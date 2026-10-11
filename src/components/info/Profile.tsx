import type { ITabCardProps } from "../../config"
import { useState } from "react"
import { AnimatedCard } from "../common/AnimatedCard"

import portraitOneImage from "../../assets/portraitOne.png"
import ermImage from "../../assets/erm_actually.png"

export function Profile({
  idx,
  className,
  isLast,
  total,
  animation,
  onExitComplete,
  onEnterComplete
}: ITabCardProps) {
  const [portrait, setPortrait] = useState<string>(portraitOneImage.src);

  const onPortraitEnter = () => setPortrait(ermImage.src);

  const onPortraitLeave = () => setPortrait(portraitOneImage.src);
  
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
        <div className="rounded-2xl bg-purple-400 w-30 h-30 overflow-hidden lg:w-38 lg:h-38" onMouseEnter={onPortraitEnter} onMouseLeave={onPortraitLeave}>
          <img src={portrait} alt="My Portrait" />
        </div>
      </div>
      <p className="max-w-125 text-[16px] leading-4 lg:text-[20px] lg:leading-6">
        Personal website of John Gundran, a software developer who likes making things. 
        Building useful and hopefully delightful tools, always learning, and occasionally building
        something that makes life a little more interesting.
      </p>
    </AnimatedCard>
  )
}
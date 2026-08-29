import { Animation, type AnimationState } from "../config";

interface AnimatedCardProps {
  idx: number;
  total: number;
  animation: AnimationState;
  isLast: boolean;
  children: React.ReactNode;
  onExitComplete: () => void;
  onEnterComplete: () => void;
  className?: string;
}

export function AnimatedCard({
  idx,
  total,
  animation,
  isLast,
  children,
  onExitComplete,
  onEnterComplete,
  className = "",
}: AnimatedCardProps) {
  const transitionTime = 100;

  function getCardState(): string {
    switch (animation) {
      case (Animation.Entering): return "enter";
      case (Animation.Exiting): return "exit";
      default: return "";
    }
  }

  function handleAnimationEnd(e: React.AnimationEvent<HTMLDivElement>) {
    if (e.target !== e.currentTarget) return;

    if (animation === Animation.Exiting && isLast && e.animationName === "card-exit") {
      onExitComplete();
    }

    else if (animation === Animation.Entering && isLast && e.animationName === "card-enter") {
      onEnterComplete();
    }
  }
  
  return (
    <div
      className={`card ${className} ${getCardState()}`}
      style={
        {
          "--card-enter-delay": `${idx * transitionTime}ms`, 
          "--card-exit-delay": `${(total - 1 - idx) * transitionTime}ms`,
        } as React.CSSProperties
      }
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  )
}
import { Animation, type AnimationState } from "../../config";

interface AnimatedCardProps {
  idx: number;
  total: number;
  animation: AnimationState;
  children: React.ReactNode;
  onExitComplete: () => void;
  onEnterComplete: () => void;
  className?: string;
}

export function AnimatedCard({
  idx,
  total,
  animation,
  children,
  onExitComplete,
  onEnterComplete,
  className = "",
}: AnimatedCardProps) {
  const transitionTime = 100;
  const animationDuration = 600;

  function getCardState(): string {
    switch (animation) {
      case (Animation.Entering): return "enter";
      case (Animation.Exiting): return "exit";
      default: return "";
    }
  }

  function handleAnimationEnd(e: React.AnimationEvent<HTMLDivElement>) {
    if (e.target !== e.currentTarget) return;

    const exitEndsLast = idx === 0;
    const enterEndsLast = idx === total - 1;

    if (animation === Animation.Exiting && exitEndsLast && e.animationName === "card-exit") {
      onExitComplete();
    }

    else if (animation === Animation.Entering && enterEndsLast && e.animationName === "card-enter") {
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
          "--card-animation-duration": `${animationDuration}ms`,
        } as React.CSSProperties
      }
      onAnimationEnd={handleAnimationEnd}
    >
      {children}
    </div>
  )
}

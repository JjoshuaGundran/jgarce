import { useRef, useState } from "react"
import type { ITabCardProps } from "../../config"
import { AnimatedCard } from "../common/AnimatedCard"
import { Clipboard } from "lucide-react"
import { SiGithub, SiTwitch, SiYoutube, type IconType } from "@icons-pack/react-simple-icons"

interface ISocial {
  url: string,
  icon: IconType,
}

const EMAIL = "jjgundran@gmail.com";

const SOCIALS: ISocial[] = [
  {
    url: "https://www.youtube.com/@Japafilo",
    icon: SiYoutube,
  },
  {
    url: "https://www.twitch.tv/japafilo",
    icon: SiTwitch,
  },
  {
    url: "https://github.com/JjoshuaGundran",
    icon: SiGithub,
  },
]

export function Contact({
  idx,
  className,
  isLast,
  total,
  animation,
  onExitComplete,
  onEnterComplete
}: ITabCardProps) {
  const [email, setEmail] = useState<string>("jjgundran@gmail.com");
  const timeoutRef = useRef<number | null>(null);
  
  function handleClick() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setEmail("Copied Email!");
    timeoutRef.current = setTimeout(() => {
      setEmail(EMAIL);
      timeoutRef.current = null;
    }, 1000)
  }
  
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
      <button
        className="flex items-center gap-2 border border-pink-400 rounded-4xl p-3 text-sm cursor-pointer hover:bg-pink-100 hover:*:text-pink-400"
        onClick={handleClick}
      >
        <span>{email}</span>
        <Clipboard className="w-4 h-4 text-gray-400" />
      </button>
      <div className="flex gap-2 text-gray-400">
        {SOCIALS.map((social, idx) => (
          <a className="flex justify-center items-center w-8 h-8 border border-gray-400 rounded-4xl hover:border-gray-500 hover:bg-gray-200" key={idx} href={social.url}>
            <social.icon className="w-4 h-4" />
          </a>
        ))}
      </div>
    </AnimatedCard>
  )
}
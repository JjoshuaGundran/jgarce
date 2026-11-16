import { useState } from "react";
import portraitOneImage from "../assets/portrait_one.png"
import ermImage from "../assets/erm_actually.png"

export function About() {
  const [portrait, setPortrait] = useState<string>(portraitOneImage.src);

  const onPortraitEnter = () => setPortrait(ermImage.src);
  const onPortraitLeave = () => setPortrait(portraitOneImage.src);
  
  return (
    <section id="about">
      <div className="card p-2 flex flex-col sm:flex-row gap-4">
        <div className="size-50 sm:size-80 overflow-hidden rounded-sm border border-purple-100" onMouseEnter={onPortraitEnter} onMouseLeave={onPortraitLeave}>
          <img src={portrait} alt="My Portrait" />
        </div>

        <div className="flex-1 flex flex-col gap-2 justify-center">
          <p className="font-bold text-lg sm:text-xl tracking-tight">About Me</p>
          <p className="text-gray-500 sm:text-lg">
            I’m a full-stack developer who builds clean, easy-to-use web applications.
            I enjoy turning real needs into practical solutions with tools like TypeScript, React, C#, and Blazor.
          </p>
        </div>
      </div>
    </section>
  )
}
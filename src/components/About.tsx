import drawingImage from "../assets/drawing.png"
import ermImage from "../assets/erm_actually.png"

export function About() {  
  return (
    <section id="about">
      <div className="card p-2 flex flex-col sm:flex-row gap-4">
        <div className="group relative size-50 overflow-hidden rounded-sm border border-purple-100 sm:size-80">
          <img
            src={drawingImage.src}
            alt="Wonderful Drawn Portrait"
            width={drawingImage.width}
            height={drawingImage.height}
            decoding="async"
            className="absolute size-full object-cover transition-opacity duration-200 group-hover:opacity-0"
          />
          <img
            src={ermImage.src}
            alt="Erm Actually Photo"
            aria-hidden="true"
            width={ermImage.width}
            height={ermImage.height}
            decoding="async"
            className="absolute size-full object-cover opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          />
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
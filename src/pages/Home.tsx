import Button from "@/components/Button"
import { AnimationTime } from "@/constants/animations"
import { Icons } from "@/constants/Icons"
import { useState, type RefObject } from "react"

interface HomeProps {
  homeRef: RefObject<any>
  projRef: RefObject<any>
}

export default function Home({ homeRef, projRef }: HomeProps) {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <section
      ref={homeRef}
      className="relative flex min-h-(--homeHeight) w-full items-center overflow-hidden page-padding py-12 no-top sm:py-16 lg:py-0"
    >
      <div className="absolute top-8 left-8 opacity-20 sm:opacity-30">
        <img src={Icons.react_or} alt="react logo" className="size-14 rotate-[-15deg] sm:size-20" />
      </div>

      <div className="absolute top-8 right-16 opacity-20 sm:opacity-30">
        <img src={Icons.vue_or} alt="Vue logo" className="size-14 rotate-15 sm:size-20" />
      </div>

      <div className="relative flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <img
          src="/yo.png"
          alt="Adan Gonzalez Ceseña"
          className="order-1 rounded-full lg:max-w-[30vw] object-cover aspect-square size-52 lg:order-2 md:size-72 lg:size-110"
        />

        <div className="order-2 z-10 flex max-w-2xl w-full flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <span className="text-sm uppercase tracking-widest text-(--text-gray)">
            Desarrollador Full Stack
          </span>

          <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl 2xl:leading-tight">
            Adan Gonzalez Ceseña
          </h1>

          <p className="text-lg font-light tracking-wide text-(--text-gray) sm:text-xl">
            Ing. Software y Tecnologias Emergentes
          </p>

          <blockquote className="hidden md:block border-l-2 border-(--secondary) pl-4 text-sm leading-relaxed my-4">
            Desarrollador web orientado al Frontend, con capacidad full stack.
            Me especializo en crear interfaces limpias y responsivas conectadas
            a servicios robustos en el backend.
          </blockquote>
          
          <div className="md:hidden mt-4 w-full max-w-xl">
            <button
              type="button"
              className="flex w-full cursor-pointer items-start gap-2 rounded-r-md border-l-2 border-(--secondary) pl-4 text-left text-sm leading-relaxed text-(--text-gray) transition hover:text-white"
              onClick={() => setShowDescription((prev) => !prev)}
            >
              <span className="flex-1">
                Desarrollador web orientado al Frontend, con capacidad full stack.
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-(--secondary)">
                {showDescription ? "menos" : "más"}
              </span>
            </button>

            {showDescription && (
              <p className="mt-3 border-l-2 border-(--secondary) pl-4 text-sm leading-relaxed text-(--text-gray)">
                Me especializo en crear interfaces limpias y responsivas conectadas a servicios robustos en el backend.
              </p>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <a href="/CV_Adan_Gonzalez.pdf" download="CV_Adan_Gonzalez.pdf">
              <Button label="CV" icon={{ src: Icons.document, alt: "cv", iconRight: true }} onClick={() => { }} btnStyle="outline-secondary" />
            </a>
            
            <Button label="Linkedin" icon={{ src: Icons.linkedin, alt: "Linkedin", iconRight: true }} onClick={() => { window.open("https://www.linkedin.com/in/adan-gonzalez-ceseña-584411338", "_blank") }} btnStyle="outline-secondary" />
            
            <Button label="Github" icon={{ src: Icons.github, alt: "Github", iconRight: true }} onClick={() => { window.open("https://github.com/AdanCC21", "_blank") }} btnStyle="outline-secondary" />
          </div>
        </div>

        <button
          className={`hidden lg:flex absolute bottom-0 left-0 w-fit items-center gap-2 cursor-pointer hover:scale-105 ${AnimationTime}`}
          onClick={() => projRef.current?.scrollIntoView({ behavior: "smooth" })}
        >
          <div className="flex flex-col rounded-md bg-(--primary) p-2">
            <img src={Icons.arrowDown} alt="go down" className="size-4 rotate-90" />
          </div>
          <span className="text-base">Proyectos</span>
        </button>
      </div>
      
      <button
          className={`flex lg:hidden absolute bottom-10 right-1/2 translate-x-1/2 w-fit items-center gap-2 cursor-pointer hover:scale-105 ${AnimationTime}`}
          onClick={() => projRef.current?.scrollIntoView({ behavior: "smooth" })}
        >
          <div className="flex flex-col rounded-md bg-(--primary) p-2">
            <img src={Icons.arrowDown} alt="go down" className="size-4 rotate-90" />
          </div>
          <span className="text-base">Proyectos</span>
        </button>

      <div className="absolute bottom-15 right-15 opacity-20 sm:opacity-30">
        <img src={Icons.nestJs_or} alt="nestjs logo" className="size-14 rotate-15 sm:size-20" />
      </div>
    </section>
  )
}
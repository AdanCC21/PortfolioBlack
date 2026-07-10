import Button from "@/components/Button"
import { AnimationTime } from "@/constants/animations"
import { Icons } from "@/constants/Icons"
import type { RefObject } from "react"

interface HomeProps {
  homeRef: RefObject<any>
  projRef: RefObject<any>
}

export default function Home({ homeRef, projRef }: HomeProps) {
  return (
    <section ref={homeRef} className="relative flex w-full h-(--homeHeight) items-center page-padding no-top overflow-hidden" >
      <div className="absolute top-8 left-8 opacity-20">
        <img src={Icons.react_or} alt="react logo" className="size-20 -rotate-15" />
      </div>

      <div className="absolute top-8 right-16 opacity-20">
        <img src={Icons.vue_or} alt="Vue logo" className="size-20 rotate-15" />
      </div>

      <div className="relative flex w-full justify-between items-center gap-12">

        <div className="flex flex-col xl:gap-4 max-w-2xl z-10">
          <span className="text-sm tracking-widest text-(--text-gray) uppercase">
            Desarrollador Full Stack
          </span>

          <h1 className="text-6xl font-bold 2xl:leading-tight">
            Adan Gonzalez Ceseña
          </h1>

          <p className="text-xl text-(--text-gray) font-light tracking-wide">
            Ing. Software y Tecnologias Emergentes
          </p>

          <blockquote className="border-l-2 border-(--secondary) pl-4 text-sm leading-relaxed">
            Desarrollador web orientado al Frontend, con capacidad full stack.
            Me especializo en crear interfaces limpias y responsivas conectadas
            a servicios robustos en el backend.
          </blockquote>

          <div className="flex items-center gap-2 mt-2">
            <Button label="Linkedin" icon={{ src: Icons.linkedin, alt: "Linkedin", iconRight: true }} onClick={() => { }} btnStyle="outline-secondary" />
            <Button label="Github" icon={{ src: Icons.github, alt: "Github", iconRight: true }} onClick={() => { }} btnStyle="outline-secondary" />
            <Button label="Gmail" icon={{ src: Icons.gmail, alt: "Gmail", iconRight: true }} onClick={() => { }} btnStyle="outline-secondary" />
          </div>
        </div>

          <img
            src="/yo.png"
            alt="Adan Gonzalez Ceseña"
            className="rounded-full aspect-square object-cover h-130"
          />

        <button
          className={`absolute left-0 bottom-0 flex items-center gap-2 w-fit cursor-pointer hover:scale-105 ${AnimationTime} `}
          onClick={() => projRef.current?.scrollIntoView({ behavior: "smooth" })}
        >
          <div className="flex flex-col bg-(--primary) p-2 rounded-md">
            <img src={Icons.arrowDown} alt="go down" className="rotate-90 size-4" />
          </div>
          <span className="text-base">Proyectos</span>
        </button>
      </div>

      <div className="absolute bottom-15 right-15 opacity-20">
        <img src={Icons.nestJs_or} alt="nestjs logo" className="size-20 rotate-15 -z-1" />
      </div>
    </section>
  )
}
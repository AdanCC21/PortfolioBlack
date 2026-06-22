import ProjectCard from "@/components/Cards/ProjectCard"

interface Prompts {
    projRef: React.RefObject<any>
}

export default function Proyects({ projRef }: Prompts) {
    return (
        <section ref={projRef} className="flex flex-col w-full page-padding">
            <div className="flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">Proyectos</h2>
                <span className="text-4xl opacity-10 font-bold">{'{ }'}</span>
            </div>

            <ul className="flex gap-4">
                <ProjectCard
                    image="/projects/cibershield.png"
                    title="Cibershield"
                    description="Plataforma web educativa enfocada en ciberseguridad que ofrece información sobre amenazas como phishing y malware"
                    techs={[
                        { title: "React", icon: { src: "/icons/react.svg", alt: "React" } },
                        { title: "NestJs", icon: { src: "/icons/nestjs.svg", alt: "NestJs" } },
                        { title: "Typescript", icon: { src: "/icons/typescript.svg", alt: "Typescript" } },
                    ]}
                    onDetails={() => console.log("ver detalles")}
                />

                <ProjectCard
                    image="/projects/otro.png"
                    title="Otro proyecto"
                    description="Descripción..."
                />
            </ul>
        </section>
    )
}

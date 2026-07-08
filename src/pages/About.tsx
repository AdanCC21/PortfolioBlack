import Tag from "@/components/Tag"
import { Icons } from "@/constants/Icons"

interface Prompts {
    pageRef: React.RefObject<any>
}

export default function About({ pageRef }: Prompts) {
    return (
        <section ref={pageRef} className="flex flex-col w-screen gap-4 page-padding ">
            <div className="flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">Sobre Mi</h2>
                <span className="text-4xl opacity-10 font-bold">{'o.o'}</span>
            </div>

            <div className="flex gap-8 justify-between h-[60vh]">
                <section className="flex flex-col gap-4 w-3/4 h-full ">
                    <article className="flex flex-col">
                        <p className="text-xl">
                            Curse la carrera de Ingeniería en Software y Tecnologías Emergentes. Mi enfoque profesional está orientado al desarrollo web frontend y backend, utilizando herramientas y tecnologías modernas como React, Vue, NestJS, JavaScript y TypeScript.

                        </p>
                        <br />
                        <p className="text-xl">
                            Me considero una persona tranquila, responsable y con una gran disposición para aprender nuevas tecnologías. Estoy abierto a explorar oportunidades laborales relacionadas con la programación y trabajar en equipo.
                        </p>
                    </article>

                    <ul className="flex gap-2 flex-wrap">
                        <Tag label="React" icon={{ src: Icons.react, alt: 'NestJs' }} />
                        <Tag label="React Native" icon={{ src: Icons.react, alt: 'NestJs' }} />
                        <Tag label="Tailwindcss" icon={{ src: Icons.react, alt: 'NestJs' }} />
                        <Tag label="Vue" icon={{ src: Icons.vue, alt: 'Vue' }} />
                        <Tag label="NestJs" icon={{ src: Icons.nestJs, alt: 'React' }} />
                        <Tag label="Express" icon={{ src: Icons.nestJs, alt: 'React' }} />
                        <Tag label="Typescript" icon={{ src: Icons.nestJs, alt: 'React' }} />
                        <Tag label="Javascript" icon={{ src: Icons.nestJs, alt: 'React' }} />
                        <Tag label="NextJs" icon={{ src: Icons.nestJs, alt: 'React' }} />
                        <Tag label="Vue" icon={{ src: Icons.nestJs, alt: 'React' }} />
                        <Tag label="Prisma" icon={{ src: Icons.nestJs, alt: 'React' }} />
                        <Tag label="SQL" icon={{ src: Icons.nestJs, alt: 'React' }} />
                        <Tag label="Spring Boot" icon={{ src: Icons.nestJs, alt: 'React' }} />
                        <Tag label="Java" icon={{ src: Icons.nestJs, alt: 'React' }} />
                        <Tag label="C++" icon={{ src: Icons.nestJs, alt: 'React' }} />
                        <Tag label="Python" icon={{ src: Icons.nestJs, alt: 'React' }} />
                    </ul>
                </section>

                <div className="flex flex-col items-center justify-center h-full  overflow-hidden">
                    <img src="/informal.jpg" alt="Yo" className="size-full object-cover scale-120 " />
                </div>
            </div>
        </section>
    )
}

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
                <section className="flex flex-col gap-4 w-3/4 h-full justify-center">
                    <article className="flex flex-col">
                        <h3 className="text-4xl font-bold mb-4 tracking-wide">Adan Gonzalez Ceseña</h3>
                        <p className="text-xl">
                            Cursé la carrera de Ingeniería en Software y Tecnologías Emergentes. Mi enfoque profesional está orientado al desarrollo web frontend y backend, utilizando herramientas y tecnologías modernas como React, Vue, NestJS, TypeScript, entre otras.
                        </p>
                        <br />
                        <p className="text-xl">
                            Disfruto tomar un diseño existente y convertirlo en una interfaz responsive y funcional, cuidando tanto la lógica del frontend como la conexión con el backend: manejo de tokens, consultas SQL, autenticación, etc. También me adapto a proyectos donde necesito proponer el diseño desde cero.
                        </p>
                        <br />
                        <p className="text-xl">
                            Me considero una persona tranquila, responsable y con una gran disposición para aprender nuevas tecnologías. Estoy abierto a explorar oportunidades laborales relacionadas con la programación y el trabajo en equipo. Si necesitas a alguien que te ayude a llevar a cabo tu página, hablemos, siempre estoy abierto a nuevos proyectos y retos.
                        </p>
                    </article>

                    <ul className="flex gap-2 flex-wrap">
                        <Tag label="React" icon={{ src: Icons.react, alt: 'NestJs' }} />
                        <Tag label="React Native" icon={{ src: Icons.react, alt: 'NestJs' }} />
                        <Tag label="Tailwindcss" icon={{ src: Icons.tailwindcss, alt: 'Tailwindcss' }} />
                        <Tag label="Vue" icon={{ src: Icons.vue, alt: 'Vue' }} />
                        <Tag label="NestJs" icon={{ src: Icons.nestJs, alt: 'React' }} />
                        <Tag label="Express" icon={{ src: Icons.javascript, alt: 'express' }} />
                        <Tag label="Typescript" icon={{ src: Icons.typescript, alt: 'typecript' }} />
                        <Tag label="Javascript" icon={{ src: Icons.javascript, alt: 'javascript' }} />
                        <Tag label="NextJs" icon={{ src: Icons.nextjs, alt: 'Nextjs' }} />
                        <Tag label="Vite" icon={{ src: Icons.vite, alt: 'vite' }} />
                        <Tag label="Prisma" icon={{ src: Icons.prisma, alt: 'prisma' }} />
                        <Tag label="SQL" icon={{ src: Icons.sql, alt: 'SQL' }} />
                        <Tag label="Spring Boot" icon={{ src: Icons.spring, alt: 'Spring Boot' }} />
                        <Tag label="Java" icon={{ src: Icons.java, alt: 'Java' }} />
                        <Tag label="C++" icon={{ src: Icons.cpp, alt: 'C++' }} />
                        <Tag label="Python" icon={{ src: Icons.python, alt: 'Python' }} />
                    </ul>
                </section>

                <div className="flex flex-col items-center justify-center h-full  overflow-hidden">
                    <img src="/informal.jpg" alt="Yo" className="size-full object-cover scale-120 " />
                </div>
            </div>
        </section>
    )
}

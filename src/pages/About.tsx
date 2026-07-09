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
                <section className="flex flex-col gap-4 w-3/4 h-full">
                    <article className="flex flex-col mb-4">
                        <p className="text-xl">
                            Cursé la carrera de Ingeniería en Software y Tecnologías Emergentes. Mi enfoque profesional está orientado al desarrollo web frontend y backend, utilizando herramientas y tecnologías modernas como React, Vue, NestJS, TypeScript, entre otras.
                        </p>
                        <br />
                        <p className="text-xl">
                            Disfruto tomar un diseño existente y convertirlo en una interfaz responsive y funcional, cuidando tanto la lógica del frontend como la conexión con el backend: manejo de tokens, consultas SQL, autenticación, etc. También me adapto a proyectos donde necesito proponer el diseño desde cero.
                        </p>
                        <br />
                        <p className="text-xl">
                          Si necesitas a alguien que te ayude a llevar a cabo tu página, hablemos, siempre estoy abierto a nuevos proyectos y retos.
                        </p>
                    </article>

                    <div className="w-3/4 mx-auto h-px bg-white/40"></div>

                    <h3 className="text-xl font-medium">Tecnologías que Domino</h3>
                    <ul className="flex gap-2 flex-wrap">
                        <Tag labelSize="text-base" label="React" icon={{ src: Icons.react, alt: 'NestJs', className:"size-4" }} />
                        <Tag labelSize="text-base" label="React Native" icon={{ src: Icons.react, alt: 'NestJs', className:'size-4' }} />
                        <Tag labelSize="text-base" label="Tailwindcss" icon={{ src: Icons.tailwindcss, alt: 'Tailwindcss', className:'size-4' }} />
                        <Tag labelSize="text-base" label="Vue" icon={{ src: Icons.vue, alt: 'Vue', className:'size-4' }} />
                        <Tag labelSize="text-base" label="NestJs" icon={{ src: Icons.nestJs, alt: 'React', className:'size-4' }} />
                        <Tag labelSize="text-base" label="Express" icon={{ src: Icons.javascript, alt: 'express', className:'size-4' }} />
                        <Tag labelSize="text-base" label="Typescript" icon={{ src: Icons.typescript, alt: 'typecript', className:'size-4' }} />
                        <Tag labelSize="text-base" label="Javascript" icon={{ src: Icons.javascript, alt: 'javascript', className:'size-4' }} />
                        <Tag labelSize="text-base" label="NextJs" icon={{ src: Icons.nextjs, alt: 'Nextjs', className:'size-4' }} />
                        <Tag labelSize="text-base" label="Vite" icon={{ src: Icons.vite, alt: 'vite', className:'size-4' }} />
                        <Tag labelSize="text-base" label="Prisma" icon={{ src: Icons.prisma, alt: 'prisma', className:'size-4' }} />
                        <Tag labelSize="text-base" label="SQL" icon={{ src: Icons.sql, alt: 'SQL', className:'size-4' }} />
                        <Tag labelSize="text-base" label="Spring Boot" icon={{ src: Icons.spring, alt: 'Spring Boot', className:'size-4' }} />
                        <Tag labelSize="text-base" label="Java" icon={{ src: Icons.java, alt: 'Java', className:'size-4' }} />
                        <Tag labelSize="text-base" label="C++" icon={{ src: Icons.cpp, alt: 'C++', className:'size-4' }} />
                        <Tag labelSize="text-base" label="Python" icon={{ src: Icons.python, alt: 'Python', className:'size-4' }} />
                    </ul>
                </section>

                <div className="flex flex-col items-center justify-center h-full  overflow-hidden">
                    <img src="/informal.jpg" alt="Yo" className="size-full object-cover scale-120 " />
                </div>
            </div>
        </section>
    )
}

import ProjectCard from "@/components/Cards/ProjectCard"
import Modal from "@/components/Modal"
import Tag from "@/components/Tag"
import { Icons } from "@/constants/Icons"
import { Projects } from "@/constants/projects"
import { GetImages } from "@/scripts/images"
import { useState } from "react"

interface Prompts {
    projRef: React.RefObject<any>
}

export default function Proyects({ projRef }: Prompts) {
    const [viewModal, showModal] = useState<boolean>(false);
    const [curProject, setProj] = useState<any>(null);

    return (
        <section ref={projRef} className="flex flex-col w-full min-h-[70vh] page-padding">
            <div className="flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">Proyectos</h2>
                <span className="text-4xl opacity-10 font-bold">{'{ }'}</span>
            </div>

            <ul className="grid grid-cols-4 gap-16 py-4">
                {Projects.map((project) => (
                    <ProjectCard title={project.title} image={GetImages(project.imagesFolder)[0]} description={project.description} techs={project.techs} onDetails={() => { showModal(true); setProj(null); }} />
                ))}

            </ul>

            <Modal title="Modal de prueba" icon={{ src: "/projects/cibershield/z_logo.webp", alt: "logo" }} isOpen={viewModal} setIsOpen={showModal}>
                <>
                    <div className="flex flex-col justify-between">
                        <section className="relative flex h-[50vh] gap-4 w-full overflow-hidden mb-8">
                            <img src="/achivements/icpc/0.webp" alt="prueba" className="absolute left-0 top-0 -translate-x-9/10 h-full max-w-4/5  object-cover rounded-lg" />

                            <img src="/projects/cibershield/0.png" alt="prueba" className="h-full max-w-4/5 object-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg" />

                            <img src="/achivements/icpc/z.webp" alt="prueba" className="absolute right-0 top-0 translate-x-9/10 h-full max-w-4/5 object-cover rounded-lg" />
                        </section>

                        <div className="flex gap-4 mx-auto py-2">
                            <div className="bg-white size-2 rounded-full"></div>
                            <div className="bg-white/40 size-2 rounded-full"></div>
                            <div className="bg-white/40 size-2 rounded-full"></div>
                        </div>

                        <section className="flex gap-4">
                            <ProjectData title="Fecha" data={"2 / 2 / 2026"} />
                            <ProjectData title="Rol" data={"FullStack"} />
                            <ProjectData title="Ubicacion" data={"Ensenada, B.C. Mexico"} />
                            <ProjectData title="Equipo" data={["Antonio Ramos", "Adan Gonzalez"]} />

                            <ul className="flex flex-nowrap items-center ml-auto gap-2 max-w-3/5 scroll-hidden overflow-auto">
                                <li key={"React"}>
                                    <Tag label={"React"} icon={{ src: Icons.react, alt: "", iconRight: true }} />
                                </li>
                                <li key={"Nestjs"}>
                                    <Tag label={"Nestjs"} icon={{ src: Icons.nestJs, alt: "", iconRight: true }} />
                                </li>
                                <li key={"Vue"}>
                                    <Tag label={"Vue"} icon={{ src: Icons.vue, alt: "", iconRight: true }} />
                                </li>
                            </ul>
                        </section>
                    </div>

                    <hr className="bg-whtie my-8 w-4/5 mx-auto"/>

                    <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <article className="flex flex-col gap-2">
                            <h3 className="text-xl font-medium">¿Que es Cibershield?</h3>
                            <p className="text-base ">
                                Plataforma web educativa enfocada en ciberseguridad que ofrece información sobre amenazas como phishing y malware, además de ejercicios interactivos para identificar intentos de phishing mediante el análisis de correos electrónicos.
                            </p>
                        </article>

                        <article className="flex flex-col gap-2">
                            <h3 className="text-xl font-medium">¿Cual fue mi trabajo?</h3>
                            <p className="text-base ">
                                Plataforma web educativa enfocada en ciberseguridad que ofrece información sobre amenazas como phishing y malware, además de ejercicios interactivos para identificar intentos de phishing mediante el análisis de correos electrónicos.
                            </p>
                        </article>
                    </section>
                </>
            </Modal>
        </section>
    )
}

function ProjectData({ title, data }: { title: string, data: string | string[] }) {
    return (
        <article className="flex flex-col">
            <h5 className="text-lg font-medium">{title}</h5>

            {typeof data === 'string' ?
                <span className="text-sm text-(--text-gray)">{data}</span>
                :
                <>
                    {data.map((cur: string) => (
                        <span className="text-sm text-(--text-gray)">{cur}</span>
                    ))}
                </>
            }
        </article>
    )
}
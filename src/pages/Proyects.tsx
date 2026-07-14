import ProjectCard from "@/components/Cards/ProjectCard"
import Carrusel from "@/components/Carrusel"
import Modal from "@/components/Modal"
import Tag from "@/components/Tag"
import { Projects, type Project } from "@/constants/projects"
import { GetImages } from "@/scripts/images"
import { useEffect, useState } from "react"

interface Prompts {
    projRef: React.RefObject<any>
}

export default function Proyects({ projRef }: Prompts) {
    const [viewModal, showModal] = useState<boolean>(false);
    const [curProject, setProj] = useState<Project | null>(null);
    const [projectImages, setImages] = useState<string[]>([])
    const [indexActive, setIndex] = useState<number>(0);
    const [fullScren, setFullScreen] = useState(false);

    useEffect(() => {
        if (!curProject) return;

        const images = GetImages(curProject.folder, 'projects');
        if (images && images.length > 0) {
            setImages(images);
        } else {
            setImages([]);
        }
        setIndex(0);
    }, [curProject?.title])

    return (
        <section ref={projRef} className="flex flex-col w-full min-h-[80vh] page-padding">
            <div className="flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">Proyectos</h2>
                <span className="text-4xl opacity-10 font-bold">{'{ }'}</span>
            </div>

            <ul className="grid grid-cols-3 gap-16 py-4">
                {Projects.map((project: Project) => (
                    <ProjectCard title={project.title} image={GetImages(project.folder)[0]} description={project.description} techs={project.tecs} onDetails={() => { showModal(true); setProj(project); }} />
                ))}

            </ul>

            <Modal title={curProject?.title ?? "Proyecto"} icon={{ src: `/projects/${curProject?.folder}/z_logo.webp`, alt: "logo" }} isOpen={viewModal} setIsOpen={showModal} onClose={() => { setProj(null); setImages([]); }}>
                {curProject ?
                    <>
                        <div className="flex flex-col justify-between">
                            <div className="relative flex flex-col items-center h-[50vh] gap-4 w-full overflow-hidden mb-8">
                                <Carrusel images={projectImages} indexActive={indexActive} setIndex={setIndex} fullScreen={fullScren} setFullScreen={setFullScreen} />
                            </div>

                            <section className="flex gap-4">
                                <ProjectData title="Fecha" data={curProject.date} />
                                <ProjectData title="Rol" data={curProject.rol} />
                                <ProjectData title="Ubicacion" data={curProject.location} />
                                {(curProject.team && curProject.team.length > 0) &&
                                    <ProjectData title="Equipo" data={curProject.team} />
                                }

                                <ul className="flex flex-nowrap items-center ml-auto gap-2 max-w-3/5 scroll-hidden overflow-auto">
                                    {curProject.tecs.map((tec) => (
                                        <li key={tec.label}>
                                            <Tag label={tec.label} icon={tec.img} />
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>

                        <hr className="bg-whtie my-8 w-4/5 mx-auto" />

                        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <article className="flex flex-col gap-2">
                                <h3 className="text-xl font-medium">¿Que es {curProject?.title}?</h3>
                                <p className="text-base ">
                                    {curProject.whatIs}
                                </p>
                            </article>

                            <article className="flex flex-col gap-2">
                                <h3 className="text-xl font-medium">¿Cual fue mi trabajo?</h3>
                                <p className="text-base ">
                                    {curProject.whatIdo}
                                </p>
                            </article>
                        </section>
                    </>
                    :
                    <>
                        <span className="text-2xl">Lo siento</span>
                        <span className="text-base">Hubo un error al cargar el proyecto</span>
                    </>
                }
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
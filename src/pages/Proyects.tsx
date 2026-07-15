import Button from "@/components/Button"
import ProjectCard from "@/components/Cards/ProjectCard"
import Carrusel from "@/components/Carrusel"
import Modal from "@/components/Modal"
import Tag from "@/components/Tag"
import { Icons } from "@/constants/Icons"
import { getProjects, type Project } from "@/constants/projects"
import { useLanguage } from "@/hooks/useLanguage"
import { GetImages } from "@/scripts/images"
import { useEffect, useState } from "react"

interface Prompts {
    projRef: React.RefObject<any>
}

export default function Proyects({ projRef }: Prompts) {
    const { language, t } = useLanguage()
    const projects = getProjects(language)

    const backgroundIcons = [
        { src: Icons.tailwindcss, alt: "tailwind", className: "size-12 rotate-[-10deg] sm:size-16", position: "left-[6%] top-[12%]" },
        { src: Icons.nextjs, alt: "Next.js", className: "size-10 rotate-12 sm:size-14", position: "right-[8%] bottom-[16%]" },    ]

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
        <section ref={projRef} className="relative flex flex-col w-full min-h-[80vh] page-padding overflow-hidden">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {backgroundIcons.map((icon) => (
                    <div key={icon.alt} className={`absolute ${icon.position} opacity-10`}>
                        <img src={icon.src} alt={icon.alt} className={icon.className} />
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">{t.projects.title}</h2>
                <span className="text-4xl opacity-10 font-bold">{'{ }'}</span>
            </div>

            <ul className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 py-4">
                {projects.map((project: Project) => (
                    <ProjectCard key={project.title} title={project.title} image={GetImages(project.folder)[0]} description={project.description} techs={project.tecs} onDetails={() => { showModal(true); setProj(project); }} />
                ))}

            </ul>

            <Modal title={curProject?.title ?? t.projects.modal.title} icon={{ src: `/projects/${curProject?.folder}/z_logo.webp`, alt: "logo" }} isOpen={viewModal} setIsOpen={showModal} onClose={() => { setProj(null); setImages([]); }}>
                {curProject ?
                    <>
                        <div className="flex flex-col justify-between order-1">
                            <div className="relative flex flex-col items-center h-[20vh] md:h-[30vh] lg:h-[50vh] gap-4 w-full overflow-hidden mb-8">
                                <Carrusel images={projectImages} indexActive={indexActive} setIndex={setIndex} fullScreen={fullScren} setFullScreen={setFullScreen} />
                            </div>
                        </div>

                        <section className="flex flex-col md:flex-row gap-4 order-4 md:order-2">
                            <ProjectData title={t.projects.modal.date} data={curProject.date} />
                            <ProjectData title={t.projects.modal.role} data={curProject.rol} />
                            <ProjectData title={t.projects.modal.location} data={curProject.location} />
                            {(curProject.team && curProject.team.length > 0) &&
                                <ProjectData title={t.projects.modal.team} data={curProject.team} />
                            }

                            <ul className="flex flex-wrap md:flex-nowrap items-center md:ml-auto gap-2 md:max-w-3/5 scroll-hidden overflow-auto">
                                {curProject.tecs.map((tec) => (
                                    <li key={tec.label}>
                                        <Tag label={tec.label} icon={tec.img} />
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <hr className="bg-whtie my-8 w-4/5 mx-auto order-3 md:order-3" />

                        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 order-2 md:order-4">
                            <article className="flex flex-col gap-2">
                                <h3 className="text-xl font-medium">{t.projects.modal.whatIs} {curProject?.title}?</h3>
                                <p className="text-sm md:text-base">
                                    {curProject.whatIs}
                                </p>
                            </article>

                            <article className="flex flex-col gap-2">
                                <h3 className="text-xl font-medium">{t.projects.modal.whatIdo}</h3>
                                <p className="text-sm md:text-base">
                                    {curProject.whatIdo}
                                </p>
                            </article>
                        </section>

                        {(curProject.repo || curProject.page) &&
                            <section className="flex flex-wrap justify-center md:justify-end gap-2 order-5 mt-8">
                                {curProject.repo &&
                                    <Button label={t.projects.modal.repo} onClick={() => window.open(curProject.repo, "_blank")} btnStyle="outline-secondary" icon={{ src: Icons.github, alt: "github" }} />
                                }
                                {curProject.page &&
                                    <Button label={t.projects.modal.page} onClick={() => window.open(curProject.page, "_blank")} btnStyle="outline-secondary" icon={{ src: Icons.page, alt: "Page" }} />
                                }
                            </section>
                        }
                    </>
                    :
                    <>
                        <span className="text-2xl">{t.projects.modal.error}</span>
                        <span className="text-base">{t.projects.modal.errorMessage}</span>
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
                        <span key={cur} className="text-sm text-(--text-gray)">{cur}</span>
                    ))}
                </>
            }
        </article>
    )
}
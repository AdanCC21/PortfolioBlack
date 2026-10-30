import Button from "@/components/Button"
import ProjectCard from "@/components/Cards/ProjectCard"
import Carrusel from "@/components/Carrusel"
import Modal from "@/components/Modal"
import Tag from "@/components/Tag"
import { Icons } from "@/constants/Icons"
import { getProjects, type Project } from "@/constants/projects"
import { useLanguage } from "@/hooks/useLanguage"
import { GetImages } from "@/scripts/images"
import { pageEntry, pageEntryViewport, sectionIconEntry, subtleFloat } from "@/constants/animations"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Prompts {
    projRef: React.RefObject<any>
}

export default function Proyects({ projRef }: Prompts) {
    const { language, t } = useLanguage()
    const projects = getProjects(language)

    const backgroundIcons = [
        { src: Icons.tailwindcss, alt: "tailwind", className: "size-12 sm:size-16", position: "left-[6%] top-[12%]", rotate: "-14deg" },
        { src: Icons.nextjs, alt: "Next.js", className: "size-10 sm:size-14", position: "right-[8%] bottom-[16%]", rotate: "12deg" },
        { src: Icons.java, alt: "Java", className: "size-10 sm:size-12", position: "right-[18%] top-[18%]", rotate: "-8deg" },
        { src: Icons.react, alt: "React", className: "size-9 sm:size-11", position: "left-[22%] bottom-[14%]", rotate: "16deg" },
    ]

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
                    <div key={icon.alt} style={{ rotate: icon.rotate }} className={`absolute ${icon.position} opacity-[0.08]`}>
                        <motion.div animate={icon.alt === "Next.js" || icon.alt === "tailwind" ? subtleFloat : undefined}>
                            <motion.img variants={sectionIconEntry} initial="hidden" whileInView="visible" viewport={{ once: true }} src={icon.src} alt={icon.alt} className={icon.className} />
                        </motion.div>
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">{t.projects.title}</h2>
                <span className="text-4xl opacity-10 font-bold">{'{ }'}</span>
            </div>

            <ul className="relative z-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 py-4">
                {projects.map((project: Project) => (
                    <motion.li
                        key={project.title}
                        className="h-full"
                        variants={pageEntry}
                        initial="hidden"
                        whileInView="visible"
                        viewport={pageEntryViewport}
                    >
                        <ProjectCard title={project.title} image={GetImages(project.folder)[0]} description={project.description} techs={project.tecs} onDetails={() => { showModal(true); setProj(project); }} />
                    </motion.li>
                ))}

            </ul>

            <Modal title={curProject?.title ?? t.projects.modal.title} icon={{ src: curProject?.title !== 'ActOne' && curProject?.title !== 'Gestor de pruebas' ? `/projects/${curProject?.folder}/z_logo.webp` : '', alt: "logo" }} isOpen={viewModal} setIsOpen={showModal} onClose={() => { setProj(null); setImages([]); }}>
                {curProject ?
                    <>
                        <div className="flex flex-col justify-between">
                            <div className="relative flex flex-col items-center h-[20vh] md:h-[30vh] lg:h-[50vh] gap-4 w-full overflow-hidden mb-8">
                                <Carrusel images={projectImages} indexActive={indexActive} setIndex={setIndex} fullScreen={fullScren} setFullScreen={setFullScreen} />
                            </div>
                        </div>

                        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 my-4">
                            <ProjectDescription title={t.projects.modal.overview} description={curProject.whatIs} />
                            <ProjectDescription title={t.projects.modal.contribution} description={curProject.whatIdo} />
                        </section>

                        <section className="flex flex-col gap-4 mt-4 mb-8">
                            <h3 className="text-sm font-medium uppercase tracking-wider text-(--text-gray)">{t.projects.modal.technologies}</h3>
                            <ul className="flex flex-wrap gap-2">
                                {curProject.tecs.map((tec) => (
                                    <li key={tec.label}>
                                        <Tag label={tec.label} icon={tec.img} />
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section aria-label={t.projects.modal.details} className="grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 py-7 md:grid-cols-4">
                            <ProjectData title={t.projects.modal.role} data={curProject.rol} />
                            <ProjectData title={t.projects.modal.date} data={curProject.date} />
                            <ProjectData title={t.projects.modal.location} data={curProject.location} />
                            {(curProject.team && curProject.team.length > 0) &&
                                <ProjectData title={t.projects.modal.team} data={curProject.team} />
                            }
                        </section>



                        {(curProject.repo || curProject.page) &&
                            <section className="flex flex-wrap justify-center md:justify-end gap-2 order-5 mt-8 mb-2">
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
        <article className="flex min-w-0 flex-col gap-1">
            <h4 className="text-xs font-medium uppercase tracking-wider text-(--text-gray)">{title}</h4>

            {typeof data === 'string' ?
                <span className="text-sm">{data}</span>
                :
                <>
                    {data.map((cur: string) => (
                        <span key={cur} className="text-sm">{cur}</span>
                    ))}
                </>
            }
        </article>
    )
}

function ProjectDescription({ title, description }: { title: string, description: string }) {
    return (
        <article className="flex flex-col gap-3 border-l border-white/20 pl-5">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm leading-relaxed text-(--text-gray) sm:text-base">{description}</p>
        </article>
    )
}

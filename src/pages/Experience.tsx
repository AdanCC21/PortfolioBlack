import Tag from "@/components/Tag"
import { Icons } from "@/constants/Icons"
import { getExperiences, type Experience } from "@/constants/experience"
import { useLanguage } from "@/hooks/useLanguage"
import { pageEntry, experienceItemViewport, sectionIconEntry } from "@/constants/animations"
import { motion } from "framer-motion"


interface Prompts {
    pageRef: React.RefObject<any>
}

export default function Experience({ pageRef }: Prompts) {
    const { language, t } = useLanguage()
    const experiences = getExperiences(language)

    const backgroundIcons = [
        { src: Icons.prisma, alt: "Prisma", className: "size-10 sm:size-14", position: "right-[8%] top-[20%]", rotate: "13deg" },
        { src: Icons.javascript, alt: "javascript", className: "size-12 sm:size-16", position: "left-[20%] bottom-[18%]", rotate: "-11deg" },
        { src: Icons.java, alt: "java", className: "size-10 sm:size-14", position: "right-[18%] bottom-[12%]", rotate: "8deg" },
        { src: Icons.typescript, alt: "TypeScript", className: "size-9 sm:size-12", position: "left-[8%] top-[26%]", rotate: "-16deg" },
        { src: Icons.python, alt: "Python", className: "size-9 sm:size-11", position: "right-[28%] top-[12%]", rotate: "10deg" },
    ]

    return (
        <div ref={pageRef} className="relative flex flex-col w-full gap-4 page-padding my-[10vh] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {backgroundIcons.map((icon) => (
                    <div key={icon.alt} style={{ rotate: icon.rotate }} className={`absolute ${icon.position} opacity-[0.08]`}> 
                        <motion.img variants={sectionIconEntry} initial="hidden" whileInView="visible" viewport={{ once: true }} src={icon.src} alt={icon.alt} className={icon.className} />
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">{t.experience.title}</h2>
                <span className="text-4xl opacity-10 font-bold">{'< >'}</span>
            </div>

            <ul className="relative z-10 flex flex-col w-full mb-8">
                {experiences.map((exp) => (
                    <ExperienceItem key={exp.title} item={exp} />
                ))}
            </ul>
        </div>
    )
}

interface ExpPrompts {
    item: Experience
}

function ExperienceItem({ item }: ExpPrompts) {
    return (
        <motion.li
            variants={pageEntry}
            initial="hidden"
            whileInView="visible"
            viewport={experienceItemViewport}
            className="group flex w-full items-stretch gap-4 sm:gap-6"
        >
            <div className="relative flex w-4 shrink-0 flex-col items-center">
                <div className="z-10 mt-1 size-3 shrink-0 rounded-full border border-white/50 bg-(--bg) transition-colors duration-300 group-hover:bg-white"></div>
                <div className="absolute top-4 bottom-0 w-px bg-white/15"></div>
            </div>

            <div className="mb-8 flex w-full flex-col gap-3 border-b border-white/10 pb-6 transition-colors duration-300 group-hover:border-white/25">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <span className="text-sm text-(--text-gray)">{item.place}</span>
                    <span className="text-xs text-(--text-gray) sm:text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
                <p className="max-w-4xl text-sm text-(--text-gray) sm:text-base">
                    {item.description}
                </p>
                <ul className="mt-1 flex flex-wrap gap-2">
                    {item.tecs.map((tec) => (
                        <Tag key={`${item.title}-${tec.label}`} label={tec.label} icon={tec.img} />
                    ))}
                </ul>
            </div>
        </motion.li>
    )
}

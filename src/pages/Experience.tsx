import Tag from "@/components/Tag"
import { Icons } from "@/constants/Icons"
import { getExperiences, type Experience } from "@/constants/experience"
import { useLanguage } from "@/hooks/useLanguage"
import { pageEntry, experienceItemViewport } from "@/constants/animations"
import { motion } from "framer-motion"


interface Prompts {
    pageRef: React.RefObject<any>
}

export default function Experience({ pageRef }: Prompts) {
    const { language, t } = useLanguage()
    const experiences = getExperiences(language)

    const backgroundIcons = [
        { src: Icons.prisma, alt: "Prisma", className: "size-10 -rotate-12 sm:size-14", position: "right-[8%] top-[20%]" },
        { src: Icons.javascript, alt: "javascript", className: "size-12 rotate-6 sm:size-16", position: "left-[20%] bottom-[18%]" },
        { src: Icons.java, alt: "java", className: "size-10 sm:size-14 rotate-20", position: "right-[18%] bottom-[12%]" },
    ]

    return (
        <div ref={pageRef} className="relative flex flex-col w-full gap-4 page-padding my-[10vh] overflow-hidden">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {backgroundIcons.map((icon) => (
                    <div key={icon.alt} className={`absolute ${icon.position} opacity-10`}> 
                        <img src={icon.src} alt={icon.alt} className={icon.className} />
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
            className="flex w-full items-stretch gap-3"
        >
            <div className="flex w-full flex-col gap-4 rounded-xl bg-(--neutral) p-4 mb-4">
                <span className="text-xs text-(--gray)">{item.place}</span>
                <div className="flex w-full items-center justify-between">
                    <h1 className="text-2xl font-bold">{item.title}</h1>
                    <span className="text-sm">{item.date}</span>
                </div>
                <p className="text-base">
                    {item.description}
                </p>
                <ul className="flex gap-2 flex-wrap">
                    {item.tecs.map((tec) => (
                        <Tag key={`${item.title}-${tec.label}`} label={tec.label} icon={tec.img} />
                    ))}
                </ul>
            </div>

            <div className="order-first relative flex w-4 shrink-0 flex-col items-center">
                <div className="size-3 shrink-0 rounded-full bg-white"></div>
                <div className="w-1 flex-1 rounded-full bg-white"></div>
            </div>
        </motion.li>
    )
}

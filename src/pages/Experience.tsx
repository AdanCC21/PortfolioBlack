import Tag from "@/components/Tag"
import { Icons } from "@/constants/Icons"
import { getExperiences, type Experience } from "@/constants/experience"
import { useLanguage } from "@/hooks/useLanguage"


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
                {experiences.map((exp, index) => (
                    <ExperienceItem key={exp.title} item={exp} index={index} />
                ))}
            </ul>
        </div>
    )
}

interface ExpPrompts {
    item: Experience
    index: number
}

function ExperienceItem({ item, index }: ExpPrompts) {
    return (
        <li className={`flex flex-row-reverse ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:justify-between w-full `}>
            <div className={`flex flex-col flex-1 gap-4 p-4 bg-(--neutral) rounded-xl mb-4`}>
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

            <div className="relative flex flex-col items-center mr-2 md:mx-2 md:mr-0">
                <div className="bg-white size-3 rounded-full"></div>
                <div className="bg-white w-1 h-full rounded-full"></div>
            </div>
            <div className={`hidden md:flex flex-col flex-1 h-fit gap-4 p-4 rounded-xl mb-4`}>

            </div>
        </li>
    )
}

import Tag from "@/components/Tag"
import { Experiences, type Experience } from "@/constants/experience"


interface Prompts {
    pageRef: React.RefObject<any>
}

export default function Experience({ pageRef }: Prompts) {
    return (
        <div ref={pageRef} className="flex flex-col w-full gap-4 page-padding my-[10vh]">
            <div className="flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">Experiencia</h2>
                <span className="text-4xl opacity-10 font-bold">{'< >'}</span>
            </div>

            <ul className="flex flex-col w-full mb-8">
                {Experiences.map((exp, index) => (
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

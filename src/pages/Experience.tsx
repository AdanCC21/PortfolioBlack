import Tag from "@/components/Tag"
import { AnimationTime } from "@/constants/animations"
import { Experiences, type Experience } from "@/constants/experience"
import { Icons } from "@/constants/Icons"
import { GetImages } from "@/scripts/images"
import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { slideVariants } from "@/scripts/carrusel"
import Carrusel from "@/components/Carrusel"
import { label } from "framer-motion/client"

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
    const images = GetImages(item.folder, 'experience');
    const [currentImage, setCurrentImage] = useState(0);

    return (
        <li className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 justify-between w-full h-fit`}>
            <div className="flex flex-col flex-1 max-w-1/2 h-fit gap-4 px-4 py-2 bg-(--neutral) rounded-xl my-8">
                <span className="text-sm text-(--gray)">{item.place}</span>
                <div className="flex w-full justify-between">
                    <h1 className="text-4xl font-bold">{item.title}</h1>
                    <span className="text-lg">{item.date}</span>
                </div>
                <p className="text-base">
                    {item.description}
                </p>
                <ul className="flex gap-2">
                    {item.tecs.map((tec) => (
                        <Tag key={`${item.title}-${tec.label}`} label={tec.label} icon={tec.img} />
                    ))}
                </ul>
            </div>

            <div className="absolute top-0 right-1/2 bg-white w-1 h-full -translate-x-full"></div>
            <div className="absolute top-0 right-1/2  bg-white size-3  rounded-full"></div>

            <div className="group flex flex-1 max-w-1/2 min-h-full gap-4 px-4 py-2 bg-(--neutral) rounded-xl overflow-hidden my-8">
                <Carrusel images={images} indexActive={currentImage} setIndex={setCurrentImage} showIndex={false} />
            </div>
        </li>
    )
}
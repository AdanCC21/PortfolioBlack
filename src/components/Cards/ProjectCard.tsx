import type TecModel from "@/model/Tec"
import { GetTecs } from "@/scripts/tecs"
import { useEffect, useState } from "react"
import Tag from "../Tag"
import { AnimationTime } from "@/constants/animations"

interface ProjectCardProps {
    image: string
    title: string
    description: string
    techs?: string[]
    onDetails?: () => void
}

export default function ProjectCard({ image, title, description, techs = [], onDetails }: ProjectCardProps) {
    const [tecnologies, setTecs] = useState<TecModel[]>([]);

    useEffect(() => {
        if (techs) {
            const tecObjects = GetTecs(techs);
            console.log(tecObjects);
            setTecs(tecObjects);
        }
    }, [])

    return (
        <div className="flex flex-col flex-1  gap-3">
            <img src={image} alt={title} className="w-full object-cover aspect-video rounded-sm" />

            <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold">{title}</h3>

                <blockquote className="border-l-2 border-(--secondary) pl-3 text-base text-(--text-gray) leading-relaxed line-clamp-3">
                    {description}
                </blockquote>
            </div>

            <div className="flex items-center justify-between gap-2 flex-wrap">
                {tecnologies.length > 0 && (
                    <ul className="flex flex-nowrap items-center gap-2 max-w-3/5 scroll-hidden overflow-auto">
                        {tecnologies.map((tech) => (
                            <li key={tech.name}>
                                <Tag label={tech.name} icon={{ ...tech.icon, iconRight: true }} />
                            </li>
                        ))}
                    </ul>
                )}

                {onDetails && (
                    <button
                        onClick={onDetails}
                        className={`text-sm text-(--text-gray) border-b border-b-white/0 hover:text-white hover:border-b-white whitespace-nowrap ml-auto cursor-pointer ${AnimationTime}`}
                    >
                        Ver Detalles
                    </button>
                )}
            </div>
        </div>
    )
}
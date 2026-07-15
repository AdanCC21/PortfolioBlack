import Tag from "../Tag"
import { AnimationTime } from "@/constants/animations"
import { useLanguage } from "@/hooks/useLanguage"
import type { ImageModel } from "@/model/Image"

interface ProjectCardProps {
    image: string
    title: string
    description: string
    techs?: {
        label: string
        img: ImageModel
    }[]
    onDetails?: () => void
}

export default function ProjectCard({ image, title, description, techs = [], onDetails }: ProjectCardProps) {
    const {language} = useLanguage()
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
                {techs.length > 0 && (
                    <ul className="flex flex-nowrap items-center gap-2 max-w-4/5 scroll-hidden overflow-auto">
                        {techs.map((tech) => (
                            <li key={tech.label}>
                                <Tag label={tech.label} icon={{ ...tech.img, iconRight: true }} />
                            </li>
                        ))}
                    </ul>
                )}

                {onDetails && (
                    <button
                        onClick={onDetails}
                        className={`text-sm text-(--text-gray) border-b border-b-white/0 hover:text-white hover:border-b-white whitespace-nowrap ml-auto cursor-pointer ${AnimationTime}`}
                    >
                        {language === 'es' ? 'Ver detalles' : 'See details'}
                    </button>
                )}
            </div>
        </div>
    )
}
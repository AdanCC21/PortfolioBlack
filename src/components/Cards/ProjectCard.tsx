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
    const { language } = useLanguage()
    return (
        <div className="group flex h-full flex-col gap-3 cursor-pointer rounded-xl bg-(--neutral)/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-lg hover:shadow-black/5" onClick={() => { onDetails?.(); }}>
            <div className="overflow-hidden rounded-lg">
                <img src={image} alt={title} className="w-full object-cover aspect-video transition-transform duration-500 group-hover:scale-105" />
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold">{title}</h3>

                <blockquote className="border-l-2 border-(--secondary) pl-3 text-base text-(--text-gray) leading-relaxed line-clamp-3">
                    {description}
                </blockquote>
            </div>

            <div className="mt-auto flex items-center justify-between gap-2 flex-wrap">
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

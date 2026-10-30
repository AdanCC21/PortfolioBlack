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
        <div className="group flex h-full flex-col gap-4 cursor-pointer border-b border-white/10 pb-5 transition-colors duration-300 hover:border-white/30" onClick={() => { onDetails?.(); }}>
            <div className="overflow-hidden rounded-md">
                <img src={image} alt={title} className="w-full object-cover aspect-video transition-transform duration-500 group-hover:scale-105" />
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold transition-colors duration-300 group-hover:text-white sm:text-2xl">{title}</h3>

                <blockquote className="border-l border-white/20 pl-3 text-sm leading-relaxed text-(--text-gray) line-clamp-3 sm:text-base">
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

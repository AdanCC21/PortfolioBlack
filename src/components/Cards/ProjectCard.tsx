interface Tech {
    icon: { src: string; alt: string }
    title: string
}

interface ProjectCardProps {
    image: string
    title: string
    description: string
    techs?: Tech[]
    onDetails?: () => void
}

export default function ProjectCard({ image, title, description, techs = [], onDetails }: ProjectCardProps) {
    return (
        <div className="flex flex-col w-72 gap-3">

            {/* Imagen */}
            <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover rounded-sm"
            />

            {/* Título */}
            <h3 className="text-2xl font-bold text-[--foreground]">{title}</h3>

            {/* Descripción con borde izquierdo */}
            <blockquote className="border-l-2 border-[--accent] pl-3 text-sm text-[--neutral] leading-relaxed">
                {description}
            </blockquote>

            {/* Footer: techs + ver detalles */}
            <div className="flex items-center justify-between gap-2 flex-wrap">

                {/* Tags de tecnologías */}
                {techs.length > 0 && (
                    <div className="flex items-center gap-2 flex-wrap">
                        {techs.map((tech) => (
                            <span
                                key={tech.title}
                                className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[--neutral]/30 text-xs text-[--neutral]"
                            >
                                {tech.icon.src && (
                                    <img
                                        src={tech.icon.src}
                                        alt={tech.icon.alt}
                                        className="w-3.5 h-3.5 object-contain"
                                    />
                                )}
                                {tech.title}
                            </span>
                        ))}
                    </div>
                )}

                {/* Ver detalles */}
                {onDetails && (
                    <button
                        onClick={onDetails}
                        className="text-sm text-[--neutral] hover:text-[--foreground] transition-colors whitespace-nowrap ml-auto"
                    >
                        Ver Detalles
                    </button>
                )}
            </div>
        </div>
    )
}
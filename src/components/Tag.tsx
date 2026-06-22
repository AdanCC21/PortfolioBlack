import { AnimationTime } from "@/constants/animations"
import type { ImageModel } from "@/model/Image"

interface Prompts {
    label: string
    labelSize?: string
    labelClass?: string

    tagClass?: string

    icon?: ImageModel
    padding?: string

}

export default function Tag({ label, labelSize, labelClass, icon, padding, tagClass }: Prompts) {
    return (
        <div className={`flex ${(icon && icon.iconRight) && 'flex-row-reverse'} gap-2 items-center justify-center ${padding ?? 'px-3 py-1'} ${tagClass} border border-(--secondary) text-white gap-2 rounded-lg hover:bg-(--neutral) ${AnimationTime}`}>
            <span className={`${labelSize ?? 'text-xs'} ${labelClass}`}>{label}</span>
            {icon &&
                <img src={icon.src} alt={icon.alt} className={`size-3 ${icon.className} ${icon.invert && 'invert'}`} />
            }
        </div>
    )
}

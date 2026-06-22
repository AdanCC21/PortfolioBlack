import { AnimationTime } from "@/constants/animations"
import type { ImageModel } from "@/model/Image"

interface Prompts {
    label?: string
    labelSize?: string
    labelClass?: string

    icon?: ImageModel
    onClick: () => void
    btnStyle?: BtnStyles

    padding?: string
    btnClass?: string
}

type BtnStyles = "primary" | 'secondary' | 'tertiary' | 'outline-neutral' | 'outline-secondary';

const btnStyles: Record<BtnStyles, string> = {
    'primary': `bg-(--primary) text-black gap-2 rounded-lg cursor-pointer hover:scale-105 ${AnimationTime}`,
    'secondary': `bg-(--secondary) text-white gap-2 rounded-lg cursor-pointer hover:scale-105 ${AnimationTime}`,
    'tertiary': `bg-(--tertiary) text-white gap-2 rounded-lg cursor-pointer hover:scale-105 ${AnimationTime}`,
    'outline-neutral': `border border-(--neutral) text-white gap-2 rounded-lg cursor-pointer hover:scale-105 ${AnimationTime}`,
    'outline-secondary': `border border-(--secondary) text-white gap-2 rounded-lg cursor-pointer hover:scale-105 ${AnimationTime}`,
}

export default function Button({ label, labelSize, labelClass, icon, onClick, padding, btnStyle = "primary", btnClass }: Prompts) {

    return (
        <button className={`flex ${(icon && icon.iconRight) && 'flex-row-reverse'} gap-2 items-center justify-center ${padding ?? 'px-4 py-2'} ${btnClass} ${btnStyles[btnStyle]}`} onClick={onClick}>
            {label &&
                <span className={`${labelSize ?? 'text-sm'} ${labelClass}`}>{label}</span>
            }
            {icon &&
                <img src={icon.src} alt={icon.alt} className={`size-4 ${icon.className} ${icon.invert && 'invert'}`} />
            }
        </button>
    )
}

import type { Achivement } from "@/constants/achivements"
import { GetImages } from "@/scripts/images"
import { AnimationTime } from "@/constants/animations"

interface Promtps {
    diff: number
    currentItem: Achivement
    active: boolean
}

const CENTER_LEFT = 12.5
const STEP = 77.5

export default function AchivementCard({ diff, currentItem, active = false }: Promtps) {
    const images = GetImages(currentItem.folder, 'achivements')

    const left = CENTER_LEFT + diff * STEP
    const absDiff = Math.abs(diff)
    const isCenter = diff === 0

    const opacityClass =
        absDiff <= 1 ? 'opacity-100'
            : absDiff === 2 ? 'opacity-0'
                : 'opacity-0'

    return (
        <li
            style={{ left: `${left}%`, zIndex: 10 - absDiff }}
            className={`absolute flex flex-col gap-2 w-3/4 h-full transition-all duration-500 ease-in-out ${AnimationTime} ${opacityClass} ${isCenter ? '' : 'pointer-events-none'} ${active ? 'z-10' : 'z-20'}`}
        >
            <div className="flex w-full h-7/10 overflow-hidden rounded-xl">
                <img src={images[0]} alt="logro" className={`w-1/3 hover:w-2/3 object-cover z-11 transition-all ease-in-out duration-250`} />
                <img src={images[1]} alt="logro" className={`w-1/3 hover:w-2/3 object-cover z-11 transition-all ease-in-out duration-250`} />
                <img src={images[2]} alt="logro" className={`w-1/3 hover:w-2/3 object-cover z-11 transition-all ease-in-out duration-250`} />
            </div>
            <div className="flex justify-between items-center w-full">
                <h3 className="text-2xl font-semibold">{currentItem.title}</h3>
                <span className="text-base opacity-75">{currentItem.date}</span>
            </div>
            <p className="text-base">{currentItem.description}</p>
        </li>
    )
}
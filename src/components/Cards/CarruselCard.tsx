import { motion } from "framer-motion"
import type { Dispatch, SetStateAction } from "react"

interface Promtps {
    diff: number
    image: string
    hiddeOther?: boolean
    isFull?: boolean
    setFull?: Dispatch<SetStateAction<boolean>>
}

const CENTER_LEFT = 12.5
const STEP = 77.5

export default function CarruselCard({ diff, image, hiddeOther, isFull, setFull }: Promtps) {
    const left = CENTER_LEFT + diff * STEP
    const absDiff = Math.abs(diff)
    const isCenter = diff === 0

    return (
        <motion.li
            initial={{ scale: .6, opacity: 0 }}
            animate={{
                left: `${left}%`,
                scale: isCenter ? 1 : 0.85,
                opacity: hiddeOther ? isCenter ? 1 : 0 : isCenter ? 1 : 0,
            }}
            exit={{ scale: .6, opacity: 0 }}

            style={{ zIndex: 10 - absDiff }}
            className={`absolute flex flex-col gap-2 w-3/4 h-full ${isCenter ? '' : 'pointer-events-none'}`}
        >
            <div className="flex w-full h-full overflow-hidden rounded-xl">
                <img src={image} alt="smm" className="max-w-full max-h-full m-auto object-contain rounded-xl" onClick={() => { !isFull && setFull?.(prev => !prev) }} />
            </div>
        </motion.li>
    )
}
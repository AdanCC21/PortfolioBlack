import { motion } from "framer-motion"

interface Promtps {
    diff: number
    image: string
}

const CENTER_LEFT = 12.5
const STEP = 77.5

export default function CarruselCard({ diff, image }: Promtps) {
    const left = CENTER_LEFT + diff * STEP
    const absDiff = Math.abs(diff)
    const isCenter = diff === 0
    const opacity = absDiff <= 1 ? 1 : 0

    return (
        <motion.li
            initial={{ scale: .6, opacity: 0 }}
            animate={{
                left: `${left}%`,
                scale: isCenter ? 1 : 0.85,
                opacity,
            }}
            exit={{ scale: .6, opacity: 0 }}
            
            style={{ zIndex: 10 - absDiff }}
            className={`absolute flex flex-col gap-2 w-3/4 h-full ${isCenter ? '' : 'pointer-events-none'}`}
        >
            <div className="w-full h-full overflow-hidden rounded-xl">
                <img src={image} alt="smm" className="size-full object-contain rounded-xl" />
            </div>
        </motion.li>
    )
}
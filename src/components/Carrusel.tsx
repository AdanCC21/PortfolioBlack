import { AnimationTime } from "@/constants/animations";
import { Icons } from "@/constants/Icons";
import CarruselCard from "./Cards/CarruselCard";
import { getCircularDiff } from "@/scripts/carrusel";
import { AnimatePresence } from "framer-motion";

interface Prompts {
    images: string[]
    indexActive: number
    setIndex: React.Dispatch<React.SetStateAction<number>>
    showIndex?: boolean
    fullView?: boolean
}

export default function Carrusel({ images, indexActive, setIndex, showIndex = true, fullView = false }: Prompts) {

    const handleCarrusel = (right: boolean) => {
        setIndex(prev => {
            if (right) {
                return prev === images.length - 1 ? 0 : prev + 1;
            } else {
                return prev === 0 ? images.length - 1 : prev - 1;
            }
        })
    }

    return (
        <>
            <ul className="relative group flex w-full h-9/10 overflow-hidden">
                {images.length > 1 &&
                    <button onClick={() => { handleCarrusel(false) }}
                        className={`absolute p-2 left-0 bottom-1/2 translate-y-1/2 z-20 group-hover:bg-black/80 rounded-xl ${AnimationTime} cursor-pointer ml-2`}>
                        <img src={Icons.arrowDown} alt="arrow" className="invert h-4 rotate-180" />
                    </button>
                }

                <AnimatePresence>
                    {images.map((item, index) => (
                        <CarruselCard
                            key={index}
                            diff={getCircularDiff(index, indexActive, images.length)}
                            image={item}
                        />
                    ))}
                </AnimatePresence>

                {images.length > 1 &&
                    <button onClick={() => { handleCarrusel(true) }}
                        className={`absolute p-2 right-0 bottom-1/2 translate-y-1/2 z-20 group-hover:bg-black/80 rounded-xl ${AnimationTime} cursor-pointer mr-2`}>
                        <img src={Icons.arrowDown} alt="arrow" className="invert h-4" />
                    </button>
                }
            </ul>

            {showIndex &&
                <ul className="flex gap-4">
                    {images.map((_, indx) => (
                        <li key={`bl-${indx}`} className={`bg-(--primary) size-2 ${indexActive === indx ? 'scale-120' : 'hover:scale-115 bg-white/40'} rounded-full cursor-pointer ${AnimationTime}`} onClick={() => {
                            setIndex(indx)
                        }}>
                        </li>
                    ))}
                </ul>
            }
        </>
    )
}
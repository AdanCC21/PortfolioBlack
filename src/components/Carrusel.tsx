import { AnimationTime } from "@/constants/animations";
import { Icons } from "@/constants/Icons";
import CarruselCard from "./Cards/CarruselCard";
import { getCircularDiff } from "@/scripts/carrusel";
import { AnimatePresence } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import Button from "./Button";

interface Prompts {
    images: string[]
    indexActive: number

    setIndex: Dispatch<SetStateAction<number>>
    showIndex?: boolean

    fullScreen?: boolean
    setFullScreen?: Dispatch<SetStateAction<boolean>>
}

export default function Carrusel({ images, indexActive, setIndex, showIndex = true, fullScreen = false, setFullScreen }: Prompts) {

    const handleCarrusel = (right: boolean) => {
        setIndex(prev => {
            if (right) {
                return prev === images.length - 1 ? 0 : prev + 1;
            } else {
                return prev === 0 ? images.length - 1 : prev - 1;
            }
        })
    }

    const content = () => (
        <>
            <ul className="relative group flex w-full h-9/10 overflow-hidden">
                {images.length > 1 &&
                    <button onClick={() => { handleCarrusel(false) }}
                        className={`absolute p-2 left-0 bottom-1/2 translate-y-1/2 z-20 ${fullScreen ? 'bg-white' : 'group-hover:bg-black/80'}  rounded-xl ${AnimationTime} cursor-pointer mr-2`}>
                        <img src={Icons.arrowDown} alt="arrow" className={`${fullScreen ? '' : 'invert'} h-4 rotate-180`} />
                    </button>
                }

                <AnimatePresence>
                    {images.map((item, index) => (
                        <CarruselCard
                            key={index}
                            diff={getCircularDiff(index, indexActive, images.length)}
                            image={item}
                            isFull={fullScreen}
                            setFull={setFullScreen}
                            hiddeOther={fullScreen ? true : false}
                        />
                    ))}
                </AnimatePresence>

                {images.length > 1 &&
                    <button onClick={() => { handleCarrusel(true) }}
                        className={`absolute p-2 right-0 bottom-1/2 translate-y-1/2 z-20 ${fullScreen ? 'bg-white' : 'group-hover:bg-black/80'}  rounded-xl ${AnimationTime} cursor-pointer mr-2`}>
                        <img src={Icons.arrowDown} alt="arrow" className={`${fullScreen ? '' : 'invert'} h-4`} />
                    </button>
                }
            </ul>

            {(showIndex && !fullScreen) &&
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

    return fullScreen ? (
        <div className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-black/70 z-100" onClick={() => { setFullScreen?.(false) }}>
            <Button btnClass="absolute right-10 top-10" icon={{ src: Icons.close, alt: "Cerrar", invert: true }} onClick={() => { setFullScreen?.(false) }} />

            <div className="flex h-full w-8/10 mx-auto items-center justify-center" onClick={(e) => { e.stopPropagation(); }}>
                {content()}
            </div>
        </div>
    ) : content()
}
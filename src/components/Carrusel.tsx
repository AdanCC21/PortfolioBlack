import { AnimationTime } from "@/constants/animations";
import { Icons } from "@/constants/Icons";
import CarruselCard from "./Cards/CarruselCard";
import { getCircularDiff } from "@/scripts/carrusel";
import { AnimatePresence } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";
import { useCallback, useEffect } from "react";

interface Prompts {
    images: string[]
    indexActive: number

    setIndex: Dispatch<SetStateAction<number>>
    showIndex?: boolean

    fullScreen?: boolean
    setFullScreen?: Dispatch<SetStateAction<boolean>>
}

export default function Carrusel({ images, indexActive, setIndex, showIndex = true, fullScreen = false, setFullScreen }: Prompts) {

    const handleCarrusel = useCallback((right: boolean) => {
        setIndex(prev => {
            if (right) {
                return prev === images.length - 1 ? 0 : prev + 1;
            } else {
                return prev === 0 ? images.length - 1 : prev - 1;
            }
        })
    }, [images.length, setIndex])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && fullScreen) {
                setFullScreen?.(false)
            } else if (event.key === "ArrowRight" && images.length > 1) {
                event.preventDefault()
                handleCarrusel(true)
            } else if (event.key === "ArrowLeft" && images.length > 1) {
                event.preventDefault()
                handleCarrusel(false)
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [fullScreen, images.length, setFullScreen, handleCarrusel])

    const content = () => (
        <>
            <ul className="relative group flex w-full h-9/10 overflow-hidden">
                {images.length > 1 &&
                    <button onClick={() => { handleCarrusel(false) }}
                        aria-label="Previous image"
                        className={`absolute p-3 left-0 bottom-1/2 translate-y-1/2 z-20 border border-white/15 bg-black/70 hover:bg-black/90 rounded-xl ${AnimationTime} cursor-pointer mr-2`}>
                        <img src={Icons.arrowDown} alt="" className="h-4 invert rotate-180" />
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
                        aria-label="Next image"
                        className={`absolute p-3 right-0 bottom-1/2 translate-y-1/2 z-20 border border-white/15 bg-black/70 hover:bg-black/90 rounded-xl ${AnimationTime} cursor-pointer mr-2`}>
                        <img src={Icons.arrowDown} alt="" className="h-4 invert" />
                    </button>
                }
            </ul>

            {(showIndex && !fullScreen) &&
                <ul className="flex gap-4">
                    {images.map((_, indx) => (
                        <li key={`bl-${indx}`} className={`bg-(--primary) size-1 md:size-2 ${indexActive === indx ? 'scale-120' : 'hover:scale-115 bg-white/40'} rounded-full cursor-pointer ${AnimationTime}`} onClick={() => {
                            setIndex(indx)
                        }}>
                        </li>
                    ))}
                </ul>
            }
        </>
    )

    return fullScreen ? (
        <div data-image-viewer="true" role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed top-0 left-0 w-screen h-screen overflow-hidden bg-black/90 z-100" onClick={() => { setFullScreen?.(false) }}>
            <button aria-label="Close image viewer" onClick={() => { setFullScreen?.(false) }} className="absolute right-5 top-5 z-30 rounded-xl border border-white/15 bg-black/70 p-3 transition-colors hover:bg-black/90 sm:right-10 sm:top-10">
                <img src={Icons.close} alt="" className="size-5" />
            </button>

            <div className="flex h-full w-8/10 mx-auto items-center justify-center" onClick={(e) => { e.stopPropagation(); }}>
                {content()}
            </div>
        </div>
    ) : content()
}

import { fadeInOut, modalFadeInOut, showScale } from "@/constants/animations"
import { Icons } from "@/constants/Icons"
import type { ImageModel } from "@/model/Image"
import { AnimatePresence, easeInOut, motion } from "framer-motion"
import { useEffect, type Dispatch, type SetStateAction } from "react"

export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "fit"

interface Prompts {
    children: React.ReactNode

    title: string
    icon: ImageModel

    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>

    size?: ModalSize

    onClose?: () => void
}

const modalSizeClasses: Record<ModalSize, string> = {
    xs: "w-5/6 max-w-sm h-fit max-h-9/10",
    sm: "w-5/6 max-w-lg h-fit max-h-9/10",
    md: "w-5/6 md:w-4/6 h-full md:h-9/10",
    lg: "w-5/6 max-w-5xl h-9/10",
    xl: "w-5/6 max-w-6xl h-9/10",
    "2xl": "w-5/6 max-w-7xl h-9/10",
    fit: "w-fit max-w-[calc(100vw-2rem)] h-fit max-h-9/10",
}

export default function Modal({ children, title, icon, isOpen, setIsOpen, onClose, size = "md" }: Prompts) {

    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflowY = 'hidden'
        } else {
            document.documentElement.style.overflowY = ''
        }

        return () => {
            document.documentElement.style.overflowY = ''
        }
    }, [isOpen])


    return (
        <AnimatePresence mode="wait">
            {isOpen && (
                <motion.div variants={modalFadeInOut} initial="initial" animate="animate" exit="exit" transition={{ duration: .3, ease: easeInOut }} className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen py-8 bg-black/70 overflow-y-auto z-100" onClick={() => { setIsOpen(false); onClose?.() }}>
                    <motion.div variants={showScale} initial="initial" animate="animate" exit="exit" transition={{ type: "spring", stiffness: 200, damping: 25, duration: .3, ease: easeInOut }} className={`flex flex-col gap-4 ${modalSizeClasses[size]} border border-white/10 bg-(--bg) rounded-2xl p-5 shadow-2xl shadow-black/40 z-101 sm:p-6`} onClick={(e) => { e.stopPropagation(); }}>
                        <header className="flex gap-4 items-center h-fit border-b border-white/10 pb-3">
                            {icon.src.trim() &&
                                <img src={icon.src} alt={icon.alt} className={`${icon.className} size-7 w-fit`} />
                            }
                            <h2 className="text-xl font-semibold sm:text-2xl">{title}</h2>

                            <img src={Icons.close} alt="Cerrar" className="ml-auto h-7 w-fit cursor-pointer opacity-60 transition-opacity hover:opacity-100" onClick={() => { setIsOpen(false); onClose?.() }} />
                        </header>

                        <main className={`flex flex-col ${size === "fit" ? "flex-none" : "flex-1"} overflow-y-auto overflow-x-hidden pt-1`}>
                            {children}
                        </main>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

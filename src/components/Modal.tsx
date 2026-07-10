import { fadeInOut, showScale } from "@/constants/animations"
import { Icons } from "@/constants/Icons"
import type { ImageModel } from "@/model/Image"
import { AnimatePresence, easeInOut, motion } from "framer-motion"
import { useEffect, type Dispatch, type SetStateAction } from "react"

interface Prompts {
    children: React.ReactNode

    title: string
    icon: ImageModel

    isOpen: boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>

    onClose?: () => void
}

export default function Modal({ children, title, icon, isOpen, setIsOpen, onClose }: Prompts) {

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
                <motion.div variants={fadeInOut} initial="initial" animate="animate" exit="exit" transition={{ duration: .3, ease: easeInOut }} className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen py-8 bg-black/80 overflow-y-auto z-100" onClick={() => { setIsOpen(false); onClose?.() }}>
                    <motion.div variants={showScale} initial="initial" animate="animate" exit="exit" transition={{ type: "spring", stiffness: 200, damping: 25, duration: .3, ease: easeInOut }} className="flex flex-col gap-4 w-4/6 h-9/10 bg-(--neutral) rounded-xl p-4 z-101" onClick={(e) => { e.stopPropagation(); }}>
                        <header className="flex gap-4 items-center h-fit">
                            <img src={icon.src} alt={icon.alt} className={`${icon.className} h-7 w-fit`} />
                            <h2 className="text-2xl font-medium">{title}</h2>

                            <img src={Icons.close} alt="Cerrar" className="h-8 w-fit ml-auto hover:scale-110 cursor-pointer" onClick={() => { setIsOpen(false); onClose?.() }} />
                        </header>

                        <main className="flex flex-col flex-1 overflow-y-auto">
                            {children}
                        </main>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

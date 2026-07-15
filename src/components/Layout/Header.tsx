import { AnimationTime, fadeInOut } from "@/constants/animations"
import { Icons } from "@/constants/Icons"
import type { Section } from "@/model/PageSection"
import { ScrollTo } from "@/scripts/scroll"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Prompts {
    activeSection: Section
    homeRef: any
    expRef: any
    projRef: any
    achivRef: any
    aboutRef: any
}

export default function Header({ activeSection, homeRef, expRef, projRef, achivRef, aboutRef }: Prompts) {
    const [viewMenu, showMenu] = useState(false);

    useEffect(() => {
        viewMenu ?
            document.body.style.overflowY = 'hidden' :
            document.body.style.overflowY = 'auto';

        return () => {
            document.body.style.overflowY = 'auto';
        }
    }, [viewMenu])

    const items = () => (
        <>
            <HeaderItem label="Inicio" onClick={() => {  ScrollTo(homeRef); showMenu(false) }} active={activeSection === 'home'} />
            <HeaderItem label="Proyectos" onClick={() => {  ScrollTo(projRef); showMenu(false) }} active={activeSection === 'proj'} />
            <HeaderItem label="Experiencia" onClick={() => { ScrollTo(expRef); showMenu(false) }} active={activeSection === 'exp'} />
            <HeaderItem label="Logros" onClick={() => { ScrollTo(achivRef); showMenu(false) }} active={activeSection === 'achiv'} />
            <HeaderItem label="Sobre Mi" onClick={() => { ScrollTo(aboutRef); showMenu(false) }} active={activeSection === 'about'} />
        </>
    )

    return (
        <header className='sticky top-0 left-0 flex w-full h-[8vh] md:justify-center items-center bg-(--bg) border-b border-b-(--neutral) px-4 z-100'>
            <div
                className={`${viewMenu ? 'fixed' : 'hidden'} top-0 left-0 w-screen h-screen bg-black/40 z-120 overflow-y-hidden`}
                onClick={() => showMenu(false)}
            />

            <div className="relative flex items-center z-150">
                <img src={Icons.menu} alt="menu" className="md:hidden" onClick={() => { showMenu(prev => !prev) }} />
                <AnimatePresence mode='wait'>
                    {viewMenu &&
                        <motion.div
                            variants={fadeInOut}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute top-1/2 right-0 translate-x-full flex flex-col gap-2 items-start bg-(--neutral) h-fit w-60 p-4 rounded-tr-xl rounded-b-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {items()}
                        </motion.div>
                    }
                </AnimatePresence>
            </div>

            <nav className="hidden md:flex w-fit gap-4">
                {items()}
            </nav>
        </header>
    )
}

interface HeaderItemPrompts {
    label: string
    onClick: (e: any) => void
    active?: boolean
}

function HeaderItem({ label, onClick, active }: HeaderItemPrompts) {
    return (
        <button onClick={onClick} className={`w-fit text-xl md:text-base ${active ? 'md:font-bold md:scale-110' : 'md:text-(--text-gray)'} md:font-medium cursor-pointer ${!active && 'md:hover:scale-105'} ${AnimationTime}`}>
            <span>{label}</span>
        </button>
    )
}
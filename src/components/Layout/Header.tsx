import { AnimationTime, fadeInOut } from "@/constants/animations"
import { Icons } from "@/constants/Icons"
import { useLanguage } from "@/hooks/useLanguage"
import type { Section } from "@/model/PageSection"
import { ScrollTo } from "@/scripts/scroll"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import Button from "../Button"

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
    const { language, setLanguage, t } = useLanguage()

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
            <HeaderItem label={t.header.home} onClick={() => {  ScrollTo(homeRef); showMenu(false) }} active={activeSection === 'home'} />
            <HeaderItem label={t.header.projects} onClick={() => {  ScrollTo(projRef); showMenu(false) }} active={activeSection === 'proj'} />
            <HeaderItem label={t.header.experience} onClick={() => { ScrollTo(expRef); showMenu(false) }} active={activeSection === 'exp'} />
            <HeaderItem label={t.header.achievements} onClick={() => { ScrollTo(achivRef); showMenu(false) }} active={activeSection === 'achiv'} />
            <HeaderItem label={t.header.about} onClick={() => { ScrollTo(aboutRef); showMenu(false) }} active={activeSection === 'about'} />
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
                            className="absolute top-1/2 right-0 translate-x-full flex flex-col gap-2 items-start bg-(--neutral) h-fit w-[80vw] p-4 rounded-tr-xl rounded-b-xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {items()}
                            
                        </motion.div>
                    }
                </AnimatePresence>
            </div>

            <nav className="hidden md:flex w-fit items-center gap-4">
                {items()}
            </nav>

            <Button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} label={language === 'es' ? 'EN' : 'ES'} btnClass="absolute right-4" btnStyle="outline-neutral"/>
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
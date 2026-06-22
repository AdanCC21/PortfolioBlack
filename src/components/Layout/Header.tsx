import { AnimationTime } from "@/constants/animations"
import type { Section } from "@/model/PageSection"
import { ScrollTo } from "@/scripts/scroll"

interface Prompts {
    activeSection: Section
    homeRef: any
    expRef: any
    projRef: any
    achivRef: any
    aboutRef: any
}

export default function Header({ activeSection, homeRef, expRef, projRef, achivRef, aboutRef }: Prompts) {
    return (
        <header className='sticky top-0 left-0 flex w-full h-[8vh] justify-center items-center bg-(--bg) border-b border-b-(--neutral) px-4 z-100'>
            {/* <span className={`text-sm hover:scale-110 ${AnimationTime} cursor-pointer`}>CV</span> */}
            <nav className="flex w-fit gap-4">
                <HeaderItem label="Inicio" onClick={() => ScrollTo(homeRef)} active={activeSection === 'home'} />
                <HeaderItem label="Proyectos" onClick={() => ScrollTo(projRef)} active={activeSection === 'proj'} />
                <HeaderItem label="Experiencia" onClick={() => ScrollTo(expRef)} active={activeSection === 'exp'} />
                <HeaderItem label="Logros" onClick={() => ScrollTo(achivRef)} active={activeSection === 'achiv'} />
                <HeaderItem label="Sobre Mi" onClick={() => ScrollTo(aboutRef)} active={activeSection === 'about'} />
            </nav>
        </header>
    )
}

interface HeaderItemPrompts {
    label: string
    onClick: () => void
    active?: boolean
}

function HeaderItem({ label, onClick, active }: HeaderItemPrompts) {
    return (
        <button onClick={onClick} className={`text-lg ${active ? 'font-bold scale-110' :'text-(--text-gray)' } font-medium cursor-pointer ${!active && 'hover:scale-105'} ${AnimationTime}`}>
            <span>{label}</span>
        </button>
    )
}
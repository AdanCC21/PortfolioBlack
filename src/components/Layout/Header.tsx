export default function Header() {
  return (
    <header className='relative flex w-screen h-[8vh] justify-center items-center border-b border-b-(--neutral)'>
        <span className="text-base">CV</span>
        <nav className="flex w-fit gap-4">
            <button>
                <span>Inicio</span>
            </button>
            <button>
                <span>Experiencia</span>
            </button>
            <button>
                <span>Proyectos</span>
            </button>
            <button>
                <span>Logros</span>
            </button>
            <button>
                <span>Sobre Mi</span>
            </button>
        </nav>
        <span className="text-base">D</span>
    </header>
  )
}

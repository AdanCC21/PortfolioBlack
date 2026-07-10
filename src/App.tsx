import { useRef, useState, useEffect } from 'react'
import Header from './components/Layout/Header'
import type { Section } from './model/PageSection'
import Home from './pages/Home'
import Proyects from './pages/Proyects'
import Achivements from './pages/Achivements'
import Experience from './pages/Experience'
import About from './pages/About'


export default function App() {
  const homeRef = useRef<HTMLDivElement>(null)
  const expRef = useRef<HTMLDivElement>(null)
  const projRef = useRef<HTMLDivElement>(null)
  const achivRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)

  const [activeSection, setActiveSection] = useState<Section>('home')

  useEffect(() => {
    const sections: { ref: React.RefObject<HTMLDivElement | null>, id: Section }[] = [
      { ref: homeRef, id: 'home' },
      { ref: expRef, id: 'exp' },
      { ref: projRef, id: 'proj' },
      { ref: achivRef, id: 'achiv' },
      { ref: aboutRef, id: 'about' },
    ]

    const observers = sections.map(({ ref, id }) => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.5 } // 50% de la sección visible para activarse
      )
      if (ref.current) observer.observe(ref.current)
      return observer
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      <Header
        activeSection={activeSection}
        homeRef={homeRef} expRef={expRef}
        projRef={projRef} achivRef={achivRef} aboutRef={aboutRef}
      />
      <Home homeRef={homeRef} projRef={projRef} />
      
      <Proyects projRef={projRef} />

      <Experience pageRef={expRef} />

      <Achivements pageRef={achivRef} />

      <About pageRef={aboutRef} />

      <footer className='h-[8vh]'>

      </footer>
    </>
  )
}
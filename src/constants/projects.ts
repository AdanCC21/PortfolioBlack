import type { ImageModel } from "@/model/Image"
import { Icons } from "./Icons"

export interface Project {
    title: string
    description: string
    whatIdo: string
    whatIs: string

    location: string
    rol: string
    date: string
    tecs: {
        label: string
        img: ImageModel
    }[]
    team?: string[]

    folder: string
}
export const Projects: Project[] = [
    {
        title: "Cibershield",
        description: "Plataforma web educativa enfocada en ciberseguridad que ofrece información sobre amenazas como phishing y malware",
        whatIdo: "Llevé a cabo el rediseño completo de esta página. La página ya existía; era un proyecto de mi compañero de equipo, un proyecto viejo con mucho potencial. Sin embargo, mi compañero y yo concluimos que era necesario un rediseño completo debido a las opiniones de algunos usuarios. Así que, mientras él se encargaba de la documentación, yo llevé a cabo todo el rediseño y el código para actualizar la página",
        whatIs: "CiberShield es una página web educativa enfocada en ciberseguridad. Ofrecemos información sobre amenazas como phishing y malware, y contamos con un simulador de correos falsos: una sección donde se presentan ejemplos de correos legítimos y casos de phishing, en la que el usuario debe leer cuidadosamente el contenido y deducir si el correo es legítimo o un caso de phishing",

        rol: "FullStack",
        location: "Ensenada, B.C. Mexico",
        date: "feb - 2026 / jun 2026",
        team: ["Antonio Ramos", "Adan Gonzalez Ceseña"],
        folder: "cibershield",
        tecs: [{ label: "React", img: { src: Icons.react, alt: "React" } }, { label: "NestJs", img: { src: Icons.nestJs, alt: "NestJs" } }]
    },
    {
        title: "WolfForest",
        description: "Es un sitio web donde puedes mejorar tus personajes ficticios para enfrentarlos en una batalla campal.",
        whatIdo: "Llevé a cabo todo el proceso de desarrollo de esta página: diseño, código, mecánicas, etc. Es un rediseño y refactorización de uno de los primeros proyectos que hice en mi carrera",
        whatIs: "Es un sitio web donde puedes mejorar tus personajes ficticios para enfrentarlos en una batalla campal. Conforme vas jugando, se producen eventos especiales como muertes, asesinatos, alianzas temporales y recolección de objetos, creando una narrativa dinámica y aleatoria.",
        rol: "FullStack",
        location: "Ensenada, B.C. Mexico",
        date: "apr 2025",
        folder: "wolfForest",
        tecs: [{ label: "React", img: { src: Icons.react, alt: "React" } }, { label: "TypeScript", img: { src: Icons.typescript, alt: "TypeScript" } }, { label: "TailwindCSS", img: { src: Icons.tailwindcss, alt: "TailwindCSS" } }]
    },
    {
        title: "Gestor de pruebas",
        description: "Este proyecto actualmente es clasificado, pero fue solicitado por el Departamento de Desarrollo de Software de la UABC.",
        whatIdo: "Llevé a cabo todo el desarrollo del proyecto: diseño, base de datos, código frontend/backend, y apoyé con el deploy. Sin embargo, no estuve solo todo el tiempo; al inicio éramos solo yo y el cliente, y después de 3 meses se integró mi compañero de equipo, quien nos apoyó en la documentación y, en los últimos meses, en el área de frontend",
        whatIs: "Este proyecto actualmente es clasificado, pero fue solicitado por el Departamento de Desarrollo de Software de la UABC. Si necesitas más información, escríbeme y con gusto lo platicamos",

        rol: "FullStack",
        location: "Ensenada, B.C. Mexico",
        date: "oct - 2025 / may 2026",
        team: ["Abraham Gonzalez Páez", "Adan Gonzalez"],
        folder: "tickets",
        tecs: [{ label: "React", img: { src: Icons.react, alt: "React" } }, { label: "NestJs", img: { src: Icons.nestJs, alt: "NestJs" } }, { label: "TypeScript", img: { src: Icons.typescript, alt: "TypeScript" } }, { label: "Prisma", img: { src: Icons.prisma, alt: "Prisma" } }]
    },
    {
        title: "ActOne",
        description: "Una red social diseñada para compartir historias, donde los usuarios pueden compartir sus anécdotas en un formato dividido por actos.",
        whatIdo: "Llevé a cabo todo lo que conlleva este proyecto. Fue un proyecto escolar, pero me gustó mucho el resultado final; de momento estoy en proceso de refactorizar el código y el diseño",
        whatIs: "Una red social diseñada para compartir historias, donde los usuarios pueden compartir sus anécdotas en un formato dividido por actos. La plataforma también incluye un modo de concentración para creadores de contenido, que permite leer las historias párrafo por párrafo, eliminando distracciones y ofreciendo una experiencia más inmersiva.",
        
        rol: "FullStack",
        location: "Ensenada, B.C. Mexico",
        date: "jun / 2025",
        folder: "actone",
        tecs: [{ label: "React", img: { src: Icons.react, alt: "React" } }, { label: "NestJs", img: { src: Icons.nestJs, alt: "NestJs" } }, { label: "TypeScript", img: { src: Icons.typescript, alt: "TypeScript" } }, { label: "Prisma", img: { src: Icons.prisma, alt: "Prisma" } }]
    },
]
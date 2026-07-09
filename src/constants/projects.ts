import type { ImageModel } from "@/model/Image"
import { Icons } from "./Icons"

export interface Project {
    title: string
    description: string
    whatIdo: string

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
        whatIdo: "",
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
        whatIdo: "",
        rol: "FullStack",
        location: "Ensenada, B.C. Mexico",
        date: "apr 2025",
        folder: "wolfForest",
        tecs: [{ label: "React", img: { src: Icons.react, alt: "React" } }, { label: "TypeScript", img: { src: Icons.typescript, alt: "TypeScript" } }, { label: "TailwindCSS", img: { src: Icons.tailwindcss, alt: "TailwindCSS" } }]
    },
    {
        title: "Gestor de pruebas",
        description: "Este proyecto actualmente es clasificado, pero fue solicitado por el Departamento de Desarrollo de Software de la UABC.",
        whatIdo: "",
        rol: "FullStack",
        location: "Ensenada, B.C. Mexico",
        date: "oct - 2025 / may 2026",
        team: ["Abraham Gonzalez Páez", "Adan Gonzalez"],
        folder: "tickets",
        tecs: [{ label: "React", img: { src: Icons.react, alt: "React" } }, { label: "NestJs", img: { src: Icons.nestJs, alt: "NestJs" } }, { label: "TypeScript", img: { src: Icons.typescript, alt: "TypeScript" } }, { label: "Prisma", img: { src: Icons.prisma, alt: "Prisma" } }]
    },
    {
        title: "ActOne",
        description: "Una red social diseñada para compartir historias y chismes, donde los usuarios pueden compartir sus anécdotas en un formato dividido por actos. La plataforma también incluye un modo de concentración para creadores de contenido, que permite leer las historias párrafo por párrafo, eliminando distracciones y ofreciendo una experiencia más inmersiva.",
        whatIdo: "",
        rol: "FullStack",
        location: "Ensenada, B.C. Mexico",
        date: "jun / 2025",
        folder: "tickets",
        tecs: [{ label: "React", img: { src: Icons.react, alt: "React" } }, { label: "NestJs", img: { src: Icons.nestJs, alt: "NestJs" } }, { label: "TypeScript", img: { src: Icons.typescript, alt: "TypeScript" } }, { label: "Prisma", img: { src: Icons.prisma, alt: "Prisma" } }]
    },
]
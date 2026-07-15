import type { Language } from "@/hooks/useLanguage"
import es from "@/locales/es.json"
import en from "@/locales/en.json"
import type { ImageModel } from "@/model/Image"
import { Icons } from "./Icons"

export interface Experience {
    title: string
    description: string
    place: string
    date: string
    tecs: {
        label: string
        img: ImageModel
    }[]
    folder: string
}

const experienceTranslations: Record<Language, Array<{
    title: string
    description: string
    place: string
    date: string
}>> = {
    es: es.experience.items as Array<{
        title: string
        description: string
        place: string
        date: string
    }>,
    en: en.experience.items as Array<{
        title: string
        description: string
        place: string
        date: string
    }>
}

export const Experiences: Experience[] = [
    {
        title: "Ing. Software y Tencologias Emergentes",
        description: "Formación en desarrollo de software full-stack y tecnologías emergentes, con experiencia práctica en proyectos web, hackathons y desarrollo profesional en UABC.",
        place: "U.A.B.C. Campus Ensenada",
        date: "Ago - 2022 / Jun - 2026",
        tecs: [{ label: "React", img: { src: Icons.react , alt: "React" } }, { label: "C++", img: { src: Icons.react , alt: "C++" } }, { label: "Java", img: { src: Icons.react , alt: "Java" } }, { label: "NestJs", img: { src: Icons.nestJs , alt: "NestJs" } },  ],
        folder: "degree"
    },
    {
        title: "Desarrollador Full Stack",
        description: "Participé junto a amigos de la universidad en el hackathon de TalentLand en la Expo Guadalajara, dentro del track de McDonald's. Propusimos una aplicación enfocada en accesibilidad que ayudara a los usuarios a navegar la app mediante un bot y opciones adaptadas a distintas discapacidades. Aunque no llegamos a la final, fuimos parte de los 500 participantes seleccionados entre 1500 solicitantes.",
        place: "Departamento de Desarrollo de Software (DDS) - UABC",
        date: "Ene - 2025 / Jun - 2026",
        tecs: [{ label: "React", img: { src: Icons.react , alt: "React" } }, { label: "NestJs", img: { src: Icons.nestJs , alt: "NestJs" } },  ],
        folder: "dds"
    },
    {
        title: "Desarrollador Frontend",
        description: "Participé en el desarrollo frontend de una plataforma web enfocada en apoyar el proceso de desarrollo de habilidades en infantes con transtornos del desarrollo. Traduje diseños de Figma a interfaces funcionales en React con NextJs, manteniendo comunicación constante con la encargada del proyecto y proponiendo mejoras de diseño que fueron mayormente adoptadas. Todo se manejó de manera remota.",
        place: "CAF",
        date: "Mar - 2025 / Jun - 2026",
        tecs: [{ label: "React", img: { src: Icons.react , alt: "React" } }, { label: "Typescript", img: { src: Icons.typescript , alt: "Typescript" } }, { label: "NextJs", img: { src: Icons.nextjs , alt: "NextJs" } }, ],
        folder: "caf"
    },
]

export function getExperiences(language: Language): Experience[] {
    const translations = experienceTranslations[language] ?? experienceTranslations.es

    return Experiences.map((experience, index) => {
        const translation = translations[index] ?? {}

        return {
            ...experience,
            title: translation.title ?? experience.title,
            description: translation.description ?? experience.description,
            place: translation.place ?? experience.place,
            date: translation.date ?? experience.date,
        }
    })
}
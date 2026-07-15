import type { Language } from "@/hooks/useLanguage"
import es from "@/locales/es.json"
import en from "@/locales/en.json"

export interface Achivement {
    title: string
    description: string
    date: string
    folder: string
}

const achievementTranslations: Record<Language, Array<{
    title: string
    description: string
    date: string
}>> = {
    es: es.achievements.items as Array<{
        title: string
        description: string
        date: string
    }>,
    en: en.achievements.items as Array<{
        title: string
        description: string
        date: string
    }>
}

export const AchivementsList: Achivement[] = [
    {
        title: "ICPC",
        description: "El ICPC (International Collegiate Programming Contest) es una competencia universitaria de programación en la que equipos de tres estudiantes resuelven problemas algorítmicos utilizando una sola computadora durante varias horas de competencia. Participé junto con dos compañeras de equipo y actualmente seguimos compitiendo en las distintas fechas del concurso.",
        date: "Ago 2026",
        folder: "icpc"
    },
    {
        title: "TalentLand",
        description: "En 2025 participé junto a amigos de la universidad en el hackathon de TalentLand en la Expo Guadalajara, dentro del track de McDonald's. Propusimos una aplicación enfocada en accesibilidad que ayudara a los usuarios a navegar la app mediante un bot y opciones adaptadas a distintas discapacidades. Aunque no llegamos a la final, fuimos parte de los 500 participantes seleccionados entre 1500 solicitantes.",
        date: "Abr 2025",
        folder: "talentland"
    },
    {
        title: "Nasa Space APP Challenge",
        description: "El 4 y 5 de octubre de 2025 participé en el NASA Space Apps Challenge junto a mi equipo. Desarrollamos una idea de aplicación del clima que ofrece recomendaciones basadas en los planes del usuario y las condiciones meteorológicas. Aunque no obtuvimos un lugar ganador, la experiencia fue muy enriquecedora.",
        date: "Oct 2025",
        folder: "nasa"
    },
]

export function getAchivements(language: Language): Achivement[] {
    const translations = achievementTranslations[language] ?? achievementTranslations.es

    return AchivementsList.map((achievement, index) => {
        const translation = translations[index] ?? {}

        return {
            ...achievement,
            title: translation.title ?? achievement.title,
            description: translation.description ?? achievement.description,
            date: translation.date ?? achievement.date,
        }
    })
}
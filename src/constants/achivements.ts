export interface Achivement {
    title: string
    description: string
    date: string
    folder: string
}

export const AchivementsList: Achivement[] = [
    {
        title: "ICPC",
        description: "AWdaw",
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
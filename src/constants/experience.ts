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

export const Experiences: Experience[] = [
    {
        title: "Ing. Software y Tencologias Emergentes",
        description: "En 2025 participé junto a amigos de la universidad en el hackathon de TalentLand en la Expo Guadalajara, dentro del track de McDonald's. Propusimos una aplicación enfocada en accesibilidad que ayudara a los usuarios a navegar la app mediante un bot y opciones adaptadas a distintas discapacidades. Aunque no llegamos a la final, fuimos parte de los 500 participantes seleccionados entre 1500 solicitantes.",
        place: "U.A.B.C. Campus Ensenada",
        date: "Ago - 2022 / Jun - 2026",
        tecs: [{ label: "React", img: { src: Icons.react , alt: "React" } }, { label: "C++", img: { src: Icons.react , alt: "C++" } }, { label: "Java", img: { src: Icons.react , alt: "Java" } }, { label: "NestJs", img: { src: Icons.nestJs , alt: "NestJs" } },  ],
        folder: "degree"
    },
    {
        title: "Desarrollador Full Stack",
        description: "En 2025 participé junto a amigos de la universidad en el hackathon de TalentLand en la Expo Guadalajara, dentro del track de McDonald's. Propusimos una aplicación enfocada en accesibilidad que ayudara a los usuarios a navegar la app mediante un bot y opciones adaptadas a distintas discapacidades. Aunque no llegamos a la final, fuimos parte de los 500 participantes seleccionados entre 1500 solicitantes.",
        place: "Departamento de Desarrollo de Software (DDS) - UABC",
        date: "Ene - 2025 / Jun - 2026",
        tecs: [{ label: "React", img: { src: Icons.react , alt: "React" } }, { label: "NestJs", img: { src: Icons.nestJs , alt: "NestJs" } },  ],
        folder: "dds"
    },
    {
        title: "Desarrollador Frontend",
        description: "CAF",
        place: "Departamento de Desarrollo de Software (DDS) - UABC",
        date: "Mar - 2025 / Jul - 2026",
        tecs: [{ label: "React", img: { src: Icons.react , alt: "React" } },  ],
        folder: "caf"
    },
]
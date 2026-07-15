import type TecModel from "@/model/Tec";
import { Icons } from "./Icons";

export const Tecnologies: TecModel[] = [{
        label: "NestJS",
        name: "NestJS",
        icon: {
            src: Icons.nestJs,
            alt: "NestJs"
        }
    },
    {
        label: "React",
        name: "React",
        icon: {
            src: Icons.react,
            alt: "React"
        }
    },
    {
        label: "Vue",
        name: "Vue",
        icon: {
            src: Icons.vue,
            alt: "Vue"
        }
    },
    {
        label: "Typescript",
        name: "Typescript",
        icon: {
            src: Icons.typescript,
            alt: "Typescript"
        }
    },
]
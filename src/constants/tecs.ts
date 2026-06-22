import type TecModel from "@/model/Tec";
import { Icons } from "./Icons";

export const Tecnologies: TecModel[] = [{
        name: "NestJS",
        icon: {
            src: Icons.nestJs,
            alt: "NestJs"
        }
    },
    {
        name: "React",
        icon: {
            src: Icons.react,
            alt: "React"
        }
    },
    {
        name: "Vue",
        icon: {
            src: Icons.vue,
            alt: "Vue"
        }
    },
    {
        name: "Typescript",
        icon: {
            src: Icons.typescript,
            alt: "Typescript"
        }
    },
]
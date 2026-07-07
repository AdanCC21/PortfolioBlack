import Button from "@/components/Button"
import { Icons } from "@/constants/Icons"

interface Prompts {
    pageRef: React.RefObject<any>
}

export default function Experience({ pageRef }: Prompts) {
    return (
        <div ref={pageRef} className="flex flex-col w-full gap-4 page-padding">
            <div className="flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">Experiencia</h2>
                <span className="text-4xl opacity-10 font-bold">{'< >'}</span>
            </div>

            <ul className="flex flex-col w-full gap-8">
                <li className="relative flex gap-8 justify-between w-full">
                    <div className="flex flex-col flex-1 max-w-1/2 h-fit gap-4 px-4 py-2 bg-(--neutral) rounded-xl">
                        <span className="text-sm text-(--gray)">UABC - Departamento De Desarrollo de Software</span>
                        <div className="flex w-full justify-between">
                            <h1 className="text-4xl font-bold">Titulo</h1>
                            <span className="text-lg">Ago 2022 - Jun 2026</span>
                        </div>
                        <p className="text-base">
                            Desarrollé y mantuve sistemas académicos utilizados dentro de la universidad.
                            Contribuí al desarrollo y mejora de aplicaciones internas universitarias.
                            Mantuve, optimicé y mejoré módulos backend para garantizar confiabilidad y rendimiento.
                            Colaboré con equipos multidisciplinarios, aplicando mejores prácticas de desarrollo de software.
                        </p>
                        <div className="flex gap-4">
                            <Button label="NestJs" icon={{ src: Icons.nestJs, alt: "NestJs" }} onClick={() => { }} />
                            <Button label="NestJs" icon={{ src: Icons.nestJs, alt: "NestJs" }} onClick={() => { }} />
                        </div>
                    </div>

                    <div className="bg-white flex-1 max-w-px"></div>
                    <div className="absolute top-0 right-1/2 -translate-x-1/2 bg-white size-1 rounded-full"></div>

                    <div className="h-fit max-w-1/2 gap-4 px-4 py-2 bg-(--neutral) grow-0 rounded-xl">
                        <img src="/achivements/icpc/0.webp" alt="Prueba" className="object-cover rounded-lg" />
                    </div>
                </li>
                
                <li className="relative flex flex-row-reverse gap-8 justify-between w-full ">
                    <div className="flex flex-col flex-1 max-w-1/2 gap-4 px-4 py-2 bg-(--neutral)  rounded-xl">
                        <span className="text-sm text-(--gray)">UABC - Departamento De Desarrollo de Software</span>
                        <div className="flex w-full justify-between">
                            <h1 className="text-4xl font-bold">Titulo</h1>
                            <span className="text-lg">Ago 2022 - Jun 2026</span>
                        </div>
                        <p className="text-base">
                            Desarrollé y mantuve sistemas académicos utilizados dentro de la universidad.
                            Contribuí al desarrollo y mejora de aplicaciones internas universitarias.
                            Mantuve, optimicé y mejoré módulos backend para garantizar confiabilidad y rendimiento.
                            Colaboré con equipos multidisciplinarios, aplicando mejores prácticas de desarrollo de software.
                        </p>
                        <div className="flex gap-4">
                            <Button label="NestJs" icon={{ src: Icons.nestJs, alt: "NestJs" }} onClick={() => { }} />
                            <Button label="NestJs" icon={{ src: Icons.nestJs, alt: "NestJs" }} onClick={() => { }} />
                        </div>
                    </div>

                    <div className="bg-white h-full w-1"></div>
                    <div className="absolute top-0 right-1/2 -translate-x-1/2 bg-white h-full w-1 rounded-full"></div>

                    <div className="flex flex-col flex-1 max-w-1/2 gap-4 px-4 py-2 bg-(--neutral) rounded-xl">
                        <img src="/achivements/icpc/0.webp" alt="Prueba" className="w-full h-full object-cover rounded-lg" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

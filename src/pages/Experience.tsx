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

            <ul className="flex flex-col w-full mb-8">
                <li className="relative flex gap-8 justify-between w-full h-fit">
                    <div className="flex flex-col flex-1 max-w-1/2 h-fit gap-4 px-4 py-2 bg-(--neutral) rounded-xl my-8">
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

                    <div className="absolute top-0 right-1/2 bg-white w-1 h-full -translate-x-1/3"></div>
                    <div className="absolute top-0 right-1/2  bg-white size-2 rounded-full"></div>

                    <div className="flex flex-1 max-w-1/2 min-h-full gap-4 px-4 py-2 bg-(--neutral) rounded-xl overflow-hidden my-8">
                        <div className="relative w-full max-h-full overflow-hidden bg-red-500 rounded-lg">
                            <img src="/achivements/icpc/0.webp" alt="Prueba" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                </li>
                
                <li className="relative flex flex-row-reverse gap-8 justify-between w-full h-fit">
                    <div className="flex flex-col flex-1 max-w-1/2 h-fit gap-4 px-4 py-2 bg-(--neutral) rounded-xl my-8">
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

                    <div className="absolute top-0 right-1/2 bg-white w-1 h-full -translate-x-1/3"></div>
                    <div className="absolute top-0 right-1/2  bg-white size-2 rounded-full"></div>

                    <div className="flex flex-1 max-w-1/2 min-h-full gap-4 px-4 py-2 bg-(--neutral) rounded-xl overflow-hidden my-8">
                        <div className="relative w-full max-h-full overflow-hidden bg-red-500 rounded-lg">
                            <img src="/achivements/icpc/0.webp" alt="Prueba" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                </li>

                <li className="relative flex gap-8 justify-between w-full h-fit">
                    <div className="flex flex-col flex-1 max-w-1/2 h-fit gap-4 px-4 py-2 bg-(--neutral) rounded-xl my-8">
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

                    <div className="absolute top-0 right-1/2 bg-white w-1 h-full -translate-x-1/3"></div>
                    <div className="absolute top-0 right-1/2  bg-white size-2 rounded-full"></div>

                    <div className="flex flex-1 max-w-1/2 min-h-full gap-4 px-4 py-2 bg-(--neutral) rounded-xl overflow-hidden my-8">
                        <div className="relative w-full max-h-full overflow-hidden bg-red-500 rounded-lg">
                            <img src="/achivements/icpc/0.webp" alt="Prueba" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                        </div>
                    </div>
                </li>
                
                
            </ul>
        </div>
    )
}

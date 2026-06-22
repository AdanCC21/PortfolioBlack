import ProjectCard from "@/components/Cards/ProjectCard"
import { Projects } from "@/constants/projects"
import { GetImages } from "@/scripts/images"

interface Prompts {
    projRef: React.RefObject<any>
}

export default function Proyects({ projRef }: Prompts) {
    return (
        <section ref={projRef} className="flex flex-col w-full page-padding">
            <div className="flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">Proyectos</h2>
                <span className="text-4xl opacity-10 font-bold">{'{ }'}</span>
            </div>

            <ul className="grid grid-cols-4 gap-16 py-4">
                {Projects.map((project) => (
                    <ProjectCard title={project.title} image={GetImages(project.imagesFolder)[0]} description={project.description} techs={project.techs} onDetails={()=>{}} />
                ))}
                
            </ul>
        </section>
    )
}

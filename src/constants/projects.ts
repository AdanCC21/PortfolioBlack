interface ProjectModel {
    title: string
    description: string
    imagesFolder: string
    techs: string[]
}
export const Projects:ProjectModel[] = [
    {
        title: "Cibershield",
        description: "Plataforma web educativa enfocada en ciberseguridad que ofrece información sobre amenazas como phishing y malware",
        imagesFolder: "cibershield",
        techs: ["react", "typescript", "tailwindcss"]
    },
    {
        title: "WolfForest",
        description: "Es un sitio web donde puedes mejorar tus personajes ficticios para enfrentarlos en una batalla campal.",
        imagesFolder: "wolfForest",
        techs: ["react", "typescript", "tailwindcss"]
    },
    {
        title: "Gestor de tickets",
        description: "Este proyecto actualmente es clasificado, pero fue solicitado por el Departamento de Desarrollo de Software de la UABC.",
        imagesFolder: "tickets",
        techs: ["react", 'nestjs', "typescript"]
    },
    {
        title: "ActOne",
        description: "Una red social diseñada para compartir historias y chismes, donde los usuarios pueden compartir sus anécdotas en un formato dividido por actos. La plataforma también incluye un modo de concentración para creadores de contenido, que permite leer las historias párrafo por párrafo, eliminando distracciones y ofreciendo una experiencia más inmersiva.",
        imagesFolder: "tickets",
        techs: ["react", 'nestjs', "typescript"]
    },
]
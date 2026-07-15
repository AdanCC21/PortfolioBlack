import Tag from "@/components/Tag"
import { AnimationTime } from "@/constants/animations"
import { Icons } from "@/constants/Icons"
import { useLanguage } from "@/hooks/useLanguage"

interface Prompts {
    pageRef: React.RefObject<any>
}

export default function About({ pageRef }: Prompts) {
    const { t } = useLanguage()

    const backgroundIcons = [
        { src: Icons.typescript, alt: "Typescript", className: "size-8 rotate-12 sm:size-10", position: "left-[6%] top-[12%]" },
        { src: Icons.cpp, alt: "c++", className: "size-10 rotate-[-10deg] sm:size-14", position: "right-[6%] bottom-[15%]" },
    ]

    return (
        <section ref={pageRef} className="relative flex flex-col min-h-screen xl:min-h-min w-screen gap-4 page-padding mb-12 overflow-hidden">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                {backgroundIcons.map((icon) => (
                    <div key={icon.alt} className={`absolute ${icon.position} opacity-10`}>
                        <img src={icon.src} alt={icon.alt} className={icon.className} />
                    </div>
                ))}
            </div>

            <div className="relative z-10 flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">{t.about.title}</h2>
                <span className="text-4xl opacity-10 font-bold">{'o.o'}</span>
            </div>

            <div className="relative z-10 flex flex-col gap-8 md:flex-row md:justify-between lg:h-[60vh]">
                <div className="flex items-center justify-center order-1 md:order-2 md:h-full md:overflow-hidden">
                    <img src="/informal.jpg" alt="Yo" className="w-full max-h-80 object-cover rounded-xl shadow-lg md:max-h-none md:h-full md:w-auto md:max-w-[320px] lg:max-w-[360px] md:object-contain md:scale-110" />
                </div>

                <section className="flex flex-col gap-4 size-full order-2 md:order-1 md:w-3/4">
                    <article className="flex flex-col mb-4 text-base md:text-lg">
                        <p>
                            {t.about.paragraphs[0]}
                        </p>
                        <br />
                        <p>
                            {t.about.paragraphs[1]}
                        </p>
                        <br />
                        <p>
                            {t.about.paragraphs[2]}
                        </p>
                        <br />
                        <div className="flex items-center gap-2">
                            <img src={Icons.gmail} alt="gmail" className="size-4" />
                            <a href="mailto:andan.devp@gmail.com" className={`text-base border-b border-b-white/0 hover:border-b-white/80 ${AnimationTime}`}>
                                andan.devp@gmail.com
                            </a>
                            <img src={Icons.gmail} alt="gmail" className="size-4" />
                        </div>
                    </article>

                    <div className="w-3/4 mx-auto h-px bg-white/40"></div>

                    <h3 className="text-lg font-medium">{t.about.subtitle}</h3>
                    <ul className="flex gap-2 flex-wrap">
                        <Tag labelSize="text-sm" label="React" icon={{ src: Icons.react, alt: 'NestJs', className: "size-3" }} />
                        <Tag labelSize="text-sm" label="React Native" icon={{ src: Icons.react, alt: 'NestJs', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="Tailwindcss" icon={{ src: Icons.tailwindcss, alt: 'Tailwindcss', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="Vue" icon={{ src: Icons.vue, alt: 'Vue', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="NestJs" icon={{ src: Icons.nestJs, alt: 'React', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="Express" icon={{ src: Icons.javascript, alt: 'express', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="Typescript" icon={{ src: Icons.typescript, alt: 'typecript', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="Javascript" icon={{ src: Icons.javascript, alt: 'javascript', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="NextJs" icon={{ src: Icons.nextjs, alt: 'Nextjs', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="Vite" icon={{ src: Icons.vite, alt: 'vite', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="Prisma" icon={{ src: Icons.prisma, alt: 'prisma', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="SQL" icon={{ src: Icons.sql, alt: 'SQL', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="Spring Boot" icon={{ src: Icons.spring, alt: 'Spring Boot', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="Java" icon={{ src: Icons.java, alt: 'Java', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="C++" icon={{ src: Icons.cpp, alt: 'C++', className: 'size-3' }} />
                        <Tag labelSize="text-sm" label="Python" icon={{ src: Icons.python, alt: 'Python', className: 'size-3' }} />
                    </ul>
                </section>
            </div>
        </section>
    )
}

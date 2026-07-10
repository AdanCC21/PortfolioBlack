import Tag from "@/components/Tag"
import { AnimationTime } from "@/constants/animations"
import { Experiences, type Experience } from "@/constants/experience"
import { Icons } from "@/constants/Icons"
import { GetImages } from "@/scripts/images"
import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { slideVariants } from "@/scripts/carrusel"
import Carrusel from "@/components/Carrusel"

interface Prompts {
    pageRef: React.RefObject<any>
}

export default function Experience({ pageRef }: Prompts) {
    return (
        <div ref={pageRef} className="flex flex-col w-full gap-4 page-padding my-[10vh]">
            <div className="flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">Experiencia</h2>
                <span className="text-4xl opacity-10 font-bold">{'< >'}</span>
            </div>

            <ul className="flex flex-col w-full mb-8">
                {Experiences.map((exp, index) => (
                    <ExperienceItem key={exp.title} item={exp} index={index} />
                ))}
            </ul>
        </div>
    )
}

interface ExpPrompts {
    item: Experience
    index: number
}

function ExperienceItem({ item, index }: ExpPrompts) {
    const images = GetImages(item.folder, 'experience');
    const [currentImage, setCurrentImage] = useState(0);
    // const [direction, setDirection] = useState(1);

    // const nextImage = useCallback(() => {
    //     setDirection(1);
    //     setCurrentImage((prev) => (prev + 1) % images.length);
    // }, [images.length]);

    // const prevImage = useCallback(() => {
    //     setDirection(-1);
    //     setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    // }, [images.length]);

    // useEffect(() => {
    //     if (images.length <= 1) return;

    //     const interval = setInterval(() => {
    //         nextImage();
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [nextImage, images.length, currentImage]);

    // const handleManualNext = () => {
    //     nextImage();
    // };

    // const handleManualPrev = () => {
    //     prevImage();
    // };

    return (
        <li className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8 justify-between w-full h-fit`}>
            <div className="flex flex-col flex-1 max-w-1/2 h-fit gap-4 px-4 py-2 bg-(--neutral) rounded-xl my-8">
                <span className="text-sm text-(--gray)">{item.place}</span>
                <div className="flex w-full justify-between">
                    <h1 className="text-4xl font-bold">{item.title}</h1>
                    <span className="text-lg">{item.date}</span>
                </div>
                <p className="text-base">
                    {item.description}
                </p>
                <div className="flex gap-4">
                    {item.tecs.map((tec) => (
                        <Tag label={tec.label} icon={tec.img} />
                    ))}
                </div>
            </div>

            <div className="absolute top-0 right-1/2 bg-white w-1 h-full -translate-x-full"></div>
            <div className="absolute top-0 right-1/2  bg-white size-3  rounded-full"></div>

            <div className="group flex flex-1 max-w-1/2 min-h-full gap-4 px-4 py-2 bg-(--neutral) rounded-xl overflow-hidden my-8">
                <Carrusel images={images} indexActive={currentImage} setIndex={setCurrentImage} showIndex={false}/>
            </div>
        </li>
    )
}

{/* <div className="group flex flex-1 max-w-1/2 min-h-full gap-4 px-4 py-2 bg-(--neutral) rounded-xl overflow-hidden my-8">
                <div className="relative w-full max-h-full overflow-hidden rounded-lg">
                    <button onClick={handleManualPrev}
                        className={`absolute p-2 left-0 bottom-1/2 translate-y-1/2 z-20 group-hover:bg-black/80 rounded-xl ${AnimationTime} cursor-pointer`}>
                        <img src={Icons.arrowDown} alt="arrow" className="invert h-4 rotate-180" />
                    </button>

                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.img
                            key={currentImage}
                            src={images[currentImage]}
                            alt={item.title}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            className="absolute top-0 left-0 w-full h-full object-cover rounded-lg z-10"
                        />
                    </AnimatePresence>

                    <button
                        onClick={handleManualNext}
                        className={`absolute p-2 right-0 bottom-1/2 translate-y-1/2 z-20 group-hover:bg-black/80 rounded-xl ${AnimationTime} cursor-pointer`}
                    >
                        <img src={Icons.arrowDown} alt="arrow" className="invert h-4" />
                    </button>
                </div>
            </div> */}
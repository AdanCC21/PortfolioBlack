import AchivementCard from "@/components/Cards/AchivementCard";
import { getAchivements } from "@/constants/achivements";
import { AnimationTime } from "@/constants/animations";
import { Icons } from "@/constants/Icons";
import { useLanguage } from "@/hooks/useLanguage";
import { getCircularDiff, handleCarrusel } from "@/scripts/carrusel";
import { useState } from "react";
import { pageEntry } from "@/constants/animations";
import { motion } from "framer-motion";
import { sectionIconEntry, subtleFloat } from "@/constants/animations";

interface Prompts {
    pageRef: React.RefObject<any>
}

export default function Achivements({ pageRef }: Prompts) {
    const [currentIndex, setCurrentIndex] = useState(1);
    const { language, t } = useLanguage()
    const achievements = getAchivements(language)
    

    return (
        <motion.div ref={pageRef} variants={pageEntry} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="relative flex flex-col w-full gap-4 page-padding overflow-hidden">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div style={{ rotate: "-12deg" }} className="absolute left-[7%] top-[18%] opacity-[0.08]">
                    <motion.img variants={sectionIconEntry} initial="hidden" whileInView="visible" viewport={{ once: true }} src={Icons.openCode} alt="OpenCode" className="size-10 sm:size-14" />
                </div>
                <div style={{ rotate: "15deg" }} className="absolute bottom-[14%] right-[8%] opacity-[0.08]">
                    <motion.div animate={subtleFloat}>
                        <motion.img variants={sectionIconEntry} initial="hidden" whileInView="visible" viewport={{ once: true }} src={Icons.vite} alt="Vite" className="size-9 sm:size-12" />
                    </motion.div>
                </div>
                <div style={{ rotate: "-7deg" }} className="absolute right-[24%] top-[14%] opacity-[0.08]">
                    <motion.img variants={sectionIconEntry} initial="hidden" whileInView="visible" viewport={{ once: true }} src={Icons.java} alt="Java" className="size-9 sm:size-11" />
                </div>
            </div>
            

            <div className="relative z-10 flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">{t.achievements.title}</h2>
                <span className="text-4xl opacity-10 font-bold">{'< >'}</span>
            </div>

            <div className="relative z-10 flex flex-col w-full gap-4 md:gap-0 h-[85vh] md:h-[70vh] items-center">
                <ul className="relative group flex w-full h-9/10 overflow-hidden">
                    <button onClick={() => { handleCarrusel(setCurrentIndex, achievements.length, false) }}
                        className={`absolute p-2 left-0 bottom-1/2 translate-y-1/2 z-20 group-hover:bg-black/80 rounded-xl ${AnimationTime} cursor-pointer ml-2`}>
                        <img src={Icons.arrowDown} alt="arrow" className="invert h-4 rotate-180" />
                    </button>

                    {achievements.map((item, index) => (
                        <AchivementCard
                            key={`ach-${item.title}`}
                            diff={getCircularDiff(index, currentIndex, achievements.length)}
                            currentItem={item}
                            active={currentIndex === index}
                        />
                    ))}

                    <button onClick={() => { handleCarrusel(setCurrentIndex, achievements.length, true) }}
                        className={`absolute p-2 right-0 bottom-1/2 translate-y-1/2 z-20 group-hover:bg-black/80 rounded-xl ${AnimationTime} cursor-pointer mr-2`}>
                        <img src={Icons.arrowDown} alt="arrow" className="invert h-4" />
                    </button>
                </ul>

                <ul className="flex gap-4">
                    {achievements.map((item, indx) => (
                        <li key={`index-${item.title}`} className={`bg-(--primary) size-2 ${currentIndex === indx ? 'scale-120' : 'hover:scale-115 bg-white/40'} rounded-full cursor-pointer ${AnimationTime}`} onClick={() => {
                            setCurrentIndex(indx)
                        }}>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}

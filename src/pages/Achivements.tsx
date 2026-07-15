import AchivementCard from "@/components/Cards/AchivementCard";
import { AchivementsList } from "@/constants/achivements";
import { AnimationTime } from "@/constants/animations";
import { Icons } from "@/constants/Icons";
import { getCircularDiff, handleCarrusel } from "@/scripts/carrusel";
import { useState } from "react";

interface Prompts {
    pageRef: React.RefObject<any>
}

export default function Achivements({ pageRef }: Prompts) {
    const [currentIndex, setCurrentIndex] = useState(1);
    

    return (
        <div ref={pageRef} className="relative flex flex-col w-full gap-4 page-padding overflow-hidden">
            

            <div className="relative z-10 flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">Logros</h2>
                <span className="text-4xl opacity-10 font-bold">{'< >'}</span>
            </div>

            <div className="relative z-10 flex flex-col w-full gap-4 md:gap-0 h-[85vh] md:h-[70vh] items-center">
                <ul className="relative group flex w-full h-9/10 overflow-hidden">
                    <button onClick={() => { handleCarrusel(setCurrentIndex, AchivementsList.length, false) }}
                        className={`absolute p-2 left-0 bottom-1/2 translate-y-1/2 z-20 group-hover:bg-black/80 rounded-xl ${AnimationTime} cursor-pointer ml-2`}>
                        <img src={Icons.arrowDown} alt="arrow" className="invert h-4 rotate-180" />
                    </button>

                    {AchivementsList.map((item, index) => (
                        <AchivementCard
                            key={`ach-${item.title}`}
                            diff={getCircularDiff(index, currentIndex, AchivementsList.length)}
                            currentItem={item}
                            active={currentIndex === index}
                        />
                    ))}

                    <button onClick={() => { handleCarrusel(setCurrentIndex, AchivementsList.length, true) }}
                        className={`absolute p-2 right-0 bottom-1/2 translate-y-1/2 z-20 group-hover:bg-black/80 rounded-xl ${AnimationTime} cursor-pointer mr-2`}>
                        <img src={Icons.arrowDown} alt="arrow" className="invert h-4" />
                    </button>
                </ul>

                <ul className="flex gap-4">
                    {AchivementsList.map((item, indx) => (
                        <li key={`index-${item.title}`} className={`bg-(--primary) size-2 ${currentIndex === indx ? 'scale-120' : 'hover:scale-115 bg-white/40'} rounded-full cursor-pointer ${AnimationTime}`} onClick={() => {
                            setCurrentIndex(indx)
                        }}>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
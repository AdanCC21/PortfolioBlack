import AchivementCard from "@/components/Cards/AchivementCard";
import { AchivementsList } from "@/constants/achivements";
import { AnimationTime } from "@/constants/animations";
import { Icons } from "@/constants/Icons";
import { useState } from "react";

interface Prompts {
    pageRef: React.RefObject<any>
}

export default function Achivements({ pageRef }: Prompts) {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleCarrusel = (right: boolean) => {
        console.log(AchivementsList)
        setCurrentIndex(prev => {
            if (right) {
                return prev === AchivementsList.length - 1 ? 0 : prev + 1;
            } else {
                return prev === 0 ? AchivementsList.length - 1 : prev - 1;
            }
        })
    }

    return (
        <div ref={pageRef} className="flex flex-col w-full gap-4 page-padding">
            <div className="flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">Logros</h2>
                <span className="text-4xl opacity-10 font-bold">{'< >'}</span>
            </div>

            <div className="flex flex-col w-full h-[70vh] items-center">
                <ul className="relative group flex w-full h-9/10 overflow-hidden">
                    <button onClick={() => { handleCarrusel(false) }}
                        className={`absolute p-2 left-0 bottom-1/2 translate-y-1/2 z-11 group-hover:bg-black/80 rounded-xl ${AnimationTime} cursor-pointer ml-2`}>
                        <img src={Icons.arrowDown} alt="arrow" className="invert h-4 rotate-180" />
                    </button>

                    <AchivementCard position={'right'} currentItem={AchivementsList[currentIndex === 0 ? AchivementsList.length - 1 : currentIndex - 1]} />

                    <AchivementCard position={'center'} currentItem={AchivementsList[currentIndex]} />

                    <AchivementCard position={'left'} currentItem={AchivementsList[currentIndex === AchivementsList.length - 1 ? 0 : currentIndex + 1]} />

                    <button onClick={() => { handleCarrusel(true) }}
                        className={`absolute p-2 right-0 bottom-1/2 translate-y-1/2 z-11 group-hover:bg-black/80 rounded-xl ${AnimationTime} cursor-pointer mr-2`}>
                        <img src={Icons.arrowDown} alt="arrow" className="invert h-4" />
                    </button>
                </ul>

                <ul className="flex gap-4">
                    {AchivementsList.map((item) => (
                        <li key={`index-${item.title}`} className="bg-(--primary) size-1 rounded-full cursor-pointer">
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


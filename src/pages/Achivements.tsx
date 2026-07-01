import AchivementCard from "@/components/Cards/AchivementCard";
import { useState } from "react";

interface Prompts {
    pageRef: React.RefObject<any>
}

export default function Achivements({ pageRef }: Prompts) {
    const [achiv, setList] = useState<any[]>([
        {
            title: 'TalentLand',
            description: 'Participación en el evento de tecnología más grande de Latinoamérica, TalentLand, donde se presentaron las últimas tendencias y avances en el mundo digital.',
            date: '2023-04-15',
            folder: 'talentland',
        },
        {
            title: 'ICPC',
            description: 'Participación en el evento de tecnología más grande de Latinoamérica, ICPC, donde se presentaron las últimas tendencias y avances en el mundo digital.',
            date: '2023-04-15',
            folder: 'icpc',
        },
        {
            title: 'ICPC',
            description: 'Participación en el evento de tecnología más grande de Latinoamérica, ICPC, donde se presentaron las últimas tendencias y avances en el mundo digital.',
            date: '2023-04-15',
            folder: 'icpc',
        },
        {
            title: 'ICPC',
            description: 'Participación en el evento de tecnología más grande de Latinoamérica, ICPC, donde se presentaron las últimas tendencias y avances en el mundo digital.',
            date: '2023-04-15',
            folder: 'icpc',
        },
    ]);

    const [currentIndex, setCurrentIndex] = useState(1);


    return (
        <div ref={pageRef} className="flex flex-col w-full gap-4 page-padding">
            <div className="flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">Logros</h2>
                <span className="text-4xl opacity-10 font-bold">{'< >'}</span>
            </div>

            <div className="flex flex-col w-full h-[80vh] items-center">
                <ul className="relative flex w-full h-full overflow-hidden">
                    <AchivementCard position={'left'} currentItem={achiv[currentIndex === 0 ? achiv.length - 1 : currentIndex - 1]} />
                    <AchivementCard position={'center'} currentItem={achiv[currentIndex]} />
                    <AchivementCard position={'right'} currentItem={achiv[currentIndex === achiv.length - 1 ? 0 : currentIndex + 1]} />
                </ul>

                <ul className="flex gap-4">
                    {achiv.map((item) => (
                        <li key={`index-${item.title}`} className="bg-(--primary) size-1 rounded-full cursor-pointer">
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


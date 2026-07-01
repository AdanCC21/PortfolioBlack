interface Promtps {
    position: 'left' | 'center' | 'right'
    currentItem: any
}

export default function AchivementCard({ position, currentItem }: Promtps) {
    return (
        <li key={currentItem.title} className={`${position != 'center' && 'absolute'} flex flex-col gap-2 w-3/4 h-full ${position === 'left' ? 'left-9/10' : position === 'right' ? 'right-9/10' : 'mx-auto'}`}>
            <div className="w-full h-7/10 overflow-hidden rounded-xl">
                <img src="/achivements/icpc/0.webp" alt="smm" className="size-full object-cover" />
            </div>
            <div className="flex justify-between w-full">
                <h3 className="text-lg font-semibold">{currentItem.title}</h3>
                <span className="text-sm opacity-75">{currentItem.date}</span>
            </div>
            <p className="text-base">{currentItem.description}</p>
        </li>
    )
}

interface Prompts {
    pageRef: React.RefObject<any>
}

export default function About({ pageRef }: Prompts) {
    return (
        <div ref={pageRef} className="flex flex-col w-screen h-[70vh] gap-4 page-padding">
            <div className="flex w-full justify-between pb-4 border-b">
                <h2 className="text-4xl font-bold">Sobre Mi</h2>
                <span className="text-4xl opacity-10 font-bold">{'o.o'}</span>
            </div>
        </div>
    )
}

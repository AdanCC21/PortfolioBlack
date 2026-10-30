import Button from "@/components/Button"
import Modal from "@/components/Modal"
import { Icons } from "@/constants/Icons"
import { useLanguage } from "@/hooks/useLanguage"
import type { ImageModel } from "@/model/Image"
import { useState } from "react"

interface DownloadCvProps {
    label: string
    btnClass?: string
    btnStyle?: "outline-neutral" | "outline-secondary"
    icon?: ImageModel
}

export default function DownloadCv({ label, btnClass, btnStyle = "outline-secondary", icon }: DownloadCvProps) {
    const [isOpen, setIsOpen] = useState(false)
    const { t } = useLanguage()

    return (
        <>
            <Button onClick={() => setIsOpen(true)} label={label} icon={icon} btnClass={btnClass} btnStyle={btnStyle} />
            <Modal title={t.header.cvModalTitle} icon={{ src: "", alt: "" }} size="sm" isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="flex gap-3 py-2">
                    <a href="/CV_Adan_Gonzalez_ES.pdf" aria-label={t.header.cvSpanish} download="CV_Adan_Gonzalez.pdf" className="flex-1 flex flex-col items-center justify-between gap-4 rounded-lg border border-(--secondary) p-4 hover:bg-black/10">
                        <img src={Icons.download} alt="" className="size-12" />
                        <span className="text-lg">{t.header.cvSpanish}</span>
                    </a>
                    <a href="/CV_Adan_Gonzalez_EN.pdf" aria-label={t.header.cvEnglish} download="CV_Adan_Gonzalez_EN.pdf" className="flex-1 flex flex-col items-center justify-between gap-4 rounded-lg border border-(--secondary) p-4 hover:bg-black/10">
                        <img src={Icons.download} alt="" className="size-12" />
                        <span className="text-lg">{t.header.cvEnglish}</span>
                    </a>
                </div>
            </Modal>
        </>
    )
}

import type { Dispatch, SetStateAction } from "react"

// Variants: dir = 1 -> va hacia adelante (entra desde la derecha, sale por la izquierda)
// dir = -1 -> va hacia atrás (entra desde la izquierda, sale por la derecha)
export const slideVariants = {
    enter: (dir: number) => ({
        x: dir > 0 ? '100%' : '-100%',
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (dir: number) => ({
        x: dir > 0 ? '-100%' : '100%',
        opacity: 0,
    }),
}

export const getCircularDiff = (index: number, currentIndex: number, total: number) => {
    let diff = index - currentIndex
    if (diff > total / 2) diff -= total
    if (diff < -total / 2) diff += total
    return diff
}

export function handleCarrusel(setIndex: Dispatch<SetStateAction<number>>, listLight: number, right: boolean) {
    setIndex(prev => {
        if (right) {
            return prev === listLight - 1 ? 0 : prev + 1;
        } else {
            return prev === 0 ? listLight - 1 : prev - 1;
        }
    })
}
import type { Variants } from "framer-motion";

export const AnimationTime = "transition-all ease-in-out duration-125";

export const pageEntryTransition = {
    duration: 0.7,
    ease: "easeOut",
} as const;

export const pageEntry: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: pageEntryTransition,
    },
};

export const fadeInOut: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

export const showScale: Variants = {
    initial: {
        opacity: 0,
        scale: 0.9,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
    exit: {
        opacity: 0,
        scale: 0.9,
    },
};

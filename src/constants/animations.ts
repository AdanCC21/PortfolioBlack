import type { Variants } from "framer-motion";

export const AnimationTime = "transition-all ease-in-out duration-125";

export const pageEntryTransition = {
    duration: 0.7,
    ease: "easeOut",
} as const;

export const pageEntryViewport = {
    once: true,
    amount: 0.3,
} as const;

export const experienceItemViewport = {
    once: true,
    amount: 0,
    margin: "0px 0px -30% 0px",
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

export const homeItemEntry = (delay = 0): Variants => ({
    hidden: {
        opacity: 0,
        x: -18,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
            delay,
        },
    },
});

export const homeImageEntry: Variants = {
    hidden: {
        opacity: 0,
        y: 18,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: 0.25,
        },
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

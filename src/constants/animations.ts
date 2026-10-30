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

export const listItemsContainer: Variants = {
    hidden: {
        opacity: 1,
    },
    show: {
        transition: {
            delayChildren: 0.12,
            staggerChildren: 0.14,
        }
    }
}

export const homeItemEntry: Variants = {
    hidden: {
        opacity: 0,
        x: -18,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

export const headerItemsContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

export const headerItemEntry: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,

        transition: { duration: 0.32, ease: "easeInOut" },
    },
};

export const footerEntry: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 110, damping: 16, bounce: 0.2 },
    },
};

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

export const homeBackgroundEntry: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.9, ease: "easeOut" },
    },
};

export const subtleIconDrift = {
    rotate: [0, 3, -2, 0],
    transition: {
        duration: 24,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatDelay: 0,
    },
};

export const subtleFloat = {
    y: [0, -5, 0],
    transition: {
        duration: 8,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatDelay: 0,
    },
};

export const homeReactEntry: Variants = {
    hidden: { opacity: 0, rotate: -28 },
    visible: {
        opacity: 1,
        rotate: -15,
        transition: { duration: 1, ease: "easeOut", delay: 0.15 },
    },
};

export const homeVueEntry: Variants = {
    hidden: { opacity: 0, rotate: 38 },
    visible: {
        opacity: 1,
        rotate: 15,
        transition: { type: "spring", stiffness: 120, damping: 8, delay: 0.25 },
    },
};

export const homeNestEntry: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.85, ease: "easeOut", delay: 0.35 },
    },
};

export const sectionIconEntry: Variants = {
    hidden: { opacity: 0, y: 8, rotate: -10 },
    visible: {
        opacity: 1,
        y: 0,
        rotate: 0,
        transition: { duration: 0.9, ease: "easeOut" },
    },
};

export const modalFadeInOut: Variants = {
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
export const fadeInOut: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1.28,
            ease: "easeInOut"
        }
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

export const shopUpFadeIn: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5,
            ease:"easeInOut"
        }
    }
}

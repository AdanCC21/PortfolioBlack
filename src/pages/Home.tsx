import Button from "@/components/Button"
import DownloadCv from "@/components/DownloadCv"
import { AnimationTime, listItemsContainer, shopUpFadeIn, subtleFloat, subtleIconDrift } from "@/constants/animations"
import { Icons } from "@/constants/Icons"
import { useLanguage } from "@/hooks/useLanguage"
import { homeBackgroundEntry, homeImageEntry, homeItemEntry, homeNestEntry, homeReactEntry, homeVueEntry, pageEntryViewport } from "@/constants/animations"
import { motion } from "framer-motion"
import { type RefObject } from "react"

interface HomeProps {
  homeRef: RefObject<any>
  expRef: RefObject<any>
}

export default function Home({ homeRef, expRef }: HomeProps) {
  const { t } = useLanguage()

  return (
    <section ref={homeRef}
      className="relative flex min-h-(--homeHeight) w-full items-center overflow-hidden page-padding py-12 no-top sm:py-16 lg:py-0"
    >
      <motion.div variants={homeBackgroundEntry} initial="hidden" whileInView="visible" viewport={pageEntryViewport} className="absolute top-8 left-8 ">
        <motion.div animate={subtleIconDrift} className="opacity-20">
          <motion.img variants={homeReactEntry} src={Icons.react_or} alt="react logo" className="size-14 sm:size-20" />
        </motion.div>
      </motion.div>

      <motion.div variants={homeBackgroundEntry} initial="hidden" whileInView="visible" viewport={pageEntryViewport} className="absolute top-8 right-16 ">
        <motion.div animate={subtleFloat} className="opacity-20">
          <motion.img variants={homeVueEntry} src={Icons.vue_or} alt="Vue logo" className="size-14 sm:size-20" />
        </motion.div>
      </motion.div>

      <div className="relative flex w-full flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <motion.img
          variants={homeImageEntry}
          initial="hidden"
          animate="visible"
          viewport={pageEntryViewport}
          src="/yo3.jpg"
          alt="Adan Gonzalez Ceseña"
          className="order-1 rounded-full lg:max-w-[30vw] object-cover aspect-square size-52 lg:order-2 md:size-72 lg:size-110"
        />

        <motion.div variants={listItemsContainer} initial="hidden" whileInView="show" viewport={pageEntryViewport} className="order-2 z-10 flex max-w-2xl w-full flex-col items-center text-center lg:order-1 lg:items-start lg:text-left">
          <motion.span variants={homeItemEntry} className="text-sm uppercase tracking-widest text-(--text-gray)">
            {t.home.role}
          </motion.span>

          <motion.h1 variants={homeItemEntry} className="text-4xl font-bold sm:text-5xl lg:text-6xl 2xl:leading-tight">
            {t.home.name}
          </motion.h1>

          <motion.p variants={homeItemEntry} className="text-lg font-light tracking-wide text-(--text-gray) sm:text-xl">
            {t.home.title}
          </motion.p>

          <motion.blockquote variants={homeItemEntry} className="hidden md:block border-l-2 border-(--secondary) pl-4 text-sm leading-relaxed my-4">
            {t.home.description}
          </motion.blockquote>

          <motion.div variants={homeItemEntry} className="md:hidden mt-4 w-full max-w-xl">
            <span className="flex w-full border-l-2 border-(--secondary) pl-4 text-left text-sm leading-relaxed text-(--text-gray) ">
              {t.home.description}
            </span>
          </motion.div>

          <motion.div variants={homeItemEntry} className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <DownloadCv label={t.home.cv} icon={{ src: Icons.document, alt: "cv", iconRight: true }} btnStyle="outline-secondary" />

            <Button label={t.home.linkedin} icon={{ src: Icons.linkedin, alt: "Linkedin", iconRight: true }} onClick={() => { window.open("https://www.linkedin.com/in/adan-gonzalez-ceseña-584411338", "_blank") }} btnStyle="outline-secondary" />

            <Button label={t.home.github} icon={{ src: Icons.github, alt: "Github", iconRight: true }} onClick={() => { window.open("https://github.com/AdanCC21", "_blank") }} btnStyle="outline-secondary" />
          </motion.div>
        </motion.div>

      </div>

      <motion.button
        variants={shopUpFadeIn}
        initial="hidden"
        animate="show"
        className={`group flex absolute bottom-10 right-1/2 translate-x-1/2 w-fit items-center gap-2 cursor-pointer hover:scale-105 ${AnimationTime}`}
        onClick={() => expRef.current?.scrollIntoView({ behavior: "smooth" })}
      >
        <img src={Icons.arrowDown} alt="go down" className="opacity-40 group-hover:opacity-100 size-3 rotate-90 invert " />
        <span className="text-sm opacity-40 group-hover:opacity-100">{t.home.exploreExperience}</span>
        <img src={Icons.arrowDown} alt="go down" className="opacity-40 group-hover:opacity-100 size-3 rotate-90 invert " />
      </motion.button>

      <motion.div variants={homeBackgroundEntry} initial="hidden" whileInView="visible" viewport={pageEntryViewport} className="absolute bottom-15 right-15">
        <motion.div animate={subtleIconDrift} className="opacity-20">
          <motion.img variants={homeNestEntry} src={Icons.nestJs_or} alt="nestjs logo" className="size-14 sm:size-20" />
        </motion.div>
      </motion.div>
    </section>
  )
} 

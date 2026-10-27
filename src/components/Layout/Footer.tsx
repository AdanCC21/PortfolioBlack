import { footerEntry } from "@/constants/animations"
import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer variants={footerEntry} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} className="flex h-(--headerHeight) items-center justify-center gap-4 page-padding no-top border-t border-(--neutral)">
        <span className="text-sm">© Adan Gonzalez 2026</span>
    </motion.footer>
  )
}

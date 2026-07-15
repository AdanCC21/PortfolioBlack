import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import es from "@/locales/es.json"
import en from "@/locales/en.json"

export type Language = "es" | "en"
export type TranslationContent = typeof es

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: TranslationContent
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === "undefined") return "es"

    const stored = window.localStorage.getItem("language") as Language | null
    return stored === "en" ? "en" : "es"
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("language", language)
    }
  }, [language])

  const t = useMemo(() => (language === "en" ? en : es), [language])

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, t]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  return context
}

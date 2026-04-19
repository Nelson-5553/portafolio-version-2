"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi"
import { useLang } from "@/lib/lang-context"

export function Sidebar() {
  const { lang, t, toggle } = useLang()
  const [activeSection, setActiveSection] = useState("sobre-mi")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: t.nav.about, href: "#sobre-mi" },
    { label: t.nav.experience, href: "#experiencia" },
    { label: t.nav.projects, href: "#proyectos" },
    { label: t.nav.skills, href: "#habilidades" },
    { label: t.nav.education, href: "#educacion" },
    { label: t.nav.contact, href: "#contacto" },
  ]

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""))
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: "-40% 0px -55% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [lang])

  const handleNav = (href: string) => {
    setMobileMenuOpen(false)
    const el = document.getElementById(href.replace("#", ""))
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background border-b border-border flex items-center justify-between px-6 py-4">
        <div>
          <span className="font-bold text-foreground text-base">Nelson Jiménez</span>
        </div>
        <div className="flex items-center gap-3">
          {/* Language switch — mobile */}
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="text-foreground p-1"
          >
            <span className="block w-5 h-0.5 bg-foreground mb-1" />
            <span className="block w-5 h-0.5 bg-foreground mb-1" />
            <span className="block w-5 h-0.5 bg-foreground" />
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background pt-16 px-6">
          <nav className="flex flex-col gap-6 mt-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col justify-between sticky top-0 h-screen w-64 shrink-0 py-16 pr-8">
        <div className="flex flex-col gap-10">
          {/* Identity */}
          <div className="flex flex-col items-start gap-4">
            {/* Profile photo */}
            <div className="relative w-52 h-60 rounded-2xl overflow-hidden shrink-0">
              <Image
                src="/person.png"
                alt="Nelson Jiménez"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-foreground leading-tight text-balance">
                Nelson Jiménez
              </h1>
              <p className="text-primary font-semibold text-sm mt-1">
                {t.sidebar.title}
              </p>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                {t.sidebar.bio}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "")
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className={`group flex items-center gap-3 py-1.5 text-sm font-medium transition-colors w-full text-left ${
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span
                        className={`block h-px transition-all duration-200 ${
                          isActive
                            ? "w-8 bg-primary"
                            : "w-4 bg-border group-hover:w-6 group-hover:bg-muted-foreground"
                        }`}
                      />
                      {link.label}
                    </button>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>

        {/* Bottom row: social links + language toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Nelson-5553"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/nelson-jimenez-10429a337"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:andresnelson2004@hotmail.com"
              aria-label="Email"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiMail size={20} />
            </a>
            <a
              href="tel:+573168782198"
              aria-label={lang === "es" ? "Teléfono" : "Phone"}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiPhone size={20} />
            </a>
          </div>

          {/* Language toggle pill */}
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <span className={lang === "es" ? "text-primary" : "text-muted-foreground"}>ES</span>
            <span className="text-border">/</span>
            <span className={lang === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
          </button>
        </div>
      </aside>
    </>
  )
}

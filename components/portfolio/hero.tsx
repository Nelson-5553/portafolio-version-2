"use client"

import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from "react-icons/fi"
import { useLang } from "@/lib/lang-context"

export function Hero() {
  const { t } = useLang()

  return (
    <section id="sobre-mi" className="pt-8 pb-16">
      {/* Mobile greeting */}
      <div className="lg:hidden mb-6">
        <h1 className="text-4xl font-bold text-foreground text-balance leading-tight">
          Nelson Jiménez
        </h1>
        <p className="text-primary font-semibold mt-2">{t.sidebar.title}</p>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-foreground text-balance ">
          {t.nav.about}
        </h2>
        <p className="text-foreground text-base leading-relaxed">
          {t.hero.p1.split(t.hero.p1_highlight).map((part, i, arr) =>
            i < arr.length - 1 ? (
              <span key={i}>
                {part}
                <span className="font-semibold text-primary">{t.hero.p1_highlight}</span>
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </p>
        <p className="text-foreground text-base leading-relaxed">{t.hero.p2}</p>
        <p className="text-foreground text-base leading-relaxed">{t.hero.p3}</p>

        {/* Quick links — mobile only */}
        <div className="flex flex-wrap gap-3 mt-2 lg:hidden">
          <a
            href="https://github.com/Nelson-5553"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FiGithub size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/nelson-jimenez-10429a337"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FiLinkedin size={16} />
            LinkedIn
          </a>
          <a
            href="mailto:andresnelson2004@hotmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FiMail size={16} />
            Email
          </a>
          <a
            href="https://nelson-5553.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <FiExternalLink size={16} />
            Website
          </a>
        </div>
      </div>
    </section>
  )
}

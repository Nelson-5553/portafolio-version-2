"use client"

import { FiExternalLink } from "react-icons/fi"
import { useLang } from "@/lib/lang-context"

export function Experience() {
  const { t } = useLang()

  return (
    <section id="experiencia" className="py-16 border-t border-border">
      <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-10">
        {t.experience.sectionTitle}
      </h2>

      <div className="flex flex-col gap-10">
        {t.experience.items.map((exp, i) => (
          <div
            key={i}
            className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6 p-4 rounded-lg transition-colors hover:bg-accent"
          >
            {/* Period */}
            <p className="text-xs font-mono text-muted-foreground pt-0.5 shrink-0 uppercase tracking-wide">
              {exp.period}
            </p>

            {/* Content */}
            <div className="flex flex-col gap-2">
              <div>
                <h3 className="text-base font-semibold text-foreground leading-tight flex items-center gap-2">
                  {exp.role} · {exp.company}
                  <FiExternalLink
                    size={14}
                    className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                  />
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">{exp.location}</p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {exp.description}
              </p>

              <ul className="flex flex-col gap-1 mt-1">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 block w-1 h-1 rounded-full bg-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-1">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

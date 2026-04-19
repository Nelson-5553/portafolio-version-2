"use client"

import { FiExternalLink, FiGithub } from "react-icons/fi"
import { useLang } from "@/lib/lang-context"

const projectColors = [
  "bg-blue-100",
  "bg-blue-50",
  "bg-slate-100",
  "bg-blue-100",
  "bg-blue-50",
  "bg-slate-100",
]

export function Projects() {
  const { t } = useLang()

  return (
    <section id="proyectos" className="py-16 border-t border-border">
      <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-10">
        {t.projects.sectionTitle}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {t.projects.items.map((project, i) => (
          <article
            key={i}
            className="group flex flex-col gap-3 p-5 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all bg-card"
          >
            {/* Header bar */}
            <div className={`w-full h-1.5 rounded-full ${projectColors[i]} opacity-70`} />

            <div className="flex items-start justify-between gap-2">
              <h3 className="text-base font-semibold text-foreground leading-tight">
                {project.name}
              </h3>
              
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

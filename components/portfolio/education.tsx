"use client"

import { useLang } from "@/lib/lang-context"

const certifications = [
  "Claude Code in Action",
  "GitHub Copilot",
  "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
  "Generative AI Foundations — AWS",
  "Fundamentos de Docker",
  "API REST con Laravel",
  "PHP",
]

export function Education() {
  const { t } = useLang()

  return (
    <section id="educacion" className="py-16 border-t border-border">
      <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-10">
        {t.education.sectionTitle}
      </h2>

      <div className="flex flex-col gap-8 mb-14">
        {t.education.items.map((edu, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-6"
          >
            <p className="text-xs font-mono text-muted-foreground pt-0.5 uppercase tracking-wide shrink-0">
              {edu.period}
            </p>
            <div>
              <h3 className="text-base font-semibold text-foreground leading-tight">
                {edu.degree}
              </h3>
              <p className="text-sm text-primary font-medium">{edu.school}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{edu.location}</p>
              <ul className="mt-2 flex flex-col gap-1">
                {edu.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="mt-1.5 block w-1 h-1 rounded-full bg-primary shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
          {t.education.certificationsTitle}
        </h3>
        <div className="flex flex-col gap-3">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="block w-1 h-1 rounded-full bg-primary shrink-0" />
              <span className="text-sm text-foreground">{cert}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

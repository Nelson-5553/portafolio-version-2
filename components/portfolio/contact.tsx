"use client"

import { FiMail, FiPhone, FiLinkedin, FiGithub, FiExternalLink } from "react-icons/fi"
import { useLang } from "@/lib/lang-context"

export function Contact() {
  const { t } = useLang()
  const { labels } = t.contact

  return (
    <section id="contacto" className="py-16 border-t border-border">
      <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-10">
        {t.contact.sectionTitle}
      </h2>

      <div className="max-w-lg">
        <p className="text-base text-foreground leading-relaxed mb-8">
          {t.contact.intro}
        </p>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:andresnelson2004@hotmail.com"
            className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-accent transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <FiMail size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                {labels.email}
              </p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                andresnelson2004@hotmail.com
              </p>
            </div>
          </a>

          <a
            href="tel:+573168782198"
            className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-accent transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <FiPhone size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                {labels.phone}
              </p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                +57 316 8782198
              </p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/nelson-jimenez-10429a337"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-accent transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <FiLinkedin size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                {labels.linkedin}
              </p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                nelson-jimenez-10429a337
              </p>
            </div>
          </a>

          <a
            href="https://github.com/Nelson-5553"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-accent transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <FiGithub size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                {labels.github}
              </p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                Nelson-5553
              </p>
            </div>
          </a>

          <a
            href="https://nelson-5553.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover:bg-accent transition-all"
          >
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
              <FiExternalLink size={18} className="text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                {labels.website}
              </p>
              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                nelson-5553.vercel.app
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border">
        <p className="text-xs text-muted-foreground">{t.contact.footer}</p>
      </div>
    </section>
  )
}

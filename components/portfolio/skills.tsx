"use client"

import {
  SiJavascript,
  SiPhp,
  SiPython,
  SiAstro,
  SiLaravel,
  SiNextdotjs,
  SiAlpinedotjs,
  SiCss,
  SiHtml5,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiNodedotjs,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiSwagger,
  SiLinux,
} from "react-icons/si"
import { TbBrandLivewire, TbBrandAws, TbChartBar } from "react-icons/tb"
import type { IconType } from "react-icons"
import { useLang } from "@/lib/lang-context"

interface Skill {
  name: string
  icon: IconType
  color: string
}

// Skill data stays static (names/icons/colors don't change per language)
const skillGroupsData: { skills: Skill[] }[] = [
  {
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
    ],
  },
  {
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "Astro", icon: SiAstro, color: "#FF5D01" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Livewire", icon: TbBrandLivewire, color: "#FB70A9" },
      { name: "Alpine.js", icon: SiAlpinedotjs, color: "#8BC0D0" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    ],
  },
  {
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
  {
    skills: [
      { name: "AWS", icon: TbBrandAws, color: "#FF9900" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Linux", icon: SiLinux, color: "#FCC624" },
    ],
  },
  {
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "Power BI", icon: TbChartBar, color: "#F2C811" },
    ],
  },
]

function SkillBadge({ skill }: { skill: Skill }) {
  const Icon = skill.icon
  return (
    <div className="group flex flex-col items-center gap-2 p-3 rounded-xl border border-border hover:border-primary/30 hover:bg-accent transition-all cursor-default">
      <div className="w-8 h-8 flex items-center justify-center" aria-hidden="true">
        <Icon size={28} style={{ color: skill.color }} />
      </div>
      <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
        {skill.name}
      </span>
    </div>
  )
}

export function Skills() {
  const { t } = useLang()

  return (
    <section id="habilidades" className="py-16 border-t border-border">
      <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-10">
        {t.skills.sectionTitle}
      </h2>

      <div className="flex flex-col gap-10">
        {skillGroupsData.map((group, i) => (
          <div key={i}>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              {t.skills.groups[i]}
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
              {group.skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import { LangProvider } from "@/lib/lang-context"
import { Sidebar } from "@/components/portfolio/sidebar"
import { Hero } from "@/components/portfolio/hero"
import { Experience } from "@/components/portfolio/experience"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { Education } from "@/components/portfolio/education"
import { Contact } from "@/components/portfolio/contact"

export default function Portfolio() {
  return (
    <LangProvider>
      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-0 lg:gap-16">
            {/* Sticky left sidebar — desktop only */}
            <Sidebar />

            {/* Scrollable right content */}
            <div className="flex-1 pt-20 lg:pt-0 min-w-0">
              <Hero />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Contact />
            </div>
          </div>
        </div>
      </main>
    </LangProvider>
  )
}

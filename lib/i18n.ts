export type Lang = "es" | "en"

export const translations = {
  es: {
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      education: "Educación",
      contact: "Contacto",
    },
    sidebar: {
      title: "Ingeniero de Sistemas",
      bio: "Full Stack Developer especializado en soluciones escalables y arquitectura cloud.",
    },
    hero: {
      p1: "Soy un Ingeniero de Sistemas con experiencia en desarrollo de software full stack, automatizaciones empresariales con n8n y arquitectura en infraestructuras cloud (AWS y Oracle).",
      p1_highlight: "Ingeniero de Sistemas",
      p2: "Combino estudios formales con experiencia práctica en desarrollo web, infraestructura de TI y consultoría tecnológica. He trabajado en proyectos que van desde plataformas serverless en AWS para el monitoreo de sistemas industriales hasta soluciones de gestión universitaria.",
      p3: "Me apasiona la innovación continua, la excelencia técnica y la creación de soluciones que resuelvan problemas reales con impacto tangible.",
    },
    experience: {
      sectionTitle: "Experiencia",
      items: [
        {
          period: "Oct 2025 — Abr 2026",
          role: "Desarrollador de Software",
          company: "Hydrothermia Inc.",
          location: "Quebec, Canadá",
          description:
            "Desarrollo de plataforma web para el monitoreo, análisis y visualización de métricas técnicas, operacionales, financieras y ambientales en sistemas energéticos e industriales.",
          bullets: [
            "Desarrollo de plataforma serverless en AWS para monitoreo de sistemas industriales",
            "Implementación de dashboards interactivos para visualización de métricas técnicas y operacionales",
            "Creación de herramienta de análisis termográfico para paneles solares e infraestructura energética",
          ],
          tags: ["AWS", "Serverless", "React", "Python"],
        },
        {
          period: "Oct 2025 — Dic 2025",
          role: "Auxiliar de Sistemas",
          company: "Innovages Consulting SAS",
          location: "Cartagena, Colombia",
          description:
            "Apoyo en el desarrollo del Plan Estratégico de Tecnologías de la Información para Cardique, contribuyendo al análisis de necesidades tecnológicas y alineación estratégica de TI.",
          bullets: [
            "Análisis integral de necesidades tecnológicas para la alineación estratégica de TI",
            "Contribución al desarrollo del PETI mejorando la eficiencia operativa",
            "Apoyo en procesos de toma de decisiones tecnológicas estratégicas",
          ],
          tags: ["Consultoría TI", "PETI", "Análisis"],
        },
        {
          period: "Ago 2024 — Dic 2024",
          role: "Desarrollador Web",
          company: "Centro de Innovación Comfenalco",
          location: "Cartagena, Colombia",
          description:
            "Desarrollo backend y frontend en el proyecto Tecnopro, enfocado en la gestión centralizada de proyectos estudiantiles.",
          bullets: [
            "Desarrollo full stack en proyecto Tecnopro",
            "Implementación de soluciones tanto en backend como frontend",
            "Optimización de la experiencia del usuario en la plataforma",
          ],
          tags: ["Laravel", "PHP", "JavaScript", "MySQL"],
        },
        {
          period: "Feb 2024 — Ago 2024",
          role: "Practicante Universitario",
          company: "Gestion Salud IPS",
          location: "Cartagena, Colombia",
          description:
            "Optimización de procesos internos y soporte técnico especializado para mejorar la eficiencia operativa del sistema.",
          bullets: [
            "Soporte técnico especializado mejorando eficiencia operativa",
            "Mejora de la infraestructura tecnológica de la institución",
          ],
          tags: ["Soporte TI", "Infraestructura"],
        },
        {
          period: "Feb 2023 — Nov 2023",
          role: "Monitor de Recursos Educativos",
          company: "Tecnológico Comfenalco",
          location: "Cartagena, Colombia",
          description:
            "Prestación de servicios en el área de recursos educativos, con apoyo en salas de sistemas y audiovisuales.",
          bullets: [
            "Gestión de salas de sistemas y equipos audiovisuales",
            "Automatización de tareas repetitivas con herramientas informáticas",
            "Apoyo integral a estudiantes y docentes",
          ],
          tags: ["Soporte", "Automatización"],
        },
      ],
    },
    projects: {
      sectionTitle: "Proyectos",
      viewCode: "Ver código de",
      viewProject: "Ver proyecto",
      items: [
        {
          name: "Tecno Pro",
          description:
            "Plataforma web diseñada para centralizar y gestionar información de proyectos universitarios. Optimiza la organización de datos y mejora la experiencia del usuario.",
          tags: ["Laravel", "PHP", "MySQL", "JavaScript"],
        },
        {
          name: "PyDocs",
          description:
            "Herramienta de documentación automática para proyectos Python con generación de documentos profesionales. Simplifica el flujo de documentación técnica.",
          tags: ["Python", "Astro", "Tailwind CSS"],
        },
        {
          name: "Gestion EPP",
          description:
            "La solución eficiente para el control de Equipos de Protección Personal en las empresas. Optimiza la administración, asegura el cumplimiento y lleva un registro preciso.",
          tags: ["Laravel", "PHP", "PostgreSQL", "Livewire"],
        },
        {
          name: "Thermia",
          description:
            "Sistema destinado a la automatización en la generación de informes termográficos a partir de datos capturados por dispositivos especializados.",
          tags: ["AWS SAM", "Python", "React", "Laravel"],
        },
        {
          name: "Hydrothermia Metrics",
          description:
            "Sistema diseñado para la recolección, almacenamiento, transformación y transmisión de datos provenientes de dispositivos industriales como métricas precisas y accionables.",
          tags: ["AWS", "Laravel", "PostgreSQL", "Livewire"],
        },
        {
          name: "G3-GAMES",
          description:
            "Plataforma que proporciona información detallada sobre videojuegos con datos de la API de RAWG. Permite explorar reseñas, calificaciones, géneros y plataformas en un solo lugar.",
          tags: ["React", "Node.js", "RAWG API", "Tailwind CSS"],
        },
      ],
    },
    skills: {
      sectionTitle: "Habilidades Técnicas",
      groups: ["Lenguajes", "Frameworks & Librerías", "Bases de Datos", "Cloud & DevOps", "Herramientas"],
    },
    education: {
      sectionTitle: "Educación",
      certificationsTitle: "Certificaciones",
      items: [
        {
          period: "Feb 2023 — Nov 2024",
          degree: "Ingeniería de Sistemas",
          school: "Tecnológico Comfenalco",
          location: "Cartagena de Indias, Bolívar",
          highlights: ["Mejor promedio semestral (7mo semestre)", "Enfoque en arquitectura de software"],
        },
        {
          period: "Feb 2021 — Nov 2022",
          degree: "Técnico en Desarrollo de Software",
          school: "Tecnológico Comfenalco",
          location: "Cartagena de Indias, Bolívar",
          highlights: ["Desarrollo de aplicaciones web", "Bases sólidas en programación"],
        },
        {
          period: "Feb 2019 — Nov 2020",
          degree: "Técnico en Desarrollo de Software",
          school: "Cedesarrollo",
          location: "Cartagena de Indias, Bolívar",
          highlights: ["Fundamentos de programación", "Lógica y estructuras básicas"],
        },
      ],
    },
    contact: {
      sectionTitle: "Contacto",
      intro: "¿Tienes un proyecto en mente o quieres hablar sobre oportunidades? Estoy disponible y me encantaría conectar contigo.",
      labels: {
        email: "Email",
        phone: "Teléfono",
        linkedin: "LinkedIn",
        github: "GitHub",
        website: "Website",
      },
      footer: "Diseñado y construido por Nelson Andrés Jiménez Alvarez · Cartagena, Colombia",
    },
  },

  en: {
    nav: {
      about: "About me",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
    },
    sidebar: {
      title: "Systems Engineer",
      bio: "Full Stack Developer specialized in scalable solutions and cloud architecture.",
    },
    hero: {
      p1: "I am a Systems Engineer with experience in full stack software development, business automations with n8n, and cloud infrastructure architecture (AWS and Oracle).",
      p1_highlight: "Systems Engineer",
      p2: "I combine formal education with hands-on experience in web development, IT infrastructure, and technology consulting. I have worked on projects ranging from serverless platforms on AWS for industrial system monitoring to university management solutions.",
      p3: "I am passionate about continuous innovation, technical excellence, and building solutions that solve real problems with tangible impact.",
    },
    experience: {
      sectionTitle: "Experience",
      items: [
        {
          period: "Oct 2025 — Apr 2026",
          role: "Software Developer",
          company: "Hydrothermia Inc.",
          location: "Quebec, Canada",
          description:
            "Development of a web platform for monitoring, analyzing, and visualizing technical, operational, financial, and environmental metrics in energy and industrial systems.",
          bullets: [
            "Developed a serverless platform on AWS for industrial system monitoring",
            "Implemented interactive dashboards for visualizing technical and operational metrics",
            "Built a thermographic analysis tool for solar panels and energy infrastructure",
          ],
          tags: ["AWS", "Serverless", "React", "Python"],
        },
        {
          period: "Oct 2025 — Dec 2025",
          role: "IT Assistant",
          company: "Innovages Consulting SAS",
          location: "Cartagena, Colombia",
          description:
            "Supported the development of the Strategic Information Technology Plan for Cardique, contributing to technology needs analysis and IT strategic alignment.",
          bullets: [
            "Comprehensive analysis of technological needs for strategic IT alignment",
            "Contributed to PETI development improving operational efficiency",
            "Supported strategic technology decision-making processes",
          ],
          tags: ["IT Consulting", "PETI", "Analysis"],
        },
        {
          period: "Aug 2024 — Dec 2024",
          role: "Web Developer",
          company: "Centro de Innovación Comfenalco",
          location: "Cartagena, Colombia",
          description:
            "Backend and frontend development on the Tecnopro project, focused on the centralized management of student projects.",
          bullets: [
            "Full stack development on the Tecnopro project",
            "Implementation of both backend and frontend solutions",
            "User experience optimization on the platform",
          ],
          tags: ["Laravel", "PHP", "JavaScript", "MySQL"],
        },
        {
          period: "Feb 2024 — Aug 2024",
          role: "University Intern",
          company: "Gestion Salud IPS",
          location: "Cartagena, Colombia",
          description:
            "Optimization of internal processes and specialized technical support to improve the operational efficiency of the system.",
          bullets: [
            "Specialized technical support improving operational efficiency",
            "Improvement of the institution's technological infrastructure",
          ],
          tags: ["IT Support", "Infrastructure"],
        },
        {
          period: "Feb 2023 — Nov 2023",
          role: "Educational Resources Monitor",
          company: "Tecnológico Comfenalco",
          location: "Cartagena, Colombia",
          description:
            "Service delivery in the educational resources area, supporting computer labs and audiovisual equipment.",
          bullets: [
            "Management of computer labs and audiovisual equipment",
            "Automation of repetitive tasks with computing tools",
            "Comprehensive support for students and teachers",
          ],
          tags: ["Support", "Automation"],
        },
      ],
    },
    projects: {
      sectionTitle: "Projects",
      viewCode: "View code for",
      viewProject: "View project",
      items: [
        {
          name: "Tecno Pro",
          description:
            "Web platform designed to centralize and manage university project information. Optimizes data organization and improves the user experience.",
          tags: ["Laravel", "PHP", "MySQL", "JavaScript"],
        },
        {
          name: "PyDocs",
          description:
            "Automatic documentation tool for Python projects with professional document generation. Simplifies the technical documentation workflow.",
          tags: ["Python", "Astro", "Tailwind CSS"],
        },
        {
          name: "Gestion EPP",
          description:
            "Efficient solution for the control of Personal Protective Equipment in companies. Optimizes administration, ensures compliance, and keeps accurate records.",
          tags: ["Laravel", "PHP", "PostgreSQL", "React"],
        },
        {
          name: "Thermia",
          description:
            "System aimed at automating the generation of thermographic reports from data captured by specialized devices.",
          tags: ["AWS SAM", "Python", "React", "Node.js"],
        },
        {
          name: "Hydrothermia Metrics",
          description:
            "System designed for the collection, storage, transformation, and transmission of data from industrial devices as precise and actionable metrics.",
          tags: ["AWS", "React", "PostgreSQL", "Docker"],
        },
        {
          name: "G3-GAMES",
          description:
            "Platform that provides detailed information about video games using the RAWG API. Allows exploring reviews, ratings, genres, and platforms in one place.",
          tags: ["React", "Node.js", "RAWG API", "Tailwind CSS"],
        },
      ],
    },
    skills: {
      sectionTitle: "Technical Skills",
      groups: ["Languages", "Frameworks & Libraries", "Databases", "Cloud & DevOps", "Tools"],
    },
    education: {
      sectionTitle: "Education",
      certificationsTitle: "Certifications",
      items: [
        {
          period: "Feb 2023 — Nov 2024",
          degree: "Systems Engineering",
          school: "Tecnológico Comfenalco",
          location: "Cartagena de Indias, Bolívar",
          highlights: ["Best semester GPA (7th semester)", "Focus on software architecture"],
        },
        {
          period: "Feb 2021 — Nov 2022",
          degree: "Software Development Technician",
          school: "Tecnológico Comfenalco",
          location: "Cartagena de Indias, Bolívar",
          highlights: ["Web application development", "Solid programming foundations"],
        },
        {
          period: "Feb 2019 — Nov 2020",
          degree: "Software Development Technician",
          school: "Cedesarrollo",
          location: "Cartagena de Indias, Bolívar",
          highlights: ["Programming fundamentals", "Basic logic and data structures"],
        },
      ],
    },
    contact: {
      sectionTitle: "Contact",
      intro: "Have a project in mind or want to talk about opportunities? I am available and would love to connect with you.",
      labels: {
        email: "Email",
        phone: "Phone",
        linkedin: "LinkedIn",
        github: "GitHub",
        website: "Website",
      },
      footer: "Designed and built by Nelson Andrés Jiménez Alvarez · Cartagena, Colombia",
    },
  },
} as const

export type Translations = typeof translations.es

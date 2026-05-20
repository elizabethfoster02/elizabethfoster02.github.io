export type NavLinkData = {
  label: string
  to: string
}

export type ProjectData = {
  title: string
  description: string
  tech: string
  duration: string
  role: string
  tags: string[]
}

export type DesignData = {
  title: string
  description: string
  specs: { label: string; value: string }[]
  tags: string[]
}

export type ExperienceData = {
  title: string
  company: string
  dates: string
  duration: string
  description: string
  highlights: string[]
}

export type EducationData = {
  icon: string
  title: string
  field?: string
  school?: string
  date?: string
  details?: string
  certs?: { label: string; date: string }[]
}

export type SkillCategory = {
  title: string
  skills: { name: string; level: string }[]
}

export type ContactMethod = {
  label: string
  href: string
  icon: string
}

export const navLinks: NavLinkData[] = [
  { label: 'About', to: '/#about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Designs', to: '/designs' },
  { label: 'Contact', to: '/#contact' }
]

export const heroContent = {
  name: 'Elizabeth Foster',
  tagline: 'Crafting elegant code and beautiful knitwear in Minneapolis',
  primaryCta: { label: 'View My Work', to: '/projects' },
  secondaryCta: { label: 'Get In Touch', to: '/#contact' }
}

export const aboutText = [
  "I'm a software engineer with a passion for building thoughtful, user-focused applications. By day, I write clean code and solve complex problems. By night, I design and hand-knit beautiful garments that combine traditional craftsmanship with contemporary aesthetics.",
  'Based in Minneapolis, MN, I blend my technical expertise with creative vision to deliver exceptional results—whether on screen or on needles.'
]

export const technicalSkills = [
  'JavaScript / TypeScript',
  'React & Frontend Development',
  'Node.js & Backend Development',
  'Full-Stack Web Applications',
  'UI/UX Design',
  'Git & Version Control'
]

export const designSkills = [
  'Knitwear Design',
  'Pattern Development',
  'Hand Knitting',
  'Yarn Selection & Color Theory',
  'Garment Construction',
  'Design Innovation'
]

export const highlights = [
  {
    icon: '💻',
    title: 'Software Engineering',
    description: 'Building scalable, performant web applications with modern technologies and best practices.'
  },
  {
    icon: '🧶',
    title: 'Knitwear Design',
    description: 'Creating unique, wearable art through original pattern design and hand-knitting with premium yarns.'
  },
  {
    icon: '✨',
    title: 'Creative Problem Solving',
    description: 'Combining technical precision with artistic intuition to solve complex challenges.'
  }
]

export const featuredProjects: ProjectData[] = [
  {
    title: 'Project Name',
    description: 'A brief description of your featured project and the technologies used.',
    tech: 'React, Node.js, MongoDB, WebSocket',
    duration: '3 months',
    role: 'Full-Stack Developer',
    tags: ['React', 'TypeScript', 'Backend', 'Real-time']
  },
  {
    title: 'Project Name',
    description: 'A brief description of your featured project and the technologies used.',
    tech: 'Vue.js, Python, FastAPI, PostgreSQL',
    duration: '2 months',
    role: 'Full-Stack Developer',
    tags: ['Vue.js', 'Python', 'API', 'Database']
  }
]

export const workExperience: ExperienceData[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Company Name',
    dates: 'Jan 2024 - Present',
    duration: '1+ year',
    description: 'Led development of critical full-stack applications serving thousands of users. Mentored junior developers, established best practices, and implemented architectural improvements that increased system performance by 40%.',
    highlights: ['Leadership', 'Full-Stack', 'Performance', 'Mentoring']
  },
  {
    title: 'Software Engineer',
    company: 'Company Name',
    dates: 'Jun 2022 - Dec 2023',
    duration: '1.5 years',
    description: 'Developed and maintained React-based frontend applications with TypeScript. Collaborated with product and design teams to deliver user-focused features. Implemented automated testing, increasing code coverage from 30% to 85%.',
    highlights: ['React', 'TypeScript', 'Testing', 'Collaboration']
  },
  {
    title: 'Junior Developer',
    company: 'Company Name',
    dates: 'Jan 2021 - May 2022',
    duration: '1.5 years',
    description: 'Started my career building responsive web applications using modern JavaScript frameworks. Learned industry best practices, participated in code reviews, and contributed to multiple product launches across different teams.',
    highlights: ['JavaScript', 'Frontend', 'Learning', 'Growth']
  }
]

export const educationDetails: EducationData[] = [
  {
    icon: '🎓',
    title: 'Bachelor of Science',
    field: 'Computer Science',
    school: 'University Name',
    date: 'Graduated: May 2020',
    details:
      'Completed coursework in data structures, algorithms, web development, and databases. Maintained Dean\'s List recognition.',
  },
  {
    icon: '📚',
    title: 'Professional Certifications',
    certs: [
      { label: 'AWS Certified Developer', date: '2023' },
      { label: 'Full-Stack Web Development Bootcamp', date: '2020' },
      { label: 'Google Cloud Professional', date: '2022' }
    ]
  },
  {
    icon: '🎨',
    title: 'Design & Craft Training',
    field: 'Knitwear Design',
    school: 'Craft Institute',
    date: 'Completed: 2019',
    details: 'Advanced coursework in pattern development, garment construction, and fiber theory. Mentored by award-winning knitwear designers.'
  }
]

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript / TypeScript', level: '95%' },
      { name: 'Python', level: '85%' },
      { name: 'SQL', level: '90%' },
      { name: 'HTML / CSS', level: '98%' }
    ]
  },
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: '95%' },
      { name: 'Vue.js', level: '80%' },
      { name: 'CSS / Tailwind', level: '92%' },
      { name: 'Next.js', level: '88%' }
    ]
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node.js', level: '92%' },
      { name: 'Express', level: '88%' },
      { name: 'PostgreSQL', level: '85%' },
      { name: 'MongoDB', level: '82%' }
    ]
  }
]

export const projects: ProjectData[] = [
  {
    title: 'Project Title',
    description: 'A comprehensive description of this project, what problem it solves, and what technologies were used to build it. Add meaningful details about your approach and the results achieved.',
    tech: 'React, Node.js, MongoDB, WebSocket',
    duration: '3 months',
    role: 'Full-Stack Developer',
    tags: ['React', 'TypeScript', 'Backend', 'Real-time']
  },
  {
    title: 'Project Title',
    description: 'A comprehensive description of this project, what problem it solves, and what technologies were used to build it. Add meaningful details about your approach and the results achieved.',
    tech: 'Vue.js, Python, FastAPI, PostgreSQL',
    duration: '2 months',
    role: 'Full-Stack Developer',
    tags: ['Vue.js', 'Python', 'API', 'Database']
  },
  {
    title: 'Project Title',
    description: 'A comprehensive description of this project, what problem it solves, and what technologies were used to build it. Add meaningful details about your approach and the results achieved.',
    tech: 'React, GraphQL, Node.js, Elasticsearch',
    duration: '4 months',
    role: 'Full-Stack Developer & Tech Lead',
    tags: ['GraphQL', 'React', 'Search', 'Performance']
  },
  {
    title: 'Project Title',
    description: 'A comprehensive description of this project, what problem it solves, and what technologies were used to build it. Add meaningful details about your approach and the results achieved.',
    tech: 'Next.js, TypeScript, Tailwind CSS, Supabase',
    duration: '6 weeks',
    role: 'Frontend Developer',
    tags: ['Next.js', 'TypeScript', 'Frontend', 'Vercel']
  }
]

export const designs: DesignData[] = [
  {
    title: 'Design Name',
    description: 'A beautiful description of this knit design, including fiber content, construction techniques, and design inspiration.',
    specs: [
      { label: 'Fiber', value: 'Merino Wool / Silk Blend' },
      { label: 'Skill Level', value: 'Intermediate' },
      { label: 'Sizes', value: 'XS - XXL' }
    ],
    tags: ['Original Design', 'Colorwork', 'Wearable']
  },
  {
    title: 'Design Name',
    description: 'A beautiful description of this knit design, including fiber content, construction techniques, and design inspiration.',
    specs: [
      { label: 'Fiber', value: 'Alpaca / Wool Blend' },
      { label: 'Skill Level', value: 'Beginner' },
      { label: 'Sizes', value: 'One Size' }
    ],
    tags: ['Accessory', 'Cozy', 'Quick Knit']
  },
  {
    title: 'Design Name',
    description: 'A beautiful description of this knit design, including fiber content, construction techniques, and design inspiration.',
    specs: [
      { label: 'Fiber', value: 'Cashmere Blend' },
      { label: 'Skill Level', value: 'Advanced' },
      { label: 'Sizes', value: 'XS - XL' }
    ],
    tags: ['Luxury', 'Lace', 'Statement']
  },
  {
    title: 'Design Name',
    description: 'A beautiful description of this knit design, including fiber content, construction techniques, and design inspiration.',
    specs: [
      { label: 'Fiber', value: 'Cotton' },
      { label: 'Skill Level', value: 'Beginner-Intermediate' },
      { label: 'Sizes', value: 'XS - XXL' }
    ],
    tags: ['Summer', 'Breathable', 'Versatile']
  },
  {
    title: 'Design Name',
    description: 'A beautiful description of this knit design, including fiber content, construction techniques, and design inspiration.',
    specs: [
      { label: 'Fiber', value: 'Merino Wool' },
      { label: 'Skill Level', value: 'Advanced' },
      { label: 'Sizes', value: 'One Size' }
    ],
    tags: ['Intricate', 'Brioche', 'Textured']
  },
  {
    title: 'Design Name',
    description: 'A beautiful description of this knit design, including fiber content, construction techniques, and design inspiration.',
    specs: [
      { label: 'Fiber', value: 'Bamboo Blend' },
      { label: 'Skill Level', value: 'Beginner' },
      { label: 'Sizes', value: 'XS - XXL' }
    ],
    tags: ['Eco-Friendly', 'Drape', 'Soft']
  }
]

export const contactMethods: ContactMethod[] = [
  { label: 'Email', href: 'mailto:your-email@example.com', icon: '📧' },
  { label: 'GitHub', href: 'https://github.com', icon: '💻' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
  { label: 'Twitter', href: 'https://twitter.com', icon: '𝕏' }
]

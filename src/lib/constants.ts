// Site-wide constants and data

export const SITE_CONFIG = {
  name: "Ali Raza",
  title: "Full Stack & DevOps Engineer",
  tagline: "Building full-stack apps. Automating infrastructure. Shipping fast.",
  email: "aliraza645.muz@gmail.com",
  phone: "+91 9241163810",
  github: "https://github.com/aliraza19483",
  linkedin: "https://www.linkedin.com/in/ali-raza-7279a8286/",
  leetcode: "https://leetcode.com/aliraza19483",
  resumeUrl: "/Resume.docx",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS_DATA = [
  {
    category: "Languages",
    icon: "💻",
    skills: ["Java", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "DevOps & Tools",
    icon: "🚀",
    skills: ["Git", "Docker", "MongoDB", "SQL", "Linux", "CI/CD"],
  },
];

export const PROJECTS_DATA = [
  {
    title: "RA Contractor",
    subtitle: "Premium Home Interiors Platform",
    techStack: ["React.js", "CSS3", "Responsive Design"],
    problem:
      "A home interior business needed a professional web presence to showcase services and attract clients online.",
    impact:
      "Built a fully responsive web application with dynamic UI components, resulting in improved client engagement and faster page loads.",
    link: "https://racontractor.in/",
    period: "Jan 2026 – Feb 2026",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Ceilify",
    subtitle: "Dynamic Ceiling Solutions Platform",
    techStack: ["React.js", "Node.js", "Performance Optimization"],
    problem:
      "A ceiling solutions business required an interactive platform with dynamic content rendering and optimized performance.",
    impact:
      "Implemented dynamic UI components and integrated hosting with optimized performance, reducing load times by 40%.",
    link: "https://ceilify.in/",
    period: "Feb 2026 – Mar 2026",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "DevOps Pipeline Automator",
    subtitle: "CI/CD Automation Tool",
    techStack: ["Docker", "Node.js", "Shell Scripts", "GitHub Actions"],
    problem:
      "Manual deployment processes were slow, error-prone, and wasted developer time across multiple projects.",
    impact:
      "Automated build, test, and deployment workflows reducing deployment time by 70% and eliminating manual errors.",
    link: "#",
    period: "Ongoing",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Cloud Monitor Dashboard",
    subtitle: "Real-time Infrastructure Monitoring",
    techStack: ["Next.js", "MongoDB", "Express.js", "WebSockets"],
    problem:
      "No centralized view of cloud resource health, costs, and uptime across multiple environments.",
    impact:
      "Created a real-time monitoring dashboard providing instant visibility into infrastructure health and cost optimization.",
    link: "#",
    period: "Ongoing",
    gradient: "from-emerald-500 to-teal-500",
  },
];

export const EDUCATION_DATA = [
  {
    institution: "DIT University",
    degree: "B.Tech in Computer Science & Engineering",
    period: "Aug 2023 – May 2027",
    score: "CGPA: 7/10",
  },
  {
    institution: "R.S.L.Y College",
    degree: "Intermediate",
    period: "2021 – 2023",
    score: "75%",
  },
];

export const ACHIEVEMENTS = [
  "Student Training & Placement Officer – Facilitated career training and placements",
  "CIIES Technical Head – Led the technical wing of the university startup club",
  "Active competitive programmer on LeetCode",
];

export const ABOUT_TEXT = `I'm a Computer Science student at DIT University with a passion for building
scalable, production-ready systems. I work across the full stack — from crafting
polished React frontends to architecting robust backend services with Node.js and Express.

On the DevOps side, I work with Docker, CI/CD pipelines, and cloud infrastructure
to streamline deployments and keep systems reliable. I believe in shipping fast,
iterating constantly, and writing code that other engineers actually enjoy reading.

When I'm not coding, you'll find me exploring new AI tools, playing cricket, or
mentoring peers through the university's startup club.`;

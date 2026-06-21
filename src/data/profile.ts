export const profile = {
  name: "Ahmed Mamdouh",
  title:
    "Junior Penetration Tester | Backend Developer | Python Automation Engineer | Computer Science Graduate | Red Team Trainee",
  shortTitle: "Penetration Tester · Backend Developer · Automation Engineer",
  location: "Cairo, Egypt",
  email: "Ahmedmamdouhwork1@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmed-mamdouh-039600319/",
  instagram:
    "https://www.instagram.com/ahmedmamdouh362?utm_source=qr",
  intro:
    "Computer Science graduate combining offensive security expertise with Python backend development and automation engineering — building secure, scalable systems and tools that think like an attacker.",
  about: [
    "I am Ahmed Mamdouh, a Computer Science graduate with a strong passion for cybersecurity, penetration testing, backend development, and automation engineering.",
    "My goal is to help organizations build secure, scalable, and reliable systems by combining offensive security knowledge with modern software development practices.",
    "As a penetration tester, I enjoy thinking like an attacker to identify vulnerabilities, assess security risks, and help strengthen applications and infrastructure against real-world threats.",
    "Alongside cybersecurity, I specialize in Python backend development and automation solutions. I enjoy creating tools that improve efficiency, automate repetitive tasks, and simplify complex workflows. My development approach focuses on security, performance, maintainability, and clean architecture.",
    "Throughout my learning journey, I have gained experience in networking, system administration, ethical hacking, Linux environments, backend development, and security automation.",
    "I am continuously expanding my knowledge in penetration testing methodologies, offensive security techniques, cloud technologies, automation frameworks, and AI-assisted development.",
    "I am highly motivated to contribute to innovative projects, collaborate with technical teams, and grow as a cybersecurity professional while delivering secure and efficient solutions.",
  ],
  education: {
    degree: "Bachelor's Degree in Computer Science",
    highlights: [
      "Cybersecurity",
      "Software Development",
      "Networking",
      "System Administration",
      "Automation Engineering",
      "Secure Application Design",
    ],
  },
  availability: [
    "Cybersecurity Opportunities",
    "Penetration Testing Roles",
    "Backend Development Positions",
    "Freelance Projects",
    "Collaboration Opportunities",
  ],
  interests: [
    "Penetration Testing",
    "Offensive Security",
    "Red Teaming",
    "Security Research",
    "Python Development",
    "Automation Development",
    "Artificial Intelligence",
    "Backend Architecture",
    "Secure Software Development",
  ],
} as const;

export const skillGroups = [
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "shield",
    skills: [
      "Penetration Testing",
      "Web Application Security Testing",
      "Vulnerability Assessment",
      "Security Auditing",
      "Network Security",
      "Ethical Hacking",
      "Red Team Fundamentals",
      "OWASP Top 10",
      "Security Reporting",
      "Reconnaissance Techniques",
      "Exploitation Methodologies",
    ],
  },
  {
    id: "python",
    title: "Python Development",
    icon: "code",
    skills: [
      "Python Programming",
      "Backend Development",
      "REST API Development",
      "FastAPI",
      "Flask",
      "Django Fundamentals",
      "Database Integration",
      "API Security",
      "Authentication Systems",
      "Automation Scripting",
    ],
  },
  {
    id: "automation",
    title: "Python Automation",
    icon: "zap",
    description:
      "I specialize in building automation solutions using Python to reduce manual work and improve operational efficiency.",
    skills: [
      "Security Automation",
      "Vulnerability Scanning Automation",
      "Data Processing",
      "Report Generation",
      "API Integrations",
      "Workflow Automation",
      "System Administration Automation",
      "Scheduled Task Execution",
      "Security Assessment Pipelines",
      "Web Scraping and Data Collection",
    ],
    note: "My automation experience includes creating Python-based solutions that collect information, analyze data, generate reports, integrate with third-party services, and automate repetitive security tasks.",
  },
  {
    id: "networking",
    title: "Networking",
    icon: "network",
    skills: [
      "CCNA Networking Concepts",
      "Routing and Switching",
      "Network Troubleshooting",
      "TCP/IP",
      "DNS",
      "DHCP",
      "VLANs",
      "Network Security Fundamentals",
    ],
  },
  {
    id: "os",
    title: "Operating Systems",
    icon: "server",
    skills: [
      "Linux Administration",
      "Windows Administration",
      "Active Directory Basics",
      "System Hardening",
      "Server Management",
    ],
  },
  {
    id: "professional",
    title: "Professional Skills",
    icon: "users",
    skills: [
      "Team Management",
      "Technical Documentation",
      "Project Planning",
      "Problem Solving",
      "Communication Skills",
      "Leadership",
      "Analytical Thinking",
      "Continuous Learning",
    ],
  },
] as const;

export const certifications = [
  {
    id: "oscp",
    name: "Offensive Security Certified Professional (OSCP)",
    description:
      "Professional offensive security certification focused on advanced penetration testing methodologies, exploitation techniques, privilege escalation, and real-world attack simulations.",
    verifyUrl: null,
  },
  {
    id: "ceh",
    name: "Certified Ethical Hacker (CEH)",
    description:
      "Certification covering ethical hacking methodologies, vulnerability assessment, penetration testing concepts, network security, and attack techniques.",
    verifyUrl: null,
  },
  {
    id: "mcsa",
    name: "Microsoft Certified Solutions Associate (MCSA)",
    description:
      "Certification focused on Windows Server administration, infrastructure management, Active Directory, networking services, and enterprise environments.",
    verifyUrl: null,
  },
  {
    id: "ccna",
    name: "Cisco Certified Network Associate (CCNA)",
    description:
      "Certification covering enterprise networking, network security, routing and switching, automation, and infrastructure fundamentals.",
    verifyUrl: null,
  },
] as const;

export const projects = [
  {
    id: "bugbuster",
    name: "BugBuster",
    subtitle: "Graduation Project — Flagship Platform",
    role: "Lead Security and Backend Development Contributor",
    featured: true,
    overview:
      "BugBuster is an intelligent cybersecurity platform designed to automate vulnerability assessment and security testing processes. The platform combines automated scanning capabilities, backend processing pipelines, reporting systems, and modern security workflows to help identify security weaknesses efficiently.",
    features: [
      "Automated Vulnerability Assessment",
      "SQL Injection Detection Pipeline",
      "Security Scanning Engine",
      "Report Generation System",
      "Background Task Processing",
      "Real-Time Scan Monitoring",
      "User Dashboard",
      "Security Analytics",
      "Scan History Management",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Redis",
      "Celery",
      "PostgreSQL",
      "Docker",
      "JWT Authentication",
      "Alembic Migrations",
    ],
    responsibilities: [
      "Backend Development",
      "Security Logic Implementation",
      "Scan Pipeline Design",
      "Database Architecture",
      "API Development",
      "Automation Development",
      "Security Testing",
      "Report Generation Workflows",
    ],
    outcome:
      "BugBuster demonstrates the integration of modern backend technologies and cybersecurity methodologies into a unified platform capable of performing automated vulnerability assessments and generating actionable security reports.",
    architecture: [
      "FastAPI REST API layer with JWT-secured endpoints",
      "Celery + Redis background task queue for scan pipelines",
      "PostgreSQL persistence with SQLAlchemy ORM and Alembic migrations",
      "Dockerized deployment for reproducible security environments",
      "SQL injection detection and automated vulnerability assessment engines",
    ],
  },
  {
    id: "security-automation",
    name: "Security Automation Projects",
    subtitle: "Python Automation Suite",
    featured: false,
    overview:
      "Developed multiple Python-based automation tools focused on security assessments, data collection, reporting automation, reconnaissance activities, and workflow optimization.",
    features: [
      "Security Assessments",
      "Data Collection",
      "Reporting Automation",
      "Reconnaissance Activities",
      "Workflow Optimization",
    ],
    technologies: ["Python", "APIs", "Linux", "Automation Frameworks"],
    responsibilities: [],
    outcome: "",
    architecture: [],
  },
  {
    id: "backend",
    name: "Backend Development Projects",
    subtitle: "Scalable API Systems",
    featured: false,
    overview:
      "Built backend systems and APIs using Python frameworks while focusing on scalability, security, authentication, database performance, and maintainability.",
    features: [
      "Scalability",
      "Security",
      "Authentication",
      "Database Performance",
      "Maintainability",
    ],
    technologies: ["FastAPI", "Flask", "SQLAlchemy", "PostgreSQL", "Redis"],
    responsibilities: [],
    outcome: "",
    architecture: [],
  },
] as const;

export const timeline = [
  {
    year: "Education",
    title: profile.education.degree,
    description:
      "Graduated Computer Science Student with strong academic and practical experience across cybersecurity, software development, networking, and automation.",
  },
  {
    year: "Security",
    title: "Offensive Security Focus",
    description:
      "Penetration testing, vulnerability assessment, ethical hacking, and red team fundamentals with OSCP and CEH certifications.",
  },
  {
    year: "Development",
    title: "Backend & Automation",
    description:
      "Python backend systems, REST APIs, security automation pipelines, and workflow optimization tools.",
  },
  {
    year: "Flagship",
    title: "BugBuster Graduation Project",
    description:
      "Lead contributor on an intelligent cybersecurity platform for automated vulnerability assessment and security reporting.",
  },
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#workspace", label: "Work" },
  { href: "#contact", label: "Contact" },
] as const;

export const workspaceTabs = [
  { href: "#projects", label: "Projects", tab: "projects" as const },
  { href: "#certifications", label: "Certifications", tab: "certifications" as const },
  { href: "#skills", label: "Skills", tab: "skills" as const },
] as const;

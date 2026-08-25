export const personalInfo = {
  name: "Dev Anand",
  initials: "DA",
  title: "Web Developer & Cybersecurity Enthusiast",
  subtitle: "Technical Consultant",
  tagline: "I build secure, modern web experiences with clean code and strong security fundamentals.",
  email: "devanandrt1011@gmail.com",
  phone: "+91 90257 10247",
  linkedin: "https://www.linkedin.com/in/devanandrt/",
  github: "https://github.com/devv-11",
  location: "Chennai, India",
  summary:
    "Computer Science engineering student and web developer with a strong focus on secure web architecture and modern frontend technologies. Combines practical experience in React.js and Python with foundational knowledge in Linux, computer networking, and core cybersecurity principles.",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    college: "Dhanalakshmi Srinivasan College of Engineering and Technology",
    status: "Pursuing",
    coursework: [
      "Computer Networks",
      "Operating Systems (Linux)",
      "Web Security Fundamentals",
      "NPTEL Online Courses",
    ],
  },
  experience: [
    {
      role: "Freelance Web Developer & Technical Consultant",
      type: "Self-Employed",
      description:
        "Built responsive, performant web applications with attention to frontend security, input validation, and API authentication. Configured and managed Linux-based development environments for projects.",
    },
  ],
  stats: [
    { label: "Projects", value: "5+" },
    { label: "Technologies", value: "10+" },
    { label: "Hackathons", value: "2" },
    { label: "Certifications", value: "3+" },
  ],
};

export const skills = {
  cybersecurity: {
    title: "Cybersecurity & Systems",
    icon: "Shield",
    items: [
      { name: "Linux Administration", level: 80 },
      { name: "Computer Networking (TCP/IP, DNS)", level: 75 },
      { name: "Network Security Principles", level: 70 },
      { name: "Vulnerability Assessment", level: 65 },
      { name: "OWASP Top 10 Awareness", level: 75 },
      { name: "Wireshark", level: 70 },
    ],
  },
  webdev: {
    title: "Web & Programming",
    icon: "Code",
    items: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Python", level: 75 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML5 / CSS3", level: 90 },
      { name: "REST APIs", level: 75 },
    ],
  },
  tools: {
    title: "Tools & Platforms",
    icon: "Wrench",
    items: [
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Linux CLI", level: 80 },
      { name: "Postman", level: 75 },
      { name: "Figma", level: 70 },
      { name: "AI/ML Basics", level: 60 },
    ],
  },
};

export const projects = [
  {
    title: "HackTronix 2.0 — Secure Web Application",
    description:
      "Built a responsive web solution implementing secure API communication and input validation under strict hackathon deadlines at Sri Sairam Engineering College. Delivered a reliable, functional MVP adhering to basic secure coding practices.",
    role: "Lead Developer & Solution Architect",
    tech: ["React.js", "Python", "Tailwind CSS", "REST APIs"],
    github: "https://github.com/devv-11",
    live: null,
    featured: true,
  },
  {
    title: "Network & Web Security Labs",
    description:
      "Developed modern client interfaces with focus on data protection, performance optimization, and secure third-party integrations. Optimized site architecture for fast load times and clean, resilient code.",
    role: "Developer & Technical Consultant",
    tech: ["Linux", "JavaScript", "React", "Security Auditing"],
    github: "https://github.com/devv-11",
    live: null,
    featured: true,
  },
  {
    title: "Figma Make-a-thon",
    description:
      "Participated in a design-focused hackathon, creating UI/UX prototypes under time constraints. Demonstrated ability to translate ideas into visual designs quickly.",
    role: "Designer & Developer",
    tech: ["Figma", "UI/UX", "Prototyping"],
    github: null,
    live: null,
    featured: false,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

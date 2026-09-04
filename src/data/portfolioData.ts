export const personal = {
  name: 'Sumit Kumar Chaudhari',
  firstName: 'Sumit',
  role: 'Full Stack Developer',
  tagline:
    'I design and build scalable web experiences that balance performance, clarity, and business impact.',
  bio:
    'I enjoy turning ideas into reliable products by combining thoughtful UI design, clean architecture, and practical engineering decisions.',
  email: 'sumit.kumar@example.com',
  phone: '+91 98765 43210',
  githubUrl: 'https://github.com/',
  linkedinUrl: 'https://www.linkedin.com/',
  resumeUrl: '/Sumit_Kumar_Chaudhari_Resume.pdf',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const aboutCards = [
  {
    title: 'Frontend Systems',
    desc: 'Crafting responsive interfaces with React, TypeScript, and modern UI patterns.',
    icon: 'Layers',
  },
  {
    title: 'Backend Services',
    desc: 'Building APIs, business logic, and data workflows with Java and Node ecosystems.',
    icon: 'Server',
  },
  {
    title: 'Product Thinking',
    desc: 'Connecting user needs with product strategy, maintainability, and measurable outcomes.',
    icon: 'Monitor',
  },
  {
    title: 'Integration Work',
    desc: 'Connecting apps through secure auth, REST endpoints, and dependable integrations.',
    icon: 'Plug',
  },
  {
    title: 'UX Quality',
    desc: 'Improving clarity, accessibility, and interaction quality across digital products.',
    icon: 'Sparkles',
  },
  {
    title: 'Operational Focus',
    desc: 'Supporting performance, reliability, and engineering best practices across delivery.',
    icon: 'Radio',
  },
];

export const skillCategories = [
  {
    title: 'Languages & Core',
    icon: 'Code2',
    skills: ['JavaScript', 'TypeScript', 'Java', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: ['React', 'Tailwind CSS', 'Vite', 'Responsive UI', 'Figma', 'REST APIs'],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['Node.js', 'Express.js', 'Spring Boot', 'Hibernate', 'JWT', 'Authentication'],
  },
  {
    title: 'Database',
    icon: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Schema Design', 'Query Optimization'],
  },
  {
    title: 'Workflow',
    icon: 'Coffee',
    skills: ['Git', 'GitHub', 'Agile', 'Debugging', 'Code Reviews', 'Performance Tuning'],
  },
  {
    title: 'Tools & Setup',
    icon: 'Wrench',
    skills: ['VS Code', 'Postman', 'Docker', 'npm', 'CI/CD', 'Monitoring'],
  },
];

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'Product Engineering Team',
    points: [
      'Built and maintained responsive React interfaces and reusable UI patterns for customer-facing workflows.',
      'Developed backend services and API integrations with Java, Spring Boot, and MySQL for production features.',
      'Worked on secure authentication flows, data handling, and performance improvements to keep systems reliable and scalable.',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'Digital Experience Studio',
    points: [
      'Created polished dashboards and landing experiences with attention to accessibility, responsiveness, and device compatibility.',
      'Collaborated across design and engineering to deliver a consistent visual language and faster iteration cycles.',
      'Improved application interactions and organization of state-driven UI to support smoother product usage.',
    ],
  },
];

export const projects = [
  {
    id: 'inventory-system',
    name: 'Inventory Management System',
    date: '2024',
    description:
      'A full-stack platform to manage stock, suppliers, and orders with role-based access and actionable analytics.',
    technologies: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Tailwind', 'REST APIs'],
    features: [
      'Inventory tracking and low-stock alerts',
      'Role-based dashboards for admins and staff',
      'Integrated order and supplier management workflows',
    ],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
    gradient: 'from-violet-500/30 via-indigo-500/20 to-cyan-500/20',
    featured: true,
  },
  {
    id: 'job-board',
    name: 'Job Board Portal',
    date: '2023',
    description:
      'A recruitment-focused portal for browsing openings, posting roles, and managing applications in one place.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'OAuth', 'UI/UX'],
    features: [
      'Candidate and recruiter dashboards',
      'Job listing filters and search experience',
      'Application tracking and status updates',
    ],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
    gradient: 'from-emerald-500/30 via-teal-500/20 to-cyan-500/20',
    featured: false,
  },
  {
    id: 'analytics-suite',
    name: 'Analytics Command Center',
    date: '2024',
    description:
      'A business intelligence dashboard built to visualize metrics, trends, and operational KPIs for stakeholders.',
    technologies: ['React', 'TypeScript', 'Charts', 'Node.js', 'SQL', 'Authentication'],
    features: [
      'Custom KPI dashboards and trend views',
      'Summary cards for sales and engagement metrics',
      'Role-aware access and reporting workflows',
    ],
    githubUrl: 'https://github.com/',
    liveUrl: 'https://example.com/',
    gradient: 'from-amber-500/30 via-orange-500/20 to-red-500/20',
    featured: false,
  },
];

export const achievements = [
  {
    title: 'Problem Solving',
    desc: 'Consistently improving user-facing and backend flows through practical engineering decisions.',
    icon: 'Trophy',
  },
  {
    title: 'Product Delivery',
    desc: 'Shipping polished features with clean implementation and strong attention to maintainability.',
    icon: 'Award',
  },
  {
    title: 'Team Collaboration',
    desc: 'Working effectively across product, design, and engineering to move projects forward.',
    icon: 'Trophy',
  },
  {
    title: 'Continuous Learning',
    desc: 'Keeping pace with modern web tooling and architecture patterns through hands-on work.',
    icon: 'Award',
  },
];

export const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'University / Institute Name',
    year: '2018 — 2022',
    score: 'CGPA / Grade',
  },
  {
    degree: 'Higher Secondary Education',
    institution: 'Board / School Name',
    year: '2016 — 2018',
    score: 'Percentage / Grade',
  },
];

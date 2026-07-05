export const profile = {
  hero: {
    lede:
      "I build backend systems, APIs, and product foundations that feel calm under pressure: reliable data flow, clean contracts, and enough polish to make the whole experience click.",
    stats: [
      { value: "Backend", label: "software engineering" },
      { value: "DLT", label: "distributed systems" },
      { value: "Apps", label: "built and tinkered" },
    ],
  },
  links: {
    email: "fuadsahmawi@gmail.com",
    github: "https://github.com/fuadsahmawi",
    linkedin: "https://www.linkedin.com/in/fuad-sahmawi/",
  },
  signals: [
    { value: "API", label: "contracts" },
    { value: "Ops", label: "mindset" },
    { value: "UX", label: "care" },
  ],
  principles: [
    {
      icon: "api",
      title: "Clear contracts",
      copy: "I like interfaces that explain themselves: predictable inputs, honest errors, and APIs that make integration feel boring in the best way.",
    },
    {
      icon: "systems",
      title: "Systems thinking",
      copy: "Distributed ledgers, sensor pipelines, and full-stack apps all reward the same habit: understand the flow before polishing the surface.",
    },
    {
      icon: "shipping",
      title: "Useful shipping",
      copy: "I care about moving from idea to running product without losing the engineering discipline that makes future work easier.",
    },
  ],
  workflow: [
    {
      icon: "api",
      title: "Design the contract",
      copy: "Start with the data shape, failure modes, and developer experience before committing the implementation.",
    },
    {
      icon: "systems",
      title: "Trace the flow",
      copy: "Make the important path observable and give edge cases names so they can be tested and owned.",
    },
    {
      icon: "craft",
      title: "Polish the handoff",
      copy: "Backend work lands better when the admin screen, logs, docs, or UI around it feels intentional.",
    },
  ],
  interests: [
    {
      kicker: "Motion",
      title: "Go-karting and snowboarding",
      copy: "Both are about reading feedback quickly: grip, speed, balance, and the tiny corrections that make a line feel smooth.",
    },
    {
      kicker: "Workshop",
      title: "App tinkering",
      copy: "I enjoy small experiments that turn a half-formed workflow into something usable, especially when the backend shape is the interesting part.",
    },
    {
      kicker: "Taste",
      title: "Dark mode and sharp tools",
      copy: "I’m drawn to interfaces that feel focused, capable, and low-friction: the kind of software you want to keep open.",
    },
  ],
  skills: [
    {
      kicker: "Core",
      name: "Backend",
      items: ["Java", "Spring", "Node.js", "Express.js", "REST APIs", "SQL"],
    },
    {
      kicker: "Systems",
      name: "Data and infrastructure",
      items: ["PostgreSQL", "Elasticsearch", "Logstash", "Kibana", "ZeroMQ", "Bluetooth systems"],
    },
    {
      kicker: "Product",
      name: "Frontend",
      items: ["React", "Angular", "JavaScript", "HTML", "CSS", "Responsive UI"],
    },
    {
      kicker: "Builder",
      name: "Currently tinkering",
      items: ["API design", "Developer tooling", "App workflows", "Distributed ledgers", "Observability"],
    },
  ],
  projects: [
    {
      name: "Portfolio Web Application",
      type: "Personal platform",
      image: "/images/website.png",
      alt: "Screenshot of Fuad Sahmawi's earlier portfolio website",
      summary:
        "A personal portfolio rebuilt from a simple React site into a sharper platform for engineering work, projects, and personality.",
      outcome:
        "Showcases the same product instinct I bring to backend work: make the surface clean, then make the underlying structure maintainable.",
      stack: ["React", "Vite", "JavaScript", "CSS", "GitHub Pages"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/fuadsahmawi/fuadsahmawi.github.io",
        },
        { label: "Live site", href: "https://fuadsahmawi.github.io" },
      ],
    },
    {
      name: "Mobile Vital Signs Monitoring System",
      type: "Wireless sensor platform",
      image: "/images/mobilevitalsigns.png",
      alt: "Mobile vital signs monitoring system interface",
      summary:
        "A wireless monitoring system connecting bluetooth-enabled vital signs sensors, microcontrollers, and a server-side data pipeline.",
      outcome:
        "Brought together hardware, transport, and search/analytics tooling into one flow for real-time health signal visibility.",
      stack: ["CoffeeScript", "Python", "Elasticsearch", "Logstash", "Kibana", "ZeroMQ"],
      links: [],
    },
    {
      name: "HungryVery",
      type: "Full-stack product",
      image: "/images/hungryvery.png",
      alt: "HungryVery food delivery application interface",
      summary:
        "A food delivery service application covering product flows across users, ordering, data persistence, and web UI.",
      outcome:
        "A practical full-stack build with relational data modeling and the classic product loop from API to browser.",
      stack: ["PostgreSQL", "Express.js", "React", "Node.js", "JavaScript", "SQL"],
      links: [{ label: "GitHub", href: "https://github.com/fuadsahmawi/HungryVery" }],
    },
    {
      name: "Dance Detection",
      type: "Wearable ML system",
      image: "/images/dancedetection.png",
      alt: "Dance detection wearable device project",
      summary:
        "A wearable device system that detects dance moves performed by the wearer using embedded hardware and machine learning.",
      outcome:
        "Connected sensors, edge devices, and classification logic into a compact real-world feedback system.",
      stack: ["Arduino", "Raspberry Pi", "Python", "Machine Learning"],
      links: [
        {
          label: "GitHub",
          href: "https://github.com/fuadsahmawi/cg3002-dance-project",
        },
      ],
    },
    {
      name: "CollegeZone",
      type: "Productivity app",
      image: "/images/collegezone.jpeg",
      alt: "CollegeZone application screenshot",
      summary:
        "An application for Residential College 4 students to manage contacts, goals, and time in one student-focused workspace.",
      outcome:
        "Focused on practical workflows, maintainable Java code, and the small operational details that make an app useful.",
      stack: ["Java", "Travis CI/CD"],
      links: [{ label: "GitHub", href: "https://github.com/fuadsahmawi/main" }],
    },
  ],
  experience: [
    {
      company: "DBS Bank",
      role: "Software Development Specialist",
      period: "Aug 2020 - Present",
      logo: "/images/dbs.jpeg",
      summary:
        "Software engineering work in the Blockchain and Distributed Ledger Technology team.",
      highlights: [
        "Build and maintain backend software in a regulated banking environment.",
        "Work around distributed-ledger systems where reliability, traceability, and clear ownership matter.",
        "Collaborate across technical and product contexts to move complex systems forward.",
      ],
    },
    {
      company: "Rolls-Royce",
      role: "IoT Technologist Intern",
      period: "Jan 2019 - Jun 2019",
      logo: "/images/rolls-royce.png",
      summary:
        "Internship work at the intersection of connected systems, data, and industrial technology.",
      highlights: [
        "Explored IoT workflows and technical prototypes.",
        "Built experience with sensor-adjacent systems and practical engineering constraints.",
      ],
    },
    {
      company: "Singapore Armed Forces",
      role: "Force Sergeant",
      period: "May 2014 - Mar 2016",
      logo: "/images/saf.png",
      summary:
        "National Service leadership experience built around discipline, coordination, and operational responsibility.",
      highlights: [
        "Owned responsibilities in structured, high-accountability environments.",
        "Built habits around clarity, composure, and team coordination.",
      ],
    },
  ],
  education: [
    {
      company: "National University of Singapore",
      role: "Bachelor of Engineering, Honours (Distinction), Computer Engineering",
      period: "2016 - 2020",
      logo: "/images/nus.png",
      summary:
        "Computer engineering foundations across software, systems, and hardware-aware problem solving.",
      highlights: ["Graduated with Honours (Distinction)."],
    },
    {
      company: "Hanyang University",
      role: "Hanyang International Summer School",
      period: "2019",
      logo: "/images/hanyang.png",
      summary:
        "International academic exposure and broader technical perspective through summer study.",
      highlights: [],
    },
    {
      company: "Anglo-Chinese Junior College",
      role: "GCE A Levels, Science",
      period: "2012 - 2013",
      logo: "/images/acjc.png",
      summary: "Pre-university science track and early engineering preparation.",
      highlights: [],
    },
  ],
};

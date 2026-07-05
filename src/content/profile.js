export const profile = {
  hero: {
    lede:
      "I build backend platforms, APIs, and production systems that stay predictable at scale: clean contracts, observable flows, and enough product sense to make the whole thing feel effortless.",
    stats: [
      { value: "Senior", label: "backend engineering" },
      { value: "Go/AWS/K8s", label: "cloud-native systems" },
      { value: "5x / 80%", label: "perf and cost wins" },
    ],
  },
  links: {
    email: "fuadsahmawi@gmail.com",
    github: "https://github.com/fuadsahmawi",
    linkedin: "https://sg.linkedin.com/in/fuad-sahmawi",
  },
  signals: [
    { value: "Go", label: "services" },
    { value: "API", label: "contracts" },
    { value: "Ops", label: "ownership" },
  ],
  principles: [
    {
      icon: "api",
      title: "Contracts before cleverness",
      copy: "I like interfaces that explain themselves: predictable inputs, honest errors, and APIs that make integration feel boring in the best way.",
    },
    {
      icon: "systems",
      title: "Scale with calm",
      copy: "The work I enjoy most sits where traffic, data, teams, and failure modes meet. Name the flow clearly and the system becomes easier to trust.",
    },
    {
      icon: "shipping",
      title: "Ship the useful thing",
      copy: "I care about moving from idea to running product while keeping the engineering discipline that makes the next iteration cheaper.",
    },
  ],
  workflow: [
    {
      icon: "api",
      title: "Design the contract",
      copy: "Start with data shape, RFCs, failure modes, and developer experience before locking in the implementation.",
    },
    {
      icon: "systems",
      title: "Instrument the path",
      copy: "Make the important journey observable with clear metrics, logs, dashboards, and incident learnings.",
    },
    {
      icon: "craft",
      title: "Polish the handoff",
      copy: "Backend work lands better when the admin screen, docs, traces, and team rituals around it feel intentional.",
    },
  ],
  interests: [
    {
      kicker: "Workshop",
      title: "App tinkering",
      copy: "I enjoy small experiments that turn a half-formed workflow into something usable, especially when the backend shape is the interesting part.",
    },
    {
      kicker: "Off-hours",
      title: "Sports and gaming",
      copy: "I like feedback-heavy spaces where timing, composure, and small decisions compound. That shows up in how I debug, build, and iterate too.",
    },
    {
      kicker: "Taste",
      title: "Dark mode and sharp tools",
      copy: "I am drawn to interfaces that feel focused, capable, and low-friction: the kind of software you want to keep open.",
    },
  ],
  skills: [
    {
      kicker: "Core",
      name: "Backend",
      items: ["Go", "Java", "Spring Boot", "REST APIs", "Microservices", "SQL"],
    },
    {
      kicker: "Cloud",
      name: "Infrastructure and deployment",
      items: ["AWS", "Kubernetes", "Docker", "Jenkins", "Terraform", "Lambda"],
    },
    {
      kicker: "Reliability",
      name: "Data and observability",
      items: ["Redis", "NoSQL", "MariaDB", "DynamoDB", "Datadog", "Grafana"],
    },
    {
      kicker: "Product",
      name: "Frontend",
      items: ["React", "Angular", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      kicker: "Builder",
      name: "Currently tinkering",
      items: ["API design", "Developer tooling", "App workflows", "Blockchain", "Observability"],
    },
  ],
  projects: [
    {
      name: "DBS TechTrek Recruitment Platform",
      type: "Hackathon platform",
      image: "/images/hero-systems-command.png",
      alt: "Dark systems dashboard representing a backend event platform",
      summary:
        "Led the technology track for DBS TechTrek and built the candidate API for the annual recruitment hackathon.",
      outcome:
        "Gave candidates and organizers a hosted event flow using AWS API Gateway, Lambda, and DynamoDB.",
      stack: ["JavaScript", "Node.js", "AWS API Gateway", "Lambda", "DynamoDB"],
      links: [],
    },
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
        "A wearable device system that detects dance moves using embedded hardware and machine learning.",
      outcome:
        "Connected sensors, edge devices, and classification logic into a compact real-world feedback system.",
      stack: ["Arduino", "Raspberry Pi", "Python", "Random Forest", "KNN"],
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
        "A desktop app for Residential College 4 students to manage contacts, goals, and schedules in one workspace.",
      outcome:
        "Focused on practical workflows, maintainable Java code, and the small operational details that make an app useful.",
      stack: ["Java", "Travis CI/CD"],
      links: [{ label: "GitHub", href: "https://github.com/fuadsahmawi/main" }],
    },
  ],
  experience: [
    {
      company: "Delivery Hero / foodpanda / foodora / Yemeksepeti",
      role: "Senior Backend Software Engineer, Growth Tribe, Subscriptions & Loyalty",
      period: "Jan 2022 - Present",
      logoText: "DH",
      summary:
        "Backend engineering for global loyalty and subscription platforms across APAC, Europe, and Turkey.",
      highlights: [
        "Architect and scale distributed loyalty microservices serving millions of users globally with Go, AWS, Kubernetes, SQL, NoSQL, and Redis.",
        "Built configurable rewards infrastructure that reduced partner onboarding from 14 days to 1 day.",
        "Standardized API contracts across squads through RFCs, enabling multi-market external rewards integrations.",
        "Improved system performance 5x and reduced observability costs by 80% through database, worker, and logging optimizations.",
        "Own production on-call, incident response, mentoring, and Scrum Master responsibilities across Singapore and Berlin teams.",
      ],
    },
    {
      company: "DBS Bank",
      role: "Software Engineer, Future Ready Technology - Blockchain",
      period: "Aug 2020 - Dec 2021",
      logo: "/images/dbs.jpeg",
      summary:
        "Backend and internal tooling work for DBS Digital Exchange and blockchain-adjacent banking systems.",
      highlights: [
        "Built backend business logic and APIs for a custodian microservice using Java, Spring Boot, SQL, and MariaDB.",
        "Developed an internal operations UI with TypeScript, Angular, Node.js, HTML, and CSS.",
        "Worked in a regulated environment where reliability, traceability, and clear ownership matter.",
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
        "Explored Azure IoT Edge analytics to reduce data transmission costs.",
        "Prototyped a low-cost, low-power USSD communication method for IoT devices.",
        "Analyzed aircraft engine data with Python and practical engineering constraints in mind.",
      ],
    },
    {
      company: "Singapore Armed Forces",
      role: "Platoon Sergeant",
      period: "Apr 2015 - Mar 2016",
      logo: "/images/saf.png",
      summary:
        "National Service leadership experience built around discipline, coordination, and operational responsibility.",
      highlights: [
        "Managed welfare, discipline, and operational needs for roughly 60 Military Police Specialists and Security Troopers.",
        "Built habits around clarity, composure, and team coordination.",
      ],
    },
  ],
  education: [
    {
      company: "National University of Singapore",
      role: "Bachelor of Engineering, Honours with Distinction, Computer Engineering",
      period: "2016 - 2020",
      logo: "/images/nus.png",
      summary:
        "Computer engineering foundations across software, systems, data, and hardware-aware problem solving.",
      highlights: [
        "Graduated with Honours with Distinction and CAP 4.32.",
        "Coursework included software engineering, database systems, RTOS, data structures and algorithms, data science for IoT, probability, and statistics.",
      ],
    },
    {
      company: "NUS Practising Professional Pathway",
      role: "Certificate in Computer Engineering",
      period: "2020",
      logo: "/images/nus.png",
      summary:
        "Professional pathway credential connected to engineering practice and applied technical work.",
      highlights: [],
    },
    {
      company: "University at Buffalo",
      role: "Blockchain Specialization",
      period: "Credential",
      logoText: "UB",
      summary:
        "Focused credential covering blockchain foundations and smart-contract-adjacent systems thinking.",
      highlights: [],
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
  ],
};

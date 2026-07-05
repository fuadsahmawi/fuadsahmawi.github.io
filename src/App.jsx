import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  CodePanel,
  ContactPanel,
  FeatureCard,
  Footer,
  Layout,
  PageHeader,
  ProjectCard,
  Section,
  SkillCluster,
  TimelineItem,
} from "./components.jsx";
import { profile } from "./content/profile.js";

const pageTitles = {
  skills: {
    eyebrow: "Tech stack",
    title: "Tools for dependable systems and fast product loops.",
    summary:
      "A backend-first stack with enough frontend range to turn infrastructure ideas into usable products.",
  },
  portfolio: {
    eyebrow: "Selected work",
    title: "Projects shaped by APIs, systems thinking, and practical product polish.",
    summary:
      "From distributed-ledger systems to full-stack products and sensor platforms, the through-line is turning complex moving parts into something people can use.",
  },
  career: {
    eyebrow: "Experience",
    title: "Engineering across banking, distributed ledgers, IoT, and operational leadership.",
    summary:
      "A career path grounded in reliable software, cross-functional delivery, and calm ownership of high-stakes systems.",
  },
  education: {
    eyebrow: "Education",
    title: "Computer engineering foundations with a product-builder mindset.",
    summary:
      "Formal engineering training, international exposure, and a bias toward building things that work outside the classroom.",
  },
  contact: {
    eyebrow: "Contact",
    title: "Bring me a hard backend problem, a product idea, or something worth tinkering on.",
    summary:
      "I am most excited by dependable APIs, distributed systems, developer tooling, and apps that turn messy workflows into clean experiences.",
  },
};

function App({ page }) {
  return (
    <Layout>
      {page === "home" && <HomePage />}
      {page === "skills" && <SkillsPage />}
      {page === "portfolio" && <PortfolioPage />}
      {page === "career" && <CareerPage />}
      {page === "education" && <EducationPage />}
      {page === "contact" && <ContactPage />}
      <Footer />
    </Layout>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Section
        id="identity"
        eyebrow="Backend-first"
        title="I like the quiet parts of software that make everything else feel instant."
        summary="The APIs, queues, databases, contracts, and operational habits that keep products dependable are where I naturally lean in."
      >
        <div className="feature-grid">
          {profile.principles.map((principle) => (
            <FeatureCard key={principle.title} {...principle} />
          ))}
        </div>
      </Section>
      <Section
        id="workbench"
        eyebrow="Builder energy"
        title="Outside production systems, I keep the same appetite for speed, feel, and craft."
        summary="Go-karting, snowboarding, and tinkering with apps all scratch the same itch: feedback, control, iteration, and a little bit of nerve."
      >
        <div className="split-showcase">
          <div className="showcase-media">
            <img
              src="/images/tinkering-adventure.png"
              alt="Dark maker desk with a laptop, hardware board, racing glove, and snowboard details"
            />
          </div>
          <div className="interest-stack">
            {profile.interests.map((interest) => (
              <div className="interest-item" key={interest.title}>
                <span>{interest.kicker}</span>
                <h3>{interest.title}</h3>
                <p>{interest.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
      <Section
        id="selected-work"
        eyebrow="Selected work"
        title="A few systems and products from the workshop."
        summary="Each project has a different surface area, but the interesting work sits in data flow, reliability, and the handoff between people and systems."
      >
        <div className="project-grid">
          {profile.projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <div className="section-action">
          <Link className="button secondary" to="/portfolio">
            See all projects
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </Section>
    </>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-background" aria-hidden="true">
        <img src="/images/hero-engineering.png" alt="" />
      </div>
      <div className="hero-content">
        <div className="hero-copy">
          <div className="status-pill">
            <span className="status-dot" />
            Backend software engineer
          </div>
          <h1 id="hero-title">Fuad Sahmawi</h1>
          <p className="hero-lede">{profile.hero.lede}</p>
          <div className="hero-actions" aria-label="Primary actions">
            <Link className="button primary" to="/portfolio">
              View work
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button secondary" to="/contact">
              Contact
              <Mail size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-meta" aria-label="Profile highlights">
            {profile.hero.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <CodePanel />
      </div>
    </section>
  );
}

function SkillsPage() {
  return (
    <main>
      <PageHeader {...pageTitles.skills} />
      <Section
        id="skills"
        eyebrow="Capability map"
        title="Built around backend fundamentals, with enough product range to ship the whole loop."
      >
        <div className="skills-grid">
          {profile.skills.map((cluster) => (
            <SkillCluster key={cluster.name} cluster={cluster} />
          ))}
        </div>
      </Section>
      <Section
        id="tooling"
        eyebrow="How I work"
        title="Strong systems start with clear contracts and observable behavior."
        summary="I like small feedback loops: sketch the API, test the flow, instrument the critical path, and make the unhappy paths readable."
      >
        <div className="feature-grid compact">
          {profile.workflow.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>
      </Section>
    </main>
  );
}

function PortfolioPage() {
  return (
    <main>
      <PageHeader {...pageTitles.portfolio} />
      <Section
        id="projects"
        eyebrow="Case studies"
        title="Backend instincts, product surfaces, and hardware edges."
      >
        <div className="project-grid all-projects">
          {profile.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Section>
    </main>
  );
}

function CareerPage() {
  return (
    <main>
      <PageHeader {...pageTitles.career} />
      <Section
        id="career"
        eyebrow="Timeline"
        title="From engineering foundations to production software ownership."
      >
        <div className="timeline">
          {profile.experience.map((item) => (
            <TimelineItem key={item.company} item={item} />
          ))}
        </div>
      </Section>
    </main>
  );
}

function EducationPage() {
  return (
    <main>
      <PageHeader {...pageTitles.education} />
      <Section
        id="education"
        eyebrow="Learning"
        title="Engineering fundamentals, international perspective, and early technical curiosity."
      >
        <div className="timeline">
          {profile.education.map((item) => (
            <TimelineItem key={item.company} item={item} />
          ))}
        </div>
      </Section>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <PageHeader {...pageTitles.contact} />
      <Section
        id="contact"
        eyebrow="Open loop"
        title="A good conversation starts with a clear problem and a little curiosity."
      >
        <div className="contact-layout">
          <ContactPanel />
          <aside className="contact-card" aria-label="Contact links">
            <div>
              <p className="eyebrow">Find me</p>
              <h2>Signal over noise.</h2>
              <p>
                Send a note about backend systems, developer tools, app ideas,
                or a problem that needs calm technical ownership.
              </p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${profile.links.email}`}>
                <Mail size={18} aria-hidden="true" />
                {profile.links.email}
              </a>
              <a href={profile.links.github}>
                <Github size={18} aria-hidden="true" />
                GitHub
              </a>
              <a href={profile.links.linkedin}>
                <Linkedin size={18} aria-hidden="true" />
                LinkedIn
              </a>
              <span>
                <MapPin size={18} aria-hidden="true" />
                Singapore
              </span>
            </div>
          </aside>
        </div>
      </Section>
    </main>
  );
}

export default App;

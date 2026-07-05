import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Cpu,
  Github,
  GraduationCap,
  Home,
  Linkedin,
  Mail,
  Menu,
  PanelsTopLeft,
  Send,
  Sparkles,
  TerminalSquare,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { profile } from "./content/profile.js";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/skills", label: "Skills", icon: Code2 },
  { to: "/portfolio", label: "Work", icon: PanelsTopLeft },
  { to: "/career", label: "Career", icon: BriefcaseBusiness },
  { to: "/education", label: "Education", icon: GraduationCap },
  { to: "/contact", label: "Contact", icon: Mail },
];

export function Layout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">FS</span>
          <span>fuadsahmawi</span>
        </NavLink>
        <button
          className="icon-button menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              <Icon size={16} aria-hidden="true" />
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      {children}
    </div>
  );
}

export function Section({ id, eyebrow, title, summary, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`}>{title}</h2>
        {summary ? <p>{summary}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function PageHeader({ eyebrow, title, summary }) {
  return (
    <section className="page-header">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{summary}</p>
    </section>
  );
}

export function FeatureCard({ title, copy, icon }) {
  const Icon = iconMap[icon] ?? Sparkles;

  return (
    <article className="feature-card">
      <div className="feature-icon" aria-hidden="true">
        <Icon size={20} />
      </div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  );
}

export function SkillCluster({ cluster }) {
  return (
    <article className="skill-card">
      <div className="skill-card-header">
        <p className="eyebrow">{cluster.kicker}</p>
        <h2>{cluster.name}</h2>
      </div>
      <div className="tag-cloud">
        {cluster.items.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-media">
        <img src={project.image} alt={project.alt} loading="lazy" />
      </div>
      <div className="project-body">
        <div>
          <p className="eyebrow">{project.type}</p>
          <h2>{project.name}</h2>
          <p>{project.summary}</p>
        </div>
        <div className="tag-cloud">
          {project.stack.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>
        <p className="project-outcome">{project.outcome}</p>
        <div className="card-links">
          {project.links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export function TimelineItem({ item }) {
  return (
    <article className="timeline-item">
      <div className="timeline-logo">
        <img src={item.logo} alt="" loading="lazy" />
      </div>
      <div className="timeline-body">
        <p className="eyebrow">{item.period}</p>
        <h2>{item.company}</h2>
        <h3>{item.role}</h3>
        <p>{item.summary}</p>
        {item.highlights?.length ? (
          <ul>
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}

export function CodePanel() {
  const lines = [
    "const builder = {",
    "  focus: 'backend systems',",
    "  mode: ['ship', 'observe', 'iterate'],",
    "  happyPlace: 'clean APIs + useful apps',",
    "};",
  ];

  return (
    <aside className="code-panel" aria-label="Backend engineering summary">
      <div className="code-panel-top">
        <span />
        <span />
        <span />
        <strong>system.profile</strong>
      </div>
      <pre>
        {lines.map((line, index) => (
          <code key={line}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {line}
          </code>
        ))}
      </pre>
      <div className="signal-grid">
        {profile.signals.map((signal) => (
          <div key={signal.label}>
            <strong>{signal.value}</strong>
            <span>{signal.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export function ContactPanel() {
  const [state, setState] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const hasEmailJs = useMemo(
    () =>
      Boolean(
        import.meta.env.VITE_EMAILJS_SERVICE_ID &&
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ),
    []
  );

  async function handleSubmit(event) {
    event.preventDefault();
    setState("sending");

    if (hasEmailJs) {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form,
          { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
        );
        setState("sent");
        setForm({ name: "", email: "", message: "" });
        return;
      } catch (error) {
        setState("fallback");
      }
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.links.email}?subject=${subject}&body=${body}`;
    setState("fallback");
  }

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          required
          autoComplete="name"
          value={form.name}
          onChange={(event) => updateField("name", event.target.value)}
        />
      </label>
      <label>
        <span>Email</span>
        <input
          required
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(event) => updateField("email", event.target.value)}
        />
      </label>
      <label>
        <span>Message</span>
        <textarea
          required
          rows="7"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </label>
      <button className="button primary" type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending" : "Send message"}
        <Send size={18} aria-hidden="true" />
      </button>
      <p className="form-status" role="status">
        {state === "sent" && "Message sent."}
        {state === "fallback" && "Opening your email client."}
      </p>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>Fuad Sahmawi</strong>
        <span>Backend software engineer, app tinkerer, dark-mode enjoyer.</span>
      </div>
      <div className="footer-links">
        <a href={profile.links.github} aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href={profile.links.linkedin} aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href={`mailto:${profile.links.email}`} aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
    </footer>
  );
}

const iconMap = {
  api: TerminalSquare,
  systems: Cpu,
  shipping: Send,
  craft: Sparkles,
};

import { useEffect, useMemo, useRef, useState } from "react";
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
import { NavLink, useLocation } from "react-router-dom";
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

function useRevealAnimations(trigger) {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    let observer;
    let frame;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    elements.forEach((element) => element.classList.remove("is-visible"));

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.14 }
    );

    frame = requestAnimationFrame(() => {
      elements.forEach((element) => observer.observe(element));
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [trigger]);
}

function useScrollToTop(trigger) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [trigger]);
}

export function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useScrollToTop(pathname);
  useRevealAnimations(pathname);

  return (
    <div className="site-shell">
      <header className="site-header">
        <NavLink className="brand" to="/" onClick={() => setOpen(false)}>
          <img className="brand-mark" src="/favicon.svg" alt="" width="34" height="34" />
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
    <section className="section reveal" id={id} aria-labelledby={`${id}-title`}>
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
    <section className="page-header reveal">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{summary}</p>
    </section>
  );
}

export function FeatureCard({ title, copy, icon }) {
  const Icon = iconMap[icon] ?? Sparkles;

  return (
    <article className="feature-card reveal">
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
    <article className="skill-card reveal">
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
    <article className="project-card reveal">
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
    <article className="timeline-item reveal">
      <div className="timeline-logo">
        {item.logo ? (
          <img src={item.logo} alt="" loading="lazy" />
        ) : (
          <span>{item.logoText ?? item.company.slice(0, 2)}</span>
        )}
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
    "const platform = {",
    "  tribe: 'Subscriptions & Loyalty',",
    "  stack: ['Go', 'AWS', 'Kubernetes', 'Redis'],",
    "  mode: ['scale', 'observe', 'mentor'],",
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

const cubeFaces = ["front", "back", "right", "left", "top", "bottom"];
const meshCubelets = new Set([2, 8, 15, 21, 26]);
const sheenCubelets = new Set([4, 12, 19, 25]);

const cubelets = [];
for (let x = -1; x <= 1; x += 1) {
  for (let y = -1; y <= 1; y += 1) {
    for (let z = -1; z <= 1; z += 1) {
      if (x === 0 && y === 0 && z === 0) continue;
      const seed = (x + 1) * 9 + (y + 1) * 3 + (z + 1);
      const finish = meshCubelets.has(seed) ? "mesh" : sheenCubelets.has(seed) ? "sheen" : "";
      cubelets.push({ x, y, z, seed, finish });
    }
  }
}

function steadyTransform({ x, y, z }, rot = "") {
  return `translate3d(calc(${x} * var(--cube-step)), calc(${y} * var(--cube-step)), calc(${z} * var(--cube-step))) ${rot}`;
}

// Coordinate permutations matching CSS rotateX/Y/Z(±90deg), so a finished
// twist can snap back to an untwisted transform without a visible jump.
function rotateCoords({ x, y, z }, axis, dir) {
  if (axis === "x") return dir > 0 ? { x, y: -z, z: y } : { x, y: z, z: -y };
  if (axis === "y") return dir > 0 ? { x: z, y, z: -x } : { x: -z, y, z: x };
  return dir > 0 ? { x: -y, y: x, z } : { x: y, y: -x, z };
}

const twistMoves = [
  { axis: "y", layer: -1, dir: 1 },
  { axis: "x", layer: 1, dir: -1 },
  { axis: "z", layer: 1, dir: 1 },
  { axis: "y", layer: 1, dir: -1 },
  { axis: "x", layer: -1, dir: 1 },
  { axis: "z", layer: -1, dir: -1 },
];

const twistDuration = 900;
const twistPause = 1900;

export function SystemsCube() {
  const cubeRef = useRef(null);
  const cubeletRefs = useRef([]);

  useEffect(() => {
    const cube = cubeRef.current;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!cube || !canHover || reducedMotion) return undefined;

    cube.classList.add("follow");
    const base = { x: -18, y: 33 };
    const current = { ...base };
    const target = { ...base };
    let frame;

    function onPointerMove(event) {
      const nx = event.clientX / window.innerWidth - 0.5;
      const ny = event.clientY / window.innerHeight - 0.5;
      target.y = base.y + nx * 95;
      target.x = base.x - ny * 52;
    }

    function tick() {
      current.x += (target.x - current.x) * 0.11;
      current.y += (target.y - current.y) * 0.11;
      cube.style.transform = `rotateX(${current.x}deg) rotateY(${current.y}deg)`;
      frame = requestAnimationFrame(tick);
    }

    window.addEventListener("pointermove", onPointerMove);
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(frame);
      cube.classList.remove("follow");
      cube.style.transform = "";
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return undefined;

    // Each cubelet keeps its grid position plus an accumulated orientation string,
    // so the finish and per-face shading travel with the piece like real stickers.
    const state = cubelets.map(({ x, y, z }) => ({ x, y, z, rot: "" }));
    let moveIndex = 0;
    let frame;
    let timer;

    function apply(index, lead = "") {
      const element = cubeletRefs.current[index];
      const item = state[index];
      if (element) {
        element.style.transform = `${lead}${steadyTransform(item, item.rot)}`;
      }
    }

    function runTwist() {
      const move = twistMoves[moveIndex % twistMoves.length];
      moveIndex += 1;
      const members = [];
      state.forEach((item, index) => {
        if (item[move.axis] === move.layer) members.push(index);
      });
      const axisName = move.axis.toUpperCase();
      const start = performance.now();

      function step(now) {
        const t = Math.min((now - start) / twistDuration, 1);
        const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const angle = 90 * move.dir * eased;

        if (t < 1) {
          members.forEach((index) => apply(index, `rotate${axisName}(${angle}deg) `));
          frame = requestAnimationFrame(step);
        } else {
          members.forEach((index) => {
            const item = state[index];
            const rotated = rotateCoords(item, move.axis, move.dir);
            item.x = rotated.x;
            item.y = rotated.y;
            item.z = rotated.z;
            item.rot = `rotate${axisName}(${90 * move.dir}deg) ${item.rot}`;
            apply(index);
          });
          timer = setTimeout(runTwist, twistPause);
        }
      }

      frame = requestAnimationFrame(step);
    }

    timer = setTimeout(runTwist, 1500);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      cubelets.forEach((coord, index) => {
        const element = cubeletRefs.current[index];
        if (element) element.style.transform = steadyTransform(coord);
      });
    };
  }, []);

  return (
    <aside className="systems-cube-card reveal" aria-label="Interactive systems cube">
      <div className="cube-stage" aria-hidden="true">
        <div className="systems-cube" ref={cubeRef}>
          {cubelets.map(({ x, y, z, seed, finish }, index) => (
            <div
              className={finish ? `cubelet ${finish}` : "cubelet"}
              key={seed}
              ref={(element) => {
                cubeletRefs.current[index] = element;
              }}
              style={{ transform: steadyTransform({ x, y, z }) }}
            >
              {cubeFaces.map((face) => (
                <span className={`cf cf-${face}`} key={face} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="eyebrow">Systems in motion</p>
        <h2>Composable backend pieces, tuned until they feel simple.</h2>
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
    <form className="contact-form reveal" onSubmit={handleSubmit}>
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
    <footer className="site-footer reveal">
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

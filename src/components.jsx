import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { profile } from "./content/profile.js";
import { Scramble } from "./effects.jsx";

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function useRevealAnimations() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

// The active section is the last one whose top has crossed 40% of the viewport,
// or the final section once the page is scrolled to the bottom.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame;

    function measure() {
      frame = undefined;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }
      const line = window.innerHeight * 0.4;
      let current = ids[0];
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= line) current = id;
      });
      setActive(current);
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(measure);
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return active;
}

export function Spotlight() {
  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return undefined;

    const root = document.documentElement;
    function onPointerMove(event) {
      root.style.setProperty("--spot-x", `${event.clientX}px`);
      root.style.setProperty("--spot-y", `${event.clientY}px`);
    }

    root.classList.add("has-spotlight");
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      root.classList.remove("has-spotlight");
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <div className="spotlight" aria-hidden="true" />;
}

export function SectionNav({ active }) {
  return (
    <nav className="section-nav" aria-label="Sections">
      <ol>
        {sections.map(({ id, label }, index) => (
          <li key={id} className="intro-anim" style={{ "--d": index + 3 }}>
            <a
              href={`#${id}`}
              className={active === id ? "active" : undefined}
              aria-current={active === id ? "true" : undefined}
            >
              <span className="nav-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="nav-line" aria-hidden="true" />
              <Scramble className="nav-label" text={label} trigger="hover" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

const timeFormat = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Singapore",
  hour: "2-digit",
  minute: "2-digit",
});

export function LocalTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="local-time">
      <span className="pulse" aria-hidden="true" />
      Singapore <span className="mono">{timeFormat.format(now)} SGT</span>
    </p>
  );
}

export function Socials() {
  const items = [
    { href: profile.links.github, label: "GitHub", icon: Github },
    { href: profile.links.linkedin, label: "LinkedIn", icon: Linkedin },
    { href: `mailto:${profile.links.email}`, label: "Email", icon: Mail },
  ];

  return (
    <ul className="socials">
      {items.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <a href={href} aria-label={label} title={label} data-magnetic>
            <Icon size={18} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Section({ id, index, label, children }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-label`}>
      <h2 className="section-label" id={`${id}-label`}>
        <span className="mono">{String(index).padStart(2, "0")}</span>
        <Scramble text={label} />
      </h2>
      {children}
    </section>
  );
}

function Chips({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="chips" aria-label="Technologies">
      {items.map((item, index) => (
        <li key={item} style={{ "--i": index }}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function TimelineRow({ item }) {
  const [start, end] = item.period.split(" - ");

  return (
    <li className="row reveal">
      <p className="row-meta mono">
        <span>{start}</span>
        {end ? <span>– {end}</span> : null}
      </p>
      <div className="row-body">
        <div className="row-title">
          {item.logo ? <img className="row-logo" src={item.logo} alt="" loading="lazy" /> : null}
          <div>
            <h3>{item.role}</h3>
            <p className="row-org">{item.company}</p>
          </div>
        </div>
        <p>{item.summary}</p>
        {item.highlights?.length ? (
          <ul className="bullets">
            {item.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        ) : null}
        <Chips items={item.stack} />
      </div>
    </li>
  );
}

export function ProjectRow({ project }) {
  const [primary, ...secondary] = project.links;

  return (
    <li className="row project-row reveal" data-tilt>
      <span className="glare" aria-hidden="true" />
      <div className="project-thumb">
        <img src={project.image} alt={project.alt} loading="lazy" />
      </div>
      <div className="row-body">
        <p className="row-kicker mono">{project.type}</p>
        <h3>
          <a className="stretched" href={primary.href}>
            {project.name}
            <ArrowUpRight className="nudge" size={16} aria-hidden="true" />
          </a>
        </h3>
        <p>{project.summary}</p>
        <p className="row-outcome">{project.outcome}</p>
        {secondary.length ? (
          <ul className="inline-links">
            {secondary.map((link) => (
              <li key={link.href}>
                <a href={link.href}>
                  {link.label}
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        ) : null}
        <Chips items={project.stack} />
      </div>
    </li>
  );
}

export function StackRow({ cluster }) {
  return (
    <li className="stack-row reveal">
      <div>
        <p className="row-kicker mono">{cluster.kicker}</p>
        <h3>{cluster.name}</h3>
      </div>
      <Chips items={cluster.items} />
    </li>
  );
}

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.links.email);
      setCopied(true);
    } catch (error) {
      window.location.href = `mailto:${profile.links.email}`;
    }
  }

  return (
    <button className="button primary" type="button" onClick={copy} data-magnetic>
      {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Copied to clipboard" : profile.links.email}</span>
    </button>
  );
}

export function ContactForm() {
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
      <div className="field-pair">
        <label>
          <span>Name</span>
          <input
            required
            autoComplete="name"
            placeholder="Ada Lovelace"
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
            placeholder="ada@example.com"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </label>
      </div>
      <label>
        <span>Message</span>
        <textarea
          required
          rows="5"
          placeholder="What are you building?"
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
        />
      </label>
      <div className="form-foot">
        <p className="form-status" role="status">
          {state === "sent" && "Message sent. Thanks!"}
          {state === "fallback" && "Opening your email client."}
        </p>
        <button
          className="button secondary"
          type="submit"
          disabled={state === "sending"}
          data-magnetic
        >
          {state === "sending" ? "Sending" : "Send message"}
          <Send size={15} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}

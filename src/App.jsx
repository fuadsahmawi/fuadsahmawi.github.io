import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  ContactForm,
  CopyEmail,
  LocalTime,
  ProjectRow,
  Section,
  SectionNav,
  Socials,
  Spotlight,
  StackRow,
  TimelineRow,
  sections,
  useActiveSection,
  useRevealAnimations,
} from "./components.jsx";
import { profile } from "./content/profile.js";

const sectionIds = sections.map((section) => section.id);
const sectionIndex = Object.fromEntries(sectionIds.map((id, index) => [id, index + 1]));

function App() {
  const { hash } = useLocation();
  const active = useActiveSection(sectionIds);
  useRevealAnimations();

  // Legacy routes redirect here with a hash; jump to that section on load.
  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView();
  }, []);

  return (
    <div className="shell">
      <Spotlight />
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <div className="layout">
        <header className="intro">
          <div>
            <a className="brand" href="#top" aria-label="Back to top">
              <img src="/favicon.svg" alt="" width="40" height="40" />
            </a>
            <h1 id="top">Fuad Sahmawi</h1>
            <p className="intro-role">
              {profile.hero.role} <span>at {profile.hero.org}</span>
            </p>
            <p className="intro-tagline">{profile.hero.tagline}</p>
            <SectionNav active={active} />
          </div>
          <div className="intro-foot">
            <Socials />
            <LocalTime />
          </div>
        </header>

        <main id="content">
          <Section id="about" index={sectionIndex.about} label="About">
            <div className="prose reveal">
              {profile.about.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <dl className="metrics reveal">
              {profile.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt>{metric.label}</dt>
                  <dd>{metric.value}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="experience" index={sectionIndex.experience} label="Experience">
            <ol className="rows">
              {profile.experience.map((item) => (
                <TimelineRow key={item.company} item={item} />
              ))}
            </ol>
            <a className="text-link reveal" href={profile.links.linkedin}>
              Full history on LinkedIn
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </Section>

          <Section id="work" index={sectionIndex.work} label="Selected work">
            <ol className="rows">
              {profile.projects.map((project) => (
                <ProjectRow key={project.name} project={project} />
              ))}
            </ol>
            <a className="text-link reveal" href={profile.links.github}>
              More on GitHub
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </Section>

          <Section id="stack" index={sectionIndex.stack} label="Stack">
            <ul className="stack-list">
              {profile.skills.map((cluster) => (
                <StackRow key={cluster.name} cluster={cluster} />
              ))}
            </ul>
          </Section>

          <Section id="education" index={sectionIndex.education} label="Education">
            <ol className="rows">
              {profile.education.map((item) => (
                <TimelineRow key={item.company + item.role} item={item} />
              ))}
            </ol>
          </Section>

          <Section id="contact" index={sectionIndex.contact} label="Contact">
            <div className="contact-intro reveal">
              <p className="contact-heading">
                Bring me a hard backend problem, a product idea, or something worth tinkering on.
              </p>
              <p>
                I'm most excited by dependable APIs, loyalty and growth systems, developer tooling,
                and apps that turn messy workflows into clean experiences.
              </p>
              <CopyEmail />
            </div>
            <ContactForm />
          </Section>

          <footer className="colophon">
            <p>
              Designed and built by Fuad Sahmawi with React and Vite. Set in Geist, deployed on
              GitHub Pages.
            </p>
            <p className="mono">© {new Date().getFullYear()}</p>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;

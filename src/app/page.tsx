import Image from "next/image";
import { CopyEmail } from "./copy-email";

const projects = [
  {
    number: "001",
    name: "No Charisma",
    category: "Identity system",
    status: "Ongoing",
    year: "2026",
    description:
      "The house system for an independent idea factory. Built to hold tools, objects, writing and unresolved experiments without becoming polite.",
  },
  {
    number: "002",
    name: "Thoughts of a Mad Man",
    category: "Editorial project",
    status: "In development",
    year: "2026",
    description:
      "A written archive for observations too specific to become content and too persistent to stay private.",
  },
  {
    number: "003",
    name: "Few Small Wines",
    category: "Brand experiment",
    status: "Prototype",
    year: "2026",
    description:
      "A compact identity study for small-run drinking occasions, labels, rituals and the social machinery around them.",
  },
  {
    number: "004",
    name: "Panda Studio",
    category: "Application",
    status: "In development",
    year: "2026",
    description:
      "A practical tool concept for turning rough creative material into something structured enough to use.",
  },
  {
    number: "005",
    name: "Voice to Music",
    category: "Application",
    status: "In development",
    year: "2026",
    description:
      "A mobile music tool for singing a rough idea into a phone and turning the vocal sketch into a structured track.",
  },
  {
    number: "006",
    name: "Wardrobe Audit",
    category: "AI tool",
    status: "Prototype",
    year: "2026",
    description:
      "A style system that reviews a clothing wardrobe, identifies missing pieces and turns taste into a practical shopping brief.",
  },
];

const process = [
  {
    label: "Notice",
    copy: "Catch the thing that keeps annoying the room.",
  },
  {
    label: "Interrogate",
    copy: "Pull the useful tension out of the noise.",
  },
  {
    label: "Make",
    copy: "Build the smallest honest version.",
  },
  {
    label: "Break",
    copy: "Find where the concept starts performing.",
  },
  {
    label: "Release / archive",
    copy: "Ship it, shelve it, or keep the evidence.",
  },
];

const principles = [
  "Make the thing.",
  "Remove the performance.",
  "Test it in public.",
  "Useful is good. Interesting also counts.",
  "No fake urgency.",
  "No innovation theatre.",
  "Archive the failures.",
];

const capabilities = [
  "Digital products",
  "Identities",
  "Tools",
  "Applications",
  "Objects",
  "Experiments",
];

function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "No Charisma",
    url: "https://www.nocharisma.com",
    description:
      "No Charisma is an independent idea factory making digital products, identities, tools and experiments.",
    inLanguage: "en",
    email: "hello@nocharisma.com",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main id="main-content">
      <StructuredData />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header" aria-label="No Charisma site header">
        <a className="identity" href="#top" aria-label="No Charisma home">
          <span className="identity-mark" aria-hidden="true">
            <Image
              src="/brand/nc-mark.svg"
              alt=""
              width={96}
              height={96}
              priority
            />
          </span>
          <span className="identity-text">
            No Charisma
            <small>Independent Idea Factory</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#factory">Factory</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#work">Work</a>
            <a href="#factory">Factory</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-system">
            <p className="eyebrow">NC_IF / Launch index / active draft</p>
            <h1 id="hero-title">
              Ideas with no business existing. Made anyway.
            </h1>
            <p className="lede">
              No Charisma is an independent idea factory making digital
              products, identities, tools and experiments. Some useful. Some
              questionable. All deliberate.
            </p>

            <div className="hero-actions" aria-label="Primary actions">
              <a className="button button-primary" href="#work">
                View the work
              </a>
              <a className="button button-secondary" href="mailto:hello@nocharisma.com">
                Start with email
              </a>
            </div>
          </div>

          <aside className="hero-specimen" aria-label="No Charisma logo specimen">
            <div className="specimen-topline">
              <span>Factory mark</span>
              <span>2026 / unresolved</span>
            </div>
            <div className="specimen-logo">
              <Image
                src="/brand/nc-mark.svg"
                alt="No Charisma logo mark"
                width={1536}
                height={1536}
                priority
              />
            </div>
            <dl className="specimen-meta">
              <div>
                <dt>Position</dt>
                <dd>Independent Idea Factory</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Active / unfinished on purpose</dd>
              </div>
              <div>
                <dt>Output</dt>
                <dd>Products, identities, tools, objects, research</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="capability-strip" aria-label="No Charisma capabilities">
        {capabilities.map((capability) => (
          <span key={capability}>{capability}</span>
        ))}
      </section>

      <section className="section manifesto" aria-labelledby="manifesto-title">
        <div className="section-label">
          <span>00</span>
          <span>Operating note</span>
        </div>
        <div className="manifesto-copy">
          <h2 id="manifesto-title">The factory is small. The standards are not.</h2>
          <p>
            No Charisma is a working practice for turning loose observations
            into tangible things. Ideas enter without a business case. They
            leave as products, identities, tools, publications, prototypes, or
            evidence that the idea should have stayed loose.
          </p>
        </div>
      </section>

      <section className="section work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div className="section-label">
            <span>01</span>
            <span>Selected work</span>
          </div>
          <div>
            <h2 id="work-title">An index, not a trophy shelf.</h2>
            <p>
              Current work is shown honestly: experiments, prototypes, ongoing
              systems and things still earning the right to become public.
            </p>
          </div>
        </div>

        <div className="project-index">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>
              <div className="project-title">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <dl className="project-meta">
                <div>
                  <dt>Category</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{project.status}</dd>
                </div>
                <div>
                  <dt>Year</dt>
                  <dd>{project.year}</dd>
                </div>
              </dl>
              <span className="project-link" aria-label={`${project.name} is ${project.status}`}>
                {project.status}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="section factory-section" id="factory" aria-labelledby="factory-title">
        <div className="factory-intro">
          <div className="section-label">
            <span>02</span>
            <span>The idea factory</span>
          </div>
          <h2 id="factory-title">A system for things that refuse to stay theoretical.</h2>
        </div>

        <ol className="process-list" aria-label="Factory process">
          {process.map((step, index) => (
            <li key={step.label}>
              <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.label}</strong>
              <p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section principles-section" aria-labelledby="principles-title">
        <div className="section-heading compact">
          <div className="section-label">
            <span>03</span>
            <span>Operating principles</span>
          </div>
          <h2 id="principles-title">Rules for staying useful.</h2>
        </div>

        <ul className="principle-grid">
          {principles.map((principle, index) => (
            <li key={principle}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{principle}</strong>
            </li>
          ))}
        </ul>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-label">
          <span>04</span>
          <span>About</span>
        </div>
        <div className="about-copy">
          <h2 id="about-title">Small by choice. Restless by design.</h2>
          <p>
            No Charisma is an independent creative practice and idea factory
            working across design, technology and everyday problems. It builds
            its own projects, collaborates selectively and documents the
            process.
          </p>
        </div>
        <figure className="brand-artifact">
          <Image
            src="/brand/no-charisma-hand-logo.webp"
            alt="Early No Charisma hand-drawn logo artwork"
            width={1536}
            height={1024}
            loading="eager"
          />
          <figcaption>Early mark / useful mess retained</figcaption>
        </figure>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="section-label">
          <span>05</span>
          <span>Contact</span>
        </div>
        <h2 id="contact-title">
          Have a useful problem, a strange idea or something half-built?
        </h2>
        <p>
          Send the thing before it becomes a presentation. The rough edge is
          usually the point.
        </p>
        <CopyEmail />
      </section>

      <footer className="site-footer">
        <div>
          <strong>No Charisma</strong>
          <span>Independent Idea Factory</span>
        </div>
        <div>
          <span>{year}</span>
          <a href="#top">Back to top</a>
        </div>
      </footer>
    </main>
  );
}

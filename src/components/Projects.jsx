import { useReveal } from '../hooks/useReveal.js'
import { projects } from '../data/projects.js'

const GithubIcon = (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.66.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
  </svg>
)

const ExternalIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

function Cover({ project }) {
  if (project.image) {
    return <img src={project.image} alt={project.title} loading="lazy" />
  }
  // Auto-generated terminal-style cover shown until a screenshot is added
  return (
    <div className="project-card__cover-fallback" aria-hidden="true">
      <div className="fake-terminal">
        <div className="fake-terminal__bar">
          <span />
          <span />
          <span />
        </div>
        <pre className="fake-terminal__body mono">
          {`$ git clone ${project.title.toLowerCase().replace(/\s+/g, '-')}\n$ npm run build\n> done ✓`}
        </pre>
      </div>
    </div>
  )
}

function ProjectCard({ project, lang, t }) {
  // Cover and title point to the demo when available, otherwise the repo;
  // the action buttons below let the visitor pick either destination.
  const primary = project.demo || project.github

  return (
    <article className="card project-card">
      <a
        className="project-card__cover"
        href={primary}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Cover project={project} />
      </a>

      <div className="project-card__body">
        <h3 className="project-card__title">
          <a href={primary} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>
        <p className="project-card__desc">{project.description[lang]}</p>
        <ul className="project-card__tags">
          {project.tags.map((tag) => (
            <li key={tag} className="chip mono">
              {tag}
            </li>
          ))}
        </ul>
        <div className="project-card__actions">
          {project.github && (
            <a
              className="action-link"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${t.projects.code}`}
            >
              {GithubIcon}
              <span>{t.projects.code}</span>
            </a>
          )}
          {project.demo && (
            <a
              className="action-link action-link--primary"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} — ${t.projects.demo}`}
            >
              {ExternalIcon}
              <span>{t.projects.demo}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects({ t, lang }) {
  const ref = useReveal()

  return (
    <section id="projects" className="section">
      <div className="container reveal" ref={ref}>
        <h2 className="section__title">
          <span className="mono accent">03.</span> {t.projects.title}
        </h2>
        <p className="section__subtitle">{t.projects.subtitle}</p>

        <div className="projects__grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} lang={lang} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}

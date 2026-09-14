import { useReveal } from '../hooks/useReveal.js'
import { skills } from '../data/skills.js'

const ICONS = {
  languages: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  databases: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  frameworks: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
}

export default function Skills({ t }) {
  const ref = useReveal()

  return (
    <section id="skills" className="section">
      <div className="container reveal" ref={ref}>
        <h2 className="section__title">
          <span className="mono accent">02.</span> {t.skills.title}
        </h2>
        <p className="section__subtitle">{t.skills.subtitle}</p>

        <div className="skills__grid">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="card skill-card">
              <div className="skill-card__icon accent">{ICONS[group]}</div>
              <h3 className="skill-card__title">{t.skills.groups[group]}</h3>
              <ul className="skill-card__list">
                {items.map((item) => (
                  <li key={item} className="chip mono">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

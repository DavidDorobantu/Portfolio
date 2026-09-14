import { useReveal } from '../hooks/useReveal.js'

export default function About({ t }) {
  const ref = useReveal()

  return (
    <section id="about" className="section">
      <div className="container reveal" ref={ref}>
        <h2 className="section__title">
          <span className="mono accent">01.</span> {t.about.title}
        </h2>

        <div className="about__grid">
          <div className="about__text">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}

            <div className="about__education card">
              <p className="mono accent about__education-label">{t.about.educationTitle}</p>
              <p className="about__education-degree">{t.about.education}</p>
              <p className="about__education-period mono">{t.about.educationPeriod}</p>
            </div>
          </div>

          <div className="about__soft">
            <h3 className="about__soft-title">{t.about.softTitle}</h3>
            <ul className="about__soft-list">
              {t.about.soft.map((s) => (
                <li key={s.name} className="card soft-card">
                  <p className="soft-card__name">{s.name}</p>
                  <p className="soft-card__desc">{s.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

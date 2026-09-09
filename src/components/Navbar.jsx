import { useEffect, useState } from 'react'

const LINKS = ['about', 'skills', 'projects', 'contact']

export default function Navbar({ t, lang, onToggleLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">
        <a href="#top" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="mono accent">&lt;</span>DD
          <span className="mono accent">/&gt;</span>
        </a>

        <button
          className={`navbar__burger ${open ? 'is-open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar__menu ${open ? 'is-open' : ''}`}>
          <ul className="navbar__links">
            {LINKS.map((id, i) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)}>
                  <span className="mono accent">0{i + 1}.</span> {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <button className="lang-toggle mono" onClick={onToggleLang} aria-label="Switch language">
            <span className={lang === 'en' ? 'active' : ''}>EN</span>
            <span className="lang-toggle__sep">/</span>
            <span className={lang === 'it' ? 'active' : ''}>IT</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

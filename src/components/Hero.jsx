import { useEffect, useState } from 'react'
import { profile } from '../data/profile.js'

// Terminal-style typing effect cycling through the roles list.
function useTypewriter(words) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex % words.length]
    let delay = deleting ? 40 : 85

    if (!deleting && text === word) delay = 1800
    else if (deleting && text === '') delay = 350

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === '') {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words])

  // Reset cleanly when the language (and thus the words) changes
  useEffect(() => {
    setText('')
    setDeleting(false)
    setWordIndex(0)
  }, [words])

  return text
}

export default function Hero({ t }) {
  const typed = useTypewriter(t.hero.roles)

  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__content">
        <p className="hero__greeting mono accent">{t.hero.greeting}</p>
        <h1 className="hero__name">{profile.name}.</h1>
        <h2 className="hero__role" aria-live="polite">
          <span className="mono accent">&gt;_</span> {typed}
          <span className="hero__cursor" aria-hidden="true" />
        </h2>
        <p className="hero__tagline">{t.hero.tagline}</p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            {t.hero.ctaProjects}
          </a>
          <a href="#contact" className="btn btn--ghost">
            {t.hero.ctaContact}
          </a>
        </div>
      </div>
      <a href="#about" className="hero__scroll mono" aria-label={t.hero.scroll}>
        {t.hero.scroll}
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}

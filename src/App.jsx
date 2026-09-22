import { useState } from 'react'
import { translations } from './i18n.js'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'it') return saved
    return navigator.language?.startsWith('it') ? 'it' : 'en'
  })

  const toggleLang = () => {
    const next = lang === 'en' ? 'it' : 'en'
    setLang(next)
    localStorage.setItem('lang', next)
    document.documentElement.lang = next
  }

  const t = translations[lang]

  return (
    <>
      <Navbar t={t} lang={lang} onToggleLang={toggleLang} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Skills t={t} />
        <Projects t={t} lang={lang} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </>
  )
}

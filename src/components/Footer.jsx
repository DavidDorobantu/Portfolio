import { profile } from '../data/profile.js'

export default function Footer({ t }) {
  return (
    <footer className="footer">
      <p className="mono">
        © {new Date().getFullYear()} {profile.name} · {t.footer.built}
      </p>
    </footer>
  )
}

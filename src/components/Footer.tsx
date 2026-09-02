import EleviaLogo from './EleviaLogo'
import './Footer.css'

const BADGES = [
  { label: 'Saves Lives', icon: <path d="M12 21s-7.5-4.6-10-9.2C.6 8.5 2 5 5.4 5c2 0 3.4 1.1 4.1 2.3C10.2 6.1 11.6 5 13.6 5 17 5 18.4 8.5 22 11.8 19.5 16.4 12 21 12 21z" /> },
  { label: 'Protects Livelihoods', icon: <path d="M12 2 2 7v6c0 5.25 4.29 9.9 10 11 5.71-1.1 10-5.75 10-11V7zm0 4.8 5 2.5v3.7c0 3.35-2.5 6.5-5 7.4-2.5-.9-5-4.05-5-7.4V9.3z" /> },
  { label: 'Preserves Wildlife', icon: <path d="M12 2C7 2 3 6.5 3 11c0 4 2.7 7.4 6.4 8.6.4-.7.6-1.5.6-2.6v-2s-1.5 0-2-1c-.5-1 0-2 0-2s.5.5 1.5.5c0-1 1-2 1-2s-.8-2 .5-3.5C11.7 7.4 13 8 13 8s1-2 3-2c.3 1 0 2 0 2s2-.3 2 2c0 2-2 2-2 2s1 1 1 2.5S16 16 16 16v1c0 1.1.2 1.9.6 2.6C20.3 18.4 23 15 23 11c0-4.5-4-9-11-9z" /> },
]

const COMPANY_LINKS = [
  { label: 'About Elevia', href: '#about' },
  { label: 'Sentry-E', href: '#device' },
  { label: 'Why Sentry-E', href: '#why' },
  { label: 'Pilot Program', href: '#pilot' },
]

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__inner">
        <div className="footer__columns">
          <div className="footer__col footer__col--brand">
            <EleviaLogo size={26} />
            <p className="footer__quote">
              &ldquo;Technology that watches the ground,
              <br />
              so people can live in <em>peace</em>.&rdquo;
            </p>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Company</div>
            <ul className="footer__col-list">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <div className="footer__col-title">Get In Touch</div>
            <ul className="footer__col-list">
              <li>
                <a href="mailto:hello@elevia.in">hello@elevia.in</a>
              </li>
              <li className="footer__col-static">Nilgiris, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        <div className="footer__badges">
          {BADGES.map((b) => (
            <div className="footer__badge" key={b.label}>
              <svg className="footer__badge-icon" viewBox="0 0 24 24" aria-hidden="true">
                {b.icon}
              </svg>
              {b.label}
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <div className="footer__built">Built for the Nilgiris. By the community. For the community.</div>
          <div className="footer__copyright">&copy; {new Date().getFullYear()} Elevia. Forest. Nature. People.</div>
        </div>
      </div>
    </footer>
  )
}

import EleviaLogo from './EleviaLogo'
import './Footer.css'

const COMPANY_LINKS = [
  { label: 'Coming Soon', href: '#coming-soon' },
  { label: 'About', href: '#mission' },
  { label: 'Why Elevia', href: '#why-elevia' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__columns">
          <div className="footer__col footer__col--brand">
            <EleviaLogo size={26} />
            <p className="footer__quote">
              &ldquo;Built quietly.
              <br />
              Built to matter.&rdquo;
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
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__built">By the community. For the community.</div>
          <div className="footer__copyright">&copy; {new Date().getFullYear()} Elevia. Forest. Nature. People.</div>
        </div>
      </div>
    </footer>
  )
}

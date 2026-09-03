import EleviaLogo from './EleviaLogo'
import './Footer.css'

const COMPANY_LINKS = [
  { label: 'Coming Soon', href: '#coming-soon' },
  { label: 'About', href: '#mission' },
  { label: 'Why Elevia', href: '#why-elevia' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eleviaproductions/',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="2.5" />
        <path d="M7.8 10.2v6.2M7.8 7.6v.01" strokeLinecap="round" />
        <path d="M11.4 16.4v-3.6c0-1.4 1-2.4 2.3-2.4s2.1 1 2.1 2.4v3.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.4 10.2v6.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eleviaproductions/',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="3.6" />
        <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
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
                <a href="mailto:eleviaproductions@gmail.com">eleviaproductions@gmail.com</a>
              </li>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="footer__social-link">
                    {link.icon}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__built">By the community. For the community.</div>
          <div className="footer__copyright">&copy; {new Date().getFullYear()} Elevia. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

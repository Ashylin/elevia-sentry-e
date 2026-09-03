import { useState } from 'react'
import EleviaLogo from './EleviaLogo'
import './Nav.css'

const LINKS = [
  { href: '#coming-soon', label: 'Coming Soon' },
  { href: '#mission', label: 'About' },
  { href: '#why-elevia', label: 'Why Elevia' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav__inner">
        <EleviaLogo size={30} />

        <div className="nav__right nav__right--desktop">
          <nav className="nav__links nav__links--desktop">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav__auth">
            <button type="button" className="nav__login">
              Log In
            </button>
            <button type="button" className="nav__signup">
              Sign Up
            </button>
          </div>
        </div>

        <button
          type="button"
          className={`nav__toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav className={`nav__mobile${open ? ' is-open' : ''}`}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <div className="nav__auth nav__auth--mobile">
          <button type="button" className="nav__login">
            Log In
          </button>
          <button type="button" className="nav__signup">
            Sign Up
          </button>
        </div>
      </nav>
    </header>
  )
}

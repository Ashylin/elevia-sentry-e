import EleviaLogo from './EleviaLogo'
import './Nav.css'

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <EleviaLogo size={30} />
        <nav className="nav__links">
          <a href="#about">About</a>
          <a href="#device">Sentry-E</a>
          <a href="#why">Why Sentry-E</a>
          <a href="#pilot">Pilot</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

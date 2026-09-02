import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__pulse" aria-hidden="true">
        <span className="hero__pulse-ring hero__pulse-ring--a" />
        <span className="hero__pulse-ring hero__pulse-ring--b" />
        <span className="hero__pulse-ring hero__pulse-ring--c" />
        <span className="hero__pulse-core" />
      </div>

      <div className="hero__content">
        <h1 className="hero__title">ELEVIA</h1>
        <p className="hero__tagline">Forest. Nature. People.</p>
        <p className="hero__category">Safety, sensing, and early-warning technology.</p>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span />
        <span />
      </div>
    </section>
  )
}

import Scene from '../three/Scene'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="device">
      <div className="hero__canvas">
        <Scene />
      </div>

      <div className="hero__overlay">
        <div className="hero__eyebrow">Elephant Early-Warning Node</div>
        <h1 className="hero__title">SENTRY-E</h1>
        <p className="hero__tagline">Know they&rsquo;re coming. Before you meet them.</p>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span />
        <span />
      </div>
    </section>
  )
}

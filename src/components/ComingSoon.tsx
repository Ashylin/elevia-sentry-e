import './ComingSoon.css'

export default function ComingSoon() {
  return (
    <section className="coming-soon" id="coming-soon">
      <div className="coming-soon__inner">
        <div className="coming-soon__eyebrow">Coming Soon</div>
        <h2 className="coming-soon__title">Our first system is almost here.</h2>

        <div className="coming-soon__card" aria-hidden="true">
          <div className="coming-soon__card-glow" />
          <div className="coming-soon__card-grid" />
          <div className="coming-soon__lock">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6">
              <rect x="5" y="11" width="14" height="9" rx="2" />
              <path d="M8 11V7a4 4 0 0 1 8 0v4" />
            </svg>
          </div>
          <div className="coming-soon__reveal">Q_ 2026</div>
        </div>

        <p className="coming-soon__clue">&ldquo;It listens before you see it.&rdquo;</p>
      </div>
    </section>
  )
}

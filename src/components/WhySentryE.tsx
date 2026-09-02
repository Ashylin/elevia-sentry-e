import './WhySentryE.css'

const EXISTING = ['Camera detects', 'Sends data to cloud', 'Needs internet', 'Alert from control center', 'May not reach people in time']

const SENTRY = [
  'Ground vibration detected',
  'Edge AI processes locally',
  'No internet required',
  'Instant local warning',
  'People get time to move to safety',
]

export default function WhySentryE() {
  return (
    <section className="why" id="why">
      <div className="why__inner">
        <div className="why__eyebrow">Why Sentry-E Is Different</div>
        <h2 className="why__title">Built for places the network can&rsquo;t reach.</h2>

        <div className="why__grid">
          <div className="why__col why__col--existing">
            <div className="why__col-label">Existing Approach</div>
            <ul className="why__list">
              {EXISTING.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="why__vs" aria-hidden="true">
            VS
          </div>

          <div className="why__col why__col--sentry">
            <div className="why__col-label">Sentry-E Approach</div>
            <ul className="why__list">
              {SENTRY.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

import './Pilot.css'

const STEPS = [
  {
    label: '5–10 nodes',
    detail: 'Deployed across Nilgiris tea estates',
    icon: (
      <path d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    ),
  },
  {
    label: 'Real-world data',
    detail: 'Continuous ground-vibration collection',
    icon: <path d="M4 5c0-1.66 3.58-3 8-3s8 1.34 8 3-3.58 3-8 3-8-1.34-8-3zm0 3.5c1.9 1.15 4.84 1.5 8 1.5s6.1-.35 8-1.5V12c0 1.66-3.58 3-8 3s-8-1.34-8-3V8.5zm0 6.5c1.9 1.15 4.84 1.5 8 1.5s6.1-.35 8-1.5v3.5c0 1.66-3.58 3-8 3s-8-1.34-8-3V15z" />,
  },
  {
    label: 'Model training',
    detail: 'Validated against real footage & footfall',
    icon: (
      <path d="M12 3a4 4 0 0 0-4 4v.28A4 4 0 0 0 5 11a4 4 0 0 0 1 7.87V19a4 4 0 0 0 4 4h.5v-2.06A2 2 0 0 1 9 19v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-1.5 1.94V23H14a4 4 0 0 0 4-4v-.13A4 4 0 0 0 19 11a4 4 0 0 0-3-3.72V7a4 4 0 0 0-4-4z" />
    ),
  },
  {
    label: 'Detection testing',
    detail: 'Measuring range & accuracy in the field',
    icon: (
      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a5 5 0 1 1 5-5 5 5 0 0 1-5 5zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3z" />
    ),
  },
  {
    label: 'False alarm rate',
    detail: 'Tracked and driven down before scale',
    icon: (
      <path d="M3 17h2v-6H3zm4 0h2V7H7zm4 0h2V11h-2zm4 0h2V4h-2zm4 0h2v-9h-2z" />
    ),
  },
  {
    label: 'Prove it, then scale',
    detail: 'From pilot data to full deployment',
    icon: (
      <path d="M12 2 3 6v6c0 5.25 3.84 10.16 9 11 5.16-.84 9-5.75 9-11V6zm-1.2 13.4L6.6 11.2l1.4-1.4 2.8 2.8 5.6-5.6 1.4 1.4z" />
    ),
  },
]

export default function Pilot() {
  return (
    <section className="pilot" id="pilot">
      <div className="pilot__inner">
        <div className="pilot__eyebrow">₹3 Lakh Pilot Plan</div>
        <h2 className="pilot__title">Prove it in the field before we scale it.</h2>
        <p className="pilot__lede">
          A focused first deployment in the Nilgiris — enough nodes, enough real data, and a clear bar for
          detection accuracy — before Sentry-E goes anywhere near a wider rollout.
        </p>

        <ol className="pilot__grid">
          {STEPS.map((step, i) => (
            <li className="pilot__step" key={step.label}>
              <div className="pilot__step-top">
                <svg className="pilot__icon" viewBox="0 0 24 24" aria-hidden="true">
                  {step.icon}
                </svg>
                <span className="pilot__step-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="pilot__step-label">{step.label}</div>
              <div className="pilot__step-detail">{step.detail}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

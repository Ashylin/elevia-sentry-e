import { useInView } from '../hooks/useInView'
import VideoBackdrop from './VideoBackdrop'
import './Mission.css'

const PILLARS = [
  {
    title: 'Built for the edge',
    body: 'Decisions happen on the device itself. No dependency on a network or a cloud service that might not be there when it matters.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="2.4" fill="currentColor" />
        <circle cx="16" cy="16" r="7" stroke="currentColor" strokeWidth="1.3" opacity="0.55" />
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.1" opacity="0.28" />
      </svg>
    ),
  },
  {
    title: 'Community-first',
    body: "Built alongside the people who'll actually depend on it — not designed at a distance from the problem.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="14" r="4.6" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="21" cy="16.5" r="3.6" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8 24c0-3.4 2-5.6 4.4-5.6s4.4 2.2 4.4 5.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M17.5 24c0-2.7 1.7-4.7 3.7-4.7s3.7 2 3.7 4.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Engineered to be trusted',
    body: 'Proven in real, uncontrolled conditions before it ever ships — reliability is the whole point.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M16 5.5 25 9v7c0 6.2-4 9.6-9 11.5-5-1.9-9-5.3-9-11.5V9Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M12 16.2 15 19l5.5-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

function PillarCard({ pillar, index }: { pillar: (typeof PILLARS)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      className={`mission__pillar${inView ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${index * 110}ms` }}
      ref={ref}
    >
      <div className="mission__pillar-icon">{pillar.icon}</div>
      <div className="mission__pillar-title">{pillar.title}</div>
      <div className="mission__pillar-body">{pillar.body}</div>
    </div>
  )
}

export default function Mission() {
  const { ref: introRef, inView: introVisible } = useInView<HTMLDivElement>()

  return (
    <section className="mission" id="mission">
      <VideoBackdrop />
      <div className="mission__inner">
        <div className={`mission__intro${introVisible ? ' is-visible' : ''}`} ref={introRef}>
          <div className="mission__eyebrow">About Elevia</div>
          <h2 className="mission__title">Technology for the moments that matter most.</h2>
          <span className="mission__rule" aria-hidden="true" />
          <p className="mission__lede">
            We build sensing and early-warning technology for environments where the risk is real but the
            infrastructure isn&rsquo;t. Elevia&rsquo;s systems are designed to notice what&rsquo;s coming before it
            arrives — quietly, reliably, without needing a network that might not exist where it&rsquo;s deployed.
            It&rsquo;s a discipline we intend to carry well beyond our first system.
          </p>
        </div>

        <div className="mission__pillars">
          {PILLARS.map((p, i) => (
            <PillarCard pillar={p} index={i} key={p.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

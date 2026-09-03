import { useInView } from '../hooks/useInView'
import VideoBackdrop from './VideoBackdrop'
import './WhyElevia.css'

const VALUES = [
  {
    title: 'Offline by design',
    body: "Not “add connectivity later.” We start from the assumption that there isn't any, and build from there.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M6 6l20 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M10.5 15.2a10.4 10.4 0 0 1 5.6-2.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M20 13.6a10.4 10.4 0 0 1 3.6 2.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M6.6 11a15.6 15.6 0 0 1 6.4-3.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
        <path d="M23.4 9.3a15.6 15.6 0 0 1 2.7 1.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
        <circle cx="16" cy="23" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Proven before it ships',
    body: 'Field-tested in real, uncontrolled conditions — not demos. If it doesn’t hold up, it doesn’t launch.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <rect x="7" y="7" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11.5 16.5 14.8 19.8 21 12.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Built with, not for',
    body: 'Developed alongside the people who will actually depend on it, from the earliest versions onward.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M6 16.5l5.4 5c1 .9 2.5.9 3.4-.1l.4-.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M26 16l-5.4 5.5c-1 1-2.5 1-3.5 0l-4.4-4.4a2 2 0 0 1 0-2.8l4-4a2 2 0 0 1 2.8 0l1 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Quiet technology',
    body: 'It should disappear into the background — and be exactly where it needs to be the moment it matters.',
    icon: (
      <svg viewBox="0 0 32 32" fill="none">
        <path d="M6 18v-4M11 21v-10M16 24V8M21 21v-10M26 18v-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
]

function ValueCard({ value, index }: { value: (typeof VALUES)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div
      className={`why-elevia__card${inView ? ' is-visible' : ''}`}
      style={{ transitionDelay: `${index * 90}ms` }}
      ref={ref}
    >
      <div className="why-elevia__card-icon">{value.icon}</div>
      <div className="why-elevia__card-title">{value.title}</div>
      <div className="why-elevia__card-body">{value.body}</div>
    </div>
  )
}

export default function WhyElevia() {
  const { ref: introRef, inView: introVisible } = useInView<HTMLDivElement>()

  return (
    <section className="why-elevia" id="why-elevia">
      <VideoBackdrop />
      <div className="why-elevia__inner">
        <div className={`why-elevia__intro${introVisible ? ' is-visible' : ''}`} ref={introRef}>
          <div className="why-elevia__eyebrow">Why Elevia</div>
          <h2 className="why-elevia__title">We build for what happens when nothing else is watching.</h2>
        </div>

        <div className="why-elevia__grid">
          {VALUES.map((v, i) => (
            <ValueCard value={v} index={i} key={v.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

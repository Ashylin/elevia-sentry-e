import './About.css'

const PILLARS = [
  {
    title: 'Community-rooted',
    body: 'Built alongside the people who live with this problem every season — not designed at a distance from it.',
  },
  {
    title: 'Field-first',
    body: "Tested in the real conditions this technology has to survive. If it doesn't hold up in the field, it doesn't ship.",
  },
  {
    title: 'Built to work offline',
    body: 'No dependency on mobile networks or cloud connectivity — the places that need this most rarely have either.',
  },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        <div className="about__eyebrow">About Elevia</div>
        <h2 className="about__title">Forest. Nature. People.</h2>
        <p className="about__lede">
          Elevia builds low-cost, field-ready technology for people who share their land with wildlife. Sentry-E
          is the first system we&rsquo;re bringing to life — one part of a longer effort to make coexistence with
          wildlife safer, not just possible.
        </p>

        <div className="about__pillars">
          {PILLARS.map((p) => (
            <div className="about__pillar" key={p.title}>
              <div className="about__pillar-title">{p.title}</div>
              <div className="about__pillar-body">{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

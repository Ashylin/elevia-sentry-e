import './Mission.css'

const PILLARS = [
  {
    title: 'Built for the edge',
    body: 'Decisions happen on the device itself. No dependency on a network or a cloud service that might not be there when it matters.',
  },
  {
    title: 'Community-first',
    body: "Built alongside the people who'll actually depend on it — not designed at a distance from the problem.",
  },
  {
    title: 'Engineered to be trusted',
    body: 'Proven in real, uncontrolled conditions before it ever ships — reliability is the whole point.',
  },
]

export default function Mission() {
  return (
    <section className="mission" id="mission">
      <div className="mission__inner">
        <div className="mission__eyebrow">About Elevia</div>
        <h2 className="mission__title">Technology for the moments that matter most.</h2>
        <p className="mission__lede">
          We build sensing and early-warning technology for environments where the risk is real but the
          infrastructure isn&rsquo;t. Elevia&rsquo;s systems are designed to notice what&rsquo;s coming before it
          arrives — quietly, reliably, without needing a network that might not exist where it&rsquo;s deployed.
          It&rsquo;s a discipline we intend to carry well beyond our first system.
        </p>

        <div className="mission__pillars">
          {PILLARS.map((p) => (
            <div className="mission__pillar" key={p.title}>
              <div className="mission__pillar-title">{p.title}</div>
              <div className="mission__pillar-body">{p.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import './WhyElevia.css'

const VALUES = [
  {
    title: 'Offline by design',
    body: "Not “add connectivity later.” We start from the assumption that there isn't any, and build from there.",
  },
  {
    title: 'Proven before it ships',
    body: 'Field-tested in real, uncontrolled conditions — not demos. If it doesn’t hold up, it doesn’t launch.',
  },
  {
    title: 'Built with, not for',
    body: "Developed alongside the people who will actually depend on it, from the earliest versions onward.",
  },
  {
    title: 'Quiet technology',
    body: 'It should disappear into the background — and be exactly where it needs to be the moment it matters.',
  },
]

export default function WhyElevia() {
  return (
    <section className="why-elevia" id="why-elevia">
      <div className="why-elevia__inner">
        <div className="why-elevia__eyebrow">Why Elevia</div>
        <h2 className="why-elevia__title">We build for what happens when nothing else is watching.</h2>

        <div className="why-elevia__grid">
          {VALUES.map((v) => (
            <div className="why-elevia__card" key={v.title}>
              <div className="why-elevia__card-title">{v.title}</div>
              <div className="why-elevia__card-body">{v.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

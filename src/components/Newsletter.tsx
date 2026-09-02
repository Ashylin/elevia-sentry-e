import { useState, type FormEvent } from 'react'
import './Newsletter.css'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!email) return
    const subject = encodeURIComponent('Notify me at launch')
    const body = encodeURIComponent(`Please notify me when Elevia launches.\n\nEmail: ${email}`)
    window.location.href = `mailto:hello@elevia.in?subject=${subject}&body=${body}`
  }

  return (
    <section className="newsletter" id="contact">
      <div className="newsletter__inner">
        <div className="newsletter__eyebrow">Stay In The Loop</div>
        <h2 className="newsletter__title">Be first to know when we launch.</h2>
        <p className="newsletter__body">
          No spam, no noise — just one message when there&rsquo;s something real to see.
        </p>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            className="newsletter__input"
          />
          <button type="submit" className="newsletter__submit">
            Notify Me
          </button>
        </form>
      </div>
    </section>
  )
}

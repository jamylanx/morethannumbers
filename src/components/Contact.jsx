import { useState } from 'react'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'

const INITIAL = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle')
  const [errors, setErrors] = useState({})

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!form.message.trim()) next.message = 'Please enter a message.'
    return next
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('idle')
      return
    }

    setStatus('submitting')
    window.setTimeout(() => {
      setStatus('success')
      setForm(INITIAL)
    }, 600)
  }

  return (
    <section
      id="contact"
      className="bg-white py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <SectionHeading
              id="contact-heading"
              title="Get in Touch"
              subtitle="Share your story, request resources, or invite the campaign to your school or community."
            />
            <p className="mt-6 text-base leading-relaxed text-navy/65">
              Whether you are a student, parent, educator, or advocate—we would
              love to hear from you. Every message helps us grow a culture of
              support over comparison.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#promo-video"
                className="inline-flex items-center justify-center rounded-full bg-navy px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-navy/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Watch Promotional Video
              </a>
              <a
                href="#podcast"
                className="inline-flex items-center justify-center rounded-full border border-navy/20 px-8 py-3.5 text-sm font-medium text-navy transition-colors hover:border-accent hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Listen to Podcast
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            {status === 'success' ? (
              <div
                className="rounded-xl border border-accent/30 bg-soft-gray p-8 md:p-10"
                role="status"
              >
                <p className="font-heading text-xl font-semibold text-navy">
                  Thank you for reaching out.
                </p>
                <p className="mt-3 text-navy/70">
                  Your message has been received. We will get back to you as
                  soon as we can.
                </p>
                <button
                  type="button"
                  className="mt-6 text-sm font-medium text-accent hover:underline"
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-xl border border-navy/10 bg-soft-gray p-8 shadow-sm md:p-10"
                noValidate
              >
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-navy"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      className="mt-2 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-sm text-red-600">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-navy"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? 'email-error' : undefined
                      }
                      className="mt-2 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-navy"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? 'message-error' : undefined
                      }
                      className="mt-2 w-full resize-y rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                    {errors.message && (
                      <p
                        id="message-error"
                        className="mt-2 text-sm text-red-600"
                      >
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-8 w-full rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

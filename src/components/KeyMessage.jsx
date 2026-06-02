import ScrollReveal from './ScrollReveal'

const LINES = [
  'Grades matter.',
  'But they do not measure your worth.',
  'You are more than numbers.',
]

export default function KeyMessage() {
  return (
    <section
      id="message"
      className="bg-navy py-32 md:py-40"
      aria-labelledby="message-heading"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 id="message-heading" className="sr-only">
          Key Message
        </h2>
        <div className="space-y-8 md:space-y-12">
          {LINES.map((line, i) => (
            <ScrollReveal key={line} delay={i * 120}>
              <p
                className={`font-heading leading-snug tracking-tight text-white ${
                  i === LINES.length - 1
                    ? 'text-3xl font-semibold text-accent md:text-5xl lg:text-6xl'
                    : i === 0
                      ? 'text-2xl font-medium text-white/90 md:text-4xl'
                      : 'text-xl font-medium text-white/75 md:text-3xl lg:text-4xl'
                }`}
              >
                {line}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

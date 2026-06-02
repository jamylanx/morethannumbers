import { useEffect, useState } from 'react'

const GRADES = ['74', '78', '82', '88', '95']

export default function IntroAnimation({ onComplete }) {
  const [phase, setPhase] = useState('grades')
  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reducedMotion) {
      onComplete()
      return
    }

    document.body.style.overflow = 'hidden'

    const toTitle = setTimeout(() => setPhase('title'), 2200)
    const toExit = setTimeout(() => setPhase('exit'), 4200)
    const done = setTimeout(() => {
      document.body.style.overflow = ''
      onComplete()
    }, 5200)

    return () => {
      clearTimeout(toTitle)
      clearTimeout(toExit)
      clearTimeout(done)
      document.body.style.overflow = ''
    }
  }, [onComplete, reducedMotion])

  if (reducedMotion) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-navy transition-opacity duration-1000 ${
        phase === 'exit' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      role="presentation"
      aria-hidden="true"
    >
      <div className="relative flex min-h-[200px] items-center justify-center px-6">
        <div
          className={`absolute inset-0 flex flex-wrap items-center justify-center gap-6 transition-opacity duration-1000 md:gap-10 ${
            phase === 'grades' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {GRADES.map((grade) => (
            <span
              key={grade}
              className="font-heading text-4xl font-medium tracking-tight text-white/25 md:text-6xl lg:text-7xl"
            >
              {grade}
            </span>
          ))}
        </div>

        <h1
          className={`font-heading text-center text-3xl font-semibold uppercase tracking-[0.2em] text-white transition-all duration-1000 md:text-5xl lg:text-6xl ${
            phase === 'grades'
              ? 'scale-95 opacity-0'
              : 'scale-100 opacity-100'
          }`}
        >
          More Than Numbers
        </h1>
      </div>
    </div>
  )
}

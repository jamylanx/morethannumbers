import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#promo-video', label: 'Video' },
  { href: '#trailer', label: 'Trailer' },
  { href: '#film', label: 'Film' },
  { href: '#podcast', label: 'Podcast' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation({ visible }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [menuOpen])

  const handleNavClick = () => setMenuOpen(false)

  if (!visible) return null

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-navy/95 shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>

      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <a
          href="#hero"
          className="font-heading text-sm font-semibold uppercase tracking-widest text-white"
        >
          MTN
        </a>

        <ul className="hidden items-center gap-6 lg:flex xl:gap-8">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-white/80 transition-colors hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`border-t border-white/10 bg-navy lg:hidden ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block py-3 text-white/90 hover:text-accent"
                onClick={handleNavClick}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

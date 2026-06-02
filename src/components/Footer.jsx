export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-16 text-center">
      <div className="mx-auto max-w-2xl px-6">
        <p className="font-heading text-2xl font-semibold text-white md:text-3xl">
          More Than Numbers
        </p>
        <p className="mt-6 text-base leading-relaxed text-white/60 md:text-lg">
          Academic pressure exists in school and at home. Choose support over
          comparison.
        </p>
        <p className="mt-12 text-sm text-white/30">
          &copy; {new Date().getFullYear()} More Than Numbers Advocacy Campaign
        </p>
      </div>
    </footer>
  )
}

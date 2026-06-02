export default function SectionHeading({ id, title, subtitle, dark = false }) {
  return (
    <header className="mb-12 md:mb-16">
      <h2
        id={id}
        className={`font-heading text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl ${
          dark ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-lg leading-relaxed ${dark ? "text-white/70" : "text-navy/70"}`}>
          {subtitle}
        </p>
      )}
    </header>
  );
}

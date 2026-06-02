import { useScrollReveal } from '../hooks/useScrollReveal'

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}

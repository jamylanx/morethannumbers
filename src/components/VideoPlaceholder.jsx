export default function VideoPlaceholder({ title, label = 'Video placeholder' }) {
  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-xl bg-navy shadow-xl"
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-navy to-[#334155]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm">
          <svg
            className="ml-1 h-7 w-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p className="font-heading text-sm uppercase tracking-widest text-white/60">
          {title}
        </p>
        <p className="max-w-xs text-sm text-white/40">
          Replace with your embedded video when ready
        </p>
      </div>
    </div>
  )
}

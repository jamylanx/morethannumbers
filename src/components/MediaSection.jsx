import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import VideoEmbed from "./VideoEmbed";

export default function MediaSection({
  id,
  title,
  description,
  videoLabel,
  vimeoId,
  youtubeId,
  altBg = false,
}) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${altBg ? "bg-soft-gray" : "bg-white"}`}
      aria-labelledby={`${id}-heading`}
    >
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <SectionHeading id={`${id}-heading`} title={title} />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <VideoEmbed
            youtubeId={youtubeId || undefined}
            vimeoId={vimeoId || undefined}
            title={`${title} — More Than Numbers`}
            fallbackLabel={videoLabel}
          />
        </ScrollReveal>

        {description && (
          <ScrollReveal delay={250}>
            <p className="mt-8 text-center text-base text-navy/60 md:text-lg">{description}</p>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}

import { useState } from "react";
import { PROMO_VIDEO_FALLBACK, PROMO_VIDEO_SRC, PROMO_YOUTUBE_ID } from "../config/media";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import VideoEmbed from "./VideoEmbed";

export default function PromotionalVideo() {
  const [videoSrc, setVideoSrc] = useState(PROMO_VIDEO_SRC);

  const handleVideoError = () => {
    if (videoSrc !== PROMO_VIDEO_FALLBACK) {
      setVideoSrc(PROMO_VIDEO_FALLBACK);
    }
  };

  return (
    <section id="promo-video" className="bg-soft-gray py-24 md:py-32" aria-labelledby="promo-video-heading">
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="promo-video-heading"
            title="Motion Graphic"
            subtitle="Watch the official campaign intro feature and share the message with others."
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <VideoEmbed
            vimeoId="1197599389"
            title="More Than Numbers — promotional video"
            fallbackLabel="Promotional Video"
            onVideoError={handleVideoError}
          />
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <p className="mt-8 text-center text-base text-navy/60 md:text-lg">
            A glimpse into academic pressure at school and at home—and why support matters more than
            comparison.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

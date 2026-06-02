import { useState } from 'react'
import {
  PODCAST_AUDIO_FALLBACK,
  PODCAST_AUDIO_SRC,
} from '../config/media'
import ScrollReveal from './ScrollReveal'
import SectionHeading from './SectionHeading'

export default function Podcast() {
  const [audioError, setAudioError] = useState(false)
  const audioSrc = audioError ? PODCAST_AUDIO_FALLBACK : PODCAST_AUDIO_SRC

  return (
    <section
      id="podcast"
      className="bg-soft-gray py-24 md:py-32"
      aria-labelledby="podcast-heading"
    >
      <div className="mx-auto max-w-4xl px-6">
        <ScrollReveal>
          <SectionHeading
            id="podcast-heading"
            title="Podcast Episode"
            subtitle="The Pressure Behind the Grades"
          />
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="rounded-xl border border-navy/10 bg-white p-8 shadow-sm md:p-12">
            <p className="font-heading text-xl font-medium text-navy md:text-2xl">
              The Pressure Behind the Grades
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy/70 md:text-lg">
              A discussion about academic pressure, comparison, expectations,
              and support.
            </p>

            <div className="mt-8">
              <audio
                key={audioSrc}
                controls
                preload="metadata"
                className="w-full accent-accent"
                aria-label="Podcast episode: The Pressure Behind the Grades"
                onError={() => setAudioError(true)}
              >
                <source src={audioSrc} type="audio/mpeg" />
                <source
                  src={PODCAST_AUDIO_FALLBACK}
                  type="audio/mpeg"
                />
                Your browser does not support the audio element.
              </audio>
              <p className="mt-3 text-center text-sm text-navy/40">
                {audioError
                  ? 'Playing demo audio — add podcast.mp3 to /public for your episode'
                  : 'Add your episode as public/podcast.mp3 to replace the default track'}
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

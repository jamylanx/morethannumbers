/**
 * Replace these with your campaign assets.
 *
 * YouTube: paste only the video ID (the part after watch?v=).
 * Local files: place promo.mp4 and podcast.mp3 in the /public folder.
 */

/** Promotional / main campaign video (YouTube embed) */
export const PROMO_YOUTUBE_ID = ''

/** Fallback local promo video (served from /public) */
export const PROMO_VIDEO_SRC = '/promo.mp4'

/** Demo stream used when no YouTube ID and no local file yet */
export const PROMO_VIDEO_FALLBACK =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'

export const TRAILER_YOUTUBE_ID = ''
export const FILM_YOUTUBE_ID = ''

/** Podcast audio — use /podcast.mp3 in public when ready */
export const PODCAST_AUDIO_SRC = '/podcast.mp3'

/** Demo audio until you add your episode */
export const PODCAST_AUDIO_FALLBACK =
  'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3'

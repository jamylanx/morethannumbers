import VideoPlaceholder from "./VideoPlaceholder";

export default function VideoEmbed({
  youtubeId,
  vimeoId,
  src,
  title,
  fallbackLabel = "Video",
  onVideoError,
}) {
  if (youtubeId) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-navy shadow-xl">
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  if (vimeoId) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-navy shadow-xl">
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={`https://player.vimeo.com/video/${vimeoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      </div>
    );
  }

  if (src) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-navy shadow-xl">
        <video
          className="absolute inset-0 h-full w-full bg-black object-contain"
          controls
          playsInline
          preload="metadata"
          title={title}
          onError={onVideoError}
        >
          <source src={src} type="video/mp4" />
          <track kind="captions" label="English" />
          Your browser does not support embedded video.
        </video>
      </div>
    );
  }

  return <VideoPlaceholder title={fallbackLabel} label={`${title} placeholder`} />;
}

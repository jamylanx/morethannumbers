# More Than Numbers - Web Portfolio for Advance Multimedia

Advocacy campaign portfolio website — academic pressure, self-worth beyond grades.

## These are the required sections included

| Section | Location |
|--------|----------|
| Hero (headline + CTA) | `#hero` |
| Campaign description | `#about` |
| Embedded promotional video | `#promo-video` |
| Podcast + audio player | `#podcast` |
| Contact form / CTA | `#contact` |
| Responsive layout | All sections |

## Stack

- React + Vite
- Tailwind CSS v4

## Run locally

```bash
cd more-than-numbers
npm install
npm run dev
```

## Add your media

Edit `src/config/media.js`:

- **Promotional video:** Set `PROMO_YOUTUBE_ID` or add `public/promo.mp4`
- **Trailer / film:** Set `TRAILER_YOUTUBE_ID` and `FILM_YOUTUBE_ID`
- **Podcast:** Add `public/podcast.mp3`

## Production build

```bash
npm run build
npm run preview
```

## PS. Do check configuration files accordingly if your new to libraries and frameworks such as React.js and Tailwind CSS

/**
 * Portfolio projects data.
 * Each project can have media: youtube, soundcloud, video, audio, or image.
 */

window.PORTFOLIO_PROJECTS = [
  {
    id: '1',
    title: 'Feature Film — Main Title',
    description: 'Full orchestral main title and theme for dramatic feature. Recorded with live ensemble.',
    year: '2024',
    media: {
      type: 'youtube',
      id: 'dQw4w9WgXcQ',
    },
    thumbnail: 'assets/images/placeholder-1.jpg',
  },
  {
    id: '2',
    title: 'Documentary Series — Theme',
    description: 'Emotional theme for nature documentary series. Hybrid orchestral and ambient.',
    year: '2024',
    media: {
      type: 'soundcloud',
      url: 'https://soundcloud.com/example/track',
    },
    thumbnail: 'assets/images/placeholder-2.jpg',
  },
  {
    id: '3',
    title: 'Short Film — Score',
    description: 'Original score for award-winning short film. Minimal piano and strings.',
    year: '2023',
    media: {
      type: 'video',
      src: 'assets/videos/short-film-score.mp4',
      poster: 'assets/images/placeholder-3.jpg',
    },
    thumbnail: 'assets/images/placeholder-3.jpg',
  },
  {
    id: '4',
    title: 'Album — Single',
    description: 'Released single from original album. Available on streaming platforms.',
    year: '2023',
    media: {
      type: 'audio',
      src: 'assets/audio/sample-track.mp3',
    },
    thumbnail: 'assets/images/placeholder-4.jpg',
  },
  {
    id: '5',
    title: 'Game Trailer — Cinematic',
    description: 'Epic cinematic trailer music for AAA game announcement.',
    year: '2024',
    media: {
      type: 'youtube',
      id: 'jNQXAC9IVRw',
    },
    thumbnail: 'assets/images/placeholder-5.jpg',
  },
  {
    id: '6',
    title: 'Artwork & Concept',
    description: 'Visual and sonic concept for upcoming project.',
    year: '2024',
    media: {
      type: 'image',
      src: 'assets/images/placeholder-6.jpg',
      alt: 'Project concept artwork',
    },
    thumbnail: 'assets/images/placeholder-6.jpg',
  },
];

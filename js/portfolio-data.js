/**
 * Portfolio & site content data.
 * Edit this file to add projects and update copy. No HTML changes needed.
 */

window.PORTFOLIO_DATA = {
  site: {
    composerName: 'Your Name',
    subtitle: 'Composer for Games and Film',
    showreelYoutubeId: 'ega8_bnV1y8',
    soundcloudTracks: [
      { url: 'https://soundcloud.com/yourname/track1', title: 'Track One' },
      { url: 'https://soundcloud.com/yourname/track2', title: 'Track Two' },
      { url: 'https://soundcloud.com/yourname/track3', title: 'Track Three' },
      { url: 'https://soundcloud.com/yourname/track4', title: 'Track Four' },
      { url: 'https://soundcloud.com/yourname/track5', title: 'Track Five' },
    ],
    contactEmail: 'hello@yourname.com',
    testimonials: [
      { quote: 'An exceptional composer who brought our game world to life. The score elevated every scene.', author: 'Creative Director, Studio Name', project: 'Game Title' },
      { quote: 'Working with them was seamless. The music captured exactly what we envisioned for the film.', author: 'Director, Film Title' },
      { quote: 'Professional, responsive, and incredibly talented. We will definitely work together again.', author: 'Producer' },
    ],
    aboutPreview: 'Composer for video games and film. I create immersive, narrative-driven music that supports story and emotion—from full orchestral scores to intimate electronic palettes.',
  },

  featuredProjects: [
    { id: 'fp1', title: 'Clear Time', description: 'Original score for narrative feature. Orchestral and electronic palette.', thumbnail: 'assets/images/placeholder-1.jpg', year: '2024', media: { type: 'youtube', id: 'ega8_bnV1y8' } },
    { id: 'fp2', title: 'Documentary Theme', description: 'Main title and themes for documentary series.', thumbnail: 'assets/images/placeholder-2.jpg', year: '2024', media: { type: 'youtube', id: 'QQdWO4iiNWA' } },
    { id: 'fp3', title: 'Game Trailer', description: 'Cinematic trailer music for AAA game announcement.', thumbnail: 'assets/images/placeholder-3.jpg', year: '2024', media: { type: 'youtube', id: 'jNQXAC9IVRw' } },
  ],

  gameProjects: [
    { id: 'g1', title: 'Game Title — Main Theme', description: 'Full score for narrative-driven game. Orchestral and adaptive music.', thumbnail: 'assets/images/placeholder-1.jpg', year: '2024', media: { type: 'youtube', id: 'ega8_bnV1y8' } },
    { id: 'g2', title: 'Indie Game — Soundtrack', description: 'Original soundtrack and in-game music implementation.', thumbnail: 'assets/images/placeholder-2.jpg', year: '2023', media: { type: 'audio', src: 'assets/audio/sample.mp3' } },
  ],

  filmVisualMedia: [
    { id: 'f1', title: 'Short Film — Score', description: 'Original score for award-winning short film.', thumbnail: 'assets/images/placeholder-3.jpg', year: '2023', media: { type: 'youtube', id: 'QQdWO4iiNWA' } },
    { id: 'f2', title: 'Documentary — Theme', description: 'Main theme and underscore for documentary series.', thumbnail: 'assets/images/placeholder-4.jpg', year: '2023', media: { type: 'youtube', id: 'jNQXAC9IVRw' } },
  ],

  gameAudioSoundDesign: [
    { id: 's1', title: 'Sound Design Reel', description: 'UI, ambience, and interactive audio design.', thumbnail: 'assets/images/placeholder-5.jpg', year: '2024', media: { type: 'youtube', id: 'ega8_bnV1y8' } },
    { id: 's2', title: 'Foley & SFX', description: 'Custom foley and sound effects for game cinematics.', thumbnail: 'assets/images/placeholder-6.jpg', year: '2023', media: { type: 'audio', src: 'assets/audio/sample.mp3' } },
  ],

  music: [
    { id: 'm1', title: 'Single Release', description: 'Released single from original album.', thumbnail: 'assets/images/placeholder-1.jpg', year: '2024', media: { type: 'soundcloud', url: 'https://soundcloud.com/yourname/track1' } },
    { id: 'm2', title: 'Album Track', description: 'Featured on streaming platforms.', thumbnail: 'assets/images/placeholder-2.jpg', year: '2023', media: { type: 'youtube', id: 'jNQXAC9IVRw' } },
    { id: 'm3', title: 'Spotify Single', description: 'Listen on Spotify and other platforms.', thumbnail: 'assets/images/placeholder-3.jpg', year: '2024', media: { type: 'spotify', url: 'https://open.spotify.com/track/EXAMPLE' } },
  ],
};

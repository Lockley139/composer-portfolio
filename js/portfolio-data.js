/**
 * Portfolio & site content data.
 * Edit this file to add projects and update copy. No HTML changes needed.
 */

window.PORTFOLIO_DATA = {
  site: {
    composerName: 'Jake Lockley',
    subtitle: 'Composer for Games and Film',
    showreelYoutubeId: 'ega8_bnV1y8',
    soundcloudTracks: [
      { url: 'https://soundcloud.com/jake_lockley/the-temple', title: 'The Temple' },
      { url: 'https://soundcloud.com/jake_lockley/2-the-gods-2', title: 'The Gods' },
      { url: 'https://soundcloud.com/jake_lockley/into-eden', title: 'Into Eden' },
      { url: 'https://soundcloud.com/jake_lockley/in-bloom', title: 'In Bloom' },
      { url: 'https://soundcloud.com/jake_lockley/4-floating-4', title: 'Floating' },
    ],
    contactEmail: 'lockey13@gmail.com',
    testimonials: [
      { quote: "I was completely blown away from our first meeting. He cares deeply, not just about his own work, but yours too. He was a key component in helping me to tell the story. Jake is passionate, responsive, professional, and a pleasure to work with. I'm excited to follow what will be undoubtedly successful career in the future", author: 'Short Film', project: 'REM'},
      { quote: "His talent and passion blew me away. Jake's music perfectly captured the essence of the film. His compositions added depth and brought the story to life. Working with Jake was a pleasure. He was professional, responsive, and always delivered on time. He welcomed feedback and made adjustments to ensure the music perfectly matched the vision. Don't miss the opportunity to work with him!", author: 'Chrunchit Trailer' },
      { quote: "Jake's work was interesting, orignal and of extremely high professional quality. Jake delivered above and beyond. I am wholly greateful for jake's input in my design and cannot recommend him enough.", author: 'Sound Design, Royal Academy of Dramatic Arts (RADA)' },
      { quote: 'Not only did he execute exceptionally well the peice he composed for me, he also competed this in the lack of time i gave him. Jake is clearly very talented, adding fantastic depth and tone to the project. He is extremely easy to work with and efficient with whatever task was thrown his way.', author: 'Chrunchit Trailer' },
    ],
    aboutPreview: "Composer for video games and film. I will always aim to create what serves the story. Using my multi-instrumentalist approach, my goals is to create sounds that elevate the picture beyond just visual! Where words fall short, music doesn't. ", 
  },

  featuredProjects: [
    { id: 'fp1', title: 'REM', description: 'Original score for short story feature. Orchestral and electronic palette.', thumbnail: 'assets/images/placeholder-1.jpg', year: '2024', media: { type: 'youtube', id: 'FIupIfhslEM' } },
    { id: 'fp3', title: 'Documentary Trailer Sequence', description: 'Cinematic documentary music.', thumbnail: 'assets/images/placeholder-3.jpg', year: '2024', media: { type: 'youtube', id: '7t0BQfwRgjs' } },
  ],

  gameProjects: [
    { id: 'g1', title: 'Game Trailer Sequence', description: "Game Trailer Sequence for 'Sink Again'.", thumbnail: 'assets/images/placeholder-1.jpg', year: '2024', media: { type: 'youtube', id: 'XO-luNjuzoI' } },
    { id: 'g2', title: 'Test', description: 'Test', thumbnail: 'assets/images/placeholder-2.jpg', year: '2023', media: { type: 'youtube', id: 'XxMphQaNnP8' } },
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

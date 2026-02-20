/**
 * Portfolio - Project modals with YouTube, SoundCloud, Spotify, video, audio, images, gallery
 */

(function () {
  'use strict';

  var modal = document.getElementById('project-modal');
  var modalBackdrop = document.getElementById('modal-backdrop');
  var modalClose = document.getElementById('modal-close');
  var modalBody = document.getElementById('modal-body');

  if (!modal || !modalBody) return;

  function openModal(project) {
    if (!project) return;
    modalBody.innerHTML = renderProjectContent(project);
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (modalClose) modalClose.focus();
    window._currentModalMedia = modalBody.querySelectorAll('video, audio');
  }

  function closeModal() {
    if (window._currentModalMedia && window._currentModalMedia.length) {
      window._currentModalMedia.forEach(function (el) { el.pause(); });
    }
    window._currentModalMedia = null;
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    modalBody.innerHTML = '';
  }

  function escapeHtml(str) {
    if (str == null) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function extractYouTubeId(value) {
    if (!value) return '';
    value = String(value).trim();
    var match = value.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : value;
  }

  function normalizeSoundCloudUrl(url) {
    if (!url) return '';
    url = String(url).trim();
    if (url.indexOf('w.soundcloud.com') !== -1) return url;
    var match = url.match(/soundcloud\.com\/([^/?#]+\/[^/?#]+)/);
    if (match) return 'https://w.soundcloud.com/player/?url=https://soundcloud.com/' + match[1] + '&color=ffffff&auto_play=false&hide_related=true&show_comments=false';
    return url;
  }

  function normalizeSpotifyEmbedUrl(url) {
    if (!url) return '';
    url = String(url).trim();
    var match = url.match(/(?:open\.)?spotify\.com\/(?:embed\/)?(track|album|playlist)\/([a-zA-Z0-9]+)/);
    if (match) return 'https://open.spotify.com/embed/' + match[1] + '/' + match[2] + '?utm_source=generator';
    return url;
  }

  function renderMediaItem(m) {
    if (!m || !m.type) return '';
    if (m.type === 'youtube' && m.id) {
      var id = escapeHtml(extractYouTubeId(m.id));
      return '<div class="embed-video relative w-full overflow-hidden rounded-lg bg-black"><iframe src="https://www.youtube-nocookie.com/embed/' + id + '?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div>';
    }
    if (m.type === 'soundcloud' && m.url) {
      return '<div class="embed-video relative w-full overflow-hidden rounded-lg"><iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="' + escapeHtml(normalizeSoundCloudUrl(m.url)) + '"></iframe></div>';
    }
    if (m.type === 'spotify' && m.url) {
      var spotifySrc = normalizeSpotifyEmbedUrl(m.url);
      if (spotifySrc) return '<div class="rounded-lg overflow-hidden"><iframe style="border-radius:12px" width="100%" height="152" frameBorder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" src="' + escapeHtml(spotifySrc) + '"></iframe></div>';
    }
    if (m.type === 'video' && m.src) {
      var poster = m.poster ? ' poster="' + escapeHtml(m.poster) + '"' : '';
      return '<div class="embed-video relative w-full overflow-hidden rounded-lg bg-black"><video class="w-full h-full object-contain" controls' + poster + '><source src="' + escapeHtml(m.src) + '" type="video/mp4">Your browser does not support video.</video></div>';
    }
    if (m.type === 'audio' && m.src) {
      return '<div class="audio-player-wrap"><audio class="w-full" controls preload="metadata"><source src="' + escapeHtml(m.src) + '" type="audio/mpeg">Your browser does not support audio.</audio></div>';
    }
    if (m.type === 'image' && m.src) {
      var alt = (m.alt != null) ? escapeHtml(m.alt) : '';
      return '<div class="rounded-lg overflow-hidden"><img src="' + escapeHtml(m.src) + '" alt="' + alt + '" class="w-full h-auto object-contain" /></div>';
    }
    return '';
  }

  function renderProjectContent(project) {
    var title = escapeHtml(project.title || 'Project');
    var description = escapeHtml(project.description || '');
    var parts = [];

    var mediaList = project.media ? (Array.isArray(project.media) ? project.media : [project.media]) : [];
    mediaList.forEach(function (m) {
      var html = renderMediaItem(m);
      if (html) parts.push(html);
    });

    if (project.gallery && project.gallery.length) {
      parts.push('<div class="grid grid-cols-2 gap-4">');
      project.gallery.forEach(function (img) {
        parts.push('<div class="rounded-lg overflow-hidden"><img src="' + escapeHtml(img.src) + '" alt="' + escapeHtml(img.alt || '') + '" class="w-full h-auto object-cover" /></div>');
      });
      parts.push('</div>');
    }

    var mediaBlock = parts.length ? '<div class="space-y-6">' + parts.join('') + '</div>' : '';
    return '<div class="space-y-6">' +
      (mediaBlock ? '<div class="flex-shrink-0">' + mediaBlock + '</div>' : '') +
      '<div><h2 class="font-display text-3xl md:text-4xl font-medium text-white mb-4">' + title + '</h2>' +
      (description ? '<p class="text-gray-400 leading-relaxed">' + description + '</p>' : '') +
      '</div></div>';
  }

  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });

  window.openProject = openModal;
})();

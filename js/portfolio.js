/**
 * Portfolio - Project grid and modal with YouTube, SoundCloud, video, audio, images
 */

(function () {
  'use strict';

  const modal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');
  const modalBody = document.getElementById('modal-body');

  if (!modal || !modalBody) return;

  function openModal(project) {
    if (!project) return;
    // Build content based on project.media type
    modalBody.innerHTML = renderProjectContent(project);
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Focus trap
    if (modalClose) modalClose.focus();
    // Pause any video/audio when closing later
    window._currentModalMedia = modalBody.querySelector('video, audio');
  }

  function closeModal() {
    if (window._currentModalMedia) {
      window._currentModalMedia.pause();
      window._currentModalMedia = null;
    }
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    modalBody.innerHTML = '';
  }

  function renderProjectContent(project) {
    const title = escapeHtml(project.title || 'Project');
    const description = escapeHtml(project.description || '');
    let mediaHtml = '';

    if (project.media) {
      const m = project.media;
      if (m.type === 'youtube' && m.id) {
        mediaHtml =
          '<div class="embed-video relative w-full overflow-hidden rounded-lg bg-black">' +
          '<iframe src="https://www.youtube.com/embed/' +
          escapeHtml(m.id) +
          '?autoplay=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' +
          '</div>';
      } else if (m.type === 'soundcloud' && m.url) {
        mediaHtml =
          '<div class="embed-video relative w-full overflow-hidden rounded-lg">' +
          '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="' +
          escapeHtml(normalizeSoundCloudUrl(m.url)) +
          '"></iframe>' +
          '</div>';
      } else if (m.type === 'video' && m.src) {
        const src = escapeHtml(m.src);
        const poster = m.poster ? ' poster="' + escapeHtml(m.poster) + '"' : '';
        mediaHtml =
          '<div class="embed-video relative w-full overflow-hidden rounded-lg bg-black">' +
          '<video class="w-full h-full object-contain" controls' +
          poster +
          '><source src="' +
          src +
          '" type="video/mp4">Your browser does not support the video tag.</video>' +
          '</div>';
      } else if (m.type === 'audio' && m.src) {
        const src = escapeHtml(m.src);
        mediaHtml =
          '<div class="audio-player-wrap mt-2">' +
          '<audio class="w-full" controls preload="metadata"><source src="' +
          src +
          '" type="audio/mpeg">Your browser does not support the audio tag.</audio>' +
          '</div>';
      } else if (m.type === 'image' && m.src) {
        const src = escapeHtml(m.src);
        const alt = m.alt ? escapeHtml(m.alt) : title;
        mediaHtml = '<div class="rounded-lg overflow-hidden"><img src="' + src + '" alt="' + alt + '" class="w-full h-auto object-contain" /></div>';
      }
    }

    return (
      '<div class="space-y-6">' +
      (mediaHtml ? '<div class="flex-shrink-0">' + mediaHtml + '</div>' : '') +
      '<div><h2 class="font-display text-3xl md:text-4xl font-medium text-white mb-4">' +
      title +
      '</h2>' +
      (description ? '<p class="text-gray-400 leading-relaxed">' + description + '</p>' : '') +
      '</div></div>'
    );
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  function normalizeSoundCloudUrl(url) {
    if (!url) return '';
    url = url.trim();
    if (url.indexOf('api.soundcloud.com') !== -1) return url;
    // Convert widget URL to embed API URL if needed
    var match = url.match(/soundcloud\.com\/([^/]+\/[^/]+)/);
    if (match) {
      return 'https://w.soundcloud.com/player/?url=https://soundcloud.com/' + match[1] + '&color=ffffff&auto_play=false&hide_related=true&show_comments=false';
    }
    return url;
  }

  // Close on backdrop click or close button
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  if (modalClose) modalClose.addEventListener('click', closeModal);

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
  });

  // Expose for card clicks: window.openProject(project)
  window.openProject = openModal;
})();

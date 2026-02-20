/**
 * Composer Portfolio - Main JavaScript
 * Navigation, smooth scroll, hero, and shared UI behavior
 */

(function () {
  'use strict';

  // --- Smooth scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isHidden = navMenu.classList.toggle('hidden');
      navMenu.classList.toggle('flex', !isHidden);
      navToggle.setAttribute('aria-expanded', isHidden ? 'false' : 'true');
    });
  }

  // --- Hero: pause video when not in view (optional, for performance) ---
  const heroVideo = document.getElementById('hero-video');
  if (heroVideo && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            heroVideo.play().catch(function () {});
          } else {
            heroVideo.pause();
          }
        });
      },
      { threshold: 0.25, rootMargin: '0px' }
    );
    observer.observe(heroVideo);
  }

  // --- Scroll-triggered fade-in ---
  const fadeElements = document.querySelectorAll('.fade-in-up');
  if (fadeElements.length && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    fadeElements.forEach(function (el) {
      fadeObserver.observe(el);
    });
  }

  // --- Navbar background on scroll ---
  const header = document.getElementById('site-header');
  if (header) {
    var lastScroll = 0;
    function onScroll() {
      const scrollY = window.scrollY;
      if (scrollY > 80) {
        header.classList.add('bg-black/90', 'backdrop-blur-sm');
      } else {
        header.classList.remove('bg-black/90', 'backdrop-blur-sm');
      }
      lastScroll = scrollY;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();

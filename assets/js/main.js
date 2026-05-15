(function () {
  'use strict';

  // Mobile nav toggle
  const toggle = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.classList.toggle('open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.setAttribute('aria-expanded', 'false');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Header scroll state
  const header = document.getElementById('header');
  let lastScroll = 0;

  function onScroll() {
    const y = window.scrollY || window.pageYOffset;
    if (y > 10) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

(function () {
  'use strict';

  function init() {
    // Mobile nav toggle
    var toggle = document.querySelector('.menu-toggle');
    var mobileNav = document.getElementById('mobile-nav');
    var main = document.getElementById('main');
    var footer = document.querySelector('.footer');

    if (toggle && mobileNav) {
      function setMenuOpen(isOpen) {
        toggle.setAttribute('aria-expanded', String(isOpen));
        mobileNav.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';

        if (main) main.inert = isOpen;
        if (footer) footer.inert = isOpen;

        if (isOpen) {
          var firstLink = mobileNav.querySelector('a');
          if (firstLink) firstLink.focus();
        }
      }

      toggle.addEventListener('click', function () {
        var isOpen = toggle.getAttribute('aria-expanded') === 'true';
        setMenuOpen(!isOpen);
      });

      // Close mobile nav on link click
      mobileNav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          setMenuOpen(false);
        });
      });

      // Close on Escape key
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
          setMenuOpen(false);
          toggle.focus();
        }
      });

      // Auto-close menu when resizing to desktop
      window.addEventListener('resize', function () {
        if (window.innerWidth >= 1024 && toggle.getAttribute('aria-expanded') === 'true') {
          setMenuOpen(false);
        }
      });
    }

    // Header scroll state
    var header = document.getElementById('header');

    function onScroll() {
      var y = window.scrollY || window.pageYOffset;
      if (y > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

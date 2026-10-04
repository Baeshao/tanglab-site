(function () {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (navToggle && siteNav) {
    const closeNav = () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    };

    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeNav();
    });
  }

  const year = document.querySelector('[data-current-year]');
  if (year) year.textContent = String(new Date().getFullYear());

  document.querySelectorAll('img[data-fallback-src]').forEach((img) => {
    const useFallback = () => {
      const fallback = img.getAttribute('data-fallback-src');
      if (!fallback || img.src.endsWith(fallback)) return;
      img.src = fallback;
      img.removeAttribute('data-fallback-src');
    };

    img.addEventListener('error', useFallback, { once: true });
    if (img.complete && img.naturalWidth === 0) useFallback();
  });

  const buttons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('[data-topic]');


  const gallery = document.querySelector('.group-photo-gallery[data-gallery-source]');
  const lightbox = document.querySelector('.photo-lightbox');

  if (gallery && lightbox) {
    const lightboxImage = lightbox.querySelector('img');
    const closeButton = lightbox.querySelector('.photo-lightbox-close');

    const bindPhoto = (link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const source = link.getAttribute('data-full-image') || link.getAttribute('href');
        if (!source || !lightboxImage) return;
        lightboxImage.src = source;
        lightbox.showModal();
      });
    };

    gallery.querySelectorAll('.group-photo-thumb').forEach(bindPhoto);

    const source = gallery.getAttribute('data-gallery-source');
    if (source) {
      fetch(source)
        .then((response) => response.ok ? response.json() : [])
        .then((photos) => {
          if (!Array.isArray(photos) || photos.length === 0) return;
          gallery.replaceChildren();
          photos.forEach((photo, index) => {
            if (!photo || !photo.src) return;
            const link = document.createElement('a');
            link.className = 'group-photo-thumb';
            link.href = photo.src;
            link.setAttribute('data-full-image', photo.src);

            const img = document.createElement('img');
            img.src = photo.thumb || photo.src;
            img.alt = photo.alt || `Tang Lab group photo ${index + 1}`;
            img.loading = 'lazy';

            link.appendChild(img);
            gallery.appendChild(link);
            bindPhoto(link);
          });
        })
        .catch(() => {});
    }

    if (closeButton) closeButton.addEventListener('click', () => lightbox.close());
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) lightbox.close();
    });
    lightbox.addEventListener('close', () => {
      if (lightboxImage) lightboxImage.src = '';
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      buttons.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      items.forEach((item) => {
        const topics = (item.getAttribute('data-topic') || '').split(' ');
        item.hidden = filter !== 'all' && !topics.includes(filter);
      });
    });
  });
})();

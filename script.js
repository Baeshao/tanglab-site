(function () {
  const brandStyle = document.createElement('style');
  brandStyle.textContent = `
    .brand {
      min-height: 60px;
      padding-left: 76px;
    }
    .brand::before {
      width: 60px;
      height: 60px;
      background-image: url("assets/logo/tang-lab-logo-transparent.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
    @media (max-width: 760px) {
      .brand {
        padding-left: 60px;
        min-height: 48px;
      }
      .brand::before {
        width: 48px;
        height: 48px;
      }
    }
  `;
  document.head.appendChild(brandStyle);

  const favicon = document.querySelector('link[rel~="icon"]');
  if (favicon) {
    favicon.href = 'assets/logo/tang-lab-favicon.png';
    favicon.type = 'image/png';
  }

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

  const buttons = document.querySelectorAll('[data-filter]');
  const items = document.querySelectorAll('[data-topic]');

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
